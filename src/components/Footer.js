import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  const name = "Sitipankaj";
  return (
    <footer>
      <p>
        Copyright ⓒ {name} {year}
      </p>
    </footer>
  );
}

export default Footer;
