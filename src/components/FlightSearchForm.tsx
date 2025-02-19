
import { useState } from "react";
import { Calendar, PlaneLanding, PlaneTakeoff } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const FlightSearchForm = () => {
  const [tripType, setTripType] = useState("roundTrip");

  return (
    <Card className="w-full max-w-4xl backdrop-blur-sm bg-white/90 shadow-lg animate-fade-in">
      <CardContent className="p-6">
        <div className="space-y-6">
          <RadioGroup
            defaultValue="roundTrip"
            className="flex space-x-4"
            onValueChange={setTripType}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="roundTrip" id="roundTrip" />
              <Label htmlFor="roundTrip">Round trip</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="oneWay" id="oneWay" />
              <Label htmlFor="oneWay">One way</Label>
            </div>
          </RadioGroup>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>From</Label>
              <div className="relative">
                <PlaneTakeoff className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                <Input className="pl-10" placeholder="Departure city" />
              </div>
            </div>
            <div className="space-y-2">
              <Label>To</Label>
              <div className="relative">
                <PlaneLanding className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                <Input className="pl-10" placeholder="Arrival city" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label>Departure</Label>
              <div className="relative">
                <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                <Input className="pl-10" type="date" />
              </div>
            </div>
            {tripType === "roundTrip" && (
              <div className="space-y-2">
                <Label>Return</Label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                  <Input className="pl-10" type="date" />
                </div>
              </div>
            )}
            <div className="space-y-2">
              <Label>Passengers</Label>
              <Input type="number" min="1" defaultValue="1" />
            </div>
          </div>

          <Button className="w-full bg-accent hover:bg-accent/90 text-white">
            Search flights
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default FlightSearchForm;
