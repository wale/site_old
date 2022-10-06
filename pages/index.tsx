import { ButtonContainer, Container, LinkGroup } from "~/components/Containers";
import { InfoComponent } from "~/components/InfoComp";
import { FoldedPicture } from "~/components/FoldedPicture";
import { LinkButton, LinkIcon } from "~/components/LinkTypes";

import github from "@iconify-icons/simple-icons/github";
import twitter from "@iconify-icons/simple-icons/twitter";
import mastodon from "@iconify-icons/simple-icons/mastodon";
import instagram from "@iconify-icons/simple-icons/instagram";

import mail from "@iconify-icons/gg/mail";

import { useSession, signIn, signOut } from "next-auth/react"

export default function Home() {
    const { status } = useSession();

    return (
        <Container>
            <InfoComponent>
                <FoldedPicture />
                <h1 className="text-2xl font-bold">Duale Siad</h1>
                <h3 className="text-xl font-medium">Programmer, photographer, creative.</h3>
                <LinkGroup>
                    <ButtonContainer>
                        <LinkButton href="/blog" name="Blog" />
                        <LinkButton href="/now" name="Now" />
                        <LinkButton href="/about" name="About" />
                        {status === "authenticated" ? <LinkButton onclick={() => signOut()} name="Sign Out"/> : <LinkButton href="/auth/signin" name="Sign In"/>}
                    </ButtonContainer>  
                    <ButtonContainer>
                        <LinkIcon href="https://twitter.com/spellsaidwrong" icon={twitter} />
                        <LinkIcon href="https://instagram.com/spellsaidwrong" icon={instagram} />
                        <LinkIcon href="https://github.com/wale" icon={github} />
                        <LinkIcon href="https://merveilles.town/@wale" icon={mastodon} />
                        <LinkIcon href="&#109;ailto&#58;%6De%4&#48;&#119;a&#37;6C&#101;&#46;%&#54;1u'>m&#101;&#64;w&#97;&#108;e&#46;au" icon={mail} />
                    </ButtonContainer>
                </LinkGroup>
            </InfoComponent>
        </Container>
    )
}