//Validating Jest is working.
test('Jest is working correctly', () => {expect(1+1).toBe(2);});

const palindromeTest = require('../src/palinedromeTest');

test('Palindrome test does not accept anything other than String Values', () => {
    expect(palindromeTest(0)).toBe("error: input must be a string");
    expect(palindromeTest(123)).toBe("error: input must be a string");
    expect(palindromeTest(true)).toBe("error: input must be a string");
    expect(palindromeTest(null)).toBe("error: input must be a string");
});

test('Is not a palindrome', ()=>{
    expect(palindromeTest("boo")) .toBe(false);
    expect(palindromeTest("bob is Bob ")).toBe(false);
    expect(palindromeTest("Ryan Gosling in Project Hail Mary Sucked")).toBe(false);
})

test('Is palindrome', ()=>{
    expect(palindromeTest("bob")).toBe(true);
    expect(palindromeTest("bob sis bob!")).toBe( true);
    expect(palindromeTest("Able was I ere I saw Elba")).toBe( true);
})