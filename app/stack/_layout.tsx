import { Ionicons } from '@expo/vector-icons'
import { Stack, Tabs, useNavigation } from 'expo-router'

export default function Layout(props: any) {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Inicial"
        options={{
          title: 'inicial',
        }}
      />
    </Stack>
  )
}
