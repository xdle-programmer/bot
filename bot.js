const {Telegraf} = require('telegraf');
const bot = new Telegraf('2044194503:AAHGV2gHaykbGQIXT2_ThYtcPSyHQR_LMbo'); //сюда помещается токен, который дал botFather
// const asana = require('asana-api');

// var client = asana.createClient({
//     oauth: {
//         "accessToken" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JpemF0aW9uIjoxMjAxMzY5ODQ0NTA3NDc5LCJzY29wZSI6ImRlZmF1bHQgaWRlbnRpdHkiLCJzdWIiOjEyMDA5NDg5NzcxMzY5OTQsImlhdCI6MTYzNjg0MDU5MCwiZXhwIjoxNjM2ODQ0MTkwfQ.OmJP1uEmsX_r0fh1tuMPLCgRqmIXhaAcz-zHAJGqCr8",
//         "refreshToken" : "1/1200948977136994:acedad472fbca85c5a36b979f9f86794",
//         "clientId" : "1201363163818181",
//         "clientSecret" : "a77b31ee447c1d11c88d485ec591097d",
//         "redirectUrl" : "urn:ietf:wg:oauth:2.0:oob"
//     }
// });
//
// client.users.list(function (err,users){
//     console.log(users);
//    console.log(err)
// })

// let tokens = {};
// let setTokenCommand = 'token';
//
bot.start((ctx) => ctx.reply('Welcome')); //ответ бота на команду /start
bot.help((ctx) => ctx.reply('Ээээээээто ДОКЕР!!!!!!')); //ответ бота на команду /help
//
// bot.command(setTokenCommand, ctx => {
//     let reply = 'Thank you! Token has been saved!';
//
//     if (ctx.message.text.split(`/${setTokenCommand} `)[1]) {
//         let token = ctx.message.text.split(`/${setTokenCommand} `)[1];
//         tokens[ctx.message.chat.id] = token;
//     } else {
//         reply = 'Please repeat command /token {Asana Token}';
//     }
//
//     ctx.reply(reply);
// });
//
// bot.on('text', (ctx) => {
//     let reply = '';
//
//     if (tokens[ctx.message.chat.id]) {
//         reply = `Your token is ${tokens[ctx.message.chat.id]}`;
//     } else {
//         reply = `You dont save token. Please write command /token {Asana Token}`;
//     }
//
//     ctx.reply(reply);
// });
//
 bot.launch(); // запуск бота
//
 console.log("bot_start");