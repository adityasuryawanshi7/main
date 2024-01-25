let a = document.getElementById("checking");
console.log(a);

let div = document.querySelector("div")
 
//changing element in html
let h2=document.querySelector("h2")
console.dir(h2.innerText);
h2.innerText= h2.innerText + "by aditya";


let t= document.querySelector("#t")
    
t.ondblclick= () => {
    console.log("t button was clicked two times")
    alert("you are stupid !")
}


let modeBtn = document.querySelector("#mode");
let currMode="light";

modeBtn.addEventListener("click", ()=> {
    console.log("user trying to change mode");
  
    if(currMode==="light")
    {currMode="dark";
    document.querySelector("body").style.backgroundColor="black"
    document.querySelector("body").style.color="white"
}
  
    else
    {currMode="light";
    document.querySelector("body").style.backgroundColor="pink"
}
    console.log(currMode)
});


