import { downTo, capitalize } from './helpers';

class Bottles{

    verse(number){

        return(
                `${capitalize(this.quantity(number))} ${this.container(number)} ` + 'of beer on the wall, '+
                `${this.quantity(number)} ${this.container(number)} ` + 'of beer.\n' +
                `${this.action(number)}, ` +
                `${this.quantity(this.successor(number))} ${this.container(this.successor(number))} ` + 'of beer on the wall.\n' 
                );


                // Deleting this part 8 with the default as well)  after refactoring the case 0 and the default, by adding the methods action() and successor()
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
        

    //         if( numberHigh ==2 && numberLow == 0){
    //            return(
    //             `${numberHigh} bottles of beer on the wall, `  +
    //             `${numberHigh} bottles of beer.\n` +
    //             `Take one down and pass it around, ` +
    //             `${numberLow+1} bottle of beer on the wall.\n` +
    //             '\n' +
    //             `${numberLow+1} bottle of beer on the wall, `  +
    //             `${numberLow+1} bottle of beer.\n` +
    //             `Take it down and pass it around, ` +
    //             `no more bottles of beer on the wall.\n` +
    //             '\n' +
    //             `No more bottles of beer on the wall, ` +
    //             `no more bottles of beer.\n` +
    //             `Go to the store and buy some more, ` +
    //             `99 bottles of beer on the wall.\n`
    //            );



    //         }else{
    //            return( 
    //             `${numberHigh} bottles of beer on the wall, `  +
    //             `${numberHigh} bottles of beer.\n` +
    //             `Take one down and pass it around, ` +
    //             `${numberLow} bottles of beer on the wall.\n` +
    //             '\n' +
    //             `${numberLow} bottles of beer on the wall, `  +
    //             `${numberLow} bottles of beer.\n` +
    //             `Take one down and pass it around, ` +
    //             `${numberLow-1} bottles of beer on the wall.\n` 

    //     );
    // }
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


        // let max = 99;
        // for( let number = 99; number>= 0 ; number--){
        //     switch(number){
    //     const numbers = downTo(99,0);

    //     for( let number in numbers){



    //         switch(number){
    //         case 0:
    //             return(
    //             `No more bottles of beer on the wall, ` +
    //             `no more bottles of beer.\n` +
    //             `Go to the store and buy some more, ` +
    //             `99 bottles of beer on the wall.\n`
    //             );
    //             break;

    //         case 1 :
    //             return (
    //             `${number} bottle of beer on the wall, `  +
    //             `${number} bottle of beer.\n` +
    //             `Take it down and pass it around, ` +
    //             `no more bottles of beer on the wall.\n` 

    //             );
    //             break;

    //         case 2:
    //            return(
    //             `${number} bottles of beer on the wall, `  +
    //             `${number} bottles of beer.\n` +
    //             `Take one down and pass it around, ` +
    //             `${number - 1} bottle of beer on the wall.\n` 
    //             ); 
    //             break;
                
    //         default: 
    //             return(
    //             `${number} bottles of beer on the wall, `  +
    //             `${number} bottles of beer.\n` +
    //             `Take one down and pass it around, ` +
    //             `${number - 1} bottles of beer on the wall.\n` 
    //             );


    //         }


    
    //     }
    }
}

exports.Bottles = Bottles;
