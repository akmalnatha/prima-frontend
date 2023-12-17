import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function Paginate({
  totalPages,
  current,
}: {
  totalPages: number;
  current: (x: number) => void | undefined;
}) {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page: number) => {
    if (page == 0) {
      setCurrentPage(1);
      current(1);
    } else if (page == totalPages + 1) {
      setCurrentPage(totalPages);
      current(totalPages);
    } else {
      setCurrentPage(page);
      current(page);
    }
  };

  const pushPage = (pageNumbers: JSX.Element[], i: number) => {
    pageNumbers.push(
      <li
        key={i}
        className={`cursor-pointer px-3 py-1 rounded-md font-bold bg-white ${
          currentPage === i
            ? "border-2 border-blue-primary text-blue-primary"
            : "border-2 border-[#DFE3E8] hover:bg-blue-primary hover:text-white"
        }`}
        onClick={() => handlePageChange(i)}
      >
        {i}
      </li>
    );
  };

  const renderPage = () => {
    const pageNumbers: JSX.Element[] = [];
    for (let i = 1; i <= totalPages; i++) {
      if (totalPages < 5) {
        pushPage(pageNumbers, i);
      } else {
        if (currentPage < totalPages - 3) {
          if (
            (i < currentPage + 3 && i >= currentPage - 1) ||
            i == totalPages
          ) {
            pushPage(pageNumbers, i);
          } else if (i == currentPage + 3) {
            pageNumbers.push(
              <li className="bg-white px-3 py-1 rounded-md border-2 border-[#DFE3E8] hover:bg-blue-primary hover:text-white font-bold">
                ...
              </li>
            );
          }
        } else {
          if (i >= totalPages - 3 || i <= totalPages - currentPage + 1) {
            pushPage(pageNumbers, i);
          } else if (i == totalPages - 4) {
            pageNumbers.push(
              <li className="bg-white px-3 py-1 rounded-md border-2 border-[#DFE3E8] hover:bg-blue-primary hover:text-white font-bold">
                ...
              </li>
            );
          }
        }
      }
    }
    return pageNumbers;
  };
  return (
    <>
      <div className="mt-8 flex w-full grow flex-col items-center">
        <ul className="flex w-auto items-center justify-center gap-2">
          <li
            className={
              currentPage > 1
                ? "html flex rounded-md px-2 py-2 cursor-pointer items-center justify-center bg-white hover:bg-blue-primary text-[#C4CDD5] border-2 border-[#DFE3E8] font-bold"
                : "html flex rounded-md px-2 py-2 items-center justify-center bg-[#919EAB] text-[#C4CDD5]"
            }
            onClick={() => handlePageChange(currentPage - 1)}
          >
            <IoIosArrowBack />
          </li>
          {renderPage()}
          <li
            className={
              currentPage < totalPages
                ? "html flex rounded-md px-2 py-2 cursor-pointer items-center justify-center bg-white hover:bg-blue-primary text-[#C4CDD5] border-2 border-[#DFE3E8] font-bold"
                : "html flex rounded-md px-2 py-2 items-center justify-center bg-[#919EAB] text-[#C4CDD5]"
            }
            onClick={() => handlePageChange(currentPage + 1)}
          >
            <IoIosArrowForward />
          </li>
        </ul>
      </div>
    </>
  );
}

export default Paginate;
