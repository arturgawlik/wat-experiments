import styles from "./page.module.css";

export default async function Home() {
  const { content } = await (
    await fetch("http://node.plt.local", { cache: "no-store" })
  ).json();
  return (
    <div className={styles.page}>
      <main className={styles.main}>${content}</main>
    </div>
  );
}
