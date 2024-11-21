const searchinput = document.getElementById("CitySearch");
const btnsearch = document.getElementById("Search-btn");
const apiKey = "20bea08e944eba04d4abd0cafdb339fc";
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const display = document.getElementById("display");
const displayError = document.querySelector(".displayError");
btnsearch.addEventListener("click", async ()=>{
    displayError.style.display ="none";

    try{
    const city = searchinput.value;
    const response =  await fetch(apiUrl + city + `&appid=${apiKey}` );
    if(!response.ok){
     display.style.display = "none";
throw new Error("City dont found it,Try agin");
    }else{
    var data = await response.json();    
    const humidity = data.main.humidity;
     let wind = data.wind.speed;
      wind = Math.round(wind);
     let  temp = data.main.temp; 
     temp = Math.round(temp);
     console.log(data);
     console.log(temp);
     console.log(humidity);
     console.log(wind);  
     document.getElementById("humidity").innerHTML = `${humidity}%`;
     document.getElementById("wind").innerHTML = `${wind}km/h`;
     document.getElementById("temp").innerHTML =  `${temp }°c`;
     document.getElementById("city").innerHTML = searchinput.value;
 if(data.weather[0].main === 'Clear'){
    document.querySelector("#discription img").src = "sun.png";
 }
else if(data.weather[0].main === 'Clouds'){
    document.querySelector("#discription img").src = "cloud.png";

}else if (data.weather[0].main === 'Rain'){
    document.querySelector("#discription img").src = "rain.png";
}
display.style.display ="block";
    }}
    catch(error){
        display.style.display ="none";
        displayError.style.display ="block";

        displayError.innerHTML = error.message;              
}
}

)
