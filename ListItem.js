import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native'

const ListItem = props =>(
    <TouchableOpacity onPress={props.onItemPressed}>
        <View style={styles.listitem}>
            <Image resizeMode='cover' source={require('./src/beautifulplace.jpg')} style={styles.placeimage}/>
            <Text>{props.placeName}</Text>
        </View>
    </TouchableOpacity>
)
 
 export default ListItem

const styles = StyleSheet.create({
    listitem:{
        width: '100%',
        marginBottom:5, 
        padding: 10,
        backgroundColor:'aquamarine',
        flexDirection:'row',
        alignItems:'center'
    },
    placeimage:{
      marginRight:8,
      height:40,
      width:40  
    }
})