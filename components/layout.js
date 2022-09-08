import { PlaynetzNavbar } from "./navigation/navbar";

export default function Layout({ children }) {
  return (
    <>
      <PlaynetzNavbar />
      <main className="w-full text-white p-4 h-full min-h-screen flex flex-col  items-center justify-center">{children}</main>
    </>
  );
}
