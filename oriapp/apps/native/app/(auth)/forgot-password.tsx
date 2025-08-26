import { View } from 'react-native';
import { ForgotPassword } from '../../components/forgot-password';
import { Container } from '../../components/container';

export default function ForgotPasswordScreen() {
  return (
    <Container className="flex-1 justify-center items-center">
      <ForgotPassword />
    </Container>
  );
}