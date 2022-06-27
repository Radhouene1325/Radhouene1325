

import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { StyleSheet, View, Image, Text, FlatList } from 'react-native'


const styles = StyleSheet.create({
    container: {
        flex: 0,
        backgroundColor: 'gray',
        flexDirection: 'row',
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 2,
        margin:15


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
        width:100,
        height:200,
        backgroundColor: 'red'
    },

});

export default function MyComponent() {
    const data = [{
        adult: false,
        backdrop_path: "/iczRRWCXjNsDmiHoVejomBqiwuG.jpg",
        genre_ids: [
            10749,
            18
        ],
        id: 222935,
        original_language: "en",
        original_title: "The Fault in Our Stars",
        overview: "Despite the tumor-shrinking medical miracle that has bought her a few years, Hazel has never been anything but terminal, her final chapter inscribed upon diagnosis. But when a patient named Augustus Waters suddenly appears at Cancer Kid Support Group, Hazel's story is about to be completely rewritten.",
        popularity: 52.131,
        poster_path: "/ep7dF4QR4Mm39LI958V0XbwE0hK.jpg",
        release_date: "2014-05-16",
        title: "The Fault in Our Stars",
        video: false,
        vote_average: 7.6,
        vote_count: 10017
    },
    {
        adult: false,
        backdrop_path: "/5taScILscWm17F3ndboj3FnMCZK.jpg",
        genre_ids: [
            10402,
            99
        ],
        id: 617773,
        original_language: "en",
        original_title: "Western Stars",
        overview: "The incomparable Bruce Springsteen performs his critically acclaimed latest album and muses on life, rock, and the American dream, in this intimate and personal concert film co-directed by Thom Zimny and Springsteen himself.",
        popularity: 4.903,
        poster_path: "/aT5lsPynkYhDgFZH48jdNLobnZY.jpg",
        release_date: "2019-10-25",
        title: "Western Stars",
        video: false,
        vote_average: 7,
        vote_count: 37
    },

    ]


    const Item = ({ title, vote_average, overview, release_date }) => (

        <View  style={styles.container} >
           
            <Image
                style={styles.image}
                source={{
                    uri: 'https://img5.cdn.cinoche.com/images/887c4446fbb2a9bbd941a4272ad61b93.jpg',
                }}
            />

    
         



            <View style={styles.contenu}>

                <View style={styles.titre}>
                    <Text style={{ fontSize: 25 }}> {title}</Text>
                    <Text style={{ fontSize: 25 }}> {vote_average}</Text>
                </View>

                <View >
                    <Text  >{overview}
                    </Text>

                </View>
                <View>
                    <Text style={styles.date}>{release_date}</Text>
                </View>
            </View>

        </View>

    );

    const renderItem = ({ item }) => (
        <Item title={item.title} vote_average={item.vote_average} overview={item.overview} release_date={item.release_date} />


    );

    return (

        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={renderItem}
            // keyExtractor={item => item.name}
            // keyExtractor={item => item.image}
            />

        </View>










    )
}




