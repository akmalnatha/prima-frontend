import Footer from "../../components/footer";
import Navbar from "../../components/navbar";

export default function About() {
  return (
    <>
      <Navbar idx={3} />
      <div className="max-w-screen w-full h-full flex flex-col px-10 lg:px-28 mb-[100px] md:mb-[200px] overflow-hidden">
          <img src="/assets/radial.svg" alt="" className="absolute top-[-88px] left-[-26px]" />
          <img src="/assets/radial1.svg" alt="" className="absolute top-[-5%] right-0" />
          <img src="/assets/aboutspiral.svg" alt="" className="absolute top-[70%] md:top-[50%] lg:top-[20%] left-[-4px]" />
        <p className="mt-[96px] lg:mt-[160px] font-bold text-[28px] lg:text-[56px] text-center lg:text-start">About Us</p>
        <p className="mt-10 font-medium text-[16px] lg:text-[24px] text-justify">
          PRIMA 2022 adalah singkatan dari Pameran Riset, Inovasi dan Pengabdian
          kepada Masyarakat, merupakan pagelaran tahunan agar civitas ITB dapat
          berbagi terobosan terbaru di bidang sains, teknologi, seni dan
          humaniora. Kegiatan ini penting bagi ITB sebagai refleksi akhir tahun
          tentang apa yang telah dicapai dan apa yang penting untuk dikerjakan
          di masa medatang. PRIMA 2022 dialksanakan oleh panitia di lingkungan
          Kantor Wali Rektor Bidang Riset, Inovasi dan Kemitraan ITB.
          <br />
          <br />
          Ada 700 karya yang merupakan hasil kegiatan penelitian, pengabdian,
          dan inovasi dosen ITB sepanjang tahun 2022 yang dipamerkan dalam
          galeri virtual mulai tanggal 20 Desember 2022 dan dapat terus diakses
          sepanjang tahun.
          <br />
          <br />
          Selain acara pameran virtual, pada 20 Desember 2022 diselenggarakan
          juga rangkaian talkshow yang menarik hingga sore hari. Besoknya 21
          Desember 2022 diselenggarakan konferensi ilmiah The 3rd ITB-Graduate
          School Conference 2022 hasil kerjasama Sekolah Pascasarjana ITB dan
          LPPM ITB.
        </p>
      </div>
      <Footer />
    </>
  );
}
