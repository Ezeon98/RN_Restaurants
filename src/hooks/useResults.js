import {useEffect, useState} from 'react'
import yelp from '../API/Yelp'

export default () => {
    const[results, setResults] = useState([])
    const[errorMessage, setErrorMessage] = useState('')

    const searchApi = async (searchTerm) =>{
        try{
        const response = await yelp.get('/search', {
            params: {
                limit: 25,
                term: searchTerm,
                location: 'miami'
            }
        });
        setResults(response.data.businesses)
    } catch (error){
        setErrorMessage('Something went wrong')
    }
    }

    //Llama a la API cuando el componente se renderiza por primera vez:
    //searchApi('pasta') --> esto NO, usar useEffect-->
    useEffect(() => {
        searchApi('pasta')
    },  []);

    return[errorMessage, results, searchApi]
}