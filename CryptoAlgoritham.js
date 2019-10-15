CryptoAlgoritham.js:
-------------------------

var crypto = require('crypto');
var algoritham = 'aes-256-cbd';
var encryptionpassword ='encpasswd';
function decryptPassword (messageToDecrpt)
{
  let decipher = crypto.createDecipher(algoritham, encryptionPassword);
  let dec = decipher.update(messageToDecrypt,'hex','UTF8');
  dec+ = decipher.final('UTF8');
  return dec;
}
function encryptpassword(messageToEncrypt)
{
   let cipher = crypto.createCipher(algoritham, encryptionPassword);
  let crypted = cipher.update(messageToEncrypt,'hex','UTF8');
  crypted+ = cipher.final('hex');
  return crypted;
}
var cryptedPswd = encryptPasswrd('Amma@143');
console.log('Encrypted password is: '+cryptedPswd);


CryptoAlgoritham.js.tokes:
---------------------------------
  
  var crypto = require('crypto');
var algoritham = 'aes-256-cbd';
var encryptionpassword ='encpasswd';
function decryptPassword (messageToDecrpt)
{
  let decipher = crypto.createDecipher(algoritham, encryptionPassword);
  let dec = decipher.update(messageToDecrypt,'hex','UTF8');
  dec+ = decipher.final('UTF8');
  return dec;
}
function encryptpassword(messageToEncrypt)
{
   let cipher = crypto.createCipher(algoritham, encryptionPassword);
  let crypted = cipher.update(messageToEncrypt,'hex','UTF8');
  crypted+ = cipher.final('hex');
  return crypted;
}
var cryptedPswd = encryptPasswrd('input');
console.log('Encrypted password is: '+cryptedPswd);


DecryptAlgoritham.js:
---------------------------------
  
  var crypto = require('crypto');
var algoritham = 'aes-256-cbd';
var encryptionpassword ='encpasswd';
function decryptPassword (messageToDecrpt)
{
  let decipher = crypto.createDecipher(algoritham, encryptionPassword);
  let dec = decipher.update(messageToDecrypt,'hex','UTF8');
  dec+ = decipher.final('UTF8');
  return dec;
}
function encryptpassword(messageToEncrypt)
{
   let cipher = crypto.createCipher(algoritham, encryptionPassword);
  let crypted = cipher.update(messageToEncrypt,'hex','UTF8');
  crypted+ = cipher.final('hex');
  return crypted;
}
var decryptedPswd = decryptPasswd('82582823f5s5gr62sdf52');
console.log('Decrypted password is: '+decryptedPswd);

DecryptAlgoritham.js.tokens:
---------------------------------
  
  var crypto = require('crypto');
var algoritham = 'aes-256-cbd';
var encryptionpassword ='encpasswd';
function decryptPassword (messageToDecrpt)
{
  let decipher = crypto.createDecipher(algoritham, encryptionPassword);
  let dec = decipher.update(messageToDecrypt,'hex','UTF8');
  dec+ = decipher.final('UTF8');
  return dec;
}
function encryptpassword(messageToEncrypt)
{
   let cipher = crypto.createCipher(algoritham, encryptionPassword);
  let crypted = cipher.update(messageToEncrypt,'hex','UTF8');
  crypted+ = cipher.final('hex');
  return crypted;
}
var decryptedPswd = decryptPasswd('input');
console.log('Decrypted password is: '+decryptedPswd);






