import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="p-5">
      P icons created by Freepik -{" "}
      <a
        className="myunderline"
        href="https://www.flaticon.com/free-icons/p"
        title="p icons"
      >
        Flaticon
      </a>
      <p>
        <a className="myunderline" href="https://skfb.ly/ou69O">
          Retro Computer
        </a>{" "}
        by Urpo is licensed under
        <a
          className="myunderline"
          href="http://creativecommons.org/licenses/by/4.0/"
          title="p icons"
        >
          Creative Commons Attribution
        </a>
      </p>
    </div>
  );
};

export default Footer;
