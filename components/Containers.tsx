export const Container = (props) => {
    return (
        <main className="bg-nord0 text-nord4 flex gap-4 h-screen items-center p-2 px-7">
            {props.children}
        </main>
    );
};

export const ButtonContainer = (props) => {
    return (
        <div className="bg-inherit flex-col space-x-2">{props.children}</div>
    );
};

export const LinkGroup = (props) => {
    return (
        <div className="bg-inherit flex-col space-y-2">{props.children}</div>
    );
};
