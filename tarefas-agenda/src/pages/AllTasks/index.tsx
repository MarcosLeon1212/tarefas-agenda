import React from "react";
import { View, Text, TextInput, ScrollView } from "react-native";
import { styles } from "./style";
import { useSelector, UseSelector } from "react-redux";
import { RootState } from "../../redux/store";

export const AllTasksScreen = (props: any) => {

    const task = useSelector((state: RootState) => state.task);

    return (
        <ScrollView>
            <View style={styles.titleArea}>
                <Text style={styles.title}>Agende suas tarefas</Text>
            </View>

            <View style={styles.newTaskArea}>
                <Text style={styles.newTaskTitle}>Digite a tarefa: {task.title} ---- {task.body}</Text>
                <TextInput 
                    placeholder="Digite a tarefa"
                    style={styles.newTaskInput}
                />
            </View>
        </ScrollView>

     

)}




