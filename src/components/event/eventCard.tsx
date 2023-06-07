import Link from "next/link";
import React from "react";
import styles from "./eventCard.module.scss";

type eventProps = {
  id: string;
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  published: boolean;
};

export default function EventCard({
  id,
  title,
  description,
  startDate,
  endDate,
  published,
}: eventProps) {
  return (
    <div className={styles.eventCard}>
      <p>{title}</p>
      <p>{description}</p>
      <p>{new Date(startDate).toDateString()}</p>
      <p>{new Date(endDate).toDateString()}</p>
      <Link href={`/events/${id}`}>{id}</Link>
      {published && <p>published</p>}
    </div>
  );
}
