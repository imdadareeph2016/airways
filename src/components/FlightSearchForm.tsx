
import { useState } from "react";
import { Calendar, PlaneLanding, PlaneTakeoff, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

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
  const [openFrom, setOpenFrom] = useState(false);
  const [openTo, setOpenTo] = useState(false);

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
              <Popover open={openFrom} onOpenChange={setOpenFrom}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={openFrom}
                    className="w-full justify-between"
                  >
                    <div className="flex items-center">
                      <PlaneTakeoff className="mr-2 h-4 w-4 text-gray-500" />
                      {fromAirport
                        ? airports.find((airport) => airport.code === fromAirport)?.code
                        : "Search airports..."}
                    </div>
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-full p-0">
                  <Command>
                    <CommandInput placeholder="Search airports..." />
                    <CommandEmpty>No airport found.</CommandEmpty>
                    <CommandGroup>
                      {airports.map((airport) => (
                        <CommandItem
                          key={airport.code}
                          value={airport.code}
                          onSelect={(value) => {
                            setFromAirport(value);
                            setOpenFrom(false);
                          }}
                        >
                          <Check
                            className={cn(
                              "mr-2 h-4 w-4",
                              fromAirport === airport.code ? "opacity-100" : "opacity-0"
                            )}
                          />
                          <div>
                            <span className="font-medium">{airport.code}</span> -{" "}
                            {airport.city} ({airport.name})
                          </div>
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </Command>
                </PopoverContent>
              </Popover>
            </div>

            <div className="space-y-2">
              <Label>To</Label>
              <Popover open={openTo} onOpenChange={setOpenTo}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={openTo}
                    className="w-full justify-between"
                  >
                    <div className="flex items-center">
                      <PlaneLanding className="mr-2 h-4 w-4 text-gray-500" />
                      {toAirport
                        ? airports.find((airport) => airport.code === toAirport)?.code
                        : "Search airports..."}
                    </div>
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-full p-0">
                  <Command>
                    <CommandInput placeholder="Search airports..." />
                    <CommandEmpty>No airport found.</CommandEmpty>
                    <CommandGroup>
                      {airports.map((airport) => (
                        <CommandItem
                          key={airport.code}
                          value={airport.code}
                          onSelect={(value) => {
                            setToAirport(value);
                            setOpenTo(false);
                          }}
                        >
                          <Check
                            className={cn(
                              "mr-2 h-4 w-4",
                              toAirport === airport.code ? "opacity-100" : "opacity-0"
                            )}
                          />
                          <div>
                            <span className="font-medium">{airport.code}</span> -{" "}
                            {airport.city} ({airport.name})
                          </div>
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </Command>
                </PopoverContent>
              </Popover>
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
