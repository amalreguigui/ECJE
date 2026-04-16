import { useRouter } from 'expo-router';
import React from 'react';
import {
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

const CheckIcon = () => (
  <View style={styles.checkCircle}>
    <View style={styles.checkShort} />
    <View style={styles.checkLong} />
  </View>
);

export default function PasswordResetSuccess() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      <View style={styles.body}>

        {/* Title */}
        <Text style={styles.title}>Mot de passe réinitialisé</Text>

        {/* Green Check Icon */}
        <CheckIcon />

        {/* Messages */}
        <Text style={styles.message1}>
          Votre mot de passe a été modifié avec succès.
        </Text>

        <Text style={styles.message2}>
          Vous pouvez maintenant vous connecter{'\n'}
          avec votre nouveau mot de passe.
        </Text>

        {/* Button */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push('/')}
          activeOpacity={0.85}
        >
          <Text style={styles.buttonText}>Se connecter</Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 32,
    gap: 24,
  },

  // Title
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#111',
    textAlign: 'center',
  },

  // Green circle with fixed checkmark
  checkCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#27ec6f',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  checkShort: {
    position: 'absolute',
    width: 5,
    height: 24,
    backgroundColor: '#FFFFFF',
    borderRadius: 3,
    transform: [{ rotate: '-180deg' }],
    left: 30,
    top: 58,
  },
  checkLong: {
    position: 'absolute',
    width: 5,
    height: 44,
    backgroundColor: '#FFFFFF',
    borderRadius: 3,
    transform: [{ rotate: '-45deg' }],
    right: 28,
    top: 38,
  },

  // Messages
  message1: {
    fontSize: 14,
    color: '#111',
    textAlign: 'left',
    alignSelf: 'flex-start',
    lineHeight: 22,
  },
  message2: {
    fontSize: 14,
    color: '#111',
    textAlign: 'left',
    alignSelf: 'flex-start',
    lineHeight: 22,
    fontWeight: '700',
  },

  // Button
  button: {
    backgroundColor: '#1A1A2E',
    borderRadius: 30,
    paddingVertical: 16,
    paddingHorizontal: 48,
    alignItems: 'center',
    marginTop: 8,
    width: '100%',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
    letterSpacing: 0.2,
  },
});
