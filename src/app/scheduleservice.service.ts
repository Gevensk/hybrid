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

  constructor() { }
}
