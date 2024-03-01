import express from "express";
import InventController from "../controller/invent.controller";

const router = express.Router();

router.get('/productos/:id', InventController.geProductoById); // parametro
router.post('/productos', InventController.createProducto);
router.put('/productos/:id', InventController.updateProducto);
router.delete('/productos/:id', InventController.deleteProducto);

export default router