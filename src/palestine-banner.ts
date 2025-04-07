interface BannerOptions {
	message?: string;
	backgroundColor?: string;
	textColor?: string;
	position?: "top" | "bottom";
	height?: string;
	fontSize?: string;
	showCloseButton?: boolean;
}

interface BannerStyle {
	backgroundColor?: string;
	textColor?: string;
	[key: string]: string | undefined;
}

class PalestineBanner {
	private _options: Required<BannerOptions>;
	private _banner: HTMLDivElement | null;

	constructor(options: BannerOptions = {}) {
		this._options = {
			message: "Free Palestine 🇵🇸",
			backgroundColor:
				"linear-gradient(90deg, #000000 0%, #009639 33%, #CE1126 66%, #000000 100%)",
			textColor: "#FFFFFF",
			position: "top",
			height: "40px",
			fontSize: "16px",
			showCloseButton: true,
			...options,
		};
		this._banner = null;
		this.init();
	}

	private init(): void {
		// Create banner element
		this._banner = document.createElement("div");
		this._banner.className = "palestine-banner";

		// Set styles
		this._banner.style.cssText = `
            position: fixed;
            left: 0;
            right: 0;
            ${this._options.position === "top" ? "top: 0;" : "bottom: 0;"}
            width: 100%;
            height: ${this._options.height};
            background: ${this._options.backgroundColor};
            background-size: 200% 200%;
            animation: gradient 15s ease infinite;
            color: ${this._options.textColor};
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: ${this._options.fontSize};
            font-family: Arial, sans-serif;
            z-index: 9999;
            box-shadow: 0 2px 5px rgba(0,0,0,0.2);
            backdrop-filter: blur(5px);
            -webkit-backdrop-filter: blur(5px);
        `;

		// Create message container
		const messageContainer = document.createElement("div");
		messageContainer.style.cssText = `
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            position: relative;
        `;

		// Create message element
		const message = document.createElement("div");
		message.textContent = this._options.message;
		message.style.textShadow = "0 0 10px rgba(0,0,0,0.5)";
		messageContainer.appendChild(message);

		// Create close button if enabled
		if (this._options.showCloseButton) {
			const closeButton = document.createElement("button");
			closeButton.innerHTML = "&times;";
			closeButton.style.cssText = `
                position: absolute;
                right: 15px;
                background: none;
                border: none;
                color: ${this._options.textColor};
                font-size: 24px;
                cursor: pointer;
                padding: 0 8px;
                opacity: 0.8;
                transition: opacity 0.2s;
            `;

			const handleMouseOver = (): void => {
				closeButton.style.opacity = "1";
			};

			const handleMouseOut = (): void => {
				closeButton.style.opacity = "0.8";
			};

			closeButton.addEventListener("mouseover", handleMouseOver);
			closeButton.addEventListener("mouseout", handleMouseOut);
			closeButton.addEventListener("click", () => this.remove());

			messageContainer.appendChild(closeButton);
		}

		this._banner.appendChild(messageContainer);

		// Add to document
		document.body.appendChild(this._banner);

		// Add keyframes for gradient animation
		const style = document.createElement("style");
		style.textContent = `
            @keyframes gradient {
                0% { background-position: 0% 50%; }
                50% { background-position: 100% 50%; }
                100% { background-position: 0% 50%; }
            }
        `;
		document.head.appendChild(style);

		// Adjust body margin to prevent content from being hidden
		const bodyStyle = document.body.style;
		if (this._options.position === "top") {
			bodyStyle.marginTop = this._options.height;
		} else {
			bodyStyle.marginBottom = this._options.height;
		}
	}

	public updateMessage(newMessage: string): void {
		if (this._banner) {
			const messageContainer = this._banner.querySelector(
				".palestine-banner > div",
			);
			if (messageContainer) {
				const messageElement = messageContainer.querySelector("div");
				if (messageElement) {
					messageElement.textContent = newMessage;
				}
			}
		}
	}

	public updateStyle(newStyle: BannerStyle): void {
		if (this._banner) {
			Object.assign(this._banner.style, newStyle);
		}
	}

	public remove(): void {
		if (this._banner) {
			this._banner.remove();
			document.body.style.marginTop = "";
			document.body.style.marginBottom = "";
		}
	}

	public togglePosition(): void {
		if (this._banner) {
			this._options.position =
				this._options.position === "top" ? "bottom" : "top";
			this.remove();
			this.init();
		}
	}
}

export { PalestineBanner };

// Export for use in browser
declare global {
	interface Window {
		PalestineBanner: typeof PalestineBanner;
	}
}

// Only add to window if we're in a browser environment
if (typeof window !== "undefined") {
	window.PalestineBanner = PalestineBanner;
}
