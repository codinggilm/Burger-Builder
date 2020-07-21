import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://burger-builder-aae3b.firebaseio.com/'
});

export default instance;

