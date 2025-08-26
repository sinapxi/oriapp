import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Drawer } from "expo-router/drawer";

import { HeaderButton } from "@/components/header-button";

const DrawerLayout = () => {
	return (
		<Drawer>
			<Drawer.Screen
				name="index"
				options={{
					headerTitle: "Home",
					drawerLabel: "Home",
					drawerIcon: ({ size, color }) => (
						<Ionicons name="home-outline" size={size} color={color} />
					),
				}}
			/>
			<Drawer.Screen
				name="(tabs)"
				options={{
					headerTitle: "Tabs",
					drawerLabel: "Tabs",
					drawerIcon: ({ size, color }) => (
						<MaterialIcons name="border-bottom" size={size} color={color} />
					),
					headerRight: () => (
						<Link href="/modal" asChild>
							<HeaderButton />
						</Link>
					),
				}}
			/>
			<Drawer.Screen
				name="(portal)"
				options={{
					headerTitle: "Portal de Usuario",
					drawerLabel: "Portal",
					drawerIcon: ({ size, color }) => (
						<Ionicons name="person-outline" size={size} color={color} />
					),
				}}
			/>
			<Drawer.Screen
				name="faq"
				options={{
					headerTitle: "FAQ",
					drawerLabel: "FAQ",
					drawerIcon: ({ size, color }) => (
						<Ionicons name="help-circle-outline" size={size} color={color} />
					),
				}}
			/>
			<Drawer.Screen
				name="terms"
				options={{
					headerTitle: "Términos y Condiciones",
					drawerLabel: "Términos",
					drawerIcon: ({ size, color }) => (
						<Ionicons name="document-text-outline" size={size} color={color} />
					),
				}}
			/>
			<Drawer.Screen
				name="privacy"
				options={{
					headerTitle: "Política de Privacidad",
					drawerLabel: "Privacidad",
					drawerIcon: ({ size, color }) => (
						<Ionicons name="lock-closed-outline" size={size} color={color} />
					),
				}}
			/>
		</Drawer>
	);
};

export default DrawerLayout;
