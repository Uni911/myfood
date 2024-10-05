import React, { useState } from 'react';
import { View, Text, ScrollView, SafeAreaView, Modal, Button, Image } from 'react-native';
import LogItem from '../../components/LogItem';

const Home = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [detailsData, setDetailsData] = useState(null);

  return (
    <SafeAreaView className="flex-1 bg-black">
      <View className="flex-1 bg-black p-4">
        <Text className="text-white text-4xl font-pbold mb-4 text-center">Log</Text>
        <ScrollView className="bg-black-100 flex-1 m-1 p-4 rounded">
          <LogItem 
            foodName="Food name 1" 
            calories={100} 
            date="29/09/2024"
            setModalVisible={setModalVisible}
            setDetailsData={setDetailsData} 
          />
          <LogItem 
            foodName="Food name 2" 
            calories={200} 
            date="27/09/2024" 
            setModalVisible={setModalVisible}
            setDetailsData={setDetailsData} 
          />
        </ScrollView>
      </View>

      {/* Full-Screen Modal for displaying details */}
      {detailsData && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View className="flex-1 justify-center items-center bg-black bg-opacity-90">
            <View className="flex-1 w-full justify-center p-4">
              {/* Full screen modal content */}
              <View className="items-center mb-8">
                {/* Display image if available */}
                {detailsData.selectedImage && (
                  <Image 
                    source={{ uri: detailsData.selectedImage }} 
                    style={{ width: 200, height: 200, borderRadius: 10, marginBottom: 20 }}
                  />
                )}
                <Text className="text-white text-3xl mb-4">{detailsData.foodName}</Text>
                <Text className="text-white text-lg mb-2">Calories: {detailsData.calories}</Text>
                <Text className="text-white text-lg mb-2">Date: {detailsData.date}</Text>
              </View>

              {/* Adjusted button placement */}
              <View className="items-center">
                <Button title="Close" onPress={() => setModalVisible(false)} />
              </View>
            </View>
          </View>
        </Modal>
      )}
    </SafeAreaView>
  );
};

export default Home;
