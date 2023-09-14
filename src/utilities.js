export function isValidText(text) {
  if (/[0-9]|\W/.test(text)) {
    return "please remove any number or character";
  } else if (text.length < 3) {
    return "Your name is very short";
  } else if (text.length > 10) {
    return "Your name is very long";
  }
  return false;
}
