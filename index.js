const button = document.getElementById("btn");
const city = document.getElementById("city_input");
const cityName = document.getElementById("city_name");
const cityTime = document.getElementById("city_time");
const cityTemp = document.getElementById("city_temp");

const getData = async (cityName) => {
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=66637ebe72164d658d481622240105&q=${cityName}&aqi=yes`)
        if (!response.ok) {
            throw alert('Enter correct name')
        }
        const data = await response.json();
        return data
    };

button.addEventListener("click", async () => {
    const value = city.value;
    const result = await getData(value)
    // cityName.innerText = `${result.location.name}, ${result.location.region}, ${result.location.tz_id}`
    cityName.innerText = `${result.location.name}, ${result.location.region}`
    cityTime.innerText = `${result.location.localtime}`
    cityTemp.innerText = `${result.current.temp_c}`
})

// http://api.weatherapi.com/v1/current.json?key=66637ebe72164d658d481622240105&q=London&aqi=yes