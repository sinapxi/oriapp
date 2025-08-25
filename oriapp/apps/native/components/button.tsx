import React from 'react';
import { TouchableOpacity, Text, TouchableOpacityProps } from 'react-native';
import { cn } from '@/lib/utils';

export interface ButtonProps extends TouchableOpacityProps {
  label: string;
  variant?: 'default' | 'destructive' | 'secondary';
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ label, variant = 'default', disabled = false, className, ...props }) => {
  const baseStyle = 'px-4 py-2 rounded-md font-inter-medium text-sm';
  let variantStyle = '';
  switch (variant) {
    case 'default':
      variantStyle = 'bg-primary text-primary-foreground';
      break;
    case 'destructive':
      variantStyle = 'bg-destructive text-destructive-foreground';
      break;
    case 'secondary':
      variantStyle = 'bg-secondary text-secondary-foreground';
      break;
  }
  const disabledStyle = disabled ? 'opacity-50' : '';

  return (
    <TouchableOpacity
      className={cn(baseStyle, variantStyle, disabledStyle, className)}
      disabled={disabled}
      {...props}
    >
      <Text className="text-center">{label}</Text>
    </TouchableOpacity>
  );
};

export { Button };