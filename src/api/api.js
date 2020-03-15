import axios from 'axios';

export default axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/todos?_start=10&_limit=10'
})