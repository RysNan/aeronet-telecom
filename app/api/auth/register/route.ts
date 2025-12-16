import { connectDB } from "@/app/lib/db";
import { User } from "@/app/models/User";
import { hashPassword } from "@/app/lib/hash";

export async function POST(req: Request) {
  await connectDB();

  const body = await req.json();
  const { name, email, password, role } = body;

  if (!name || !email || !password) {
    return Response.json(
      { message: "Invalid input" },
      { status: 400 }
    );
  }

  const exist = await User.findOne({ email });
  if (exist) {
    return Response.json(
      { message: "Email already exists" },
      { status: 409 }
    );
  }

  const user = await User.create({
    name,
    email,
    password: await hashPassword(password),
    role: role ?? "client",
  });

  return Response.json({
    message: "User created",
    data: {
      id: user._id,
      email: user.email,
      role: user.role,
    },
  });
}
