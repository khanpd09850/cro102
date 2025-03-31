import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image,
    TouchableOpacity,
    FlatList,
    SafeAreaView,
    StatusBar,
    ActivityIndicator
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { collection, getDocs, query, limit, where } from 'firebase/firestore';
import { db } from '../firebase/config';

const HomeScreen = ({ navigation }) => {
    const [loading, setLoading] = useState(true);
    const [plants, setPlants] = useState([]);
    const [pots, setPots] = useState([]);
    const [accessories, setAccessories] = useState([]);
    const [combos, setCombos] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                // Trong thực tế, bạn sẽ lấy dữ liệu từ Firestore
                // Ở đây tôi sẽ tạo dữ liệu mẫu

                // Dữ liệu mẫu cho cây trồng
                const plantsData = [
                    {
                        id: '1',
                        name: 'Spider Plant',
                        description: 'Ưa bóng',
                        price: '250.000đ',
                        image: require('../assets/icon.png')
                    },
                    {
                        id: '2',
                        name: 'Song of India',
                        description: 'Ưa sáng',
                        price: '250.000đ',
                        image: require('../assets/icon.png')
                    },
                    {
                        id: '3',
                        name: 'Grey Star Calarthea',
                        description: 'Ưa sáng',
                        price: '250.000đ',
                        image: require('../assets/icon.png')
                    },
                    {
                        id: '4',
                        name: 'Banana Plant',
                        description: 'Ưa sáng',
                        price: '250.000đ',
                        image: require('../assets/icon.png')
                    }
                ];

                // Dữ liệu mẫu cho chậu cây
                const potsData = [
                    {
                        id: '1',
                        name: 'Planta Trắng',
                        price: '250.000đ',
                        image: require('../assets/icon.png')
                    },
                    {
                        id: '2',
                        name: 'Planta Lemon Balm',
                        price: '250.000đ',
                        image: require('../assets/icon.png')
                    },
                    {
                        id: '3',
                        name: 'Planta Rosewood',
                        price: '250.000đ',
                        image: require('../assets/icon.png')
                    },
                    {
                        id: '4',
                        name: 'Planta Dove Grey',
                        price: '250.000đ',
                        image: require('../assets/icon.png')
                    }
                ];

                // Dữ liệu mẫu cho phụ kiện
                const accessoriesData = [
                    {
                        id: '1',
                        name: 'Bình tưới CB2 SAIC',
                        price: '250.000đ',
                        image: require('../assets/icon.png')
                    },
                    {
                        id: '2',
                        name: 'Bình xịt Xiaoda',
                        price: '250.000đ',
                        image: require('../assets/icon.png')
                    },
                    {
                        id: '3',
                        name: 'Bộ cuốc xẻng mini',
                        price: '250.000đ',
                        image: require('../assets/icon.png')
                    },
                    {
                        id: '4',
                        name: 'Giá đỡ Finn Terrazzo',
                        price: '250.000đ',
                        image: require('../assets/icon.png')
                    }
                ];

                // Dữ liệu mẫu cho combo
                const combosData = [
                    {
                        id: '1',
                        name: 'Lemon Balm Grow Kit',
                        description: 'Gồm: hạt giống Lemon Balm, gói đất hữu cơ, chậu Planta, marker đánh dấu...',
                        price: '350.000đ',
                        image: require('../assets/icon.png')
                    }
                ];

                setPlants(plantsData);
                setPots(potsData);
                setAccessories(accessoriesData);
                setCombos(combosData);

                // Trong thực tế, bạn sẽ lấy dữ liệu từ Firestore như sau:
                /*
                const plantsSnapshot = await getDocs(query(collection(db, 'products'), where('category', '==', 'plants'), limit(4)));
                const plantsData = plantsSnapshot.docs.map(doc => ({
                  id: doc.id,
                  ...doc.data()
                }));
                setPlants(plantsData);
                
                // Tương tự cho các danh mục khác
                */

            } catch (error) {
                console.error('Error fetching products:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    const renderPlantItem = ({ item }) => (
        <TouchableOpacity
            style={styles.productItem}
            onPress={() => navigation.navigate('ProductDetail', { product: item })}
        >
            <Image source={item.image} style={styles.productImage} />
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productDescription}>{item.description}</Text>
            <Text style={styles.productPrice}>{item.price}</Text>
        </TouchableOpacity>
    );

    const renderPotItem = ({ item }) => (
        <TouchableOpacity
            style={styles.productItem}
            onPress={() => navigation.navigate('ProductDetail', { product: item })}
        >
            <Image source={item.image} style={styles.productImage} />
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productPrice}>{item.price}</Text>
        </TouchableOpacity>
    );

    const renderAccessoryItem = ({ item }) => (
        <TouchableOpacity
            style={styles.productItem}
            onPress={() => navigation.navigate('ProductDetail', { product: item })}
        >
            <Image source={item.image} style={styles.productImage} />
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productPrice}>{item.price}</Text>
        </TouchableOpacity>
    );

    const renderComboItem = ({ item }) => (
        <TouchableOpacity
            style={styles.comboItem}
            onPress={() => navigation.navigate('ProductDetail', { product: item })}
        >
            <View style={styles.comboContent}>
                <Text style={styles.comboName}>{item.name}</Text>
                <Text style={styles.comboDescription}>{item.description}</Text>
            </View>
            <Image source={item.image} style={styles.comboImage} />
        </TouchableOpacity>
    );

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#009245" />
            </View>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />

            <View style={styles.header}>
                <View>
                    <Text style={styles.headerTitle}>Planta - toả sáng</Text>
                    <Text style={styles.headerSubtitle}>không gian nhà bạn</Text>
                </View>
                <TouchableOpacity
                    style={styles.cartButton}
                    onPress={() => navigation.navigate('Cart')}
                >
                    <Feather name="shopping-cart" size={24} color="#000" />
                </TouchableOpacity>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                {/* Banner */}
                <View style={styles.bannerContainer}>
                    <Image
                        source={require('../assets/icon.png')}
                        style={styles.bannerImage}
                        resizeMode="cover"
                    />
                    <View style={styles.bannerOverlay}>
                        <TouchableOpacity style={styles.bannerButton}>
                            <Text style={styles.bannerButtonText}>Xem hàng mới về</Text>
                            <Feather name="arrow-right" size={20} color="#009245" />
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Cây trồng */}
                <View style={styles.sectionContainer}>
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionTitle}>Cây trồng</Text>
                        <TouchableOpacity>
                            <Text style={styles.seeMoreText}>Xem thêm Cây trồng</Text>
                        </TouchableOpacity>
                    </View>

                    <FlatList
                        data={plants}
                        renderItem={renderPlantItem}
                        keyExtractor={item => item.id}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.productList}
                    />
                </View>

                {/* Chậu cây trồng */}
                <View style={styles.sectionContainer}>
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionTitle}>Chậu cây trồng</Text>
                    </View>

                    <FlatList
                        data={pots}
                        renderItem={renderPotItem}
                        keyExtractor={item => item.id}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.productList}
                    />
                </View>

                {/* Phụ kiện */}
                <View style={styles.sectionContainer}>
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionTitle}>Phụ kiện</Text>
                        <TouchableOpacity>
                            <Text style={styles.seeMoreText}>Xem thêm Phụ kiện</Text>
                        </TouchableOpacity>
                    </View>

                    <FlatList
                        data={accessories}
                        renderItem={renderAccessoryItem}
                        keyExtractor={item => item.id}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.productList}
                    />
                </View>

                {/* Combo chăm sóc */}
                <View style={styles.sectionContainer}>
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionTitle}>Combo chăm sóc (mới)</Text>
                    </View>

                    <FlatList
                        data={combos}
                        renderItem={renderComboItem}
                        keyExtractor={item => item.id}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.productList}
                    />
                </View>

                {/* Padding bottom */}
                <View style={{ height: 20 }} />
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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
    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
    },
    headerSubtitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 5,
    },
    cartButton: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#f5f5f5',
        justifyContent: 'center',
        alignItems: 'center',
    },
    bannerContainer: {
        position: 'relative',
        marginHorizontal: 20,
        marginVertical: 10,
        borderRadius: 10,
        overflow: 'hidden',
        height: 200,
    },
    bannerImage: {
        width: '100%',
        height: '100%',
    },
    bannerOverlay: {
        position: 'absolute',
        bottom: 20,
        left: 20,
    },
    bannerButton: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    bannerButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#009245',
        marginRight: 5,
    },
    sectionContainer: {
        marginTop: 20,
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginBottom: 10,
    },
    sectionTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#000',
    },
    seeMoreText: {
        fontSize: 14,
        color: '#009245',
        textDecorationLine: 'underline',
    },
    productList: {
        paddingLeft: 20,
    },
    productItem: {
        width: 160,
        marginRight: 15,
        marginBottom: 10,
    },
    productImage: {
        width: '100%',
        height: 160,
        borderRadius: 10,
        backgroundColor: '#f5f5f5',
    },
    productName: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 8,
        color: '#000',
    },
    productDescription: {
        fontSize: 14,
        color: '#8b8b8b',
        marginTop: 2,
    },
    productPrice: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#009245',
        marginTop: 4,
    },
    comboItem: {
        flexDirection: 'row',
        width: 350,
        height: 150,
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        marginRight: 15,
        overflow: 'hidden',
    },
    comboContent: {
        flex: 1,
        padding: 15,
        justifyContent: 'center',
    },
    comboName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 8,
    },
    comboDescription: {
        fontSize: 14,
        color: '#8b8b8b',
        lineHeight: 20,
    },
    comboImage: {
        width: 150,
        height: '100%',
    },
});

export default HomeScreen;