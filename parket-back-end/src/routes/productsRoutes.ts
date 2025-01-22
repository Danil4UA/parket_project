import express from "express"
import productsControllers from "../controllers/productsControllers"


const router = express.Router()
router.get('/all', productsControllers.getAllProducts);
router.post('/create', productsControllers.createProduct);


export default router;
