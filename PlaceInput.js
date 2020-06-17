import React, {Component} from 'react'
import {View, TextInput, Button, StyleSheet} from 'react-native'

class PlaceInput extends Component{
    state = {
        placeName:""
    }

    componentDidMount(){

    }
    placeNameChangedHandler = val =>{
        this.setState({placeName:val})
    }
    placeSubmitHandler = () =>{
        if (this.state.placeName.trim() === ""){
            return; 
        }
        this.props.onPlaceAdded(this.state.placeName)
    }
    render(){
        return(
            <View style={Styling.inputContainer}>
                    <TextInput
                      placeholder='An awesome place'
                      value={this.state.placeName}
                      onChangeText={this.placeNameChangedHandler}
                      style={Styling.placeInput}
                    />
                    <Button
                      title='Add'
                      style={Styling.placeButton}
                      onPress={this.placeSubmitHandler}
                    />
            </View>
        )
    }
}

const Styling = StyleSheet.create({
    inputContainer: {
    //   flex: 1,
      width: "100%",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center"
    },
    placeInput: {
      width: "70%"
    },
    placeButton: {
      width: "30%"
    }
  });
export default PlaceInput