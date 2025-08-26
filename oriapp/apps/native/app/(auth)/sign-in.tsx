import { View } from 'react-native';
import { SignIn } from '../../components/sign-in';
import { Container } from '../../components/container';

export default function SignInScreen() {
  return (
    <Container className="flex-1 justify-center items-center">
      <SignIn />
    </Container>
  );
}