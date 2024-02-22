const calculator = {
  "+": (num1, num2) => num1 + num2,
  "-": (num1, num2) => num1 - num2,
  "*": (num1, num2) => num1 * num2,
  "/": (num1, num2) => num1 / num2,
  "%": (num1, num2) => num1 % num2,
};

function calculate(op) {
  const func = calculator[op];
  console.log(`10${op}2: `, func(10, 2));
}

// PreviousCharacter = ""
// ankit
// current = firstCharater + PreviousCharacter // "a" + ""
// Current = NextCharater + PreviousCharacter // "n" + "a"
// Current = NextCharater + Current // "k" + "na"
// Current = NextCharater + Current // "i" + "kna"
// Current = NextCharater + Current // "t" + "ikna" -> "tikna"
