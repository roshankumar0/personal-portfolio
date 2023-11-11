import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import User from "@/models/user";
export async function GET(req) {
    const currentUserToken = req.cookies.get('loginToken')?.value;
    const currentUserId = jwt.verify(currentUserToken, 'yourSecretKey')
    const user = await User.findById(currentUserId._id).select("-password")
    return NextResponse.json(user)
}