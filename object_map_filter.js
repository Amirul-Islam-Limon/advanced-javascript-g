const student = [
    {id:11, name:"Amirul Islam"},
    {id:22, name:"Lion Ahmed"},
    {id:33, name:"Mr. Abbas"}
]

const allName = student.map(x => x.name);
console.log(allName);
const oneId = student.find(x => x.name == "Amirul Islam");
console.log(oneId);

// Old way ====================================>>>>>>>>>>>>>>>>>>>>>


let names = [];
for(let i = 0; i < student.length; i++){
    
    let name = student[i].name;
    names.push(name);
}
console.log(names);