const Discord = require('discord.js');
module.exports = {
	name: 'photography',
	description: "this is a photography command!",
	execute(message, args) {
		const exampleEmbed = new Discord.MessageEmbed().setTitle('Photography');

		exampleEmbed.setColor('#6699EE');
		exampleEmbed.setDescription('Photography is the art of capturing light with a camera to create an image and expressing a story through a photograph. This event is a chance for budding photographers to showcase their skills. The photos you submit will help us determine who becomes a member of lens.')
		exampleEmbed.setTimestamp()
		message.author.send(exampleEmbed);
		message.channel.send('Check your DM, you have been sent a message regarding the Photography event ');
		
	}
}