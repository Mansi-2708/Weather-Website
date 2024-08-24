var inputvalue = document.querySelector('#cityinput');
var btn = document.querySelector('#add');
var city = document.querySelector('#cityoutput');
var description = document.querySelector('#description');
var temp = document.querySelector('#temp');
var wind = document.querySelector('#wind');
var apik = "c9a95ecfb2942781f8eeda406281c299";

function conversion(val) {
    return (val - 273.15).toFixed(2); // corrected temperature conversion to Celsius
}

btn.addEventListener('click', function() {
    var cityName = inputvalue.value;
    var url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apik}`;
    
    fetch(url)
        .then(res => res.json())
        .then(data => {
            var nameval = data['name'];
            var descrip = data['weather'][0]['description'];
            var temperature = data['main']['temp'];
            var windspeed = data['wind']['speed'];

            city.innerHTML = `Weather of <span>${nameval}</span>`;
            temp.innerHTML = `Temperature: <span>${conversion(temperature)}°C</span>`;
            description.innerHTML = `Sky Conditions: <span>${descrip}</span>`;
            wind.innerHTML = `Wind Speed: <span>${windspeed} km/h</span>`;
        })
        .catch(err => alert('You entered the wrong city name'));
});
