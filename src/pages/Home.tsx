import { createClient } from "contentful";
import "./Home.scss";
import { useEffect, useState } from "react";
import { IGetEvents } from "../models/IGetEvents";

const ACCESS_KEY = import.meta.env.VITE_REACT_APP_ACCESS_KEY;
const SPACE_KEY = import.meta.env.VITE_REACT_APP_SPACE_KEY;

const client = createClient({
  space: SPACE_KEY,
  environment: "master", // defaults to 'master' if not set
  accessToken: ACCESS_KEY,
});

export const Home = () => {
  const [events, setEvents] = useState<IGetEvents[]>([]);

  useEffect(() => {
    client
      .getEntries({
        content_type: "event",
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

  /*   const allEvents = events.map((event) => { */

  /*  <div key={event.fields.sys.id}>
        <h3>{event.fields.title}</h3>
      </div> */

  /*   }); */

  return (
    <div className="main-wrapper">
      <div className="content-wrapper">
        <h3 className="title">Josefin Stuborn</h3>
        <p className="image-p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          sint ipsam, exercitationem voluptates, nihil laborum magnam non
          corrupti tenetur id, ab inventore hic? Non quod iure, dolorum facere
          minima in.
        </p>

        {/*  <div className="hero-image-wrapper">
          <div className="hero-image"></div>
        </div> */}

        {/* <div>{allEvents}</div> */}

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

        <div className="joes-loggo">
          <img src="/assets/JOES.svg" alt="joes" />
        </div>
      </div>
    </div>
  );
};
