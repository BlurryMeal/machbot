module.exports = {
    name: 'ban',
    description: "This command ban a member!",
    execute(message, args){
        const target = message.mentions.users.first();
        if(target){
            if(message.member.roles.cache.has('753553858537717801')){
            const memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.ban();
            message.channel.send("User has been banned");
            }else{
                message.channel.send("You cannot ban Members :(")
            }
        }else{
            message.channel.send(`You coudn't ban that member!`);
        }
    }
}