import { useLocalSearchParams, useRouter } from 'expo-router';
import { useRef, useState } from 'react';
import {
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const CODE_LENGTH = 4;

// Shield icon built with pure React Native Views
const ShieldIcon = () => (
  <View style={styles.shieldWrapper}>
    {/* Outer shield shape */}
    <View style={styles.shieldOuter}>
      {/* Inner shield */}
      <View style={styles.shieldInner}>
        {/* Exclamation mark */}
        <View style={styles.exclamationDot} />
        <View style={styles.exclamationLine} />
      </View>
    </View>
  </View>
);

export default function VerificationScreen() {
  const [code, setCode] = useState<string[]>(Array(CODE_LENGTH).fill(''));
  const inputRefs = useRef<(TextInput | null)[]>([]);
  const router = useRouter();
  const { email } = useLocalSearchParams<{ email: string }>();

  const handleChange = (text: string, index: number) => {
    const digit = text.replace(/[^0-9]/g, '').slice(-1);
    const newCode = [...code];
    newCode[index] = digit;
    setCode(newCode);
    if (digit && index < CODE_LENGTH - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === 'Backspace' && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
      const newCode = [...code];
      newCode[index - 1] = '';
      setCode(newCode);
    }
  };

  const handleValidate = () => {
    const fullCode = code.join('');
    console.log('Code:', fullCode);
    // Add your validation logic here
  };

  const handleResend = () => {
    setCode(Array(CODE_LENGTH).fill(''));
    inputRefs.current[0]?.focus();
  };

  const isComplete = code.every((d) => d !== '');

  const maskedEmail = email
    ? '************' + email.substring(email.indexOf('@'))
    : '************@gmail.com';

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
          <Text style={styles.backArrow}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Vérification</Text>
      </View>

      {/* Body */}
      <View style={styles.body}>

        {/* Shield Icon */}
        <ShieldIcon />

        {/* Title */}
        <Text style={styles.title}>Code de vérification</Text>

        {/* Subtitle */}
        <Text style={styles.subtitle}>
          Nous avons envoyé un code de{'\n'}vérification à:
        </Text>

        {/* Masked Email */}
        <Text style={styles.email}>{maskedEmail}</Text>

        {/* OTP Boxes */}
        <View style={styles.otpRow}>
          {Array(CODE_LENGTH).fill(0).map((_, i) => (
            <TextInput
              key={i}
              ref={(ref) => (inputRefs.current[i] = ref)}
              style={styles.otpBox}
              value={code[i]}
              onChangeText={(t) => handleChange(t, i)}
              onKeyPress={(e) => handleKeyPress(e, i)}
              keyboardType="number-pad"
              maxLength={1}
              textAlign="center"
              returnKeyType="next"
              selectTextOnFocus
            />
          ))}
        </View>

        {/* Valider Button */}
        <TouchableOpacity
          style={[styles.button, !isComplete && styles.buttonDisabled]}
          onPress={handleValidate}
          disabled={!isComplete}
          activeOpacity={0.85}
        >
          <Text style={styles.buttonText}>Valider</Text>
        </TouchableOpacity>

        {/* Resend */}
        <View style={styles.resendRow}>
          <Text style={styles.resendText}>Vous n'avez pas reçu le code ? </Text>
          <Pressable onPress={handleResend}>
            <Text style={styles.resendLink}>Renvoyer</Text>
          </Pressable>
        </View>

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
    paddingHorizontal: 18,
    paddingVertical: 14,
    borderBottomWidth: 0.5,
    borderBottomColor: '#E5E7EB',
  },
  backBtn: {
    padding: 4,
    marginRight: 12,
  },
  backArrow: {
    fontSize: 20,
    color: '#111',
  },
  headerTitle: {
    fontSize: 17,
    fontWeight: '600',
    color: '#111',
    letterSpacing: 0.2,
  },

  // Body
  body: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 36,
    paddingTop: 52,
  },

  // Shield Icon
  shieldWrapper: {
    marginBottom: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  shieldOuter: {
    width: 72,
    height: 80,
    borderWidth: 2,
    borderColor: '#1A1A2E',
    borderRadius: 12,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 36,
    borderBottomRightRadius: 36,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  shieldInner: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },
  exclamationLine: {
    width: 3,
    height: 20,
    backgroundColor: '#1A1A2E',
    borderRadius: 2,
  },
  exclamationDot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#1A1A2E',
    marginBottom: 2,
  },

  // Text
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#111',
    marginBottom: 12,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 6,
  },
  email: {
    fontSize: 15,
    fontWeight: '600',
    color: '#111',
    marginBottom: 36,
    letterSpacing: 0.3,
  },

  // OTP
  otpRow: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 40,
  },
  otpBox: {
    width: 58,
    height: 58,
    borderWidth: 1.5,
    borderColor: '#D1D5DB',
    borderRadius: 10,
    fontSize: 22,
    fontWeight: '700',
    color: '#111',
    backgroundColor: '#FFFFFF',
  },

  // Button
  button: {
    width: '100%',
    height: 52,
    backgroundColor: '#1A1A2E',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 22,
  },
  buttonDisabled: {
    backgroundColor: '#9CA3AF',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.3,
  },

  // Resend
  resendRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  resendText: {
    fontSize: 13,
    color: '#6B7280',
  },
  resendLink: {
    fontSize: 13,
    color: '#6400cf',
    fontWeight: '600',
  },
});
