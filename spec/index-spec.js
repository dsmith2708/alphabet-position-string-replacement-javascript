
describe('getOutputString function', () => {

    it('should return error message if provided argument is not defined', () => {
        expect(getOutputString(undefined)).toEqual('No valid alphabet characters found, please enter a valid string');
    })

    it('should return error message if provided argument is empty string', () => {
        expect(getOutputString('')).toEqual('No valid alphabet characters found, please enter a valid string');
    })
})