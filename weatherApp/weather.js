// Weather App

const apiKey = "a9ee5f9d0e292824f4aa4435f4001246";
const cityName = document.getElementById("input_city"); 
const card = document.getElementById("card");

async function weatherApp(){
    card.textContent = ""; // Resets card from previous weather searches
    const city = cityName.value; 
    if (city){
        try{
            const weatherData = await getWeatherData(city); 
            displayWeatherInfo(weatherData); 
        } catch(error){
            console.error(error);
            displayError(error);
        }
    } else{
        card.style.background = 'white';
        displayError("Please enter a city");
    }
}

async function getWeatherData(city){

    const apiCall = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`; 
    const response = await fetch(apiCall);
    if (!response.ok){
        throw new Error(`Could not fetch weather data for ${city}`);
    }
    return await response.json();
}

// display city, temp, humidity, description
function displayWeatherInfo(data){

    console.log(data);

    // Access data using JSON object destructuring 
    const { name: city,
            main: {temp, humidity},
            weather: [{description, id}]} = data; 
  
    // Store data into webpage elements 
    const cityDisplay = document.createElement("p");
    cityDisplay.classList.add("temperature");
    cityDisplay.textContent = city; 

    const temperatureDisplay = document.createElement("p");
    temperatureDisplay.classList.add("temperature"); 
    // console.log(typeof(temp)) 
    const convertToFarenheit = (1.8 * (temp-273) + 32).toFixed(1) + "°F";
    temperatureDisplay.textContent = convertToFarenheit; 

    const humidityDisplay = document.createElement("div");
    humidityDisplay.classList.add("humidity");
    humidityDisplay.textContent = `Humidity: ${humidity}%`; 

    const descriptionDisplay = document.createElement("div");
    descriptionDisplay.classList.add("description");

    // Formatting the Description for Display
    const words = description.split(' ');
    for (let i = 0; i < words.length; i++){
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    const newDescription = words.join(' ');
    descriptionDisplay.textContent =  newDescription;

    const emojiDisplay = document.createElement("div");
    emojiDisplay.classList.add("emoji");
    emojiDisplay.textContent = getWeatherEmoji(id);
    // console.log(typeof(id));

    // display city, temp, humidity, description
    card.style.display = "block";
    card.appendChild(cityDisplay); 
    card.appendChild(temperatureDisplay);
    card.appendChild(descriptionDisplay);
    card.appendChild(humidityDisplay);
    card.appendChild(emojiDisplay); 
}

function getWeatherEmoji(id){
    switch(true){
        case id < 300 && id >= 200: // Thunderstorm 
            return "⛈️";
        case id < 400 && id >= 300: // Drizzle
            return "🌧️";
        case id < 600 && id >= 500: // Rain 
            return "🌧️";
        case id < 700 && id >= 600: // Snow
            return "🌨️";
        case id < 800 && id >= 700: // Atmosphere - mist or smoke or tornado
            return "☁️";
        case id === 800: // clear
            return "☀️";
        case id > 800: // clouds
            return "☁️";
    }
}

function displayError(message){
    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message; 
    errorDisplay.classList.add("validate_input"); 

    card.textContent = ""; // Resets card from previous weather searches
    card.style.display = "block";
    card.appendChild(errorDisplay);
}
