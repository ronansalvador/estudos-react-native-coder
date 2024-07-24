import { Pressable, StyleSheet } from 'react-native'

export interface BotaoProps {
  children: React.ReactNode
  onPress?: () => void
}

export default function Botao(props: BotaoProps) {
  return (
    <Pressable
      style={({ pressed }) => [{ opacity: pressed ? 0.8 : 1 }, styles.botao]}
      onPress={props.onPress}
    >
      {props.children}
    </Pressable>
  )
}

const styles = StyleSheet.create({
  botao: {
    backgroundColor: '#3a7eff',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
    color: '#fff',
  },
})
