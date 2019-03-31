
describe('sanitiseString function', () => {
    
})

describe('getOutputString function', () => {

    it('should return correct output when valid input with a single character is provided', () => {
        expect(getOutputString('a')).toEqual('1 ');
    });

    it('should retun correct output when valid input with multiple characters is provided', () => {
        expect(getOutputString('abcd')).toEqual('1 2 3 4 ');
    });

    it('should return correct output when valid input with all possible characters is provided', () => {
        expect(getOutputString('abcdefghijklmnopqrstuvwxyz'))
            .toEqual('1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 ');
    });

    it('should return error message if provided argument is not defined', () => {
        expect(getOutputString(undefined)).toEqual('No valid alphabet characters found, please enter a valid string');
    });

    it('should return error message if provided argument is empty string', () => {
        expect(getOutputString('')).toEqual('No valid alphabet characters found, please enter a valid string');
    });

})