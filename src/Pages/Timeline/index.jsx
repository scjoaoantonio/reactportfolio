// ./Pages/Timeline.jsx

import React, { useState } from "react";
import "./index.css";
import "../../global.css";

const Timeline = () => {
  const [expandedItems, setExpandedItems] = useState({});

  const toggleItem = (id) => {
    setExpandedItems((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <section className="timeline">
      <svg display="none">
        <symbol id="arrow">
          <polyline
            points="7 10,12 15,17 10"
            fill="none"
            stroke="currentcolor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </symbol>
      </svg>
      <div id="timeline" className="timeline">
        {timelineData.map((item, index) => (
          <div key={index} className="timeline__item">
            <div className="timeline__item-header">
              <button
                className="timeline__arrow"
                type="button"
                id={`item${index}`}
                aria-labelledby={`item${index}-name`}
                aria-expanded={expandedItems[index] || false}
                aria-controls={`item${index}-ctrld`}
                aria-haspopup="true"
                onClick={() => toggleItem(index)}
              >
                <svg
                  className="timeline__arrow-icon"
                  viewBox="0 0 24 24"
                  width="24px"
                  height="24px"
                >
                  <use href="#arrow" />
                </svg>
              </button>
              <span className="timeline__dot"></span>
              <span id={`item${index}-name`} className="timeline__meta">
                <time className="timeline__date" dateTime={item.dateTime}>
                  {item.date}
                </time>
                <br />
                <strong className="timeline__title">{item.title}</strong>
              </span>
            </div>
            <div
              className="timeline__item-body"
              id={`item${index}-ctrld`}
              role="region"
              aria-labelledby={`item${index}`}
              aria-hidden={!expandedItems[index] || false}
              style={{ display: expandedItems[index] ? "flex" : "none" }}
            >
              <div className="timeline__item-body-content">
                <p className="timeline__item-p">{item.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const timelineData = [
  {
    dateTime: "1970-01-01",
    date: "January 1, 1970",
    title: "Unix Epoch",
    content:
      "This is the day the Unix clock began (or December 31, 1969 if you live behind UTC 😉).",
  },
  {
    dateTime: "1973-10-17",
    date: "October 17, 1973",
    title: "Digits Within ISO 8601 Format",
    content:
      "At 6:36:57 PM UTC, the date in ISO 8601 format (1973-10-17) within the time digits (119731017) appeared for the first time.",
  },
  {
    dateTime: "2001-09-09",
    date: "September 9, 2001",
    title: "1 Billion Seconds",
    content:
      "Unix time reached 1,000,000,000 seconds at 1:46:40 AM UTC. The Danish UNIX User Group celebrated this in Copenhagen, Denmark.",
  },
  {
    dateTime: "2009-02-13",
    date: "February 13, 2009",
    title: "1,234,567,890 Seconds",
    content:
      "At 11:31:30 PM UTC, the digits of the time were 1234567890. This was celebrated worldwide, and even Google had a doodle for it.",
  },
  {
    dateTime: "2033-05-18",
    date: "May 18, 2033",
    title: "2 Billion Seconds",
    content: "Unix time will reach 2,000,000,000 seconds at 3:33:20 AM UTC.",
  },
  {
    dateTime: "2038-01-19",
    date: "January 19, 2038",
    title: "Unix Epochalypse",
    content:
      "Also known as the year 2038 problem, clocks running on a 32-bit signed integer will flip from 3:14:08 AM UTC on this day to 8:45:52 PM UTC on December 13, 1901.",
  },
];

export default Timeline;
