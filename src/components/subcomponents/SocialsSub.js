import LinkedInLogo from "./LinkedInLogo.js";
import GithubLogo from "./GithubLogo.js";
import { Link } from "react-router-dom";
import classes from "../../css/Socials.module.css";

function SocialsForm() {
  return (
    <div className="d-flex gap-1">
      <Link
        to="https://www.linkedin.com/in/merick-icy-agustin-52976a116/"
        className={classes["social-link"]}
      >
        <LinkedInLogo />
      </Link>
      <Link
        to="https://github.com/merickagustin"
        className={classes["social-link"]}
      >
        <GithubLogo />
      </Link>
    </div>
  );
}

export default SocialsForm;
