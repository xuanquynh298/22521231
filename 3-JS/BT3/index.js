// Bài 3. Viết hàm kiểm tra xem một chuỗi có phải là palindrome hay không.
function checkPalindrome(str) {
    str = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    let result = str.split('').reverse().join('');
    return str === result;
}
console.log(checkPalindrome("madam")); // true
console.log(checkPalindrome("web")); // false