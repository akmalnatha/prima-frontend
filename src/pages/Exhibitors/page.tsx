import { useEffect, useState } from "react";
import Button from "../../components/button";
import Card from "../../components/card";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import Paginate from "../../components/paginate";
import SearchBar from "../../components/searchbar";
import LayoutAuth from "../../layout/LayoutAuth";
import { useNavigate, useParams } from "react-router";
import { getAllResearch, getDepartments, websiteUrl } from "../../api/api";

export default function Exhibitors() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [current, setCurrent] = useState(1);
  const [departmentData, setDepartmentData] = useState<any[]>([]);
  const [riset, setRiset] = useState<any[]>([]);
  const [banyakRiset, setBanyakRiset] = useState(0);
  const [filteredData, setFilteredData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const params = useParams();

  let updatedRiset: any[] = [];

  const fetchData = async (input: string, currentOffset: number) => {
    try {
      if (params && params.year && input != "") {
        setIsLoading(true);
        const res = await getAllResearch(input, currentOffset);
        if (res && res.length > 0) {
          if (
            updatedRiset.length > 0 &&
            updatedRiset[updatedRiset.length - 1].id != res[res.length - 1].id
          ) {
            updatedRiset = updatedRiset.concat(res);
          } else if (updatedRiset.length == 0) {
            updatedRiset = updatedRiset.concat(res);
          }
          await fetchData(input, currentOffset + 1);
        }
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      const filteredRiset = updatedRiset.filter((item: any) => {
        const createdAtYear = new Date(item.created_at).getFullYear();
        if (params && params.year && typeof params.year === "string") {
          return createdAtYear === parseInt(params.year, 10);
        }
        return false;
      });
      setRiset(filteredRiset);
      if (riset.length > banyakRiset) {
        setBanyakRiset(riset.length);
      }
      setIsLoading(false);
      return filteredRiset;
    }
  };

  // useEffect(() => {
  //   const fetchDataWrapper = async () => {
  //     await fetchData(0);
  //   };
  //   fetchDataWrapper();
  // }, [search]);

  useEffect(() => {
    setIsLoading(true);
    const data = getDepartments();
    data
      .then((res) => {
        const filteredDepartment = res.filter((item: any) => {
          const createdAtYear = new Date(item.created_at).getFullYear();
          if (params && params.year && typeof params.year === "string") {
            return createdAtYear === parseInt(params.year, 10);
          }
          return false;
        });
        const department = filteredDepartment.map((item: any) => ({
          ...item,
          type: "department", // Add a type property
        }));
        console.log(department);
        setDepartmentData(department);
        setFilteredData(department);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  // useEffect(() => {
  //   let newData = [...departmentData, ...riset];
  //   setData(newData);
  //   if(riset){
  //     setFilteredData(newData)
  //   } else {
  //     setFilteredData(departmentData);
  //   }
  // },[departmentData, riset])

  // const searchHandler = (e: string) => {
  //   if (params && params.year) {
  //     setIsLoading(true);
  //     const hasilSearch = searchDepartment(e);
  //     hasilSearch
  //     .then((res) => {
  //       const filteredData = res.filter((item: any) => {
  //         const createdAtYear = new Date(item.created_at).getFullYear();
  //         if (params && params.year && typeof params.year === "string") {
  //           return createdAtYear === parseInt(params.year, 10);
  //         }
  //         return false;
  //       });
  //         setDepartmentData(filteredData);
  //       })
  //       .finally(() => {
  //         setIsLoading(false);
  //       });
  //   }
  // };

  const searchHandler = async (search: string) => {
    setIsLoading(true);
    if (search != undefined && search != "") {
      const risetData = await fetchData(search, 0);
      setIsLoading(true);
      let newData = [
        ...departmentData.map((item) => ({ ...item })),
        ...risetData.map((item) => ({ ...item, type: "riset" })),
      ];
      const filtered = newData.filter((item: any) =>
        Object.values(item).some((value: any) =>
          String(value).toLowerCase().includes(search.toLowerCase())
        )
      );
      setFilteredData(filtered);
    } else {
      setFilteredData(departmentData);
    }
    setIsLoading(false);
    // if (params && params.id) {
    //   setIsLoading(true);
    //   const hasilSearch = searchResearch(params.id, e);
    //   hasilSearch
    //     .then((res) => {
    //       setRiset(res.research);
    //     })
    //     .finally(() => {
    //       setIsLoading(false);
    //     });
    // }
  };

  const indexOfLastItem = current * 9;
  const indexOfFirstItem = indexOfLastItem - 9;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages =
    (filteredData.length == 9 ? 0 : 1) + Math.floor(filteredData.length / 9);
  if (current > totalPages) {
    setCurrent(1);
  }

  return (
    <>
      <LayoutAuth title={"Prima ITB 2023"} needAuth={true}>
        <Navbar idx={5} />
        <div className="w-full h-fit min-h-screen overflow-hidden flex flex-col px-10 lg:px-24 pb-[100px] lg:pb-[120px] relative">
        <img
            src="/assets/spiralexhibitors2.svg"
            alt=""
            className="hidden lg:block w-96 absolute top-[-100px] right-[0px] object-cover -z-10"
          />
          <img
            src="/assets/spiralexhibitors2-mobile.svg"
            alt=""
            className="lg:hidden w-96 absolute top-[-50px] -left-[100px] object-cover -z-10 w-[64%] sm:w-[57%] md:w-[50%] object-contain"
          />
          <img
            src="/assets/radial2.svg"
            alt=""
            className="lg:hidden absolute -top-[360px] sm:-top-[500px] md:-top-[600px] left-[-200px] sm:left-[-300px] md:left-[-400px] -z-10"
          />
          <img
            src="/assets/radial.svg"
            alt=""
            className="absolute top-[840px] lg:top-[120px] left-[-100px] -z-10"
          />
          <img
            src="/assets/spiralexhibitors.svg"
            alt=""
            className="absolute top-[700px] lg:top-[-50px] -left-[10px] -z-10 w-[40%] lg:w-[20%] object-contain"
          />
          <img
            src="/assets/radial2.svg"
            alt=""
            className="lg:hidden absolute top-[1000px] right-[-300px] sm:right-[-500px] md:right-[-600px] -z-10"
          />
          <img
            src="/assets/spiralexhibitors3.svg"
            alt=""
            className="absolute top-[1600px] lg:top-[600px] -left-[0px] -z-10"
          />
          <img
            src="/assets/radial2.svg"
            alt=""
            className="absolute bottom-[25%] lg:-bottom-[880px] right-[-300px] sm:right-[-500px] md:right-[-500px] lg:left-[-400px] -z-10"
          />
          <img
            src="/assets/spiralexhibitors5.svg"
            alt=""
            className="absolute bottom-[32%] lg:-bottom-[120px] right-0 w-[30%] lg:w-[25%] -z-10"
          />
          <img
            src="/assets/spiralexhibitors6.svg"
            alt=""
            className="lg:hidden absolute -bottom-[200px] sm:-bottom-[300px] md:-bottom-[400px] w-full object-contain left-0 -z-10"
          />
          <p className="mt-[96px] lg:mt-[160px] font-bold text-[28px] lg:text-[60px] text-center z-40">
            PRIMA ITB {params.year}
          </p>
          <p className="mt-3 font-bold text-[28px] lg:text-[60px] text-center bg-gradient-to-b from-blue-primary to-blue-light bg-clip-text text-transparent">
            Exhibitors
          </p>
          <p className="mt-3 font-medium text-[10px] lg:text-[28px] text-center z-40">
            Pameran Riset, Inovasi, dan Pengabdian Masyarakat (Non-Virtual)
          </p>
          <div className="mt-10 lg:mt-16 w-full flex justify-center lg:justify-between items-center">
            <div className="hidden lg:block z-40">
              <Button
                type={"button"}
                icon={true}
                iconPosition="left"
                text="Back to Home"
                color="secondary"
                size="medium"
                onClick={() => navigate("/")}
              />
            </div>
            <div className="w-full lg:w-1/2">
              <SearchBar
                placeholder={"Search ..."}
                onChange={(e) => {
                  setSearch(e.target.value);
                  if (e.target.value == "") {
                    searchHandler("");
                  }
                }}
                onClick={() => searchHandler(search)}
              />
            </div>
          </div>
          {isLoading ? (
            <div role="status" className="w-full flex justify-center mt-10">
              <svg
                aria-hidden="true"
                className="w-8 h-8 text-orange-primary animate-spin dark:text-gray-600 fill-blue-primary"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          ) : (
            <div className="z-40 mt-10 lg:mt-14 w-full grid justify-items-center grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14">
              {currentItems.map((row: any) =>
                row.type == "department" ? (
                  <Card
                    fit={search != "" ? true : false}
                    key={row.id}
                    tipe={"exhibitors"}
                    nama={row.name}
                    link={`https://prima.itb.ac.id/adminpanel/${row.picture}`}
                    liked={row.liked}
                    likes={row.like_count}
                    id={row.id}
                    onClickButton={() =>
                      navigate("/exhibitors-posters/" + row.id)
                    }
                  />
                ) : (
                  <Card
                    key={row.id}
                    tipe={"posters"}
                    nama={row.title}
                    penulis={row.authors}
                    link={websiteUrl + "/" + row.picture_compressed}
                    id={""}
                    onClick={() => navigate("/detail/" + row.id)}
                  />
                )
              )}
            </div>
          )}
          <div className="mt-4 w-full flex justify-center z-40">
            <Paginate totalPages={totalPages} current={(e) => setCurrent(e)} />
          </div>
        </div>
        <Footer />
      </LayoutAuth>
    </>
  );
}
