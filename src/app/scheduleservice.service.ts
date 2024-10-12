import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScheduleserviceService {

  schedules = [
    {
      name: "Regional Qualifier",
      date: new Date('2024-09-05'),
      game: "Valorant",
      team: "team A",
      url: "https://wallpapers.com/images/featured/valorant-logo-x0jet8s98hbbfi62.jpg",
      desc: "Saksikan tim esports, bersaing dalam Valorant Regional Qualifier 2024! Setelah serangkaian kemenangan di liga lokal, Team esport kembali dengan formasi terbaru dan strategi yang mematikan. Dikenal karena permainan agresif dan kerjasama tim yang solid, mereka siap mendominasi panggung regional dengan tujuan mengamankan tiket ke turnamen internasional."
    },
    {
      name: "League of Legends Workshop",
      date: new Date('2024-09-10'),
      game: "League of Legends",
      team: "team C",
      url: "https://wallpaperaccess.com/full/2379005.jpg",
      desc: "Dipandu oleh pemain profesional dan pelatih ternama, workshop ini menawarkan kesempatan langka bagi para peserta untuk belajar langsung dari ahli di bidangnya. Anda juga akan mendapatkan insight tentang cara mengoptimalkan komunikasi tim, pengambilan keputusan dalam pertandingan, dan drafting komposisi tim yang efektif."
    },
    {
      name: "Call of Duty Championship",
      date: new Date('2024-10-07'),
      game: "Call of Duty",
      team: "team A",
      url: "https://oyster.ignimgs.com/mediawiki/apis.ign.com/call-of-duty-mw2/e/e5/Modern_Warfare_2_Gameplay.jpg",
      desc: "Bersiaplah untuk menyaksikan pertarungan paling epik di dunia esports dalam Call of Duty Championship 2024! Turnamen bergengsi ini akan mempertemukan tim-tim terbaik dari seluruh dunia yang siap bertempur demi kejayaan dan hadiah terbesar dalam sejarah Call of Duty. Dengan permainan cepat, strategi intens, dan momen-momen yang menegangkan, COD Championship akan menjadi ajang yang tidak boleh dilewatkan bagi penggemar dan pemain profesional."
    },
    {
      name: "Dota 2 Livestream",
      date: new Date('2024-11-11'),
      game: "Dota 2",
      team: "team B",
      url: "https://assets.vg247.com/current/2014/08/dota-2-official.jpg",
      desc: "Bersiaplah untuk mengikuti aksi tanpa henti dalam Dota 2 Livestream: The Road to Glory! Saksikan secara langsung pertandingan-pertandingan epik dari tim-tim profesional di seluruh dunia yang bertarung di medan pertempuran legendaris ini. Dengan strategi yang tajam, outplay yang brilian, dan kerjasama tim yang sempurna, ini adalah kesempatan Anda untuk menyaksikan bagaimana para juara memperebutkan posisi puncak di salah satu game esports terbesar sepanjang masa."
    },
    {
      name: "Fortnite Invitational",
      date: new Date('2024-12-04'),
      game: "Fortnite",
      team: "team A",
      url: "https://tryhardguides.com/wp-content/uploads/2022/12/featured-fortnite-chapter-4-coordinate-codes-1536x864.jpg",
      desc: "Bersiaplah untuk pertempuran terbesar di dunia Battle Royale dalam Fortnite Invitational 2024! Acara eksklusif ini akan mempertemukan para pemain terbaik dari seluruh dunia untuk bertarung dalam kompetisi yang epik dan penuh aksi. Dengan hadiah besar yang diperebutkan, serta kemuliaan sebagai juara, Fortnite Invitational menjadi ajang pertarungan tak terlupakan yang akan menguji strategi, kecepatan, dan kreativitas para pemain."
    }
  ]

  games = [
    {
      name: "Valorant",
      desc: "Valorant adalah permainan video first-person shooter (FPS) yang dikembangkan dan diterbitkan oleh Riot Games, dirilis pada 2 Juni 2020. Game ini memiliki elemen taktis, di mana pemain harus bekerja sama dengan tim untuk menyelesaikan objektif, seperti menanam atau menjinakkan bom (dikenal sebagai 'Spike'), atau menghabisi semua anggota tim lawan.",
      url: "https://wallpapers.com/images/featured/valorant-logo-x0jet8s98hbbfi62.jpg"
    },
    {
      name: "PUBG Mobile",
      desc: "PUBG Mobile (PUBGM) adalah versi mobile dari permainan PlayerUnknown's Battlegrounds (PUBG), yang dikembangkan oleh Tencent Games dan dirilis pada Maret 2018. Game ini termasuk dalam genre battle royale, di mana 100 pemain berhadapan dalam peta besar untuk bertarung hingga hanya tersisa satu pemenang atau satu tim yang bertahan.",
      url: "https://i0.wp.com/gamingonphone.com/wp-content/uploads/2019/08/Tencent-Sees-Share-Rise-after-Games-Accepted-03-PUBG-Mobile-1024x465.jpg"
    },
    {
      name: "Mobile Legends",
      desc: "Mobile Legends: Bang Bang (MLBB) adalah permainan video multiplayer online battle arena (MOBA) yang dikembangkan dan diterbitkan oleh Moonton, dirilis pada tahun 2016. Game ini dirancang khusus untuk platform mobile dan menjadi sangat populer di kalangan pemain di Asia Tenggara dan seluruh dunia.",
      url: "https://ggengine.com/media/uploads/2017/11/mobile-legends-bang-bang.png"
    },
    {
      name: "DOTA II",
      desc: "Dota 2 adalah permainan multiplayer online battle arena (MOBA) yang dikembangkan dan diterbitkan oleh Valve Corporation, dirilis pada tahun 2013. Dota 2 adalah sekuel dari Defense of the Ancients (DotA), sebuah mod dari game Warcraft III: Reign of Chaos dan The Frozen Throne. Permainan ini menjadi salah satu game MOBA paling populer di dunia, terutama di ranah esports, dengan turnamen besar seperti The International yang menawarkan hadiah jutaan dolar.",
      url: "https://assets.vg247.com/current/2014/08/dota-2-official.jpg"
    },
    {
      name: "League of Legends",
      desc: "League of Legends (LoL) adalah permainan multiplayer online battle arena (MOBA) yang dikembangkan dan diterbitkan oleh Riot Games, dirilis pada 27 Oktober 2009. Game ini dengan cepat menjadi salah satu judul esports terbesar di dunia, dengan turnamen besar seperti League of Legends World Championship yang menarik jutaan penonton setiap tahunnya.",
      url: "https://wallpaperaccess.com/full/2379005.jpg"
    },
    {
      name: "Call of Duty",
      desc: "Call of Duty (CoD) adalah seri permainan tembak-menembak orang pertama (first-person shooter) yang dikembangkan oleh beberapa studio di bawah penerbit Activision. Game ini pertama kali dirilis pada 2003, dengan fokus awal pada Perang Dunia II, tetapi kemudian berkembang mencakup berbagai setting, termasuk konflik modern, futuristik, dan bahkan fiksi ilmiah.",
      url: "https://oyster.ignimgs.com/mediawiki/apis.ign.com/call-of-duty-mw2/e/e5/Modern_Warfare_2_Gameplay.jpg"
    },
    {
      name: "Fortnite",
      desc: "Fortnite adalah permainan battle royale yang dikembangkan oleh Epic Games, dirilis pada tahun 2017. Game ini terkenal dengan perpaduan antara tembak-menembak orang ketiga dan mekanik bangunan yang memungkinkan pemain untuk membangun struktur seperti dinding, tangga, dan benteng selama pertempuran.",
      url: "https://tryhardguides.com/wp-content/uploads/2022/12/featured-fortnite-chapter-4-coordinate-codes-1536x864.jpg"
    }
  ]

  achievements = [
    {
      game: "Valorant",
      desc: ["1. Champions of the Regional Valorant Showdown (2023) - Team A",
        "2. Best Defensive Team Award (2024) - Team A",
        "3. MVP of the Season (2023) - Team B"
      ],
      url: "https://wallpapers.com/images/featured/valorant-logo-x0jet8s98hbbfi62.jpg"
    },
    {
      game: "PUBG Mobile",
      desc: ["1. Champions of PUBG Mobile Global Championship (2023) - Team D",
        "2. Best Defensive Team Award (2024) - Team A",
        "3. MVP of the Season (2023) - Team B"
      ],
      url: "https://i0.wp.com/gamingonphone.com/wp-content/uploads/2019/08/Tencent-Sees-Share-Rise-after-Games-Accepted-03-PUBG-Mobile-1024x465.jpg"
    },
    {
      game: "Mobile Legends",
      desc: ["1. Champions of the Regional Valorant Showdown (2023) - Team A",
        "2. Best Defensive Team Award (2024) - Team A",
        "3. MVP of the Season (2023) - Team B"
      ],
      url: "https://ggengine.com/media/uploads/2017/11/mobile-legends-bang-bang.png"
    },
    {
      game: "Dota 2",
      desc: ["1. Champions of the Regional Valorant Showdown (2023) - Team A",
        "2. Best Defensive Team Award (2024) - Team A",
        "3. MVP of the Season (2023) - Team B"
      ],
      url: "https://assets.vg247.com/current/2014/08/dota-2-official.jpg"
    },
    {
      game: "Leauge of Legends",
      desc: ["1. Champions of the Regional Valorant Showdown (2023) - Team A",
        "2. Best Defensive Team Award (2024) - Team A",
        "3. MVP of the Season (2023) - Team B"
      ],
      url: "https://wallpaperaccess.com/full/2379005.jpg"
    },
    {
      game: "Call of Duty",
      desc: ["1. Champions of the Regional Valorant Showdown (2023) - Team A",
        "2. Best Defensive Team Award (2024) - Team A",
        "3. MVP of the Season (2023) - Team B"
      ],
      url: "https://oyster.ignimgs.com/mediawiki/apis.ign.com/call-of-duty-mw2/e/e5/Modern_Warfare_2_Gameplay.jpg"
    },
    {
      game: "Fortnite",
      desc: ["1. Champions of the Regional Valorant Showdown (2023) - Team A",
        "2. Best Defensive Team Award (2024) - Team A",
        "3. MVP of the Season (2023) - Team B"
      ],
      url: "https://tryhardguides.com/wp-content/uploads/2022/12/featured-fortnite-chapter-4-coordinate-codes-1536x864.jpg"
    }
  ]

  teams = [
    {
      game: "Valorant",
      name: ["FatuiHarbingers","Sentinels"],
      url: "https://wallpapers.com/images/featured/valorant-logo-x0jet8s98hbbfi62.jpg"
    },
    {
      game: "PUBG Mobile",
      name: ["Shadiqa","Nova"],
      url: "https://i0.wp.com/gamingonphone.com/wp-content/uploads/2019/08/Tencent-Sees-Share-Rise-after-Games-Accepted-03-PUBG-Mobile-1024x465.jpg"
    },
    {
      game: "Mobile Legends",
      name: ["EVOS","RRQ"],
      url: "https://ggengine.com/media/uploads/2017/11/mobile-legends-bang-bang.png"
    },
    {
      game: "Dota 2",
      name: ["Astral Predators", "Cosmic Titans"],
      url: "https://assets.vg247.com/current/2014/08/dota-2-official.jpg"
    },
    {
      game: "Leauge of Legends",
      name: ["ExoForce Legion","Neon Vortex"],
      url: "https://wallpaperaccess.com/full/2379005.jpg"
    },
    {
      game: "Call of Duty",
      name: ["Senju","Phoenix"],
      url: "https://oyster.ignimgs.com/mediawiki/apis.ign.com/call-of-duty-mw2/e/e5/Modern_Warfare_2_Gameplay.jpg"
    },
    {
      game: "Fortnite",
      name: ["Galaxy","StellarPhantomz","ChronoMercenaries","PlasmaDomniators"],
      url: "https://tryhardguides.com/wp-content/uploads/2022/12/featured-fortnite-chapter-4-coordinate-codes-1536x864.jpg"
    }
  ]

  team_members = [
    {
      idgame: 0,
      idteam: 0,
      members: [
        {
          nickname: "Pierro",
          role: "Controller",
          url: "https://upload-os-bbs.hoyolab.com/upload/2022/09/02/145695672/a0facd9f6bfed9d21ea9a420550d7c87_359887050123152404.png?x-oss-process=image%2Fresize%2Cs_1000%2Fauto-orient%2C0%2Finterlace%2C1%2Fformat%2Cwebp%2Fquality%2Cq_70"
        },
        {
          nickname: "Il Capitano",
          role: "In-Game Leader",
          url: "https://staticg.sportskeeda.com/editor/2024/07/e12ff-17213281413394-1920.jpg"
        },
        {
          nickname: "Il Dottore",
          role: "Duelist",
          url: "https://assets.ggwp.id/2023/08/Il-Dottore-Genshin-Impact-featured-640x360.jpg"
        },
        {
          nickname: "Columbina",
          role: "Initiator",
          url: "https://avatarfiles.alphacoders.com/331/331340.jpg"
        },
        {
          nickname: "Arlecchino",
          role: "Sentinel",
          url: "https://assetsio.gnwcdn.com/Genshin-Impact-Arlecchino-gacha-card.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp"
        }
      ],
      url: "https://wallpapers.com/images/featured/valorant-logo-x0jet8s98hbbfi62.jpg"
    },
    {
      idgame: 0,
      idteam: 1,
      members: [
        {
          nickname: "JohnQT",
          role: "In-Game Leader",
          url: "https://valorantnews.jp/wp-content/uploads/2024/03/53590103570_2f2780b5b2_k-1280x853.jpg"
        },
        {
          nickname: "TenZ",
          role: "Duelist",
          url: "https://cdn.oneesports.gg/cdn-data/2022/05/Valorant_TenZ_Champions_2021_V2.jpg"
        },
        {
          nickname: "Sacy",
          role: "Initiator",
          url: "https://theclutch.com.br/wp-content/uploads/2020/12/Sacy-Circuito-Desafiante-BBL-Semifinal.jpg"
        }
      ],
      url: "https://wallpapers.com/images/featured/valorant-logo-x0jet8s98hbbfi62.jpg"
    },
    {
      idgame: 1,
      idteam: 0,
      members: [
        {
          nickname: "SHxJokerNS",
          role: "Rusher Maniac",
          url: "https://wallpapers.com/images/high/pubg-squad-cool-to-be-hot-skin-6k7q9qx951vya9vt.webp"
        },
        {
          nickname: "SHxQuestNS",
          role: "War Arc Maniac",
          url: "https://asset-2.tstatic.net/pontianak/foto/bank/images/Cara-Dapat-Koleksi-Skin-Ultimate-PUBG-Mobile-Majestic-Cavalry.jpg"
        },
        {
          nickname: "SH_ExeliteNS",
          role: "War Arc Maniac",
          url: "https://assets.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/2021/09/12/3603036561.jpg"
        },
        {
          nickname: "SH_DisasterNS",
          role: "War Arc Maniac",
          url: "https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/p2/212/2024/08/04/images-2024-08-04T105737161-1-3416321512.jpeg"
        }
      ],
      url: "https://i0.wp.com/gamingonphone.com/wp-content/uploads/2019/08/Tencent-Sees-Share-Rise-after-Games-Accepted-03-PUBG-Mobile-1024x465.jpg"
    },
    {
      idgame: 1,
      idteam: 1,
      members: [
        {
          nickname: "NOVAxShadow",
          role: "Rusher Maniac",
          url: "https://media.istockphoto.com/id/1763352895/id/vektor/ilustrasi-vektor-pubg-wajah-penuh-helm-baja.jpg?s=612x612&w=0&k=20&c=tFX-RaS3Pq5XP3inFyi5T-EAWlCLGMf0dz2ib770LGM="
        },
        {
          nickname: "NOVAxPhoenix",
          role: "War Arc Maniac",
          url: "https://media.istockphoto.com/id/1763352895/id/vektor/ilustrasi-vektor-pubg-wajah-penuh-helm-baja.jpg?s=612x612&w=0&k=20&c=tFX-RaS3Pq5XP3inFyi5T-EAWlCLGMf0dz2ib770LGM="
        },
        {
          nickname: "NOVAxDestroyer",
          role: "Strategical Maniac",
          url: "https://media.istockphoto.com/id/1763352895/id/vektor/ilustrasi-vektor-pubg-wajah-penuh-helm-baja.jpg?s=612x612&w=0&k=20&c=tFX-RaS3Pq5XP3inFyi5T-EAWlCLGMf0dz2ib770LGM="
        },
        {
          nickname: "NOVAxEmergency",
          role: "Camper Maniac",
          url: "https://media.istockphoto.com/id/1763352895/id/vektor/ilustrasi-vektor-pubg-wajah-penuh-helm-baja.jpg?s=612x612&w=0&k=20&c=tFX-RaS3Pq5XP3inFyi5T-EAWlCLGMf0dz2ib770LGM="
        }
      ],
      url: "https://i0.wp.com/gamingonphone.com/wp-content/uploads/2019/08/Tencent-Sees-Share-Rise-after-Games-Accepted-03-PUBG-Mobile-1024x465.jpg"
    },
    {
      idgame: 2,
      idteam: 0,
      members: [
        {
          nickname: "EVOS Donkey",
          role: "Tank",
          url: "https://gamebrott.com/wp-content/uploads/2020/12/99-750x375.jpg"
        },
        {
          nickname: "EVOS Jessnolimit",
          role: "Assassin",
          url: "https://assets.ggwp.id/2024/01/jess-no-limit-sempat-ingin-di-kick-featured-640x360.jpg"
        },
        {
          nickname: "EVOS OURA",
          role: "Jungler",
          url: "https://cdn.grid.id/crop/53x0:740x447/800x600/smart/filters:format(webp)/photo/2018/10/09/674998188.jpg"
        },
        {
          nickname: "EVOS IOS",
          role: "Figther",
          url: "https://assets.ggwp.id/2022/08/evos-ios-1.jpg"
        },
        {
          nickname: "EVOS KNEER",
          role: "Support",
          url: "https://mediasport.id/wp-content/uploads/2020/07/ke-manakah-para-mantan-pro-player-mobile-legends-ini-sekarang_5f1716db3a056.jpeg"
        }

      ],
      url: "https://i0.wp.com/gamingonphone.com/wp-content/uploads/2019/08/Tencent-Sees-Share-Rise-after-Games-Accepted-03-PUBG-Mobile-1024x465.jpg"
    },
    {
      idgame: 2,
      idteam: 1,
      members: [
        {
          nickname: "RRQ Lemon",
          role: "Mage",
          url: "https://assets.ggwp.id/2022/08/Profil-dan-Biodata-RRQ-Lemon-640x360.jpg"
        },
        {
          nickname: "RRQ Clay",
          role: "Assassin",
          url: "https://cdn.vcgamers.com/news/wp-content/uploads/2022/07/Untitled-design-2022-07-19T131050.026.png"
        },
        {
          nickname: "RRQ Albert",
          role: "Jungler",
          url: "https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1634025439/8f43c5d837f893e7376d0faf30752d53c63990a832fd4332763ae83966c4d332.png"
        },
        {
          nickname: "RRQ R7",
          role: "Figther",
          url: "https://studio.mrngroup.co/storage/app/media/Prambors/cropped-images/RRQ%20R7.%20Offlaner%20Mobile%20Legends-20210201101206.png?tr=w-800"
        },
        {
          nickname: "RRQ Skylar",
          role: "Tank",
          url: "https://img.esportsku.com/wp-content/uploads/2023/07/RRQ-Skylar.jpg"
        },
      ],
      url: "https://i0.wp.com/gamingonphone.com/wp-content/uploads/2019/08/Tencent-Sees-Share-Rise-after-Games-Accepted-03-PUBG-Mobile-1024x465.jpg"
    },
    {
      idgame: 3,
      idteam: 0,
      members: [
        {
          nickname: "Orion Blaze",
          role: "Core",
          url: "https://media.istockphoto.com/id/1159631033/id/foto/sekelompok-babi-hutan-sus-scrofa-berjalan-di-alam-musim-semi.jpg?s=612x612&w=0&k=20&c=dVhTKXEoje2iMvB8p6CL2u7aeTon5uDL6WYT0RaHNfc="
        },
        {
          nickname: "Luna Vortex",
          role: "Midlaner",
          url: "https://media.istockphoto.com/id/964741476/id/foto/gadis-sedih-takut-diganggu-sejalan-dengan-laptop-yang-menderita-cyberbullying-dan-pelecehan.jpg?s=612x612&w=0&k=20&c=pjIKSc3g1xaJppcR0rp3llHDztWOBTdqSZBHEyE_lps="
        },
        {
          nickname: "Nova Strike",
          role: "Offlaner",
          url: "https://media.istockphoto.com/id/1347188341/id/foto/pemburu-wanita-muda-menggunakan-teropong-untuk-melihat-burung-dengan-anjing-vizsla-hungaria-di.jpg?s=612x612&w=0&k=20&c=TfQRGDqQLUli0cXMODg3Iduuf4fz5CdI7djo8AMymmI="
        },
        {
          nickname: "Stellar Fang",
          role: "Soft Support",
          url: "https://media.istockphoto.com/id/1401798164/id/foto/pria-pemburu-berkamuflase-dengan-senapan-merayap-melalui-rumput-buluh-yang-tinggi-dan-semak.jpg?s=612x612&w=0&k=20&c=t7k_KaHU-g6PYiYsweFehtCoukB9MtI4hptz37WFExA="
        },
        { 
          nickname: "Cosmic Claw",
          role: "Hard Support",
          url: "https://media.istockphoto.com/id/1097181872/id/foto/berburu-musim-dingin-saat-matahari-terbit-hunter-bergerak-dengan-senapan-dan-mencari-mangsa.jpg?s=612x612&w=0&k=20&c=XLbgs4H-0S1CRhn_8QYHs9c8-FtRfyQcc_E_rQpNQ9I="
        },
      ],
      url: "https://i0.wp.com/gamingonphone.com/wp-content/uploads/2019/08/Tencent-Sees-Share-Rise-after-Games-Accepted-03-PUBG-Mobile-1024x465.jpg"
    },
    {
      idgame: 3,
      idteam: 1,
      members: [
        {
          nickname: "Atlas Void",
          role: "Core",
          url: "https://media.istockphoto.com/id/1401387054/id/vektor/ilustrasi-kosmik-vektor-latar-belakang-ruang-berwarna-warni-yang-indah-kosmos-cat-air.jpg?s=612x612&w=0&k=20&c=UcKvH_8BwH8eA-lcCdza9lBmaVwVnNRKiYR4b5YOiqE="
        },
        {
          nickname: "Titus Quasar",
          role: "Midlaner",
          url: "https://media.istockphoto.com/id/1393964009/id/foto/latar-belakang-ruang-nebula-biru-dan-ungu-fraktal-berwarna-warni-dengan-bidang-bintang.jpg?s=612x612&w=0&k=20&c=oAQmV4qp-yMeoTbpxGsijeawAetg1ft-HSweCR9C_7g="
        },
        {
          nickname: "Hyperior Surge",
          role: "Offlaner",
          url: "https://media.istockphoto.com/id/157639696/id/foto/bintang-ruang-ungu.jpg?s=612x612&w=0&k=20&c=2BIw5j--XyDpwvxQ0HMCxBn6jFRvh6Kynl-wlHMLDkg="
        },
        {
          nickname: "Titanus Pulse",
          role: "Soft Support",
          url: "https://media.istockphoto.com/id/1035676256/id/foto/latar-belakang-galaksi-dan-bintang.jpg?s=612x612&w=0&k=20&c=RaojmkCmNdrto7LSBqzRuvrQGJGItILuQAUMkPKmAQk="
        },
        {
          nickname: "Aegis Gravitas",
          role: "Hard Support",
          url: "https://media.istockphoto.com/id/1442452138/id/foto/bintang-luar-angkasa-nebula-latar-belakang-alam-semesta.jpg?s=612x612&w=0&k=20&c=m4BuImhM6uSe6IqhLsDdrS4b_6BSMaomaD9s_TiRlbc="
        },
      ],
      url: "https://i0.wp.com/gamingonphone.com/wp-content/uploads/2019/08/Tencent-Sees-Share-Rise-after-Games-Accepted-03-PUBG-Mobile-1024x465.jpg"
    },
    {
      idgame: 4,
      idteam: 0,
      members: [
        {
          nickname: "Helix_Blade",
          role: "Assassin",
          url: "https://media.istockphoto.com/id/1312367128/id/foto/pemain-esports-profesional-di-turnamen-game-online-tim-cyber-memainkan-komputer-dan-kereta.jpg?s=612x612&w=0&k=20&c=bOsDpNQRJIFaimDDKMenXKP7cxLy4MGiOC0whZ5MKJY="
        },
        {
          nickname: "Fighter",
          role: "Midlaner",
          url: "https://media.istockphoto.com/id/1463097723/id/foto/gamer-asia-yang-ceria-merayakan-kemenangannya-dalam-video-game-esports-di-klub-game.jpg?s=612x612&w=0&k=20&c=z8JCE2Ndtnzd3IpnRKOPnbShyQHxzEBIMsZ3xfp4AiE="
        },
        {
          nickname: "FurrySaga",
          role: "Mage",
          url: "https://media.istockphoto.com/id/1319787269/id/foto/pemain-esports-profesional-di-turnamen-game-online-tim-cyber-memainkan-komputer-dan-kereta.jpg?s=612x612&w=0&k=20&c=utALPagYglahNe2mYtQPOOqEBEyobBhePvl1yr8yGM0="
        },
        {
          nickname: "SteelIronPurge",
          role: "Marksman",
          url: "https://media.istockphoto.com/id/1010650900/id/foto/back-view-shot-gadis-gamer-profesional-cantik-mengenakan-headset-dan-mulai-bermain-video-game.jpg?s=612x612&w=0&k=20&c=3iQG_qPGPoucI2TW1vO04NsyKC-K5O3O62Q5qqj048A="
        },
        {
          nickname: "Mecha_Super123",
          role: "Tank",
          url: "https://media.istockphoto.com/id/841135958/id/foto/tim-gamer-esport-profesional-bermain-di-mmorpg-strategi-video-game-kompetitif-pada-turnamen.jpg?s=612x612&w=0&k=20&c=HT8oL7x_jFclANZNZFMwRCXNpgAek1wBwfAx843QbJM="
        },
      ],
      url: "https://i0.wp.com/gamingonphone.com/wp-content/uploads/2019/08/Tencent-Sees-Share-Rise-after-Games-Accepted-03-PUBG-Mobile-1024x465.jpg"
    },
    {
      idgame: 4,
      idteam: 1,
      members: [
        {
          nickname: "NoobMaster123",
          role: "Support",
          url: "https://media.istockphoto.com/id/1388894384/id/foto/wanita-muda-bermain-video-game-vr.jpg?s=612x612&w=0&k=20&c=3UP8ERnOld1PdS5mgBUCfB9O93Eq3ZKeBH7czptjkK8="
        }, 
        {
          nickname: "Dream121",
          role: "Tank",
          url: "https://media.istockphoto.com/id/1314664359/id/foto/game-menang-gamer-olahraga-cyber.jpg?s=612x612&w=0&k=20&c=BuUs8vLeOBaR5Ue0BnDEaN0j3eOyVvpUjIifkaugwQc="
        },
        {
          nickname: "Sapnap",
          role: "Marksman",
          url: "https://media.istockphoto.com/id/1345532280/id/foto/gamer-wanita-bermain-esports.jpg?s=612x612&w=0&k=20&c=vHK73qwCy_8w5T2pluLZ-1yCCRQVl_ApxZgoJ0G2oWM="
        },
        {
          nickname: "TechnoBlade",
          role: "Fighter",
          url: "https://media.istockphoto.com/id/1282649271/id/foto/permainan-komputer-tempat-bermain.jpg?s=612x612&w=0&k=20&c=bU1nFf7CK_Ooif4Zf4Z3nk-FR-8kC44LwsPzi8PhoFM="
        },
        {
          nickname: "KingUsman",
          role: "Mage",
          url: "https://media.istockphoto.com/id/1319787177/id/foto/pemain-esports-profesional-di-turnamen-game-online-tim-cyber-memainkan-komputer-dan-kereta.jpg?s=612x612&w=0&k=20&c=-X4nQ4oDocHjFng76sFbiddEzUw2hpv0sbr9jYvf1Zo="
        },
      ],
      url: "https://i0.wp.com/gamingonphone.com/wp-content/uploads/2019/08/Tencent-Sees-Share-Rise-after-Games-Accepted-03-PUBG-Mobile-1024x465.jpg"
    },
    {
      idgame: 5,
      idteam: 0,
      members: [
        {
          nickname: "Systrong",
          role: "The Leader/Flex",
          url: "https://avatars.githubusercontent.com/u/118102635?v=4"
        },
        {
          nickname: "zeroX397",
          role: "The Objective",
          url: "https://avatars.githubusercontent.com/u/114925707?v=4 "
        },
        {
          nickname: "thelolna15",
          role: "The Anchor",
          url: "https://avatars.githubusercontent.com/u/150948563?v=4"
        },
        {
          nickname: "DevoSenju",
          role: "The Slayer",
          url: "https://avatars.githubusercontent.com/u/120548962?s=400&u=101fa253cc37f59c24a51a6679856912f681b68b&v=4"
        },
        {
          nickname: "RExWanwan",
          role: "The Support",
          url: "https://cdn.oneesports.gg/cdn-data/2022/08/MLBB_Wanwan-1536x864.webp"
        },
      ],
      url: "https://i0.wp.com/gamingonphone.com/wp-content/uploads/2019/08/Tencent-Sees-Share-Rise-after-Games-Accepted-03-PUBG-Mobile-1024x465.jpg"
    },
    {
      idgame: 5,
      idteam: 1,
      members: [
        {
          nickname: "PHX_Senshi",
          role: "The Leader/Flex",
          url: "https://media.istockphoto.com/id/1387392451/id/vektor/phoenix-abstrak-burung-dengan-desain-logo-sayap-api.jpg?s=612x612&w=0&k=20&c=tVZ17GqEuUNZwgAg1ocq1Z5V_uaZp6Q0wLWs8_4Leso="
        },
        {
          nickname: "PHX_Zon",
          role: "The Objective",
          url: "https://media.istockphoto.com/id/1387392451/id/vektor/phoenix-abstrak-burung-dengan-desain-logo-sayap-api.jpg?s=612x612&w=0&k=20&c=tVZ17GqEuUNZwgAg1ocq1Z5V_uaZp6Q0wLWs8_4Leso="
        },
        {
          nickname: "PHX_DakuMori",
          role: "The Anchor",
          url: "https://media.istockphoto.com/id/1387392451/id/vektor/phoenix-abstrak-burung-dengan-desain-logo-sayap-api.jpg?s=612x612&w=0&k=20&c=tVZ17GqEuUNZwgAg1ocq1Z5V_uaZp6Q0wLWs8_4Leso="
        },
        {
          nickname: "PHX_CrispyBagel",
          role: "The Slayer",
          url: "https://media.istockphoto.com/id/1387392451/id/vektor/phoenix-abstrak-burung-dengan-desain-logo-sayap-api.jpg?s=612x612&w=0&k=20&c=tVZ17GqEuUNZwgAg1ocq1Z5V_uaZp6Q0wLWs8_4Leso="
        },
        {
          nickname: "PHX_Aayuuuu_421",
          role: "The Support",
          url: "https://media.istockphoto.com/id/1387392451/id/vektor/phoenix-abstrak-burung-dengan-desain-logo-sayap-api.jpg?s=612x612&w=0&k=20&c=tVZ17GqEuUNZwgAg1ocq1Z5V_uaZp6Q0wLWs8_4Leso="
        },
      ],
      url: "https://i0.wp.com/gamingonphone.com/wp-content/uploads/2019/08/Tencent-Sees-Share-Rise-after-Games-Accepted-03-PUBG-Mobile-1024x465.jpg"
    },
    {
      idgame: 6,
      idteam: 0,
      members: [
        {
          nickname: "GLX_Phocho",
          role: "Medic",
          url: "https://media.istockphoto.com/id/1249868504/id/foto/pemuda-bermain-video-game-di-dalam-ruangan-di-rumah.jpg?s=612x612&w=0&k=20&c=-UNbQooaUqv_z47IPfxA7FfuIzlEdR5t48lRYmj611o="
        },
        {
          nickname: "GLX_Shygolone",
          role: "Sniper",
          url: "https://media.istockphoto.com/id/1408511405/id/foto/gadis-di-klub-video-game.jpg?s=612x612&w=0&k=20&c=21ASEppOZv5aL-2LrJiNdx7Q7_BPQt2tRz5fTyS7zVA="
        },
        {
          nickname: "GLX_Awnani",
          role: "DPS",
          url: "https://media.istockphoto.com/id/1282170297/id/foto/memenangkan-dua-gamer-olahraga-cyber-profesional-muda-yang-bahagia-memberikan-benjolan-tinju.jpg?s=612x612&w=0&k=20&c=LCrSK0AHUd63-I-GsJSHTCwvGoJ3MBIzxx7adGWCAsI="
        },
        {
          nickname: "GLX_Domino",
          role: "Builder",
          url: "https://media.istockphoto.com/id/1357434471/id/foto/pro-girl-memainkan-game-komputer-memainkan-strategi-rpg-di-kejuaraan-beragam-tim-esport-gamer.jpg?s=612x612&w=0&k=20&c=087UDJRyNT3mk_YAncNwXMMUbpddbTEMibdA-qR0DgY="
        },
      ],
      url: "https://i0.wp.com/gamingonphone.com/wp-content/uploads/2019/08/Tencent-Sees-Share-Rise-after-Games-Accepted-03-PUBG-Mobile-1024x465.jpg"
    },
    {
      idgame: 6,
      idteam: 1,
      members: [
        {
          nickname: "PowerRangers",
          role: "Medic",
          url: "https://plus.unsplash.com/premium_photo-1664475567259-394c8b220f41?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
          nickname: "RifleBlaster",
          role: "Sniper",
          url: "https://images.unsplash.com/photo-1690467485207-db6fbf1b8014?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
          nickname: "TheDestroyer_90",
          role: "DPS",
          url: "https://plus.unsplash.com/premium_photo-1664476511089-d59d5ee34cf3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
          nickname: "PeasantOP",
          role: "Builder",
          url: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
      ],
      url: "https://i0.wp.com/gamingonphone.com/wp-content/uploads/2019/08/Tencent-Sees-Share-Rise-after-Games-Accepted-03-PUBG-Mobile-1024x465.jpg"
    },
    {
      idgame: 6,
      idteam: 2,
      members: [
        {
          nickname: "DoctorEconomic",
          role: "Medic",
          url: "https://images.pexels.com/photos/14852167/pexels-photo-14852167.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        {
          nickname: "CamperMaster",
          role: "Sniper",
          url: "https://media.istockphoto.com/id/2032935598/id/foto/potret-pria-lucu-dengan-hoodie-hijau-terkejut-membuka-mulut-terdiam-ketika-melihat-pengumuman.webp?s=1024x1024&w=is&k=20&c=xK_SNGfHHeaxcU8ldvA5GtUMcPop3M_Jg7MSGynAbog="
        },
        {
          nickname: "JokerOP",
          role: "DPS",
          url: "https://images.pexels.com/photos/14819402/pexels-photo-14819402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        {
          nickname: "OG_Yes",
          role: "Builder",
          url: "https://images.pexels.com/photos/6080928/pexels-photo-6080928.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
      ],
      url: "https://i0.wp.com/gamingonphone.com/wp-content/uploads/2019/08/Tencent-Sees-Share-Rise-after-Games-Accepted-03-PUBG-Mobile-1024x465.jpg"
    },
    {
      idgame: 6,
      idteam: 3,
      members: [
        {
          nickname: "PhantomAssault",
          role: "Medic",
          url: "https://images.unsplash.com/photo-1652404972072-238262d22838?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
          nickname: "Pemburu_Handal",
          role: "Sniper",
          url: "https://images.unsplash.com/photo-1642708447238-c9313d4bfa64?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
          nickname: "Coganz_41",
          role: "DPS",
          url: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
          nickname: "BurgerKing_11",
          role: "Builder",
          url: "https://images.unsplash.com/photo-1618336753974-aae8e04506aa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
      ],
      url: "https://i0.wp.com/gamingonphone.com/wp-content/uploads/2019/08/Tencent-Sees-Share-Rise-after-Games-Accepted-03-PUBG-Mobile-1024x465.jpg"
    },
    
  ]

  constructor() { }
}