import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface ExpandedSidebarContentProps {
    zoneName: string;
}

const ExpandedSidebarContent: React.FC<ExpandedSidebarContentProps> = ({ zoneName }) => {
    const [treeDensity, setTreeDensity] = useState(2500);

    return (
        <div className="space-y-6">
            <Tabs defaultValue="carbon">
                <TabsList className="w-full">
                    <TabsTrigger value="carbon" className="flex-1">Carbon</TabsTrigger>
                    <TabsTrigger value="environmental" className="flex-1">Environmental</TabsTrigger>
                </TabsList>

                <TabsContent value="carbon" className="space-y-6 mt-4">
                    <div className="bg-white rounded-md p-4 border border-border">
                        <h3 className="text-md font-medium mb-2">Carbon Sequestration Over 30 Years</h3>
                        <div className="h-[200px] bg-slate-100 rounded flex items-center justify-center text-muted-foreground">
                            Carbon Sequestration Chart Placeholder
                        </div>
                    </div>

                    <div className="space-y-3">
                        <h3 className="text-sm font-medium">Tree Density (trees/ha)</h3>
                        <Slider
                            value={[treeDensity]}
                            min={500}
                            max={5000}
                            step={100}
                            onValueChange={(value: number[]) => setTreeDensity(value[0])}
                            className="my-2"
                        />
                        <div className="flex justify-between text-xs text-muted-foreground">
                            <span>500</span>
                            <span>5000</span>
                        </div>
                        <div className="flex gap-2 mt-2">
                            <Button variant="outline" size="sm" onClick={() => setTreeDensity(1000)}>Low (1000)</Button>
                            <Button variant="outline" size="sm" onClick={() => setTreeDensity(2500)}>Medium (2500)</Button>
                            <Button variant="outline" size="sm" onClick={() => setTreeDensity(4000)}>High (4000)</Button>
                        </div>
                        <div className="text-sm mt-2">
                            Current density: <span className="font-semibold">{treeDensity} trees/ha</span>
                        </div>

                        <div className="mt-4 text-sm">
                            <div className="font-medium">Total: 240 tons CO₂ over 30 years</div>
                        </div>
                    </div>
                </TabsContent>

                <TabsContent value="environmental" className="space-y-4 mt-4">
                    <h3 className="text-md font-medium">Environmental Impact</h3>
                    <div className="grid grid-cols-3 gap-3">
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
                </TabsContent>
            </Tabs>
        </div>
    );
};

export default ExpandedSidebarContent;
