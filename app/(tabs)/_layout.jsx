import { View, Text, Image } from 'react-native'
import { Tabs, Redirect } from 'expo-router';
import { icons } from '../../constants';
import ImageContext, { ImageProvider } from '../ImageContext';

const TabIcon = ({ icon, color, name, focused }) => {
    return (
        <View className="items-center justify-center gap-1 pt-4">
            <Image
                source={icon}
                resizeMode="contain"
                tintColor={color}
                className="w-6 h-6"
            />
            <Text className={`${focused ? 'font-psemibold' : 'font-pregular'} text-xs`}
                style={{ color: color }}>
                {name}
            </Text>
        </View>
    )
}

const TabsLayout = () => {
    return (
        <ImageProvider>
            <>
                <Tabs
                    screenOptions={{
                        tabBarShowLabel: false,
                        tabBarActiveTintColor: "#14E869",
                        tabBarInactiveTintColor: "#FFFFFF",
                        tabBarStyle: {
                            backgroundColor: "#000000"
                        },
                    }}
                >
                    <Tabs.Screen
                        name="home"
                        options={{
                            title: 'List',
                            headerShown: false,
                            tabBarIcon: ({ color, focused }) => (
                                <TabIcon
                                    icon={icons.list}
                                    color={color}
                                    name="List"
                                    focused={focused}
                                />
                            )
                        }}
                    />
                    <Tabs.Screen
                        name="camera"
                        options={{
                            title: 'CameraScreen',
                            headerShown: false,
                            tabBarIcon: ({ color, focused }) => (
                                <TabIcon
                                    icon={icons.camera}
                                    color={color}
                                    name="Camera"
                                    focused={focused}
                                />
                            )
                        }}
                    />
                    <Tabs.Screen
                        name="profile"
                        options={{
                            title: 'Profile',
                            headerShown: false,
                            tabBarIcon: ({ color, focused }) => (
                                <TabIcon
                                    icon={icons.profile}
                                    color={color}
                                    name="Profile"
                                    focused={focused}
                                />
                            )
                        }}
                    />
                </Tabs>
            </>
        </ImageProvider>
    )
}

export default TabsLayout