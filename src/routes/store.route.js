import e, { Router } from "express";
import {
    getProduct, getmainCategories
    , getSubCategories, getProductsBymainCategory, getProductsBysubCategory, getAllSubCategories, getProductsByName
} from "../controllers/store.controllers.js";

const router = Router();

router.route("/").get(getProduct)
router.route("/categories").get(getmainCategories)
router.route("/subcategories").get(getAllSubCategories)
router.route("/subcategories/:categories").get(getSubCategories)
router.route("/product/maincategory/:categories").get(getProductsBymainCategory)
router.route("/product/subcategory/:categories").get(getProductsBysubCategory)
router.route("/product/name/:name").get(getProductsByName)


export default router;