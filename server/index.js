//index.js
const express= require('express')
const app= express()

require("dotenv").config({path : "./Config/.env"})
require('./Config/db.js')

const port= 5000
app.listen(port, ()=> {
    console.log(`Server is running on ${port}`)
})

let PersonModel = require('./Models/personne')

//Création d'une instance de model Person
// let doc = new PersonModel({
//     name: 'Aicha',
//     age: 21,
//     email: 'aichaboudia@gmail.com',
//     favoriteFoods: ['Vermisselle Guinar' , 'Yassa Guinar', 'Mafé Yapeu']
// })
// doc.save() // Sauvegarde du document dans la base de données MongoDB
// .then(doc => {
//     console.log(doc)
//   })
//   .catch(err => {
//     console.error(err)
//   })

  //Création de plusieurs  instances de model Person
  // async function arrayOfPeople(){
  // await PersonModel.create([
  //   {name: 'Hamza', age:34, favoriteFoods: ['Yassa', 'Riz']},
  //   {name:'Sarah',age:28,favoriteFoods:['Toum Toum','Brioude'] },
  //   {name: 'Falilou', age:20, favoriteFoods:['Ouf','Pain'] }
  // ])}
  // arrayOfPeople()
  // .then(()=>{console.log("Tableau des personnes remplie")})
  // .catch((e)=>console.log(e))

  //Recherche dans BD
//   PersonModel
//   .find({
//     name:{$in:['Aicha', 'Hamza', 'Sarah']}
// })
//   .then((name) => {
//     console.log('Nom trouvé:', name)
//   })
//   .catch(err => {
//     console.error(err)
//   })

//Rechercher et retourner un seul document
//   PersonModel
//   .findOne({
//     name:{$in:['Aicha']}
// })
//   .then((name) => {
//     console.log('Nom trouvé:', name)
//   })
//   .catch(err => {
//     console.error(err)
//   })

//Rechercher et retourner un seul document selon ses favoriteFoods
// PersonModel.findOne({
//     favoriteFoods:{ $in : [ "Yassa" ] }
// })
// .then((favoriteFoods) => {
//         console.log('Nom trouvé:', favoriteFoods)
//       })
//       .catch(err => {
//         console.error(err)
//       })

//Retourner une personne grâce à son id avec Model.findById
let personId= '65f9bbbbab3784c990217bdf';
// PersonModel.findById(personId)
// .then((name) => {
//     console.log('Id trouvé:', name )
//   })
//   .catch(err => {
//     console.error(err)
//   })

//Ajouter hamburger à une personne selon son Id
// PersonModel.updateOne({_id: personId}, {$push: {favoriteFoods: 'Hamburger'}})

// .then((favoriteFoods) => {
//       console.log('Foods ajouté:', favoriteFoods )
//     })
//     .catch(err => {
//       console.error(err)
//     })

//Modifier l'age d'une personne
// let personName= 'Aicha';
// PersonModel.findOneAndUpdate({name: personName}, {age: 20}, {new:true})
// .then ((age)=>{
//   console.log("Age modifié pour ", age);
// })
// .catch (erreur =>{console.log ("Erreur de modification", erreur)})

//Supprimer une personne
// PersonModel.findByIdAndDelete({_id: personId})
// .then((name)=>{
//   console.log(`La personne ${name.name} a été supprimée`)})
//   .catch((e)=>console.log(e))
 
//pour Suppimer plusieurs personnes
// PersonModel.deleteMany({name: {$in: ["Falilou", 'Sarah']}})
// .then((result)=>{
//     console.log(`Nombre de personnes supprimés: ${result.deletedCount}`)})
//   .catch((e)=>console.log(e))
   
//Trouvez des personnes qui aiment le Yassa Guinar .Enchaînez .find(), .sort(), .limit(), .select(), puis .exec(). Passez le rappel done(err, data) à exec()
PersonModel.find({favoriteFoods: 'Yassa Guinar'})
.sort({name: 1})
.limit(2)
.select({name: true})
.then((data)=>{
  console.log(data)
})
.catch((err=>{
  console.log(err)
}))