import { createStackNavigator } from '@react-navigation/stack'
import { Platform, StyleSheet } from 'react-native';

import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen'

import Colors from '../constants/Colors';

const ProductsStack = createStackNavigator()

const ProductsRoutes = () => {

  return (
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
  )
}

export default ProductsRoutes