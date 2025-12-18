"use client"; // Harus Client Component untuk menangani onClick

import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    const res = await fetch("/api/auth/logout", { method: "POST" });
    if (res.ok) {
      router.push("/login");
      router.refresh();
    }
  };

  return (
    <button 
      onClick={handleLogout}
      className="mt-8 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
    >
      Logout
    </button>
  );
}