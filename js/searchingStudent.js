var message = "";
var student;
var search;
const showStudent = document.getElementById('showStudent');
const searchStd = document.getElementById('searchStd');
const input = document.getElementById('searchInput');


//for printing message
function print(message){
    document.getElementById("studentList").innerHTML += message;
}

//for removing the previous error message /text
function printRemove(){
    document.getElementById("studentList").innerHTML = "";
}

//function for getting/showing student's all data
function getStudentData(student){
    var studentData = '<h2>Student Name: ' + student.firstName + ' ' +  student.lastName + '<h2>';
    studentData += '<p>Age: ' + student.age + '</p>';
    studentData += '<p>Email: ' + student.email + '</p>';
    studentData += '<p>Address: ' + student.address + '</p>';
    studentData += '<p>Track: ' + student.track + '</p>';
    studentData += "****************************************<br>";
    return studentData;
}

//function showing all the studentsData, when 'ShowStudentsList' button 
// is clicked
showStudent.addEventListener("click", (e) => {
    e.preventDefault(); //stop the default behaviour of the browser
    printRemove();
    for(var i = 0; i <= students.length; i += 1){
      student = students[i];
      message = getStudentData(student);
      print(message);
    }
});

//function for searching specific student
searchStd.addEventListener("click", (e) => {
  e.preventDefault();
  printRemove();
  search = input.value;
  input.value = "";
  message = findingOneOrMoreStudent(search.toLowerCase());
  print(message);
});


///////////////////////////////////////////////////
//function for finding more student with same name
///////////////////////////////////////////////////
function findingOneOrMoreStudent(student) {
    var inform = '';
    var foundStudent = false;
    for (var i = 0; i < students.length; i += 1) {
        if (student === students[i].firstName.toLowerCase() || student === students[i].lastName.toLowerCase()) {
            inform += getStudentData(students[i]);
            inform += "</br>";
            foundStudent = true;
        }
    }

    if (foundStudent) {
        return inform;
    }

    //if (search === "" || search.toLowerCase() !== student.firstName || search.toLowerCase() !== student.lastName) {
        inform = "<center>" + "The name " + "<b>" + student + "</b>" + " is not in the database, please Enter valid name!" + "</center>";
        return inform;
   // }
}

////////////////////////////////////////////////
//sorting by lastName
///////////////////////////////////////////////

var sorting = students.sort(function (a, b) {
    var lastnameA = a.lastName.toLowerCase();
    var lastnameB = b.lastName.toLowerCase();

    if (lastnameA < lastnameB)
        return -1;
    else if (lastnameA > lastnameB)
        return 1;
    return 0;
});



