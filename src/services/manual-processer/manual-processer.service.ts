import { singleton } from 'tsyringe';
import { Processor } from '../../types/Processor';

@singleton()
export class ManualProcessor implements Processor {
	constructor() {}

	process() {
		//console.log(this.file);
	}
}
