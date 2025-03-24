
import { useState } from "react";
import {View,StatusBar,TextInput,Button,FlatList,Text,} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addTodos } from "../Redux/todoSlides";

function Todos() {
	const list = useSelector((state) => state.todo.value);
	console.log(list);
	const [todo, setTodo] = useState(null);
	const dispatch = useDispatch();
	return (
		<View style={{ flex: 1, paddingTop: StatusBar.currentHeight }}>
			<TextInput
				value={todo}
				onChangeText={setTodo}
				style={{
					borderBottomWidth: 1,
					marginHorizontal: 10,
					marginTop: 10,
				}}
			/>
			<View style={{ marginTop: 20, marginHorizontal: 10 }}>
				<Button
					title="Add Todo"
					onPress={() => dispatch(addTodos({ name: todo }))}
				/>
			</View>
			<FlatList
				data={list}
				keyEtractor={(item) => item.name}
				renderItem={({ item }) => (
					<View style={{ padding: 10 }}>
						<Text>{item.name}</Text>
					</View>
				)}
			/>
		</View>
	);
}

export default Todos;