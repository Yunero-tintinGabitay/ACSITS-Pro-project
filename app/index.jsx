import { StatusBar } from 'expo-status-bar';
import { Text, View, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function App() {
    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>ACSITS-Pro</Text>
            <StatusBar style="auto" />
            <Link href="profile" style={styles.link}>Go to Profile</Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2f3b69', // Blue background color
    },
    titleText: {
        fontSize: 32, // Larger font size for emphasis
        fontFamily: 'pblack', // Assuming 'pblack' is the loaded font
        fontWeight: 'bold', // Additional emphasis
        letterSpacing: 2, // Space out the letters a bit
        color: '#FFFFFF', // White text color for contrast
        textShadowColor: 'rgba(0, 0, 0, 0.25)', // Subtle shadow for depth
        textShadowOffset: { width: 2, height: 2 }, // Shadow offset
        textShadowRadius: 4, // Blur radius for the shadow
    },
    link: {
        color: 'white', // Changed link color to white for better visibility on blue background
        marginTop: 10, // Optional: Add some margin if needed
    },
});
