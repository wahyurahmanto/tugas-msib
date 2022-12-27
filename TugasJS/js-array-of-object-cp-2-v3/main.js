function countryMedals(players, countries) {
    if(countries === undefined) {
        return 'Countries not provided';
    } else {
        const infoCountry = [];
        countries.forEach(country => {
            const country1=players.filter(player =>{
                return player.country == country;
            })
            const atlit = () => {
                listAtlit = [];
                country1.forEach(c => {
                    listAtlit.push(c.name);
                })
                return listAtlit;
            }
            const medal = () => {
                listMedal = [];
                country1.forEach(c => {
                    listMedal.push(c.medals);
                })
                return listMedal.reduce((prevValue, number) => prevValue + number);
            }
            const obj={
                'name': country,
                'athlete': atlit(),
                'totalMedals': medal()
            }
            infoCountry.push(obj);
        })
        return infoCountry;
    }
    
}

let playerData = [
    {
        name: "Lionel Messi",
        medals: 5,
        country: "Argentina"
    },
    {
        name: "Iker Casillas",
        medals: 7,
        country: "Spain"
    },
    {
        name: "Ahmad Waluyo",
        medals: 5,
        country: "Indonesia"
    },
    {
        name: "Alvin Arkansas",
        medals: 8,
        country: "Indonesia"
    },
    {
        name: "Gabriel Batistuta",
        medals: 1,
        country: "Argentina"
    },
    {
        name: "Xavi Hernandes",
        medals: 9,
        country: "Spain"
    },
    {
        name: "Carles Puyol",
        medals: 5,
        country: "Spain"
    },
    {
        name: "Jatmika Teja",
        medals: 6,
        country: "Indonesia"
    },
    {
        name: "Sergio Aguero",
        medals: 3,
        country: "Argentina"
    },
]

console.log(countryMedals(playerData, ["Indonesia", "Spain"]));
console.log(countryMedals(playerData, ["Argentina", "Spain"]));
console.log(countryMedals(playerData, ["Indonesia", "Argentina"]));
console.log(countryMedals(playerData));

module.exports = countryMedals