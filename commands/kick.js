module.exports = {
    name: 'kick',
    description: 'kick dumb people!',
    execute(message, args) {
        const member = message.mentions.users.first();
        if(member){
            if(message.member.roles.cache.has('753553858537717801')){
            const memberTarger = message.guild.members.cache.get(member.id);
            memberTarger.kick();
            message.channel.send("User has been kicked");
            }else{
                message.channel.send("You cannot kick members :(")
            }
        }else{
            message.channel.send("You couldn't kick that member :(")
        }
    }
}