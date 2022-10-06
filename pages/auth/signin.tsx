import { Container, LinkGroup } from "~/components/Containers";
import { FoldedPicture } from "~/components/FoldedPicture";
import { SignInComponent } from "~/components/SignInComps";

import { useSession, getProviders, signIn } from "next-auth/react";
import { LinkButton } from "~/components/LinkTypes";


export default function SignIn({providers}) {
    const { status } = useSession();

    return (
        <Container>
            <SignInComponent>
                <FoldedPicture />
                <h1 className="text-2xl font-bold">Login</h1>
                {status != "authenticated" ? (
                    <>
                    <h2 className="text-xl font-semibold">Providers</h2>
                    <LinkGroup>
                        {Object.values(providers).map((provider: {id: string, name: string}) => (
                            <LinkButton key={provider.name} 
                                onclick={() => signIn(provider.id)} name={`Sign in with ${provider.name}`} />
                        ))}
                    </LinkGroup>
                    </>
                ) : (
                    <>
                        <h2 className="text-xl font-semibold">You are logged in.</h2>
                        <LinkGroup>
                            <LinkButton href="/" name="Return Home"/>
                        </LinkGroup>
                    </>
                )}
            </SignInComponent>
        </Container>
    )
}

export async function getServerSideProps(context) {
    const providers = await getProviders()
    return {
      props: { providers },
    }
}