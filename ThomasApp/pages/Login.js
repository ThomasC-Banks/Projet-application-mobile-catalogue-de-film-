import { StyleSheet, Text, View, Button } from 'react-native';

export default function Login() {
    return (
        <View style={styles.container}>
        <Text>Login</Text>
        <Button title="S'inscrire" onPress={()  => {}} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#badbe6ff',
    alignItems: 'center',
    justifyContent: 'center',
    },
});