let boxes=document.querySelectorAll(".box");

let resetbtn =document.querySelector("#reset");

let msgcontainer= document.querySelector(".msg-con");

let p= document.querySelector("p");

let newgame = document.querySelector("#new");

let truno = true;

const winpatterns =[
   [0,1,2],
   [0,3,6],
   [0,4,8],
   [1,4,7],
   [2,5,8],
   [2,4,6],
   [3,4,5],
   [6,7,8],
]

const restartgame = () =>{
   truno=true;
   restart();
   msgcontainer.classList.add("hide");
}

boxes.forEach((box) => {
   box.addEventListener("click",()=>{
      // console.log("box was clicked");
      if (truno) {
         truno === true;
         box.innerText="0"
         truno=false;
         
      } else {
         truno === true;
         box.innerText="x"
         truno=true;
      }
      box.disabled=true;
      checkwinner();
   })

   // checkwinner();
});
 
const stop= ()=>{
   for(let box of boxes){
      box.disabled=true;
   }
   
}

const restart= ()=>{
   for(let box of boxes){
      box.disabled=false;
      box.innerText="";
   }
   
}
const winner = (winner)=>{
   p.innerText=`congratulation is ${winner}`;
   msgcontainer.classList.remove("hide");
   stop();
   
}

const checkwinner = ()=>{
   for(let pattern of winpatterns){
      let pos1val =boxes[pattern[0]].innerText;
      let pos2val =boxes[pattern[1]].innerText;
      let pos3val =boxes[pattern[2]].innerText;
      if(pos1val != ""&& pos2val!= "" && pos3val != ""){
         if( pos1val === pos2val&& pos2val ===  pos3val ){
            // console.log("winner"); 
            winner(pos1val);
         }
        
      }

   }
}


newgame.addEventListener("click",restartgame);
resetbtn.addEventListener("click",restartgame);