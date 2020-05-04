const alphabet = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л',
                  'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 
                  'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я']

const smallAlphabet = {
	'а': ['а','a', '@'],     'б':['б','6'],
	'в':['в','8'],             'г':['г','r'],
	'д':['д','g'],             'е':['е','e', '3'], 'ё':['',''],
	'ж':['ж','}|{'], 'з':['з','3'],
	'и':['и'], 'й':['й','|/|'],
	'к':['к','k'], 'л':['л','JI'],
	'м':['м','m'], 'н':['н','|-|'],
	'о':['о', 'o', '0'], 'п':['п','n', '||'],
	'р':['р','p', 'Þ'], 'с':['с','c', '©'],
	'т':['т','7'], 'у':['у','y'],
	'ф':['ф','cp'], 'х':['х','x'],
	'ц':['ц','L|'], 'ч':['ч','4'],
	'ш':['ш','III'], 'щ':['щ','LLL'],
	'ъ':['ъ',"'b"], 'ы':['ы','bl'],
	'ь':['ь','b'], 'э':['э','€'],
	'ю':['ю', '10', '|-O'], 'я':['я','9', '9I']
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


console.log(convertText('проверка текста прием прием максим лох. вкусный картошка люблю есть!'));