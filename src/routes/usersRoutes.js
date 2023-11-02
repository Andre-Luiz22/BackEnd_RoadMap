import express from "express";
import UserController from "../controllers/userController.js";

const router = express.Router();

router
    .get("/users", UserController.listarUsers)
    .get("/users/:apelido", UserController.listarUserByApelido)
    .post("/users", UserController.criaUser);

export default router;
