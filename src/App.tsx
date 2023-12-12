import { useState } from "react";
import "./App.css";
import Paginate from "./components/paginate";
import Navbar from "./components/navbar";

function App() {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <>
      {/* <Paginate
        current={(currentPage) => setCurrentPage(currentPage)}
        totalPages={10}
      /> */}
      <Navbar idx={0}/>
    </>
  );
}

export default App;
