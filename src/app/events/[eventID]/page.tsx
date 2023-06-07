import styles from "./page.module.scss";
import { Event } from "@prisma/client";
import { getServerSession } from "next-auth";
import { prisma } from "@/lib/prisma";
import { Metadata } from "next";

interface Props {
  params: { eventID: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const event = await prisma.event.findUnique({
    where: {
      id: params.eventID,
    },
  });
  return { title: `Event page for ${event?.title}` };
}

export default async function EventPage({ params }: Props) {
  const session = await getServerSession();
  const isSignedIn = !!session;

  const event = await prisma.event.findUnique({
    where: {
      id: params.eventID,
    },
  });
  const { id, title, description, startDate, endDate } = event ?? {};

  return (
    <main className={styles.main}>
      <p>{id}</p>
      <p>{title}</p>
      <p>{description}</p>
      <p>{new Date(startDate ?? "").toDateString()}</p>
      <p>{new Date(endDate ?? "").toDateString()}</p>
      {isSignedIn && <button>Sign up</button>}
    </main>
  );
}
