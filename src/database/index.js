import Sequelize from 'sequelize';
import dbConfig from "../config/database";
import Aluno from '../models/Aluno';
import User from '../models/User';

//Ao adicionar novo model apenas coloque no array
const models = [Aluno, User];

const connection = new Sequelize(dbConfig);

//Ele vai retornar o init de cada um dos models
models.forEach(model => model.init(connection));
