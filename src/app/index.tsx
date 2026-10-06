import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
// Importamos el juego usando el alias @/ que ya tiene configurado tu proyecto
import Game from '@/components/Game'; 

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.gameWrapper}>
        <Game />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // Puedes cambiar el color de fondo aquí
  },
  gameWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
