//print 1-6 random number-->This JavaScript function always returns a random number between min and max (both included):

function getRndomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

  console.log(getRndomNumber(1,6));