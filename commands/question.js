module.exports = {
	name: 'question',
	description: 'question',
	execute(message, args) {
    if (message.author.bot) return;
    const Discord = require('discord.js');
    const q = Math.floor(Math.random() * 4);
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
		}
	},
};
