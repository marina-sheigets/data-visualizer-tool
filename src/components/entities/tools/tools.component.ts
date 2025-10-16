import 'reflect-metadata';
import { BaseComponent } from '../../shared/base-component/base.component';
import { UploaderComponent } from '../uploader/uploader.component';
import { singleton } from 'tsyringe';

@singleton()
export class ToolsComponent extends BaseComponent {
	constructor(protected uploaderComponent: UploaderComponent) {
		super();

		this.rootElement.append(uploaderComponent.rootElement);
	}
}
