
describe('sanitiseString function', () => {

    it('should return an already valid string argument unmodified', () => {
        expect(sanitiseString('aaaa')).toEqual('aaaa');
    })

    it('should remove any whitespace from start of returned string', () => {
        expect(sanitiseString(' bbbb')).toEqual('bbbb');
    })

    it('should remove any whitespace from middle of returned string', () => {
        expect(sanitiseString('cc cc')).toEqual('cccc');
    })

    it('should remove any whitespace from end of returned string', () => {
        expect(sanitiseString('dddd ')).toEqual('dddd');
    })

    it('should remove any symbols from the start of the string', () => {
        expect(sanitiseString(';!"£eeee')).toEqual('eeee');
    })

    it('should remove any symbols from the middle of the string', () => {
        expect(sanitiseString('ff!..;ff')).toEqual('ffff');
    })

    it('should remove any symbols from the end of the string', () => {
        expect(sanitiseString('gggg%^&*')).toEqual('gggg');
    })

    it('should remove any numbers from the start of the string', () => {
        expect(sanitiseString('1234hhhh')).toEqual('hhhh');
    })

    it('should remove any numbers from the middle of the string', () => {
        expect(sanitiseString('ii5678ii')).toEqual('iiii');
    })

    it('should remove any numbers from the end of the string', () => {
        expect(sanitiseString('jjjj91011')).toEqual('jjjj');
    })

    it('should change any uppercase letters into lowercase at the start of the string', () => {
        expect(sanitiseString('Kkkk')).toEqual('kkkk');
    })

    it('should change any uppercase letters into lowercase at the start of the string', () => {
        expect(sanitiseString('Kkkk')).toEqual('kkkk');
    })

    it('should change any uppercase letters into lowercase at the middle of the string', () => {
        expect(sanitiseString('lLLl')).toEqual('llll');
    })

    it('should change any uppercase letters into lowercase at the end of the string', () => {
        expect(sanitiseString('mmMM')).toEqual('mmmm');
    })

    it('should remove a mixture of whitespace, numbers, symbols and uppercase characters from a string to fully sanitise it', () => {
        expect(sanitiseString('12$H%^0*e*509(()L6784l789£$%o')).toEqual('hello');
    })

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