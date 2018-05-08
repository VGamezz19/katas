const assert = require('assert');
const censor = require('../src/censor.js');

describe("Censor word", () => {

    it("censor word NICE", () => {
        const blackWord = 'nice';
        const inputText = 'hello! you are so nice!';

        const censoredText = censor(blackWord, inputText);
        const assertionText = "hello! you are so XXXX!";

        assert.equal(censoredText, assertionText, `It should replace ${blackWord} from ${inputText}`);
    });
});