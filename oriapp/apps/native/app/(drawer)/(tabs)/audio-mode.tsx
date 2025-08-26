import { Text, View } from 'react-native';
import { Button } from '@/components/button';
import { useState } from 'react';
import { Audio } from 'expo-av';

export default function AudioModeScreen() {
  const [recording, setRecording] = useState<Audio.Recording | null>(null);
  const [isRecording, setIsRecording] = useState(false);
  const [transcription, setTranscription] = useState('');
  const [response, setResponse] = useState('');

  async function startRecording() {
    try {
      const { recording } = await Audio.Recording.createAsync(Audio.RecordingOptionsPresets.HIGH_QUALITY);
      setRecording(recording);
      setIsRecording(true);
    } catch (err) {
      console.error('Failed to start recording', err);
    }
  }

  async function stopRecording() {
    if (recording) {
      await recording.stopAndUnloadAsync();
      const uri = recording.getURI();
      setIsRecording(false);
      // TODO: Enviar audio a API para transcripción y respuesta de IA
      setTranscription('Transcripción placeholder: Hola, ¿cómo estás?');
      setResponse('Respuesta de IA placeholder: Bien, gracias.');
    }
  }

  return (
    <View className="flex-1 bg-background p-4 justify-center items-center">
      <Text className="text-2xl font-bold text-foreground mb-4">Modo Audio</Text>
      <Button
        onPress={isRecording ? stopRecording : startRecording}
        title={isRecording ? 'Detener Grabación' : 'Iniciar Grabación'}
        className="mb-4"
      />
      {transcription && (
        <Text className="text-foreground mb-2">Transcripción: {transcription}</Text>
      )}
      {response && (
        <Text className="text-foreground">Respuesta: {response}</Text>
      )}
    </View>
  );
}