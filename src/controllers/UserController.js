import User from '../models/User';

class userController{

  //STORE

  static store = async (req, res)=>{
    try {

      const novoUser= await User.create(req.body);
      res.status(200).json(novoUser)
    } catch(e) {
      //Vai retorna o erro especifico da lista de erros
      res.status(400).json({
        errors: e.errors.map(err => err.message)
      });
    }

  }

  //INDEX

  static index = async(req,res)=>{
    try {
      const users= await User.findAll();
      res.json(users);
    } catch(e) {
      return res.status(500).json(null)
    }
  }

  //SHOW

  static show = async (req,res)=>{
    try {
      const {id}= req.params;
      const user = await User.findByPk(id);   //Compara ID com a PK no BD

      if(!user){
        res.status(400).json({error:"Usuário não encontrado"});
      } else {
        res.json(user);
      }

    } catch(e) {
      res.status(500).json({
        errors: e.errors.map(err => err.message)
      });
    }
  }

  //UPDATE


  static update = async (req,res)=>{
    try {
      if(!req.params.id){
          return res.status(400).json({
          errors:["ID não enviado."],
        })
      }

      const user = await User.findByPk(req.params.id);

      if(!user){
        return res.status(400).json({
          errors:["Usuário não existe."]
        })
      }

      const newData= await user.update(req.body);
      res.json(newData)

    } catch(e) {
      res.status(500).json({
        errors: e.errors.map(err => err.message)
      });
    }
  }

  //DELETE


  static delete = async (req,res)=>{
    try {
      if(!req.params.id){
          return res.status(400).json({
          errors:["ID não enviado."],
        })
      }

      const user = await User.findByPk(req.params.id);

      if(!user){
        return res.status(400).json({
          errors:["Usuário não existe."]
        })
      }

     await user.destroy();
     res.status(200).send({
      success:"Usuário deletado com sucesso"
     })
    } catch(e) {
      res.status(500).json({
        errors: e.errors.map(err => err.message)
      });
    }
  }


}

export default userController;


/*  MODELO PARA REQUISIÇÃO
      "nome":"Gustavo",
      "email":"gustavotp443@gmail.com",
      "password":"123456",
*/
