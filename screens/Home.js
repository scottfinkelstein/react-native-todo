import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FlatList, Keyboard, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Task from '../components/Task';
import { addTask, deleteTask } from '../redux/todoSlice';
function Home() {
    const [task, setTask] = useState();
    // const [taskItems, setTaskItems] = useState([]);

    const taskItems = useSelector((state) => state.todo.taskItems);
    const dispatch = useDispatch();

    const handleAddTask = (task) => {
        dispatch(addTask(task));
        Keyboard.dismiss();
        setTask(null);
    }

    const handleDeleteTask = (id) => {
        dispatch(deleteTask(id));
    }

    return (
    <View style={styles.container}>
      <View style={ styles.taskWrapper }>
        <Text style={ styles.sectionTitle }>Today's Tasks</Text>

        <View style={ styles.items }>
          {
            taskItems.map((item, index) => {
              return (
                <TouchableOpacity key={ index } onPress={ () => handleDeleteTask(index) }>
                  <Task text={ item } />
                </TouchableOpacity>
              )
            })
          }
        </View>
      </View>
      <KeyboardAvoidingView
        behavior={ Platform.OS === 'ios' ? 'padding' : 'height' }
        style={ styles.writeTaskWrapper }>
        <TextInput style={ styles.input } placeholder={ 'Write a task' } value={ task } onChangeText={ text => setTask(text) } />
        <TouchableOpacity onPress={ () => handleAddTask(task) }>
          <View style={ styles.addWrapper }>
            <Text style={ styles.addText }>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
    );
}

export default Home;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#E8EAED',
    },
    taskWrapper: {
      paddingTop: 80,
      paddingHorizontal: 20,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: 'bold'
    },
    items: {
      marginTop: 30
    },
    writeTaskWrapper: {
      position: 'absolute',
      bottom: 60,
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around'
    },
    input: {
      backgroundColor: '#FFF',
      paddingVertical: 15,
      paddingHorizontal: 15,
      width: 300,
      borderRadius: 60,
      borderColor: '#C0C0C0',
      borderWidth: 1
    },
    addWrapper: {
      width: 60,
      height: 60,
      backgroundColor: '#FFF',
      borderRadius: 60,
      borderWidth: 1,
      borderColor: '#C0C0C0',
      alignItems: 'center',
      justifyContent: 'center'
    },
    addText: {
      fontSize: 30
    },
  });
  