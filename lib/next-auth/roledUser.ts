import { User } from "next-auth";   
import { Role } from "@prisma/client";

export interface RoledUser extends User {
    id: string;
    role?: Role;
}