import React from 'react';
import Sidebar from './Sidebar';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    // Regular sidebar content
    const sidebarContent = (
        <div className="space-y-6">
            <h3 className="text-lg font-medium">Layer Controls</h3>
            <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <Label htmlFor="base-map" className="text-sm font-medium">Base Map</Label>
                    <Switch id="base-map" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                    <Label htmlFor="vegetation" className="text-sm font-medium">Vegetation</Label>
                    <Switch id="vegetation" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                    <Label htmlFor="topography" className="text-sm font-medium">Topography</Label>
                    <Switch id="topography" />
                </div>
            </div>

            <div className="border-t border-border pt-4">
                <h3 className="text-lg font-medium mb-3">Selected Area</h3>
                <RadioGroup defaultValue="bratislava">
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="bratislava" id="bratislava" />
                        <Label htmlFor="bratislava">Bratislava</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="zilina" id="zilina" />
                        <Label htmlFor="zilina">Žilina</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="hightatras" id="hightatras" />
                        <Label htmlFor="hightatras">High Tatras</Label>
                    </div>
                </RadioGroup>
            </div>

            <Button variant="outline" className="w-full">
                Custom Select
            </Button>
        </div>
    );

    // Expanded dashboard content
    const expandedContent = (
        <div className="space-y-8">
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">Dashboard</h2>
            </div>

            <div className="space-x-2 border-b pb-4">
                <Button variant="default">Carbon</Button>
                <Button variant="outline">Environmental</Button>
            </div>

            <Card className="p-4">
                <h3 className="text-lg font-medium mb-2">Carbon Sequestration</h3>
                <div className="h-[200px] bg-muted rounded flex items-center justify-center">
                    <p className="text-muted-foreground">Carbon Sequestration Chart</p>
                </div>
            </Card>

            <div className="space-y-4">
                <Label className="text-sm font-medium">Tree Density (trees/ha)</Label>
                <div className="h-4 w-full bg-muted rounded overflow-hidden">
                    <div className="h-full bg-primary w-1/2"></div>
                </div>
                <div className="flex justify-between text-sm text-muted-foreground">
                    <span>500</span>
                    <span>2500</span>
                    <span>5000</span>
                </div>
                <div className="flex space-x-2">
                    <Button variant="outline" size="sm">Low (1000)</Button>
                    <Button variant="default" size="sm">Medium (2500)</Button>
                    <Button variant="outline" size="sm">High (4000)</Button>
                </div>
            </div>

            <div>
                <h3 className="text-lg font-medium mb-4">Environmental Impact</h3>
                <div className="grid grid-cols-3 gap-4">
                    <Card className="p-3 text-center">
                        <p className="text-sm font-medium">Temperature</p>
                        <p className="text-lg text-primary">-1.2°C</p>
                    </Card>
                    <Card className="p-3 text-center">
                        <p className="text-sm font-medium">Humidity</p>
                        <p className="text-lg text-primary">+8%</p>
                    </Card>
                    <Card className="p-3 text-center">
                        <p className="text-sm font-medium">Dust</p>
                        <p className="text-lg text-primary">-14%</p>
                    </Card>
                </div>
            </div>
        </div>
    );

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
                <Sidebar expandedContent={expandedContent}>
                    {sidebarContent}
                </Sidebar>
            </div>
        </div>
    );
};

export default Layout;
