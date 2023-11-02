import { useEffect, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

function PickShop({ navigation }) {
    const [shops, setShops] = useState([])

    useEffect(() => {
        fetch('https://653f4a7f9e8bd3be29e02d15.mockapi.io/cafe')
        .then(response => response.json())
        .then(json => setShops(json))
    }, [])

    return ( 
        <View style={styles.wrapper}>
            <View style={styles.headerWrapper}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image style={styles.backImg} source={require('../assets/back.png')} />
                </TouchableOpacity>
                <Text style={styles.headerTxt}>Shops near me</Text>
                <Image style={styles.searchImg} source={require('../assets/search.png')} />
            </View>
            {
                shops.map((s) => {
                    return (
                        <View>
                            <TouchableOpacity onPress={() => navigation.navigate('Drinks')}>
                                <Image style={styles.shopImg} source={{uri: s.imgLink}} />
                                <View style={styles.statusWrapper}>
                                    <Text style={styles.status}>{s.statu}</Text>
                                    <Image style={styles.clockImg} source={require('../assets/clock.png')} />
                                    <Text style={styles.time}>{s.time}</Text>
                                    <Image style={styles.addressImg} source={require('../assets/address.png')} />
                                </View>
                                <Text style={styles.shopName}>{s.name}</Text>
                                <Text style={styles.address}>{s.address}</Text>
                            </TouchableOpacity>
                        </View>
                    )
                })
            }
        </View>
     );
}

export default PickShop;

const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        // alignItems: 'center',s
        padding: 20,

    },
    headerWrapper: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center', 
    },
    backImg: {
        width: 44,
        height: 44,
    },
    headerTxt: {
        fontWeight: 700,
        fontSize: 24,
    },
    searchImg: {
        width: 24,
        height: 24,
    },
    shopImg: {
        marginTop: 20,
        width: '100%',
        height: 110,
    },
    statusWrapper: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        marginTop: 10,
        marginBottom: 10,
    },
    status: {
        color: '#1DD75B',
        fontSize: 14,
        fontWeight: 400,
    },
    clockImg: {
        width: 18,
        height: 18,
        marginLeft: 30,
    },
    time: {
        color: '#DE3B40',
        fontSize: 14,
        fontWeight: 400,
        marginLeft: 10,
    },
    addressImg: {
        width: 14,
        height: 18,
        marginLeft: 88,
    },
    shopName: {
        fontSize: 16,
        fontWeight: 700,
        textAlign: 'left',
    },
    address: {
        fontSize: 14,
        fontWeight: 400,
        color: '#171A1F',
        marginTop: 10,
    },
})