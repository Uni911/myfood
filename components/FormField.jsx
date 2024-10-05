import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

const FormField = ({ title, value, placeholder, handleChangeText, otherStyles, ...props }) => {
    return (
        <View className={`space-y-1 ${otherStyles}`}>
            <Text className="text-base text-gray font-pmedium">{title}</Text>
            <TouchableOpacity
                activeOpacity={1}
                className="w-full h-12 bg-black-100 border-0.5 border-gray focus:border-primary"
            >
                <TextInput
                    className="flex-1 text-white font-psemibold text-base px-4 h-full"
                    value={value}
                    placeholder={placeholder}
                    placeholderTextColor="#FFFFFF"
                    onChangeText={handleChangeText}
                    {...props}
                />
            </TouchableOpacity>
        </View>
    )
}

export default FormField