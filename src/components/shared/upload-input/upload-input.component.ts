import { singleton } from 'tsyringe';
import { FilesService } from '../../../services/files/files.service';
import { BaseComponent } from '../base-component/base.component';

@singleton()
export class UploadInputComponent extends BaseComponent {
	readonly input = document.createElement('input');
	readonly label = document.createElement('label');

	constructor(protected fileService: FilesService) {
		super();

		this.initInput();
		this.initLabel();

		this.input.addEventListener('change', this.handleChosenFile.bind(this));

		this.rootElement.append(this.label, this.input);
	}

	private initInput() {
		this.input.type = 'file';
	}

	private initLabel() {
		this.label.textContent = 'Choose file to parse...(json, csx, tables, excel)';
	}

	private handleChosenFile(e: any) {
		if (e.target.files[0]) {
			this.fileService.checkFileType(e.target.files[0]);
		} else {
			//throw error
		}
	}
}
