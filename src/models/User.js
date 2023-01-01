import Sequelize, { Model } from 'sequelize';
import bcryptjs from "bcryptjs";

export default class User extends Model{
  static init(sequelize){
    super.init({
      nome: {
        type:Sequelize.STRING,
        defaultValue:'',
        validate:{
          len:{
            //VALIDAR QUANTIDADE MINIMA E MAXIMA DE CARACTERS
            args:[3, 255],
            msg:"Campo nome deve ter entre 3 e 255 caracteres"
          }
        }
      },
      email:  {
        type:Sequelize.STRING,
        defaultValue:'',
        unique: {
          msg:"Email já existe",
        },
        validate:{
          isEmail:{
            msg:"Email inválido"
          }
        }
      },
      password_hash:  {
        type:Sequelize.STRING,
        defaultValue:'',
      },
      //CAMPO VIRTUAL NÃO EXISTE NA BASE DE DADOS, porém
      //a senha do usuario vai vir aqui e vai sofrer um HASH
      password:  {
        type:Sequelize.VIRTUAL,
        defaultValue:'',
        validate:{
          len:{
            args:[6, 50],
            msg:"A senha deve ter entre 6 e 50 caracters"
          }
        }
      },
    },{
      sequelize
    });

    this.addHook("beforeSave", async user=>{
      if(user.password){
        user.password_hash= await bcryptjs.hash(user.password, 8)
      }
    });

    return this;
  }
}
