import React, { useState } from 'react';
import './index.scss';

const Timeline = () => {
  const [events, setEvents] = useState([
    {
      date: "May - August 2024",
      title: "Sponsor A Pet | Software Engineering Intern",
      description: [
        "Optimized a fundraising and content delivery web application using <b>React</b> and <b>Django REST Framework</b>, resulting in a user increase of <b>300%</b>, significantly improving user engagement.",
        "Integrated third‑party <b>APIs</b> including Sendgrid for internal and client emailing services and <b>Stripe</b> for payment processing, leading to first successful donation revenue.",
      ],
      expanded: false,
    },
    {
      date: "May - August 2023",
      title: "Johns Hopkins University | Software Engineering Intern",
      description: [
        "Aided in the development of a <b>Python</b> chatbot that provides vaccine information to parents across <b>6</b> urban slums with language and technology barriers, reaching a population of <b>2,058</b> infants.",
        "Increased vaccination rates by <b>20%</b> by implementing personalized information tailored to the user’s specific needs, achieved through sending frequent updates and reminders while leveraging <b>Postgres</b>.",
      ],
      expanded: false,
    },
    {
      date: "August 2023 - Current",
      title: "UMBC Department of Computer Science | Teaching Assistant",
      description: [
        "Accomplished effective communication and support for <b>680</b> students in the Introduction to Computer Science course by leading office hours multiple times a week.",
        "Delivering instruction on topics in <b>Linux</b> (command, Emacs), <b>Python</b> (fundamentals, data structures, object-oriented programming, file handling), and <b>C++</b> (memory management, asymptotic analysis).",
      ],
      expanded: false,
    },
  ]);

  const handleItemClick = (index) => {
    setEvents((prevEvents) => {
      const updatedEvents = prevEvents.map((event, idx) => {
        if (idx === index) {
          return { ...event, expanded: !event.expanded };
        }
        return event;
      });
      return updatedEvents;
    });
  };

  return (
    <div className="timeline-container">
      {events.map((event, index) => (
        <div
          className={`timeline-item ${event.expanded ? 'expanded' : ''}`}
          key={index}
          onClick={() => handleItemClick(index)}
        >
          <div className="timeline-marker"></div>
          <div className="timeline-content">
            <h2>{event.title}</h2>
            {event.expanded ? (
              <div>
                {event.description.map((desc, descIndex) => (
                  <p key={descIndex} dangerouslySetInnerHTML={{ __html: desc }} />
                ))}
              </div>
            ) : (
              <>
                <div className="more">
                  <p>Click for more</p>
                </div>
                <div className="date">{event.date}</div>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
