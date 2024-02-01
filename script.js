// 1.Get all the countries from Asia continent /region using Filter function
let getApi = new XMLHttpRequest();
getApi.open("GET","https://restcountries.com/v3.1/all",true);
getApi.send();
getApi.onload=()=>{
   let getData= getApi.response
  let parcedData =JSON.parse(getData)
   let getAsiaFilter = parcedData.filter((ele)=>{
  if(ele.region==="Asia") {
    return ele
  }
})
let filterValue=getAsiaFilter.map((ele)=>console.log(`Asian continent:${ele.name.common}`))
}; 

// 2.Get all the countries with a population of less than 2 lakhs using Filter function
let getApi1 = new XMLHttpRequest();
getApi1.open("GET","https://restcountries.com/v3.1/all",true);
getApi1.send();
getApi1.onload=()=>{
    let getDataa=getApi1.response
    let parcedDataa =JSON.parse(getDataa)
    let popuFilter =parcedDataa.filter((ele)=>ele.population<200000)
    let popuvalue =popuFilter.map((ele)=>console.log(`less then 2lakhs population country:"${ele.name.common}"`))

} 


// 3.Print the following details name, capital, flag, using forEach function
let getApi2 = new XMLHttpRequest();
getApi2.open("GET","https://restcountries.com/v3.1/all",true);
getApi2.send();
getApi2.onload=()=>{
    let getDataa2=getApi2.response
    let parcedDataa2 =JSON.parse(getDataa2)
    let value  = parcedDataa2.forEach((element)=>{
        console.log(`name:"${element.name.common}",captital:"${element.capital}",flag:"${element.flag}"`);
    })   
    };

// 4.Print the total population of countries using reduce function
let getApi3 = new XMLHttpRequest();
getApi3.open("GET","https://restcountries.com/v3.1/all",true);
getApi3.send();
getApi3.onload=()=>{
    let getDataa3=getApi3.response
    let parcedDataa3 =JSON.parse(getDataa3)
    let totally = parcedDataa3.reduce((acc,cv)=>acc+cv.population,0)
    console.log(`total value of population is "${totally}" `);
}