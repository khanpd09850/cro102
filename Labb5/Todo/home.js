
import React, { useEffect } from "react";
import {ActivityIndicator,FlatList,StyleSheet,Text,View,} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchAPI } from "../Redux/createActionThunk";

const HomeScreen = () => {
	const dispatch = useDispatch();
	const { items, status, error } = useSelector((state) => state.datas);
	console.log(items);
	useEffect(() => {
		dispatch(fetchAPI());
	}, [dispatch]);
	console.log(">>> status : ", status);
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Danh sách bài viết</Text>

			{status === "loading" && (
				<ActivityIndicator size="large" color="#0000ff" />
			)}
			{status === "failed" && (
				<Text style={styles.error}>Lỗi: {error}</Text>
			)}

			<FlatList
				data={items}
				keyExtractor={(item) => item.id.toString()}
				renderItem={({ item }) => (
					<View style={styles.item}>
						<Text style={styles.itemTitle}>{item.title}</Text>
						<Text>{item.body}</Text>
					</View>
				)}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: { flex: 1, padding: 20 },
	title: { fontSize: 20, fontWeight: "bold", marginBottom: 10 },
	error: { color: "red" },
	item: { padding: 10, borderBottomWidth: 1, borderColor: "#ccc" },
	itemTitle: { fontWeight: "bold" },
});

export default HomeScreen;