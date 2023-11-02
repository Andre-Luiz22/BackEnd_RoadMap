import { users } from "../models/index.js";

class UserController {
    static listarUsers = async (req, res) => {
        try {
            const usersTotal = await users.find();
            // req.resultado = usersTotal;
            res.status(200).json(usersTotal);
        } catch (erro) {
            res.status(404).json({
                message: `Erro interno do servidor ${erro}`,
            });
        }
    };

    static criaUser = async (req, res) => {
        try {
            const novoUser = await users.create(req.body);
            res.status(201).json({
                message: "Usuário criado com sucesso",
                novoUser,
            });
        } catch (erro) {
            res.status(500).json({
                message: "Algo deu errado",
            });
        }
    };

    static listarUserByApelido = async (req, res) => {
        const apelido = req.params.apelido;
        try {
            const userEncotrado = await users.findOne({ apelido: apelido });
            if (userEncotrado !== null) {
                res.status(200).json(userEncotrado);
            } else {
                res.status(200).json({
                    message: "Esse apelido não foi cadastrado",
                });
            }
        } catch (erro) {
            res.status(500).json({
                message: "Problema na função de achar por nome",
            });
        }
    };
}

export default UserController;
