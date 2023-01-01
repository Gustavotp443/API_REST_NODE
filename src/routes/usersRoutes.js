import {Router} from "express";
import userController from "../controllers/UserController";

const router = Router();

router
  .get("/users",userController.index)
  .post("/users",userController.store)
  .get("/users/:id",userController.show)
  .put("/users/:id",userController.update)
  .delete("/users/:id",userController.delete)

export default router;


/*

index -> lista todos os users.  Get
store -> cria novo usuario.     Post
delete -> apaga um usuário.     Delete
show -> mostra um usuário.      Get
update -> atualiza um usuário   PATCH ou PUT

*/
