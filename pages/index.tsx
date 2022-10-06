import { ButtonContainer, HomeContainer } from "~/components/Containers";
import { InfoComponent } from "~/components/InfoComp";
import { FoldedPicture } from "~/components/FoldedPicture";
import { LinkIcon } from "~/components/LinkTypes";

import github from "@iconify-icons/simple-icons/github";
import twitter from "@iconify-icons/simple-icons/twitter";
import mastodon from "@iconify-icons/simple-icons/mastodon";

export default function Home() {
    return (
        <HomeContainer>
            <InfoComponent>
                <FoldedPicture />
                <h1 className="text-2xl font-bold">Duale Siad</h1>
                <h3 className="text-xl font-medium">Programmer, photographer, creative.</h3>
                <ButtonContainer>
                    <LinkIcon href="https://twitter.com/spellsaidwrong" icon={twitter} />
                    <LinkIcon href="https://github.com/wale" icon={github} />
                    <LinkIcon href="https://merveilles.town/@wale" icon={mastodon} />
                </ButtonContainer>
            </InfoComponent>
        </HomeContainer>
    )
}