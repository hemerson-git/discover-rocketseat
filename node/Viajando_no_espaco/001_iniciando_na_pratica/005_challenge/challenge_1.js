function getFlag(flag) {
  const index = process.argv.indexOf(flag) + 1;
  const argValue = process.argv[index];
  return argValue;
}

module.exports = getFlag;
