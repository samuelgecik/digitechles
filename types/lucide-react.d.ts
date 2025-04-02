declare module 'lucide-react' {
    import { FC, SVGProps } from 'react';

    interface IconProps extends SVGProps<SVGSVGElement> {
        size?: string | number;
        color?: string;
        strokeWidth?: string | number;
    }

    type Icon = FC<IconProps>;

    // Export all icons from lucide-react as Icon components
    export const AlertCircle: Icon;
    export const ArrowRight: Icon;
    export const Check: Icon;
    export const ChevronDown: Icon;
    export const ChevronLeft: Icon;
    export const ChevronRight: Icon;
    export const ChevronUp: Icon;
    export const ChevronsUpDown: Icon;
    export const CircleHelp: Icon;
    export const Clipboard: Icon;
    export const Copy: Icon;
    export const Download: Icon;
    export const ExternalLink: Icon;
    export const File: Icon;
    export const FileText: Icon;
    export const HelpCircle: Icon;
    export const Image: Icon;
    export const Laptop: Icon;
    export const Loader: Icon;
    export const Menu: Icon;
    export const MessageSquare: Icon;
    export const Moon: Icon;
    export const MoreHorizontal: Icon;
    export const Plus: Icon;
    export const Search: Icon;
    export const Settings: Icon;
    export const Sun: Icon;
    export const Trash: Icon;
    export const Twitter: Icon;
    export const User: Icon;
    export const X: Icon;
    // Add more icons as needed based on what you're using
}
