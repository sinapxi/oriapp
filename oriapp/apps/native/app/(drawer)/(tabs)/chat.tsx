import { FlatList, Text, View } from 'react-native';
import { Input } from '@/components/input';
import { Button } from '@/components/button';
import { useState } from 'react';

export default function ChatScreen() {
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, isUser: true }]);
      // TODO: Integrar con API de IA para respuesta
      setMessages((prev) => [...prev, { text: 'Respuesta de IA placeholder', isUser: false }]);
      setInput('');
    }
  };

  return (
    <View className="flex-1 bg-background">
      <FlatList
        data={messages}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View className={`p-4 m-2 rounded-lg ${item.isUser ? 'bg-primary self-end' : 'bg-secondary self-start'}`}>
            <Text className="text-foreground">{item.text}</Text>
          </View>
        )}
        className="flex-1"
      />
      <View className="flex-row p-4 border-t border-border">
        <Input
          value={input}
          onChangeText={setInput}
          placeholder="Escribe tu mensaje..."
          className="flex-1 mr-2"
        />
        <Button onPress={handleSend} title="Enviar" />
      </View>
    </View>
  );
}