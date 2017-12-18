import sjcl from 'sjcl';
import worker from '!file-loader?name=[name].[ext]!openpgp/dist/openpgp.worker.min';
import '!file-loader?name=[name].[ext]!openpgp/dist/openpgp.min';
const openpgp = require('openpgp/dist/openpgp.min');

export default class CryptionService {
  static EncryptRawText(rawtext, password) {
    return sjcl.encrypt(password, rawtext);
  }

  static DecryptRawText(rawtext, password) {
    return sjcl.decrypt(password, rawtext);
  }
  static initWorker() {
    openpgp.initWorker({ path: worker });
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
}
