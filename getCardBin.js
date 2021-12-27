const bankCardList = require('./bankCardList.js');

// getCardBin('6227088888888888')
//   .then((res) => console.log(res))
//   .catch((err) => console.error(err));

module.exports = function getCardBin(cardNo) {
  return new Promise((resolve, reject) => {
    if (cardNo.toString().length < 15 || cardNo.toString().length > 19) {
      reject(cardNo + ':银行卡位数必须是15到19位');
    }

    if (!cardNo || Number(cardNo) + '' === NaN + '') {
      reject('银行卡号必须是数字');
    }

    for (var i = 0, len = bankCardList.length; i < len; i++) {
      var bankcard = bankCardList[i];
      var patterns = bankcard.patterns;
      for (var j = 0, jLen = patterns.length; j < jLen; j++) {
        var pattern = patterns[j];
        if (new RegExp(pattern.reg).test(cardNo)) {
          var info = Object.assign({}, cardNo, bankcard, pattern);
          delete info.patterns;
          delete info.reg;
          resolve(info);
        }
      }
    }
    reject('未匹配该卡号bin');
  });
};
