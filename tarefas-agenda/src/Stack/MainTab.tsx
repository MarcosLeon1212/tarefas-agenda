import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AllTasksScreen } from "../pages/AllTasks";



const Tab = createBottomTabNavigator();

export default  () => {

    return(
        <Tab.Navigator
            initialRouteName="Todas as tarefas"
           >
                

        


    
                <Tab.Screen 
                    name="Todas as Tarefas"
                    component={AllTasksScreen}
                    
                />


              
        </Tab.Navigator>
    )
}