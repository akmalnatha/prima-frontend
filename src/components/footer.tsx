function Footer() {
  return (
    <>
      <footer className="bottom-0 w-full bg-gradient-to-b from-blue-primary to-[#3083D5] rounded-t-3xl pt-12 pb-12 px-8 lg:px-20 z-50">
        <div className="w-full flex flex-col lg:flex-row lg:justify-between gap-6 z-50">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-5">
              <img src="/assets/itebe.svg" alt="" className="w-20 h-20" />
              <p className="text-[14px] lg:text-[20px] font-medium text-white">
                Implemented by <br />
                Institut Teknologi Bandung
              </p>
            </div>
            <p className="text-[12px] lg:text-[16px] font-medium text-white mt-4">
              Supporting by:
            </p>
            <img src="/assets/desain.svg" alt="" className="w-40 h-20" />
            <p className="text-[8px] lg:text-[12px] font-medium text-white">
              Ikatan Mahasiswa Desain<br />
              Interior ITB
            </p>
          </div>
          <div className="flex flex-row justify-between lg:flex-col lg:justify-start gap-6 items-end">
            <div className="flex flex-col items-start lg:items-end justify-end gap-6">
              <p className="text-[14px] lg:text-[20px] font-medium text-white">Contact Us</p>
              <p className="text-[8px] lg:text-[12px] font-semibold text-white text-start lg:text-end">
                Institut Teknologi Bandung
                <br />
                <br />
                Jl. Ganesa No. 10, Kecamatan
                <br />
                Coblong, Kota Bandung,
                <br />
                40132
              </p>
            </div>
            <p className="text-[8px] lg:text-[14px] font-semibold text-white mt-8">
              © 2023 PRIMA ITB. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;
