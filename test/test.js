const hasCombiningCharacter = require('../index');
const countCodepointLen = require('../src/count_condepoint_len');
const GraphemeBreaker = require('grapheme-breaker-u10-0');

describe('test', () => {
  it('count_condepoint_len', () => {
    expect(countCodepointLen('a')).toEqual(1);
  });
  it('GraphemeBreaker.countBreaks(s)', () => {
    expect(GraphemeBreaker.countBreaks('a')).toEqual(1);
  });
  it('t', () => {
    expect(hasCombiningCharacter('a')).toEqual(false);
  });
});
