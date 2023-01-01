import React from 'react';
import {
    Text,
    View,
    ImageBackground,
    StyleSheet,
    TouchableOpacity,

} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const AuthMain = () => {
    
    const navigation = useNavigation();

    return (
        <View style={{ flex: 1 }}>
            <ImageBackground
                style={styles.imgBack}
                source={(require('../image/bg.jpg'))}
            >
                <Text style={styles.text}>WELLCOME</Text>

                <TouchableOpacity
                    onPress={() => { navigation.navigate("Collection") }}
                    style={styles.touch}>
                    <Text style={styles.touchText}>Click for Collection</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => { navigation.navigate("SwiperFlat") }}
                    style={styles.touch}>
                    <Text style={styles.touchText}>Click for Swiper flatlist Collection</Text>
                </TouchableOpacity>

            </ImageBackground>
        </View>

    )
}

export default AuthMain;

const styles = StyleSheet.create({
    imgBack: {
        widht: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        color: "white",
        fontSize: 36,
        fontWeight: "bold"
    },
    touch: {
        marginTop: 20,
        height: 40,
        width: 300,
        backgroundColor: "#4267B2",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 12,
        elevation: 30
    },
    touchText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold"
    }
})









