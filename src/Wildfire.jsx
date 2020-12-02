import { Icon } from "leaflet";
import React from "react";
import { Marker, Popup } from "react-leaflet";
import { useStateValue } from "./Store";

const wildfire = new Icon({
  iconUrl: "/fire.svg",
  iconSize: [30, 30],
});

const Wildfire = () => {
  const [{ eventsData }] = useStateValue();

  return (
    <div>
      {eventsData?.map((event) => {
        if (event.categories[0].id === 8) {
          return (
            <React.Fragment key={event.id}>
              <Marker
                position={[
                  event.geometries[0].coordinates[1], //latitude
                  event.geometries[0].coordinates[0], //longitude
                ]}
                icon={wildfire}
              >
                <Popup>
                  <div style={{ fontFamily: '"Karla", sans-serif' }}>
                    <h1>Event Title : Wildfire</h1>
                    <h2>Event ID : {event.id}</h2>
                    <p style={{ fontSize: "16px" }}>
                      Description: <b> {event.title}</b>
                    </p>
                    <p style={{ fontSize: "16px" }}>
                      Occured At : {event.geometries[0].date}
                    </p>
                  </div>
                </Popup>
              </Marker>
            </React.Fragment>
          );
        }
      })}
    </div>
  );
};

export default Wildfire;
