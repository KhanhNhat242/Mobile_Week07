import { useEffect, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

function Home({ navigation }) {
    const [shops, setShops] = useState([])

    useEffect(() => {
        fetch('https://653f4a7f9e8bd3be29e02d15.mockapi.io/cafe')
        .then(response => response.json())
        .then(json => setShops(json))
    }, [])

    return ( 
        <View style={styles.wrapper}>
            <Text style={styles.txt}>Welcome to Cafe world</Text>
            {
                shops.map((s) => {
                    return (
                        <Image style={styles.img} source={{uri: s.imgLink}} />
                    )
                })
            }
            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('PickShop')}>
                <Text style={styles.btnTxt}>GET STARTED</Text>
            </TouchableOpacity>
        </View>
     );
}

export default Home;

const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#DEE1E6',
    },
    txt: {
        fontSize: 24,
        fontWeight: 700,
        marginTop: 50,
    }, 
    img: {
        width: 200,
        height: 70,
        marginTop: 50,
    },
    btn:{
        marginTop: 80,
        backgroundColor: '#00BDD6',
        width: 310,
        height: 50,
        borderRadius: 6,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnTxt: {
        color: '#fff', 
    },
})