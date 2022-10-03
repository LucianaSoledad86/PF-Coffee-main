const { Product, User, Comment } = require('../../db.js');


async function getUsers () {

  let users = await User.findAll({ include:  Product, Comment })  
      

  return users;

};

module.exports =  getUsers;
