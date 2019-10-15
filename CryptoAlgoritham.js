var crypto = require('crypto');
var algoritham = 'aes-256-cbd';
var encryptionpassword ='encpasswd';
function decryptPassword (messageToDecrpt)
{
  let decipher = crypto.createDecipher(algoritham, encryptionPasswprd);
  let dec = decipher.update(messageToDecrypt,'hex','UTF8');
  dec+ = decipher.final('UTF8');
  return dec;
}
function encryptpassword(messageToEncrypt)
{
  
