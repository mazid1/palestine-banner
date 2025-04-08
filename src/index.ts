import { getRandomMessage } from "./messages";
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
	const randomMessage = getRandomMessage();
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
