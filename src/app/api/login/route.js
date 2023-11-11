import { connectDBS } from "@/helper/db";
import User from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from 'bcryptjs';
import jwt from "jsonwebtoken"; // Updated import

connectDBS();

export async function POST(req) {
    const { email, password } = await req.json();

    try {
        const user = await User.findOne({
            email: email
        });

        if (!user) {
            throw new Error("User not found");
        }

        const matchedPassword = await bcrypt.compare(password, user.password);

        if (!matchedPassword) {
            throw new Error("Password doesn't match");
        }

        const token = jwt.sign(
            {
                _id: user._id,
                firstName: user.firstName
            },
            "yourSecretKey"
        );
        const response = NextResponse.json({
            message: "login success",
            success: true,
            user: user
        })
        response.cookies.set("loginToken", token, {
            expiresIn: "1d",
            httpOnly: false
        })

        return response
    } catch (error) {
        return NextResponse.json({
            message: error.message || "User not found or password incorrect",
        });
    }
}
