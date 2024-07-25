import { EventEmitter } from 'events';

const emitter = new EventEmitter();

emitter.addListener('hallo', (name) => {
    console.info(`Hallo ${name}`);
});

emitter.emit('hallo', 'Bain');