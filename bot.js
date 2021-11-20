const {Telegraf} = require('telegraf');
const bot = new Telegraf('2044194503:AAHGV2gHaykbGQIXT2_ThYtcPSyHQR_LMbo'); //сюда помещается токен, который дал botFather

const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();


// A `main` function so that you can use async/await
async function main() {
    // Create user, posts, and categories
    const user = await prisma.user.create({
        data: {
            email: Date.now() + '@prisma.io',
            name: 'Ariadne',
            posts: {
                create: [
                    {
                        title: 'My first day at Prisma',
                        categories: {
                            create: {
                                name: 'Office',
                            },
                        },
                    },
                    {
                        title: 'How to connect to a SQLite database',
                        categories: {
                            create: [{name: 'Databases'}, {name: 'Tutorials'}],
                        },
                    },
                ],
            },
        },
    });

    // Return user, and posts, and categories
    const returnUser = await prisma.user.findUnique({
        where: {
            id: user.id,
        },
        include: {
            posts: {
                include: {
                    categories: true,
                },
            },
        },
    });

    console.log(returnUser);
}

main()
    .catch((e) => {
        throw e;
    })
    .finally(async () => {
        await prisma.$disconnect()

        try {

        } catch (e) {
            console.log(e)
        }
    });

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
// //
// bot.start((ctx) => ctx.reply('Welcome')); //ответ бота на команду /start
// bot.help((ctx) => ctx.reply('Ээээээээто ДОКЕР!!!!!!')); //ответ бота на команду /help
// //
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
// bot.launch(); // запуск бота
//
// console.log("bot_start");


const test = require('./test')
console.log(1)
console.log(test)
console.log(2)
