let notBinary = /[^01]/;
console.log(notBinary.test("1100100010100110"));
console.log(notBinary.test("1100100010200110"));

let match = /\d+/.exec("one two 100");
console.log(match);

let quotedText = /'([^']*)'/;
console.log(quotedText.exec("she said 'hello'"));

// notes

/**
 
+ means you want to match the whole digit that appears, just not the single digit


GROUPS
[] only matches one instance of the group
** A subexpression inside parentheses must be completely matched. 
when a regex equation has groups(), the groups that match them, to match them wether correct or not, are returned in the array.
- when a group () is matched multiple times, only the last match ends up in the array
THE FIRST ENTRY IS THE OVERALL MATCH OF THE GROUP, AND THE SUBSEQUENY ONES ARE WHAT THEY DEFINE
 */