import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';

import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen'

import Colors from '../constants/Colors';

const ProductsStack = createStackNavigator()

const AppNavigator = props => {
  return (
    <NavigationContainer>
      <ProductsStack.Navigator screenOptions={{
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary,
        headerStyle: {
          backgroundColor: Platform.OS === 'android' ? Colors.primary : '',
        }
      }}>
        <ProductsStack.Screen
          name='ProductsOverview'
          component={ProductsOverviewScreen}
          options={{
            title: 'Products Overview'
          }}
        />
      </ProductsStack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator