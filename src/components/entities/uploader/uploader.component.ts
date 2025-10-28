import { singleton } from 'tsyringe';
import { BaseComponent } from '../../shared/base-component/base.component';
import { UploadInputComponent } from '../../shared/upload-input/upload-input.component';

@singleton()
export class UploaderComponent extends BaseComponent {
	constructor(protected uploadInputComponent: UploadInputComponent) {
		super();

		this.rootElement.append(this.uploadInputComponent.rootElement);
	}
}
