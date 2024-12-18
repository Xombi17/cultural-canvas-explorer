import { useParams } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { states } from "./States";

const StateDetail = () => {
  const { stateId } = useParams();
  
  const stateData = states.find(state => state.id === stateId);

  if (!stateData) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Card className="glass-card p-8">
          <h1 className="text-4xl font-bold text-cultural-maroon">State not found</h1>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="glass-card p-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-cultural-maroon">
              {stateData.name}
            </h1>
            <p className="text-lg text-gray-700">
              {stateData.description}
            </p>
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-cultural-earth">Culture</h2>
              <p className="text-gray-700">{stateData.culture}</p>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-cultural-earth">Major Festivals</h2>
              <ul className="list-disc list-inside text-gray-700">
                {stateData.festivals.map((festival) => (
                  <li key={festival}>{festival}</li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-cultural-earth">Famous Cuisine</h2>
              <ul className="list-disc list-inside text-gray-700">
                {stateData.cuisine.map((dish) => (
                  <li key={dish}>{dish}</li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <img
              src={stateData.image}
              alt={stateData.name}
              className="w-full h-[500px] object-cover rounded-lg shadow-xl"
            />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default StateDetail;