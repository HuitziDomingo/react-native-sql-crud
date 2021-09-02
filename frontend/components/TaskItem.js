import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/core'

export default ({ task, handleDelete }) => {

    const navigation = useNavigation()

    return (
        <View style={styles.itemContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('TaskFormScreen', { id: task.id })}>
                <Text style={styles.itemTitle}>{task.title}</Text>
                <Text style={styles.itemTitle}>{task.description}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnDelete} onPress={() => handleDelete(task.id)}>
                <Text style={{ color: '#fff' }}>Borrar</Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    itemContainer: {
        backgroundColor: '#333',
        padding: 20,
        marginVertical: 8,
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    itemTitle: { color: '#fff' },
    btnDelete: {
        backgroundColor: '#ee5253',
        padding: 10,
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,

        elevation: 13,
    }
})