import { EventForm } from "@/components";
import { EventInput } from "@/types/event";
import React from "react";

export default function Page() {
  async function createEvent(event: EventInput) {
    "use server";
    const eventObj = { ...event };
    console.log(eventObj, event);
  }

  return (
    <>
      <EventForm action={createEvent} />
    </>
  );
}
