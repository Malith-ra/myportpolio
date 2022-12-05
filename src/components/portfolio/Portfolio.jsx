import React from "react";
import IMG1 from "../../assets/todoapp.jpg";
import IMG2 from "../../assets/todo.png";
import IMG3 from "../../assets/shelter.png";
import IMG4 from "../../assets/event.png";
import IMG5 from "../../assets/news.png";
import IMG6 from "../../assets/math.png";

import "./portfolio.css";

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "React Todo Application",
      img: IMG1,
      description: "University Assignment Using React Js",
      technologies: "React Js | Bootstrap",
      link: "https://github.com/Malith-ra/React-Todo-application",
      github: "https://github.com/Malith-ra/React-Todo-application",
    },
    {
      id: 2,
      title: "Event Organizer Application",
      img: IMG4,
      description: "Add Events | Update Events | Remove Events | Show Events",
      technologies: "Javascript",
      link: "https://github.com/Online-Event-Organizer/AngularJS-web-application",
      github:
        "https://github.com/Online-Event-Organizer/AngularJS-web-application",
    },
    {
      id: 3,
      title: "To-Do-App",
      img: IMG2,
      description: "User friendly app to plan your day and manage tasks",
      technologies: "JavaScript | Webpack",
      link: "https://meri-mg.github.io/To-Do-List/dist/",
      github: "https://github.com/Malith-ra?tab=repositories",
    },
    {
      id: 4,
      title: "Shelter",
      img: IMG3,
      description:
        "Fully responsive interactive website built based on Figma design",
      technologies: "JavaScript | CSS",
      link: "https://github.com/Malith-ra?tab=repositories",
      github: "https://github.com/Malith-ra?tab=repositories",
    },
    {
      id: 5,
      title: "World News",
      img: IMG5,
      description:
        "Fully responsive interactive website built based on Adobe XD design",
      technologies: "JavaScript | CSS",
      link: "https://github.com/Malith-ra?tab=repositories",
      github: "https://github.com/Malith-ra?tab=repositories",
    },
    {
      id: 6,
      title: "Math Resource",
      img: IMG6,
      description:
        "Real-world group project which is still in progress and will provide educational platform for future young developers",
      technologies: "JavaScript | Scss | Python",
      link: "https://github.com/Malith-ra?tab=repositories",
      github: "https://github.com/Malith-ra?tab=repositories",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Visit Website
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
