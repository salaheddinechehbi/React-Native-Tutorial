import React, { useState, useEffect } from "react";
import { Button, Image, SafeAreaView, ScrollView, FlatList, Text, View, StatusBar, StyleSheet, Animated } from "react-native";
import http from "../../utils/http";

const Home = ({navigation}) =>{

    const SPACING = 20
    const AVATAR_SIZE = 70
    const BG_IMAGE = "https://www.pexels.com/photo/white-and-pink-flower-on-white-ceramic-plate-9988443/"
    const [data, setData] = useState([])
    
    useEffect( () => {
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
    }, []);

    const scrollY = React.useRef(new Animated.Value(0)).current
    const ITEM_SIZE = AVATAR_SIZE + SPACING  * 3

    return (
        <View style={{flex: 1, backgroundColor: '#fff'}}>

            <Image
                source={require('../../assets/img/pexels-photo-8.jpeg')}
                style={StyleSheet.absoluteFillObject}
                blurRadius={80}
            />

            <Animated.FlatList 
                data={data}
                onScroll={Animated.event(
                    [{ nativeEvent: {contentOffset: {y: scrollY}} }],
                    { useNativeDriver: true }
                )}
                keyExtractor={item => item.id}
                contentContainerStyle={{
                    padding: SPACING,
                    paddingTop: StatusBar.currentHeight || 42
                }}
                renderItem={({item, index}) => {

                    const inputRange = [
                        -1,
                        0,
                        ITEM_SIZE * index,
                        ITEM_SIZE * (index + 2)
                    ]

                    const opacityInputRange = [
                        -1,
                        0,
                        ITEM_SIZE * index,
                        ITEM_SIZE * (index + 1)
                    ]

                    const scale = scrollY.interpolate({
                        inputRange,
                        outputRange: [1, 1, 1, 0]
                    })

                    const opacity = scrollY.interpolate({
                        inputRange: opacityInputRange,
                        outputRange: [1, 1, 1, 0]
                    })

                    return <Animated.View style={{flexDirection: 'row',
                                    marginRight: SPACING / 2, 
                                    padding: SPACING,
                                    backgroundColor: 'rgba(255,255,255,0.8)',
                                    borderRadius: 12, 
                                    marginBottom: SPACING,
                                    shadowColor: "#000",
                                    shadowOffset: {
                                        width: 0,
                                        height: 10
                                    },
                                    //shadowOpacity: 0.3,
                                    elevation: 2,
                                    //zIndex: 999,
                                    shadowRadius: 20,
                                    opacity,
                                    transform: [{scale}]
                                }}
                     >
                        <Image
                            source={{uri: item.icon}}
                            style={{width: AVATAR_SIZE, height: AVATAR_SIZE, borderRadius: 50, marginRight: 5}}
                        />
                        <View>
                            <Text style={{ fontSize: 22, fontWeight: '700'}}>{item.name}</Text>
                            <Text style={{ fontSize: 18, fontWeight: '500', opacity: 0.8}}>{item.name}</Text>
                            <Text style={{ fontSize: 14, fontWeight: '500', color: '#0099cc', opacity: 0.8}}>{item.name}</Text>
                        </View>
                    </Animated.View>
                }}
            >

            </Animated.FlatList>
        </View>
    );
}

export default Home
