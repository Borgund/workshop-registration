"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./MenuItem.module.scss";

import React from "react";
import AdminLink from "../auth/AdminLink";

type MenuItemProps = {
  href: string;
  text: string;
  icon: string;
  admin?: boolean;
};

const MenuItem = ({ href, text, icon, admin }: MenuItemProps) => {
  const path = usePathname();
  const isActive = path === href;
  return (
    <>
      <li className={(isActive && styles.active) || ""}>
        {admin ? (
          <AdminLink href={href}>
            {icon}
            {text}
          </AdminLink>
        ) : (
          <Link href={href}>
            {icon}
            {text}
          </Link>
        )}
      </li>
    </>
  );
};

export default MenuItem;
