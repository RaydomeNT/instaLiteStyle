import { useState, useEffect } from "react";

function Home() {
    // const [myPics, setMyPics] = useState([]);
    const [item, setItem] = useState("");

  const getData = async () => {
    let response = await fetch("https://picsum.photos/v2/list");
    let data = await response.json();
    setItem(data[0]);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <body>
        <h2>{item.author}</h2>
        <img src={item.download_url} alt="img" />
    </body>
  );
};

    export default Home;