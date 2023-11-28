import { useEffect, useState } from "react";
// import axios from "axios";
const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function FetchData() {
      console.log(`${import.meta.env.VITE_API_URL}`);
      try {
        const reponse = await fetch(`${import.meta.env.VITE_API_URL}`);
        if (!reponse.ok) {
          throw new Error("Network reponse was not ok");
        }
        const result = await reponse.json();
        console.log("results is", result);
        setData(result);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    }
    FetchData();
  }, []);
  return (
    <div>
      {data} <p>hello world</p>
    </div>
  );
};

export default App;
