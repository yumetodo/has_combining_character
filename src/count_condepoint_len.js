const countCodepointLen = s => {
  let i = 0;
  // eslint-disable-next-line no-unused-vars
  for (const _ of s) {
    ++i;
  }
  return i;
};
module.exports = countCodepointLen;
