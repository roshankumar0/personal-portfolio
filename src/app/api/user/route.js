import { connectDBS } from "@/helper/db";
import User from "@/models/user";
import bycript from 'bcryptjs'
import { NextResponse } from "next/server";

connectDBS()
export async function POST(req) {
    const { firstName, lastName, email, password } = await req.json()
    try {
        const haspassword = await bycript.hash(password, 10)
        console.log(haspassword)
        const user = new User({
            firstName, lastName, email, password: haspassword
        })
        const allSavedUser = await user.save()
        return NextResponse.json(allSavedUser)
    } catch (error) {
        return NextResponse.json({ message: "Internal server" })
    }
}