const ms = require('ms');
module.exports = {
    name: 'mute',
    description: "This command mutes a member!",
    execute(message, args){
        const target = message.mentions.users.first();
        if(target){
            if(message.member.roles.cache.has('753553858537717801')){
                let mainRole = message.guild.roles.cache.find(role => role.name === 'Participant');
                let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');

                let memberTarget = message.guild.members.cache.get(target.id);
                
                if(!args[1]){
                    memberTarget.roles.add(muteRole.id);
                    message.channel.send(`<@${memberTarget.user.id}> has been Muted`);
                    return
                }
                memberTarget.roles.add(muteRole.id);
                message.channel.send(`<@${memberTarget.user.id}> has been Muted for ${ms(ms(args[1]))}`);

                setTimeout(function(){
                    memberTarget.roles.remove(muteRole.id);
                }, ms(args[1])); 
                
            }else(
                message.channel.send('You dont have permission to mute members.')
            )
        }else{
            message.channel.send('Cannot find the member!')
        }
    }
}