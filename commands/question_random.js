module.exports = {
	name: 'questionr',
	description: 'Send a random math question to help you learn math',
	execute(message, args) {
    if (message.author.bot) return;
    const Discord = require('discord.js');
    const q = Math.floor(Math.random() * 6);
		const one = Math.floor(Math.random() * 51);
		const two = Math.floor(Math.random() * 51);
		const onea = one-(one*2)
		const twoa = two-(two*2)
    if (q == 0) {
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
    } else if (q == 1) {
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
    } else if (q == 2) {
      const answer = (onea-twoa);
      message.channel.send(onea + " - " + twoa);
          const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { max: 1});
          collector.on('collect', message => {
              if (message.content == answer) {
                  message.channel.send("💎Correct! 💎");
              } else  {
                  message.channel.send("Wrong.");
              }
          })
    } else if (q == 3) {
			const answer = (onea+twoa);
			message.channel.send(onea + " + " + twoa);
					const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { max: 1});
					collector.on('collect', message => {
							if (message.content == answer) {
									message.channel.send("💎Correct! 💎");
							} else  {
									message.channel.send("Wrong.");
							}
					})
		} else if (q == 4) {
			const answer = one/two;
			const answera = Math.round(answer * 1000) / 1000;
			function roundNum(answer) { Math.round(answer * 100) / 100;
}
  		message.channel.send(one + " ÷ " + two);
			message.channel.send(answer);
          const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { max: 1});
          collector.on('collect', message => {
              if (message.content == answera) {
                  message.channel.send("💎Correct! 💎");
              } else  {
                  message.channel.send("Wrong.");
              }
          })
    } else if (q == 5) {
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
    }
	},
};
