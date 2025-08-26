import { FlatList, Share, Text, View } from 'react-native';
import { Button } from '@/components/button';

export default function Referidos() {
  const referralCode = 'ABC123';
  const referredUsers = [
    { id: '1', name: 'Usuario 1', date: '2023-10-01' },
    { id: '2', name: 'Usuario 2', date: '2023-09-15' },
  ];

  const handleShare = async () => {
    try {
      await Share.share({
        message: `Únete usando mi código de referido: ${referralCode}`,
      });
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

  return (
    <View className="flex-1 bg-background p-4">
      <Text className="text-2xl font-bold text-foreground mb-4">Referidos</Text>
      <Text className="text-foreground mb-2">Tu código de referido: {referralCode}</Text>
      <Button onPress={handleShare} title="Compartir Código" className="mb-4" />
      <Text className="text-lg font-semibold text-foreground mb-2">Usuarios Referidos</Text>
      <FlatList
        data={referredUsers}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className="mb-2 p-4 bg-card rounded-lg border border-border">
            <Text className="text-foreground">{item.name} - {item.date}</Text>
          </View>
        )}
      />
    </View>
  );
}