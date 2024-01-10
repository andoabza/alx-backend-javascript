interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}
const student1: Student = {
    firstName: "jhon",
    lastName: "DOE",
    age: 18,
    location: "addis",
};

const student2: Student = {
    firstName: "dave",
    lastName: "hughie",
    age: 20,
    location: "hawasa",
};

const studentsList = [student1, student2];
var table = document.getElementById('myTable') as HTMLTableElement;

studentsList.forEach(element => {
    var row = table.insertRow();
    var cell1 = row.insertCell();
    var cell2 = row.insertCell();

    cell1.innerHTML = element.firstName;
    cell2.innerHTML = element.location;
});