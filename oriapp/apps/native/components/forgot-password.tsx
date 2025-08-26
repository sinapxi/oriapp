import { authClient } from '@/lib/auth-client';
import { useState } from 'react';
import { ActivityIndicator, Text, TextInput, TouchableOpacity, View } from 'react-native';

export function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleReset = async () => {
    setIsLoading(true);
    setError(null);
    setMessage(null);

    await authClient.resetPassword.email(
      { email },
      {
        onError: (err) => {
          setError(err.error?.message || 'Failed to send reset email');
          setIsLoading(false);
        },
        onSuccess: () => {
          setMessage('Email de restablecimiento enviado. Revisa tu correo.');
          setEmail('');
          setIsLoading(false);
        },
      },
    );
  };

  return (
    <View className="mt-6 p-4 bg-card rounded-lg border border-border">
      <Text className="text-lg font-semibold text-foreground mb-4">
        Recuperar Contraseña
      </Text>

      {error && (
        <View className="mb-4 p-3 bg-destructive/10 rounded-md">
          <Text className="text-destructive text-sm">{error}</Text>
        </View>
      )}

      {message && (
        <View className="mb-4 p-3 bg-success/10 rounded-md">
          <Text className="text-success text-sm">{message}</Text>
        </View>
      )}

      <TextInput
        className="mb-4 p-4 rounded-md bg-input text-foreground border border-input"
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        placeholderTextColor="#9CA3AF"
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TouchableOpacity
        onPress={handleReset}
        disabled={isLoading}
        className="bg-primary p-4 rounded-md flex-row justify-center items-center"
      >
        {isLoading ? (
          <ActivityIndicator size="small" color="#fff" />
        ) : (
          <Text className="text-primary-foreground font-medium">Enviar Email</Text>
        )}
      </TouchableOpacity>
    </View>
  );
}