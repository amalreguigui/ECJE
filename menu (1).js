import { Ionicons } from '@expo/vector-icons'; // Pour l'icône de retour
import { useRouter } from 'expo-router';
import {
    Image,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

export default function MenuScreen() {
  const router = useRouter();

  // Liste des boutons avec leurs couleurs respectives
  const menuItems = [
    { title: 'Taches', color: '#C41212', route: '/page2' }, // Rouge
    { title: 'Profile', color: '#0A1128', route: '/profile' }, // Bleu Foncé
    { title: 'Notification', color: '#1E5FA1', route: '/notifications' }, // Bleu Moyen
    { title: 'Calendrier', color: '#E31B23', route: '/calendar' }, // Rouge Clair
    { title: 'Projet', color: '#141B31', route: '/projet' }, // Bleu Très Foncé
    { title: 'Événements', color: '#1B65B5', route: '/evenements' }, // Bleu
    { title: 'Formation', color: '#C41212', route: '/formation' }, // Rouge
    { title: 'Tableau de bord', color: '#0A1128', route: '/dashboard' }, // Bleu Foncé
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* Header avec bouton retour et logo */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Image 
          source={require('../assets/images/logo.png')} 
          style={styles.smallLogo}
          resizeMode="contain"
        />
        <View style={{ width: 24 }} /> 
      </View>

      <Text style={styles.menuTitle}>Menu</Text>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {menuItems.map((item, index) => (
          <TouchableOpacity 
            key={index} 
            style={[styles.menuButton, { backgroundColor: item.color }]}
            onPress={() => router.push(item.route)}
          >
            <Text style={styles.buttonText}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingTop: 10,
    height: 60,
  },
  smallLogo: {
    width: 100,
    height: 40,
  },
  menuTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
    color: '#000',
  },
  scrollContent: {
    alignItems: 'center',
    paddingBottom: 30,
  },
  menuButton: {
    width: '85%',
    height: 60,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 25,
    marginVertical: 8,
    // Ombre
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '600',
  },
});