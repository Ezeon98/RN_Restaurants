import React, {useState, useEffect} from 'react'
import {View, Text, StyleSheet, FlatList, Image} from 'react-native'
import yelp from '../API/Yelp'

const ResultsShowScreen = ({navigation}) =>{
    const[result, setResult] = useState(null)
    const id = navigation.getParam('id')

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`)
        setResult(response.data)
    }
    useEffect(() => {
        getResult(id)
    }, [])

    if (!result){
        return null;
    }

    return (<View>
        <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({item}) => {
            return(
                <Image style={styles.image} source={{ uri : item}}/>
            )
        }}
        />
    </View>)

}

const styles = StyleSheet.create({
    image:{
        width: 160,
        height: 100,
        borderRadius: 4,
        marginVertical: 5
    }

})

export default ResultsShowScreen;