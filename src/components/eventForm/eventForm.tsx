"use client";
import React, { useState } from "react";
import styles from "./eventForm.module.scss";
import { experimental_useFormStatus } from "react-dom";
import { Event } from "@prisma/client";
import { EventInput } from "@/types/event";

type eventFormProps = {
  title?: string;
  description?: string;
  startDate?: Date;
  endDate?: Date;
  action?: (event: EventInput) => void;
};

export default function EventForm({
  title,
  description,
  startDate,
  endDate,
  action,
}: eventFormProps) {
  const { pending } = experimental_useFormStatus();
  return (
    <form
      name="event"
      className={styles.form}
      method="post"
      action="/api/events"
      // action={(formdata) => {
      //   const options = {
      //     title: formdata.get("title") ?? "",
      //     description: formdata.get("description") ?? "",
      //     startDate: new Date(formdata.get("startDate")?.toString() ?? ""),
      //     endDate: new Date(formdata.get("endDate")?.toString() ?? ""),
      //     spots: formdata.get("spots") ?? 0,
      //     published: formdata.get("published") ?? false,
      //     authorId: "",
      //   } as EventInput;
      //   action?.(options);
      // }}
    >
      <label>
        Title:
        <input type="text" name="title" />
      </label>
      <label>
        Description:
        <input type="text" name="description" />
      </label>
      <label>
        Start date:
        <input type="date" name="startDate" />
      </label>
      <label>
        End date:
        <input type="date" name="endDate" />
      </label>
      <label>
        Spots:
        <input type="number" name="spots" />
      </label>
      <label>
        Published:
        <input type="checkbox" name="published" />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}
