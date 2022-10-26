let newAny: any;

newAny = 3;
newAny = 'Hello';
newAny = 5;

let stringTest: string = 'test';
stringTest = newAny;

let unknownValue: unknown;

unknownValue = 3;
unknownValue = 'Hi';
unknownValue = true;
unknownValue = 'test1';

let stringTest1: string = 'test1';

if(typeof unknownValue === 'string'){
    stringTest1 = unknownValue;
}

function throwError(error: string, code: number): never {
    throw {error: error, code: code}
}

throwError('something is wrong!', 500);