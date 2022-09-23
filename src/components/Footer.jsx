// IMPORTS:
import React from "react";
import { useLocation } from "react-router-dom";

// FOOTER COMPONENT:
function Footer() {
  // Constants
  const location = useLocation();

  return (
    <>
      {location.pathname === "/sign-in" ? (
        <></>
      ) : location.pathname === "/sign-up" ? (
        <></>
      ) : (
        <footer className="footer footer_place_mesto">
          <p className="footer__copyright" lang="en">
            &copy;&nbsp;2022 Mesto Russia
          </p>
        </footer>
      )}
    </>
  );
}

export default Footer;
