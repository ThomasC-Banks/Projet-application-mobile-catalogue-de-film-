import { StyleSheet, Text, View} from 'react-native';

export default function Catalog() {
    return (
        <View style={styles.container}>
        <Text>Catalog</Text>
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