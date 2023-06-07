import styles from "./page.module.scss";
import { EventCard } from "@/components";
import { Event } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import AdminLink from "@/components/auth/AdminLink";

const fetchEvents = async () => {
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

export default async function Page() {
  //const events: Event[] = await getEvents();
  const events: Event[] = await getEvents();
  return (
    <main className={styles.main}>
      <p>{events.length}</p>
      {events && events.map((event) => <EventCard key={event.id} {...event} />)}
      <AdminLink href="admin/events/addevent">Add event</AdminLink>
    </main>
  );
}
