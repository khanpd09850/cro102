import { Feather } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
    Image,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

const ProductDetailScreen = ({ route, navigation }) => {
    const { product } = route.params;
    const [quantity, setQuantity] = useState(1);

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const addToCart = () => {
        // Thêm sản phẩm vào giỏ hàng (sẽ triển khai sau)
        alert(`Đã thêm ${quantity} ${product.name} vào giỏ hàng`);
    };

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
                <TouchableOpacity
                    style={styles.cartButton}
                    onPress={() => navigation.navigate('Cart')}
                >
                    <Feather name="shopping-cart" size={24} color="#000" />
                </TouchableOpacity>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                <Image source={product.image} style={styles.productImage} resizeMode="cover" />

                <View style={styles.productInfo}>
                    <Text style={styles.productName}>{product.name}</Text>
                    {product.description && (
                        <Text style={styles.productDescription}>{product.description}</Text>
                    )}
                    <Text style={styles.productPrice}>{product.price}</Text>

                    <View style={styles.divider} />

                    <View style={styles.quantityContainer}>
                        <Text style={styles.quantityLabel}>Số lượng:</Text>
                        <View style={styles.quantityControls}>
                            <TouchableOpacity
                                style={styles.quantityButton}
                                onPress={decreaseQuantity}
                            >
                                <Feather name="minus" size={20} color="#000" />
                            </TouchableOpacity>
                            <Text style={styles.quantityValue}>{quantity}</Text>
                            <TouchableOpacity
                                style={styles.quantityButton}
                                onPress={increaseQuantity}
                            >
                                <Feather name="plus" size={20} color="#000" />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.divider} />

                    <Text style={styles.sectionTitle}>Mô tả sản phẩm</Text>
                    <Text style={styles.descriptionText}>
                        Sản phẩm chất lượng cao, được nhập khẩu và kiểm soát chất lượng nghiêm ngặt.
                        Phù hợp với không gian nhà ở, văn phòng, quán cà phê...
                    </Text>

                    <Text style={styles.sectionTitle}>Hướng dẫn chăm sóc</Text>
                    <View style={styles.careInstructions}>
                        <View style={styles.careItem}>
                            <Feather name="sun" size={24} color="#009245" />
                            <Text style={styles.careText}>Ánh sáng vừa phải</Text>
                        </View>
                        <View style={styles.careItem}>
                            <Feather name="droplet" size={24} color="#009245" />
                            <Text style={styles.careText}>Tưới 2 lần/tuần</Text>
                        </View>
                        <View style={styles.careItem}>
                            <Feather name="thermometer" size={24} color="#009245" />
                            <Text style={styles.careText}>18-25°C</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>

            <View style={styles.footer}>
                <TouchableOpacity style={styles.addToCartButton} onPress={addToCart}>
                    <Text style={styles.addToCartButtonText}>Thêm vào giỏ hàng</Text>
                </TouchableOpacity>
            </View>
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
    cartButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#f5f5f5',
        justifyContent: 'center',
        alignItems: 'center',
    },
    productImage: {
        width: '100%',
        height: 350,
    },
    productInfo: {
        padding: 20,
    },
    productName: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 5,
    },
    productDescription: {
        fontSize: 16,
        color: '#8b8b8b',
        marginBottom: 10,
    },
    productPrice: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#009245',
        marginBottom: 15,
    },
    divider: {
        height: 1,
        backgroundColor: '#e0e0e0',
        marginVertical: 15,
    },
    quantityContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    quantityLabel: {
        fontSize: 16,
        color: '#000',
    },
    quantityControls: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    quantityButton: {
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: '#f5f5f5',
        justifyContent: 'center',
        alignItems: 'center',
    },
    quantityValue: {
        fontSize: 18,
        fontWeight: 'bold',
        marginHorizontal: 15,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 10,
    },
    descriptionText: {
        fontSize: 14,
        color: '#666',
        lineHeight: 22,
        marginBottom: 20,
    },
    careInstructions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    careItem: {
        alignItems: 'center',
        flex: 1,
    },
    careText: {
        fontSize: 14,
        color: '#666',
        marginTop: 5,
        textAlign: 'center',
    },
    footer: {
        padding: 20,
        borderTopWidth: 1,
        borderTopColor: '#e0e0e0',
        backgroundColor: '#fff',
    },
    addToCartButton: {
        backgroundColor: '#009245',
        borderRadius: 10,
        paddingVertical: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    addToCartButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default ProductDetailScreen;