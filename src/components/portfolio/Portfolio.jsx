import React from "react";
import IMG1 from "../../assets/todoapp.jpg";
import IMG2 from "../../assets/ecom.png";
import IMG3 from "../../assets/hotel.png";
import IMG4 from "../../assets/event.png";
import IMG5 from "../../assets/gennext.png";
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
      title: "React ECommerce Application",
      img: IMG2,
      description: "ECommerce Application | Shop App",
      technologies: "React Js | Tailwindcss",
      link: "https://ecom-shop-react.netlify.app/",
      github: "https://github.com/Malith-ra/ReactJs-ECom",
    },
    {
      id: 4,
      title: "Hotel System for a Tourism",
      img: IMG3,
      description: "Add Hotels | Update Hotel Details | Remove Hotels",
      technologies: "ReactJs | Node Js | MongoDB",
      link: "https://github.com/Malith-ra/Mern-Stack-Online-Search-Hotels-System-for-a-Tourism-/blob/main/IT18097634/IT18097634.pdf",
      github:
        "https://github.com/Malith-ra/Mern-Stack-Online-Search-Hotels-System-for-a-Tourism-/blob/main/IT18097634/IT18097634.pdf",
    },
    {
      id: 5,
      title: "Content Website",
      img: IMG5,
      description: "Login system | Company Website",
      technologies: ".NET",
      link: "https://github.com/Malith-ra/Gennext-Login-System-ASP.NET",
      github: "https://github.com/Malith-ra/Gennext-Login-System-ASP.NET",
    },
    {
      id: 6,
      title: "Shop Application",
      img: IMG6,
      description: "Online Shopping Application",
      technologies: "ReactJs | NodeJs | MongoDB",
      link: "https://github.com/Online-Cart-and-Fashion-Store/MEAN-STACK-Web-Application",
      github:
        "https://github.com/Online-Cart-and-Fashion-Store/MEAN-STACK-Web-Application",
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
