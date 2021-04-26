const nums = [1, 2, -3, 3, 7, 8, -4, 2, 4];
for (let i = 0; i < nums.length; i++) {
    const num1 = nums[i];
    if(num1 < 0){
        continue;
    }
    console.log(num1);
}