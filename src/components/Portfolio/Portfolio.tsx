import s from "./Portfolio.module.scss";
import Section from "../Section/Section";
import MarusyaLogo from "../../assets/images/icon-marusya.svg";
import BriatonLogo from "../../assets/images/icon-briaton.svg";
import BulevardLogo from "../../assets/images/icon-bulevard.svg";

export default function Portfolio() {
  return (
    <Section className={s["portfolio-section"]} id="portfolio">
      <div className={s.portfolio}>
        <div className={s["portfolio__heading"]}>
          <h2 className={s["portfolio__title"]}>My Portfolio</h2>

          <p className={s["portfolio__description"]}>
            Here is a small gallery of my recent projects.
          </p>
          <p className={s["portfolio__description"]}>
            Interested to know more about my work?{" "}
            <a href="#contact" className={s["accent__link"]}>
              Contact me!
            </a>
          </p>
        </div>

        <div className={s["portfolio__cards"]}>
          <a
            className={s["portfolio__cards-item"]}
            href="https://cinema-guide-marusya.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            title="Open Marusya demo in a new tab"
          >
            <img
              className={`${s["portfolio__cards-item-img"]} ${s.marusya}`}
              src={MarusyaLogo}
              alt=""
              loading="lazy"
              decoding="async"
            />
            <div className={s["portfolio__cards-item-description"]}>
              <h3>Marusya</h3>
              <p>Cinema guide · React, TypeScript, Vite</p>
            </div>
          </a>

          <a
            className={s["portfolio__cards-item"]}
            href="https://briaton-onlinestore.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            title="Open Briaton demo in a new tab"
          >
            <img
              className={`${s["portfolio__cards-item-img"]} ${s.briaton}`}
              src={BriatonLogo}
              alt=""
              loading="lazy"
              decoding="async"
            />
            <div className={s["portfolio__cards-item-description"]}>
              <h3>Briaton</h3>
              <p>Online lighting store · Vanilla JS, HTML, SCSS (Sass)</p>
            </div>
          </a>

          <a
            className={s["portfolio__cards-item"]}
            href="https://tishinsky-boulevard.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            title="Open Tishinsky Boulevard in a new tab"
          >
            <img
              className={`${s["portfolio__cards-item-img"]} ${s.bulevard}`}
              src={BulevardLogo}
              alt=""
              loading="lazy"
              decoding="async"
            />
            <div className={s["portfolio__cards-item-description"]}>
              <h3>Tishinsky Boulevard</h3>
              <p>Real-estate landing · HTML, SCSS (Sass), CSS Modules</p>
            </div>
          </a>
        </div>
      </div>
    </Section>
  );
}
