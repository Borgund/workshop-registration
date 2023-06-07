import Link from "next/link";
import React from "react";
import { SignInButton, SignOutButton } from "../auth/AuthButtons";
import AuthCheck from "../auth/AuthCheck";
import styles from "./Menu.module.scss";
import MenuItem from "./MenuItem";

type MenuProps = {};

const Menu = ({}: MenuProps) => {
  return (
    <>
      <nav className={styles.nav}>
        <ul>
          <MenuItem text="Home" href="/" icon="🏠" />
          <MenuItem text="Events" href="/events" icon="🗓️" />
          <MenuItem text="Admin" href="/admin" icon="🧑‍💻" admin />
          <li>
            <SignInButton />
            <AuthCheck>
              <SignOutButton />
            </AuthCheck>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Menu;
