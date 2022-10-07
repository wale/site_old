import { Role } from "@prisma/client";

import { Session } from "next-auth";
import { RoledUser } from "./roledUser";

export interface RoledSession extends Session {
    role?: Role;
    user?: RoledUser;
}
