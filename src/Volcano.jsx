import { Icon } from "leaflet";
import React from "react";
import { Marker, Popup } from "react-leaflet";
import { useStateValue } from "./Store";

const volcano = new Icon({
  iconUrl: "/volcano.svg",
  iconSize: [30, 30],
});

const Volcano = () => {
  const [{ eventsData }] = useStateValue();

  return (
    <div>
      {eventsData?.map((event) => {
        if (event.categories[0].id === 12) {
          if (event.geometries[0].coordinates.length === 2) {
            return (
              <React.Fragment key={event.id}>
                <Marker
                  position={[
                    event.geometries[0].coordinates[1], //latitude
                    event.geometries[0].coordinates[0], //longitude
                  ]}
                  icon={volcano}
                >
                  <Popup>
                    <div style={{ fontFamily: '"Karla", sans-serif' }}>
                      <h1>Event Title : Volcano</h1>
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
        }
        return "";
      })}
    </div>
  );
};

export default Volcano;
