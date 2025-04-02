import React from 'react';
import Sidebar from './Sidebar';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';

interface LayoutProps {
    children: React.ReactNode;
    sidebarContent?: React.ReactNode;
    expandedContent?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children, sidebarContent, expandedContent }) => {
    return (
        <div className="flex h-screen flex-col">
            <header className="bg-white border-b border-border h-16 flex items-center px-6">
                <h1 className="text-xl font-bold text-primary">DIGITECHLES</h1>
                <div className="ml-auto space-x-2">
                    <Button variant="outline" size="sm">Controls</Button>
                    <Button variant="outline" size="sm">Help</Button>
                </div>
            </header>

            <div className="flex flex-1 overflow-hidden">
                <div className="flex-1 bg-slate-100 relative">
                    {children}
                </div>
                {sidebarContent && (
                    <Sidebar expandedContent={expandedContent}>
                        {sidebarContent}
                    </Sidebar>
                )}
            </div>
        </div>
    );
};

export default Layout;
