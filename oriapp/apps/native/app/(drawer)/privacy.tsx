import { ScrollView, Text, View } from 'react-native';

export default function Privacy() {
  return (
    <ScrollView className="flex-1 bg-background p-4">
      <Text className="text-2xl font-bold text-foreground mb-4">Política de Privacidad</Text>
      <Text className="text-foreground mb-2">1. Información que Recopilamos</Text>
      <Text className="text-foreground mb-4">Recopilamos datos personales como email...</Text>
      <Text className="text-foreground mb-2">2. Uso de la Información</Text>
      <Text className="text-foreground mb-4">Usamos la información para proporcionar servicios...</Text>
      // Agregar más secciones
    </ScrollView>
  );
}