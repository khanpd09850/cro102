import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    ScrollView,
    SafeAreaView,
    StatusBar,
    FlatList
} from 'react-native';
import { Feather } from '@expo/vector-icons';

const CartScreen = ({ navigation }) => {
    // Dữ liệu mẫu cho giỏ hàng
    const [cartItems, setCartItems] = useState([
        {
            id: '1',
            name: 'Spider Plant',
            price: '250.000đ',
            quantity: 1,
            image: require('../assets/icon.png')
        },
        {
            id: '2',
            name: 'Planta Lemon Balm',
            price: '250.000đ',
            quantity: 2,
            image: require('../assets/icon.png')
        },
        {
            id: '3',
            name: 'Bình tưới CB2 SAIC',
            price: '250.000đ',
            quantity: 1,
            image: require('../assets/icon.png')
        }
    ]);

    const updateQuantity = (id, newQuantity) => {
        if (newQuantity < 1) return;

        const updatedItems = cartItems.map(item =>
            item.id === id ? { ...item, quantity: newQuantity } : item
        );
        setCartItems(updatedItems);
    };

    const removeItem = (id) => {
        const updatedItems = cartItems.filter(item => item.id !== id);
        setCartItems(updatedItems);
    };

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => {
            const price = parseInt(item.price.replace(/\D/g, ''));
            return total + (price * item.quantity);
        }, 0).toLocaleString('vi-VN');
    };

    const renderCartItem = ({ item }) => (
        <View style={styles.cartItem}>
            <Image source={item.image} style={styles.itemImage} />
            <View style={styles.itemDetails}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemPrice}>{item.price}</Text>
                <View style={styles.quantityControls}>
                    <TouchableOpacity
                        style={styles.quantityButton}
                        onPress={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                        <Feather name="minus" size={16} color="#000" />
                    </TouchableOpacity>
                    <Text style={styles.quantityValue}>{item.quantity}</Text>
                    <TouchableOpacity
                        style={styles.quantityButton}
                        onPress={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                        <Feather name="plus" size={16} color="#000" />
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity
                style={styles.removeButton}
                onPress={() => removeItem(item.id)}
            >
                <Feather name="trash-2" size={20} color="#ff3d00" />
            </TouchableOpacity>
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />

            <View style={styles.header}>
                <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => navigation.goBack()}
                >
                    <Feather name="arrow-left" size={24} color="#000" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Giỏ hàng</Text>
                <View style={{ width: 40 }} />
            </View>

            {cartItems.length > 0 ? (
                <>
                    <FlatList
                        data={cartItems}
                        renderItem={renderCartItem}
                        keyExtractor={item => item.id}
                        contentContainerStyle={styles.cartList}
                    />

                    <View style={styles.footer}>
                        <View style={styles.totalContainer}>
                            <Text style={styles.totalLabel}>Tổng cộng:</Text>
                            <Text style={styles.totalValue}>{calculateTotal()}đ</Text>
                        </View>
                        <TouchableOpacity style={styles.checkoutButton}>
                            <Text style={styles.checkoutButtonText}>Thanh toán</Text>
                        </TouchableOpacity>
                    </View>
                </>
            ) : (
                <View style={styles.emptyCartContainer}>
                    <Feather name="shopping-cart" size={80} color="#e0e0e0" />
                    <Text style={styles.emptyCartText}>Giỏ hàng trống</Text>
                    <TouchableOpacity
                        style={styles.continueShopping}
                        onPress={() => navigation.navigate('Home')}
                    >
                        <Text style={styles.continueShoppingText}>Tiếp tục mua sắm</Text>
                    </TouchableOpacity>
                </View>
            )}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 50,
        paddingBottom: 10,
        backgroundColor: '#fff',
    },
    backButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#f5f5f5',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
    },
    cartList: {
        padding: 20,
    },
    cartItem: {
        flexDirection: 'row',
        backgroundColor: '#f9f9f9',
        borderRadius: 10,
        padding: 15,
        marginBottom: 15,
    },
    itemImage: {
        width: 80,
        height: 80,
        borderRadius: 8,
        backgroundColor: '#f5f5f5',
    },
    itemDetails: {
        flex: 1,
        marginLeft: 15,
        justifyContent: 'center',
    },
    itemName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 5,
    },
    itemPrice: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#009245',
        marginBottom: 10,
    },
    quantityControls: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    quantityButton: {
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#e0e0e0',
    },
    quantityValue: {
        fontSize: 16,
        fontWeight: 'bold',
        marginHorizontal: 10,
    },
    removeButton: {
        justifyContent: 'center',
        padding: 5,
    },
    footer: {
        padding: 20,
        borderTopWidth: 1,
        borderTopColor: '#e0e0e0',
        backgroundColor: '#fff',
    },
    totalContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
    },
    totalLabel: {
        fontSize: 18,
        color: '#000',
    },
    totalValue: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#009245',
    },
    checkoutButton: {
        backgroundColor: '#009245',
        borderRadius: 10,
        paddingVertical: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    checkoutButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    emptyCartContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    emptyCartText: {
        fontSize: 18,
        color: '#8b8b8b',
        marginTop: 20,
        marginBottom: 20,
    },
    continueShopping: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        backgroundColor: '#f5f5f5',
    },
    continueShoppingText: {
        fontSize: 16,
        color: '#009245',
        fontWeight: 'bold',
    },
});

export default CartScreen;