const { httpError } = require("../helpers/handleErrors");
const { FieldValue } = require("@google-cloud/firestore");
const admin = require("firebase-admin");
const db = admin.firestore();
const query = db.collection("users");

const getUsers = async (req, res) => {
    try {
        const querySnapshot = await query.get();
        const response = querySnapshot.docs.map((doc) => ({
            user_id: doc.id,
            name: doc.data().name,
            created_on: doc.createTime.toDate().toLocaleDateString(),
        }));
        res.status(200).json(response);
    } catch (error) {
        httpError(res, error);
    }
};

const getUser = async (req, res) => {
    try {
        const queryUser = query.doc(req.params.id);
        const doc = await queryUser.get();
        if (!doc.exists) {
            res.status(404).send("Not found");
        } else {
            const item = {
                user_id: doc.id,
                name: doc.data().name,
                create_on: doc.createTime.toDate().toLocaleDateString(),
            };
            res.status(200).json(item);
        }
    } catch (error) {
        httpError(res, error);
    }
};

const createUser = async (req, res) => {
    try {
        const { user_id, name } = req.body;

        const propertiesUser = query.doc(user_id);
        const doc = await propertiesUser.get();
        if (!doc.exists) {
            const batch = db.batch();
            batch.set(propertiesUser, { name: name });

            const createCollectionProducts = propertiesUser
                .collection("userProducts")
                .doc();
            batch.set(createCollectionProducts, { user_id: user_id });

            const createCollectionFavorite = propertiesUser
                .collection("favoriteRecipes")
                .doc();
            batch.set(createCollectionFavorite, { user_id: user_id });

            await batch.commit();
            res.status(201).send();
        } else {
            res.status(409).send("User already exists");
        }
    } catch (error) {
        httpError(res, error);
    }
};

const getUserProducts = async (req, res) => {
    const type = req.params.type || "";
    try {
        const queryUser = query
            .doc(req.params.user_id)
            .collection("userProducts");
        let querySnapshot = await (type
            ? queryUser.where("type", "==", type)
            : queryUser.where("type", "!=", type)
        ).get();
        if (querySnapshot.empty) {
            res.status(404).send("Not product list");
        } else {
            const response = querySnapshot.docs.map((doc) => ({
                ...doc.data(),
            }));
            res.status(200).json(response);
        }
    } catch (error) {
        httpError(res, error);
    }
};

const createUserProducts = async (req, res) => {
    try {
        const { name, images, type, quantity } = req.body;
        const doc = await productExist(req.params.user_id, name);
        const currentDate = new Date();
        if (doc.empty) {
            await query
                .doc(req.params.user_id)
                .collection("userProducts")
                .add({
                    name: name,
                    images: images,
                    type: type,
                    quantity: FieldValue.increment(quantity),
                    product_added_last: "",
                    product_added_now: currentDate.toLocaleDateString(),
                });
            res.status(201).json();
        } else {
            res.status(409).json({content: "Product already exists"});
        }
    } catch (error) {
        httpError(res, error);
    }
};

const updateUserProducts = async (req, res) => {
    try {
        const { name, quantity, operation } = req.body;
        const quantityNumber = parseFloat(quantity);
        const doc = await productExist(req.params.user_id, name);
        const currentDate = new Date();
        if (doc.empty) {
            res.status(404).send("The product does not exist");
        } else {
            const itemFirebase = doc.docs.map((item) => ({
                id: item.id,
                product_added_last: item.data().product_added_now,
            }));
            const response = query
                .doc(req.params.user_id)
                .collection("userProducts")
                .doc(itemFirebase[0].id);
            if (operation === "increment") {
                await response.update({
                    quantity: FieldValue.increment(quantityNumber),
                    product_added_last: itemFirebase[0].product_added_last,
                    product_added_now: currentDate.toLocaleDateString(),
                });
            } else if (operation === "decrease") {
                await response.update({
                    quantity: FieldValue.increment(-quantityNumber),
                });
            } else {
                res.status(400).json({content: "Invalid operation"});
            }
            res.status(201).json();
        }
    } catch (e) {
        httpError(res, e);
    }
};

const deleteUserProducts = async (req, res) => {
    try {
        const { name } = req.body;
        const doc = await productExist(req.params.user_id, name);
        if (doc.empty) {
            res.status(404).send("The product does not exist");
        } else {
            const idFirebase = doc.docs.map((item) => ({
                id: item.id,
            }));
            await query
                .doc(req.params.user_id)
                .collection("userProducts")
                .doc(idFirebase[0].id)
                .delete();
            res.status(204).send();
        }
    } catch (error) {
        httpError(res, error);
    }
};

async function productExist(user_id, name) {
    return query
        .doc(user_id)
        .collection("userProducts")
        .where("name", "==", name)
        .get();
}
module.exports = {
    getUsers,
    getUser,
    createUser,
    getUserProducts,
    createUserProducts,
    updateUserProducts,
    deleteUserProducts,
};
