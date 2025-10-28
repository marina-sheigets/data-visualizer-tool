import { singleton } from 'tsyringe';
import { Processor } from '../../types/Processor';

@singleton()
export class JSONProcessor implements Processor {
	constructor(protected file: File) {
		this.file = file;
	}

	process() {
		console.log(this.file);
	}
}
