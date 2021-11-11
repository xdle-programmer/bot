const {Telegraf} = require('telegraf');
const bot = new Telegraf('2044194503:AAHGV2gHaykbGQIXT2_ThYtcPSyHQR_LMbo'); //сюда помещается токен, который дал botFather

let tokens = {};
let setTokenCommand = 'token';

bot.start((ctx) => ctx.reply('Welcome')); //ответ бота на команду /start
bot.help((ctx) => ctx.reply('Send a Asana token')); //ответ бота на команду /help

bot.command(setTokenCommand, ctx => {
    let reply = 'Thank you! Token has been saved!';

    if (ctx.message.text.split(`/${setTokenCommand} `)[1]) {
        let token = ctx.message.text.split(`/${setTokenCommand} `)[1];
        tokens[ctx.message.chat.id] = token;
    } else {
        reply = 'Please repeat command /token {Asana Token}';
    }

    ctx.reply(reply);
});

bot.on('text', (ctx) => {
    let reply = '';

    if (tokens[ctx.message.chat.id]) {
        reply = `Your token is ${tokens[ctx.message.chat.id]}`;
    } else {
        reply = `You dont save token. Please write command /token {Asana Token}`;
    }

    ctx.reply(reply);
});

bot.launch(); // запуск бота
console.log("bot_start");