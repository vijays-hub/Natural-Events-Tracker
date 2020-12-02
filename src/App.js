import './App.css';
import { useEffect, useState } from 'react';
import Wildfire from './Wildfire';
import '../node_modules/leaflet/dist/leaflet.css'
import { MapContainer, TileLayer } from 'react-leaflet'
import { useStateValue } from './Store';
import Loader from './Loader';
import Volcano from './Volcano';
import Header from './Header';

function App() {

  const [{ eventsData }, dispatch] = useStateValue();

  const [eventsLoaded, setEventsLoaded] = useState(false)

  useEffect(() => {
    const fetchEvents = async () => {
      const response = await fetch(
        "https://eonet.sci.gsfc.nasa.gov/api/v2.1/events"
      );
      const { events } = await response.json();
      console.log()
      dispatch({
        type: "ADD_EVENTS_DATA",
        events: events,
      });
    };
    fetchEvents();
  }, []);

  useEffect(() => {
    if (eventsData !== null) {
      setEventsLoaded(true)
    }
  }, [eventsData])

  return (
    <>
      {eventsLoaded ? <><Header></Header><MapContainer center={[37.600131437, -112.682747893]} zoom={5}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Wildfire></Wildfire>
        <Volcano></Volcano>
      </MapContainer></> : <Loader></Loader>}
    </>
  );
}

export default App;
