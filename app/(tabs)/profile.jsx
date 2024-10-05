import { View, Text, Stylesheets, SafeAreaView } from 'react-native';
import React from 'react';
import { useLocalSearchParams } from 'expo-router';  // To retrieve route parameters
import { AnimatedCircularProgress } from 'react-native-circular-progress';

const Profile = () => {
  // Get the parameters from the route
  const { gender, age, height, weight } = useLocalSearchParams();
  const calorieConsumed = 1200;
  const calorieGoal = 1500;

  return (
    <SafeAreaView className="flex-1 bg-black">
      <View className="flex-1 bg-black items-center p-5">
        <Text className="text-white text-4xl font-pbold mb-10">Profile</Text>
        <View className="flex-row mb-4 justify-between">
          <Text className="text-white text-2xl font-semibold w-24">Gender:</Text>
          <Text className="text-white text-2xl">{gender}</Text>
        </View>

        <View className="flex-row mb-4 justify-between">
          <Text className="text-white text-2xl font-semibold w-24">Age:</Text>
          <Text className="text-white text-2xl">{age}</Text>
        </View>

        <View className="flex-row mb-4 justify-between">
          <Text className="text-white text-2xl font-semibold w-24">Height:</Text>
          <Text className="text-white text-2xl">{height}</Text>
        </View>

        <View className="flex-row mb-10 justify-between">
          <Text className="text-white text-2xl font-semibold w-24">Weight:</Text>
          <Text className="text-white text-2xl">{weight}</Text>
        </View>


        <Text className="text-white text-xl font-bold self-start mt-4">Daily Calorie</Text>
        <View className="absolute top-1/2 justify-center items-center mt-8 pt-8">
          <AnimatedCircularProgress
            size={250}
            width={12}
            fill={(calorieConsumed / calorieGoal) * 100}
            tintColor="#14E869"
            backgroundColor="#244237"
          >{() => (
            <Text className="text-white text-3xl font-regular">
              {`${calorieConsumed}/${calorieGoal}kcal`}
            </Text>
          )}
          </AnimatedCircularProgress>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Profile;
