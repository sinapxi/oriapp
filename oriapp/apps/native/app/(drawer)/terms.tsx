import { ScrollView, Text, View } from 'react-native';

export default function Terms() {
  return (
    <ScrollView className="flex-1 bg-background p-4">
      <Text className="text-2xl font-bold text-foreground mb-4">Términos y Condiciones</Text>
      <Text className="text-foreground mb-2">1. Introducción</Text>
      <Text className="text-foreground mb-4">Estos términos rigen el uso de la aplicación...</Text>
      <Text className="text-foreground mb-2">2. Uso de la App</Text>
      <Text className="text-foreground mb-4">Debes cumplir con las leyes aplicables...</Text>
      // Agregar más secciones
    </ScrollView>
  );
}