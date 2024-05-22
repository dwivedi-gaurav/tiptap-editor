"use client";
import Notes from "./components/notes/Notes";
import ReduxProvider from "@/store/reduxProvider";
import Navbar from "@/components/navbar/Navbar";

export default function Home() {
  return (
    <ReduxProvider>
      <Navbar />
      <Notes />
    </ReduxProvider>
  );
}
