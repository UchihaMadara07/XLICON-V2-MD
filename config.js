import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import fetch from 'node-fetch'
import axios from 'axios'

// Global variables
global.owner = [
  ['918101821810', '★ σвιтσ-кυη ★', true], 
  ['855316492719', '𝗢𝗕𝗜𝗧𝗢-𝗕𝗢𝗧𝗭𝗭', true], 
  ['', '', false],
  ['', '', false]
] 

global.mods = ['918101821810','855316492719', '', '', ''] 
global.prems = ['918101821810', '855316492719', '', '']
global.allowed = ['918101821810', '855316492719', '', '']
global.keysZens = ['c2459db922', '37CC845916', '6fb0eff124']
global.keysxxx = global.keysZens[Math.floor(global.keysZens.length * Math.random())]
global.keysxteammm = ['29d4b59a4aa687ca', '5LTV57azwaid7dXfz5fzJu', 'cb15ed422c71a2fb', '5bd33b276d41d6b4', 'HIRO', 'kurrxd09', 'ebb6251cc00f9c63']
global.keysxteam = global.keysxteammm[Math.floor(global.keysxteammm.length * Math.random())]
global.keysneoxrrr = ['5VC9rvNx', 'cfALv5']
global.keysneoxr = global.keysneoxrrr[Math.floor(global.keysneoxrrr.length * Math.random())]
global.lolkeysapi = ['GataDios']
global.beta = 'mLxstUwm'

global.APIs = {
  xteam: 'https://api.xteam.xyz', 
  dzx: 'https://api.dhamzxploit.my.id',
  lol: 'https://api.lolhuman.xyz',
  violetics: 'https://violetics.pw',
  neoxr: 'https://api.neoxr.my.id',
  zenzapis: 'https://zenzapis.xyz',
  akuari: 'https://api.akuari.my.id',
  akuari2: 'https://apimu.my.id',
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net'
}

global.APIKeys = { 
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://api.lolhuman.xyz': '85faf717d0545d14074659ad',
  'https://api.neoxr.my.id': global.keysneoxr,
  'https://violetics.pw': 'beta',
  'https://zenzapis.xyz': global.keysxxx, 
  'https://api-fgmods.ddns.net': 'fg-dylux'
}

// Sticker WM
global.botname = '𝗢𝗕𝗜𝗧𝗢-𝗕𝗢𝗧𝗭𝗭'
global.premium = 'true'
global.packname = '★ σвιтσ-кυη ★' 
global.author = '🇮🇳🍁' 
global.menuvid = 'https://i.imgur.com/lROEr5r.mp4'
global.igfg = '▢✓ Follow Our channel\nhttps://whatsapp.com/channel/0029Vb2z4fS5vKA90rNV2o28\n' 
global.dygp = 'https://chat.whatsapp.com/KWAadDw545X2Re1F6RjjEz'
global.fgsc = 'https://github.com/obitoxd/OBITO-BOTZZ' 
global.fgyt = 'https://youtube.com/@kamui_edits'
global.fgpyp = 'https://youtube.com/@kamui_edits'
global.fglog = 'XLICON.jpg' 
global.thumb = fs.readFileSync('./XLICON.jpg')

global.wait = '*🕣 _BOT IS LOADING..._*\n*▰▰▰▱▱▱▱▱⭐*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✔️'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '3'

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
