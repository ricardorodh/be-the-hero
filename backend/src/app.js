const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use (express.json());
app.use(routes);
app.use(errors());


/**
 * Rota / Recurso
 */

 /**
  * Métodds HTTP:
  * 
  * GET: Buscar informações no Back-End
  * POST: Criar/Salvar/Enviar informações para o Back-End
  * PUT: Alterar infomações no Back-End
  * DELETE: Excluir informaçẽos no Back-End
  */

/**
 * Tipos de Parâmeros:
 * 
 * Query Params: Parâmetros com nomes enviados na rota após '?' Filtro paginação etc
 * Route Params: Parâmetros utilizado para retornar um recurso expexífico :id :npme 
 * Request Body: Corpo da requisição, utilizando para criar ou alterar recursos
 */

 /**
  * BANCOS DE DADOS:
  * 
  * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft Sql Server
  * NoSQL: MongoDB, CouchDB ... 
  */

  /**
   * Driver: SELECT * FROM users
   * Query Builder: table('users').select('*').where('')
   */

module.exports = app;
