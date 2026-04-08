import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
  Alert,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

// Person + shield icon built with pure Views
const SuccessIcon = () => (
  <View style={styles.iconWrapper}>
    {/* Person head */}
    <View style={styles.personHead} />
    {/* Person body */}
    <View style={styles.personBody} />
    {/* Shield with checkmark */}
    <View style={styles.shieldBadge}>
      <View style={styles.checkLeft} />
      <View style={styles.checkRight} />
    </View>
  </View>
);

export default function ResetPassword() {
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const router = useRouter();

  const handleReset = () => {
    if (!password || !confirm) {
      Alert.alert('Erreur', 'Veuillez remplir tous les champs');
      return;
    }
    if (password !== confirm) {
      Alert.alert('Erreur', 'Les mots de passe ne correspondent pas');
      return;
    }
    if (password.length < 6) {
      Alert.alert('Erreur', 'Le mot de passe doit contenir au moins 6 caractères');
      return;
    }
    Alert.alert('Succès', 'Mot de passe réinitialisé avec succès !');
    // Navigate to login or home
    // router.push('/');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
          <Text style={styles.backArrow}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Réinitialisation du mot de passe</Text>
      </View>

      <View style={styles.body}>

        {/* Icon */}
        <SuccessIcon />

        {/* Success title */}
        <Text style={styles.successTitle}>
          Votre code a été vérifié avec succès.
        </Text>

        {/* Description */}
        <Text style={styles.description}>
          Votre code a été vérifié avec succès.{'\n'}
          Veuillez créer un nouveau mot de{'\n'}
          passe pour votre compte.
        </Text>

        {/* New password */}
        <Text style={styles.label}>Nouveau mot de passe</Text>
        <TextInput
          style={styles.input}
          placeholder="Saisir votre mot de passe"
          placeholderTextColor="#BBBBBB"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        {/* Confirm password */}
        <Text style={styles.label}>Confirmer le mot de passe</Text>
        <TextInput
          style={styles.input}
          placeholder="Confirmer votre mot de passe"
          placeholderTextColor="#BBBBBB"
          value={confirm}
          onChangeText={setConfirm}
          secureTextEntry
        />

        {/* Button */}
        <TouchableOpacity style={styles.button} onPress={handleReset} activeOpacity={0.85}>
          <Text style={styles.buttonText}>Réinitialiser le mot de passe</Text>
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

  // Header
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderBottomWidth: 0.5,
    borderBottomColor: '#E5E7EB',
  },
  backBtn: {
    padding: 4,
    marginRight: 10,
  },
  backArrow: {
    fontSize: 20,
    color: '#111',
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111',
    flexShrink: 1,
  },

  // Body
  body: {
    flex: 1,
    paddingHorizontal: 28,
    paddingTop: 40,
  },

  // Icon
  iconWrapper: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginBottom: 24,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  personHead: {
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 2,
    borderColor: '#111',
    backgroundColor: '#FFF',
    marginBottom: 2,
    marginLeft: -10,
  },
  personBody: {
    width: 44,
    height: 24,
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    borderWidth: 2,
    borderColor: '#111',
    borderBottomWidth: 0,
    backgroundColor: '#FFF',
    marginLeft: -10,
  },
  shieldBadge: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 30,
    height: 34,
    borderWidth: 2,
    borderColor: '#111',
    borderRadius: 6,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkLeft: {
    position: 'absolute',
    width: 2.5,
    height: 8,
    backgroundColor: '#111',
    borderRadius: 1,
    transform: [{ rotate: '-45deg' }],
    left: 7,
    top: 10,
  },
  checkRight: {
    position: 'absolute',
    width: 2.5,
    height: 13,
    backgroundColor: '#111',
    borderRadius: 1,
    transform: [{ rotate: '45deg' }],
    right: 7,
    top: 7,
  },

  // Text
  successTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: '#111',
    marginBottom: 12,
    textAlign: 'left',
  },
  description: {
    fontSize: 13,
    color: '#9CA3AF',
    lineHeight: 20,
    marginBottom: 28,
    textAlign: 'left',
  },

  // Form
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#111',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#F3F4F6',
    borderRadius: 12,
    padding: 14,
    fontSize: 14,
    color: '#111',
    marginBottom: 20,
  },

  // Button
  button: {
    backgroundColor: '#1A1A2E',
    borderRadius: 14,
    padding: 16,
    alignItems: 'center',
    marginTop: 8,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
    letterSpacing: 0.2,
  },
});
