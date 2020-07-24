// import * as _ from 'lodash';

class Communicator {
    constructor() {}

    greet(message: string) {
        // return `<h1>${ _.toUpper(message) }</h1>`;
        return communicatorGlobal.greet(message);
    }
}

const communicator = new Communicator();
document!.body.innerHTML = communicator.greet('Hello, world for global...');


