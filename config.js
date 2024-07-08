
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "Nomi@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://Hamza:3800380ww@cluster0.uwommwq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "923319373288@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "";
global.gurl = process.env.GURL || "";
global.website = process.env.GURL || "";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "false";
global.devs = "923072380380";
global.sudo = process.env.SUDO || "923319373288";
global.owner = process.env.OWNER_NUMBER || "923319373288";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "true",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "false";
global.waPresence = process.env.WAPRESENCE || "";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "false";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://HyHamza.vercel.app";
global.scan = "https://byte-session.vercel.app/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0o0SzBUVDZoRjhjck01cEFoN0Q5VmxnTTQ3V2IzaEQzb2s0dTB0SDdtRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid3VZQ2hjejg5R2VVaHkzM1A3bEhZdGNpUkp4KzBXQ0xEaklEVXV5QmJnOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZUHdDNlJKVzFFYTlVZTdMd0ZBQzBZVDdtcWM0b3lnYThFYk1DcmEyYUZJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2VXcvWEszMlNNei9kOGVmRGozb2E4WXpxWkpnMWFvNFlZSFZxVUU0cEV3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1CNVZ0b0IyeVFkSHB0RnVoSE9NYWpwSENFTXRKaVZXb21BTVM4QUdwWDg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlJ0aHpranpvaDU1b09ZMGF0RkhmLzF0VlRIaW10aTBUOTNQTis3dTU3VWs9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicU1hZ3h6c3R1UGhBZHZqdk5pQUs4bVNJUlNjc1ZLSTMweStQbmRUOVlYST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWGkzM0hQeHZHS2UxWml4di9SdDNZMHZHRlRyTjBmdkRHN1haVFd5TEEzRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImpUMTlpdnB3U1RTc0pVYjdPem9IWERXSS95c2xEeWxVMmtGUVpzd2ZidjNhMWNLTUg4ZjhScWVET2dDYkRGQXFKNStvVE15V01WeFlXQkJ2U2wxQUJ3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTM4LCJhZHZTZWNyZXRLZXkiOiJCTTdScFRvTFVxUUNVK0RGbm1pRFpZWHREVzRqYnpNbE1LNFFrYlJhZXZzPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJwOUl0R3UxVVFVYWt3ZEtHYWJPVmtnIiwicGhvbmVJZCI6ImQ2MGVjYjk2LWYzNjUtNDU2OS04ZDA0LWUwMWRkNmJjNDFiYiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTc3VnZ2NjYVFKcy9IVURJNWdtcGdZMjRyRTQ9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoianhTMXRVeVU0MXA0aWdlSE41R0o2Lyt2d0JrPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjJQUVNENlJNIiwibWUiOnsiaWQiOiI5MjMzMTkzNzMyODg6MzhAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0liU3o0d0ZFTERDcXJRR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InR6eDdESWlmd0VkWW1lZDYvTnNkcERHcGpNazgrVk40LzdxUTdyMzIzQ1U9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlY3MHV4WDA1M2t4Njk2dldQVHRmZEE1WnFwTXg5N3hlSDZhb2x6a3pLRGliSW9KMHoyenhFejA5K1l4UnJyUmlqaXhmUzZNYWs1cDRWYTdrc0VIWkFBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiI2TXByaFBNUy8wZGkyaVdyYWc2OGcwa2dNZmF1UUNPb1U3OE9wbjVHWmRiZTBLajA2aEVkMVRNUTRrbFdXcXp3d1Z2eWN0VnR6bjUzMStBRnJpRlNEQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzMxOTM3MzI4ODozOEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJiYzhld3lJbjhCSFdKbm5ldnpiSGFReHFZekpQUGxUZVArNmtPNjk5dHdsIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIwMzYxMjY2LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUIyNSJ9" //Make sure session id starts with Byte;;;
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "*SAVAGE*",
  author: process.env.PACK_AUTHER || "SAVAGE",
  packname: process.env.PACK_NAME || "SAVAGE",
  botname: process.env.BOT_NAME || "SAVAGE",
  ownername: process.env.OWNER_NAME || "NOMI",
  errorChat: process.env.ERROR_CHAT || "923319373288",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "Savage").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
