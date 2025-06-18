import { downTo } from './helpers';

class Bottles{

    verse(number){

        switch(number){

            case 0:
                return(
                `No more bottles of beer on the wall, ` +
                `no more bottles of beer.\n` +
                `Go to the store and buy some more, ` +
                `99 bottles of beer on the wall.\n`
                );
                break;

            case 1 :
                return (
                `${number} bottle of beer on the wall, `  +
                `${number} bottle of beer.\n` +
                `Take it down and pass it around, ` +
                `no more bottles of beer on the wall.\n` 

                );
                break;

            case 2:
               return(
                `${number} bottles of beer on the wall, `  +
                `${number} bottles of beer.\n` +
                `Take one down and pass it around, ` +
                `${number - 1} bottle of beer on the wall.\n` 
                ); 
                break;
                
            default: 
                return(
                `${number} bottles of beer on the wall, `  +
                `${number} bottles of beer.\n` +
                `Take one down and pass it around, ` +
                `${number - 1} bottles of beer on the wall.\n` 
                );

        

        }

    }

    verses(numberHigh, numberLow){

            if( numberHigh ==2 && numberLow == 0){
               return(
                `${numberHigh} bottles of beer on the wall, `  +
                `${numberHigh} bottles of beer.\n` +
                `Take one down and pass it around, ` +
                `${numberLow+1} bottle of beer on the wall.\n` +
                '\n' +
                `${numberLow+1} bottle of beer on the wall, `  +
                `${numberLow+1} bottle of beer.\n` +
                `Take it down and pass it around, ` +
                `no more bottles of beer on the wall.\n` +
                '\n' +
                `No more bottles of beer on the wall, ` +
                `no more bottles of beer.\n` +
                `Go to the store and buy some more, ` +
                `99 bottles of beer on the wall.\n`
               );


            }else{
               return( 
                `${numberHigh} bottles of beer on the wall, `  +
                `${numberHigh} bottles of beer.\n` +
                `Take one down and pass it around, ` +
                `${numberLow} bottles of beer on the wall.\n` +
                '\n' +
                `${numberLow} bottles of beer on the wall, `  +
                `${numberLow} bottles of beer.\n` +
                `Take one down and pass it around, ` +
                `${numberLow-1} bottles of beer on the wall.\n` 

        );
    }
    }

    song(){

        
  const numbers = downTo(99, 0);
  return numbers.map((n) => this.verse(n)).join('\n');

    }
}
