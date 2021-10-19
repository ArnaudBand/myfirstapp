
    const condition = document.querySelector(".condition");

let weather = {
    "apikey": "3a493f1d37e98aa9606b276ef24f470c",
    fecthWeather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
             + city
              +"&units=metric&APPID=" 
              + this.apikey
            ).then((response) => response.json())
            .then((data) => this.displayWeather(data))
    },

    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;

        console.log(name,icon,description,temp,humidity,speed);
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/"+ icon +"@2x.png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "℃";
        document.querySelector(".humidity").innerText = "humidity:"+ humidity + "%";
        document.querySelector(".wind").innerText = "Wind speed:"+ speed + "km/h";
        document.querySelector(".weather").classList.remove("loading");
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')";
        console.log(data.weather[0].description)
        if (data.weather[0].description == "light rain" || data.weather[0].description == "rain"  || data.weather[0].description == "thunderstorms"){
            condition.innerText = "I will not go to scholl";
        }else{
            condition.innerHTML ="I will go to scholl"
        }
    
    },
    
    search: function (){
        this.fecthWeather(document.querySelector(".search-bar").value)
    },
   
};

document.querySelector(".search button").addEventListener("click", function() {
    weather.search();
});


document.querySelector(".search-bar").addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        weather.search();
    }
});
