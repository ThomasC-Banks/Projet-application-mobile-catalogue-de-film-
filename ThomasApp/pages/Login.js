import { StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Login() {
return (
    <LinearGradient
        colors={['#ff0000', '#800000', '#000000']}
        style={styles.container}
    >
    <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
    >
        <ScrollView
            contentContainerStyle={styles.scrollContainer}
            keyboardShouldPersistTaps="handled"
        >
        <Text style={styles.title}>Login</Text>

        <View style={styles.inputContainer}>
            <TextInput
                placeholder="Email"
                placeholderTextColor="#ccc"
                style={styles.input}
                keyboardType="email-address"
                autoCapitalize="none"
            />
        </View>

        <View style={styles.inputContainer}>
            <TextInput
                placeholder="Password"
                placeholderTextColor="#ccc"
                style={styles.input}
                secureTextEntry={true}
            />
        </View>

        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>
        </ScrollView>
        </KeyboardAvoidingView>
    </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
},
    scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
},
    title: {
    fontSize: 32,
    color: '#fff',
    marginBottom: 40,
    fontWeight: 'bold',
},
    inputContainer: {
    width: '100%',
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 10,
    marginBottom: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
},
    input: {
    color: '#fff',
    fontSize: 16,
},
    button: {
    width: '100%',
    backgroundColor: '#800000',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
},
    buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
},
});

