const GraphemeBreaker = require('grapheme-breaker-u10-0');
const countCodepointLen = require('./src/count_condepoint_len');
const hasCombiningCharacter = s => GraphemeBreaker.countBreaks(s) !== countCodepointLen(s);
module.exports = hasCombiningCharacter;
