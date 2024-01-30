import express from "express";
import frutaController from "../controller/fruta.controller";


const router = express.Router();

router.get('/frutas/:id', frutaController.getFrutasById); // parametro
router.post('/frutas', frutaController.createFrutas);
router.put('/frutas/:id', frutaController.updateFruta);
router.delete('/frutas/:id', frutaController.deleteFruta);

export default{
    router
}