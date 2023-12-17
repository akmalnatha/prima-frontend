import axios from "axios";

const url = {
  prod: "https://prima.itb.ac.id/adminpanel",
  dev: "http://127.0.0.1:8000",
};
const mode = "prod";
export const serverUrl = url[mode] + "/api";
export const websiteUrl = url[mode];

function getToken(){
  const ls = localStorage.getItem('token')
  return ls ? ls : ''
}

export const getDepartments = async () => {
  try {
    const hasil = await axios({
      method: "GET",
      url: serverUrl + "/departments",
      headers: {
        token: getToken()
      }
    });
    return hasil.data.data;
  } catch (e) {
    console.log(e);
  }
};

export const getDepartmentByID = async (id: number, offset=0) => {
  try {
    const hasil = await axios({
      method: "GET",
      url: serverUrl + "/departments/" + id + `?offset=${offset}`,
      headers: {
        token: getToken()
      }
    });
    return hasil.data;
    //   return hasil.data.data;
  } catch (e) {
    console.log(e);
  }
};

export const searchResearch = async (id: number, s: string) => {
  try {
    const hasil = await axios({
      method: "GET",
      url: serverUrl + "/departments/" + id + "?s=" + s,
      headers: {
        token: getToken()
      }
    });
    // console.log(hasil)
    return hasil.data;
    //   return hasil.data.data;
  } catch (e) {
    console.log(e);
  }
};

export const searchDepartment = async (s: string) => {
  try {
    const hasil = await axios({
      method: "GET",
      url: serverUrl + "/departments" + "?s=" + s,
      headers: {
        token: getToken()
      }
    });
    return hasil.data.data;
  } catch (e) {
    console.log(e);
  }
};

export const getAllResearch = async (s = '', offset = 0) => {
  try {
    const hasil = await axios({
      method: "GET",
      url: serverUrl + "/researches" + "?s=" + s +"&offset=" +offset,
      headers: {
        token: getToken()
      }
    });
    return hasil.data.data;
  } catch (e) {
    console.log(e);
  }
}

export const getResearchByID = async (id: number) => {
  try {
    const hasil = await axios({
      method: "GET",
      url: serverUrl + "/researches/" + id,
      headers: {
        token: getToken()
      }
    });
    // console.log(hasil)
    return hasil.data.data;
  } catch (e) {
    console.log(e);
  }
};

export const getMostLiked = async () => {
  const mostLiked = await makeRequest(serverUrl + "/most-liked", {}, "GET");
  //console.log(mostLiked)
  if (mostLiked.status === 200) {
    return await mostLiked.json();
  } else {
    return null;
  }
};

export const likeDepartments = async (like: any, id: number) => {
  try {
    const da = {
      like: like,
    };
    const data = await makeRequest(
      serverUrl + "/departments/" + id + "/like",
      da,
      "POST"
    );
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const likeResearches = async (like: any, id: number) => {
  try {
    const da = {
      like: like,
    };
    const data = await makeRequest(
      serverUrl + "/researches/" + id + "/like",
      da,
      "POST"
    );
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const getSelfStats = async () => {
  try {
    const data = await makeRequest(serverUrl + "/self", {}, "GET");
    return data.status === 200;
  } catch (e) {
    return null;
  }
};

export const postBukuTamu = async (name: string, email: string) => {
  const data = await makeRequest(
    serverUrl + "/buku-tamu",
    { nama: name, email: email },
    "POST"
  );

  const jsonData = await data.json()
  localStorage.setItem('token', jsonData.data.token);
  return data;
};

export async function makeRequest(
    url = "",
    data = {},
    type = "",
    headers: Record<string, string> = {
      "Content-Type": "application/json",
    },
    isFormData = false
  ) {
    headers['token'] = getToken();
    
    let body: BodyInit | null | undefined;
  
    if (type === "GET" || type === "get") {
      body = null;
    } else if (isFormData) {
      body = data as BodyInit;
    } else {
      body = JSON.stringify(data);
    }
  
    const response = await fetch(url, {
      method: type,
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: headers,
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: body,
    });
  
    return response;
  }
