

const config = require('../config')
const { cmd, commands } = require('../command')
cmd({
    pattern: "opentime",
    react: "🔖",
    desc: "To open group to a time",
    category: "group",
    use: '.opentime',
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{   
if (!isGroup) return reply(ONLGROUP)
if (!isAdmins) return reply(ADMIN)	
  if (args[1] == 'second') {
                    var timer = args[0] * `1000`
                } else if (args[1] == 'minute') {
                    var timer = args[0] * `60000`
                } else if (args[1] == 'hour') {
                    var timer = args[0] * `3600000`
                } else if (args[1] == 'day') {
                    var timer = args[0] * `86400000`
                } else {
                    return reply('*select:*\nsecond\nminute\nhour\n\n*example*\n10 second')
                }
                reply(`Open time ${q} starting from now`)
                setTimeout(() => {
                    var nomor = mek.participant
                    const open = `*𝙾𝙿𝙴𝙽 𝚃𝙸𝙼𝙴* 𝚃𝙷𝙴 𝙶𝚁𝙾𝚄𝙿 𝚆𝙰𝚂 𝙾𝙿𝙴𝙽𝙴𝙳 𝙱𝚈 🅻🅾🆁🅳 🆇🅼🅳 𝚃𝙾 𝙰𝙿𝙿𝚁𝙾𝚅𝙴𝙳 𝙰𝙳𝙼𝙸𝙽\n 𝙽𝙾𝚆 𝙼𝙴𝙼𝙱𝙴𝚁𝚂 𝙲𝙰𝙽 𝚂𝙴𝙽𝙳 𝙼𝙴𝚂𝚂𝙰𝙶𝙴𝚂 🔓`
                    conn.groupSettingUpdate(from, 'not_announcement')
                    reply(open)
                }, timer)
await conn.sendMessage(from, { react: { text: `✅`, key: mek.key }}) 
} catch (e) {
reply('*Error !!*')
l(e)
}
})
cmd({
    pattern: "closetime",
    react: "🔖",
    desc: "To close group to a time",
    category: "group",
    use: '.closstime',
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{   
if (!isGroup) return reply(ONLGROUP)
if (!isAdmins) return reply(ADMIN)	
                if (args[1] == 'second') {
                    var timer = args[0] * `1000`
                } else if (args[1] == 'minute') {
                    var timer = args[0] * `60000`
                } else if (args[1] == 'hour') {
                    var timer = args[0] * `3600000`
                } else if (args[1] == 'day') {
                    var timer = args[0] * `86400000`
                } else {
                    return reply('*select:*\nsecond\nminute\nhour\n\n*Example*\n10 second')
                }
                reply(`Close time ${q} starting from now`)
                setTimeout(() => {
                    var nomor = m.participant
                    const close = `*𝙲𝙻𝙾𝚂𝙴 𝚃𝙸𝙼𝙴* 𝙶𝚁𝙾𝚄𝙿 𝙲𝙻𝙾𝚂𝙴𝙳 𝙱𝚈 𝙻𝙾𝚁𝙳 𝚇𝙼𝙳 𝙰𝚃 𝙰𝙿𝙿𝚁𝙾𝚅𝙴𝙳 𝙰𝙳𝙼𝙸𝙽\n𝙽𝙾𝚆 𝙾𝙽𝙻𝚈 𝙰𝙳𝙼𝙸𝙽 𝙲𝙰𝙽 𝚂𝙴𝙽𝙳 𝙼𝙴𝚂𝚂𝙰𝙶𝙴𝚂 🔐`
                    conn.groupSettingUpdate(from, 'announcement')
                    reply(close)
                }, timer)
await conn.sendMessage(from, { react: { text: `✅`, key: mek.key }}) 
} catch (e) {
reply('*Error !!*')
l(e)
}
})
//==================================================================tagadmin=============================================
cmd({
    pattern: "tagadmin",
    alais:["tagadmins"],
    react: "🙀",
    desc: "Tags all the admins in the group.",
    category: "group",
    filename: __filename,
},           
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
        // Check if the command is used in a group
        if (!isGroup) return reply(`This command is only for groups.`);
        if (!isAdmins) return reply(`This command is only for group admin.`);
        
        // Fetch all group admins
        const admins = groupAdmins;
        if (admins.length === 0) {
            return reply('There are no admins in this group.');
        }
        // Create a message with all admin tags
        let adminTagMessage = '*TAGGING ALL ADMINS IN THE GROUP 🔳:*\n\n';
        for (let admin of admins) {
            adminTagMessage += `@${admin.split('@')[0]}\n`;  // Mention each admin by their number
        }
        // Send the message and tag the admins
        await conn.sendMessage(from, { text: adminTagMessage, mentions: admins }, { quoted: mek });
    } catch (e) {
        console.error('Error tagging admins:', e);
        reply('you are not an admin.');
    }
})
