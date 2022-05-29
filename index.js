const apiUrl = 'https://icanhazdadjoke.com/';
const apiWeatherUrl = 'http://api.weatherapi.com/v1/current.json'
const weatherApiKey = '387e2f84ebfd48edb2e161659222905';
const jokeText = document.querySelector("#jokeText");

async function getJoke() {
    const response = await fetch(apiUrl, {
       headers: {
        Accept: 'application/json' 
       },
    });
       
    const jokeData = await response.json();

//Exercise 1
    console.log(jokeData);

//Exercise 2
    jokeText.innerHTML = jokeData.joke;
}

//Exercise 3
const reportJokes=[];

const d = new Date();
let text = d.toISOString();

function valorar(nota){
    reportJokes.push({
        score: nota,
        joke: jokeText.innerHTML,
        date: new Date().toISOString()  
    });
 console.log (reportJokes)
}


//Exercise 4
async function getWeather() {
    const params = {
        key: weatherApiKey,
        q: {
            city: 'Barcelona',
        }
    }

    const response = await fetch(`${apiWeatherUrl}?key=${params.key}&q=${JSON.stringify(params.q)}`, {
       headers: {
        Accept: 'application/json',
       },
    });
       
    const data = await response.json();

    return [data.current.temp_c];
}

getWeather().then((temp) => {
    const [htmlTemp, htmlLocation] = document.querySelectorAll('.weather > h3');
    htmlTemp.innerHTML += `${temp}º`
  

})














      











