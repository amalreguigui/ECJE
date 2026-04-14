import { Feather, Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
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

export default function AddTaskScreen() {
  const router = useRouter();
  const [task, setTask] = useState({ title: '', project: '', assignTo: '', date: '' });

  return (
    <SafeAreaView style={styles.container}>
      {/* Header : Logo, Notification et Menu */}
      <View style={styles.header}>
        <Image source={require('../assets/images/logo.png')} style={styles.logo} resizeMode="contain" />
        <View style={styles.headerIcons}>
          <Ionicons name="notifications-outline" size={24} color="black" style={{ marginRight: 15 }} />
          <Ionicons name="menu" size={28} color="black" />
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {/* Bouton Retour et Barre de Recherche */}
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>

        <View style={styles.searchSection}>
          <Feather name="search" size={20} color="#999" style={styles.searchIcon} />
          <TextInput style={styles.searchInput} placeholder="chercher..." />
        </View>

        <Text style={styles.pageTitle}>Nouvelle tâche</Text>

        {/* Formulaire */}
        <View style={styles.form}>
          <Text style={styles.label}>Titre de la tâche :</Text>
          <TextInput style={styles.input} placeholder="Titre" onChangeText={(t) => setTask({...task, title: t})} />

          <Text style={styles.label}>Projet :</Text>
          <TextInput style={styles.input} placeholder="Projet" onChangeText={(t) => setTask({...task, project: t})} />

          <Text style={styles.label}>Attribuer à :</Text>
          <TextInput style={styles.input} placeholder="Nom" onChangeText={(t) => setTask({...task, assignTo: t})} />

          <Text style={styles.label}>Date limite :</Text>
          <TextInput style={styles.input} placeholder="Date" onChangeText={(t) => setTask({...task, date: t})} />
        </View>

        {/* Boutons d'action */}
        <View style={styles.actionButtons}>
          <TouchableOpacity style={[styles.btn, styles.btnCancel]} onPress={() => router.back()}>
            <Text style={styles.btnText}>Annuler</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.btn, styles.btnCreate]}>
            <Text style={styles.btnText}>Créer</Text>
          </TouchableOpacity>
        </View>
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
  backButton: { marginVertical: 10 },
  searchSection: {
    flexDirection: 'row',
    backgroundColor: '#F0F0F0',
    borderRadius: 20,
    alignItems: 'center',
    paddingHorizontal: 15,
    height: 40,
    marginBottom: 20,
  },
  searchIcon: { marginRight: 10 },
  searchInput: { flex: 1, fontSize: 14 },
  pageTitle: { fontSize: 22, fontWeight: 'bold', color: '#1A3050', marginBottom: 20 },
  form: { marginBottom: 30 },
  label: { fontSize: 16, fontWeight: '600', marginBottom: 8, marginTop: 15 },
  input: {
    backgroundColor: '#D9D9D9',
    borderRadius: 15,
    padding: 12,
    fontSize: 14,
    color: '#333',
  },
  actionButtons: { flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 },
  btn: { width: '40%', paddingVertical: 12, borderRadius: 25, alignItems: 'center' },
  btnCancel: { backgroundColor: '#C41212' },
  btnCreate: { backgroundColor: '#34495E' },
  btnText: { color: 'white', fontWeight: 'bold', fontSize: 16 },
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
    elevation: 5,
  }
});