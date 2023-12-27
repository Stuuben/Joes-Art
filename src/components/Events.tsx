import { createClient } from "contentful";
import { useEffect, useState } from "react";
import { IGetEvents } from "../models/IGetEvents";

const ACCESS_KEY = import.meta.env.VITE_REACT_APP_ACCESS_KEY;
const SPACE_KEY = import.meta.env.VITE_REACT_APP_SPACE_KEY;

const client = createClient({
  space: SPACE_KEY,
  environment: "master", // defaults to 'master' if not set
  accessToken: ACCESS_KEY,
});

export const Events = () => {
  const [events, setEvents] = useState<IGetEvents[]>([]);

  useEffect(() => {
    client
      .getEntries({
        content_type: "event",
        order: ["-sys.createdAt"],
      })
      .then((response) => {
        const transformedEvents = response.items.map((item) => {
          return {
            fields: item.fields as IGetEvents["fields"],
          };
        });

        setEvents(transformedEvents);
        console.log(transformedEvents);
      });
  }, []);

  const firstEvent = events[0];
  console.log("firstEvent", firstEvent);

  return (
    <div>
      {firstEvent && (
        <div className="hero-image-wrapper">
          <h3>Kommande Events</h3>
          <h4>{firstEvent.fields.title}</h4>
          <div className="hero-image">
            <img
              className="event-image"
              src={firstEvent.fields.image.fields.file.url}
              alt={firstEvent.fields.title}
            />
          </div>
          <p className="event-description">{firstEvent.fields.description}</p>
        </div>
      )}
    </div>
  );
};
