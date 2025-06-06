//    function createParagraph() {
//   const para = document.createElement("p");
//   para.textContent = "You clicked the button!";
//   document.body.appendChild(para);
// }

// const buttons = document.querySelectorAll("button");

// for (const button of buttons) {
//   button.addEventListener("click", createParagraph);
// }


function addCount (count) {
  count=count+1;
  button.textContent=count
  return count

}
addCount()
const array=[1,2,3,4,5,6,7,8,9]
const object={0:1,1:2,2:3,3:4,4:5,5:6,6:7,7:8,"joy":["gireng"]}

var outerCount =0;
let button=document.getElementById("count")


button.addEventListener("click",()=>{
 const data= addCount(outerCount)
 array.push(data)
 object[outerCount]="joy"
 object[0]="test123"
// array.push(data)

 console.log(object["joy"])
outerCount=data
})
var test123=0;
let test234=0

function test (){
  // for (let test123=0;i<10;i++){
   
  // }

  // function test1 (){
  //   console.log( i,"inside tes1")
  // }
// test1()
  
}


test ()