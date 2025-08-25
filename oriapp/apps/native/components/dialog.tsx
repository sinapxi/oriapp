import React from 'react';
import { Modal, View, Text, TouchableOpacity } from 'react-native';
import { cn } from '@/lib/utils';

export interface DialogProps {
  visible: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Dialog: React.FC<DialogProps> = ({ visible, onClose, title, children }) => {
  if (!visible) return null;

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View className="flex-1 justify-center items-center bg-black/50">
        <View className="bg-card rounded-lg p-5 w-4/5">
          <Text className="font-inter-bold text-foreground text-lg mb-4">{title}</Text>
          {children}
          <TouchableOpacity onPress={onClose} className="mt-4 self-end">
            <Text className="text-primary">Cerrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export { Dialog };