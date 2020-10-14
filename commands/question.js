module.exports = {
	name: 'question',
	description: 'Send a specific math question to help you learn math',
	execute(message, args) {
    if (message.author.bot) return;
    const Discord = require('discord.js');
		const one = Math.floor(Math.random() * 51);
		const two = Math.floor(Math.random() * 51);
		const onea = one-(one*2)
		const twoa = two-(two*2)
    if (!args.length) {
			message.channel.send("please add an argument: \naddition \nsubtraction \nmultiplication \ndivision \nor n addition/subtraction \nuse !questionr for random")
  } else if (args[0] === "addition") {
      const answer = one+two;
  		message.channel.send(one + " + " + two);
          const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { max: 1});
          collector.on('collect', message => {
              if (message.content == answer) {
                  message.channel.send("💎Correct! 💎");
              } else  {
                  message.channel.send("Wrong.");
              }
          })
    } else if (args[0] === "subtraction") {
      const answer = one-two;
  		message.channel.send(one + " - " + two);
          const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { max: 1});
          collector.on('collect', message => {
              if (message.content == answer) {
                  message.channel.send("💎Correct! 💎");
              } else  {
                  message.channel.send("Wrong.");
              }
          })
    } else if (args[0] === "multiplication") {
      const answer = one*two;
  		message.channel.send(one + " * " + two);
          const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { max: 1});
          collector.on('collect', message => {
              if (message.content == answer) {
                  message.channel.send("💎Correct! 💎");
              } else  {
                  message.channel.send("Wrong.");
              }
          })
    } else if (args[0] === "division") {
			const answer = one/two;
			const answera = Math.round(answer * 1000) / 1000;
			message.channel.send(one + " ÷ " + two);
          const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { max: 1});
          collector.on('collect', message => {
              if (message.content == answera) {
                  message.channel.send("💎Correct! 💎");
              } else  {
                  message.channel.send("Wrong.");
              }
          })
    } else if (args[0] === "n" && args[1] === "subtraction") {
      const answer = onea-twoa;
  		message.channel.send(onea + " - " + twoa);
          const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { max: 1});
          collector.on('collect', message => {
              if (message.content == answer) {
                  message.channel.send("💎Correct! 💎");
              } else  {
                  message.channel.send("Wrong.");
              }
          })
    } else if (args[0] === "n" && args[1] === "addition") {
      const answer = onea+twoa;
  		message.channel.send(onea + " + " + twoa);
          const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { max: 1});
          collector.on('collect', message => {
              if (message.content == answer) {
                  message.channel.send("💎Correct! 💎");
              } else  {
                  message.channel.send("Wrong.");
              }
          })
    }
	},
};
