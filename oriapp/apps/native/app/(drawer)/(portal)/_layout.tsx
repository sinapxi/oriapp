import { Stack } from 'expo-router';

export default function PortalLayout() {
  return (
    <Stack>
      <Stack.Screen name="dashboard" options={{ title: 'Dashboard Principal' }} />
      <Stack.Screen name="planes-subscripcion" options={{ title: 'Planes y Suscripción' }} />
      <Stack.Screen name="historial-pagos" options={{ title: 'Historial de Pagos' }} />
      <Stack.Screen name="galeria" options={{ title: 'Galería' }} />
      <Stack.Screen name="configuracion" options={{ title: 'Configuración' }} />
      <Stack.Screen name="referidos" options={{ title: 'Referidos' }} />
    </Stack>
  );
}