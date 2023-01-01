import {Router} from "express";
import tokenController from "../controllers/TokenController";

const router = Router();

router
  .post("/token",tokenController.store)

  export default router;



    /*

  index -> lista todos os users.  Get
  store -> cria novo usuario.     Post
  delete -> apaga um usuário.     Delete
  show -> mostra um usuário.      Get
  update -> atualiza um usuário   PATCH ou PUT

  */
