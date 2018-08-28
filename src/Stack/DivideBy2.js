import Stack from '../Stack';

export default function DivideBy2() {

    this.divideBy2 = function(decNumber, base = 2) {

        var remStack = new Stack,
        rem,
        bianryString ='';
    
        while (decNumber > 0) {
            rem = Math.floor(decNumber % base);
            remStack.push(rem);
            decNumber = Math.floor(decNumber / base);
        }

        while (!remStack.isEmpty()) {
            var tmp = remStack.pop();
            bianryString += tmp.toString();
        }

        return bianryString;
    }
}