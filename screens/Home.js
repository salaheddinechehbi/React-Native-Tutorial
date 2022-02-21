import React, { useState, useEffect } from "react";
import { Alert, Button, Image, SafeAreaView, ScrollView, StatusBar, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
//import http from "../utils/http";
import axios from "axios";
import { styles } from "./styles/homeStyle"
import { WebView } from 'react-native-webview';

const CustomStatusBar = (
    {
        backgroundColor,
        barStyle = 'dark-content'
    }
) => {
    const insets = useSafeAreaInsets()

    return (
        <View style={{ height: insets.top, backgroundColor}}>
            <StatusBar
                animated={true}
                backgroundColor={backgroundColor}
                barStyle={barStyle}
            />
        </View>
    )
}

const Home = ({navigation}) =>{

    const [data, setData] = useState([])
    const [ur, setUr] = useState('http://172.16.255.254:8002/index.php?zone=vgc')
     
    const submitForm = () => {
        //Alert.alert("Salah Eddine")
        const formData = new FormData()
        formData.append('auth_user', "")
        formData.append('auth_pass', "")
        formData.append('redirurl', "https://www.youtube.com/")
        formData.append('zone', "vgc")
        const ur = "https://www.youtube.com/"
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        axios.post('http://172.16.255.254:8002/index.php?zone=vgc', formData, config).then(res => {
            console.log("full")
            
        }).catch(err => {
            console.log(err)
        })
    }
    /* useEffect( () => {
        async function getOrders() {
            try {
              let dataCategs = await http.get('/categories')
              setData(dataCategs.data);
              console.log(dataCategs)
            } catch (error) {
              alert(error);
            }
          }
        getOrders();
    }, []); */

    const f = 'http://172.16.255.254:8002/index.php?zone=vgc'
    useEffect( () => {
        
    }, [])

    return (
        <View style={{ backgroundColor: '#fff'}}>
            <CustomStatusBar backgroundColor="white" />
            <SafeAreaView style={styles.header}>
                <View style={{ flex: 0.75}}>
                    <Text style={styles.headerText}>
                        React Native Guide
                    </Text>
                </View>
                <View style={{ flex: 0.2, alignItems: 'flex-end', paddingTop: 20 }}>
                    <Image source={require('../assets/img/Fast.jpg')} style={styles.headerImage} /> 
                </View>
            </SafeAreaView>
            <ScrollView>
                <View style={{padding: 20, flexDirection: "row",flex: 1, 
                                alignItems: "center", alignContent: "center", 
                                justifyContent: "space-around"}}>
                    <Button style={{flex: 1}}
                        onPress={() => navigation.navigate('DrawerLayout')}
                        title="Drawer"
                        color="#156584"
                        accessibilityLabel="Learn more about this purple button"
                    />
                    <Button style={{flex: 1}}
                        onPress={() => navigation.navigate('Modal')}
                        title="Grid List"
                        color="#361596"
                        accessibilityLabel="Learn more about this purple button"
                    />
                    <Button style={{flex: 1}}
                        onPress={() => navigation.navigate('AnimatedList')}
                        title="Animated List"
                        color="#845584"
                        accessibilityLabel="Learn more about this purple button"
                    />
                    
                </View>
                <View style={{padding: 20, flexDirection: "row",flex: 1, 
                                alignItems: "center", alignContent: "center", 
                                justifyContent: "space-around"}}>
                    <Button style={{flex: 1}}
                        onPress={() => navigation.navigate('CardImage')}
                        title="Card Image"
                        color="#111"
                        accessibilityLabel="Learn more about this purple button"
                    />
                    <Button style={{flex: 1}}
                        onPress={() => navigation.navigate('Covid')}
                        title="Covid"
                        color="#321854"
                        accessibilityLabel="Learn more about this purple button"
                    />
                    <Button style={{flex: 1}}
                        onPress={() => navigation.navigate('Wallet')}
                        title="Wallet"
                        color="#841584"
                        accessibilityLabel="Learn more about this purple button"
                    />
                    
                </View>
                <View style={{padding: 20, flexDirection: "row",flex: 1, 
                                alignItems: "center", alignContent: "center", 
                                justifyContent: "space-around"}}>
                    <Button style={{flex: 1}}
                        onPress={submitForm}
                        title="Portail"
                        color="#841584"
                        accessibilityLabel="Learn more about this purple button"
                    />
                </View>
                <View style={{padding: 20, flexDirection: "row",flex: 1, 
                                alignItems: "center", alignContent: "center", 
                                justifyContent: "space-around"}}>
                    <WebView style={{height: 10, display: 'none'}} source={{ uri: ur }} />
                </View>
            </ScrollView>
            {/* <View style={styles.imageContainer}>
                <View style={styles.imageView}>
                    <Image source={{ uri : data[0].icon }} style={styles.imageItem} />
                </View>
                <View style={styles.imageView}>
                    <Image source={{ uri : data[1].icon }} style={styles.imageItem} />
                </View>
            </View> */}
        </View>
    );
}

export default Home
