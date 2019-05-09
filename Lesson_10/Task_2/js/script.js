class Option {
	constructor(height, width, bg, fontSize, textAlign) {
		this.height = height;
		this.width = width;
		this.bg = bg;
		this.fontSize = fontSize;
		this.textAlign = textAlign;
	}
	addElem() {
		let elem = document.createElement('div');
		elem.innerHTML = 'Text';
		elem.style.cssText = `height: ${this.height}px; width: ${this.width}px; background: ${this.bg}; font-size: ${this.fontSize}px; text-align: ${this.textAlign};`;
		document.body.appendChild(elem);
	}
}

const newElement = new Option(50, 55, 'grey', 16, 'center');

newElement.addElem();