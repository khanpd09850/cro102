import { Feather } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
    FlatList,
    Image,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';

const SearchScreen = ({ navigation }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [recentSearches, setRecentSearches] = useState([
        'Cây trồng trong nhà',
        'Chậu cây',
        'Cây lọc không khí'
    ]);

    // Dữ liệu mẫu cho tất cả sản phẩm
    const allProducts = [
        {
            id: '1',
            name: 'Spider Plant',
            category: 'Cây trồng',
            price: '250.000đ',
            image: require('../assets/icon.png')
        },
        {
            id: '2',
            name: 'Song of India',
            category: 'Cây trồng',
            price: '250.000đ',
            image: require('../assets/icon.png')
        },
        {
            id: '3',
            name: 'Planta Trắng',
            category: 'Chậu cây',
            price: '250.000đ',
            image: require('../assets/icon.png')
        },
        {
            id: '4',
            name: 'Bình tưới CB2 SAIC',
            category: 'Phụ kiện',
            price: '250.000đ',
            image: require('../assets/icon.png')
        }
    ];

    const handleSearch = (query) => {
        setSearchQuery(query);

        if (query.trim() === '') {
            setSearchResults([]);
            return;
        }

        // Tìm kiếm sản phẩm
        const results = allProducts.filter(product =>
            product.name.toLowerCase().includes(query.toLowerCase()) ||
            product.category.toLowerCase().includes(query.toLowerCase())
        );

        setSearchResults(results);
    };

    const addToRecentSearches = (query) => {
        if (query.trim() === '') return;

        // Thêm vào đầu danh sách và loại bỏ trùng lặp
        const updatedSearches = [
            query,
            ...recentSearches.filter(item => item !== query)
        ].slice(0, 5); // Giữ tối đa 5 tìm kiếm gần đây

        setRecentSearches(updatedSearches);
    };

    const clearSearch = () => {
        setSearchQuery('');
        setSearchResults([]);
    };

    const renderSearchResult = ({ item }) => (
        <TouchableOpacity
            style={styles.resultItem}
            onPress={() => navigation.navigate('ProductDetail', { product: item })}
        >
            <Image source={item.image} style={styles.resultImage} />
            <View style={styles.resultInfo}>
                <Text style={styles.resultName}>{item.name}</Text>
                <Text style={styles.resultCategory}>{item.category}</Text>
                <Text style={styles.resultPrice}>{item.price}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />

            <View style={styles.header}>
                <View style={styles.searchContainer}>
                    <Feather name="search" size={20} color="#8b8b8b" style={styles.searchIcon} />
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Tìm kiếm sản phẩm..."
                        value={searchQuery}
                        onChangeText={handleSearch}
                        onSubmitEditing={() => addToRecentSearches(searchQuery)}
                        returnKeyType="search"
                    />
                    {searchQuery.length > 0 && (
                        <TouchableOpacity onPress={clearSearch}>
                            <Feather name="x" size={20} color="#8b8b8b" />
                        </TouchableOpacity>
                    )}
                </View>
            </View>

            {searchResults.length > 0 ? (
                <FlatList
                    data={searchResults}
                    renderItem={renderSearchResult}
                    keyExtractor={item => item.id}
                    contentContainerStyle={styles.resultsList}
                />
            ) : (
                <View style={styles.recentSearchesContainer}>
                    <Text style={styles.recentSearchesTitle}>Tìm kiếm gần đây</Text>
                    {recentSearches.map((item, index) => (
                        <TouchableOpacity
                            key={index}
                            style={styles.recentSearchItem}
                            onPress={() => handleSearch(item)}
                        >
                            <Feather name="clock" size={16} color="#8b8b8b" />
                            <Text style={styles.recentSearchText}>{item}</Text>
                        </TouchableOpacity>
                    ))}

                    <Text style={styles.suggestionsTitle}>Gợi ý cho bạn</Text>
                    <View style={styles.suggestionsContainer}>
                        <TouchableOpacity style={styles.suggestionTag}>
                            <Text style={styles.suggestionText}>Cây trồng trong nhà</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.suggestionTag}>
                            <Text style={styles.suggestionText}>Chậu cây</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.suggestionTag}>
                            <Text style={styles.suggestionText}>Phụ kiện</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.suggestionTag}>
                            <Text style={styles.suggestionText}>Cây dễ chăm sóc</Text>
                        </TouchableOpacity>
                    </View>
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
        paddingHorizontal: 20,
        paddingTop: 50,
        paddingBottom: 10,
        backgroundColor: '#fff',
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        paddingHorizontal: 15,
        height: 50,
    },
    searchIcon: {
        marginRight: 10,
    },
    searchInput: {
        flex: 1,
        fontSize: 16,
        height: '100%',
    },
    resultsList: {
        padding: 20,
    },
    resultItem: {
        flexDirection: 'row',
        backgroundColor: '#f9f9f9',
        borderRadius: 10,
        padding: 15,
        marginBottom: 15,
    },
    resultImage: {
        width: 80,
        height: 80,
        borderRadius: 8,
        backgroundColor: '#f5f5f5',
    },
    resultInfo: {
        flex: 1,
        marginLeft: 15,
        justifyContent: 'center',
    },
    resultName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 5,
    },
    resultCategory: {
        fontSize: 14,
        color: '#8b8b8b',
        marginBottom: 5,
    },
    resultPrice: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#009245',
    },
    recentSearchesContainer: {
        padding: 20,
    },
    recentSearchesTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 15,
    },
    recentSearchItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
    },
    recentSearchText: {
        fontSize: 16,
        color: '#333',
        marginLeft: 10,
    },
    suggestionsTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
        marginTop: 25,
        marginBottom: 15,
    },
    suggestionsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    suggestionTag: {
        backgroundColor: '#f0f0f0',
        paddingHorizontal: 15,
        paddingVertical: 8,
        borderRadius: 20,
        marginRight: 10,
        marginBottom: 10,
    },
    suggestionText: {
        fontSize: 14,
        color: '#333',
    },
});

export default SearchScreen;