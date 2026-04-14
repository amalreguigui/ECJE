import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
    Image,
    KeyboardAvoidingView,
    Platform,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
      style={styles.container}
    >
      <View style={styles.inner}>
        
        {/* Logo */}
        <Image 
          source={require('../assets/images/logo.png')} 
          style={styles.logo}
          resizeMode="contain"
        />

        <View style={styles.formCard}>
          {/* Champ Email */}
          <Text style={styles.label}>Email</Text>
          <TextInput 
            style={styles.input} 
            placeholder="Email" 
            placeholderTextColor="#999"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />

          {/* Champ Mot de passe */}
          <Text style={styles.label}>Mot de passe</Text>
          <TextInput 
            style={styles.input} 
            placeholder="Mot de passe" 
            placeholderTextColor="#999"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />

          {/* Mot de passe oublié */}
          <TouchableOpacity style={styles.forgotContainer}>
            <Text style={styles.forgotText}>Mot de passe oublier?</Text>
          </TouchableOpacity>

          {/* Bouton Se Connecter */}
          <TouchableOpacity 
            style={styles.button}
            onPress={() => console.log('Connexion avec:', email)}
          >
            <Text style={styles.buttonText}>SE CONNECTER</Text>
          </TouchableOpacity>

          {/* Lien vers Inscription */}
          <View style={styles.footer}>
            <Text style={styles.footerText}>créer un nouveau compte? </Text>
            <TouchableOpacity onPress={() => router.push('/signup')}>
              <Text style={styles.signupLink}>S'inscrire</Text>
            </TouchableOpacity>
          </View>
        </View>

      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  inner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  logo: {
    width: 200,
    height: 120,
    marginBottom: 40,
  },
  formCard: {
    width: '100%',
    paddingHorizontal: 10,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 8,
    marginTop: 15,
  },
  input: {
    backgroundColor: '#E8E8E8',}
  });