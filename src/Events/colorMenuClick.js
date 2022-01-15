const Discord = require("discord.js");

module.exports = async (menu) => {      
  menu.reply.think(true);

    if (menu.values[0] === 'renktemizle') {
        await menu.clicker.member.roles.remove(conf.roles.kirmizi)
        await menu.clicker.member.roles.remove(conf.roles.sari)
        await menu.clicker.member.roles.remove(conf.roles.mavi)
        await menu.clicker.member.roles.remove(conf.roles.mor)
        await menu.clicker.member.roles.remove(conf.roles.pembe)
        menu.reply.edit("Üzerinizdeki renk rolü başarıyla alındı :tada:")
}
    if (menu.values[0] === 'pembe') {
      if(!menu.clicker.member.roles.cache.has(conf.roles.pembe)) {
        await menu.clicker.member.roles.add(conf.roles.pembe)
        await menu.clicker.member.roles.remove(conf.roles.kirmizi)
        await menu.clicker.member.roles.remove(conf.roles.mavi)
        await menu.clicker.member.roles.remove(conf.roles.sari)
        await menu.clicker.member.roles.remove(conf.roles.mor)
        menu.reply.edit(":tada: Başarıyla <@&"+conf.roles.pembe+"> rolü üzerinize verildi.")
      } else {
        await menu.clicker.member.roles.remove(conf.roles.kirmizi)
        await menu.clicker.member.roles.remove(conf.roles.sari)
        await menu.clicker.member.roles.remove(conf.roles.mavi)
        await menu.clicker.member.roles.remove(conf.roles.mor)
        await menu.clicker.member.roles.remove(conf.roles.pembe)
        menu.reply.edit(":tada: Başarıyla <@&"+conf.roles.pembe+"> rolü üzerinizden alındı.")
      }
}
    if (menu.values[0] === 'mor') {
      if(!menu.clicker.member.roles.cache.has(conf.roles.mor)) {
        await menu.clicker.member.roles.add(conf.roles.mor)
        await menu.clicker.member.roles.remove(conf.roles.kirmizi)
        await menu.clicker.member.roles.remove(conf.roles.mavi)
        await menu.clicker.member.roles.remove(conf.roles.sari)
        await menu.clicker.member.roles.remove(conf.roles.pembe)
        menu.reply.edit(":tada: Başarıyla <@&"+conf.roles.mor+"> rolü üzerinize verildi.")
      } else {
        await menu.clicker.member.roles.remove(conf.roles.kirmizi)
        await menu.clicker.member.roles.remove(conf.roles.sari)
        await menu.clicker.member.roles.remove(conf.roles.mavi)
        await menu.clicker.member.roles.remove(conf.roles.mor)
        await menu.clicker.member.roles.remove(conf.roles.pembe)
        menu.reply.edit(":tada: Başarıyla <@&"+conf.roles.mor+"> rolü üzerinizden alındı.")
      }
}
if (menu.values[0] === 'sari') {
  if(!menu.clicker.member.roles.cache.has(conf.roles.sari)) {
    await menu.clicker.member.roles.add(conf.roles.sari)
    await menu.clicker.member.roles.remove(conf.roles.kirmizi)
    await menu.clicker.member.roles.remove(conf.roles.mavi)
    await menu.clicker.member.roles.remove(conf.roles.mor)
    await menu.clicker.member.roles.remove(conf.roles.pembe)
    menu.reply.edit(":tada: Başarıyla <@&"+conf.roles.sari+"> rolü üzerinize verildi.")
  } else {
    await menu.clicker.member.roles.remove(conf.roles.kirmizi)
    await menu.clicker.member.roles.remove(conf.roles.sari)
    await menu.clicker.member.roles.remove(conf.roles.mavi)
    await menu.clicker.member.roles.remove(conf.roles.mor)
    await menu.clicker.member.roles.remove(conf.roles.pembe)
    menu.reply.edit(":tada: Başarıyla <@&"+conf.roles.sari+"> rolü üzerinizden alındı.")
  }
}
    if (menu.values[0] === 'mavi') {
      if(!menu.clicker.member.roles.cache.has(conf.roles.mavi)) {
        await menu.clicker.member.roles.add(conf.roles.mavi)
        await menu.clicker.member.roles.remove(conf.roles.kirmizi)
        await menu.clicker.member.roles.remove(conf.roles.sari)
        await menu.clicker.member.roles.remove(conf.roles.mor)
        await menu.clicker.member.roles.remove(conf.roles.pembe)
        menu.reply.edit(":tada: Başarıyla <@&"+conf.roles.mavi+"> rolü üzerinize verildi.")
      } else {
        await menu.clicker.member.roles.remove(conf.roles.kirmizi)
        await menu.clicker.member.roles.remove(conf.roles.sari)
        await menu.clicker.member.roles.remove(conf.roles.mavi)
        await menu.clicker.member.roles.remove(conf.roles.mor)
        await menu.clicker.member.roles.remove(conf.roles.pembe)
        menu.reply.edit(":tada: Başarıyla <@&"+conf.roles.mavi+"> rolü üzerinizden alındı.")
      }
}

    if (menu.values[0] === 'kirmizi') {
      if(!menu.clicker.member.roles.cache.has(conf.roles.kirmizi)) {
        await menu.clicker.member.roles.add(conf.roles.kirmizi)
        await menu.clicker.member.roles.remove(conf.roles.sari)
        await menu.clicker.member.roles.remove(conf.roles.mavi)
        await menu.clicker.member.roles.remove(conf.roles.mor)
        await menu.clicker.member.roles.remove(conf.roles.pembe)
        menu.reply.edit(":tada: Başarıyla <@&"+conf.roles.kirmizi+"> rolü başarıyla verildi.")
      } else {
        await menu.clicker.member.roles.remove(conf.roles.kirmizi)
        await menu.clicker.member.roles.remove(conf.roles.sari)
        await menu.clicker.member.roles.remove(conf.roles.mavi)
        await menu.clicker.member.roles.remove(conf.roles.mor)
        await menu.clicker.member.roles.remove(conf.roles.pembe)
        menu.reply.edit(":tada: Başarıyla <@&"+conf.roles.kirmizi+"> rolü üzerinizden alındı.")
      }
}
   }; 
module.exports.config = {
    name: "clickMenu"
  }