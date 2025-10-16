import { singleton } from 'tsyringe';
import { BaseComponent } from '../../shared/base-component/base.component';
import { UploadDataTypeDropdownComponent } from '../upload-data-type-dropdown/upload-data-type-dropdown.component';

@singleton()
export class UploaderComponent extends BaseComponent {
	constructor(
		protected uploadDataTypeDropdownComponent: UploadDataTypeDropdownComponent //protected uploaderInputComponent: UploaderInputComponent
	) {
		super();

		this.rootElement.append(this.uploadDataTypeDropdownComponent.rootElement);
	}
}
