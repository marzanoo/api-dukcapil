"use client";

import { useRouter } from "next/navigation";
import Button from "../atoms/Button";

export default function Navbar() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };

  return (
    <nav className="bg-blue-500 p-4 text-white flex justify-between">
      <h1 className="text-lg font-bold">Dukcapil Admin</h1>
      <Button text="Logout" onClick={handleLogout} className="bg-red-500" />
    </nav>
  );
}
