import { Stack } from 'expo-router';

export default function AuthLayout() {
  return (
    <Stack>
      <Stack.Screen name="sign-in" options={{ title: 'Inicio de Sesión' }} />
      <Stack.Screen name="sign-up" options={{ title: 'Registro' }} />
      <Stack.Screen name="forgot-password" options={{ title: 'Recuperación de Contraseña' }} />
    </Stack>
  );
}