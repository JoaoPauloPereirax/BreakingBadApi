import axios from 'axios'

const Api = axios.create({
   baseURL:`https://www.breakingbadapi.com/api/characters?name=${query}`
})

export default Api