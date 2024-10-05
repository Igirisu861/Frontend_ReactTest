import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Linking, Image, TouchableOpacity, TouchableHighlight } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function App() {

  const pressLink = () => {
    Linking.openURL('https://youtu.be/S-SnfN8Gn3I?si=D4h3wm01K5Uxz9RK');
  };


  return (
    <View style={styles.container}>
      
      <Text style={styles.textTitle} numberOfLines={2}>Hello, everybody, my name is Welcome </Text>
      <Text style={styles.textHeader}>What??</Text> 
      <TouchableHighlight>
        <Image 
            source={require('./assets/biteof87.gif')}
            style={{width: 300, height: 300}}
        />
      </TouchableHighlight>
      
      <Text style={styles.textColor} numberOfLines={3} onPress={pressLink}>was that the bite of 87?</Text>

      <TouchableOpacity>
        <Image
          source={require('./assets/drawingMark.jpeg')}
          style={{width:200, height: 200}}
        />
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textColor:{
    color: 'white'
  },
  textHeader:{
    fontSize: 30,
    color: 'red'
  },
  textTitle:{
    fontSize: 40,
    color: 'white',
    textAlign: 'center',
  }


});
