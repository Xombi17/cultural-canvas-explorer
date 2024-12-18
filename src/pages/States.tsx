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
    description: "Known for its magnificent Dravidian temples, classical Bharatanatyam dance, and vibrant Carnatic music tradition.",
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800"
  },
  {
    id: "rajasthan",
    name: "Rajasthan",
    description: "Home to majestic palaces, colorful festivals, and the Thar Desert's rich cultural heritage.",
    image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=800"
  },
  {
    id: "kerala",
    name: "Kerala",
    description: "Famous for its backwaters, Kathakali dance form, and traditional Ayurvedic practices.",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800"
  },
  {
    id: "gujarat",
    name: "Gujarat",
    description: "Renowned for its vibrant Garba dance, traditional textiles, and the Great Rann of Kutch.",
    image: "https://images.unsplash.com/photo-1609948543911-0aa1c6dd1c13?auto=format&fit=crop&w=800"
  },
  {
    id: "west-bengal",
    name: "West Bengal",
    description: "Known for Durga Puja celebrations, Bengali literature, and rich artistic traditions.",
    image: "https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&w=800"
  },
  {
    id: "maharashtra",
    name: "Maharashtra",
    description: "Home to the vibrant city of Mumbai, Warli art, and the ancient Ajanta and Ellora caves.",
    image: "https://images.unsplash.com/photo-1566552881560-0be862a7c445?auto=format&fit=crop&w=800"
  },
  {
    id: "punjab",
    name: "Punjab",
    description: "Famous for Bhangra dance, rich cuisine, and the Golden Temple of Amritsar.",
    image: "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?auto=format&fit=crop&w=800"
  },
  {
    id: "uttar-pradesh",
    name: "Uttar Pradesh",
    description: "Home to the Taj Mahal, rich Mughal heritage, and the holy city of Varanasi.",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800"
  },
  {
    id: "karnataka",
    name: "Karnataka",
    description: "Known for its tech hub Bangalore, Mysore Palace, and classical Carnatic music.",
    image: "https://images.unsplash.com/photo-1600850056064-a8b380df8395?auto=format&fit=crop&w=800"
  },
  {
    id: "madhya-pradesh",
    name: "Madhya Pradesh",
    description: "Famous for Khajuraho temples, tribal art, and the ancient city of Sanchi.",
    image: "https://images.unsplash.com/photo-1624363414774-92d00d476abb?auto=format&fit=crop&w=800"
  }
];

const States = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredStates = states.filter(state =>
    state.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-cultural-maroon mb-8 text-center animate-fade-up">
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