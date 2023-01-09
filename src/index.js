module.exports = function toReadable (number) {
    let units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 
                'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let result = "";
    
    if (number/100 >= 1) {
        result = units[parseInt(number/100)] + " hundred"
        if (number%100 === 0) return (result)
        else { 
            result = result + " "
            number -= parseInt(number/100)*100
        }
    }
    
    if (number/10 >= 2) {
        result = result + tens[parseInt(number/10)]
        if (number%10 !== 0) { result += " " + units[(number%10)] }
    } else if (number/10 >= 1) {
        result += units[(number)]
    } else {
        result += units[(number%10)]
    }
    if (number === 0) { result = "zero" }
    
    return (result)
}
