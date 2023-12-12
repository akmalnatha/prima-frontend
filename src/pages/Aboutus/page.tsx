import Footer from "../../components/footer";
import Navbar from "../../components/navbar";

export default function About() {
  return (
    <>
      <Navbar idx={3} />
      <div className="w-full h-screen flex flex-col">
        <p className="mt-[200px]">HOME</p>
        <Footer />
      </div>
    </>
  );
}
