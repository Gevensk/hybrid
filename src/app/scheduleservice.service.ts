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

  constructor() { }
}
