import { Dimensions, StyleSheet } from "react-native";

const {width, height} = Dimensions.get("screen")

export const styles = StyleSheet.create({
    header: {
        flexDirection: 'row'
    },
    headerText: {
        color: '#000',
        paddingTop: 20,
        fontSize: 40,
        fontWeight: 'bold',
        paddingLeft: 20
    },
    headerImage: {
        paddingTop: 20,
        width: 60,
        height: 60,
        borderRadius: 50,
        alignItems: 'flex-end'
    },

    imageContainer: {
        flexDirection: "row",
        marginTop: 30
    },
    imageView: {
        width: width / 2.5,
        height: height / 3.5,
        //borderWidth: 1,
        //borderRadius: 25,
        marginHorizontal: 15
    },
    imageItem: {
        width: "100%",
        height: "100%",
        borderRadius: 15,
        opacity: 0.99,
        shadowOpacity: 25
    }
})