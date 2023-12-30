const tBody= document.querySelector("tbody");
const allRows= tBody.querySelectorAll("tr");
const allRowsArr = Array.prototype.slice.call(allRows);
const allTableData= []
let allTD;
let allTDArr;
// const rowOne = document.querySelector("#row-1");
// const total1=document.querySelector("#total-1");
// console.log(rowOne);
// const allData = rowOne.querySelectorAll("td");
// const allDataArray=Array.prototype.slice.call(allData);
// let totalScores = 0;
for(let i = 0; i <allRowsArr.length; i++){
    allTD= allRowsArr[i].querySelectorAll("td")
    allTDArr =Array.prototype.slice.call(allTD) 
    allTableData.push(allTDArr)
}
let TDataArr;
let mainTotals = []
console.log( allTableData[0] );
console.log( allTableData);
console.log( allTableData[0][0] );
let innerValue = 0;
let totalValue= 0;
let bigOne= 0;
let smallOne = 0;
for(let i = 0; i < allTableData.length; i++){
    TDataArr = allTableData[i];
    totalValue= 0;

for(let i = 0; i < TDataArr.length - 1; i++ ){
    totalValue += ~~TDataArr[i].textContent;
}
mainTotals.push(totalValue);
TDataArr[TDataArr.length-1].textContent = mainTotals[i]

    }


// for(let i = 0 ;i < allDataArray.indexOf(total1); i++){
//     totalScores += ~~ allDataArray[i].textContent
// };
// total1.textContent = totalScores
// for(let i = 0;i < 6 ; i++){
//     bigOne += 1;
//     console.log(bigOne);
//     for(let i = 0; i < 6;i++){
//         smallOne +=1
//         // console.log(i)
//         console.log(smallOne)
//     } 
// }