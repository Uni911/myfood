import { TouchableOpacity, Text } from 'react-native'
import React from 'react'

const CustomButton = ({ title, handlePress, containerSyles, textStyles, isLoading }) => {
    return (
        <TouchableOpacity
            onPress={handlePress}
            activeOpacity={0.7}
            className={`bg-primary rounded-xl mt-14 h-12
    justify-center items-center ${containerSyles}
    ${isLoading ? 'opacity-50' : ''}`}
            disabled={isLoading}
        >

            <Text className={`text-black
    font-psemibold text-lg ${textStyles}`}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}

export default CustomButton