// function numIdenticalPairs(nums: number[]): number {
//     let pairs=0
//     for (let i = 0; i < nums.length; i++) {
// for (let j = i+1; j < nums.length; j++) {
//  if (nums [i]==nums [j]) {
//     pairs++ }   }          }
//     return pairs
// };
// console.log(numIdenticalPairs([1,2,1,2,]));
function smallerNumberThanCurrent(nums) {
    var othernums = [];
    for (var i = 0; i < nums.length; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            var value = 0;
            if (nums[i] > nums[j]) {
                othernums.push(value + 1);
            }
        }
    }
    return othernums;
}
console.log(smallerNumberThanCurrent([2, 3, 6, 4, 1]));
// nums.map((elm)=>{
//    if (elm=elm) {
//    } 
// })
