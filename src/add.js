const add = (...nums) => {
    return nums.reduce((sum, num) => sum + num, 0);
}
module.exports = add;
