import React from "react";
import { StatusBar, View, Text, Image} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/Home.js"

const Stack = createStackNavigator()

export default function App(){
  return(
    <>
      <StatusBar barStyle={'light-content'} backgroundColor={'#000'}/>

      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen
            name="Home"
            component = {Home}
            options={{
              headerLeft:()=>(
                <View style={{flexDirection: 'row', alignItems:'center'}}>
                  <Image 
                    source={{uri: 'https://static.wikia.nocookie.net/azumanga-daioh-real-facts/images/5/5d/Oh_saka.jpg/revision/latest?cb=20240811214642'}}
                    style={{width:40,height:40,marginRight:10}}
                  />
                  <Text style={{color: 'white', fontSize: 12}}>Osaka App</Text>
                </View>
              ),
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: "#000000c0"
              },
              headerTitleStyle:{
                color: 'white'
              } 
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>      
    </>
    
      
  )
}