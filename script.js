//your code here
class OutOfRangeError extends Error {
  constructor(arg) {
    super(`Expression should only consist of integers and +-/* characters and not ${arg}`);
    this.name = "OutOfRangeError";
  }
}

class InvalidExprError extends Error {
  constructor() {
    super("Expression should not have an invalid combination of expression");
    this.name = "InvalidExprError";
  }
}

function evalString(expression) {
  try {
    if (/^\s*[\+\-\*/]/.test(expression)) {
      throw new SyntaxError("Expression should not start with invalid operator");
    }
    if (/[\+\-\*/]\s*$/.test(expression)) {
      throw new SyntaxError("Expression should not end with invalid operator");
    }
    if (/[^\d\s\+\-\*/]/.test(expression)) {
      throw new OutOfRangeError(expression.match(/[^\d\s\+\-\*/]/)[0]);
    }
    if (/\+\+|\-\-|\*\*|\/\/|\/\+|\+\//.test(expression)) {

 throw new InvalidExprError();
    }
    return eval(expression);
  } catch (err) {
    if (err instanceof OutOfRangeError || err instanceof InvalidExprError) {
      throw err;
    } else {
      throw new SyntaxError(`Invalid expression: ${err.message}`);
    }
  }
}
try {
  console.log(evalString("1 + 2 * 3"));
} catch (err) {
  console.log(err);
}