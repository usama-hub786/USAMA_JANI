




const config = require('../config')
const {cmd , commands} = require('../command')
cmd({

    pattern: "menu3",

    react: "🐊",

    alias: ["panel","list","commands"],

    desc: "Get bot\'s command list.",

    category: "main",

    use: '.menu3',

    filename: __filename

},

async(conn, mek, m,{from, l, quoted, body, isCmd, umarmd, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {

try{
let madeMenu = `❁ ════ ❃•◯•❃ ════ ❁

*⇆ ʜɪɪ ᴍʏ ᴅᴇᴀʀ ғʀɪᴇɴᴅ ⇆*

     *${pushname}*
     
❁ ════ ❃•◯•❃ ════ ❁

┏━━━━━━━━━━━━━━━━━━━━━━━━━━
      *ᴡᴇʟᴄᴏᴍᴇ ᴛᴏ ᴀʟɪ-ᴍᴅ-ᴠ1 ғᴜʟʟ ᴄᴏᴍᴍᴀɴᴅ ʟɪsᴛ*
┗━━━━━━━━━━━━━━━━━━━━━━━━━━

*ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴀʟɪ👨🏻‍💻*


*╭──❮ DOWNLOAD COMMANDS ❯*
│
│📖 COMMAND: .play
│ℹ️ Download Audio from yt
│ 
│📖 COMMAND: .song
│ℹ️ Download song from yt
│ 
│📖 COMMAND: .apk
│ℹ️ Download apk from playstore
│ 
│📖 COMMAND: .video
│ℹ️ Download video from yt
│ 
│📖 COMMAND: .fb
│ℹ️ Download  video from fb
│ 
│📖 COMMAND: .tk
│ℹ️ Download video from tiktok
│ 
│📖 COMMAND: .ig
│ℹ️ Download video from ig
│ 
│📖 COMMAND: .gdrive
│ℹ️ Download drive files
│ 
│📖 COMMAND: .wamod
│ℹ️ Download wamod apk
│
│📖 COMMAND: .img
│ℹ️ Download image
│
│📖 COMMAND: .darama
│ℹ️ Download full episode video
╰────────────⦁ 

*╭──❮ SEARCH COMMANDS ❯*
│
│📖 COMMAND: .yts
│ℹ️ Serch videos from yt
╰────────────⦁  

*╭──❮‍ MAIN COMMANDS ❯*
│
│📖 COMMAND: .alive
│ℹ️ Check online or not
│  
│📖 COMMAND: .ping
│ℹ️ Check bot speed
│  
│📖 COMMAND: .menu
│ℹ️ Nero main menu
│
│📖 COMMAND: .menu2
│ℹ️ Nero main menu2
│ 
│📖 COMMAND: .ai
│ℹ️ chat with ai bot
│
│📖 COMMAND: .system
│ℹ️ check bot systems
│
│📖 COMMAND: .owner
│ℹ️ get owner info
│ 
│📖 COMMAND: .status
│ℹ️ check bot runtime
╰────────────⦁

*╭──❮ OTHER COMMANDS ❯*
│
│📖 COMMAND: .hirunews/news
│ℹ️ Get news result for life
│ 
│📖 COMMAND: .wabeta
│ℹ️ Get whatsapp beta news
│
│📖 COMMAND: .sitech
│ℹ️ Get tech news
│ 
│📖 COMMAND: .nasa
│ℹ️ Get nasa news
╰────────────⦁

*╭──❮ GROUP COMMANDS ❯*
│
│📖 COMMAND: .mute
│ℹ️ Mute group
│
│📖 COMMAND: .unmute
│ℹ️ Unmute group
│
│📖 COMMAND: .left
│ℹ️ left group
│
│📖 COMMAND: .jid
│ℹ️ group jid
╰────────────⦁

*╭──❮ OWNER COMMANDS ❯*
│
│📖 COMMAND: .update
│ℹ️ update bot velue 
│
│📖 COMMAND: .restart 
│ℹ️ restart your bot
╰────────────⦁

*╭──❮ CONVERT COMMANDS ❯*
│
│📖 COMMAND: .sticker
│ℹ️ convert photo to sticker
╰────────────⦁


> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴀʟɪ🐍*

╰━❁ ═══ ❃•⇆•❃ ═══ ❁━╯`

await conn.sendMessage(from,{image:{url: config.ALIVE_IMG},caption:madeMenu,
                             contextInfo: {
    mentionedJid: [m.sender],
    forwardingScore: 999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363318387454868@newsletter',
      newsletterName: '☇ 𝐀ɭι̇ι̇ 𝐌Ɗ  ⃪🤖͎᪳᪳𝆺𝅥',
      serverMessageId: 999
    }
  }
}, { quoted: mek });
} catch (e) {
console.log(e)
reply(`${e}`)
}
})
