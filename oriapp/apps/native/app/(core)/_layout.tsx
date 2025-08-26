import { Stack } from 'expo-router';

export default function CoreLayout() {
  return (
    <Stack>
      <Stack.Screen name="chat" options={{ title: 'Chat' }} />
      <Stack.Screen name="image-gen" options={{ title: 'Generación de Imágenes' }} />
      <Stack.Screen name="video-gen" options={{ title: 'Generación de Video' }} />
      <Stack.Screen name="audio-mode" options={{ title: 'Modo Audio' }} />
    </Stack>
  );
}