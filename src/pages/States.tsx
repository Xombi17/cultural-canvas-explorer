import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

export interface State {
  id: string;
  name: string;
  description: string;
  image: string;
  culture: string;
  festivals: string[];
  cuisine: string[];
}

export const states: State[] = [
  {
    id: "andhra-pradesh",
    name: "Andhra Pradesh",
    description: "Known for its rich cultural heritage, classical dance forms, and ancient temples.",
    image: "https://images.unsplash.com/photo-1623060386759-710376a8e359?auto=format&fit=crop&w=800",
    culture: "Famous for Kuchipudi dance, Telugu literature, and traditional handicrafts.",
    festivals: ["Ugadi", "Sankranti", "Bathukamma"],
    cuisine: ["Hyderabadi Biryani", "Pesarattu", "Gongura Pachadi"]
  },
  {
    id: "arunachal-pradesh",
    name: "Arunachal Pradesh",
    description: "Land of the dawn-lit mountains with diverse tribal cultures and Buddhist monasteries.",
    image: "https://images.unsplash.com/photo-1623841675698-8a06dc2f45c4?auto=format&fit=crop&w=800",
    culture: "Home to 26 major tribes each with unique traditions and festivals.",
    festivals: ["Losar", "Nyokum", "Solung"],
    cuisine: ["Thukpa", "Momos", "Pika Pila"]
  },
  {
    id: "assam",
    name: "Assam",
    description: "Known for its tea gardens, wildlife sanctuaries, and Bihu dance.",
    image: "https://images.unsplash.com/photo-1590579491624-f98f36d4c763?auto=format&fit=crop&w=800",
    culture: "Rich in traditional weaving, music, and Bihu dance forms.",
    festivals: ["Bihu", "Ambubachi Mela", "Majuli Festival"],
    cuisine: ["Masor Tenga", "Pitha", "Khar"]
  },
  {
    id: "bihar",
    name: "Bihar",
    description: "Ancient seat of learning with rich Buddhist heritage.",
    image: "https://images.unsplash.com/photo-1621831714462-bec613d41955?auto=format&fit=crop&w=800",
    culture: "Home to ancient universities like Nalanda and rich folk traditions.",
    festivals: ["Chhath Puja", "Sama-Chakeva", "Madhushravani"],
    cuisine: ["Litti Chokha", "Sattu Paratha", "Thekua"]
  },
  {
    id: "chhattisgarh",
    name: "Chhattisgarh",
    description: "Known for its tribal culture and ancient temples.",
    image: "https://images.unsplash.com/photo-1624956578878-21fe6b0a3b8b?auto=format&fit=crop&w=800",
    culture: "Rich tribal heritage with unique art forms and customs.",
    festivals: ["Bastar Dussehra", "Hareli", "Madai"],
    cuisine: ["Chila", "Farra", "Muthia"]
  },
  {
    id: "goa",
    name: "Goa",
    description: "Known for its beaches, Portuguese heritage, and vibrant culture.",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800",
    culture: "Blend of Indian and Portuguese influences in music, art, and architecture.",
    festivals: ["Carnival", "Sao Joao", "Shigmo"],
    cuisine: ["Fish Curry Rice", "Vindaloo", "Bebinca"]
  },
  {
    id: "gujarat",
    name: "Gujarat",
    description: "Renowned for its vibrant Garba dance, traditional textiles, and the Great Rann of Kutch.",
    image: "https://images.unsplash.com/photo-1609948543911-0aa1c6dd1c13?auto=format&fit=crop&w=800",
    culture: "Famous for folk dances, handicrafts, and festive celebrations.",
    festivals: ["Navratri", "Uttarayan", "Rann Utsav"],
    cuisine: ["Dhokla", "Thepla", "Fafda"]
  },
  {
    id: "haryana",
    name: "Haryana",
    description: "Known for its agriculture, vibrant culture, and historical significance.",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800",
    culture: "Famous for folk dances like Dhamal and Gidda.",
    festivals: ["Teej", "Holi", "Diwali"],
    cuisine: ["Bajra Khichdi", "Kadhi", "Churma"]
  },
  {
    id: "himachal-pradesh",
    name: "Himachal Pradesh",
    description: "Known for its scenic landscapes, hill stations, and adventure sports.",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800",
    culture: "Rich in folk music, dance, and handicrafts.",
    festivals: ["Lavi Fair", "Kullu Dussehra", "Baisakhi"],
    cuisine: ["Chana Madra", "Siddu", "Dham"]
  },
  {
    id: "jammu-and-kashmir",
    name: "Jammu and Kashmir",
    description: "Known for its breathtaking landscapes, gardens, and rich culture.",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800",
    culture: "Famous for its handicrafts, music, and traditional cuisine.",
    festivals: ["Baisakhi", "Eid", "Navroz"],
    cuisine: ["Rogan Josh", "Yakhni", "Kashmiri Pulao"]
  },
  {
    id: "jharkhand",
    name: "Jharkhand",
    description: "Known for its rich mineral resources and tribal culture.",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800",
    culture: "Home to various tribal communities with unique traditions.",
    festivals: ["Sarhul", "Karam", "Tiranga"],
    cuisine: ["Thekua", "Litti", "Pitha"]
  },
  {
    id: "karnataka",
    name: "Karnataka",
    description: "Known for its tech hub Bangalore, Mysore Palace, and classical Carnatic music.",
    image: "https://images.unsplash.com/photo-1600850056064-a8b380df8395?auto=format&fit=crop&w=800",
    culture: "Rich in classical music, dance, and literature.",
    festivals: ["Karaga", "Dussehra", "Ugadi"],
    cuisine: ["Bisi Bele Bath", "Mysore Pak", "Ragi Mudde"]
  },
  {
    id: "kerala",
    name: "Kerala",
    description: "Famous for its backwaters, Kathakali dance form, and traditional Ayurvedic practices.",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800",
    culture: "Known for its rich traditions in art, dance, and music.",
    festivals: ["Onam", "Vishu", "Thrissur Pooram"],
    cuisine: ["Sadhya", "Appam", "Fish Curry"]
  },
  {
    id: "madhya-pradesh",
    name: "Madhya Pradesh",
    description: "Famous for Khajuraho temples, tribal art, and the ancient city of Sanchi.",
    image: "https://images.unsplash.com/photo-1624363414774-92d00d476abb?auto=format&fit=crop&w=800",
    culture: "Rich in folk traditions and handicrafts.",
    festivals: ["Khajuraho Dance Festival", "Maha Shivratri", "Diwali"],
    cuisine: ["Dal Bafla", "Poha", "Chaat"]
  },
  {
    id: "maharashtra",
    name: "Maharashtra",
    description: "Home to the vibrant city of Mumbai, Warli art, and the ancient Ajanta and Ellora caves.",
    image: "https://images.unsplash.com/photo-1566552881560-0be862a7c445?auto=format&fit=crop&w=800",
    culture: "Famous for its diverse culture, music, and dance forms.",
    festivals: ["Ganesh Chaturthi", "Gudi Padwa", "Diwali"],
    cuisine: ["Puran Poli", "Vada Pav", "Misal Pav"]
  },
  {
    id: "manipur",
    name: "Manipur",
    description: "Known for its classical dance forms, rich culture, and scenic landscapes.",
    image: "https://images.unsplash.com/photo-1623060386759-710376a8e359?auto=format&fit=crop&w=800",
    culture: "Famous for Manipuri dance and traditional crafts.",
    festivals: ["Yaoshang", "Lai Haraoba", "Cheiraoba"],
    cuisine: ["Eromba", "Singju", "Kangshoi"]
  },
  {
    id: "meghalaya",
    name: "Meghalaya",
    description: "Known for its lush green hills, waterfalls, and vibrant culture.",
    image: "https://images.unsplash.com/photo-1623060386759-710376a8e359?auto=format&fit=crop&w=800",
    culture: "Famous for its music, dance, and traditional crafts.",
    festivals: ["Shad Suk Mynsiem", "Wangala", "Nongkrem"],
    cuisine: ["Jadoh", "Dohneiiong", "Pukhlein"]
  },
  {
    id: "mizoram",
    name: "Mizoram",
    description: "Known for its scenic beauty, rich culture, and traditional crafts.",
    image: "https://images.unsplash.com/photo-1623060386759-710376a8e359?auto=format&fit=crop&w=800",
    culture: "Famous for its bamboo dance and traditional music.",
    festivals: ["Chapchar Kut", "Pawl Kut", "Mim Kut"],
    cuisine: ["Bai", "Vawksa Rep", "Mizo Puan"]
  },
  {
    id: "nagaland",
    name: "Nagaland",
    description: "Known for its rich tribal culture, festivals, and scenic landscapes.",
    image: "https://images.unsplash.com/photo-1623060386759-710376a8e359?auto=format&fit=crop&w=800",
    culture: "Famous for its vibrant festivals and traditional crafts.",
    festivals: ["Hornbill Festival", "Aoleang Festival", "Moatsu Festival"],
    cuisine: ["Zutho", "Smoked Pork", "Rice Beer"]
  },
  {
    id: "odisha",
    name: "Odisha",
    description: "Known for its ancient temples, classical dance forms, and rich culture.",
    image: "https://images.unsplash.com/photo-1623060386759-710376a8e359?auto=format&fit=crop&w=800",
    culture: "Famous for Odissi dance and traditional handicrafts.",
    festivals: ["Rath Yatra", "Durga Puja", "Maha Shivratri"],
    cuisine: ["Dalma", "Pakhala", "Chhena Poda"]
  },
  {
    id: "punjab",
    name: "Punjab",
    description: "Famous for Bhangra dance, rich cuisine, and the Golden Temple of Amritsar.",
    image: "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?auto=format&fit=crop&w=800",
    culture: "Known for its vibrant culture, music, and dance.",
    festivals: ["Baisakhi", "Lohri", "Diwali"],
    cuisine: ["Butter Chicken", "Sarson da Saag", "Makki di Roti"]
  },
  {
    id: "rajasthan",
    name: "Rajasthan",
    description: "Home to majestic palaces, colorful festivals, and the Thar Desert's rich cultural heritage.",
    image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=800",
    culture: "Famous for its folk music, dance, and handicrafts.",
    festivals: ["Pushkar Camel Fair", "Teej", "Gangaur"],
    cuisine: ["Dal Baati Churma", "Gatte ki Sabzi", "Ker Sangri"]
  },
  {
    id: "sikkim",
    name: "Sikkim",
    description: "Known for its stunning landscapes, rich biodiversity, and vibrant culture.",
    image: "https://images.unsplash.com/photo-1623060386759-710376a8e359?auto=format&fit=crop&w=800",
    culture: "Famous for its traditional music, dance, and festivals.",
    festivals: ["Losar", "Buddha Jayanti", "Sikkimese New Year"],
    cuisine: ["Phagshapa", "Gundruk", "Momos"]
  },
  {
    id: "tamil-nadu",
    name: "Tamil Nadu",
    description: "Known for its magnificent Dravidian temples, classical Bharatanatyam dance, and vibrant Carnatic music tradition.",
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800",
    culture: "Rich in classical arts, literature, and architectural heritage.",
    festivals: ["Pongal", "Thai Pongal", "Thaipusam"],
    cuisine: ["Dosa", "Idli", "Sambar"]
  },
  {
    id: "telangana",
    name: "Telangana",
    description: "Known for its rich cultural heritage, cuisine, and historical significance.",
    image: "https://images.unsplash.com/photo-1623060386759-710376a8e359?auto=format&fit=crop&w=800",
    culture: "Famous for its folk dances and traditional crafts.",
    festivals: ["Bonalu", "Bathukamma", "Sankranti"],
    cuisine: ["Hyderabadi Biryani", "Sakkar Pongal", "Pesarattu"]
  },
  {
    id: "tripura",
    name: "Tripura",
    description: "Known for its rich cultural heritage, temples, and natural beauty.",
    image: "https://images.unsplash.com/photo-1623060386759-710376a8e359?auto=format&fit=crop&w=800",
    culture: "Famous for its traditional music, dance, and handicrafts.",
    festivals: ["Kharchi Puja", "Durga Puja", "Bihu"],
    cuisine: ["Mui Borok", "Pukhlein", "Chakhwi"]
  },
  {
    id: "uttar-pradesh",
    name: "Uttar Pradesh",
    description: "Home to the Taj Mahal, rich Mughal heritage, and the holy city of Varanasi.",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800",
    culture: "Famous for its rich history, music, and dance forms.",
    festivals: ["Kumbh Mela", "Diwali", "Holi"],
    cuisine: ["Tandoori Chicken", "Chaat", "Kebabs"]
  },
  {
    id: "uttarakhand",
    name: "Uttarakhand",
    description: "Known for its scenic beauty, temples, and adventure tourism.",
    image: "https://images.unsplash.com/photo-1623060386759-710376a8e359?auto=format&fit=crop&w=800",
    culture: "Famous for its folk music, dance, and traditional crafts.",
    festivals: ["Kumbh Mela", "Nanda Devi Mela", "Harela"],
    cuisine: ["Aloo Ke Gutke", "Kafuli", "Bhang Ki Chutney"]
  },
  {
    id: "west-bengal",
    name: "West Bengal",
    description: "Known for Durga Puja celebrations, Bengali literature, and rich artistic traditions.",
    image: "https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&w=800",
    culture: "Famous for its literature, music, and art forms.",
    festivals: ["Durga Puja", "Poila Boishakh", "Nabanna"],
    cuisine: ["Biryani", "Macher Jhol", "Sandesh"]
  },
  {
    id: "andaman-and-nicobar",
    name: "Andaman and Nicobar Islands",
    description: "Tropical paradise with unique indigenous cultures and marine life.",
    image: "https://images.unsplash.com/photo-1589308723874-d53a0a2b03f3?auto=format&fit=crop&w=800",
    culture: "Home to various indigenous tribes with unique customs.",
    festivals: ["Island Tourism Festival", "Beach Festival"],
    cuisine: ["Seafood Curry", "Coconut Prawn Curry"]
  },
  {
    id: "chandigarh",
    name: "Chandigarh",
    description: "Known for its modern architecture and urban design.",
    image: "https://images.unsplash.com/photo-1623060386759-710376a8e359?auto=format&fit=crop&w=800",
    culture: "Famous for its gardens and modernist architecture.",
    festivals: ["Rose Festival", "Chandigarh Carnival"],
    cuisine: ["Chole Bhature", "Paneer Tikka", "Lassi"]
  },
  {
    id: "dadra-and-nagar-haveli",
    name: "Dadra and Nagar Haveli",
    description: "Known for its lush greenery and tribal culture.",
    image: "https://images.unsplash.com/photo-1623060386759-710376a8e359?auto=format&fit=crop&w=800",
    culture: "Famous for its tribal art and crafts.",
    festivals: ["Holi", "Diwali"],
    cuisine: ["Dhokla", "Farsan"]
  },
  {
    id: "daman-and-diu",
    name: "Daman and Diu",
    description: "Known for its beaches and Portuguese heritage.",
    image: "https://images.unsplash.com/photo-1623060386759-710376a8e359?auto=format&fit=crop&w=800",
    culture: "Famous for its vibrant culture and festivals.",
    festivals: ["Diu Festival", "Christmas"],
    cuisine: ["Seafood", "Vindaloo"]
  },
  {
    id: "delhi",
    name: "Delhi",
    description: "The capital city known for its rich history and culture.",
    image: "https://images.unsplash.com/photo-1623060386759-710376a8e359?auto=format&fit=crop&w=800",
    culture: "Famous for its diverse culture and historical monuments.",
    festivals: ["Diwali", "Holi", "Eid"],
    cuisine: ["Butter Chicken", "Chaat", "Parathas"]
  },
  {
    id: "lakshadweep",
    name: "Lakshadweep",
    description: "Known for its stunning beaches and coral reefs.",
    image: "https://images.unsplash.com/photo-1623060386759-710376a8e359?auto=format&fit=crop&w=800",
    culture: "Famous for its unique marine life and traditional crafts.",
    festivals: ["Eid", "Christmas"],
    cuisine: ["Fish Curry", "Prawn Curry"]
  },
  {
    id: "puducherry",
    name: "Puducherry",
    description: "Known for its French colonial architecture and serene beaches.",
    image: "https://images.unsplash.com/photo-1623060386759-710376a8e359?auto=format&fit=crop&w=800",
    culture: "Famous for its unique blend of Indian and French cultures.",
    festivals: ["Pongal", "Bastille Day"],
    cuisine: ["Seafood", "Pondicherry Curry"]
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
