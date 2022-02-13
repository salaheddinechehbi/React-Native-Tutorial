import React from "react";
import { Image, ScrollView, StatusBar, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { styles } from "../styles/homeStyle"

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

const ImageCard = ({navigation}) =>{

    return (
        <View style={{ backgroundColor: '#fff'}}>
            <CustomStatusBar backgroundColor="white" />
            <ScrollView>
                <View style={styles.imageContainer}>
                    <View style={styles.imageView}>
                        <Image source={require('../../assets/img/dsa.jpg')} style={styles.imageItem} />
                    </View>
                    <View style={styles.imageView}>
                        <Image source={require('../../assets/img/Fast.jpg')} style={styles.imageItem} />
                    </View>
                </View>
                <View style={styles.imageContainer}>
                    <View style={styles.imageView}>
                        <Image source={require('../../assets/img/sal.jpg')} style={styles.imageItem} />
                    </View>
                    <View style={styles.imageView}>
                        <Image source={require('../../assets/img/dsa.jpg')} style={styles.imageItem} />
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

export default ImageCard
