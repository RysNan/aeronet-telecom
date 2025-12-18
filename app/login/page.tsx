"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const result = await res.json();

      if (res.ok) {
        // Logika pengalihan berdasarkan Role dari response backend-mu
        const role = result.data.role;
        
        if (role === "admin") {
          router.push("/dashboardAdmin");
        } else {
          router.push("/dashboardPelanggan");
        }
        
        // Memastikan middleware membaca cookie terbaru
        router.refresh(); 
      } else {
        setError(result.message || "Login gagal, silakan cek kembali.");
      }
    } catch (err) {
      setError("Terjadi kesalahan jaringan.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="p-8 bg-white shadow-md rounded-lg w-96">
        <h1 className="text-xl font-bold mb-4">Login</h1>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        
        <input 
          type="email" 
          placeholder="Email" 
          className="w-full p-2 mb-4 border rounded"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input 
          type="password" 
          placeholder="Password" 
          className="w-full p-2 mb-6 border rounded"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        
        <button 
          type="submit" 
          disabled={loading}
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 disabled:bg-gray-400"
        >
          {loading ? "Sabar ya..." : "Masuk"}
        </button>
      </form>
    </main>
  );
}