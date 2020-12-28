import axios from 'axios'

const Api = axios.create({
   baseURL:`https://www.breakingbadapi.com/api/characters`
})

export default Api