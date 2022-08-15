import { useState, useEffect } from "react";

function Home() {
  const [myPics, setMyPics] = useState([]);

  const fetchPics = async () => {
    let response = await fetch("https://picsum.photos/v2/list");
    let data = await response.json();
    setMyPics(data);
  };
  useEffect(() => {
    fetchPics();
  }, []);

  return (
    <body>
      {myPics.map((item) => (
        <ul>
          <h2>{item.author}</h2>
          <img src={item.download_url} alt="img" />
        </ul>
      ))}
    </body>
  );
}

export default Home;
