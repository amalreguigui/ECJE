import React, { useState } from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const RED = '#c0392b';
const NAVY = '#1a2340';
const BG = '#f4f5f8';
const WHITE = '#fff';
const CARD_BORDER = '#e0e3ea';

const STATS = [
  { key: 'afaire',    label: 'A faire',   count: 5, icon: '!', iconColor: RED,       iconBg: '#cdb7b7' },
  { key: 'encours',   label: 'En cours',  count: 5, icon: '↻', iconColor: '#888',    iconBg: '#e8e8e8' },
  { key: 'terminees', label: 'Terminées', count: 7, icon: '✓', iconColor: '#27ae60', iconBg: '#e6f9ee' },
];

const TASKS = [
  { id: 1, title: 'presentation de projet', date: "Aujourd'hui 5pm", priority: 'élevée',  priorityColor: RED },
  { id: 2, title: 'design ux',              date: 'Demain 12am',     priority: 'moyenne', priorityColor: '#d4a800' },
];

const TASKS_BY_TAB = {
  afaire:    TASKS,
  encours:   [],
  terminees: [],
};

// ── Logo ───────────────────────────────────────────────────────────────────────
function Logo() {
  return (
    <Image
      source={require('../assets/ecejelogo.png')}
      style={styles.logo}
      resizeMode="contain"
    />
  );
}

// ── Search Bar ─────────────────────────────────────────────────────────────────
function SearchBar({ value, onChangeText }) {
  return (
    <View style={styles.searchBox}>
      <Text style={styles.searchIcon}>🔍</Text>
      <TextInput
        style={styles.searchInput}
        placeholder="chercher..."
        placeholderTextColor="#a0a5b5"
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
}

// ── Stat Card ──────────────────────────────────────────────────────────────────
function StatCard({ stat, isActive, onPress }) {
  return (
    <TouchableOpacity
      style={[styles.statCard, isActive && styles.statCardActive]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={[styles.statLabel, isActive && styles.statLabelActive]}>
        {stat.label}
      </Text>
      <View style={[
        styles.statIconCircle,
        { backgroundColor: isActive ? 'rgb(181, 13, 13)' : stat.iconBg },
      ]}>
        <Text style={[styles.statIcon, { color: isActive ? WHITE : stat.iconColor }]}>
          {stat.icon}
        </Text>
      </View>
      <Text style={[styles.statCount, isActive && styles.statCountActive]}>
        {stat.count}
      </Text>
    </TouchableOpacity>
  );
}

// ── Task Card ──────────────────────────────────────────────────────────────────
function TaskCard({ title, date, priority, priorityColor, isFirst }) {
  return (
    <View style={[styles.taskCard, !isFirst && styles.taskCardSpacing]}>
      <View style={styles.taskInfo}>
        <Text style={styles.taskTitle}>{title}</Text>
        <Text style={styles.taskDate}>{date}</Text>
      </View>
      <View style={[styles.priorityBadge, { backgroundColor: priorityColor }]}>
        <Text style={styles.priorityText}>priorité {priority}</Text>
      </View>
    </View>
  );
}

// ── Notification Card ──────────────────────────────────────────────────────────
function NotificationCard({ onDismiss }) {
  return (
    <View style={styles.notifCard}>
      <Text style={styles.notifText}>
        Reminder : vous avez un{'\n'}réunion aujourd'hui
      </Text>
      <TouchableOpacity style={styles.notifClose} onPress={onDismiss}>
        <Text style={styles.notifCloseText}>×</Text>
      </TouchableOpacity>
    </View>
  );
}

// ── Empty State ────────────────────────────────────────────────────────────────
function EmptyState() {
  return <View style={styles.emptyBox} />;
}

// ── Bottom Nav ─────────────────────────────────────────────────────────────────
function BottomNav({ activeIndex, onPress }) {
  const icons = ['📅', '📋', '🏠', '⚙️', '👤'];
  return (
    <View style={styles.bottomNav}>
      {icons.map((icon, i) => (
        <TouchableOpacity
          key={i}
          style={styles.navItem}
          onPress={() => onPress(i)}
          activeOpacity={0.7}
        >
          <Text style={[styles.navIcon, { opacity: activeIndex === i ? 1 : 0.75 }]}>
            {icon}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

// ── Main Screen ────────────────────────────────────────────────────────────────
export default function DashboardScreen() {
  const [search, setSearch]             = useState('');
  const [activeTab, setActiveTab]       = useState('afaire');
  const [activeNav, setActiveNav]       = useState(2);
  const [notifVisible, setNotifVisible] = useState(true);

  const activeLabel   = STATS.find(s => s.key === activeTab)?.label ?? '';
  const tasks         = TASKS_BY_TAB[activeTab] ?? [];
  const filteredTasks = tasks.filter(t =>
    t.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor={BG} />

      {/* TOP BAR */}
      <View style={styles.topBar}>
        <Logo />
        <View style={styles.topBarIcons}>
          <TouchableOpacity style={styles.iconBtn}>
            <Text style={styles.topBarIcon}>🔔</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.iconBtn, { marginLeft: 14 }]}>
            <Text style={styles.topBarIcon}>☰</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* SEARCH */}
      <View style={styles.searchWrap}>
        <SearchBar value={search} onChangeText={setSearch} />
      </View>

      {/* BACK */}
      <TouchableOpacity style={styles.backBtn}>
        <Text style={styles.backIcon}>←</Text>
      </TouchableOpacity>

      {/* SCROLL */}
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.greeting}>Bonjour Foulen !</Text>
        <Text style={styles.sectionTitle}>Mes tâches</Text>

        {/* Stat Cards */}
        <View style={styles.statRow}>
          {STATS.map(s => (
            <StatCard
              key={s.key}
              stat={s}
              isActive={activeTab === s.key}
              onPress={() => setActiveTab(s.key)}
            />
          ))}
        </View>

        {/* Tasks */}
        <Text style={styles.sectionTitle}>
          Tâches à {activeLabel.toLowerCase()}
        </Text>

        {filteredTasks.length > 0
          ? filteredTasks.map((t, i) => (
              <TaskCard key={t.id} {...t} isFirst={i === 0} />
            ))
          : <EmptyState />
        }

        {/* Notifications */}
        <Text style={styles.sectionTitle}>Notifications</Text>
        {notifVisible && (
          <NotificationCard onDismiss={() => setNotifVisible(false)} />
        )}

        <View style={{ height: 24 }} />
      </ScrollView>

      {/* BOTTOM NAV */}
      <BottomNav activeIndex={activeNav} onPress={setActiveNav} />
    </SafeAreaView>
  );
}

// ── Styles ─────────────────────────────────────────────────────────────────────
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: BG,
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 18,
    paddingTop: 12,
    paddingBottom: 8,
    backgroundColor: BG,
  },
  logo: {
    width: 90,
    height: 50,
  },
  topBarIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconBtn: { padding: 4 },
  topBarIcon: { fontSize: 20 },
  searchWrap: {
    paddingHorizontal: 16,
    paddingVertical: 6,
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: WHITE,
    borderRadius: 22,
    paddingHorizontal: 14,
    paddingVertical: 9,
  },
  searchIcon: {
    fontSize: 13,
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 13,
    color: NAVY,
    padding: 0,
  },
  backBtn: {
    paddingHorizontal: 16,
    paddingBottom: 4,
  },
  backIcon: {
    fontSize: 20,
    color: NAVY,
    fontWeight: '600',
  },
  scroll: { flex: 1 },
  scrollContent: {
    paddingHorizontal: 16,
    paddingTop: 8,
  },
  greeting: {
    fontSize: 24,
    fontWeight: '800',
    color: NAVY,
    marginBottom: 4,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: NAVY,
    marginTop: 14,
    marginBottom: 10,
  },
  statRow: {
    flexDirection: 'row',
  },
  statCard: {
    flex: 1,
    backgroundColor: WHITE,
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 8,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: CARD_BORDER,
    marginRight: 8,
  },
  statCardActive: {
    backgroundColor: NAVY,
    borderColor: NAVY,
  },
  statLabel: {
    fontSize: 12,
    fontWeight: '700',
    color: NAVY,
    textAlign: 'center',
    marginBottom: 6,
  },
  statLabelActive: { color: WHITE },
  statIconCircle: {
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 6,
  },
  statIcon: {
    fontSize: 14,
    fontWeight: '800',
  },
  statCount: {
    fontSize: 20,
    fontWeight: '800',
    color: NAVY,
  },
  statCountActive: { color: WHITE },
  taskCard: {
    backgroundColor: WHITE,
    borderRadius: 12,
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: CARD_BORDER,
  },
  taskCardSpacing: { marginTop: 8 },
  taskInfo: {
    flex: 1,
    marginRight: 10,
  },
  taskTitle: {
    fontSize: 13,
    fontWeight: '800',
    color: NAVY,
  },
  taskDate: {
    fontSize: 11,
    color: '#888',
    marginTop: 2,
  },
  priorityBadge: {
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  priorityText: {
    color: WHITE,
    fontSize: 10,
    fontWeight: '700',
  },
  notifCard: {
    backgroundColor:WHITE,
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
  },
  notifText: {
    color: NAVY,
    fontSize: 13,
    fontWeight: '700',
    textAlign: 'center',
    lineHeight: 20,
  },
  notifClose: {
    position: 'absolute',
    top: 8,
    right: 12,
    padding: 4,
  },
  notifCloseText: {
    color: WHITE,
    fontSize: 18,
    lineHeight: 20,
  },
  emptyBox: {
    backgroundColor: WHITE,
    borderRadius: 14,
    height: 180,
    borderWidth: 1,
    borderColor: CARD_BORDER,
  },
  bottomNav: {
    backgroundColor: RED,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 10,
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 4,
  },
  navIcon: { fontSize: 24 },
});