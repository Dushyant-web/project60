import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

class AppHeader extends React.Component{
  render(){
    return(
      <View style= {styles.textContainer}>
        <Text style={styles.text}>Record Of Student Attendence </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textContainer:{
    backgroundColor: 'black',
    width:"30%",
    height:"18",
    marginLeft:668,
    alignItems:'center',
    borderWidth:15,
    borderColor:"white",
  },
  text:{
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    alignItems:'center',
  }
});

export default AppHeader;