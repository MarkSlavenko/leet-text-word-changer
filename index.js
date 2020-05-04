const alphabet = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л',
                  'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 
                  'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я']

const smallAlphabet = {
	'а': ['а','a', '@'],           'р':['р','p', 'Þ'],
	'б':['б','6'],                 'с':['с','c', '©'],
	'в':['в','8'],								 'т':['т','7'], 
	'г':['г','r'],                 'у':['у','y'],
	'д':['д','g'],                 'ф':['ф','cp'], 
	'е':['е','e', '3'],            'х':['х','x'],
	'ё':['',''],                   'ц':['ц','L|'],
	'ж':['ж','}|{'],               'ч':['ч','4'],
	'з':['з','3'],                 'ш':['ш','III'],
	'и':['и'],                     'щ':['щ','LLL'],
	'й':['й','|/|'],               'ъ':['ъ',"'b"],
	'к':['к','k'],                 'ы':['ы','bl'],
	'л':['л','JI'],                'ь':['ь','b'],
	'м':['м','m'],                 'э':['э','€'],
	'н':['н','|-|'],               'ю':['ю', '10', '|-O'],
	'о':['о', 'o', '0'],           'я':['я','9', '9I'],       
	'п':['п','n', '||']

}

 randomFromArray = (arr) => {
    var rand = Math.floor(Math.random() * arr.length);
    return arr[rand];
}

convertText = (inputText) => {
	let finalText = [];

	try {
		if (typeof inputText !== 'string') {
			 throw new Error("Not a string format!");
		}
		const textForChange = inputText.slice();

		for (let i = 0; i < textForChange.length; i++) {
			if (alphabet.indexOf(textForChange[i]) != -1) {
				finalText.push(randomFromArray(smallAlphabet[textForChange[i]])) ;
			} else {	finalText.push(textForChange[i]); }
	}

	} catch (e) {
		console.log('---[ Something went wrong ]---');
	  console.log( e.message );
	}
 		
		return finalText.join('');
}


// convertText('***');
console.log(convertText('Write the text here!'););