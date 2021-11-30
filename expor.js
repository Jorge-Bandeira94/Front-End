/*function getflag(flag) {
  if (flag == '--name') {
    return 'jorge'
  } else {
    return 'Tudo bem com você?'
  }
}
module.exports = getflag
*/

function getFlagValue(value) {
  const index = process.argv.indexOf(value) + 1
  return process.argv[index]
}
module.exports = getFlagValue
