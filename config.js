const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347040564274";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_22_07_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgOTEsXG4gICAgICAgIDU5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDYzLFxuICAgICAgICAxODEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTgwLFxuICAgICAgICA4NCxcbiAgICAgICAgNTIsXG4gICAgICAgIDE4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgODMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTg2LFxuICAgICAgICA1MixcbiAgICAgICAgNzEsXG4gICAgICAgIDczLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNTUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDExOSxcbiAgICAgICAgNjIsXG4gICAgICAgIDgyLFxuICAgICAgICA5NSxcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgOTMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgOTMsXG4gICAgICAgIDg0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIxMixcbiAgICAgICAgNTAsXG4gICAgICAgIDcyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNCxcbiAgICAgICAgMTk1LFxuICAgICAgICA5OSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDExMSxcbiAgICAgICAgNSxcbiAgICAgICAgMTYzLFxuICAgICAgICA5MixcbiAgICAgICAgMjA2LFxuICAgICAgICAxMixcbiAgICAgICAgMThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICAxNDksXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDAsXG4gICAgICAgIDY2LFxuICAgICAgICA2NixcbiAgICAgICAgODYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNDcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDAsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTgzLFxuICAgICAgICA3LFxuICAgICAgICA2OSxcbiAgICAgICAgOTMsXG4gICAgICAgIDIxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNzQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgOTMsXG4gICAgICAgIDU2LFxuICAgICAgICA5OCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMSxcbiAgICAgICAgMTc3LFxuICAgICAgICAzNSxcbiAgICAgICAgMjA1LFxuICAgICAgICAzMixcbiAgICAgICAgNjMsXG4gICAgICAgIDgxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDI2LFxuICAgICAgICA4MCxcbiAgICAgICAgMyxcbiAgICAgICAgMjIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDg1LFxuICAgICAgICAyMyxcbiAgICAgICAgMTU5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDk4LFxuICAgICAgICA1MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDgxLFxuICAgICAgICAxODIsXG4gICAgICAgIDgsXG4gICAgICAgIDIzLFxuICAgICAgICAxODAsXG4gICAgICAgIDExLFxuICAgICAgICAwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNCxcbiAgICAgICAgNDcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMDksXG4gICAgICAgIDYyLFxuICAgICAgICA3NyxcbiAgICAgICAgMjE2LFxuICAgICAgICA5OCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjUyLFxuICAgICAgICA0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDQwLFxuICAgICAgICA2MSxcbiAgICAgICAgODgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjYsXG4gICAgICAgIDg3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUwLFxuICAgICAgICA3OSxcbiAgICAgICAgMTQxLFxuICAgICAgICA2MSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgOTQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDM3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNjksXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjAzLFxuICAgICAgICA4NSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTE0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA2NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgODEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNjAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTk5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTc4LFxuICAgICAgICA5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxOCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDc2LFxuICAgICAgICAzNCxcbiAgICAgICAgMzcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNDksXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTY1LFxuICAgICAgICAzOCxcbiAgICAgICAgODMsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTkyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNzUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgODksXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDc3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDYwLFxuICAgICAgICAzNCxcbiAgICAgICAgMjQsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTMzLFxuICAgICAgICAyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA3OSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ5UjBGbGQ1OW5zdVFxYU1VSDJZejVMSTJZWUVIOThxQXVqZ2ZOd21VNi93PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDcwNDA1NjQyNzRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkRFMkYwNzJENDY0MEY0OUNFQ0Y3RTE2OUNDMTMxQTkwXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTY1ODE0M1xuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJxbDQwQmVZelR1U2ZoNFhMM1F5RUJnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjMzYTJjN2NjLTM3MjUtNGJmMS1iYzcxLWJjMzRkNWYwN2M1OVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjQsXG4gICAgICA5MixcbiAgICAgIDE4OSxcbiAgICAgIDE1MyxcbiAgICAgIDIzMCxcbiAgICAgIDExLFxuICAgICAgMTcwLFxuICAgICAgMTk2LFxuICAgICAgMTQ1LFxuICAgICAgMCxcbiAgICAgIDUwLFxuICAgICAgMTUwLFxuICAgICAgMjEsXG4gICAgICAyNDIsXG4gICAgICAxNjIsXG4gICAgICAyMTIsXG4gICAgICAxNTMsXG4gICAgICAyNDAsXG4gICAgICA1NSxcbiAgICAgIDE4OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0MixcbiAgICAgIDIyLFxuICAgICAgMCxcbiAgICAgIDE5MCxcbiAgICAgIDkyLFxuICAgICAgMjQxLFxuICAgICAgMTM4LFxuICAgICAgMjE1LFxuICAgICAgMzcsXG4gICAgICAyMzAsXG4gICAgICAyMTksXG4gICAgICAxNyxcbiAgICAgIDkwLFxuICAgICAgMTgwLFxuICAgICAgMTE3LFxuICAgICAgNzYsXG4gICAgICA1NixcbiAgICAgIDIyLFxuICAgICAgNDksXG4gICAgICAxMzVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiN0FMWDZNVktcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwNDA1NjQyNzQ6OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIlRoZSBCZXphbGVlbCBDcmVhdGl2ZVwiLFxuICAgIFwibGlkXCI6IFwiNTM2MzEyNTY2NDE1Mzk6OEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMU0dvQXNRbHRiNXRBWVlBU0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlpjYjMzTThNdWN3a2dkZGttSHIzRHdic1EvQkkwQk40M2NqMWVlU2svMWc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiYzQ4MkJCWjRzVlJKeUFDcnY2eW4vUklaUzdOM1FkcDZHN3M5QjFRamdhY2FzTCt6bzl6WGtuSWhTUXE3VVpobnhGY1B5L0tkTWloK3U4TEl1Ym91QVE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwicUpQYSt0NitFbWVLNmhYQlhYclppTS9XTWtibWxPWksvZGpoSkU5Znc5V2M5WGFyUnZlQzFrOFBNVUZXRi81eGVmZXFKNHhRTG1zbjAxQStkNW9NREE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzA0MDU2NDI3NDo4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA4OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxNjU4MTM4XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
