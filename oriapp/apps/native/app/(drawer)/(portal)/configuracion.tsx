import { authClient } from '@/lib/auth-client';
import { Text, View } from 'react-native';
import { Input } from '@/components/input';
import { Button } from '@/components/button';
import { useState } from 'react';
import { useSession } from 'better-auth/react';

export default function Configuracion() {
  const { data: session } = useSession();
  const [newEmail, setNewEmail] = useState(session?.user.email || '');
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState<string | null>(null);

  const handleUpdateEmail = async () => {
    // TODO: Implementar actualización de email con authClient
    setMessage('Email actualizado exitosamente.');
  };

  const handleChangePassword = async () => {
    // TODO: Implementar cambio de contraseña con authClient
    setMessage('Contraseña cambiada exitosamente.');
    setNewPassword('');
  };

  return (
    <View className="flex-1 bg-background p-4">
      <Text className="text-2xl font-bold text-foreground mb-4">Configuración</Text>
      <View className="mb-4">
        <Text className="text-foreground mb-2">Actualizar Email</Text>
        <Input value={newEmail} onChangeText={setNewEmail} placeholder="Nuevo Email" className="mb-2" />
        <Button onPress={handleUpdateEmail} title="Actualizar Email" />
      </View>
      <View className="mb-4">
        <Text className="text-foreground mb-2">Cambiar Contraseña</Text>
        <Input value={newPassword} onChangeText={setNewPassword} placeholder="Nueva Contraseña" secureTextEntry className="mb-2" />
        <Button onPress={handleChangePassword} title="Cambiar Contraseña" />
      </View>
      {message && <Text className="text-success mt-4">{message}</Text>}
    </View>
  );
}