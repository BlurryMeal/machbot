module.exports = {
    name: 'unmute',
    description: "This command unmutes a member!",
    execute(message, args){
        const target = message.mentions.users.first();
        if(target){
            if(message.member.roles.cache.has('753553858537717801')){
                let mainRole = message.guild.roles.cache.find(role => role.name === 'Participant');
                let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');

                let memberTarget = message.guild.members.cache.get(target.id);

                memberTarget.roles.remove(muteRole.id);
                message.channel.send(`<@${memberTarget.user.id}> has been Unmuted`);
            }else{
                message.channel.send('You dont have permission to unmute members')
            }
        }else{
            message.channel.send('Cannot find the member!')
        }
    }
}