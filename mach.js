const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '.';
const fs = require('fs');
const Welcome = require("discord-welcome");

const ReactionRole = require("reaction-role");
const system = new ReactionRole(process.env.TOKEN);

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

//reaction roles
let webdev_emoji = system.createOption("webdev:769472273941528587", "756417753044221972");
let design_emoji = system.createOption("design:770022122939613184", "756418048432275486");
let programming_emoji = system.createOption("progamming:769959123156467722", "756222780697215168");
let gaming_emoji = system.createOption("gaming:768177306794852418", "756417937048338454");
let gd_emoji = system.createOption("gd:769962692597121114", "756417923634954280");
let quiz_emoji = system.createOption("quiz:769942692293509160", "757466483247939616");
let photography_emoji = system.createOption("photography:768794075838414850", "756417791724224552");
let av_emoji = system.createOption("av:769944589335134239", "757476797221830657");

system.createMessage("771082393800933379", "757481161852321884", 8, null, webdev_emoji, design_emoji, programming_emoji, gaming_emoji, gd_emoji, quiz_emoji,photography_emoji,av_emoji);


system.init();

client.once('ready', () => {
	console.log('MACH Bot is online!');
	client.user.setActivity("MACH | .help");
	Welcome(client, {
		privatemsg : "Welcome to the MACH discord server. We will be announcing various information in #announcements so stay alert :) \n Have a good day!",
		publicmsg : "@MEMBER Welcome to MACH. ",
		publicchannel : "768870717247848538"
		})

	//server stats

	 const guild = client.guilds.cache.get('753254323500089364');
	 const totalUsers = client.channels.cache.get('768861798455574598');
	 const Participants = client.channels.cache.get('768861866725212161');
	 setInterval(function () {
	 	console.log('Getting stats update..')
	 	var userCount = guild.memberCount;
	 	var participantCount = guild.roles.cache.get('753554226235310221').members.size;
	 	console.log("Total Members: " + userCount);
	 	console.log("Participants: " + participantCount);
	 	totalUsers.setName("Total Members: " + userCount)
	 		.then(newChannel => console.log(`Stat channel renamed to: ${newChannel.name}`))
	 		.catch(console.error);

	 	Participants.setName("Participants: " + participantCount)
	 		.then(newChannel => console.log(`Stat channel renamed to: ${newChannel.name}`))
	 		.catch(console.error);
	 }, 30000)
});
client.on('guildMemberAdd', member => {
	console.log('User ' + member.user.username + ' has joined the server!')
	var role = member.guild.roles.cache.find(role => role.name === 'Participant');
	member.roles.add(role)
  });

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;
	if (message.content == "f") {
		message.channel.send("lmao rip he gon");
	}

	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();

	if (command === 'mach') {
		client.commands.get('mach').execute(message, args);
	} if (command === 'av') {
		client.commands.get('av').execute(message, args);
	} if (command === 'photography') {
		client.commands.get('photography').execute(message, args);
	} if (command === 'design') {
		client.commands.get('design').execute(message, args);
	} if (command === 'gaming') {
		client.commands.get('gaming').execute(message, args);
	} if (command === 'gd') {
		client.commands.get('gd').execute(message, args);
	} if (command === 'programming') {
		client.commands.get('programming').execute(message, args);
	} if (command === 'quiz') {
		client.commands.get('quiz').execute(message, args);
	} if (command === 'webdev') {
		client.commands.get('webdev').execute(message, args);
	} if (command === 'help') {
		client.commands.get('help').execute(message, args);
	} if (command === 'events') {
		client.commands.get('events').execute(message, args);
	} if (command === 'register') {
		client.commands.get('register').execute(message, args);
	} if (command === 'workshop') {
		client.commands.get('workshop').execute(message, args);
	} if (command === 'clear') {
		client.commands.get('clear').execute(message, args);
	} if (command === 'kick') {
		client.commands.get('kick').execute(message, args);
	} if (command === 'ban') {
		client.commands.get('ban').execute(message, args);
	} if (command === 'mute'){
		client.commands.get('mute').execute(message, args);
	} if (command === 'unmute'){
		client.commands.get('unmute').execute(message, args);
	}
 });

//message delete logs

client.on('messageDelete', message => {
	if (message.author.bot) return;

	const embed = new Discord.MessageEmbed()
		.setTitle('Message Deleted')
		.setAuthor(message.author.tag, message.author.displayAvatarURL())
		.addField(message.author.tag, 'The message was deleted by a very simp child')
		.addField('Message', message.cleanContent, inline = true)
		.addField('Channel', message.channel, inline = true)
		.setColor('#6699EE')
		.setTimestamp()

	client.channels.cache.get(`753572296572010526`).send(embed)
});

//message update logs

client.on('messageUpdate', (oldMessage, newMessage) => {
	if (oldMessage.author.bot) return;

	var editEmbed = new Discord.MessageEmbed()
		.setColor('#6699ee')
		.setTitle('Message edited')
		.setDescription('A message was deleted.')
		.setAuthor(oldMessage.author.tag, oldMessage.author.displayAvatarURL())
		.addFields(
			{ name: 'User', value: newMessage.author.tag, inline: true },
			{ name: 'Channel', value: oldMessage.channel },
			{ name: 'Old Message', value: oldMessage.content },
			{ name: 'New Message', value: newMessage.content },
		)
		.setTimestamp()

	client.channels.cache.get(`753572296572010526`).send(editEmbed)
});
const initial = new Discord.MessageEmbed()
			.setColor('#6699EE')
			.setTitle('Register for Mach Programming')
			.setDescription('Answer the Following questions in order to register for the programming event.')
			.setThumbnail('https://i.imgur.com/DRdHRSC.png/')
			.addField("Please Fill out the form with the right details as this is being stored in a database.", "\u200b")
			.setTimestamp()
			.setFooter('MACH');

const q1 = new Discord.MessageEmbed()
			.setColor('#6699EE')
			.setTitle('Question 1')
			.setDescription('What is your Name?')
			.setTimestamp()
			.setFooter('MACH');

const q2 = new Discord.MessageEmbed()
			.setColor('#6699EE')
			.setTitle('Question 2')
			.setDescription('What is your Class?')
			.setTimestamp()
			.setFooter('MACH');

const q3 = new Discord.MessageEmbed()
			.setColor('#6699EE')
			.setTitle('Question 3')
			.setDescription('Which programming languages do you know?')
			.setTimestamp()
			.setFooter('MACH');

const q4 = new Discord.MessageEmbed()
			.setColor('#6699EE')
			.setTitle('Question 4')
			.setDescription('What is your HackerRank Username?')
			.setTimestamp()
			.setFooter('MACH');

const ty = new Discord.MessageEmbed()
			.setColor('#6699EE')
			.setTitle('Register')
			.setDescription('Thank you for registering for the programming event, if you are facing an issues then contact BlurryMeal#9359.')
			.setTimestamp()
			.setFooter('MACH');


		
let userApplications = {}
client.on("message", function(message) {
	if (message.author.equals(client.user)) return;
  
	let authorId = message.author.id;
  
	if (message.content === ".prog_apply") {
		console.log(`Apply begin for authorId ${authorId}`);
		// User is not already in a registration process    
		if (!(authorId in userApplications)) {
			userApplications[authorId] = { "step" : 1}
  
			message.author.send(initial);
			message.author.send(q1);
		}
  
	} else {
  
		if (message.channel.type === "dm" && authorId in userApplications) {
			let authorApplication = userApplications[authorId];
  
			if (authorApplication.step == 1 ) {
				authorApplication.answer1 = message.content;
				message.author.send(q2);
				authorApplication.step ++;
			}
			else if (authorApplication.step == 2) {
				authorApplication.answer2 = message.content;
				message.author.send(q3);
				authorApplication.step ++;
			}
			else if (authorApplication.step == 3) {
				authorApplication.answer3 = message.content;
				message.author.send(q4);
				authorApplication.step ++;
			}
  
			else if (authorApplication.step == 4) {
				authorApplication.answer4 = message.content;
				message.author.send(ty);
				//before deleting, you can send the answers to a specific channel by ID
				client.channels.cache.get("778991626814357524")
				  .send(`${message.author.tag}\n${authorApplication.answer1}\n${authorApplication.answer2}\n${authorApplication.answer3}\n${authorApplication.answer4}\n ------------------------------------`);
				delete userApplications[authorId];
			}
		}
	}
  });

client.login(process.env.TOKEN);