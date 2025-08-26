import { Text, View } from 'react-native';
import { Button } from '@/components/button';
import { useState } from 'react';

export default function PlanesSubscripcion() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const plans = [
    { id: 'basic', name: 'Básico', price: '$9.99/mes', features: ['Acceso básico', '10 generaciones/día'] },
    { id: 'pro', name: 'Pro', price: '$19.99/mes', features: ['Acceso ilimitado', 'Prioridad en generaciones'] },
    { id: 'enterprise', name: 'Enterprise', price: '$49.99/mes', features: ['Soporte dedicado', 'API access'] },
  ];

  const handleSubscribe = (planId: string) => {
    setSelectedPlan(planId);
    // TODO: Integrar con API de pagos o suscripciones
    console.log(`Suscribiéndose a ${planId}`);
  };

  return (
    <View className="flex-1 bg-background p-4">
      <Text className="text-2xl font-bold text-foreground mb-4">Planes y Suscripción</Text>
      {plans.map((plan) => (
        <View key={plan.id} className="mb-4 p-4 bg-card rounded-lg border border-border">
          <Text className="text-lg font-semibold text-foreground">{plan.name} - {plan.price}</Text>
          {plan.features.map((feature) => (
            <Text key={feature} className="text-muted-foreground">- {feature}</Text>
          ))}
          <Button onPress={() => handleSubscribe(plan.id)} title="Suscribirse" className="mt-2" />
        </View>
      ))}
      {selectedPlan && <Text className="text-success mt-4">Suscrito a {selectedPlan}</Text>}
    </View>
  );
}