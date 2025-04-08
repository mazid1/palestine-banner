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
	banner.updateWithRandomMessage();
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
