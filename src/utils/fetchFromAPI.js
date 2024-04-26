
const fetchFromAPI = async(url,option = {})=>{
  try {
    const res = await fetch(process.env.REACT_APP_BASE_URL + url, {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "c3a6c850d9msh2314883e6786ae7p1ba527jsn6c36f9bb6439",
        "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
      },
      // params: {
      //   maxResults: "50",
      // }
    });
    const data = await res.json();
    return data
  } catch (err) {
    alert(err);
  }
}

export default fetchFromAPI;

