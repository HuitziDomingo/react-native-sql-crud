import React, { useState, useEffect } from 'react'
import { TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native'
import Layout from '../components/Layout'
import { saveTask, getTask, updateTask } from '../api'

export default ({ navigation, route }) => {

    const [task, setTask] = useState({
        title: '',
        description: ''
    })

    const [editing, setEditing] = useState(false)

    const handleChange = (name, value) => setTask({ ...task, [name]: value })

    const handleSubmit = async () => {
        try {
            if (!editing)
                await saveTask(task)
            else updateTask(route.params.id, task)
            await navigation.navigate('HomeScreen')
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        if (route.params && route.params.id) {
            navigation.setOptions({ headerTitle: 'Actualizar Tarea' });
            setEditing(true);
            (async () => {
                let t = await getTask(route.params.id)
                setTask({ title: t.title, description: t.description })
            })();
        }
    }, [])

    return (
        <Layout>
            <TextInput
                placeholder="Escribe un titulo"
                style={styles.input}
                placeholderTextColor='#546574'
                onChangeText={(text) => handleChange('title', text)}
                value={task.title}
            />
            <TextInput
                placeholder="Escribe una descripcion"
                style={styles.input}
                placeholderTextColor='#546574'
                onChangeText={(text) => handleChange('description', text)}
                value={task.description}
            />
            {
                !editing ? (
                    <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
                        <Text style={styles.btnText} >Agregar</Text>
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity style={styles.btnUpdate} onPress={handleSubmit}>
                        <Text style={styles.btnText} >Actualizar</Text>
                    </TouchableOpacity>
                )
            }

        </Layout>
    )
}

const styles = StyleSheet.create({
    input: {
        width: '90%',
        fontSize: 14,
        marginBottom: 27,
        borderWidth: 1,
        borderColor: '#10ac84',
        height: 35,
        color: '#fff',
        padding: 4,
        borderRadius: 5
    },
    btn: {
        backgroundColor: '#10ac84',
        padding: 20,
        borderRadius: 50,
        width: '50%',
    },
    btnText: {
        color: '#fff',
        textAlign: 'center'
    },
    btnUpdate: {
        backgroundColor: '#367EAA', padding: 20,
        borderRadius: 50,
        width: '50%',
    }
})