import { string } from "prop-types";

import "./HelpBox.css";

function HelpBox({ title, text }) {
  return (
    <article className="help-box">
      <h3>{title}</h3>
      <p>{text}</p>
      <span>This is a HelpBox Component</span>
    </article>
  );
}

HelpBox.propTypes = {
  title: string,
  text: string
};

export default HelpBox;
