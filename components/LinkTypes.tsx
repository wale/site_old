import React from "react";
import { Icon, IconifyIcon } from "@iconify/react";

export interface LinkChild {
    name?: string;
    href?: string;
    alt?: string;
    onclick?: any;
}

export interface LinkIconProps extends LinkChild {
    icon: IconifyIcon;
}

export class LinkButton<P extends LinkChild> extends React.Component<P> {
    public render() {
        const { name, href, onclick } = this.props;
        return (
            <button
                onClick={onclick}
                className="rounded-sm font-medium underline bg-nord0 text-nord4 hover:text-nord5 hover:bg-nord2"
            >
                <a href={href}>{name}</a>
            </button>
        );
    }
}

export class ElevatedLinkButton<
    P extends LinkChild
> extends React.Component<P> {
    public render() {
        const { name, href } = this.props;
        return (
            <button className="rounded-sm font-medium underline px-2 py-2 bg-nord1 text-nord4 hover:text-nord5 hover:bg-nord2">
                <a href={href}>{name}</a>
            </button>
        );
    }
}

export class LinkIcon<P extends LinkIconProps> extends React.Component<P> {
    public render() {
        const { href, icon } = this.props;

        return (
            <button className="rounded-sm font-medium px-2 py-2 bg-nord1 text-nord4 hover:text-nord5 hover:bg-nord2">
                <a href={href}>
                    <Icon icon={icon} fontSize={24} />
                </a>
            </button>
        );
    }
}
