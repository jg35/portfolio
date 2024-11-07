import jwt from "jsonwebtoken";

export function getToken(request: Request) {
  const token = request.headers.get("Authorization")?.split("Bearer ")[1] || "";
  if (!token) {
    throw new Error("No token");
  }
  return token;
}

export function getCurrentUser(token: string) {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return decoded.userId;
  } catch (e) {
    return Response.json({ error: e }, { status: 400 });
  }
}
