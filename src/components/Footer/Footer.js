import React from "react";
import { MDBFooter } from "mdb-react-ui-kit";

export default function Footer() {
  return (
    <MDBFooter
      className="text-center text-lg-left "
      style={{ backgroundColor: "#D0F0C0", marginBottom: 0 }}
    >
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        &copy; {new Date().getFullYear()} Copyright: <a>Minderacodeacademy</a>
      </div>
    </MDBFooter>
  );
}
