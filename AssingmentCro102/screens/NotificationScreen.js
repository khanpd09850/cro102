import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    SafeAreaView,
    StatusBar
} from 'react-native';
import { Feather } from '@expo/vector-icons';

const NotificationScreen = () => {
    // Dữ liệu mẫu cho thông báo
    const notifications = [
        {
            id: '1',
            title: 'Đơn hàng đã được xác nhận',
            message: 'Đơn hàng #12345 của bạn đã được xác nhận và đang được chuẩn bị.',
            time: '10 phút trước',
            read: false,
            type: 'order'
        },
        {
            id: '2',
            title: 'Khuyến mãi mới',
            message: 'Giảm 20% cho tất cả các loại cây trồng trong nhà. Nhanh tay mua ngay!',
            time: '2 giờ trước',
            read: false,
            type: 'promotion'
        },
        {
            id: '3',
            title: 'Mẹo chăm sóc cây',
            message: 'Khám phá 5 mẹo chăm sóc cây Spider Plant để cây luôn xanh tốt.',
            time: '1 ngày trước',
            read: true,
            type: 'tip'
        },
        {
            id: '4',
            title: 'Đơn hàng đã giao thành công',
            message: 'Đơn hàng #12340 của bạn đã được giao thành công. Cảm ơn bạn đã mua sắm!',
            time: '3 ngày trước',
            read: true,
            type: 'order'
        }
    ];

    const getIconForType = (type) => {
        switch (type) {
            case 'order':
                return 'package';
            case 'promotion':
                return 'tag';
            case 'tip':
                return 'info';
            default:
                return 'bell';
        }
    };

    const renderNotificationItem = ({ item }) => (
        <TouchableOpacity
            style={[
                styles.notificationItem,
                !item.read && styles.unreadNotification
            ]}
        >
            <View style={[
                styles.iconContainer,
                { backgroundColor: item.read ? '#f0f0f0' : '#e6f7ee' }
            ]}>
                <Feather
                    name={getIconForType(item.type)}
                    size={20}
                    color={item.read ? '#8b8b8b' : '#009245'}
                />
            </View>
            <View style={styles.notificationContent}>
                <Text style={[
                    styles.notificationTitle,
                    !item.read && styles.unreadText
                ]}>
                    {item.title}
                </Text>
                <Text style={styles.notificationMessage}>{item.message}</Text>
                <Text style={styles.notificationTime}>{item.time}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />

            <View style={styles.header}>
                <Text style={styles.headerTitle}>Thông báo</Text>
                <TouchableOpacity>
                    <Feather name="more-horizontal" size={24} color="#000" />
                </TouchableOpacity>
            </View>

            <FlatList
                data={notifications}
                renderItem={renderNotificationItem}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.notificationsList}
                ListEmptyComponent={
                    <View style={styles.emptyContainer}>
                        <Feather name="bell-off" size={60} color="#e0e0e0" />
                        <Text style={styles.emptyText}>Không có thông báo nào</Text>
                    </View>
                }
            />
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
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
    },
    notificationsList: {
        padding: 20,
    },
    notificationItem: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 15,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: '#f0f0f0',
    },
    unreadNotification: {
        backgroundColor: '#f9f9f9',
        borderColor: '#e6f7ee',
    },
    iconContainer: {
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15,
    },
    notificationContent: {
        flex: 1,
    },
    notificationTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#333',
        marginBottom: 5,
    },
    unreadText: {
        fontWeight: 'bold',
        color: '#000',
    },
    notificationMessage: {
        fontSize: 14,
        color: '#666',
        marginBottom: 8,
        lineHeight: 20,
    },
    notificationTime: {
        fontSize: 12,
        color: '#8b8b8b',
    },
    emptyContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 50,
    },
    emptyText: {
        fontSize: 16,
        color: '#8b8b8b',
        marginTop: 10,
    },
});

export default NotificationScreen;