var crypto = require('crypto');

module.exports = function() {
  var prec = 3;
  var buf = crypto.randomBytes(prec);
  var max = 1 << (8*prec);
  var acc = 0;

  for (var i=0; i<prec; ++i) { acc = (acc << 8) + buf[i]; }
  return acc/max;
};
