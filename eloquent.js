function min (a, b) {
  if (a <= b) {
    return a
  } return b
}

function isEven (x) {
  if (x >= 0) {
    if (x === 0) {
      return true
    } if (x == 1) {
      return false
    } return isEven(x - 2)
  } if (x < 0) {
    return isEven(x + 2)
  }
}

function countBs (str) {
  var counter = 0
  for (var i = 0; i < str.length; i++){
    if (str.charAt(i) === 'B') {
      counter++
    }
  } return counter
}

function countChar (str, char) {
  var counter = 0
  for (var i = 0; i < str.length; i++){
    if (str.charAt(i) === char) {
      counter++
    }
  } return counter
}

// rewritten countBs:

function countBs (str) {
  countChar(str, 'B')
}
