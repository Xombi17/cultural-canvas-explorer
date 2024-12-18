import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Home = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      if (heroRef.current) {
        heroRef.current.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <div className="relative h-screen overflow-hidden">
        <div ref={heroRef} className="absolute inset-0">
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source
              src="/hey.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="relative h-full flex items-center text-left">
          <div className="max-w-4xl px-8 animate-fade-up">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 [text-shadow:_2px_2px_15px_rgb(255_255_255_/_50%)] transition-all duration-300">
              Discover India's Rich <br /> Cultural Heritage
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 [text-shadow:_1px_1px_10px_rgb(255_255_255_/_40%)] transition-all duration-300">
            Explore the rich cultural heritage, traditions, and diversity of India's states<br /> and territories through our interactive journey.
            </p>
            <Button
              asChild
              className="bg-cultural-gold hover:bg-cultural-gold/90 text-black shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <a href="https://xombi17-streamlit-map-cultural-map-xpfuqj.streamlit.app/" target="_blank" rel="noopener noreferrer">
                Explore Map
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      <section className="py-24 bg-gradient-to-br from-purple-900 via-purple-800 to-purple-950">
        <div className="container px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-left mb-16 text-white [text-shadow:_1px_1px_8px_rgba(0,0,0,0.2)] transition-all duration-300">
            Featured States
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredStates.map((state) => (
              <Link
                key={state.name}
                to={`/states/${state.id}`}
                className="state-card group"
              >
                <img
                  src={state.image}
                  alt={state.name}
                  className="w-full h-[400px] object-cover"
                />
                <div className="state-card-content">
                  <h3 className="text-2xl font-bold text-white mb-2 [text-shadow:_1px_1px_10px_rgba(255,255,255,0.5)] transition-all duration-300">
                    {state.name}
                  </h3>
                  <p className="text-white/90 [text-shadow:_1px_1px_8px_rgba(255,255,255,0.4)] transition-all duration-300">{state.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-purple-950 via-purple-900 to-purple-950">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white [text-shadow:_1px_1px_8px_rgba(0,0,0,0.2)] transition-all duration-300">
              Experience India's Living Heritage
            </h2>
            <p className="text-lg text-white/80 mb-12 [text-shadow:_1px_1px_6px_rgba(0,0,0,0.15)] transition-all duration-300">
              From ancient temples to vibrant festivals, immerse yourself in the
              cultural tapestry that makes India unique.
            </p>
            <Button
              asChild
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              <Link to="/about">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

const featuredStates = [
  {
    id: "rajasthan",
    name: "Rajasthan",
    description: "Land of Kings, known for its majestic forts and vibrant culture",
    image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "kerala",
    name: "Kerala",
    description: "God's Own Country, famous for its backwaters and traditional arts",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "tamil-nadu",
    name: "Tamil Nadu",
    description: "Rich in ancient Dravidian culture and temple architecture",
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=2070&auto=format&fit=crop",
  },
];

export default Home;