import { FlatList, Text, View } from 'react-native';

export default function FAQ() {
  const faqs = [
    { id: '1', question: '¿Qué es esta app?', answer: 'Una app de IA para chat, imágenes, videos y audio.' },
    { id: '2', question: '¿Cómo me suscribo?', answer: 'Ve a Planes y Suscripción en el portal.' },
    // Agregar más FAQs
  ];

  return (
    <View className="flex-1 bg-background p-4">
      <Text className="text-2xl font-bold text-foreground mb-4">FAQ</Text>
      <FlatList
        data={faqs}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className="mb-4">
            <Text className="text-lg font-semibold text-foreground">{item.question}</Text>
            <Text className="text-foreground">{item.answer}</Text>
          </View>
        )}
      />
    </View>
  );
}