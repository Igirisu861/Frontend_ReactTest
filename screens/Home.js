
import React from 'react'
import {SafeAreaView, Image, Text} from 'react-native'

export default function Home(){
    return(
        <>
            <SafeAreaView style={{alignItems: 'center'}}>
                <Text style={{fontSize: 40}}>Sata Andagi</Text>
                <Image
                    source={{uri: 'https://c4.wallpaperflare.com/wallpaper/42/974/347/ayumu-azumanga-daioh-great-leader-osaka-anime-azumanga-hd-art-wallpaper-preview.jpg'}}
                    style={{width:500,height:500,marginRight:10}}
                    
                />
                
            </SafeAreaView>
        </>
    )
}