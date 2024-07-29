import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { DoneTasksScreen } from "../pages/DoneTasks";
import { AllTasksScreen } from "../pages/AllTasks";
import { PendentTasksScreen } from "../pages/PendentTasks";


const Tab = createBottomTabNavigator();

export default  () => {

    return(
        <Tab.Navigator
            initialRouteName="Todas as Tarefas"
        >
                

                <Tab.Screen 
                    name="Tarefas Concluídas"
                    component={DoneTasksScreen}
                />


                <Tab.Screen 
                    name="Todas as Tarefas"
                    component={AllTasksScreen}
                />


                <Tab.Screen 
                    name="Todas Pendentes"
                    component={PendentTasksScreen}
                />
        </Tab.Navigator>
    )
}