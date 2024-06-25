import { Inter } from "next/font/google";

const _inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={""}>
      <div>{new Date().toString()}</div>
    </main>
  );
}
