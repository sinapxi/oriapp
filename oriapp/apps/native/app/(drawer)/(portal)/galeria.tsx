import { FlatList, Image, Text, View } from 'react-native';

export default function Galeria() {
  const galleryItems = [
    { id: '1', uri: 'https://via.placeholder.com/150?text=Imagen+1' },
    { id: '2', uri: 'https://via.placeholder.com/150?text=Imagen+2' },
    { id: '3', uri: 'https://via.placeholder.com/150?text=Video+1' },
    // Agregar más items mock
  ];

  return (
    <View className="flex-1 bg-background p-4">
      <Text className="text-2xl font-bold text-foreground mb-4">Galería</Text>
      <FlatList
        data={galleryItems}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => (
          <View className="m-2">
            <Image source={{ uri: item.uri }} className="w-40 h-40 rounded-lg" />
          </View>
        )}
      />
    </View>
  );
}