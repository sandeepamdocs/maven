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
