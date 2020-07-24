// import * as _ from 'lodash';
import * as communicatorModularUMD from 'communicator-modular-umd';

class Communicator {
    constructor() {}

    greet(message: string) {
        // return `<h1>${ _.toUpper(message) }</h1>`;
        // return communicatorGlobal.greet(message);
        // const _settings = new communicatorGlobal.Settings(message);
        // communicatorGlobal.settings = _settings;
        // return communicatorGlobal.greet();
        return communicatorModularUMD.otherFunctions.goodbye();
        // return communicatorModularUMD.greet(message);
    }
}

const communicator = new Communicator();
document!.body.innerHTML = communicator.greet('Hello, world for UMD');


