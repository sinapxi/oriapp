import { View } from 'react-native';
import { SignUp } from '../../components/sign-up';
import { Container } from '../../components/container';

export default function SignUpScreen() {
  return (
    <Container className="flex-1 justify-center items-center">
      <SignUp />
    </Container>
  );
}