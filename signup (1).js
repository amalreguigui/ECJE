import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
    Image,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';

export default function SignupScreen() {
  const router = useRouter();
  const [form, setForm] = useState({ nom: '', prenom: '', email: '', password: '' });

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContent}>
        
        {/* Logo réduit en haut */}
        <Image 
          source={require('../assets/images/logo.png')} 
          style={styles.logo}
          resizeMode="contain"
        />

        <Text style={styles.title}>S'inscrire</Text>

        {/* Formulaire */}
        <View style={styles.formContainer}>
          <Text style={styles.label}>Nom</Text>
          <TextInput 
            style={styles.input} 
            placeholder="Votre nom" 
            onChangeText={(text) => setForm({...form, nom: text})}
          />

          <Text style={styles.label}>Prénom</Text>
          <TextInput 
            style={styles.input} 
            placeholder="Votre prénom" 
            onChangeText={(text) => setForm({...form, prenom: text})}
          />

          <Text style={styles.label}>Email</Text>
          <TextInput 
            style={styles.input} 
            placeholder="Email" 
            keyboardType="email-address"
            autoCapitalize="none"
            onChangeText={(text) => setForm({...form, email: text})}
          />

          <Text style={styles.label}>Mot de passe</Text>
          <TextInput 
            style={styles.input} 
            placeholder="Mot de passe" 
            secureTextEntry
            onChangeText={(text) => setForm({...form, password: text})}
          />

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Créer un compte</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => router.back()} style={{marginTop: 15}}>
            <Text style={styles.backLink}>Retour</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContent: {
    alignItems: 'center',
    paddingBottom: 40,
    paddingTop: 50,
  },
  logo: {
    width: 150,
    height: 100,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#002B5B', // Couleur sombre pour le titre
    marginBottom: 30,
  },
  formContainer: {
    width: '85%',
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 5,
    marginTop: 15,
  },
  input: {
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    fontSize: 15,
  },
  button: {
    backgroundColor: '#C41212',
    paddingVertical: 15,
    borderRadius: 12,
    marginTop: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  backLink: {
    color: '#666',
    textAlign: 'center',
    fontSize: 14,
  }
});