// how to make connection of database
// const knex=require('knex')({
//     client:'mysql',
//     connection:{
//         host:'localhost',
//         user:'root',
//         database:'crudData',
//         password:'Aniket@123'
//     }
// })

// knex.schema.createTable('students',(table) =>{
//     table.increments('id').primary()
//     table.string('Name').notNullable()
//     table.integer('Age')
//     table.string('Email-ID').unique().notNullable()
//     table.string('Password').unique()
// }).then((result) => {
//     console.log('table created successfully ..... ');
// }).catch((err) => {
//     console.log('table already exist ... ');
// });

module.exports=knex;
