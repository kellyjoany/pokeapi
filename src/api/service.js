import axios from "axios";

const service = axios.create({
    baseURL: `https://pokeapi.co/api/v2`,
});

const errorHandler = err => {
    throw err;
}

export default{
    service,

    getPokemons(){
        return service.get('/pokemon')
        .then(res => res.data)
        .catch(errorHandler);
    },

}