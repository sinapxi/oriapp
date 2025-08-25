import React, { useState } from 'react';
import { ScrollView, View, Text } from 'react-native';
import { Container } from '@/components/container';
import { Input } from '@/components/input';
import { Button } from '@/components/button';
import { Card } from '@/components/card';
import { cn } from '@/lib/utils';

export default function MainScreen() {
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([]);
  const [inputText, setInputText] = useState('');

  const handleSend = () => {
    if (inputText.trim()) {
      setMessages([...messages, { text: inputText, isUser: true }]);
      setInputText('');
      // Placeholder for AI response
      setTimeout(() => {
        setMessages(prev => [...prev, { text: 'Respuesta de IA', isUser: false }]);
      }, 1000);
    }
  };

  return (
    <Container className="flex-1">
      <ScrollView className="flex-1 p-4">
        {messages.map((msg, index) => (
          <Card key={index} className={cn('mb-2', msg.isUser ? 'self-end bg-primary' : 'self-start bg-secondary')}>
            <Text className={cn('text-foreground', msg.isUser ? 'text-primary-foreground' : 'text-secondary-foreground')}>{msg.text}</Text>
          </Card>
        ))}
      </ScrollView>
      <View className="flex-row p-4 border-t border-border">
        <Input
          placeholder="Escribe tu mensaje..."
          value={inputText}
          onChangeText={setInputText}
          className="flex-1 mr-2"
        />
        <Button label="Enviar" onPress={handleSend} />
      </View>
    </Container>
  );
}
