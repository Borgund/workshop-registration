import styles from "./page.module.scss";
import { EventCard } from "@/components";
import EventForm, { EventInput } from "@/components/eventForm/eventForm";
import { Event } from "@prisma/client";
import { getServerSession } from "next-auth";
import { prisma } from "@/lib/prisma";

export const fetchEvents = async () => {
  const events: Event[] = await fetch("http://localhost:3000/api/events")
    .then((res) => res.json())
    .then((res) => JSON.parse(res));
  return events || [];
};
async function getEvents() {
  return await prisma.event.findMany({
    orderBy: [{ startDate: "desc" }, { endDate: "desc" }],
  });
}

async function createEvent(event: EventInput) {
  "use server";
  const eventObj = { ...event };
  console.log(eventObj, event);
}

export default async function Events() {
  //const events: Event[] = await getEvents();
  const events: Event[] = await getEvents();
  console.log(events);
  return (
    <main className={styles.main}>
      <p>{events.length}</p>
      {events && events.map((event) => <EventCard key={event.id} {...event} />)}
      <EventForm action={createEvent} />
    </main>
  );
}
