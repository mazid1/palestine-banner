import { PalestineBanner } from "./palestine-banner";

declare global {
	interface Window {
		updateBannerMessage: (message: string) => void;
		changeBannerPosition: () => void;
		removeBanner: () => void;
	}
}

// Initialize the banner
const banner = new PalestineBanner();

// Make functions available globally
const updateBannerMessage = (message: string) => {
	banner.updateMessage(message);
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
