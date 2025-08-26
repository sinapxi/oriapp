import { Image, Text, View } from 'react-native';
import { Input } from '@/components/input';
import { Button } from '@/components/button';
import { useState } from 'react';

export default function ImageGenScreen() {
  const [prompt, setPrompt] = useState('');
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const handleGenerate = () => {
    if (prompt.trim()) {
      // TODO: Integrar con API de generación de imágenes
      setImageUrl('https://via.placeholder.com/300?text=Imagen+Generada');
    }
  };

  return (
    <View className="flex-1 bg-background p-4">
      <Text className="text-2xl font-bold text-foreground mb-4">Generación de Imágenes</Text>
      <Input
        value={prompt}
        onChangeText={setPrompt}
        placeholder="Escribe tu prompt..."
        className="mb-4"
      />
      <Button onPress={handleGenerate} title="Generar Imagen" className="mb-4" />
      {imageUrl && (
        <Image
          source={{ uri: imageUrl }}
          className="w-full h-64 rounded-lg"
          resizeMode="contain"
        />
      )}
    </View>
  );
}