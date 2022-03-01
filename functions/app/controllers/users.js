const { httpError } = require("../helpers/handleErrors");
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
            res.status(404).json({
                error: "Not product list",
            });
        } else {
            const response = querySnapshot.docs.map((doc) => ({
                ...doc.data(),
                product_added: doc.updateTime.toDate().toLocaleDateString(),
            }));
            res.status(200).json(response);
        }
    } catch (error) {
        httpError(res, error);
    }
};

const createUserProducts = async (req, res) => {
    try {
        await query
            .doc(req.params.user_id)
            .collection("userProducts")
            .add({ ...req.body });
        res.status(201).json();
    } catch (error) {
        httpError(res, error);
    }
};

module.exports = {
    getUsers,
    getUser,
    createUser,
    getUserProducts,
    createUserProducts,
};
