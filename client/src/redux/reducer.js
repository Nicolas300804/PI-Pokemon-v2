const initialState={
    TotalPokemons:[
        {
          "id": 1,
          "name": "bulbasaur",
          "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
          "hp": 45,
          "attack": 49,
          "defense": 49,
          "speed": 45,
          "types": [
            "grass",
            "poison"
          ]
        },
        {
          "id": 2,
          "name": "ivysaur",
          "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
          "hp": 60,
          "attack": 62,
          "defense": 63,
          "speed": 60,
          "types": [
            "grass",
            "poison"
          ]
        },
        {
          "id": 3,
          "name": "venusaur",
          "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
          "hp": 80,
          "attack": 82,
          "defense": 83,
          "speed": 80,
          "types": [
            "grass",
            "poison"
          ]
        },
        {
          "id": 4,
          "name": "charmander",
          "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
          "hp": 39,
          "attack": 52,
          "defense": 43,
          "speed": 65,
          "types": [
            "fire"
          ]
        },
        {
          "id": 5,
          "name": "charmeleon",
          "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
          "hp": 58,
          "attack": 64,
          "defense": 58,
          "speed": 80,
          "types": [
            "fire"
          ]
        },
        {
          "id": 6,
          "name": "charizard",
          "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
          "hp": 78,
          "attack": 84,
          "defense": 78,
          "speed": 100,
          "types": [
            "fire",
            "flying"
          ]
        },
        {
          "id": 7,
          "name": "squirtle",
          "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
          "hp": 44,
          "attack": 48,
          "defense": 65,
          "speed": 43,
          "types": [
            "water"
          ]
        },
        {
          "id": 8,
          "name": "wartortle",
          "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
          "hp": 59,
          "attack": 63,
          "defense": 80,
          "speed": 58,
          "types": [
            "water"
          ]
        },
        {
          "id": 9,
          "name": "blastoise",
          "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
          "hp": 79,
          "attack": 83,
          "defense": 100,
          "speed": 78,
          "types": [
            "water"
          ]
        },
        {
          "id": 10,
          "name": "caterpie",
          "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png",
          "hp": 45,
          "attack": 30,
          "defense": 35,
          "speed": 45,
          "types": [
            "bug"
          ]
        },
        {
          "id": 11,
          "name": "metapod",
          "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png",
          "hp": 50,
          "attack": 20,
          "defense": 55,
          "speed": 30,
          "types": [
            "bug"
          ]
        },
        {
          "id": 12,
          "name": "butterfree",
          "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
          "hp": 60,
          "attack": 45,
          "defense": 50,
          "speed": 70,
          "types": [
            "bug",
            "flying"
          ]
        },
        {
          "id": 13,
          "name": "weedle",
          "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png",
          "hp": 40,
          "attack": 35,
          "defense": 30,
          "speed": 50,
          "types": [
            "bug",
            "poison"
          ]
        },
        {
          "id": 14,
          "name": "kakuna",
          "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png",
          "hp": 45,
          "attack": 25,
          "defense": 50,
          "speed": 35,
          "types": [
            "bug",
            "poison"
          ]
        },
        {
          "id": 15,
          "name": "beedrill",
          "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png",
          "hp": 65,
          "attack": 90,
          "defense": 40,
          "speed": 75,
          "types": [
            "bug",
            "poison"
          ]
        },
        {
          "id": 16,
          "name": "pidgey",
          "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png",
          "hp": 40,
          "attack": 45,
          "defense": 40,
          "speed": 56,
          "types": [
            "normal",
            "flying"
          ]
        },
        {
          "id": 17,
          "name": "pidgeotto",
          "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png",
          "hp": 63,
          "attack": 60,
          "defense": 55,
          "speed": 71,
          "types": [
            "normal",
            "flying"
          ]
        },
        {
          "id": 18,
          "name": "pidgeot",
          "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png",
          "hp": 83,
          "attack": 80,
          "defense": 75,
          "speed": 101,
          "types": [
            "normal",
            "flying"
          ]
        },
        {
          "id": 19,
          "name": "rattata",
          "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png",
          "hp": 30,
          "attack": 56,
          "defense": 35,
          "speed": 72,
          "types": [
            "normal"
          ]
        },
        {
          "id": 20,
          "name": "raticate",
          "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png",
          "hp": 55,
          "attack": 81,
          "defense": 60,
          "speed": 97,
          "types": [
            "normal"
          ]
        }
    ]
}

const rootReducer=(state=initialState, action)=>{
    switch(action.type){
        default:
            return {...state};
    }
}

export default rootReducer