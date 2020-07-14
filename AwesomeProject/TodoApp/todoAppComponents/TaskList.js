import React, {useState} from 'react';
import {StyleSheet, View, Text, FlatList, Alert, TouchableOpacity, Image} from 'react-native';

export default function TaskList ({listData, pressCheck, pressDelete}) {
  return (
    <FlatList
      data={listData.data}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({item, index}) => (
        <View style={styles.itemList}>
          <TouchableOpacity onPress={() => pressCheck (index)}>
            {item.isFinish == true
              ? <Image
                  source={require ('../icons/baseline_done_black_18dp.png')}
                  style={{width: 20, height: 20, flex: 1}}
                />
              : <Image
                  source={require ('../icons/baseline_alarm_black_18dp.png')}
                  style={{width: 20, height: 20, flex: 1}}
            />} 
          </TouchableOpacity>
          <Text style={styles.itemText}>{item.text}</Text>
          <TouchableOpacity onPress={() => pressDelete (index)}>
             <Image
              source={require ('../icons/baseline_delete_black_18dp.png')}
              style={{width: 20, height: 20, marginRight: 10, flex: 1}}
            /> 
          </TouchableOpacity>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create ({
  itemList: {
    padding: 16,
    marginTop: 16,
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 10,
    flexDirection: 'row',
    flex: 1,
  },
  itemText: {
    marginLeft: 10,
    flex: 8,
  },
});
