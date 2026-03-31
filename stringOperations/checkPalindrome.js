let text = "madam";

function isPalindrome(str) {
    let reversed = str.split('').reverse().join('');
    return str === reversed;
}

if (isPalindrome(text)) {
    console.log("Palindrome");
} else {
    console.log("Not a palindrome");
}