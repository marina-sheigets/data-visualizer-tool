import { singleton } from 'tsyringe';
import { TagNameTypes } from '../../../types/TagNameTypes';
import { BaseComponent } from '../../shared/base-component/base.component';
import * as styles from './upload-data-type-dropdown.component.css';

@singleton()
export class UploadDataTypeDropdownComponent extends BaseComponent {
	private readonly OPTIONS = [
		{ value: 'Enter manually', label: 'Enter manually' },
		{ value: 'json', label: 'JSON' },
		{ value: 'csv', label: 'CSV' },
		{ value: 'excel', label: 'Excel' },
		{ value: 'table', label: 'Table' },
	];
	constructor() {
		super(styles, TagNameTypes.SELECT);

		this.initOptions();

		this.rootElement.addEventListener('change', (event) => {
			const target = event.target as HTMLSelectElement;
			console.log(target.value);
		});
	}

	private initOptions() {
		const documentFragment = document.createDocumentFragment();

		this.OPTIONS.forEach((option) => {
			const optionElement = document.createElement(TagNameTypes.OPTION);

			optionElement.value = option.value;
			optionElement.textContent = option.label;

			documentFragment.appendChild(optionElement);
		});

		this.rootElement.appendChild(documentFragment);
	}
}
