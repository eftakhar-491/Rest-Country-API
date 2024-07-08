const urlcountryname = new URLSearchParams(window.location.search).get('name');
const img = document.querySelector("img");
const headertitle = document.querySelector(".headertitle");
const nativename = document.querySelector(".native-name");
const population = document.querySelector(".population");
const region = document.querySelector(".region");
const subregion = document.querySelector(".sub-region");
const capital = document.querySelector(".capital");
const topleveldomain = document.querySelector(".topleveldomain")
const currency = document.querySelector(".currency");
const language = document.querySelector(".language");
const bordercountry =document.querySelector(".border-country-data")
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

if(localStorage.length == 0){
    localStorage.setItem("d1" , "");
}



body.style.cssText = localStorage.d1
light.addEventListener("click", () => {


    if(localStorage.d1 == ""){
        localStorage.setItem("d1", dd1);
        body.style.cssText = localStorage.d1;
        moonicon.style.display = "none";
        sunicon.style.display = "block"
      
    }else{
        localStorage.d1 = "";
        body.style.cssText = "";
        moonicon.style.display = "block";
        sunicon.style.display = "none"
    }


    // if(localStorage.d1 == ""){
    //     localStorage.setItem("d1", dd1);
    //     body.style.cssText = localStorage.d1;
        
    // }else{
    //     localStorage.d1 = "";
    //     body.style.cssText = localStorage.d1;
    // }

})












fetch(`https://restcountries.com/v3.1/name/${urlcountryname}?fullText=true`)
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        let [country] = data;

        let totalcapital = country.capital? country.capital.toString(): "" ;
        let totaldomain = country.tld? country.tld.toString() : "" ;
        let totalcurrency = country.car.signs ? country.car.signs.toString() : "";

        let totallanguage = []
        for (const property in country.languages) {
            totallanguage.push(`${country.languages[property]}`);
        }

        country.flags.svg? img.src = country.flags.svg : img.src = "";
        headertitle.innerText = country.name.common;
        country.name.common? nativename.innerText = country.name.common : nativename.innerText = "";
        population.innerText = country.population;
        region.innerText = country.region;
        subregion.innerText = country.subregion ? country.subregion : "";
        capital.innerText = totalcapital;
        topleveldomain.innerText = totaldomain;
        currency.innerText = totalcurrency;
        language.innerText = totallanguage ? totallanguage.toString() : "";


if(country.borders){
country.borders.forEach((bordecountryrname) => {
console.log(bordecountryrname)
fetch(`https://restcountries.com/v3.1/alpha/${bordecountryrname}`).then((res)=> res.json())
.then((data)=>{
let [borderdata] = data;
console.log(borderdata.name.common)

let a = document.createElement("a");
a.href = `country.html?name=${borderdata.name.common}`
bordercountry.append(a);
a.innerText = borderdata.name.common;

})
});
}
    })



//back page

const backbtn = document.querySelector(".backbtn");

backbtn.addEventListener("click",()=>{
history.back()
})








