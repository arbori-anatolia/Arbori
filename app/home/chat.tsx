import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity, Pressable} from 'react-native';
import { Link } from 'expo-router';
import NavBar from '../components/navigationBar';

const ChatScreen = () => {
  const [selectedButton, setSelectedButton] = useState(null);

    const handleButtonPress = (buttonName) => {
      setSelectedButton(buttonName);
    };
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hello there, I am the PlantBot and I am here to answer all your questions! How can i help you today?', sender: 'bot' },
    { id: 2, text: 'I want to plant tomatoes. What would be the ideal humidity percentage for them to grow ?', sender: 'user' },
    { id: 3, text: 'Okay. The ideal hymidity percentage for tomatoes is between 65 and 75% during the night and 80 to 90% during the day', sender: 'bot' },
  ]);
  const [newMessage, setNewMessage] = useState('');

  const sendMessage = () => {
    if (newMessage.trim() === '') return;
    const message = { id: messages.length + 1, text: newMessage, sender: 'user' };
    setMessages([...messages, message]);
    setNewMessage('');
  };

  return (
    <>
    <View style={styles.container}>
      <Text style={styles.header}>Plantbot</Text>
      <ScrollView contentContainerStyle={styles.chatContainer}>
        {messages.map((message) => (
          <View
            key={message.id}
            style={[
              styles.messageContainer,
              message.sender === 'bot' ? styles.receiverMessage : styles.senderMessage,
            ]}
          >
            <Text style={styles.messageText}>{message.text}</Text>
          </View>
        ))}
      </ScrollView>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Type your message here..."
          value={newMessage}
          onChangeText={setNewMessage}
        />
        <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
    <NavBar/>
    </>

  );
};

const styles = StyleSheet.create({
  container: {
    height: '92.5%',
    backgroundColor: 'white',
    padding: 20, // Increased padding
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    marginTop: 10
  },
  chatContainer: {
    flexGrow: 1,
    paddingBottom: 4,
    
  },
  messageContainer: {
    maxWidth: '80%', 
    padding: 15, 
    borderRadius: 20, 
    marginBottom: 40, 
  },
  senderMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#DCF8C6',
  },
  receiverMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#E5E5EA',
  },
  messageText: {
    fontSize: 18, 
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  textInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 20,
    paddingVertical: 15, 
    marginRight: 10,
    fontSize: 16, 
  },
  sendButton: {
    backgroundColor: '#007AFF',
    borderRadius: 20,
    paddingVertical: 15, 
    paddingHorizontal: 20,
  },
  sendButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  bottomMenu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: 'lightgrey',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  selectedCircle: {
    backgroundColor: '#2ecc71', 
  },
  gap: {
    width: 10,
  },
});

export default ChatScreen;
