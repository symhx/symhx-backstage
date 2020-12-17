const CryptoJS = require("crypto-js");  // 引用AES源码js

const key = CryptoJS.enc.Utf8.parse("ABCDEFGH12345678");  // 十六位十六进制数作为密钥
const iv = CryptoJS.enc.Utf8.parse("WWWSYMHXWWWSYMHX");   // 十六位十六进制数作为密钥偏移量

const secret = {
    // 解密方法
    Decrypt(word, k) {
        let encryptedHexStr = CryptoJS.enc.Hex.parse(word);
        let srcs = CryptoJS.enc.Base64.stringify(encryptedHexStr);
        let decrypt = CryptoJS.AES.decrypt(srcs, k?CryptoJS.enc.Utf8.parse(k):key, {iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7});
        let decryptedStr = decrypt.toString();
        return decryptedStr.toString();
    },
    // 加密方法
    Encrypt(word) {
        let srcs = CryptoJS.enc.Utf8.parse(word);
        let encrypted = CryptoJS.AES.encrypt(srcs, key, {iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7});
        return encrypted.ciphertext.toString();
    },
    DecryptObj(res) {
        if (typeof (res) === 'string') {
            let a = this.Decrypt(res);
            if (a.startsWith('{')) {
                return JSON.parse(a);
            }
        } else {
            return res;
        }
    }
}

export default secret;
