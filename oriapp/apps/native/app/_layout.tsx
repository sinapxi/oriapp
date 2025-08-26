import { QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
import {
	DarkTheme,
	DefaultTheme,
	type Theme,
	ThemeProvider,
} from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import "../global.css";
import { queryClient } from "@/utils/trpc";
import { NAV_THEME } from "@/lib/constants";
import React, { useRef } from "react";
import { useColorScheme } from "@/lib/use-color-scheme";
import { Platform } from "react-native";
import { setAndroidNavigationBar } from "@/lib/android-navigation-bar";
import { useFonts } from 'expo-font';
import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
} from '@expo-google-fonts/inter';
import * as SplashScreen from 'expo-splash-screen';
import { authClient } from '@/lib/auth-client';

const LIGHT_THEME: Theme = {
	...DefaultTheme,
	colors: NAV_THEME.light,
};
const DARK_THEME: Theme = {
	...DarkTheme,
	colors: NAV_THEME.dark,
};

export const unstable_settings = {
	initialRouteName: "(drawer)",
};

export default function RootLayout() {
	const hasMounted = useRef(false);
	const { colorScheme, isDarkColorScheme } = useColorScheme();
	const [isColorSchemeLoaded, setIsColorSchemeLoaded] = React.useState(false);

	useIsomorphicLayoutEffect(() => {
		if (hasMounted.current) {
			return;
		}

		if (Platform.OS === "web") {
			document.documentElement.classList.add("bg-background");
		}
		setAndroidNavigationBar(colorScheme);
		setIsColorSchemeLoaded(true);
		hasMounted.current = true;
	}, []);

	const { data: session, isLoading } = authClient.useSession();

	if (isLoading || !isColorSchemeLoaded) {
		return null;
	}
	return (
		<QueryClientProvider client={queryClient}>
			<ThemeProvider value={isDarkColorScheme ? DARK_THEME : LIGHT_THEME}>
				<StatusBar style={isDarkColorScheme ? "light" : "dark"} />
				<GestureHandlerRootView style={{ flex: 1 }}>
					<Stack>
						<Stack.Screen name="(drawer)" options={{ headerShown: false }} />
						<Stack.Screen name="(core)" options={{ headerShown: false }} />
						{/* Agregar más grupos como (portal), (general) cuando se implementen */}
						<Stack.Screen name="modal" options={{ title: "Modal", presentation: "modal" }} />
					</Stack>
				) : (
					<Stack>
						<Stack.Screen name="(auth)" options={{ headerShown: false }} />
					</Stack>
				)}
			</GestureHandlerRootView>
		</ThemeProvider>
	</QueryClientProvider>
);
}

const useIsomorphicLayoutEffect =
	Platform.OS === "web" && typeof window === "undefined"
		? React.useEffect
		: React.useLayoutEffect;

// Inside RootLayout function, before the return:
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  React.useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

<File before.css={{ fontFamily: 'Inter_400Regular' }} />

<File before.css={{ fontFamily: 'Inter_400Regular' }} />
