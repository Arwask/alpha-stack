// Create an array that contains the letters of the alphabet
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// The stackLetter function should accept the array as the sole argument
function stackLetters (theAlphabetArray) 
{
    for(var i=0; i<alphabet.length; i++)
    {
    	for(var j = 0; j <= i; j++)
    	{
    		if(j % 3 === 0)
    		{
    			document.write(` `);
    		}
    		document.write(`${alphabet[j]}`);
    	}
    	document.write('<br/>');
    }
}

// Invoke the function and pass in the array
stackLetters(alphabet)