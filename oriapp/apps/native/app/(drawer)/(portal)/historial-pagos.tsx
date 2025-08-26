import { FlatList, Text, View } from 'react-native';

export default function HistorialPagos() {
  const payments = [
    { id: '1', date: '2023-10-01', amount: '$9.99', status: 'Completado' },
    { id: '2', date: '2023-09-01', amount: '$9.99', status: 'Completado' },
    { id: '3', date: '2023-08-01', amount: '$9.99', status: 'Pendiente' },
  ];

  return (
    <View className="flex-1 bg-background p-4">
      <Text className="text-2xl font-bold text-foreground mb-4">Historial de Pagos</Text>
      <FlatList
        data={payments}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className="mb-2 p-4 bg-card rounded-lg border border-border">
            <Text className="text-foreground">Fecha: {item.date}</Text>
            <Text className="text-foreground">Monto: {item.amount}</Text>
            <Text className="text-foreground">Estado: {item.status}</Text>
          </View>
        )}
      />
    </View>
  );
}