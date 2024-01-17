import React from 'react';

const hariBesarLingkunganHidup = [
    {
      id: 1,
      nama: "Hari Bumi (Earth Day)",
      deskripsi: "Peringatan global mendukung kelestarian lingkungan dan perlindungan bumi.",
      tanggal: "2023-04-22"
    },
    {
      id: 2,
      nama: "Hari Air Sedunia (World Water Day)",
      deskripsi: "Menekankan pentingnya air bersih, ketersediaan air, dan sanitasi yang baik.",
      tanggal: "2023-03-22"
    },
    {
      id: 3,
      nama: "Hari Hijau Sedunia (World Green Building Week)",
      deskripsi: "Memotivasi dan membangun kesadaran tentang bangunan berkelanjutan dan ramah lingkungan.",
      tanggal: "2023-09-24" // Menggunakan tanggal dalam minggu ke-4 bulan September
    },
    {
      id: 4,
      nama: "Hari Konservasi Alam Nasional (National Conservation Day)",
      deskripsi: "Menyoroti pentingnya pelestarian alam dan ekosistem.",
      tanggal: "2023-08-28"
    },
    {
      id: 5,
      nama: "Hari Perlindungan Ozon Sedunia (World Ozone Day)",
      deskripsi: "Memperingati penandatanganan Protokol Montreal yang dirancang untuk melindungi lapisan ozon.",
      tanggal: "2023-09-16"
    },
    {
      id: 6,
      nama: "Hari Hutan Sedunia (International Day of Forests)",
      deskripsi: "Menyadarkan pentingnya hutan untuk keberlanjutan dan perlindungan lingkungan.",
      tanggal: "2023-03-21"
    },
    {
      id: 7,
      nama: "Hari Perlindungan Satwa Liar Sedunia (World Wildlife Day)",
      deskripsi: "Memperingati konvensi tentang perdagangan internasional satwa liar.",
      tanggal: "2023-03-03"
    },
    {
      id: 8,
      nama: "Hari Bebas Plastik Sedunia (World Plastic Free Day)",
      deskripsi: "Mendorong orang untuk mengurangi penggunaan plastik dalam kehidupan sehari-hari.",
      tanggal: "2023-07-03"
    },
    {
      id: 9,
      nama: "Hari Lingkungan Hidup Sedunia (World Environment Day)",
      deskripsi: "Inisiatif PBB untuk meningkatkan kesadaran dan tindakan global terhadap isu-isu lingkungan.",
      tanggal: "2023-06-05"
    }
  ];

export default function EnvironmentalDaysList() {
  return (
    <div className='mx-5 md:mx-40'>
    <ul role="list" className="divide-y divide-gray-100">
      {hariBesarLingkunganHidup.map((day) => (
        <li key={day.id} className="flex justify-between gap-x-6 py-5">
          <div className="flex min-w-0 gap-x-4">
            <div className="min-w-0 flex-auto">
              <p className="text-sm font-semibold leading-6 text-gray-900">{day.nama}</p>
              <p className="mt-1 truncate text-xs leading-5 text-gray-500">{day.deskripsi}</p>
            </div>
          </div>
          <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
            <p className="text-sm leading-6 text-gray-900">{day.tanggal}</p>
          </div>
        </li>
      ))}
    </ul></div>
  );
}
