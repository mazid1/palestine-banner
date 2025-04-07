class PalestineBanner {
    constructor(options = {}) {
        this.options = {
            message: 'Free Palestine 🇵🇸',
            backgroundColor: 'linear-gradient(90deg, #000000 0%, #009639 33%, #CE1126 66%, #000000 100%)',
            textColor: '#FFFFFF',
            position: 'top',
            height: '40px',
            fontSize: '16px',
            showCloseButton: true,
            ...options
        };
        this.banner = null;
        this.init();
    }

    init() {
        // Create banner element
        this.banner = document.createElement('div');
        this.banner.className = 'palestine-banner';
        
        // Set styles
        this.banner.style.cssText = `
            position: fixed;
            left: 0;
            right: 0;
            ${this.options.position === 'top' ? 'top: 0;' : 'bottom: 0;'}
            width: 100%;
            height: ${this.options.height};
            background: ${this.options.backgroundColor};
            background-size: 200% 200%;
            animation: gradient 15s ease infinite;
            color: ${this.options.textColor};
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: ${this.options.fontSize};
            font-family: Arial, sans-serif;
            z-index: 9999;
            box-shadow: 0 2px 5px rgba(0,0,0,0.2);
            backdrop-filter: blur(5px);
            -webkit-backdrop-filter: blur(5px);
        `;

        // Create message container
        const messageContainer = document.createElement('div');
        messageContainer.style.cssText = `
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            position: relative;
        `;

        // Create message element
        const message = document.createElement('div');
        message.textContent = this.options.message;
        message.style.textShadow = '0 0 10px rgba(0,0,0,0.5)';
        messageContainer.appendChild(message);

        // Create close button if enabled
        if (this.options.showCloseButton) {
            const closeButton = document.createElement('button');
            closeButton.innerHTML = '&times;';
            closeButton.style.cssText = `
                position: absolute;
                right: 15px;
                background: none;
                border: none;
                color: ${this.options.textColor};
                font-size: 24px;
                cursor: pointer;
                padding: 0 8px;
                opacity: 0.8;
                transition: opacity 0.2s;
            `;
            
            const handleMouseOver = () => {
                closeButton.style.opacity = '1';
            };
            
            const handleMouseOut = () => {
                closeButton.style.opacity = '0.8';
            };
            
            closeButton.addEventListener('mouseover', handleMouseOver);
            closeButton.addEventListener('mouseout', handleMouseOut);
            closeButton.addEventListener('click', () => this.remove());
            
            messageContainer.appendChild(closeButton);
        }

        this.banner.appendChild(messageContainer);

        // Add to document
        document.body.appendChild(this.banner);

        // Add keyframes for gradient animation
        const style = document.createElement('style');
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
        if (this.options.position === 'top') {
            bodyStyle.marginTop = this.options.height;
        } else {
            bodyStyle.marginBottom = this.options.height;
        }
    }

    updateMessage(newMessage) {
        if (this.banner) {
            this.banner.querySelector('div').textContent = newMessage;
        }
    }

    updateStyle(newStyle) {
        if (this.banner) {
            Object.assign(this.banner.style, newStyle);
        }
    }

    remove() {
        if (this.banner) {
            this.banner.remove();
            document.body.style.marginTop = '';
            document.body.style.marginBottom = '';
        }
    }
}

// Export for use in browser
window.PalestineBanner = PalestineBanner; 