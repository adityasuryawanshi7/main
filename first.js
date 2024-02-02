let a = document.getElementById("checking");
console.log(a);

let div = document.querySelector("div")
 
//changing element in html
let h2=document.querySelector("h2")
console.dir(h2.innerText);
h2.innerText= h2.innerText + "!";


let t= document.querySelector("#t")
    
t.ondblclick= () => {
    console.log("t button was clicked two times")
    alert("you are stupid !")
}


let modeBtn = document.querySelector("#mode");
let body=document.querySelector("body");
let currMode="light";

modeBtn.addEventListener("click", ()=> {
    console.log("user trying to change mode");
  
    if(currMode==="light")
    {currMode="dark";
    document.querySelector("body").style.backgroundColor="black"
    document.querySelector("body").style.color="white"
    body.classList.add("dark");
    body.classList.remove("light");
}
  
    else{currMode="light";
   body.classList.add("pink");
   body.classList.remove("dark");
   document.querySelector("body").style.backgroundColor="rgba(193, 167, 180, 0.701)"
   document.querySelector("body").style.color="black"
}
    console.log(currMode)
});


