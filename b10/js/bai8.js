var listStudent = [
    { id: 1, name: "A Nguyen Van A", age: 15 },
    { id: 2, name: "B Nguyen Van B", age: 13 },
    { id: 3, name: "C Nguyen Van C", age: 18 },
    { id: 4, name: "D Nguyen Van D", age: 14 },

];



function sortArrayAge(arr){
    let newArray = arr.sort(function(a, b){return a.age - b.age});
    return newArray;
}
function sortArrayName(arr1){
    let newArray1 = arr1.sort(function(a, b){return a.name - b.name});
    return newArray1;
}


console.log(sortArrayAge(listStudent)); 
console.log(sortArrayName(listStudent)); 


// listStudent.sort(function(student1, student2){return student1.age - student2.age});
// console.log(listStudent);