const Discord = require('discord.js');
module.exports = {
    name: 'embed',
    description: "this is a embed command!",
    execute(message, args) {
        const exampleEmbed = new Discord.MessageEmbed()
        .setTitle('MACH Event Roles')
        .setColor('#6699EE')
        .setDescription('Here is a list of all the event roles. Each role has been assigned a specific emoji, react to this message with the emoji of the event you want to participate in so that you can receive the role.')
        .addFields(
            {name: '<:webdev:769472273941528587>'+ ' : Web Developement', value:'<@&756417753044221972>', inline:true},
            {name: '<:design:770022122939613184> '+ ' : Design', value:'<@&756418048432275486>', inline:true},
            {name: '<:progamming:769959123156467722> '+ ' : Programming', value:'<@&756222780697215168>', inline:true},
            {name: '<:av:769944589335134239> '+ ' : Audio Visual Editing', value:'<@&757476797221830657>', inline:true},
            {name: '<:photography:768794075838414850> '+ ' : Photography', value:'<@&756417791724224552>', inline:true},
            {name: '<:quiz:769942692293509160> '+ ' : Quiz', value:'<@&757466483247939616>', inline:true},
            {name: '<:gd:769962692597121114>'+ ' : Group Discussion', value:'<@&756417923634954280>', inline:true},
            {name: '<:gaming:768177306794852418> '+ ' : Gaming', value:'<@&756417937048338454>', inline:true}

        )
        .setTimestamp()
        message.channel.send(exampleEmbed);
    }
}