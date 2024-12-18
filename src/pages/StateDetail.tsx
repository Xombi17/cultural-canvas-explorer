import { useParams } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { states } from "./States";

const StateDetail = () => {
  const { stateId } = useParams();
  
  const stateData = states.find(state => state.id === stateId);

  if (!stateData) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Card className="glass-card p-8 hover:shadow-[0_0_15px_rgba(255,215,0,0.3)] transition-shadow duration-300">
          <h1 className="text-4xl font-bold text-cultural-maroon">State not found</h1>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="glass-card p-8 hover:shadow-[0_0_20px_rgba(255,215,0,0.4)] transition-all duration-300">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-cultural-maroon hover:[text-shadow:_0_0_10px_rgba(139,69,19,0.4)] transition-all duration-300">
              {stateData.name}
            </h1>
            <p className="text-lg text-gray-700 hover:[text-shadow:_0_0_8px_rgba(0,0,0,0.2)] transition-all duration-300">
              {stateData.description}
            </p>
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-cultural-earth hover:[text-shadow:_0_0_8px_rgba(121,85,72,0.4)] transition-all duration-300">Culture</h2>
              <p className="text-gray-700 hover:[text-shadow:_0_0_8px_rgba(0,0,0,0.2)] transition-all duration-300">{stateData.culture}</p>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-cultural-earth hover:[text-shadow:_0_0_8px_rgba(121,85,72,0.4)] transition-all duration-300">Major Festivals</h2>
              <ul className="list-disc list-inside text-gray-700">
                {stateData.festivals.map((festival) => (
                  <li key={festival} className="hover:[text-shadow:_0_0_8px_rgba(0,0,0,0.2)] transition-all duration-300">{festival}</li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-cultural-earth hover:[text-shadow:_0_0_8px_rgba(121,85,72,0.4)] transition-all duration-300">Famous Cuisine</h2>
              <ul className="list-disc list-inside text-gray-700">
                {stateData.cuisine.map((dish) => (
                  <li key={dish} className="hover:[text-shadow:_0_0_8px_rgba(0,0,0,0.2)] transition-all duration-300">{dish}</li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <img
              src={stateData.image}
              alt={stateData.name}
              className="w-full h-[500px] object-cover rounded-lg shadow-xl hover:shadow-[0_0_25px_rgba(255,215,0,0.5)] transition-all duration-300"
            />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default StateDetail;