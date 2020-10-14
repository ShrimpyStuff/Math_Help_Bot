module.exports = {
  name:'calc',
  description:'Simple Calculator',
  aliases: ['calculator'],
  usage: '[number] (space) [+ or - or * or /] (space) [number]',
  execute(message, args) {
    var a = Number(args[0]);
    var b = Number(args[2]);

    if (!args.length) {
      message.channel.send("Please add a number, (then a space,) then + or - or * or /, (then a space,) then a number.")
  }
    if (args[1] === "+") {
      message.channel.send(a+b);
    } else if (args[1] === "-") {
      message.channel.send(a-b);
    } else if (args[1] === "*") {
      message.channel.send(a*b);
    } else if (args[1] === "/") {
      message.channel.send(a/b);
    }
  },
};
