module.exports = {
  name:'stop',
  description:'Stop bot (only for owner)',
  aliases: ['shutdown'],
  execute(message, args) {
    if (message.author.id === '675391536451682324') {
      process.exit(0);
    }
  },
};
