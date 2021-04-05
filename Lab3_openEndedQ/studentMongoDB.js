show dbs
use student
db.createCollection('student_info')
show collections
db.student_info.insertMany([{RollNo:10, Name:"XYZ", Age:21, ContactNo:9876787675, EmailId:"xyz.cs18@bmsce.ac.in"},
{RollNo:11, Name:"ABC", Age:21, ContactNo:9886786675, EmailId:"abc.cs18@bmsce.ac.in"}])
db.student_info.find()
db.student_info.update({RollNo:10},{$set:{EmailId:"xyznew.cs18@bmsce.ac.in"}})
db.student_info.find()
db.student_info.replaceOne({RollNo:11},{RollNo:11, Name:"FEM", Age:21, ContactNo:9886786675, EmailId:"abc.cs18@bmsce.ac.in"})
db.student_info.find()
//In terminal
//mongoexport --db=student --collection=student_info --type=csv --fields=RollNo,Name,Age,ContactNo,EmailId --out=D:\Student_Info.csv
db.student_info.drop()
//In terminal
//mongoimport --type csv -d student -c student_info --headerline --drop D:\Student_Info.csv
db.student_info.find()
