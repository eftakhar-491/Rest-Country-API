// localStorage.clear()
const light = document.querySelector(".light");
const body = document.querySelector("body");
const moonicon =document.querySelector(".moon-icon");
const sunicon =document.querySelector(".sun-icon");
let dd1 = `
    --background-color: hsl(207, 26%, 17%);
       --font-color: hsl(0, 0%, 100%);
       --element-color: hsl(209, 23%, 22%);
       --boxshedow: 0px 2px 9px 0px hsl(208, 29%, 9%);
       background-color:var(--background-color) ;
    `
    body.style.cssText = localStorage.d1;
let x = true;
light.addEventListener("click", () => {

    if(x){
        localStorage.setItem("d1", dd1);
        body.style.cssText = localStorage.d1;
        x=false;
        console.log(x);
        moonicon.style.display = "none";
        sunicon.style.display = "block"
    }else{
        localStorage.d1 = "";
        body.style.cssText = "";
        x=true
        moonicon.style.display = "block";
        sunicon.style.display = "none"
    }

})