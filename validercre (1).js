import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function SuccessScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      
      {/* Texte de succès */}
      <Text style={styles.successText}>Tâche créée avec</Text>
      <Text style={styles.successTextBold}>succès</Text>

      {/* Icône de validation verte */}
      <View style={styles.iconContainer}>
        <Ionicons name="checkmark-seal" size={120} color="#4CAF50" />
      </View>

      {/* Bouton pour revenir au menu ou à la liste */}
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => router.push('/menu')}
      >
        <Text style={styles.buttonText}>Continuer</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  successText: {
    fontSize: 28,
    color: '#2E7D32', // Un vert foncé élégant
    textAlign: 'center',
  },
  successTextBold: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#2E7D32',
    textAlign: 'center',
    marginTop: 5,
  },
  iconContainer: {
    marginVertical: 40,
    // Petit effet de pulsation visuelle si tu le souhaites plus tard
  },
  button: {
    backgroundColor: '#C41212',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
    marginTop: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});