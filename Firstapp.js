import React, {Component} from 'react'
import {View, StyleSheet} from 'react-native' 
import PlaceList from './PlaceList'
import PlaceInput from './PlaceInput'
import PlaceDetail from './PlaceDetail'
import {connect} from 'react-redux'
import {addPlace, deletePlace, selectPlace, deselectPlace} from './indexAction'

class Renew extends Component{
     
    placeAddedHandler = placeName =>{
         this.props.onAddPlace(placeName)
    } 
    placeDeletedHandler = ()=>{
        this.props.onDeletePlace()
    }
    modalClosedHandler = () =>{
        this.props.onDeselectPlace()
    }

    placeSelectedHandler = key =>{
        this.props.onSelectPlace(key)
    }
    
    render(){
        return(
            <View style={Styling.container}>
                <PlaceDetail
                    selectedPlace={this.props.selectedPlace}
                    onItemDeleted={this.placeDeletedHandler}
                    onModalClosed={this.modalClosedHandler}
                 />
                <PlaceInput onPlaceAdded={this.placeAddedHandler}/>
                <PlaceList 
                    places={this.props.places} 
                    onItemSelected={this.placeSelectedHandler}/>
            </View>
        )
    }
}

const mapStateToProps = state =>{
    return{
        places:state.places.places,
        selectedPlace: state.places.selectedPlace
    }
}
const mapDispatchToProps = dispatch =>{
    return{
        onAddPlace: (name) => dispatch(addPlace(name)),
        onDeletePlace: () => dispatch(deletePlace()),
        onSelectPlace: key => dispatch(selectPlace(key)),
        onDeselectPlace: () => dispatch(deselectPlace())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Renew);

const Styling = StyleSheet.create({
container: {
    flex:1,
    padding:26,
    justifyContent:'flex-start',
    alignItems:'center'
}
})