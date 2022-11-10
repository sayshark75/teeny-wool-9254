const getData = async (url) => {
  try {
    let res = await fetch(url);
    let data = await res.json();
    console.log('GET 200: ', data);
    return data;
  } catch (error) {
    console.log('GET : ', data);
    return "Error : "+error;
  }
}

const postData = async (url, objData) => {
  try {
    let res = await fetch(url, {
      method: "POST",
      body: JSON.stringify(objData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    let data = await res.json();
    console.log("POST 200 ", data);
    return await data;
  } catch (error) {
    console.log("POST :", error);
    return "Error: " + error;
  }
};

const patchData = async (url, id, objData) => {
  try {
    let res = await fetch(`${url + id}`, {
      method: "PATCH",
      body: JSON.stringify(objData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    let data = await res.json();
    console.log("PATCH 200", data);
  } catch (error) {
    console.log("PATCH : ", error);
    return "Error: " + error;
  }
};

const deleteData = async (url, id) => {
  let myData;
  try {
    let res = await fetch(url+id);
    myData = await res.json();
    console.log('GET 200 ', myData);
  } catch (error) {
    console.log('GET ', myData);
  }

  try {
    let res = await fetch(`${url + id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    let data = await res.json();
    console.log("DELETE 200 :", data);
    return myData;
  } catch (error) {
    console.log("DELETE :", error);
    return "Error: " + error;
  }
};

const profileData = async (url, username, token) => {
  console.log(url + username);
  try {
    let res = await fetch(url + username, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    let data = await res.json();
    console.log("Reponse 200 :", data);
    return data;
  } catch (error) {
    console.log("Reponse :", error);
    return "Error: " + error;
  }
};

export { postData, patchData, deleteData, profileData, getData };
