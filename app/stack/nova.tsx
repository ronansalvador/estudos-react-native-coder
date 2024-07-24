import Botao from '@/components/Botao'
import styles from '@/constants/styles'
import { Link } from 'expo-router'
import { Text, View } from 'react-native'

export default function TelaInicial() {
  return (
    <View style={[styles.centralizado, { gap: 10 }]}>
      <Text>Tela Nova</Text>
      <Botao>
        <Link href="/stack" style={{ color: '#fff' }}>
          voltar
        </Link>
      </Botao>
    </View>
  )
}
