import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import LogoutButton from "@/app/components/LogoutButton"; 


export default async function AdminPage() {
  const cookieStore = await cookies();
  const role = cookieStore.get("userRole")?.value;

  if (role !== "admin") {
    redirect("/login"); // Tendang jika bukan admin
  }

  return (
    <div>
        <main> Selamat datang Admin
            <LogoutButton />
        </main>
    </div>
  );
}