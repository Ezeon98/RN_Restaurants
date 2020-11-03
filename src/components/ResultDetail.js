import React from 'react'
import {View, Text , StyleSheet, Image} from 'react-native' 

const ResultsDetail = ({ result }) => {
    return (
    <View style={styles.container}>
        <Image source={{uri: result.image_url}} style={styles.image}/>
        <Text style={styles.name}>{result.name}</Text>
        <Text>{result.rating} Stars {result.review_count} Reviews</Text>
    </View>
    )
}

styles = StyleSheet.create({
    container:{
        marginLeft: 15
    },
    image:{
        width: 150,
        height: 100,
        borderRadius: 4,
        marginBottom: 5
    },
    name:{
        fontWeight: 'bold',
        fontSize: 14
    }

})

export default ResultsDetail;