export function decode(message: string): string {
  let decodedMessage = message;
  let hasParenthesis = () => decodedMessage.indexOf('(') !== -1;

  while(hasParenthesis()) {
    const start = decodedMessage.lastIndexOf('(');
    const end = decodedMessage.indexOf(')', start);
    const content = decodedMessage.substring(start + 1, end);
    const reversed = content.split('').reverse().join('')
    const messageStart = decodedMessage.substring(0, start);
    const messageEnd = decodedMessage.substring(end + 1);
    decodedMessage = messageStart + reversed + messageEnd;
  }

  return decodedMessage;
}
