import React from 'react';
import { TextInput, TextInputProps } from 'react-native';
import { cn } from '@/lib/utils';

export interface InputProps extends TextInputProps {
  placeholder?: string;
}

const Input: React.FC<InputProps> = ({ className, ...props }) => {
  return (
    <TextInput
      className={cn('bg-background border border-input rounded-md px-3 py-2 text-foreground font-inter-regular', className)}
      {...props}
    />
  );
};

export { Input };