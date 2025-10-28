import { singleton } from 'tsyringe';
import { JSONProcessor } from '../json-processor/json-processor.service';
import { Processor } from '../../types/Processor';
import { CSVProcessor } from '../csv-processor/csv-processor.service';
import { ManualProcessor } from '../manual-processer/manual-processer.service';

@singleton()
export class FilesService {
	private fileProcessorService: Processor | null = null;
	constructor() {}

	checkFileType(file: File) {
		console.log(file);
		if (file.type === 'application/json') {
			this.fileProcessorService = new JSONProcessor(file);
		} else if (file.type === 'text/csv') {
			this.fileProcessorService = new CSVProcessor(file);
		} else {
			this.fileProcessorService = new ManualProcessor();
		}

		if (!this.fileProcessorService) {
			return;
		}

		this.fileProcessorService.process();
	}
}
