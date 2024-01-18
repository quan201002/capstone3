import React from "react";
import { useParams } from "react-router-dom";

export default function Booking() {
  let phim = useParams();
  console.log("phim la", phim);
  return <div>Booking</div>;
}
