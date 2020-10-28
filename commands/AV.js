const Discord = require('discord.js');
module.exports = {
	name: 'av',
	description: "this is a av command!",
	execute(message, args) {
		const exampleEmbed = new Discord.MessageEmbed().setTitle('Audio Video Editing');

		exampleEmbed.setColor('#6699EE');
		exampleEmbed.setDescription('Audio Visual Editing is the manipulation and creation of audio and video shots using AV tools. Participants will be given a prompt on 31st October and would be told to make a video related to the prompt. Use your imagination and knowledge about AV Editing and make a video which will show your true capabilities.')
		exampleEmbed.setTimestamp()
		message.author.send(exampleEmbed);
		message.channel.send('Check your DM, you have been sent a message regarding the AV Editing event');
	}
}