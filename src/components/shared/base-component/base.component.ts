import { TagNameTypes } from '../../../types/TagNameTypes';

export abstract class BaseComponent {
	private readonly _rootElement: HTMLElement;

	constructor(styles?: { [key: string]: string }, tagName: TagNameTypes = TagNameTypes.DIV) {
		this._rootElement = this.createRoot(tagName);
		if (styles) {
			this.applyRootStyle(styles);
		}
	}

	protected createRoot(tagName: TagNameTypes): HTMLElement {
		return document.createElement(tagName);
	}

	protected applyRootStyle(styles: { [id: string]: string }) {
		this.addClassNamesToComponents(styles);
		if (styles.hasOwnProperty('rootClassName')) {
			this.rootElement.classList.add(styles.rootClassName);
		}
	}

	protected addClassNamesToComponents(styles: { [id: string]: string }): void {
		for (let propName in this) {
			let propertyValue = this[propName];
			if (propertyValue instanceof BaseComponent && styles[propName]) {
				propertyValue.rootElement.classList.add(styles[propName]);
			} else if (propertyValue instanceof Element && styles[propName]) {
				propertyValue.classList.add(styles[propName]);
			}
		}
	}

	get rootElement() {
		return this._rootElement;
	}
}
