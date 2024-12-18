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
    image: "https://img.traveltriangle.com/blog/wp-content/uploads/2020/02/Waterfalls-in-Andhra-Pradesh-14_feb1.jpg",
    culture: "Famous for Kuchipudi dance, Telugu literature, and traditional handicrafts.",
    festivals: ["Ugadi", "Sankranti", "Bathukamma"],
    cuisine: ["Hyderabadi Biryani", "Pesarattu", "Gongura Pachadi"]
  },
  {
    id: "arunachal-pradesh",
    name: "Arunachal Pradesh",
    description: "Land of the dawn-lit mountains with diverse tribal cultures and Buddhist monasteries.",
    image: "https://media2.thrillophilia.com/images/photos/000/133/733/original/1538813784_shutterstock_734071876.jpg?w=753&h=450&dpr=1.5",
    culture: "Home to 26 major tribes each with unique traditions and festivals.",
    festivals: ["Losar", "Nyokum", "Solung"],
    cuisine: ["Thukpa", "Momos", "Pika Pila"]
  },
  {
    id: "assam",
    name: "Assam",
    description: "Known for its tea gardens, wildlife sanctuaries, and Bihu dance.",
    image: "https://openthemagazine.com/wp-content/uploads/2023/11/Assam1.jpg",
    culture: "Rich in traditional weaving, music, and Bihu dance forms.",
    festivals: ["Bihu", "Ambubachi Mela", "Majuli Festival"],
    cuisine: ["Masor Tenga", "Pitha", "Khar"]
  },
  {
    id: "bihar",
    name: "Bihar",
    description: "Ancient seat of learning with rich Buddhist heritage.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Temple_No.-_3%2C_Nalanda_Archaeological_Site.jpg/1100px-Temple_No.-_3%2C_Nalanda_Archaeological_Site.jpg",
    culture: "Home to ancient universities like Nalanda and rich folk traditions.",
    festivals: ["Chhath Puja", "Sama-Chakeva", "Madhushravani"],
    cuisine: ["Litti Chokha", "Sattu Paratha", "Thekua"]
  },
  {
    id: "chhattisgarh",
    name: "Chhattisgarh",
    description: "Known for its tribal culture and ancient temples.",
    image: "https://indiatravel.com/wp-content/uploads/2022/03/Chhattisgarh-slider-imgggg-1.jpg",
    culture: "Rich tribal heritage with unique art forms and customs.",
    festivals: ["Bastar Dussehra", "Hareli", "Madai"],
    cuisine: ["Chila", "Farra", "Muthia"]
  },
  {
    id: "goa",
    name: "Goa",
    description: "Known for its beaches, Portuguese heritage, and vibrant culture.",
    image: "https://images.cnbctv18.com/wp-content/uploads/2022/12/Goa-Beach.jpg?impolicy=website&width=1200&height=900",
    culture: "Blend of Indian and Portuguese influences in music, art, and architecture.",
    festivals: ["Carnival", "Sao Joao", "Shigmo"],
    cuisine: ["Fish Curry Rice", "Vindaloo", "Bebinca"]
  },
  {
    id: "gujarat",
    name: "Gujarat",
    description: "Renowned for its vibrant Garba dance, traditional textiles, and the Great Rann of Kutch.",
    image: "https://swarajya.gumlet.io/swarajya/2021-10/054eb728-fdd6-4ccd-8589-e6d28a234be5/Navratri.jpg?w=610&q=50&compress=true&format=auto",
    culture: "Famous for folk dances, handicrafts, and festive celebrations.",
    festivals: ["Navratri", "Uttarayan", "Rann Utsav"],
    cuisine: ["Dhokla", "Thepla", "Fafda"]
  },
  {
    id: "haryana",
    name: "Haryana",
    description: "Known for its agriculture, vibrant culture, and historical significance.",
    image: "https://www.holidify.com/images/cmsuploads/articles/238.jpg",
    culture: "Famous for folk dances like Dhamal and Gidda.",
    festivals: ["Teej", "Holi", "Diwali"],
    cuisine: ["Bajra Khichdi", "Kadhi", "Churma"]
  },
  {
    id: "himachal-pradesh",
    name: "Himachal Pradesh",
    description: "Known for its scenic landscapes, hill stations, and adventure sports.",
    image: "https://i.ytimg.com/vi/Lr2Xur5I-NU/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBTKM1bb6_1CrrLr07MY3ry_HzC_g",
    culture: "Rich in folk music, dance, and handicrafts.",
    festivals: ["Lavi Fair", "Kullu Dussehra", "Baisakhi"],
    cuisine: ["Chana Madra", "Siddu", "Dham"]
  },
  {
    id: "jammu-and-kashmir",
    name: "Jammu and Kashmir",
    description: "Known for its breathtaking landscapes, gardens, and rich culture.",
    image: "https://etimg.etb2bimg.com/photo/106476310.cms",
    culture: "Famous for its handicrafts, music, and traditional cuisine.",
    festivals: ["Baisakhi", "Eid", "Navroz"],
    cuisine: ["Rogan Josh", "Yakhni", "Kashmiri Pulao"]
  },
  {
    id: "jharkhand",
    name: "Jharkhand",
    description: "Known for its rich mineral resources and tribal culture.",
    image: "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2018/06/10/691545-iron-ore-mine.jpg",
    culture: "Home to various tribal communities with unique traditions.",
    festivals: ["Sarhul", "Karam", "Tiranga"],
    cuisine: ["Thekua", "Litti", "Pitha"]
  },
  {
    id: "karnataka",
    name: "Karnataka",
    description: "Known for its tech hub Bangalore, Mysore Palace, and classical Carnatic music.",
    image: "https://static.toiimg.com/photo/51010213.cms",
    culture: "Rich in classical music, dance, and literature.",
    festivals: ["Karaga", "Dussehra", "Ugadi"],
    cuisine: ["Bisi Bele Bath", "Mysore Pak", "Ragi Mudde"]
  },
  {
    id: "kerala",
    name: "Kerala",
    description: "Famous for its backwaters, Kathakali dance form, and traditional Ayurvedic practices.",
    image: "https://www.indiautentica.com/wp-content/uploads/2022/10/29ezcwtmtnm.jpg",
    culture: "Known for its rich traditions in art, dance, and music.",
    festivals: ["Onam", "Vishu", "Thrissur Pooram"],
    cuisine: ["Sadhya", "Appam", "Fish Curry"]
  },
  {
    id: "madhya-pradesh",
    name: "Madhya Pradesh",
    description: "Famous for Khajuraho temples, tribal art, and the ancient city of Sanchi.",
    image: "https://d2228rr16d3wie.cloudfront.net/photos/places/Madhya+Pradesh/Khajuraho.webp",
    culture: "Rich in folk traditions and handicrafts.",
    festivals: ["Khajuraho Dance Festival", "Maha Shivratri", "Diwali"],
    cuisine: ["Dal Bafla", "Poha", "Chaat"]
  },
  {
    id: "maharashtra",
    name: "Maharashtra",
    description: "Home to the vibrant city of Mumbai, Warli art, and the ancient Ajanta and Ellora caves.",
    image: "https://www.india.com/wp-content/uploads/2018/08/maharashtra-1.jpg",
    culture: "Famous for its diverse culture, music, and dance forms.",
    festivals: ["Ganesh Chaturthi", "Gudi Padwa", "Diwali"],
    cuisine: ["Puran Poli", "Vada Pav", "Misal Pav"]
  },
  {
    id: "manipur",
    name: "Manipur",
    description: "Known for its classical dance forms, rich culture, and scenic landscapes.",
    image: "https://indianetzone.wordpress.com/wp-content/uploads/2019/09/ras_govinda_201112_8.jpg?w=332&h=205",
    culture: "Famous for Manipuri dance and traditional crafts.",
    festivals: ["Yaoshang", "Lai Haraoba", "Cheiraoba"],
    cuisine: ["Eromba", "Singju", "Kangshoi"]
  },
  {
    id: "meghalaya",
    name: "Meghalaya",
    description: "Known for its lush green hills, waterfalls, and vibrant culture.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfDQZxcml_wDIcyL7hVQvJtbAWjBqOrL4FrTYKUGrFC8b3r7UsJM9pSl3Ircn_ko6ViPo&usqp=CAU",
    culture: "Famous for its music, dance, and traditional crafts.",
    festivals: ["Shad Suk Mynsiem", "Wangala", "Nongkrem"],
    cuisine: ["Jadoh", "Dohneiiong", "Pukhlein"]
  },
  {
    id: "mizoram",
    name: "Mizoram",
    description: "Known for its scenic beauty, rich culture, and traditional crafts.",
    image: "https://www.holidify.com/images/cmsuploads/articles/266.jpg",
    culture: "Famous for its bamboo dance and traditional music.",
    festivals: ["Chapchar Kut", "Pawl Kut", "Mim Kut"],
    cuisine: ["Bai", "Vawksa Rep", "Mizo Puan"]
  },
  {
    id: "nagaland",
    name: "Nagaland",
    description: "Known for its rich tribal culture, festivals, and scenic landscapes.",
    image: "https://www.kiomoi.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fkmadmin%2Fimage%2Fupload%2Fv1556099113%2Fkiomoi%2Fnagaland%2FNagaland.webp&w=3840&q=75",
    culture: "Famous for its vibrant festivals and traditional crafts.",
    festivals: ["Hornbill Festival", "Aoleang Festival", "Moatsu Festival"],
    cuisine: ["Zutho", "Smoked Pork", "Rice Beer"]
  },
  {
    id: "odisha",
    name: "Odisha",
    description: "Known for its ancient temples, classical dance forms, and rich culture.",
    image: "https://s7ap1.scene7.com/is/image/incredibleindia/1-lingaraj-temple-bhubaneshwar-odisha-city-hero?qlt=82&ts=1726663559461",
    culture: "Famous for Odissi dance and traditional handicrafts.",
    festivals: ["Rath Yatra", "Durga Puja", "Maha Shivratri"],
    cuisine: ["Dalma", "Pakhala", "Chhena Poda"]
  },
  {
    id: "punjab",
    name: "Punjab",
    description: "Famous for Bhangra dance, rich cuisine, and the Golden Temple of Amritsar.",
    image: "https://m.economictimes.com/thumb/msid-106050635,width-1200,height-900,resizemode-4,imgsize-561669/punjab-trip-planning.jpg",
    culture: "Known for its vibrant culture, music, and dance.",
    festivals: ["Baisakhi", "Lohri", "Diwali"],
    cuisine: ["Butter Chicken", "Sarson da Saag", "Makki di Roti"]
  },
  {
    id: "rajasthan",
    name: "Rajasthan",
    description: "Home to majestic palaces, colorful festivals, and the Thar Desert's rich cultural heritage.",
    image: "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://ecoplore.com/wp-content/uploads/2021/06/Jaipur-1.jpg",
    culture: "Famous for its folk music, dance, and handicrafts.",
    festivals: ["Pushkar Camel Fair", "Teej", "Gangaur"],
    cuisine: ["Dal Baati Churma", "Gatte ki Sabzi", "Ker Sangri"]
  },
  {
    id: "sikkim",
    name: "Sikkim",
    description: "Known for its stunning landscapes, rich biodiversity, and vibrant culture.",
    image: "https://www.remotelands.com/storage/media/797/conversions/b160801014-banner-size.jpg",
    culture: "Famous for its traditional music, dance, and festivals.",
    festivals: ["Losar", "Buddha Jayanti", "Sikkimese New Year"],
    cuisine: ["Phagshapa", "Gundruk", "Momos"]
  },
  {
    id: "tamil-nadu",
    name: "Tamil Nadu",
    description: "Known for its magnificent Dravidian temples, classical Bharatanatyam dance, and vibrant Carnatic music tradition.",
    image: "https://pohcdn.com/guide/sites/default/files/styles/paragraph__live_banner__lb_image__1880bp/public/live_banner/Tamil-Nadu.jpg",
    culture: "Rich in classical arts, literature, and architectural heritage.",
    festivals: ["Pongal", "Thai Pongal", "Thaipusam"],
    cuisine: ["Dosa", "Idli", "Sambar"]
  },
  {
    id: "telangana",
    name: "Telangana",
    description: "Known for its rich cultural heritage, cuisine, and historical significance.",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/71/Charminar_Hyderabad_1.jpg",
    culture: "Famous for its folk dances and traditional crafts.",
    festivals: ["Bonalu", "Bathukamma", "Sankranti"],
    cuisine: ["Hyderabadi Biryani", "Sakkar Pongal", "Pesarattu"]
  },
  {
    id: "tripura",
    name: "Tripura",
    description: "Known for its rich cultural heritage, temples, and natural beauty.",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/c8/Ujjayanta_palace_Tripura_State_Museum_Agartala_India.jpg",
    culture: "Famous for its traditional music, dance, and handicrafts.",
    festivals: ["Kharchi Puja", "Durga Puja", "Bihu"],
    cuisine: ["Mui Borok", "Pukhlein", "Chakhwi"]
  },
  {
    id: "uttar-pradesh",
    name: "Uttar Pradesh",
    description: "Home to the Taj Mahal, rich Mughal heritage, and the holy city of Varanasi.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp0s4_VPzB2Ujoe7Tpubk4ONwd5dS56OzH3A&s",
    culture: "Famous for its rich history, music, and dance forms.",
    festivals: ["Kumbh Mela", "Diwali", "Holi"],
    cuisine: ["Tandoori Chicken", "Chaat", "Kebabs"]
  },
  {
    id: "uttarakhand",
    name: "Uttarakhand",
    description: "Known for its scenic beauty, temples, and adventure tourism.",
    image: "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://ecoplore.com/wp-content/uploads/2021/06/Nainital-1.jpg",
    culture: "Famous for its folk music, dance, and traditional crafts.",
    festivals: ["Kumbh Mela", "Nanda Devi Mela", "Harela"],
    cuisine: ["Aloo Ke Gutke", "Kafuli", "Bhang Ki Chutney"]
  },
  {
    id: "west-bengal",
    name: "West Bengal",
    description: "Known for Durga Puja celebrations, Bengali literature, and rich artistic traditions.",
    image: "https://assets.telegraphindia.com/telegraph/2021/Dec/1639825327_durga-puja.jpg",
    culture: "Famous for its literature, music, and art forms.",
    festivals: ["Durga Puja", "Poila Boishakh", "Nabanna"],
    cuisine: ["Biryani", "Macher Jhol", "Sandesh"]
  },
  {
    id: "andaman-and-nicobar",
    name: "Andaman and Nicobar Islands",
    description: "Tropical paradise with unique indigenous cultures and marine life.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/The_Coral_Reef_at_the_Andaman_Islands.jpg/1200px-The_Coral_Reef_at_the_Andaman_Islands.jpg",
    culture: "Home to various indigenous tribes with unique customs.",
    festivals: ["Island Tourism Festival", "Beach Festival"],
    cuisine: ["Seafood Curry", "Coconut Prawn Curry"]
  },
  {
    id: "chandigarh",
    name: "Chandigarh",
    description: "Known for its modern architecture and urban design.",
    image: "https://cdn.ca.emap.com/wp-content/uploads/sites/12/2015/12/Chandigargh_03_338293046-1024x683.jpg",
    culture: "Famous for its gardens and modernist architecture.",
    festivals: ["Rose Festival", "Chandigarh Carnival"],
    cuisine: ["Chole Bhature", "Paneer Tikka", "Lassi"]
  },
  {
    id: "dadra-and-nagar-haveli",
    name: "Dadra and Nagar Haveli",
    description: "Known for its lush greenery and tribal culture.",
    image: "https://vushii.com/uploads/548362383_Dadra%20and%20Nagar%20Haveli.jpg",
    culture: "Famous for its tribal art and crafts.",
    festivals: ["Holi", "Diwali"],
    cuisine: ["Dhokla", "Farsan"]
  },
  {
    id: "daman-and-diu",
    name: "Daman and Diu",
    description: "Known for its beaches and Portuguese heritage.",
    image: "https://cdn.britannica.com/27/1627-050-6E7FEBFB/fort-Portuguese-coast-Diu.jpg",
    culture: "Famous for its vibrant culture and festivals.",
    festivals: ["Diu Festival", "Christmas"],
    cuisine: ["Seafood", "Vindaloo"]
  },
  {
    id: "delhi",
    name: "Delhi",
    description: "The capital city known for its rich history and culture.",
    image: "https://media.tacdn.com/media/attractions-splice-spp-674x446/08/c7/91/d1.jpg",
    culture: "Famous for its diverse culture and historical monuments.",
    festivals: ["Diwali", "Holi", "Eid"],
    cuisine: ["Butter Chicken", "Chaat", "Parathas"]
  },
  {
    id: "lakshadweep",
    name: "Lakshadweep",
    description: "Known for its stunning beaches and coral reefs.",
    image: "https://www.emperortraveline.com/wp-content/uploads/2024/02/Agatti-Lakshadweep.jpg",
    culture: "Famous for its unique marine life and traditional crafts.",
    festivals: ["Eid", "Christmas"],
    cuisine: ["Fish Curry", "Prawn Curry"]
  },
  {
    id: "puducherry",
    name: "Puducherry",
    description: "Known for its French colonial architecture and serene beaches.",
    image: "https://static.toiimg.com/photo/99391969.cms",
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
      <h1 className="text-4xl font-bold text-cultural-maroon mb-8 text-center animate-fade-up hover:text-shadow-glow transition-all duration-300">
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
              <div className="state-card-content p-4 bg-white/90">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2 hover:text-shadow-glow transition-all duration-300">
                  {state.name}
                </h3>
                <p className="text-gray-700 hover:text-shadow-glow transition-all duration-300">
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
