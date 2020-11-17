import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Home from '../screens/Home'
import { SafeAreaView } from 'react-native'

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Devices" component={Home} />
            <Tab.Screen name="Furniture" component={Home} />
            <Tab.Screen name="Cars" component={Home} />
            <Tab.Screen name="Livestock" component={Home} />
            <Tab.Screen name="Real Estate" component={Home} />
        </Tab.Navigator>
    );
}

export default function App() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <NavigationContainer>
                <MyTabs />
            </NavigationContainer>
        </SafeAreaView>
    );
}