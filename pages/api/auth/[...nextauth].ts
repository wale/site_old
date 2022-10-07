import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "~/lib/prisma";
import { SignInCallback } from "~/lib/next-auth/callbackParams";

export default NextAuth({
    adapter: PrismaAdapter(prisma),
    providers: [
        GithubProvider({
            clientId: process.env.GH_CLIENT_ID,
            clientSecret: process.env.GH_CLIENT_SECRET,
        }),
    ],
    pages: {
        signIn: "/auth/signin",
    },
    callbacks: {
        async session({ session, token, user }: SignInCallback) {
            session.user.role = user.role;
            return session;
        },
    },
});
