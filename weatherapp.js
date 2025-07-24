let URL = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
let apikey = "830135ac988f732830067ca17d55bb5f";
let search = document.querySelector(".in");
let btn = document.querySelector(".btn");
let city = document.querySelector(".city");



async function checkweather(city){
    const response = await fetch(URL + city+`&appid=${apikey}`);
    var data = await response.json();
    if(document.querySelector(".city").innerHTML == ""){
        alert("enter valid city name");
    }else{
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp1").innerHTML = Math.round(data.main.temp) + "\u00B0C";
        document.querySelector(".humidity1").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "KM/HR";
        data.preventdefault;
        console.log(data);
    }
    // document.querySelector(".city").innerHTML = data.name;
    // document.querySelector(".temp1").innerHTML = Math.round(data.main.temp) + "\u00B0C";
    // document.querySelector(".humidity1").innerHTML = data.main.humidity + "%";
    // document.querySelector(".wind").innerHTML = data.wind.speed + "KM/HR";
    // data.preventdefault;
    // console.log(data);
}
btn.addEventListener("click",()=>{
    checkweather(search.value);
});



