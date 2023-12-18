import { Fragment, useEffect, ReactNode } from "react";
import { getSelfStats, postBukuTamu } from "../api/api";
const LayoutAuth = ({
    title,
    children,
    needAuth = false
  }: {
    title: string;
    children: ReactNode; 
    needAuth?: boolean;
  }) => {
//   const test = getSelfStats()
//   console.log(test)
//   const [isRegistered, setIsRegistered] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
        document.title = title;
        if (needAuth) {
          if (!(await getSelfStats())) {
            let nama = prompt("Masukkan nama anda");
            while (nama!.length < 1) {
              alert("masukkan nama dengan benar");
              nama = prompt("Masukkan nama anda");
            }
            let email = prompt("Masukkan email anda");
            while (!(email!.includes('@') && email!.includes('.'))) {
              alert("masukkan email dengan benar");
              email = prompt("Masukkan email anda");
            }
            postBukuTamu(nama!, email!)
              .then((r: any) => {
                if (r.status === 200) {
                  alert('Anda berhasil terdaftar di buku tamu, selamat menikmati pameran');
                } else {
                  alert('Pendaftaran gagal, silahkan coba lagi!')
                }
              }).finally(() => window.location.reload());
          }
        }
      };
      fetchData();
  
    // eslint-disable-next-line
  }, []);
  return (
    <Fragment>
        <main>{children}</main>
    </Fragment>
  );
};

export default LayoutAuth;
