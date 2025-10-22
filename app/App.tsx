import * as React from 'react';
import { View } from 'react-native';
import LittleLemonHeader from './LittleLemonHeader';


export default function App () {
    return (
        <View style={{flex: 1, backgroundColor: '#495E57',}}> 
            <LittleLemonHeader/>
        </View>
    );
}