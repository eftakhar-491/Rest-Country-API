const lightallcountry = document.querySelector(".light-all-country");
const africa = document.querySelector(".africa");
const america = document.querySelector(".america");
const asia = document.querySelector(".asia");
const europe = document.querySelector(".europe");
const oceania = document.querySelector(".oceania");
const lightdropdownmain = document.querySelector(".light-dropdown-main");
const lightdropdownlist = document.querySelector(".light-dropdown-list");

// const body = document.querySelector("body");
// const light = document.querySelector(".light");
let scerchdata;

// light.addEventListener("click" , ()=>{
//     body.classList.toggle("d1");
// })

fetch("https://restcountries.com/v3.1/all")
  .then((res) => res.json())
  .then((data) => {
    displaycard(data);
    // data.forEach((country) => {
    // const linkcard = document.createElement("a");
    // linkcard.href = `/country.html?name=${country.name.common}`
    // linkcard.classList.add("light-card");
    // const NOCAPITAL = "---"
    //     const lightcard = `
    //         <div class="flag"><img src="${country.flags.svg}" alt=""></div>
    //         <div class="light-country-details">
    //             <h1>${country.name.common}</h1>
    //             <p><b>Population:</b>${country.population}</p>
    //             <p><b>Region:</b>${country.region}</p>
    //             <p><b>capital: </b> ${country.capital == undefined ? NOCAPITAL : country.capital}</p>
    //         </div>
    // `
    // linkcard.innerHTML = lightcard ;
    // lightallcountry.append(linkcard);
    // })
    console.log(data);
    scerchdata = data;
  });

//click for list

lightdropdownmain.addEventListener("click", () => {
  lightdropdownlist.classList.toggle("vs");
});

// Dropdown list na korate code repete hocce...!

africa.addEventListener("click", () => {
  fetch("https://restcountries.com/v3.1/region/africa")
    .then((res) => res.json())
    .then((data) => {
      lightallcountry.innerHTML = "";
      displaycard(data);
      // data.forEach((country) => {
      // const linkcard = document.createElement("a");
      // linkcard.href = `/country.html?name=${country.name.common}`
      // linkcard.classList.add("light-card");
      // const NOCAPITAL = "---"
      //     const lightcard = `
      //         <div class="flag"><img src="${country.flags.svg}" alt=""></div>
      //         <div class="light-country-details">
      //             <h1>${country.name.common}</h1>
      //             <p><b>Population:</b>${country.population}</p>
      //             <p><b>Region:</b>${country.region}</p>
      //             <p><b>capital: </b> ${country.capital == undefined ? NOCAPITAL : country.capital}</p>
      //         </div>
      // `
      // linkcard.innerHTML = lightcard ;
      // lightallcountry.append(linkcard);
      // })
      // console.log(data);
    });
});

america.addEventListener("click", () => {
  fetch("https://restcountries.com/v3.1/region/america")
    .then((res) => res.json())
    .then((data) => {
      lightallcountry.innerHTML = "";
      displaycard(data);
      // data.forEach((country) => {
      // const linkcard = document.createElement("a");
      // linkcard.href = `/country.html?name=${country.name.common}`
      // linkcard.classList.add("light-card");
      // const NOCAPITAL = "---"
      //     const lightcard = `
      //         <div class="flag"><img src="${country.flags.svg}" alt=""></div>
      //         <div class="light-country-details">
      //             <h1>${country.name.common}</h1>
      //             <p><b>Population:</b>${country.population}</p>
      //             <p><b>Region:</b>${country.region}</p>
      //             <p><b>capital: </b> ${country.capital == undefined ? NOCAPITAL : country.capital}</p>
      //         </div>
      // `
      // linkcard.innerHTML = lightcard ;
      // lightallcountry.append(linkcard);
      // })
      console.log(data);
    });
});

asia.addEventListener("click", () => {
  fetch("https://restcountries.com/v3.1/region/asia")
    .then((res) => res.json())
    .then((data) => {
      lightallcountry.innerHTML = "";
      displaycard(data);
      // data.forEach((country) => {
      // const linkcard = document.createElement("a");
      // linkcard.href = `/country.html?name=${country.name.common}`
      // linkcard.classList.add("light-card");
      // const NOCAPITAL = "---"
      //     const lightcard = `
      //         <div class="flag"><img src="${country.flags.svg}" alt=""></div>
      //         <div class="light-country-details">
      //             <h1>${country.name.common}</h1>
      //             <p><b>Population:</b>${country.population}</p>
      //             <p><b>Region:</b>${country.region}</p>
      //             <p><b>capital: </b> ${country.capital == undefined ? NOCAPITAL : country.capital}</p>
      //         </div>
      // `
      // linkcard.innerHTML = lightcard ;
      // lightallcountry.append(linkcard);
      // })
      // console.log(data);
    });
});

europe.addEventListener("click", () => {
  fetch("https://restcountries.com/v3.1/region/europe")
    .then((res) => res.json())
    .then((data) => {
      lightallcountry.innerHTML = "";
      displaycard(data);
      // data.forEach((country) => {
      // const linkcard = document.createElement("a");
      // linkcard.href = `/country.html?name=${country.name.common}`
      // linkcard.classList.add("light-card");
      // const NOCAPITAL = "---"
      //     const lightcard = `
      //         <div class="flag"><img src="${country.flags.svg}" alt=""></div>
      //         <div class="light-country-details">
      //             <h1>${country.name.common}</h1>
      //             <p><b>Population:</b>${country.population}</p>
      //             <p><b>Region:</b>${country.region}</p>
      //             <p><b>capital: </b> ${country.capital == undefined ? NOCAPITAL : country.capital}</p>
      //         </div>
      // `
      // linkcard.innerHTML = lightcard ;
      // lightallcountry.append(linkcard);
      // })
      // console.log(data);
    });
});

oceania.addEventListener("click", () => {
  fetch("https://restcountries.com/v3.1/region/oceania")
    .then((res) => res.json())
    .then((data) => {
      lightallcountry.innerHTML = "";
      displaycard(data);
      // data.forEach((country) => {
      // const linkcard = document.createElement("a");
      // linkcard.href = `/country.html?name=${country.name.common}`
      // linkcard.classList.add("light-card");
      // const NOCAPITAL = "---"
      //     const lightcard = `
      //         <div class="flag"><img src="${country.flags.svg}" alt=""></div>
      //         <div class="light-country-details">
      //             <h1>${country.name.common}</h1>
      //             <p><b>Population:</b>${country.population}</p>
      //             <p><b>Region:</b>${country.region}</p>
      //             <p><b>capital: </b> ${country.capital == undefined ? NOCAPITAL : country.capital}</p>
      //         </div>
      // `
      // linkcard.innerHTML = lightcard ;
      // lightallcountry.append(linkcard);
      // })
      // console.log(data);
    });
});

// scerch impliment

const scerchinput = document.querySelector(".light-Search-input");

scerchinput.addEventListener("input", (e) => {
  let filterdata = scerchdata.filter((country) =>
    country.name.common.toLowerCase().includes(e.target.value.toLowerCase())
  );

  lightallcountry.innerHTML = "";
  displaycard(filterdata);
  // aa.forEach((country) => {
  // const linkcard = document.createElement("a");
  // linkcard.href = `/country.html?name=${country.name.common}`
  // linkcard.classList.add("light-card");
  // const NOCAPITAL = "---"
  //     const lightcard = `
  //         <div class="flag"><img src="${country.flags.svg}" alt=""></div>
  //         <div class="light-country-details">
  //             <h1>${country.name.common}</h1>
  //             <p><b>Population:</b>${country.population}</p>
  //             <p><b>Region:</b>${country.region}</p>
  //             <p><b>capital: </b> ${country.capital == undefined ? NOCAPITAL : country.capital}</p>
  //         </div>
  // `
  // linkcard.innerHTML = lightcard ;
  // lightallcountry.append(linkcard);
  // })
});
function displaycard(data) {
  lightallcountry.innerHTML = "";
  data.forEach((country) => {
    const linkcard = document.createElement("a");
    linkcard.href = `/country.html?name=${country.name.common}`;
    linkcard.classList.add("light-card");
    const NOCAPITAL = "---";
    const lightcard = `
            <div class="flag"><img src="${country.flags.svg}" alt="${
      country.name.common
    }"></div>
            <div class="light-country-details">
                <h1>${country.name.common}</h1>
                <p><b>Population:</b>${country.population}</p>
                <p><b>Region:</b>${country.region}</p>
                <p><b>capital: </b> ${
                  country.capital == undefined ? NOCAPITAL : country.capital
                }</p>
            </div>
    `;
    linkcard.innerHTML = lightcard;
    lightallcountry.append(linkcard);
  });
}
