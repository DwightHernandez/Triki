import React from 'react';
// Importamos los componentes nativos, incluyendo Image para el logo
import { View, Text, Image, StyleSheet } from 'react-native';

function Footer() {
    return (
        <View style={styles.footer}>
            <View style={styles.footerContent}>
                <View style={styles.footerLogo}>
                    {/* En React Native, las imágenes locales usan require() */}
                    <Image 
                        source={require('../../assets/images/icon.png')} 
                        style={styles.footerLogoImg} 
                    />
                </View>
                <View style={styles.footerTextContainer}>
                    <Text style={styles.footerName}>Realizado por Dwight Hernández</Text>
                    <Text style={styles.footerCopy}>© {new Date().getFullYear()} Juego</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    footer: {
        width: '100%',
        paddingVertical: 20,
        marginTop: 30,
        borderTopWidth: 1,
        borderTopColor: '#eee',
        backgroundColor: '#fafafa',
    },
    footerContent: {
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
    },
    footerLogo: {
        marginBottom: 5,
    },
    footerLogoImg: {
        width: 40,
        height: 40,
        resizeMode: 'contain',
    },
    footerTextContainer: {
        alignItems: 'center',
        gap: 4,
    },
    footerName: {
        fontSize: 14,
        fontWeight: '500',
        color: '#666',
    },
    footerCopy: {
        fontSize: 12,
        color: '#999',
    },
});

export default Footer;
