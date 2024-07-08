const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Peshawar,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Peshawar/Khyber Jamrud";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://chat.whatsapp.com/JryJfifwJWNL038eDBX2py";
global.website=process.env.GURL || "https://chat.whatsapp.com/FGk94yPijwx0upuD6ZP8qd" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/c68cf8fda9e777137b5b8.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923140529832";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "true";  // Make it "false" for disable WELCOME 

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
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923140529832,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_33_07_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICA4MSxcbiAgICAgICAgMTksXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxODQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDExLFxuICAgICAgICAyNCxcbiAgICAgICAgNDUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDM0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDg4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxODgsXG4gICAgICAgIDE5MixcbiAgICAgICAgOTksXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDMxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTg4LFxuICAgICAgICA5NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMzMsXG4gICAgICAgIDEwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTEsXG4gICAgICAgIDg3LFxuICAgICAgICAxODEsXG4gICAgICAgIDM3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEzLFxuICAgICAgICA5NyxcbiAgICAgICAgOTksXG4gICAgICAgIDEzNixcbiAgICAgICAgODcsXG4gICAgICAgIDQyLFxuICAgICAgICAyMyxcbiAgICAgICAgMTY2LFxuICAgICAgICAzMyxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE0LFxuICAgICAgICA3MCxcbiAgICAgICAgNTIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNjIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTY3LFxuICAgICAgICA2MyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxODAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTU2LFxuICAgICAgICA0MCxcbiAgICAgICAgOTYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgODAsXG4gICAgICAgIDgzLFxuICAgICAgICAyNyxcbiAgICAgICAgOTgsXG4gICAgICAgIDc2LFxuICAgICAgICA4MSxcbiAgICAgICAgMjgsXG4gICAgICAgIDIxLFxuICAgICAgICA1MixcbiAgICAgICAgMTg3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDgyLFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjU1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDY0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDgwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjUxLFxuICAgICAgICA3MSxcbiAgICAgICAgMTAzLFxuICAgICAgICA2NCxcbiAgICAgICAgODksXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMixcbiAgICAgICAgMjMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNyxcbiAgICAgICAgNixcbiAgICAgICAgNTIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMzksXG4gICAgICAgIDMsXG4gICAgICAgIDIzMixcbiAgICAgICAgNzAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNTksXG4gICAgICAgIDk3LFxuICAgICAgICAyNDksXG4gICAgICAgIDM4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgMTA0LFxuICAgICAgICAxODcsXG4gICAgICAgIDYyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDQsXG4gICAgICAgIDIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNTgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjUzLFxuICAgICAgICA2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNjMsXG4gICAgICAgIDEyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDI2LFxuICAgICAgICAyMSxcbiAgICAgICAgMTY2LFxuICAgICAgICA4MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDEsXG4gICAgICAgIDkxLFxuICAgICAgICAxNCxcbiAgICAgICAgMTIxLFxuICAgICAgICA3OSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDkxLFxuICAgICAgICAxODAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTcwLFxuICAgICAgICA1NyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTY3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDU3LFxuICAgICAgICA2NSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTMwLFxuICAgICAgICAxODAsXG4gICAgICAgIDU3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDUzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDk2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDMzLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDI5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY2LFxuICAgICAgICA3NSxcbiAgICAgICAgMTAyLFxuICAgICAgICA3OSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDU3LFxuICAgICAgICAxODEsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjcsXG4gICAgICAgIDYwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjAwLFxuICAgICAgICA5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDY2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjAyLFxuICAgICAgICA1NCxcbiAgICAgICAgMTY2LFxuICAgICAgICA0MSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyOCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMDksXG4gICAgICAgIDI1MixcbiAgICAgICAgOTYsXG4gICAgICAgIDU1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDU5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDExLFxuICAgICAgICAyMzksXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDgzLFxuICAgICAgICAxNCxcbiAgICAgICAgNSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjE1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDM2LFxuICAgICAgICA3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDgzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDYxLFxuICAgICAgICA5MSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA1NSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJsZTJHanVXMUlZcGVhaTl0ZERnV0pHOFd3ZGNGYUtwME10RWNibHQ0MERjPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJKTEhBQ19MeFJ2Q2w5Z05xWkh5RjVRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjQ1ZGNiMzIxLTAyZWMtNDAyYi05M2QxLWEzNGYxMGE0MTk0MFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjMsXG4gICAgICAzMyxcbiAgICAgIDE5MSxcbiAgICAgIDMzLFxuICAgICAgMTAzLFxuICAgICAgMTg4LFxuICAgICAgMTMxLFxuICAgICAgNzQsXG4gICAgICAyMzcsXG4gICAgICAxNDQsXG4gICAgICAxNzQsXG4gICAgICAxNzYsXG4gICAgICAxODksXG4gICAgICA1OCxcbiAgICAgIDE3MixcbiAgICAgIDE1NCxcbiAgICAgIDU2LFxuICAgICAgMjAzLFxuICAgICAgMTcyLFxuICAgICAgMTc3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDY2LFxuICAgICAgMjM4LFxuICAgICAgMTIsXG4gICAgICAyMDksXG4gICAgICAxNCxcbiAgICAgIDY0LFxuICAgICAgMTUxLFxuICAgICAgODIsXG4gICAgICAxMjEsXG4gICAgICAxMzYsXG4gICAgICAxMTgsXG4gICAgICAxNjcsXG4gICAgICA2MyxcbiAgICAgIDYzLFxuICAgICAgMjEsXG4gICAgICAyMTQsXG4gICAgICAxNzEsXG4gICAgICAxOSxcbiAgICAgIDE1MyxcbiAgICAgIDEyNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJaNU1DQkVGWVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMTQwNTI5ODMyOjMzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMDc1MzY2NzkwNzcwNjozM0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPN1c4Y1FDRU12eHI3UUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIitTdUlPTFY2QW9CbDBldnorTG5IVGJ5RnBaTlIzT01jcG5aamlWTXdyeDg9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwieVNjZlZrMC9rVVR1Y3U3cTlsbFl0WE9ERGVEbFp2ZzFWWGQvaEVaVTVJWW1UWHUrWHFyM3J1WFdwMElNTTJzSFNNbEYzVjVWd0Y1eHRJMHg5R001QkE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiUWQ4Z1dVT2orYm42dFZFbWZXVHhqNnRobWNncGw2NEE0M05yTEkzQi90Y3NoQ1JZcy9yUE9hMytaVFVWNFRpK2xMaW4yYmRjWkF3NG1WcWFTdHhWRFE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMTQwNTI5ODMyOjMzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMzFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDQ0OTIzMSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUxIelwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTEh6Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiZGdJYWVkVmkrcVNIeWpWRzVBdXBtQWhnaHFzM0dZblRUNmtaN1hJOUNoMD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo2ODEzMzk3NTUsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Shayan-AFriDi",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
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
