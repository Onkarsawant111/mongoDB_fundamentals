show dbs
use school
// basic commands
db.createCollection("students")
db.students.insertOne({s_id:"1", name:"onkar", age:"24", fees_paid:"100000"})
db.students.insertMany([{s_id:"2", name:"raj", age:"24", fees_paid:"50000"},
{s_id:"3", name:"max", age:"44", fees_paid:"40000"},
{s_id:"4", name:"akash", age:"34", fees_paid:"2000"},
{s_id:"5", name:"dev", age:"34", fees_paid:"80000"}])
db.students.insertOne({s_id:"6", name:"siddhu", age:"24", fees_paid:"55000"})
db.students.find()

// Sorting, limiting, Count and Skip method
db.students.find().sort({name:"1"})
db.students.find().sort({s_id:"-1"})
db.students.find().limit(4)
db.students.find().limit(4).count({name:""})
db.students.find().skip(4)

// find method 
db.students.find({name:"onkar",})
db.students.find({},{s_id:true ,name:true, age:true})

// updating (set/unset operations) documnets
db.students.updateOne({name:"siddhu"},{$set:{name:"harry"}})
db.students.updateOne({s_id:"1"},{$set:{gender:null}})
db.students.updateMany({s_id:{$gte:"2" , $lte:"6"}},{$set:{gender:null}})
db.students.updateOne({gender:"null"},{$unset:{s_id:"1"}})
db.students.find()

// delete documents 
db.students.deleteOne({gender:"null"})
db.students.find()

// comparison operators
db.students.find({age:{$gte:"40", $lte:"70"}})
db.students.find({name:{$ne:"onkar"}})
db.students.find({age:{$gt:"30"}})

// logical operator
db.students.find({$and:[{age:{$gte:"20", $lte:"40"}},{fees_paid:{$gte:"50000"}}]})
db.students.find({$or:[{age:{$gte:"40", $lte:"45"}},{fees_paid:{$gt:"80000"}}]})

// aggregate function with group by method - sum,avg,min,max,first,last
db.students.aggregate({$group:{_id:'$age', fees_paid:{$max:'$fees_paid'}}})
db.students.aggregate([{$match:{age:"44"}},{$group:{_id:'$age', fees_paid:{$max:'$fees_paid'}}}])

  
  