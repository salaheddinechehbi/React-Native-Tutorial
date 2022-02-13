import React, { useState, useEffect } from "react";
import { Button, Image, SafeAreaView, ScrollView, FlatList, Text, View, StatusBar, StyleSheet, Animated } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import http from "../../utils/http";

const CustomStatusBar = ( { backgroundColor, barStyle = 'dark-content' }) => {
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

const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb2458ba',
      name: 'First Item',
      icon: "https://api.hotellom.com/img/categories/wBEJMRXQ3mxaOILeugAq44h3Lu90Vey53EPBaJAC.jpg"
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd913aa197f63',
      name: 'Second Item',
      icon: "https://api.hotellom.com/img/categories/wBEJMRXQ3mxaOILeugAq44h3Lu90Vey53EPBaJAC.jpg"
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e18729d72',
      name: 'Third Item',
      icon: "https://api.hotellom.com/img/categories/wBEJMRXQ3mxaOILeugAq44h3Lu90Vey53EPBaJAC.jpg"
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53a36bb95528ba',
        name: 'First Item',
        icon: "https://api.hotellom.com/img/categories/wBEJMRXQ3mxaOILeugAq44h3Lu90Vey53EPBaJAC.jpg"
      },
      {
        id: '3ac68afc-c605-48d3-a4f8-fbd91a12770a97f63',
        name: 'Second Item',
        icon: "https://api.hotellom.com/img/categories/wBEJMRXQ3mxaOILeugAq44h3Lu90Vey53EPBaJAC.jpg"
      },
      {
        id: '58694a0f-3da1-471f-bd96-1455557211e29d72',
        name: 'Third Item',
        icon: "https://api.hotellom.com/img/categories/wBEJMRXQ3mxaOILeugAq44h3Lu90Vey53EPBaJAC.jpg"
      },
      {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53ab0b28ba',
        name: 'First Item',
        icon: "https://api.hotellom.com/img/categories/wBEJMRXQ3mxaOILeugAq44h3Lu90Vey53EPBaJAC.jpg"
      },
      {
        id: '3ac68afc-c605-48d3-a4f8-fbd910aa97f63',
        name: 'Second Item',
        icon: "https://api.hotellom.com/img/categories/wBEJMRXQ3mxaOILeugAq44h3Lu90Vey53EPBaJAC.jpg"
      },
      {
        id: '58694a0f-3da1-471f-bd96-145571e2629d72',
        name: 'Third Item',
        icon: "https://api.hotellom.com/img/categories/wBEJMRXQ3mxaOILeugAq44h3Lu90Vey53EPBaJAC.jpg"
      },
      {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53a4bb5528ba',
          name: 'First Item',
          icon: "https://api.hotellom.com/img/categories/wBEJMRXQ3mxaOILeugAq44h3Lu90Vey53EPBaJAC.jpg"
        }
  ];

const Home = ({navigation}) =>{

    const SPACING = 20
    const AVATAR_SIZE = 70
    const BG_IMAGE = "https://www.pexels.com/photo/white-and-pink-flower-on-white-ceramic-plate-9988443/"
    const [data, setData] = useState([])
    
    useEffect( () => {
        async function getOrders() {
            try {
              let dataCategs = await http.get('/catsList')
              setData(dataCategs.data.data);
              console.log(dataCategs.data)
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
            {/* <CustomStatusBar backgroundColor="white" /> */}
            <Image
                source={require('../../assets/img/pexels-photo-8.jpeg')}
                style={StyleSheet.absoluteFillObject}
                blurRadius={80}
            />

            <Animated.FlatList 
                data={data}
                keyExtractor={item => item.id}
                onScroll={Animated.event(
                    [{ nativeEvent: {contentOffset: {y: scrollY}} }],
                    { useNativeDriver: true }
                )}
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
                                    shadowOpacity: 0.3,
                                    //elevation: 2,
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
                            <Text style={{ fontSize: 18, fontWeight: '700', color: '#000'}}>{item.name}</Text>
                            <Text style={{ fontSize: 16, fontWeight: '500', opacity: 0.8, color: '#000'}}>{item.name}</Text>
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
