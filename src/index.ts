import { PalestineBanner } from "./palestine-banner";

declare global {
	interface Window {
		updateBannerMessage: () => void;
		changeBannerPosition: () => void;
		removeBanner: () => void;
	}
}

// Initialize the banner
const banner = new PalestineBanner();

// Make functions available globally
const updateBannerMessage = () => {
	const messages = [
		"Free Palestine 🇵🇸",
		"Stop the Genocide 🕊️",
		"End the Occupation ✊",
		"Justice for Palestine ⚖️",
		"Boycott Israel 🚫",
		"Ceasefire Now 🕊️",
	];
	const randomMessage = messages[Math.floor(Math.random() * messages.length)];
	banner.updateMessage(randomMessage);
};

const changeBannerPosition = () => {
	banner.togglePosition();
};

const removeBanner = () => {
	banner.remove();
};

if (typeof window !== "undefined") {
	window.updateBannerMessage = updateBannerMessage;
	window.changeBannerPosition = changeBannerPosition;
	window.removeBanner = removeBanner;
}
