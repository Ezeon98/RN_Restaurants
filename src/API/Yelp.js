import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer 9XSucW1EAUJ7ou_Bo45s7r-cMH-JGDzGej9Bt8pyon3br6C3IiAIJ2dMfpRKuoIBYYFmTLX4eNgaeHAeNQHUcLm9G7m67tTRTPKL0aCviEprwglrpz03uGg6adqaX3Yx'
    }

});