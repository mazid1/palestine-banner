interface BannerOptions {
	message?: string;
	backgroundColor?: string;
	textColor?: string;
	position?: "top" | "bottom";
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
	private _messages: string[];

	constructor(options: BannerOptions = {}) {
		this._messages = [
			"🇵🇸 Free Palestine! 🇵🇸",
			"🕊️ Stop the Genocide! 🇵🇸",
			"✊ End the Occupation! 🇵🇸",
			"⚖️ Justice for Palestine! 🇵🇸",
			"🚫 Boycott Israel! 🇵🇸",
			"🕊️ Ceasefire Now! 🇵🇸",
			"🇵🇸 Free Palestine Now! 🇵🇸",
			"🌊 From the River to the Sea, Palestine Will Be Free! 🇵🇸",
			"✊🏽 No Justice, No Peace — End the Occupation! 🇵🇸",
			"🛑 Stop the Genocide in Gaza! 🇵🇸",
			"🤐 Silence is Violence — Speak for Palestine! 🇵🇸",
			"🚫 Occupation is a Crime — Israel Out of Palestine! 🇵🇸",
			"🏞️ Land Back, Justice Now! 🇵🇸",
			"⚖️ End Israeli Apartheid! 🇵🇸",
			"🕊️ Ceasefire Now, Justice Forever! 🇵🇸",
			"💔 Gaza Bleeds, The World Watches! 🇵🇸",
			"🗣️ Human Rights Are Not Negotiable! 🇵🇸",
			"🔇 Your Silence is Their Death Sentence! 🇵🇸",
			"🧱 Israel = Apartheid, Palestine = Resistance! 🇵🇸",
			"🚷 Zionism is Racism! 🇵🇸",
			"🧱 Tear Down the Walls — Free All the Land! 🇵🇸",
			"⛔ No More War Crimes — Sanction Israel! 🇵🇸",
			"💸 Boycott, Divest, Sanction (BDS)! 🇵🇸",
			"🤝 We Stand with Gaza! 🇵🇸",
			"👶🏽 Children Deserve Peace, Not Bombs! 🇵🇸",
			"⚖️ Justice for Palestine is Justice for All! 🇵🇸",
			"👶🏽 Stop killing children! 🇵🇸",
		];

		this._options = {
			message: this._getRandomMessage(),
			backgroundColor:
				"linear-gradient(90deg, #000000 0%, #009639 33%, #CE1126 66%, #000000 100%)",
			textColor: "#FFFFFF",
			position: "top",
			fontSize: "16px",
			showCloseButton: true,
			...options,
		};

		this._banner = null;

		if (typeof window !== "undefined") {
			this.init();
		}
	}

	private init(): void {
		// Create banner element
		this._banner = document.createElement("div");
		this._banner.className = "palestine-banner";

		// Set banner styles
		this._banner.style.cssText = `
			position: fixed;
			left: 0;
			right: 0;
			${this._options.position === "top" ? "top: 0;" : "bottom: 0;"}
			background: ${this._options.backgroundColor};
			background-size: 200% 200%;
			animation: gradient 15s ease infinite;
			color: ${this._options.textColor};
			display: flex;
			flex-direction: row;
			flex-gap: 10px;
			flex-wrap: nowrap;
			align-items: center;
			justify-content: center;
			font-size: ${this._options.fontSize};
			font-family: Arial, sans-serif;
			z-index: 999999;
			box-shadow: 0 2px 5px rgba(0,0,0,0.2);
			padding: 8px 16px;
	`;

		// Create message container
		const messageContainer = document.createElement("div");
		messageContainer.style.cssText = `
			display: flex;
			align-items: center;
			justify-content: center;
			width: 100%;
		`;

		// Create message element
		const message = document.createElement("div");
		message.textContent = this._options.message;
		message.style.textShadow = "0 0 10px rgba(0,0,0,0.5)";
		message.style.flex = "1";
		message.style.textAlign = "center";
		messageContainer.appendChild(message);

		// Create close button if enabled
		if (this._options.showCloseButton) {
			const closeButton = document.createElement("button");
			closeButton.innerHTML = "&times;";
			closeButton.style.cssText = `
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
			bodyStyle.marginTop = `${this._banner.clientHeight}px`;
		} else {
			bodyStyle.marginBottom = `${this._banner.clientHeight}px`;
		}
	}

	private _getRandomMessage(): string {
		return this._messages[Math.floor(Math.random() * this._messages.length)];
	}

	public updateWithRandomMessage(): void {
		const randomMessage = this._getRandomMessage();
		this.updateMessage(randomMessage);
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

	public setPosition(newPosition: BannerOptions["position"]): void {
		if (this._banner) {
			this._options.position = newPosition || this._options.position;
			this.remove();
			this.init();
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
