// // function addToArrayForm(num: number[]=[1,2,0,0], k: number=13) {
// //     //   let str:string=""
// //     for (let i = 0; i < num.length; i++) {
// //     // str+=num[i]
// // }
// // // let v:number=parseInt(str)
// // // console.log("number is",v);

// // };
// // console.log(addToArrayForm());
// function adToArrayForm(num: number[], k: number) {
//     let list:number[]=[]
//     for (let i = num.length-1; i >=0||k>0; i--) {
//         if (i>=0) {
//          list.unshift((num[i]+k)%10)
//          k=Math.floor(((num[i]+k)/10))
//         } else {
//             list.unshift(k%10)
//             k=Math.floor(k/10)
//         }
//     }
//     return list
// }
// console.log(adToArrayForm([1,2,0,0],13));

function adToArayForm(num: number[], k: number) {
let i=0
let lis:number[]=[]
while (i>=0||k>0) {
    if (i>=0) {
        lis.unshift((num[i]+k)%10)
        k=Math.floor(((num[i]+k)/10))
    } else {
        lis.unshift(k%10)
        k=Math.floor(k/10)
    }
    i--
}
return lis
}



















