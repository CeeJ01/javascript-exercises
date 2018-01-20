var palindromes = function(string) {
	string = string.toLowerCase().replace(/[!&\/\\#,+()$~%.'":*?<>{}]/g,'');

	for (var i = 0; i < string.length / 2; i++) {
		if (string[i] != string[(string.length - 1) - i]){
			return false;
		}
		else {
			return true;
		}
	}
}
module.exports = palindromes;