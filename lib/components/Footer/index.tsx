import { FC } from "react";
import {
  LIBRARIES_USED_LINKS,
  SOCIAL_LINKS,
} from "../../../constants/SocialLinks";
import classes from "./Footer.module.css";

export const Footer: FC = () => {
  return (
    <div className={classes.root}>
      <div className={classes.socialLinks}>
        {SOCIAL_LINKS.map((socialLink) => (
          <a
            href={socialLink.link}
            key={socialLink.link}
            target={"_blank"}
            rel={"noreferrer"}
          >
            {<socialLink.component />}
          </a>
        ))}
      </div>
      <p>©{new Date().getFullYear()} All Rights Reserved.</p>
      <p className={classes.builtByText}>
        Built with&nbsp;
        {LIBRARIES_USED_LINKS.map((externalLink) => (
          <a
            key={externalLink.link}
            href={externalLink.link}
            target={"_blank"}
            rel={"noreferrer nofollow"}
          >
            <span>{<externalLink.component />}</span>
          </a>
        ))}
      </p>
    </div>
  );
};
