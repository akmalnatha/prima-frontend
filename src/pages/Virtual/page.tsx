import Footer from "../../components/footer";
import Navbar from "../../components/navbar";

export default function Virtual() {
  return (
    <>
      <Navbar idx={1} />
      <div className="w-full h-screen flex flex-col">
        <p className="mt-[200px]">HOME</p>
        <Footer />
      </div>
    </>
  );
}
