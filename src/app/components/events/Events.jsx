import React from "react";
import data from "../../../../_data/db.json";
import EventBox from "./EventBox";
import SectionHeader from "./SectionHeader";

// const getEvents = async ()=>{
//     const res = await fetch ("")
//     return res.json()
// }

function Events() {
  // const events = await getEvents()
  // console.log(events)
  return (
    <div>
      {/* <h1>Events</h1> */}
      <section className="section" id="tours">
        <div className="container mx-auto">
          <SectionHeader pretitle={"World Tour"} title={"Upcoming Events"} />
          {/* event box */}
          <EventBox datas={data.events} />
        </div>
      </section>
    </div>
  );
}

export default Events;
