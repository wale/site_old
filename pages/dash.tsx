import { useSession, getSession, signIn } from "next-auth/react";

import { Container, LinkGroup } from "~/components/Containers";
import { DashComponent } from "~/components/DashComps";
import { FoldedPicture } from "~/components/FoldedPicture";
import { LinkButton } from "~/components/LinkTypes";
import { RoledSession } from "~/lib/next-auth/roledSession";
import { RoledUser } from "~/lib/next-auth/roledUser";
import { SessionCallback } from "~/lib/next-auth/useSessionParams";

export default function Dash() {
    let { data: session, status } = useSession();

    if (status === "unauthenticated") {
        return (
            <Container>
                <DashComponent>
                    <FoldedPicture />
                    <h1 className="text-4xl font-black">Permission denied.</h1>
                    <h2 className="text-2xl font-medium">You are not logged in.</h2>
                    <LinkGroup>
                        <LinkButton href="/auth/signin" name="Sign In"/>
                        <LinkButton href="/" name="Return Home" />
                    </LinkGroup>
                </DashComponent>
            </Container>
        )
    } else {
        // @ts-ignore
        if(session.user.role != "ADMIN") {
            return (
                <Container>
                    <DashComponent>
                        <FoldedPicture />
                        <h1 className="text-4xl font-black">Permission denied.</h1>
                        <h2 className="text-2xl font-medium">You do not have administrator privileges.</h2>
                        <LinkGroup>
                            <LinkButton href="/" name="Return Home" />
                        </LinkGroup>
                    </DashComponent>
                </Container>
            )
        } else {
            return (
                <Container>
                    <DashComponent>
                        <FoldedPicture />
                        <h1 className="text-4xl font-black">Welcome!</h1>
                        <h2 className="text-2xl font-medium">You have admin privileges. This is a test.</h2>
                        <LinkGroup>
                            <LinkButton href="/" name="Return Home" />
                        </LinkGroup>
                    </DashComponent>
                </Container>
            )
        }
    }
}

export async function getServerSideProps(ctx) {
    const session = await getSession(ctx)
    return ({props: {session}})
}