

import * as React from 'react';

import { StyleSheet, View, Image, Text, FlatList } from 'react-native'

import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { useEffect, useState } from 'react';
import DropShadow from "react-native-drop-shadow";



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

export default function Detailfilm({ route }) {
    //const data 
    const [film, setFilm] = useState([])

    async function af() {
        let res = await fetch("https://api.themoviedb.org/3/movie/" + route.params.idfilm + "?api_key=9f4a221149f680321b3506a0e79ea6f6")

        let data = await res.json()
        setFilm(data)
        console.log(data)

      
    }
    useEffect(() => { af() }, [])


    const styles=StyleSheet.create({
        image:{
            boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;'
        }
    })









    return (
        

         

                <Card>
                    <Card.Title  subtitle="Card Subtitle"  />
                    <Card.Content>
                        <Title>{film.title}</Title>


                        <Card.Cover style={styles.shadowProp} source={{uri:`https://image.tmdb.org/t/p/w500/${film.backdrop_path}`}} />
                      
                      
                        <Paragraph>{film.overview}</Paragraph>

                        <Paragraph style={{justifyContent:'flex-start'}}>{film.release_date}</Paragraph>

                    </Card.Content>
                   
                   
                </Card>
            
     





    )
}




