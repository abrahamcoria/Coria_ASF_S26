const palindromeTest = (input) => {
    if (typeof input !== "string") {
        return "error: input must be a string";
    }

        const string = input.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()]/g,"")
            .replace(/\s/g," ").toLowerCase();
        let j = string.length - 1;
        for (let i = 0; i < string.length / 2; i++) {
            if (string[i] != string[j]) {
                return false;
            }
            j--;
        }
        return true;
}

module.exports = palindromeTest;
