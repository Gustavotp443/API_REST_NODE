import express from "express";
import alunos from "./alunosRoutes";
import users from "./usersRoutes";
import token from "./tokenRoutes";

const routes=(app)=>{

  app.route("/").get((req,res)=>{
    res.status(200).send({titulo: "Hello World"})
  })

  app.use(
    express.json(),
    alunos,
    users,
    token

  )

}

export default routes;
