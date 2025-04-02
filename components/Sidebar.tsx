import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '../lib/utils';
import { Button } from '@/components/ui/button';

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
                "p-4 pt-12 h-full overflow-y-auto",
                expanded ? "hidden" : "block"
            )}>
                {children}
            </div>

            <div className={cn(
                "p-4 pt-12 h-full overflow-y-auto",
                expanded ? "block" : "hidden"
            )}>
                {expandedContent}
            </div>
        </div>
    );
};

export default Sidebar;
