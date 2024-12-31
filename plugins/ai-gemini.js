


const config = require('../config')
const {cmd , commands} = require('../command')
const { fetchJson } = require('../lib/functions')

cmd({
    pattern: "gemini",
    alias: ["hi","lordx"], 
    react: "🧠",
    desc: "ai chat.",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let data = await fetchJson(`https://api.gifted.my.id/api/ai/gpt4?apikey=gifted&q=${q}`)
return reply(`${data.data}`)
}catch(e){
console.log(e)
reply(`${e}`)
}
})

 /* const axios = require('axios');
const config = require('../config');
const { cmd, commands } = require('../command');

cmd({
    pattern: "gemini",
    desc: "💬 Chat with Gemini Pro AI",
    react: "🧠",
    category: "ai",
    filename: __filename
},
async (conn, mek, m, { from, q, reply }) => {
    try {
        if (!q) return reply("❗ Please provide a query. Usage: .ai [your message]");

        const response = await axios.get(`https://kaiz-apis.gleeze.com/api/gemini-pro`, {
            params: {
                q: q,
                uid: "1" // You might want to make this dynamic based on user ID
            }
        });

        const aiReply = `🤖 *Gemini Pro AI*:
${response.data.message}

*ohayo am lord xmd*`;

        return reply(aiReply);
    } catch (e) {
        console.log(e);
        return reply("⚠️ An error occurred while fetching AI response. Please try again later.");
    }
});
*/
