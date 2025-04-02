import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '../lib/utils';

interface SidebarProps {
    children: React.ReactNode;
    expandedContent?: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ children, expandedContent }) => {
    const [expanded, setExpanded] = useState(false);

    const toggleExpand = () => {
        setExpanded(!expanded);
    };

    return (
        <div
            className={cn(
                "h-full bg-white border-l border-border shadow-md transition-all duration-300 ease-in-out relative",
                expanded ? "w-[70%]" : "w-[300px]"
            )}
        >
            <button
                onClick={toggleExpand}
                className="absolute left-2 top-4 p-2 bg-primary text-white rounded-full hover:bg-primary-600 transition-colors"
                aria-label={expanded ? "Collapse sidebar" : "Expand sidebar"}
            >
                {expanded ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
            </button>

            <div className={cn(
                "p-6 pt-10 h-full overflow-y-auto",
                expanded ? "hidden" : "block"
            )}>
                {children}
            </div>

            <div className={cn(
                "p-6 pt-10 h-full overflow-y-auto",
                expanded ? "block" : "hidden"
            )}>
                {expandedContent ||
                    <div className="flex items-center justify-center h-full">
                        <p className="text-muted-foreground text-center">No expanded content available</p>
                    </div>
                }
            </div>
        </div>
    );
};

export default Sidebar;
