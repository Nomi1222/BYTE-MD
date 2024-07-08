
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = " bunergmail.com";
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
  "Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0FFVTdwYmhWK0wxZTZjQnl5bDRkZjBFN3lpOEtnb1JYUjR2NENheTdWbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTVBCYS83anpSU0RoU3AzVHVNYlRadDFPUjRjUzZDREtKMFM3UkloVW9Ebz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLSW4wVGlXM0h4MG5sR3RaNC8rYTlRclJFcXc4QWFId1pnZGRCajhRcm5FPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJWS25ZYmFGSkU4RGFZRnJmVTdFdFNQMzRTdlBmdktkcWk3S2RXYU13YlRFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNFV3JDWmpQZS9tVGgzaVpGV29TQ29BUnFQcEltditsUXJCSWNRRnA4a0k9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjlWc0ZNWWVYOGdZa00xK3drcldQOWtoV0ZzbEM4UzF0THgxdnByTjFid2c9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUdHbnBOSXNCaitDMk45dEpQTy9ZQTJWa1BTUXMzRWNGU050eTNsKzRrYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTzVIOVpaN2lKeDJjTEtjZnhLYVpVS21TRGFGR1dhdi9HV2hFL0ZmVnZGZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlJLSTVKMFg5NXM2WFB1VkliVXBWTzFhd0pveGlyU0hFUEtpMUxJOGgwZEhJK1hUbjZaZzUrSmhrU2dLOXBpOCtIRUZNT0g5RDEzVnVZVEJZL3ZtOGh3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTg4LCJhZHZTZWNyZXRLZXkiOiJaT0U2dEpqeUYwV2tLNFU4dkpkYTZib3RQWXRvd1BzN0lZM1NmVnk3bUJnPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJsS3Z6NW9ETlNlcVhZcmo2b2NCbU5BIiwicGhvbmVJZCI6ImQzMzcwNTcxLTFmOGUtNGRmMC04NDFlLWE2NWYyYTkxYjJlNSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJISGFZdkJiSU0vcTU4VkRkTW5waVVQaWJEOXc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMXM5dGxZbGVEbStPUWxyUGYvZTkwQllaTEZNPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjU2VENDR0pSIiwibWUiOnsiaWQiOiI5MjM0OTA2MDI1OTg6MTBAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0tid3dwTUdFSkNscnJRR0dBWWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjF3MW92anBXa0UrWkRvSThKYTBFOGhWZTVZb3ladlNNUGRZeUYzeFVueUE9IiwiYWNjb3VudFNpZ25hdHVyZSI6InBqdzlvUm5HL0o3U1FXOWlENzE3d0s0U25nU2ZTOEt3Q2VpWWp4NXhEYkJHYXVXUEpKMUV2OTZYMEJHa2Jkd3oxNmtZMG5RemRQQUNlQmdHN1pQRURRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiIvTTRRTFpPa203YWhZM3NlcVcvRm9vMG56V2o4eS9YNGZIKzBVOUJQS2FhZk5GQlJueGJsL1ZkZFd4WDM2UlRQejI0d1QreDFuRi9DWlYrbk9EUnNndz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzQ5MDYwMjU5ODoxMEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJkY05hTDQ2VnBCUG1RNkNQQ1d0QlBJVlh1V0tNbWIwakQzV01oZDhWSjhnIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIwNDIzMDU4LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUcrMyJ9" //Make sure session id starts with Byte;;;
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
