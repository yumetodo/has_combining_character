const hasCombiningCharacter = require('../index');
const countCodepointLen = require('../src/count_condepoint_len');
const GraphemeBreaker = require('grapheme-breaker-u10-0');

describe('test', () => {
  it('count_condepoint_len', () => {
    expect(countCodepointLen('a')).toEqual(1);
    expect(countCodepointLen('が')).toEqual(1);
    expect(countCodepointLen('\u304b\u3099')).toEqual(2);
    expect(countCodepointLen('👩‍❤️‍💋‍👨')).toEqual(8);
  });
  it('GraphemeBreaker.countBreaks(s)', () => {
    expect(GraphemeBreaker.countBreaks('a')).toEqual(1);
    expect(GraphemeBreaker.countBreaks('が')).toEqual(1);
    expect(GraphemeBreaker.countBreaks('\u304b\u3099')).toEqual(1);
    expect(GraphemeBreaker.countBreaks('👩‍❤️‍💋‍👨')).toEqual(1);
  });
  it('t', () => {
    expect(hasCombiningCharacter('a')).toEqual(false);
    expect(hasCombiningCharacter('が')).toEqual(false);
    expect(hasCombiningCharacter('\u304b\u3099')).toEqual(true);
    expect(hasCombiningCharacter('👩‍❤️‍💋‍👨')).toEqual(true);
  });
});
