const reduce = require("./reduce");
const min = (nums) => reduce(nums, (min, num) => (min<num) ? min : num);
module.exports = min;