import styles from "./page.module.scss";
import { getServerSession } from "next-auth";

export default async function Page() {
  const session = await getServerSession();

  return (
    <main className={styles.main}>
      <p>{JSON.stringify(session?.user)}</p>
    </main>
  );
}
