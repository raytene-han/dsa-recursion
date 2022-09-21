/** Accepts a simple square or a split square and returns a string of the square,
 * either 1 or 0, space-separated.
 */
function dump(squares, out=[]) {
  if (typeof squares === 'number') return `${squares}`;

  for (let square of squares) {
    if (Array.isArray(square)) dump(square, out);
    else out.push(square);
  }

  return out.join(" ");
}

/** Accepts a simple square or a split square and returns the squares are valid.
 *
 * Valid square contain either 0 or 1 and have 4 parts per split square.
 */
 function validate(squares) {
  if (typeof squares === 'number' &&
      (squares === 0 || squares === 1)) return true;
  if (squares.length !== 4) return false;

  for (let square of squares) {
    if (Array.isArray(square)) {
      return validate(square);
    } else if (square !== 0 && square !== 1) {
      return false;
    }
  }

  return true;
}

/** Accepts square and returns the maximally-simplified version of it.
 * 
*/
function simplify(squares, out=[]) {
  if (typeof squares === 'number') return squares;

  for (let i=0; i < squares.length; i++) {
    if (Array.isArray(squares[i])) {
      squares[i] = simplify(squares[i])
    }
  }

  if ((squares[0] === squares[1]) && (squares[1] === squares[2]) &&
  (squares[2] === squares[3])) {
    return squares[0];
  }
  else {
    return squares;
  }
}

module.exports = {dump, validate, simplify}