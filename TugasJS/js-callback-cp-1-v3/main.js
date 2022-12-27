const type1 = (number1, number2) => parseInt (number1) - parseInt (number2)
const type2 = (number1, number2) => parseInt (number1) + parseInt (number2)
const type3 = (number1, number2) => parseInt (number1) * parseInt (number2)
const c = n => parseInt(n) % 2 === 0
const calculate = (number1, number2, call) => c(number1) && c(number2) ? call(type1(number1, number2)) : c(number1) ? call(type2(number1, number2)) : call(type3(number1, number2))
  
  module.exports = calculate;


  function findMovies (favoriteGenre){
    const movies = [
      {
       id: 1,
       name: "Avengers end game",
       genre: "Action",
       soldTicket: 149,
       capacity: 150,
      },
      {
       id: 2,
       name: "La la Land",
       genre: "Romance",
       soldTicket: 20,
       capacity: 75,
      },
      {
       id: 3,
       name: "Beauty and the Beast",
       genre: "Romance",
       soldTicket: 50,
       capacity: 50,
      },
      {
       id: 4,
       name: "Superman vs Batman",
       genre: "Action",
       soldTicket: 150,
          capacity: 250,
      },
      {
       id: 5,
       name: "Transformer",
       genre: "Action",
       soldTicket: 90,
       capacity: 90,
      },
      {
       id: 6,
       name: "5 feet apart",
       genre: "Romance",
       soldTicket: 25,
       capacity: 45,
      },
      {
       id: 7,
       name: "Hamilton",
       genre: "Musical",
       soldTicket: 295,
       capacity: 300,
      },
      {
       id: 8,
       name: "Dear Evan Hansen",
       genre: "Musical",
       soldTicket: 150,
       capacity: 200,
      },
      {
       id: 9,
       name: "Conjuring",
       genre: "Horror",
       soldTicket: 30,
       capacity: 100,
      },
      {
       id: 10,
       name: "Annabelle",
       genre: "Horror",
       soldTicket: 10,
       capacity: 30,
      },
      {
       id: 11,
       name: "Fast and Furios",
       genre: "Action",
       soldTicket: 25,
       capacity: 40,
      },
      {
       id: 12,
       name: "Romeo and Julet",
       genre: "Romance",
       soldTicket: 15,
       capacity: 15,
      },
      {
       id: 13,
       name: "Wicked",
       genre: "Musical",
       soldTicket: 75,
       capacity: 75,
      },
    ];
      return movies.filter((film) => favoriteGenre.includes(film.genre));
    };
    
    function findTicketAvailability (movie, user){
      return [movie].map((film) => film.soldTicket !== film.capacity && user.ticket + film.soldTicket <= film.capacity) [0];
    }
    
    function findRecommendation(iniVariabelOrangYangSedangMenonton){
      return findMovies(iniVariabelOrangYangSedangMenonton.favoriteGenre).filter((film) => film.soldTicket !== film.capacity && iniVariabelOrangYangSedangMenonton.ticket + film.soldTicket <= film.capacity);
      
    }
    const Action = 100000;
    const Musical = 80000;
    const Romance = 40000;
    const Horror = 75000;
    
  function generateRecommendation (iniVariabelOrangYangSedangMenonton){
      if(findRecommendation(iniVariabelOrangYangSedangMenonton).length === 0){
        return "Tidak ada film yang sesuai kriteria"
      }
      else {
        return findRecommendation(iniVariabelOrangYangSedangMenonton).map((film) => ({
              id: film.id,
              name: film.name,
              genre: film.genre,
              totalPrice:
                film.genre === "Action" ? Action*iniVariabelOrangYangSedangMenonton.ticket
                : film.genre === "Musical" ? Musical*iniVariabelOrangYangSedangMenonton.ticket
                : film.genre === "Romance" ? Romance*iniVariabelOrangYangSedangMenonton.ticket
                : film.genre === "Horror" ? Horror*iniVariabelOrangYangSedangMenonton.ticket
                : "",})
            );
      } 
      
    }
  
  let user1 = {
    name: 'Aditira',
    ticket: 1,
    favoriteGenre: ['Action', 'Musical', 'Romance', 'Horror']
  }
  
  let user2 = {
    name: 'Eddy',
    ticket: 20,
    favoriteGenre: ['Musical', 'Romance']
  }
  
  let user3 = {
    name: 'Afis',
    ticket: 1,
    favoriteGenre: ['Sci Fi', 'Documentary', 'Thriller']
  }
  
  console.log(generateRecommendation(user1))
  console.log(generateRecommendation(user2))
  console.log(generateRecommendation(user3))
  
  module.exports = {
      findMovies,
      findTicketAvailability,
      findRecommendation,
      generateRecommendation
  }
  
  