import React from 'react'
import {FlatList, StyleSheet} from 'react-native'
import Listitem from './ListItem'

const PlaceList = props =>{
    return(
        <FlatList
            style={styles.listContainer}
            data={props.places}
            renderItem={(info)=>(
             <Listitem 
                placeName={info.item.name}
                placeImage={info.item.image}
                onItemPressed={()=>props.onItemSelected(info.item.key)}/>
            )}
            />
    )
}
const styles = StyleSheet.create({
    listContainer:{
        width:'100%', 
    }
})
export default PlaceList