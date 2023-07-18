import React from 'react';
import {  View } from 'react-native';
import { ListItem } from '../components/ListItem';
import {Entypo} from '@expo/vector-icons/Entypo';
import { theme } from '../theme';
export const Settingsss = () => {
    return (
      <View style={{ width :'100%',backgroundColor:'red' }}>
        <ListItem
          label = 'Categories'
          detail = {<Entypo name="chevron-thin-right" color = {theme.colors.card}/>}
        />
        <ListItem
          label = 'Categories'
          detail = {<Entypo name="chevron-thin-right" color = {theme.colors.card}/>}
        />
        <ListItem
          label = 'Categories'
          detail = {<Entypo name="chevron-thin-right" color = {theme.colors.card}/>}
        />
      </View>
    );
  }