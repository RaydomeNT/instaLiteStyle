import { useState } from "react";

const [myPics, setMyPics] = useState([]);
const [displayImages, setDisplay] = useState();


const fetchPics = async () => {
    const response = await fetch("https://picsum.photos/v2/list");
    const data = await response.json();
    setMyPics(data)
    console.log(data)
  }

  useEffect(()=> {
    fetchPics();
  },[])

  setDisplay(!displayImages)
  {displayImages &&
    myPics.map((item) => {
      return (
        <div>
        <h2>{item.author}</h2>
        <img src={item.download_url} alt="img" />
        </div>     
      )
    })};

// export default Home;
