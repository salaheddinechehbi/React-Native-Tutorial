import React, { useState, useEffect } from "react";
import { Button, Image, SafeAreaView, ScrollView, StatusBar, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import http from "../utils/http";
import { styles } from "./styles/homeStyle"

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
