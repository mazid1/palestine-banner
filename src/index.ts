import { getRandomMessage } from "./messages";
import { PalestineBanner } from "./palestine-banner";

declare global {
	interface Window {
		setRandomBannerMessage: () => void;
		toggleBannerPosition: () => void;
		removeBanner: () => void;
	}
}

// Initialize the banner
const banner = new PalestineBanner();

// Make functions available globally
const setRandomBannerMessage = () => {
	const randomMessage = getRandomMessage();
	banner.updateMessage(randomMessage);
};

const toggleBannerPosition = () => {
	banner.togglePosition();
};

const removeBanner = () => {
	banner.remove();
};

if (typeof window !== "undefined") {
	window.setRandomBannerMessage = setRandomBannerMessage;
	window.toggleBannerPosition = toggleBannerPosition;
	window.removeBanner = removeBanner;
}
