import Aluno from '../models/Aluno';

class alunoController{
  //STORE

  static store = async (req, res)=>{
    const novoAluno= await Aluno.create({
      nome:"Gustavo",
      sobrenome:"Pardini",
      email:"gustavotp443@gmail.com",
      idade:69,
      peso:500,
      altura:3,
    });
    res.status(200).json(novoAluno)
  }
}

export default alunoController;
