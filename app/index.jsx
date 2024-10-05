import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, ScrollView } from 'react-native';
import { Redirect, router } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Dropdown } from 'react-native-element-dropdown';
import { images } from '../constants';
import CustomButton from '../components/CustomButton';
import FormField from '../components/FormField';
import { StyleSheet } from 'react-native';
import React, { useState } from 'react'; // Correct useState import


const data = [
  { label: 'Male', value: 'Male' },
  { label: 'Female', value: 'Female' },
];

const DropdownComponent = ({ setForm, form }) => {
  const [isFocus, setIsFocus] = useState(false);

  return (
    <View style={styles.container}>
      <Dropdown
        theme={{
          colors: {
            background: '#292929',
            text: 'green',
            primary: '#292929',
          }
        }}
        renderItem={(item) => (
          <View style={{ backgroundColor: '#292929', padding: 15 }}>
            <Text style={{ color: 'white' }}>{item.label}</Text>
          </View>
        )}
        style={[styles.dropdown, isFocus && { borderColor: 'white', backgroundColor: '#292929' }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        dropdownStyle={styles.dropdownStyle}
        itemTextStyle={styles.itemTextStyle}
        iconStyle={styles.iconStyle}
        data={data}
        maxHeight={300}
        labelField="label"
        valueField="value"  // Ensure this points to the correct value field from your data
        placeholder={!isFocus ? 'Select Gender' : '...'}
        value={form.gender}  // Set the current gender value from form state
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setForm({ ...form, gender: item.value });  // Update form with the selected gender
          setIsFocus(false);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#292929',
    padding: 0,
  },
  dropdown: {
    height: 55,
    borderColor: 'gray',
    borderWidth: 0.8,
    borderRadius: 8,
    paddingHorizontal: 8,
    backgroundColor: '#292929'
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: '#292929',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  dropdownStyle: {
    backgroundColor: '#292929',  // Background color of dropdown options
    borderRadius: 8,
  },
  itemContainer: {
    backgroundColor: '#292929',
    padding: 0,  // Remove any default padding
    margin: 0,   // Remove any default margin
    borderBottomColor: '#666', // Border color between items
    borderBottomWidth: 1, // Optional: Add a border between items
  },
  itemTextStyle: {
    color: 'green',  // Text color of dropdown options
    backgroundColor: '#292929',
    fontSize: 16,
    paddingVertical: 10, // Padding for the dropdown items
  },
  placeholderStyle: {
    color: 'white',
    fontSize: 16,
  },
  selectedTextStyle: {
    color: 'white',
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
});

export default function App() {

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({
    gender: '',
    age: '',
    height: '',
    weight: '',
  });

  const submit = () => {
    setIsSubmitting(true);
    router.push({
      pathname: '/profile',
      params: {
        gender: form.gender,
        age: form.age,
        height: form.height,
        weight: form.weight,
      },
    });
    setIsSubmitting(false);
  };

  return (
      <SafeAreaView className="bg-black h-full">
        <ScrollView contentContainerStyle={{ height: '100%' }}>
          <View className="w-full items-center h-full pt-14 mt-4">
            <Image
              source={images.logo}
              style={{ width: '45%', height: undefined, aspectRatio: 1.62 }}
            />

            <View className="relative mt-5">
              <Text className="text-5xl text-center text-white font-bold mb-8">
                Track<Text className="text-primary text-3xl, text-center">MY</Text>
                Bite
              </Text>

              <DropdownComponent setForm={setForm} form={form} />

              <FormField
                title="Age"
                value={form.age}
                handleChangeText={(e) => setForm({
                  ...form,
                  age: e
                })}
                otherStyles="mt-3"
                keyboardType='numeric'
              />

              <FormField
                title="Weight"
                value={form.weight}
                handleChangeText={(e) => setForm({
                  ...form,
                  weight: e
                })}
                otherStyles="mt-3"
                keyboardType='numeric'
              />

              <FormField
                title="Height"
                value={form.height}
                handleChangeText={(e) => setForm({
                  ...form,
                  height: e
                })}
                otherStyles="mt-3"
                keyboardType='numeric'
              />

              <CustomButton
                title="Next"
                handlePress={submit}
                containerStyles="w_full mt-7"
                isLoading={isSubmitting}
              />
            </View>
          </View>
        </ScrollView>

        {/* <StatusBar backgroundColor='#000000' style='light'/> */}
      </SafeAreaView>
  );
}
