module.exports = {
    name: 'clear',
    description: 'clear messages!',
    async execute(message, args) {
        if(message.member.roles.cache.has('753553858537717801')){
            if(!args[0]) return message.reply("bro how are you so dumb! add a number :|");
            if(isNaN(args[0])) return message.reply("damn, we dont have a shortage of dumb people... add a real number!");

            if(args[0] > 100) return message.reply('i might look powerful but i can only delete 100 messages at a time');
            if(args[0] < 1) return message.reply('i have come to a realisation that humans are dumb, how the heck will i clear less than 1 message!');

            await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
                message.channel.bulkDelete(messages);
        })
            
        } else {
            message.channel.send('HAHA You dont have perms for this command. :)')
        }
        

         
    }
}