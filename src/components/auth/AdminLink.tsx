"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function AdminLink({
  href,
  children,
  ...rest
}: {
  children: React.ReactNode;
  href: string;
}) {
  const { data: session, status } = useSession();
  if (status === "authenticated") {
    return (
      <Link href={href} {...rest}>
        {children}
      </Link>
    );
  } else {
    return <></>;
  }
}
