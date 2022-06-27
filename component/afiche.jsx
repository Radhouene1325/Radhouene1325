

import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph, Searchbar } from 'react-native-paper';
import { StyleSheet, View, Image, Text, FlatList, TouchableHighlight } from 'react-native'

import { useEffect, useState } from 'react';



const styles = StyleSheet.create({
    container: {
        flex: 0,
        backgroundColor: 'gray',
        flexDirection: 'row',
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 2,
        margin: 15


    },
    titre: {

        flexDirection: 'row',
        justifyContent: 'space-between',

    },

    contenu: {

        flex: 2,
        justifyContent: 'space-between',
        marginLeft: 6,


    },

    text: {
        paddingTop: 20
    },
    date: {

        alignSelf: 'flex-end',
        fontSize: 20
    },
    image: {
        flex: 1,
        width: 100,
        height: 200,
        backgroundColor: 'red'
    },

});

export default function Film({ navigation }) {
    //const data 
    const [liste, setListe] = useState([])
    const [searchQuery, setSearchQuery] = React.useState('stars');
    async function af() {
        let res = await fetch("http://api.themoviedb.org/3/search/movie?api_key=9f4a221149f680321b3506a0e79ea6f6&language=en&query=" + searchQuery)

        let data = await res.json()
        setListe(data.results)
        //console.log(data)
    }
    useEffect(() => { af() }, [searchQuery])


    const Item = ({ film }) => (


        <View style={styles.container} >

            <TouchableHighlight
                activeOpacity={0.6}
                underlayColor="#DDDDDD"
                onPress={() => navigation.navigate('Detailfilm', { idfilm: film.id })}>

                <Image
                    style={styles.image}
                    source={
                        { uri: 'https://image.tmdb.org/t/p/w500/' + film.poster_path }
                    }
                />
            </TouchableHighlight>





            <View style={styles.contenu}>

                <View style={styles.titre}>
                    <Text style={{ fontSize: 25 }}> {film.title}</Text>
                    <Text style={{ fontSize: 25 }}> {film.vote_average}</Text>
                </View>

                <View >
                    <Text  >{film.overview}
                    </Text>

                </View>
                <View>
                    <Text style={styles.date}>{film.release_date}</Text>
                </View>
            </View>

        </View>

    );

    const renderItem = ({ item }) => (
        <Item film={item} />


    );

    return (
        <View>
            <Searchbar
                placeholder="Search"
                onChangeText={searchValue => setSearchQuery(searchValue)}
            // value={searchQuery}
            />


            <View style={styles.container}>
                <FlatList
                    data={liste}
                    renderItem={renderItem}
                // keyExtractor={item => item.name}
                // keyExtractor={item => item.image}
                />

            </View>



        </View>











    )
}




