import sjcl from 'sjcl';
const openpgp = require('openpgp/dist/openpgp.min');

export default class CryptionService {
  static EncryptRawText(rawtext, password) {
    return sjcl.encrypt(password, rawtext);
  }

  static DecryptRawText(rawtext, password) {
    return sjcl.decrypt(password, rawtext);
  }
  static initWorker() {
    openpgp.initWorker({ path: '/openpgp.worker.min.js' });
  }
  static EncryptWithOpenpgp(rawtext, publickey) {
    CryptionService.initWorker();
    const options = {
      data: rawtext,
      publicKeys: openpgp.key.readArmored(publickey).keys,
    };
    return openpgp.encrypt(options);
  }
  static DecryptWithOpenpgp(rawtext, privatekey, passphrase) {
    CryptionService.initWorker();
    try{
      const prive = openpgp.key.readArmored(privatekey);
      if (passphrase !== undefined && passphrase !== '') {
        const isSuccess = prive.keys[0].decrypt(passphrase);
      } else {
        const isSuccess = prive.keys[0].decrypt();
      }
      const options = {
        message: openpgp.message.readArmored(rawtext),
        privateKey: prive.keys[0],
      };
      return openpgp.decrypt(options);
    }
    catch (ex){
      return undefined;
    }
  }
}
