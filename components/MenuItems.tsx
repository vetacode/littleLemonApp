import * as React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const green = '#495E57';
const yellow = '#F4CE14';
const salmon = '#EE9972';
const black = '#333333';
const white = '#EDEFEE';

type MenuItem = {
  id: string;
  name: string;
};

const menuItemsToDisplay: MenuItem[] = [
  { name: 'Hummus', id: '1A' },
  { name: 'Moutabal', id: '2B' },
  { name: 'Falafel', id: '3C' },
  { name: 'Marinated Olives', id: '4D' },
  { name: 'Kofta', id: '5E' },
  { name: 'Eggplant Salad', id: '6F' },
  { name: 'Lentil Burger', id: '7G' },
  { name: 'Smoked Salmon', id: '8H' },
  { name: 'Kofta Burger', id: '9I' },
  { name: 'Turkish Kebab', id: '10J' },
  { name: 'Fries', id: '11K' },
  { name: 'Buttered Rice', id: '12L' },
  { name: 'Bread Sticks', id: '13M' },
  { name: 'Pita Pocket', id: '14N' },
  { name: 'Lentil Soup', id: '15O' },
  { name: 'Greek Salad', id: '16Q' },
  { name: 'Rice Pilaf', id: '17R' },
  { name: 'Baklava', id: '18S' },
  { name: 'Tartufo', id: '19T' },
  { name: 'Tartufo', id: '20U' },
  { name: 'Tiramisu', id: '21V' },
  { name: 'Panna Cotta', id: '22W' },
];

type ItemProps = {
  name: string;
};

const Item = ({ name }: ItemProps) => (
  <View style={menuStyles.innerContainer}>
    <Text style={menuStyles.itemText}>{name}</Text>
  </View>
);

export default function MenuItems() {
  type renderItemProps = {
    item: MenuItem;
  };
  const renderItem = ({ item }: renderItemProps) => <Item name={item.name} />;

  return (
    <View style={menuStyles.container}>
      {/* <ScrollView
        minimumZoomScale={1}
        maximumZoomScale={2}
        bouncesZoom={true}
        horizontal={false}
        style={menuStyles.innerContainer}
      > */}
      <Text style={menuStyles.headerText}>View Menu</Text>
      <FlatList
        data={menuItemsToDisplay}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      ></FlatList>
      {/* </ScrollView> */}
    </View>
  );
}

const menuStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    padding: 40,
    backgroundColor: green,
    paddingHorizontal: 40,
    paddingVertical: 20,
  },
  headerText: {
    color: 'white',
    fontSize: 40,
    flexWrap: 'wrap',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  itemText: { color: yellow, fontSize: 36 },
});
