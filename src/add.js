const reduce = require("./reduce");
const add = (...nums) => reduce(nums, (sum, num) => sum + num);
module.exports = add;
