import React, { useState, useEffect } from "react";
import { Dimensions, Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import http from "../utils/http";
import { styles } from "./styles/homeStyle"

const {width, height} = Dimensions.get("screen")
const windowWidth = Dimensions.get('screen').width

class CategoryItem extends React.PureComponent {
    render() {
      return (
        <View>
        <TouchableOpacity activeOpacity={0.85}  onPress={this.props.onPress} style={[stylesH.categoryItem, {backgroundColor : this.props.backgroundColor}]}>
        <Image source={{ uri: this.props.icon }} style={{ width: 20, height: 20, borderRadius: 10 }} />
        <Text style={stylesH.categoryItemTitle}>{this.props.name}</Text>
      </TouchableOpacity>
      </View>
      )
    }
  }

const Home = () =>{

    const [data, setData] = useState([])
    
    useEffect( () => {
        /* async function getOrders() {
          try {
            let dataCategs = await http.get('/categories')
            setData(dataCategs.data);
            console.log(data[0])
          } catch (error) {
            alert(error);
          }
        }
        getOrders(); */
    }, []);

    return (
        <View>
            <SafeAreaView style={styles.header}>
                <View style={{ flex: 0.6}}>
                    <Text style={styles.headerText}>
                        Find Your Guide
                    </Text>
                </View>
                <View style={{ flex: 0.38, alignItems: 'flex-end', paddingTop: 20 }}>
                    <Image source={require('../assets/img/Fast.jpg')} style={styles.headerImage} /> 
                </View>
            </SafeAreaView>
            <ScrollView>
                <View style={styles.imageContainer}>
                    <View style={styles.imageView}>
                        <Image source={require('../assets/img/dsa.jpg')} style={styles.imageItem} />
                    </View>
                    <View style={styles.imageView}>
                        <Image source={require('../assets/img/Fast.jpg')} style={styles.imageItem} />
                    </View>
                </View>
                <View style={styles.imageContainer}>
                    <View style={styles.imageView}>
                        <Image source={require('../assets/img/sal.jpg')} style={styles.imageItem} />
                    </View>
                    <View style={styles.imageView}>
                        <Image source={require('../assets/img/dsa.jpg')} style={styles.imageItem} />
                    </View>
                </View>
            </ScrollView>
            {/* <View style={styles.imageContainer}>
                <View style={styles.imageView}>
                    <Image source={require('../assets/img/Fast.jpg')} style={styles.imageItem} />
                </View>
                <View style={styles.imageView}>
                    <Image source={require('../assets/img/sal.jpg')} style={styles.imageItem} />
                </View>
            </View> */}
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
