import { authClient } from '@/lib/auth-client';
import { Link, Text, View } from 'expo-router';
import { useSession } from 'better-auth/react';

export default function Dashboard() {
  const { data: session } = useSession();

  return (
    <View className="flex-1 bg-background p-4">
      <Text className="text-2xl font-bold text-foreground mb-4">Dashboard Principal</Text>
      {session?.user ? (
        <View>
          <Text className="text-foreground">Bienvenido, {session.user.name}</Text>
          <Text className="text-muted-foreground">Email: {session.user.email}</Text>
        </View>
      ) : (
        <Text className="text-foreground">No hay sesión activa.</Text>
      )}
      <View className="mt-4">
        <Link href="/(drawer)/(portal)/planes-subscripcion" className="text-primary mb-2">Planes y Suscripción</Link>
        <Link href="/(drawer)/(portal)/historial-pagos" className="text-primary mb-2">Historial de Pagos</Link>
        <Link href="/(drawer)/(portal)/galeria" className="text-primary mb-2">Galería</Link>
        <Link href="/(drawer)/(portal)/configuracion" className="text-primary mb-2">Configuración</Link>
        <Link href="/(drawer)/(portal)/referidos" className="text-primary">Referidos</Link>
      </View>
    </View>
  );
}