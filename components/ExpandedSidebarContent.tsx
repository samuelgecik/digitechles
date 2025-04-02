import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

interface ExpandedSidebarContentProps {
    zoneName: string;
}

const ExpandedSidebarContent: React.FC<ExpandedSidebarContentProps> = ({ zoneName }) => {
    const [carbonOffset, setCarbonOffset] = useState(0);
    const [land, setLand] = useState(0);
    const [renewable, setRenewable] = useState(0);
    const [treeDensity, setTreeDensity] = useState(2500);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTreeDensity(Number(e.target.value));
    };

    return (
        <div className="space-y-6">
            <Tabs defaultValue="carbon">
                <TabsList className="w-full">
                    <TabsTrigger value="carbon" className="flex-1">Carbon</TabsTrigger>
                    <TabsTrigger value="investments" className="flex-1">Investments</TabsTrigger>
                </TabsList>
                <TabsContent value="carbon" className="space-y-4 pt-4">
                    <div className="space-y-2">
                        <Label>Carbon Offset (tons)</Label>
                        <Slider
                            value={[carbonOffset]}
                            max={100}
                            step={1}
                            onValueChange={([value]) => setCarbonOffset(value)}
                        />
                        <div className="flex justify-between">
                            <span>0</span>
                            <span>{carbonOffset}</span>
                            <span>100</span>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label>Tree Density (per hectare)</Label>
                        <Input
                            type="number"
                            value={treeDensity}
                            onChange={handleInputChange}
                            min={500}
                            max={10000}
                        />
                    </div>
                </TabsContent>
                <TabsContent value="investments" className="space-y-4 pt-4">
                    <div className="space-y-2">
                        <Label>Land Acquisition (hectares)</Label>
                        <Slider
                            value={[land]}
                            max={1000}
                            step={10}
                            onValueChange={([value]) => setLand(value)}
                        />
                        <div className="flex justify-between">
                            <span>0</span>
                            <span>{land}</span>
                            <span>1000</span>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label>Renewable Energy (MWh)</Label>
                        <Slider
                            value={[renewable]}
                            max={500}
                            step={10}
                            onValueChange={([value]) => setRenewable(value)}
                        />
                        <div className="flex justify-between">
                            <span>0</span>
                            <span>{renewable}</span>
                            <span>500</span>
                        </div>
                    </div>
                </TabsContent>
            </Tabs>
            <Button className="w-full">Apply Changes</Button>
        </div>
    );
};

export default ExpandedSidebarContent;
