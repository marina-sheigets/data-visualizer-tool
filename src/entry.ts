import 'reflect-metadata';
import { container, singleton } from 'tsyringe';
import { ToolsComponent } from './components/entities/tools/tools.component';

@singleton()
class Entry {
	private readonly body = document.body;
	constructor(protected toolsComponent: ToolsComponent) {
		this.body.append(this.toolsComponent.rootElement);
	}
}

container.register('BundleName', {
	useValue: 'entry',
});

container.resolve(Entry);
