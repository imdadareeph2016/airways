
import { useState } from "react";
import { Calendar, PlaneLanding, PlaneTakeoff } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const airports = [
  { code: "DXB", name: "Dubai International", city: "Dubai" },
  { code: "LHR", name: "Heathrow", city: "London" },
  { code: "JFK", name: "John F. Kennedy", city: "New York" },
  { code: "DEL", name: "Indira Gandhi International", city: "Delhi" },
  { code: "BOM", name: "Chhatrapati Shivaji", city: "Mumbai" },
  { code: "SIN", name: "Changi", city: "Singapore" },
  { code: "LAX", name: "Los Angeles International", city: "Los Angeles" },
  { code: "CDG", name: "Charles de Gaulle", city: "Paris" },
];

const FlightSearchForm = () => {
  const [tripType, setTripType] = useState("roundTrip");
  const [fromAirport, setFromAirport] = useState("");
  const [toAirport, setToAirport] = useState("");

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
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="multiCity" id="multiCity" />
              <Label htmlFor="multiCity">Multi-city</Label>
            </div>
          </RadioGroup>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>From</Label>
              <div className="relative">
                <PlaneTakeoff className="absolute left-3 top-3 h-4 w-4 text-gray-500 z-10" />
                <Select value={fromAirport} onValueChange={setFromAirport}>
                  <SelectTrigger className="w-full pl-10">
                    <SelectValue placeholder="Select departure airport" />
                  </SelectTrigger>
                  <SelectContent>
                    {airports.map((airport) => (
                      <SelectItem key={airport.code} value={airport.code}>
                        <span className="font-medium">{airport.code}</span> -{" "}
                        {airport.city} ({airport.name})
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label>To</Label>
              <div className="relative">
                <PlaneLanding className="absolute left-3 top-3 h-4 w-4 text-gray-500 z-10" />
                <Select value={toAirport} onValueChange={setToAirport}>
                  <SelectTrigger className="w-full pl-10">
                    <SelectValue placeholder="Select arrival airport" />
                  </SelectTrigger>
                  <SelectContent>
                    {airports.map((airport) => (
                      <SelectItem key={airport.code} value={airport.code}>
                        <span className="font-medium">{airport.code}</span> -{" "}
                        {airport.city} ({airport.name})
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label>Departure</Label>
              <div className="relative">
                <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                <input type="date" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm pl-10 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" />
              </div>
            </div>
            {tripType === "roundTrip" && (
              <div className="space-y-2">
                <Label>Return</Label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                  <input type="date" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm pl-10 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" />
                </div>
              </div>
            )}
            <div className="space-y-2">
              <Label>Passengers</Label>
              <input type="number" min="1" defaultValue="1" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" />
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
