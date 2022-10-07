import { JWT } from "next-auth/jwt";
import { RoledSession } from "./roledSession";
import { RoledUser } from "./roledUser";

export type SignInCallback = {
    session: RoledSession;
    token: JWT;
    user: RoledUser;
};
