import axios from "axios";

export default async function getAll(recipe){
    let {data}=await axios.get(`https://forkify-api.herokuapp.com/api/search?q=${recipe}`)
    return data
}
