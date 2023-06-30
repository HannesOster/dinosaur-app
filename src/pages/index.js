import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { dinosaurs } from "../utils/dinosaurs";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Dinosaur App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ul>
        {dinosaurs.map((dinosaur) => {
          return (
            <li key={dinosaur.id}>
              {dinosaur.name}
              <Link href={`/species/${dinosaur.id}`}>Details</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
