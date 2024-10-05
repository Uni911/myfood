import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import ImageContext from '../app/ImageContext';

const LogItem = ({ foodName, calories, date, setModalVisible, setDetailsData }) => {
  const { selectedImage } = React.useContext(ImageContext);

  const handlePress = () => {
    setDetailsData({ foodName, calories, date, selectedImage });  // Pass the image URI along with other details
    setModalVisible(true);
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View className="bg-gray-200 rounded-lg p-4 mb-2 flex-row items-center">
        <View className="w-12 h-12 bg-gray-100 rounded-md mr-4">
          {selectedImage ? (
            <Image 
              source={{ uri: selectedImage }} 
              style={{ width: 50, height: 50, borderRadius: 6 }} 
            />
          ) : (
            <Text>No Image</Text>  // Fallback if no image
          )}
        </View>
        <View>
          <Text className="text-white text-lg">{foodName}</Text>
          <Text className="text-white text-lg">{calories} kcal {date}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default LogItem;
