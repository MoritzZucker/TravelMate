import { Button, SafeAreaView, TextInput, View } from 'react-native';
import { Pressable, Text } from 'react-native';
import { Link } from 'expo-router';
import { StyleSheet, Image } from 'react-native';
import React, { useRef, useState } from 'react';
import {Picker} from '@react-native-picker/picker';
import { DatePickerModal } from 'react-native-paper-dates';


export default function TravekOptionsScreen() {
  const [text, setText] = useState('');
  const pickerRef = useRef();
  const [selectedTravelMethod, setselectedTravelMethod] = useState();
  const [selectedTravelType, setselectedTravelType] = useState();

  const [range, setRange] = React.useState({ startDate: undefined, endDate: undefined });
  const [openCal, setOpenCal] = React.useState(false);


  const onDismiss = React.useCallback(() => {
    setOpenCal(false);
  }, [setOpenCal]);

 const onConfirm = React.useCallback(
    ({ startDate, endDate }) => {
      setOpenCal(false);
      setRange({ startDate, endDate });
    },
    [setOpenCal, setRange]
  );

  

  const handleInputChange = (input) => {
    setText(input);
  }

  const handleSubmit = () => {
    
  }

  

  function open() {
    pickerRef.current.focus();
  }

  function close() {
    pickerRef.current.blur();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Date from</Text>
      <View style={{ justifyContent: 'center', flex: 1, alignItems: 'center' }}>
      <Button onPress={() => setOpenCal(true)} uppercase={false} mode="outlined">
          Pick range
        </Button>
        <DatePickerModal
          locale="en"
          mode="range"
          visible={open}
          onDismiss={onDismiss}
          startDate={range.startDate}
          endDate={range.endDate}
          onConfirm={onConfirm}
        />
        </View>

      <Text style={styles.text}>Select Travel Method</Text>
      <Picker
        style={styles.picker}
        ref={pickerRef}
        selectedValue={selectedTravelMethod}
        onValueChange={(itemValue, itemIndex) =>
          setselectedTravelMethod(itemValue)
      }>
        <Picker.Item label="Any" value="anymethod" />
        <Picker.Item label="Car" value="car" />
        <Picker.Item label="Train" value="train" />
        <Picker.Item label="Plane" value="plane" />
      </Picker>

      <Text style={styles.text}>Travel Type</Text>
      <Picker
        style={styles.picker}
        ref={pickerRef}
        selectedValue={selectedTravelType}
        onValueChange={(itemValue, itemIndex) =>
          setselectedTravelType(itemValue)
      }>
        <Picker.Item label="Any" value="anytype" />
        <Picker.Item label="City trip" value="city" />
        <Picker.Item label="Beach trip" value="beach" />
        <Picker.Item label="Mountain trip" value="mountain" />
        <Picker.Item label="Roundtrip" value="roundtrip" />
        <Picker.Item label="Party trip" value="party" />
      </Picker>


      <Button
        title="Submit"
        onPress={handleSubmit}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 10, 

  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'blue',
    marginBottom: 25,
    marginLeft: 10,
    marginRight: 10,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
    marginTop: 15,
    marginBottom: 15,
  },
  picker: {
    height: 40, 
    borderColor: 'gray', 
    borderWidth: 1, 
    width:160,
  }
});