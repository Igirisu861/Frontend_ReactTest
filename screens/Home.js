
import React from 'react'
import { useState } from 'react';
import {SafeAreaView, Image, Text, View, Modal, StyleSheet, Pressable, Alert} from 'react-native'

export default function Home(){
    const [modalVisible, setModalVisible] = useState(false);
    return(
        <>
            <SafeAreaView style={{alignItems: 'center', backgroundColor: 'black', flex:1, flexDirection:'column'}}>
                <Text style={{fontSize: 40, color: 'white', marginBottom: 10}}>Sata Andagi</Text>
                <Image
                    source={{uri: 'https://c4.wallpaperflare.com/wallpaper/42/974/347/ayumu-azumanga-daioh-great-leader-osaka-anime-azumanga-hd-art-wallpaper-preview.jpg'}}
                    style={{width:300,height:300,marginRight:10, borderRadius: 20}}
                />

                <View
                    style={{
                        backgroundColor: "#000000c0",
                        width: 100,
                        height: 100
                    }}>
                    <Text>a</Text>
                </View>
            </SafeAreaView>
        </>
    )
}