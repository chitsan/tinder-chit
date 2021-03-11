import axios from 'axios';

const instance=axios.create({
    baseURL:'https://tinder-chit-backend.herokuapp.com/'
})

export default instance;