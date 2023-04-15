// FizzBuzz

class FizzBuzz {
    constructor(number) {
        this.arr = [];
        for(let i = 1; i <= number ; i++) {
            if( i % 3 === 0 && i % 5 === 0) {
                this.arr += 'fizzbuzz\n'
            } else if (i % 3 === 0 ) {
                this.arr += 'fizz\n'
            } else if(i % 5 === 0) {
                this.arr += 'buzz\n'
            } else {
                this.arr += `${i}\n`;
            }
        }

        console.log(this.arr)
    }
}



//Palindrome

class Palindrome {
    constructor(value) {
        this.str = '';
        for(let i = (value.length - 1); i >= 0 ; i--) {
            this.str += value.charAt(i);
        }

        if(value == this.str) {
            console.log(`kata ${value} itu merupakan Palindrome`)
        } else {
            console.log(`kata ${value} bukan lah Palindrome`)
        }
    }
}