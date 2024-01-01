import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import City from "./City";

function App() {
  const key = "cb929426437ed120f1c8707dfa9d813e";
  const [search, setSearch] = useState("");
  const [city, setCity] = useState();
  useEffect(() => {
    async function getApi() {
      try {
        // If search status is not empty, make the request
        if (search.trim() !== "" && search.trim().length >= 3) {
          const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${key}&units=metric`
          );
          console.log(response);
          if (response.data) {
            setCity(response.data);
          }
        }
      } catch (error) {
        console.error(error);
      }
    }
    //Make the request by adding a 200ms delay after the search status changes
    const timeoutId = setTimeout(() => {
      getApi();
    }, 200);

    // useEffect cleaning function
    return () => clearTimeout(timeoutId);
  }, [search]);
  console.log(search);

  return (
    <div className="App mt-4">
      <input
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Placeholder"
        className="px-3 py-3 w-[250px] border-2 shadow-lg placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring"
      />
      <City city={city} />
    </div>
  );
}

export default App;
