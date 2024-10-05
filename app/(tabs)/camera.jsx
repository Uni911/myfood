import React, { useState, useEffect, useContext } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import { useRouter } from 'expo-router';
import ImageContext, { ImageProvider } from '../ImageContext';

const CameraScreen = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const { setSelectedImage } = useContext(ImageContext);  // Access context to update the image
  const router = useRouter();

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const takePicture = async () => {
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);  // Store image globally via context
      router.back();  // Go back to Home after capturing the image
    }
  };

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);  // Store image globally via context
      router.back();  // Go back to Home after selecting the image
    }
  };

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text className="text-center text-red-500">No access to camera</Text>;
  }

  return (
    <View className="flex-1 justify-center items-center bg-black">
      <TouchableOpacity
        className="bg-primary py-3 px-6 rounded-lg mb-4 font-psemibold"
        onPress={takePicture}
      >
        <Text className="text-black text-base font-semibold">Take Photo</Text>
      </TouchableOpacity>
      <TouchableOpacity
        className="bg-primary py-3 px-6 rounded-lg mb-4 font-psemibold"
        onPress={pickImage}
      >
        <Text className="text-black text-base font-semibold">Choose from Library</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CameraScreen;
