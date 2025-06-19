import { downTo, capitalize } from './helpers';

class Bottles{

    verse(number){

        return(
                `${capitalize(this.quantity(number))} ${this.container(number)} ` + 'of beer on the wall, '+
                `${this.quantity(number)} ${this.container(number)} ` + 'of beer.\n' +
                `${this.action(number)}, ` +
                `${this.quantity(this.successor(number))} ${this.container(this.successor(number))} ` + 'of beer on the wall.\n' 
                );


                // Deleting this part (with the default as well)  after refactoring the case 0 and the default, by adding the methods action() and successor()
        // switch(number){

        //     case 0:
        //         return(
        //         `${capitalize(this.quantity(number))} ${this.container(number)} of beer on the wall, ` +
        //         `${this.quantity(number)} ${this.container(number)} of beer.\n` +
        //         `${this.action(number)}, ` +
        //         `${this.quantity(this.successor(number))} ${this.container(this.successor(number))} of beer on the wall.\n`
        //         );
        //         break;

                 // Deleting it after the refactorisation with quantity ()
            // case 1 :
            //     return (
            //     `${number} ${this.container(number)} ` + 'of beer on the wall, '+  // Adding this.container(number) here (refactoring 1)
            //     `${number} ${this.container(number)} ` + 'of beer.\n' +
            //     `Take ${this.pronoun(number)} down and pass it around, ` + // Adding pronoun(number) here to catch up the difference with default case.(refactoring 2)
            //     `${this.quantity(number-1)} ${this.container(number-1)} of beer on the wall.\n`  // Adding quantity(number) here ( refactoring 3)

            //     );
            //     break;

                // Deleting it after the refactorisation with container ()
            // case 2:
            //    return(
            //     `${number} bottles of beer on the wall, `  +
            //     `${number} bottles of beer.\n` +
            //     `Take one down and pass it around, ` +
            //     `${number - 1} ${this.container(number-1)} ` + 'of beer on the wall.\n' 
            //     ); 
            //     break;
                
            // default: 
            //     return(
            //     `${capitalize(this.quantity(number))} ${this.container(number)} ` + 'of beer on the wall, '+
            //     `${this.quantity(number)} ${this.container(number)} ` + 'of beer.\n' +
            //     `${this.action(number)}, ` +
            //     `${this.quantity(this.successor(number))} ${this.container(this.successor(number))} ` + 'of beer on the wall.\n' 
            //     );

       // }
    }


    verses(numberHigh, numberLow){

        return downTo(numberHigh, numberLow).map(i => this.verse(i)).join('\n');
    }


    container (number){
        if(number ===1){
            return'bottle';
        }else{
        return "bottles";
        }
    }

    pronoun(number){
        if(number === 1){
            return 'it';
        }else{
            return'one';

        }
    }

    quantity(number){
        if(number=== 0){
            return 'no more';
        }else{
            return number.toString();
        }
    }

    action(number) {
        if (number === 0) {
           return 'Go to the store and buy some more';
        } else {
           return (`Take ${this.pronoun(number)} down and pass it around`);
        }
    }

    successor(number){
        if(number === 0){
            return 99;
        }else {
            return number - 1;
        }
    }

    song(){
        return this.verses(99, 0);
    }
}

exports.Bottles = Bottles;
