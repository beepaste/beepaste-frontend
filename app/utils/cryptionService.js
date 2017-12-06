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

  static EncryptWithOpenpgp(rawtext, publickey) {
    openpgp.initWorker({ path: worker });
    const options = {
      data: rawtext,
      publicKeys: openpgp.key.readArmored(publickey).keys,
    };
    return openpgp.encrypt(options);
  }
}
