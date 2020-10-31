import React, {useState, useEffect} from 'react'
import {View, Text , StyleSheet, ScrollView} from 'react-native' 
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'
import ResultsList from '../components/ResultsList'

const SearchScreen = ({ navigation }) =>{
    const[term, setTerm] = useState('')
    const [errorMessage, results, searchApi] = useResults();
    useEffect(() => {setTerm('')}, [])

    const findResultsByPrice = (price) => {
        // 'price' === '$' || '$$' || '$$$'
        return results.filter(results =>{
            return results.price === price
        })
    }

    return (
    <ScrollView> 
        <SearchBar 
        term={term} 
        onTermChange={setTerm} 
        onTermSubmit={() => searchApi(term)}
        />
        {errorMessage ? <Text>{errorMessage}</Text> : null}
    <ResultsList results={findResultsByPrice('$')} title='Cost Effective' />
    <ResultsList results={findResultsByPrice('$$')} title='Bit Pricier'/>
    <ResultsList results={findResultsByPrice('$$$')} title= 'Big Spender' />
    </ScrollView>)
}       

const styles = StyleSheet.create({
    

})

export default SearchScreen;