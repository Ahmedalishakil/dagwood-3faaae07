import { Clock, Truck, MapPin, Banknote } from "lucide-react";

const items = [
  { icon: Clock, text: "Open Daily" },
  { icon: MapPin, text: "Free Pickup" },
  { icon: Truck, text: "Fast Delivery" },
  { icon: Banknote, text: "Cash on Delivery" },
];

const TrustBar = () => {
  return (
    <div className="bg-secondary/80 border-b border-border">
      <div className="mx-auto max-w-7xl flex items-center justify-center gap-4 px-4 py-2.5 sm:gap-8">
        {items.map((item) => (
          <div key={item.text} className="flex items-center gap-1.5">
            <item.icon className="h-3.5 w-3.5 text-primary" />
            <span className="text-[11px] font-semibold text-muted-foreground sm:text-xs">
              {item.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustBar;