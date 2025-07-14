const generatePassword = (length) => {
    let characters = "1234QWERTYUIOPLKJHGFDSAZXCVBNMM890)qwertyuioplkjhgfdsazxcvbnm(*&^%$#@!567";
    let password = '';

    for (let i = 0; i < length; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return password;
    
 };


module.exports = generatePassword;