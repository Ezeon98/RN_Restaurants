import React from 'react'
import {View, Text , StyleSheet, FlatList, TouchableOpacity} from 'react-native' 
import ResultDetail from './ResultDetail'
import {withNavigation} from 'react-navigation'

const ResultsList = ({title, results, navigation}) => {

    if(!results.length){
        return null;
    }

    return (
    <View style={styles.container}>
        <Text style={styles.titleStyle}>{title} </Text>
        <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={results}
        keyExtractor={(results) => results.id }
        renderItem={({ item }) => {
            return (
            <TouchableOpacity onPress={() => navigation.navigate('ResultsShow', { id: item.id })}>
                <ResultDetail result = {item}/>
            </TouchableOpacity>
            )
        }}
        />
    </View>
    )
}

styles = StyleSheet.create({
    titleStyle:{
        fontSize: 19,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5
    },
    container:{
        marginBottom:15
    }
})

export default withNavigation(ResultsList);