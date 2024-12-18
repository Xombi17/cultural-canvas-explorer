import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

interface State {
  id: string;
  name: string;
  description: string;
  image: string;
}

const states: State[] = [
  {
    id: "tamil-nadu",
    name: "Tamil Nadu",
    description: "Known for its Dravidian-style temples, classical dance forms, and rich cultural heritage.",
    image: "/placeholder.svg"
  },
  {
    id: "rajasthan",
    name: "Rajasthan",
    description: "Famous for its majestic palaces, colorful festivals, and vibrant desert culture.",
    image: "/placeholder.svg"
  },
  // Add more states here
];

const States = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredStates = states.filter(state =>
    state.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-cultural-maroon mb-8 text-center">
        Explore Indian States
      </h1>
      
      <div className="max-w-xl mx-auto mb-12">
        <Input
          type="search"
          placeholder="Search states..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredStates.map((state) => (
          <Link to={`/states/${state.id}`} key={state.id}>
            <Card className="state-card overflow-hidden group">
              <img
                src={state.image}
                alt={state.name}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="state-card-content">
                <h3 className="text-2xl font-semibold text-white mb-2">
                  {state.name}
                </h3>
                <p className="text-white/90">
                  {state.description}
                </p>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default States;