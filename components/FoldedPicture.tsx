export const FoldedPicture = () => {
    return (
        <picture>
            <source
                srcSet="/img/icon_expanded.svg"
                media="(min-width: 800px)"
            />
            <img src="/img/icon.svg" alt="" />
        </picture>
    );
};
