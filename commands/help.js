const Discord = require('discord.js');
module.exports = {
	name: 'help',
	description: "this is a help command!",
	execute(message, args) {
		const exampleEmbed = new Discord.MessageEmbed()
			.setColor('#6699EE')
			.setTitle('Commands List')
			.setURL('https://minet.co/mach')
			.setDescription('Here is the list of all the commands that will help you out on the server')
			.setThumbnail('https://i.imgur.com/DRdHRSC.png/')
			.addFields(
				{ name: '.mach', value: 'What is mach?' },
				{ name: '.events', value: 'Provides a list of all the events which will take place in MACH' },
				{ name: '.workshop', value: 'Provides workshop details and timings' },
				{ name: '.register', value: 'Provides you a link through which you can register for MACH' },
				{ name: '.programming', value: 'Provides programming details' },
				{ name: '.webdev', value: 'Provides web development details' },
				{ name: '.design', value: 'Provides design details' },
				{ name: '.quiz', value: 'Provides quiz details' },
				{ name: '.gaming', value: 'Provides gaming details' },
				{ name: '.gd', value: 'Provides group discussion details' },
				{ name: '.av', value: 'Provides AV editing details' },
				{ name: '.photography', value: 'Provides photography details' },

			)
			.setTimestamp()
			.setFooter('MACH');

		message.author.send(exampleEmbed);
		message.channel.send(' A list of all the commands has been sent to your DM. ');
	}
}