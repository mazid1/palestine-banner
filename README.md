# Palestine Banner

A simple, customizable banner that can be easily embedded in any webpage to show support for Palestine and raise awareness about the ongoing genocide.

## Features

- Easy to integrate
- Customizable message, colors, and position
- Responsive design
- No dependencies
- Simple API for dynamic updates
- Gradient background animation
- Optional close button

## Installation

1. Download the `palestine-banner.js` file
2. Include it in your HTML file:

```html
<script src="palestine-banner.js"></script>
```

## Usage

Basic usage:

```javascript
const banner = new PalestineBanner({
    message: 'Free Palestine 🇵🇸',
    backgroundColor: 'linear-gradient(90deg, #000000 0%, #009639 33%, #CE1126 66%, #000000 100%)',
    textColor: '#FFFFFF'
});
```

### Configuration Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| message | string | 'Free Palestine 🇵🇸' | The text to display in the banner |
| backgroundColor | string | 'linear-gradient(90deg, #000000 0%, #009639 33%, #CE1126 66%, #000000 100%)' | Background color or gradient of the banner |
| textColor | string | '#FFFFFF' | Text color of the banner |
| position | string | 'top' | Position of the banner ('top' or 'bottom') |
| height | string | '40px' | Height of the banner |
| fontSize | string | '16px' | Font size of the banner text |
| showCloseButton | boolean | true | Whether to show the close button |

### Methods

- `updateMessage(newMessage)`: Update the banner message
- `updateStyle(newStyle)`: Update the banner styles
- `remove()`: Remove the banner from the page

## Example

```javascript
// Create a banner
const banner = new PalestineBanner({
    message: 'Stop the Genocide 🕊️',
    backgroundColor: 'linear-gradient(90deg, #000000 0%, #009639 33%, #CE1126 66%, #000000 100%)',
    textColor: '#FFFFFF',
    position: 'top'
});

// Update the message
banner.updateMessage('End the Occupation ✊');

// Update styles
banner.updateStyle({
    backgroundColor: 'linear-gradient(90deg, #000000 0%, #009639 33%, #CE1126 66%, #000000 100%)',
    textColor: '#FFFFFF'
});

// Remove the banner
banner.remove();
```

## License

MIT 