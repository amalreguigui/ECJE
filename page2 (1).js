import { Feather, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import {
    Image,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';

export default function DashboardScreen() {
  // Données des cartes pour simplifier le code
  const cards = [
    { title: 'Mes tâches prioritaires', sub: '2 tâches', icon: null },
    { title: 'Date limite', sub: '', icon: 'timer-sand' },
    { title: 'Formation', sub: '1 formation', icon: 'lightbulb-outline' },
    { title: 'Événements', sub: '1 événement', icon: 'account-group-outline' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* Header identique à la page de création */}
      <View style={styles.header}>
        <Image source={require('../assets/images/logo.png')} style={styles.logo} resizeMode="contain" />
        <View style={styles.headerIcons}>
          <Ionicons name="notifications-outline" size={24} color="black" style={{ marginRight: 15 }} />
          <Ionicons name="menu" size={28} color="black" />
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {/* Barre de recherche */}
        <View style={styles.searchSection}>
          <Feather name="search" size={20} color="#999" style={styles.searchIcon} />
          <TextInput style={styles.searchInput} placeholder="chercher..." />
        </View>

        <Text style={styles.welcomeText}>Bonjour Foulen !</Text>

        {/* Liste des cartes */}
        {cards.map((card, index) => (
          <View key={index} style={styles.card}>
            <View style={styles.cardLeft}>
              <Text style={styles.cardTitle}>{card.title}</Text>
              {card.sub !== '' && <Text style={styles.cardSub}>{card.sub}</Text>}
            </View>
            
            <View style={styles.cardRight}>
              {card.icon && (
                <MaterialCommunityIcons name={card.icon} size={30} color="#333" style={styles.cardIcon} />
              )}
              <TouchableOpacity style={styles.voirPlus}>
                <Text style={styles.voirPlusText}>voir plus</Text>
                <Ionicons name="caret-forward" size={16} color="black" />
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Barre de navigation basse (Tab Bar) */}
      <View style={styles.tabBar}>
        <Ionicons name="calendar-outline" size={24} color="white" />
        <Ionicons name="list-outline" size={24} color="white" />
        <Ionicons name="home" size={28} color="white" />
        <Ionicons name="briefcase-outline" size={24} color="white" />
        <Ionicons name="person-outline" size={24} color="white" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    height: 60,
  },
  logo: { width: 80, height: 40 },
  headerIcons: { flexDirection: 'row', alignItems: 'center' },
  content: { paddingHorizontal: 20, paddingBottom: 100 },
  searchSection: {
    flexDirection: 'row',
    backgroundColor: '#F0F0F0',
    borderRadius: 20,
    alignItems: 'center',
    paddingHorizontal: 15,
    height: 40,
    marginVertical: 20,
  },
  searchIcon: { marginRight: 10 },
  searchInput: { flex: 1, fontSize: 14 },
  welcomeText: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#1A3050',
    marginBottom: 25,
  },
  card: {
    backgroundColor: '#E8E8E8',
    borderRadius: 20,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  cardTitle: { fontSize: 18, fontWeight: 'bold', color: '#000' },
  cardSub: { fontSize: 14, color: '#666', marginTop: 5 },
  cardRight: { alignItems: 'flex-end', justifyContent: 'space-between' },
  cardIcon: { marginBottom: 10 },
  voirPlus: { flexDirection: 'row', alignItems: 'center' },
  voirPlusText: { fontSize: 14, fontWeight: '600', marginRight: 5 },
  tabBar: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: '#C41212',
    height: 60,
    borderRadius: 30,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  }
});
