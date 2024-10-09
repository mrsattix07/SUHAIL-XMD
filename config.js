const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VaZd2Vp1noyym7SMa20T";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VaZd2Vp1noyym7SMa20T" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© Mr X" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "923405510035";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923405510035";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923405510035";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923405510035,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_12_43_10_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxMDksXG4gICAgICAgIDIxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDEyLFxuICAgICAgICAyMixcbiAgICAgICAgMjIsXG4gICAgICAgIDE2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDM5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMzAsXG4gICAgICAgIDE0MixcbiAgICAgICAgNDMsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgOTksXG4gICAgICAgIDgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTExLFxuICAgICAgICA2NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4NCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTA2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTcxLFxuICAgICAgICA2MyxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjM5LFxuICAgICAgICAyOSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIxMixcbiAgICAgICAgNDksXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTIxLFxuICAgICAgICA2MCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgOTQsXG4gICAgICAgIDIyLFxuICAgICAgICA1NixcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgNzAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA0MixcbiAgICAgICAgNDEsXG4gICAgICAgIDE1NixcbiAgICAgICAgNDEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTUxLFxuICAgICAgICAxNyxcbiAgICAgICAgMjksXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTEsXG4gICAgICAgIDU1LFxuICAgICAgICA3NixcbiAgICAgICAgMTYwLFxuICAgICAgICA3NCxcbiAgICAgICAgMTA1LFxuICAgICAgICA0OCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxODQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNDksXG4gICAgICAgIDIxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDQsXG4gICAgICAgIDIyLFxuICAgICAgICAxODMsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEwLFxuICAgICAgICA4LFxuICAgICAgICAwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTgsXG4gICAgICAgIDUwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE0LFxuICAgICAgICA5MSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTAwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTUsXG4gICAgICAgIDMzLFxuICAgICAgICAzOSxcbiAgICAgICAgMTkyLFxuICAgICAgICA3OCxcbiAgICAgICAgMThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgODUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDUzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTMsXG4gICAgICAgIDkxLFxuICAgICAgICA1NyxcbiAgICAgICAgMTAwLFxuICAgICAgICA1OCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDYwLFxuICAgICAgICA0NixcbiAgICAgICAgMTI4LFxuICAgICAgICAxLFxuICAgICAgICAzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgOTQsXG4gICAgICAgIDU4LFxuICAgICAgICAxMyxcbiAgICAgICAgNDYsXG4gICAgICAgIDEwMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMzMsXG4gICAgICAgIDczLFxuICAgICAgICAxOTYsXG4gICAgICAgIDczLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDM5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDI0LFxuICAgICAgICA4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyLFxuICAgICAgICA5NSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMzksXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDc3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjExLFxuICAgICAgICA3OCxcbiAgICAgICAgODJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMDZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNDdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDksXG4gICAgICAgIDY1LFxuICAgICAgICA0OCxcbiAgICAgICAgOTksXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA4MSxcbiAgICAgICAgNCxcbiAgICAgICAgMTYxLFxuICAgICAgICAzMixcbiAgICAgICAgNzIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNDgsXG4gICAgICAgIDEzMixcbiAgICAgICAgMzcsXG4gICAgICAgIDU5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTMzLFxuICAgICAgICAzOSxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTk1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDQ5LFxuICAgICAgICA2NCxcbiAgICAgICAgMjMsXG4gICAgICAgIDgxLFxuICAgICAgICA3MCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxODUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTU0LFxuICAgICAgICA5NCxcbiAgICAgICAgMTM5LFxuICAgICAgICA2NyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDExMCxcbiAgICAgICAgODAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNzMsXG4gICAgICAgIDgzLFxuICAgICAgICA3MixcbiAgICAgICAgMjExLFxuICAgICAgICAyNCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxODgsXG4gICAgICAgIDQsXG4gICAgICAgIDI4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNCxcbiAgICAgICAgMTU1LFxuICAgICAgICA1MixcbiAgICAgICAgMjIyLFxuICAgICAgICAyMjksXG4gICAgICAgIDE3NixcbiAgICAgICAgMTc1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTMyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNTUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiM3ZnVVFDN1ArMTB3TEROSDArOUdBNk1jRUE0MEJnbG0xTlUrMjR2VXQ1VT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwic3BnOGVtTkZRcC1pVDVNZ09aS0ttUVwiLFxuICBcInBob25lSWRcIjogXCI5MzgxYzgyYi0wOWM4LTRmNTUtYTUyNy1iOGU5YWFhYzIwYzhcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTIyLFxuICAgICAgMjYsXG4gICAgICA5OCxcbiAgICAgIDEzMixcbiAgICAgIDE5NyxcbiAgICAgIDIyNCxcbiAgICAgIDg3LFxuICAgICAgMjUyLFxuICAgICAgNzcsXG4gICAgICA5NSxcbiAgICAgIDU3LFxuICAgICAgMjA0LFxuICAgICAgMTc3LFxuICAgICAgMTIxLFxuICAgICAgNDAsXG4gICAgICAxOTUsXG4gICAgICAxNTQsXG4gICAgICAyNTMsXG4gICAgICAxNTksXG4gICAgICA4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0MSxcbiAgICAgIDk5LFxuICAgICAgMzIsXG4gICAgICAxNDcsXG4gICAgICAxMjksXG4gICAgICAzMSxcbiAgICAgIDIwMCxcbiAgICAgIDE2MSxcbiAgICAgIDExMyxcbiAgICAgIDE2NCxcbiAgICAgIDEyNSxcbiAgICAgIDgyLFxuICAgICAgOTgsXG4gICAgICA0OSxcbiAgICAgIDEyMSxcbiAgICAgIDIzNyxcbiAgICAgIDExMyxcbiAgICAgIDE2NyxcbiAgICAgIDkyLFxuICAgICAgMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJaSzdFSjNBVFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzNDA1NTEwMDM1OjgzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIzMDQwODQzNTU3NjkzNTo4M0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKcUh2dHdIRU4vMG1iZ0dHQVVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImNzWlJSYmNVUHZhZjdEM1RCZ1NKd0l5SEZwaG5rb013MmZFeHVVNDJ2d1k9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiamhxU04rU0NUWDZWL3MxL093d2x4N3BkakNVNGFZbVNvSjQrZStrUTZ5dUdCL2Y0V3pMUXY4M3BFQzVzQ1N2SHFlK2RXd1d2d0MxbXJ1UEYzaSttQ3c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiVndXQjB4alN6cDVvTlArQW01ZlJjQXNjcWVtbjQwR3BuTEQ1anBYUmV0aGxhSW5UNVRzSTROSTJpRDJSQXZwWDlWa0RzUDFrMXk0cEpsQ09KSlZUaVE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzNDA1NTEwMDM1OjgzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3Mjg0Nzc3OTUsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUU4QUFHTTBcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BRThBQUdNMC5qc29uIjogIntcImtleURhdGFcIjpcIitDYzFCY2MzU0VNSkx6cnUvS1RoZ3lSbmROTHlsNWxJMEQ2MWJIY1FYSm89XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjA3MzAwMjkwNixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsNzldfSxcInRpbWVzdGFtcFwiOlwiMTcyNzY5NTcwMzE0MVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ",",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Mr-XMD",
  ownername:process.env.OWNER_NAME|| "Mr-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
