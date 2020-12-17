import Lockr from 'lockr';
import secret from './secret'

const LockrUtils = {
    getData (key, isDecrypt) {
        let oriStr = Lockr.get(key);
        if (oriStr) {
            if (isDecrypt) {
                return JSON.parse(secret.Decrypt(Lockr.get(key)));
            } else {
                return JSON.parse(Lockr.get(key));
            }
        } else {
            return oriStr;
        }
    },
    setData (key, data, isEncrypt) {
        if (isEncrypt) {
            Lockr.set(key, secret.Encrypt(JSON.stringify(data)));
        } else {
            Lockr.set(key, JSON.stringify(data));
        }
    },
    rmData (key) {
        Lockr.rm(key);
    },
    flushAll () {
        Lockr.flush();
    }
};
export default LockrUtils;
