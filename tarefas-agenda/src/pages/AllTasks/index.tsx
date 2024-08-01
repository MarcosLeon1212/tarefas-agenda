import React, { useState } from "react";
import { View, Text, TextInput, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { addTask, excludeTask } from "../../redux/reducers/taskReducer";

export const AllTasksScreen = () => {
    const tasks = useSelector((state: RootState) => state.task.tasks);
    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const handleAddTask = () => {
        dispatch(addTask({ title, body }));
        setTitle('');
        setBody('');
    };

    const handleExcludeTask = (id: number) => {
        dispatch(excludeTask({ id }));
    };

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
                {tasks.map((task) => (
                    <View key={task.id} style={styles.task}>
                        <Text style={styles.taskTitle}>{task.title}</Text>
                        <Text style={styles.taskBody}>{task.body}</Text>
                        <TouchableOpacity onPress={() => handleExcludeTask(task.id)}>
                            <Text style={styles.deleteButton}>Excluir</Text>
                        </TouchableOpacity>
                    </View>
                ))}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    inputContainer: {
        marginBottom: 16,
    },
    label: {
        fontSize: 18,
        marginBottom: 8,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 8,
        paddingHorizontal: 8,
    },
    button: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
    },
    tasksContainer: {
        marginTop: 16,
    },
    task: {
        marginBottom: 16,
        padding: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
    },
    taskTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    taskBody: {
        fontSize: 16,
    },
    deleteButton: {
        color: 'red',
        marginTop: 8,
    },
});
