const { httpError } = require("../helpers/handleErrors");
const admin = require("firebase-admin");
const db = admin.firestore();

const query = db.collection("products");

const getProducts = async (req, res) => {
    try {
        const querySnapshot = await db.collectionGroup("listProducts").get();
        let response = [];
        let ids = new Set();
        querySnapshot.forEach((doc) => {
            ids.add(doc.ref.path.split("/")[1]);
        });
        ids.forEach((element) => {
            let aux = { type: element, products: [] };
            querySnapshot.forEach((doc) => {
                let products = {
                    name: doc.data().name,
                    images: doc.data().images,
                };
                if (element == doc.ref.path.split("/")[1]) {
                    aux.products.push(products);
                }
            });
            response.push(aux);
        });
        res.status(200).json(response);
    } catch (error) {
        httpError(res, error);
    }
};

const getProductsByType = async (req, res) => {
    try {
        const querySnapshot = await query
            .doc(req.params.type)
            .collection("listProducts")
            .get();
        const products = querySnapshot.docs.map((doc) => ({
            ...doc.data(),
        }));
        res.status(200).json(products);
    } catch (error) {
        httpError(res, error);
    }
};

const createProduct = async (req, res) => {
    try {
        await query
            .doc(req.params.type)
            .collection("listProducts")
            .doc()
            .set({
                ...req.body,
            });
        res.status(201).json();
    } catch (error) {
        httpError(res, error);
    }
};

module.exports = { getProducts, getProductsByType, createProduct };
