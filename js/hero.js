
function hero(){
    let randomNumber = Math.round(Math.random() * 500);

    fetch('https://superheroapi.com/api/773235737808485/' + randomNumber, {
        headers: {
            Accept:
                "application/json; charset=utf-8",
            "Content-Type": "application/json; charset=utf-8",
        },
        mode: "cors"
    })
        .then(function(response) {
            // handle success
            return response.json()
        })
        .then(function (hero){
            const body = document.getElementById("hero");
            body.innerHTML = '';
            body.innerHTML+=' <button type="button" style="font-size: x-large" onClick="hero()">Get a random superhero!</button>';
            body.innerHTML+= '<h1>' + hero.name + '</h1>';
            body.innerHTML+= '<img src="' + hero.image.url + '"></img>';


            // <h1>{{ $hero->name}}</h1>
            // <hr>
            //     <a style="font-size: x-large" href="{{ url('/' . rand(1,500)) }}">Get a random superhero!</a>
            //     <p>gender: {{ $hero->appearance->gender}}</p>
            //     <p>race: {{ $hero->appearance->race}}</p>
            //     <p>occupation: {{ $hero->work->occupation}}</p>
            //     <p>alignment: {{ $hero->biography->alignment}}</p>
            //     <h3>Powerstats</h3>
            //     <p>intelligence: {{ $hero->powerstats->intelligence}}</p>
            //     <p>strength: {{ $hero->powerstats->strength}}</p>
            //     <p>speed: {{ $hero->powerstats->speed}}</p>
            //     <p>durability: {{ $hero->powerstats->durability}}</p>
            //     <p>power: {{ $hero->powerstats->power}}</p>
            //     <p>combat: {{ $hero->powerstats->combat}}</p>
            //     <img src="{{ $hero->image->url}}">
        })
        .catch(function(error) {
            // handle error
            console.log(error);
    });
}

window.onload = hero;
