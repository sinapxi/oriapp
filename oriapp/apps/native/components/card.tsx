import React from 'react';
import { View, ViewProps } from 'react-native';
import { cn } from '@/lib/utils';

export interface CardProps extends ViewProps {
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children, className, ...props }) => {
  return (
    <View
      className={cn('bg-card border border-border rounded-lg p-4', className)}
      {...props}
    >
      {children}
    </View>
  );
};

export { Card };