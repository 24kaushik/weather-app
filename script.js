// api key and other things
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '6a20e4909amsh4f4a0c559d5787fp100c12jsnefc95402b4c6',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};
// function to fetch data and fill it in the cards 
const getWeather = (city) => {

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then((response) => {
            cityName.innerHTML = city
            console.log(response)

            // cloud_pct.innerHTML = response.cloud_pct
            temp.innerHTML = response.temp
            temp2.innerHTML = response.temp
            feels_like.innerHTML = response.feels_like
            humidity.innerHTML = response.humidity
            humidity2.innerHTML = response.humidity
            min_temp.innerHTML = response.min_temp
            max_temp.innerHTML = response.max_temp
            wind_speed.innerHTML = response.wind_speed
            wind_speed2.innerHTML = response.wind_speed
            wind_degrees.innerHTML = response.wind_degrees
            sunrise.innerHTML = response.sunrise
            sunset.innerHTML = response.sunset
        })
        .catch(err => console.error(err));
}
submit.addEventListener("click", (e) => {
    e.preventDefault()
    getWeather(city.value)
})
getWeather("Delhi")

// fetching and filling data for common cities table 
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=roorkee', options)
    .then(response => response.json())
    .then((response) => {
        // console.log(response)
        cloud_pct_Roorkee.innerHTML = response.cloud_pct
        temp_Roorkee.innerHTML = response.temp
        feels_like_Roorkee.innerHTML = response.feels_like
        humidity_Roorkee.innerHTML = response.humidity
        min_temp_Roorkee.innerHTML = response.min_temp
        max_temp_Roorkee.innerHTML = response.max_temp
        wind_speed_Roorkee.innerHTML = response.wind_speed
        wind_degrees_Roorkee.innerHTML = response.wind_degrees
        sunrise_Roorkee.innerHTML = response.sunrise
        sunset_Roorkee.innerHTML = response.sunset
    })
    .catch(err => console.error(err))
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=mumbai', options)
    .then(response => response.json())
    .then((response) => {
        // console.log(response)
        cloud_pct_Mumbai.innerHTML = response.cloud_pct
        temp_Mumbai.innerHTML = response.temp
        feels_like_Mumbai.innerHTML = response.feels_like
        humidity_Mumbai.innerHTML = response.humidity
        min_temp_Mumbai.innerHTML = response.min_temp
        max_temp_Mumbai.innerHTML = response.max_temp
        wind_speed_Mumbai.innerHTML = response.wind_speed
        wind_degrees_Mumbai.innerHTML = response.wind_degrees
        sunrise_Mumbai.innerHTML = response.sunrise
        sunset_Mumbai.innerHTML = response.sunset
    })
    .catch(err => console.error(err))
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=kolkata', options)
    .then(response => response.json())
    .then((response) => {
        // console.log(response)
        cloud_pct_Kolkata.innerHTML = response.cloud_pct
        temp_Kolkata.innerHTML = response.temp
        feels_like_Kolkata.innerHTML = response.feels_like
        humidity_Kolkata.innerHTML = response.humidity
        min_temp_Kolkata.innerHTML = response.min_temp
        max_temp_Kolkata.innerHTML = response.max_temp
        wind_speed_Kolkata.innerHTML = response.wind_speed
        wind_degrees_Kolkata.innerHTML = response.wind_degrees
        sunrise_Kolkata.innerHTML = response.sunrise
        sunset_Kolkata.innerHTML = response.sunset
    })
    .catch(err => console.error(err))
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=dehradun', options)
    .then(response => response.json())
    .then((response) => {
        // console.log(response)
        cloud_pct_Dehradun.innerHTML = response.cloud_pct
        temp_Dehradun.innerHTML = response.temp
        feels_like_Dehradun.innerHTML = response.feels_like
        humidity_Dehradun.innerHTML = response.humidity
        min_temp_Dehradun.innerHTML = response.min_temp
        max_temp_Dehradun.innerHTML = response.max_temp
        wind_speed_Dehradun.innerHTML = response.wind_speed
        wind_degrees_Dehradun.innerHTML = response.wind_degrees
        sunrise_Dehradun.innerHTML = response.sunrise
        sunset_Dehradun.innerHTML = response.sunset
    })
    .catch(err => console.error(err))





// this code was written by kaushik sarkar 
// contacts->
// email: akaushikarkar@gmail.com 