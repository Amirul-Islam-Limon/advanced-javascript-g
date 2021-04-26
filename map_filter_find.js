let number1 = [11, 22, 33, 44, 55, 66, 77, 88];
let result1 = number1.map((x,index) =>{
    console.log(x, index);
});
console.log(result1);

const number2 = [11, 22, 44, 33, 55, 66, 88, 77];
const result2 = number2.filter(x=> x < 33);
console.log(result2);

const number3 = [12, 21, 32, 23, 43, 34, 54, 45];
const result3 = number3.find(x => x > 43);
console.log(result3);