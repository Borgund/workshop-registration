"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./MenuItem.module.scss";

import React from "react";

type MenuItemProps = { href: string; text: string; icon: string };

const MenuItem = ({ href, text, icon }: MenuItemProps) => {
  const path = usePathname();
  const isActive = path === href;
  return (
    <>
      <li className={(isActive && styles.active) || ""}>
        <Link href={href}>
          {icon}
          {text}
        </Link>
      </li>
    </>
  );
};

export default MenuItem;
