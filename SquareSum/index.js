function squareSumsRow(num) {
    try {
        const options = {range: [1,1000], discard: 780}

        validate(num, options)
    } catch (err) {

    }
}

/**
 * 
 * Number Validator function 
 *
 * @param {Number} num Param to validate
 * @param {Object} options To configurate validate function. Add more validations.
 * 
 * About options
 * 
 * option: {
 *  range, // default = undefined, types = number[], number
 *  discard, // default = undefined, types = number[], number
 * }
 *
 * @returns Boolean | Error
 * @throws RangeError | TypeError
 * 
 * @version 0.0.1
 */
function validate(num, { range = undefined, discard = undefined }) {
    const { constructor: { name: instanceOf } } = num

    if (instanceOf === "String") {
        let converted = new Number(num)

        return validate(converted, { range, discard })
    }
    
    if (instanceOf !== "Number") 
        throw new TypeError("Invalid Type, mandatory number")
    
    if (!Number.isInteger()) 
        throw new RangeError("Only accept Integer numbers")

    if (!validateRange(num, range)) 
        throw new RangeError(`Only accept between ${range}`)

    else if (!validateDiscard(num, discard)) 
        throw new RangeError(`${num} was discarted`)
}

function validateRange(num, range) {
    return true
}

function validateDiscard(num, discard) {
    return true
}