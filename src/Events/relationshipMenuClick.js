const Discord = require("discord.js");

module.exports = async (menu) => {      
  menu.reply.think(true);

    if (menu.values[0] === 'iliskitemizle') {
        await menu.clicker.member.roles.remove(conf.roles.lgbt)
        await menu.clicker.member.roles.remove(conf.roles.sevgilimyok)
        await menu.clicker.member.roles.remove(conf.roles.sevgilimvar)
        menu.reply.edit(":tada: Başarıyla üzerinizdeki ilişki rolü alındı")
}
if (menu.values[0] === 'lgbt') {
  if(!menu.clicker.member.roles.cache.has(conf.roles.lgbt)) {
    await menu.clicker.member.roles.add(conf.roles.lgbt)
    await menu.clicker.member.roles.remove(conf.roles.sevgilimyok)
    await menu.clicker.member.roles.remove(conf.roles.sevgilimvar)
    menu.reply.edit(":tada: Başarıyla <@&"+conf.roles.lgbt+"> rolü üzerinize verildi.")
  } else {
    await menu.clicker.member.roles.remove(conf.roles.sevgilimyok)
    await menu.clicker.member.roles.remove(conf.roles.sevgilimvar)
    await menu.clicker.member.roles.remove(conf.roles.lgbt)
    menu.reply.edit(":tada: Başarıyla <@&"+conf.roles.lgbt+"> rolü üzerinizden alındı.")
  }
}
if (menu.values[0] === 'alone') {
  if(!menu.clicker.member.roles.cache.has(conf.roles.sevgilimyok)) {
    await menu.clicker.member.roles.add(conf.roles.sevgilimyok)
    await menu.clicker.member.roles.remove(conf.roles.lgbt)
    await menu.clicker.member.roles.remove(conf.roles.sevgilimvar)
    menu.reply.edit(":tada: Başarıyla <@&"+conf.roles.lgbt+"> rolü üzerinize verildi.")
  } else {
    await menu.clicker.member.roles.remove(conf.roles.sevgilimyok)
    await menu.clicker.member.roles.remove(conf.roles.sevgilimvar)
    await menu.clicker.member.roles.remove(conf.roles.lgbt)
    menu.reply.edit(":tada: Başarıyla <@&"+conf.roles.sevgilimyok+"> rolü üzerinizden alındı.")
  }
}
if (menu.values[0] === 'couple') {
  if(!menu.clicker.member.roles.cache.has(conf.roles.sevgilimvar)) {
    await menu.clicker.member.roles.add(conf.roles.sevgilimvar)
    await menu.clicker.member.roles.remove(conf.roles.lgbt)
    await menu.clicker.member.roles.remove(conf.roles.sevgilimyok)
    menu.reply.edit(":tada: Başarıyla <@&"+conf.roles.sevgilimvar+"> rolü üzerinize verildi.")
  } else {
    await menu.clicker.member.roles.remove(conf.roles.sevgilimyok)
    await menu.clicker.member.roles.remove(conf.roles.sevgilimvar)
    await menu.clicker.member.roles.remove(conf.roles.lgbt)
    menu.reply.edit(":tada: Başarıyla <@&"+conf.roles.sevgilimvar+"> rolü üzerinizden alındı.")
  }
}
   }; 
module.exports.config = {
    name: "clickMenu"
  }
