import * as React from 'react';
import { View } from 'react-native';
import LittleLemonFooter from './LittleLemonFooter';
import LittleLemonHeader from './LittleLemonHeader';


export default function Main () {
    return (
        <>
        <View style={{flex: 1, backgroundColor: '#495E57',}}> 
            <LittleLemonHeader/>
        </View>
        <View style={{backgroundColor: '#495E57',}}> 
            <LittleLemonFooter/>
        </View>
        </>
    );
}