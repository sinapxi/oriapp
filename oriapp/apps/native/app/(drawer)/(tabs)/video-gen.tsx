import { Text, View } from 'react-native';
import { Input } from '@/components/input';
import { Button } from '@/components/button';
import { useState } from 'react';
import { Video } from 'expo-av';

export default function VideoGenScreen() {
  const [prompt, setPrompt] = useState('');
  const [videoUrl, setVideoUrl] = useState<string | null>(null);

  const handleGenerate = () => {
    if (prompt.trim()) {
      // TODO: Integrar con API de generación de video
      setVideoUrl('https://example.com/placeholder-video.mp4');
    }
  };

  return (
    <View className="flex-1 bg-background p-4">
      <Text className="text-2xl font-bold text-foreground mb-4">Generación de Video</Text>
      <Input
        value={prompt}
        onChangeText={setPrompt}
        placeholder="Escribe tu prompt para video..."
        className="mb-4"
      />
      <Button onPress={handleGenerate} title="Generar Video" className="mb-4" />
      {videoUrl && (
        <Video
          source={{ uri: videoUrl }}
          className="w-full h-64"
          useNativeControls
          resizeMode="contain"
          isLooping
        />
      )}
    </View>
  );
}