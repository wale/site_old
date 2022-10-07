import { RoledSession } from "./roledSession";

export type SessionCallback = {
    readonly data?: RoledSession;
    readonly status: Status;
};

export type Status = "authenticated" | "unauthenticated" | "loading";
