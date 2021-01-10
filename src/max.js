const reduce = require("./reduce");
const max = (nums) => reduce(nums, (max, num) => (max>num) ? max : num);
module.exports = max;