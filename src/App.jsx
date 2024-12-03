import { useState, useEffect } from "react";
import "./App.css";
import arrow from "./assets/arrow.svg";
import Card from "./assets/components/card.jsx";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const API_KEY = "at_Ye54ehu6YYFHQh8PkvTrweHaCblkY";

function App() {
  const [ipValue, setIpValue] = useState("");
  const [ipData, setIpData] = useState({});
  const [position, setPosition] = useState([41.305, 69.20778]);

  const submitHandler = (evt) => {
    evt.preventDefault();
    fetch(
      `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&ipAddress=${ipValue}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPosition([data.location.lat, data.location.lng]);
        setIpData(data);
      });
  };

  const MapViewUpdater = () => {
    const map = useMap();

    useEffect(() => {
      if (position) {
        map.setView(position, map.getZoom());
      }
    }, [position, map]);

    return null;
  };

  return (
    <>
      <div className="header-wrapper">
        <header className="container containem flex flex-col gap-[20px] items-center my-30 relative">
          <h1 className="text-white text-3xl">IP Address Tracker</h1>
          <div className="relative">
            <form onSubmit={submitHandler}>
              <input
                value={ipValue}
                onChange={(evt) => {
                  setIpValue(evt.target.value);
                }}
                className="p-2.5 w-[400px] rounded-xl"
                type="text"
                placeholder="Search for any IP address or domain"
              />
              <button
                type="submit"
                className="absolute top-[0] p-2.5 rounded-r-lg right-[0] bg-black"
              >
                <img className="" src={arrow} alt="" />
              </button>
            </form>
          </div>
          <Card data={ipData} />
        </header>
      </div>
      <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
        <MapViewUpdater /> {/* Include the MapViewUpdater component here */}
      </MapContainer>
    </>
  );
}

export default App;
