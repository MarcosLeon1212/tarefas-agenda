import React, { useState } from "react";
import { View, Text, TextInput, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useNavigation } from "@react-navigation/native";
import { addTask } from "../../redux/reducers/taskReducer";
import { styles } from "./style";

export const AllTasksScreen = (props: any) => {
    const navigation = useNavigation();
    const tasks = useSelector((state: RootState) => state.task.tasks);
    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const handleAddTask = () => {
        dispatch(addTask({ title, body }));
        setTitle('');
        setBody('');
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Digite o título da tarefa</Text>
                <TextInput 
                    style={styles.input}
                    placeholder="Título da Tarefa"
                    value={title}
                    onChangeText={setTitle}
                />

                <Text style={styles.label}>Descreva a tarefa</Text>
                <TextInput 
                    style={styles.input}
                    placeholder="Descrição da tarefa"
                    value={body}
                    onChangeText={setBody}
                />

                <TouchableOpacity style={styles.button} onPress={handleAddTask}>
                    <Text style={styles.buttonText}>Adicionar Tarefa</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.tasksContainer}>
                {tasks.map((task, index) => (
                    <View key={index} style={styles.task}>
                        <Text style={styles.taskTitle}>{task.title}</Text>
                        <Text style={styles.taskBody}>{task.body}</Text>
                    </View>
                ))}
            </View>
        </ScrollView>
    )
}