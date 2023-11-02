import { Image, View, Text, TouchableOpacity, StyleSheet } from "react-native";

const drinks = [
    {
        name: 'Milk',
        price: 20,
    },
    {
        name: 'Origin ',
        price: 68,
    },
    {
        name: 'Salt',
        price: 5,
    },
    {
        name: 'Espresso',
        price: 9,
    },
    {
        name: 'Capuchino',
        price: 23,
    },
    {
        name: 'Weasel ',
        price: 20,
    },
    {
        name: 'Culi',
        price: 0,
    },
    {
        name: 'Milk',
        price: 9,
    },
]

function Drinks({ navigation }) {
    return ( 
        <View style={styles.wrapper}>
            <View style={styles.headerWrapper}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image style={styles.backImg} source={require('../assets/back.png')} />
                </TouchableOpacity>
                 <Text style={styles.headerTxt}>Drinks</Text>
                 <Image style={styles.searchImg} source={require('../assets/search.png')} />
            </View>
            {
                drinks.map((d) => {
                    return (
                        <View style={styles.itemWrapper}>
                            <View style={styles.itemLeft}>
                                <View style={styles.block}></View>
                                <View style={styles.detailWrapper}>
                                    <Text style={styles.drinkName}>{d.name}</Text>
                                    <View style={styles.priceWrapper}>
                                        <Image style={styles.priceImg} source={require('../assets/Frame.png')} />
                                        <Text style={styles.price}>${d.price}</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.btnWrapper}>
                                <TouchableOpacity style={styles.btn}>
                                    <Image style={styles.btnImg} source={require('../assets/desc.png')} />
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.btn}>
                                    <Image style={styles.btnImg} source={require('../assets/inc.png')} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    )
                })
            }
            <TouchableOpacity style={styles.goBtn}>
                <Text style={styles.goTxt}>GO TO CART</Text>
            </TouchableOpacity>
        </View>
     );
}

export default Drinks;

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
    itemWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        borderWidth: 1,
        borderColor: '#BCC1CA',
    },
    itemLeft: {
        display: 'flex',
        flexDirection: 'row',
    },
    block: {
        width: 60,
        height: 60, 
        backgroundColor: '#d9d9d9',
    },
    detailWrapper: {
        display: 'flex',
        justifyContent: 'space-between',
        marginLeft: 10,
        marginTop: 5,
        marginBottom: 5,
    },
    drinkName: {
        fontSize: 16, 
        fontWeight: 500,
    },
    priceWrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    priceImg: {
        width: 12,
        height: 12,
    },
    price: {
        color: '#565E6C',
        fontSize: 12,
        fontWeight: 400,
    },
    btnWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '25%',
    },
    // btn: {
    // }
    btnImg: {
        width: 20,
        height: 20,
    },
    goBtn: {
        height: 45,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#EFB034',
        marginTop: 20,
        borderRadius: 6,
    },
    goTxt: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 400,
    }
})
