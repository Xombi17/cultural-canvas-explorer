import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Home = () => {
  const heroRef = useRef<HTMLDivElement>(null);

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
        <div
          ref={heroRef}
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=2071&auto=format&fit=crop')] bg-cover bg-center"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="max-w-4xl px-4 animate-fade-up">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Discover India's Rich Cultural Heritage
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Explore the diverse traditions, art, and history of India's vibrant states
            </p>
            <Button
              asChild
              className="bg-cultural-gold hover:bg-cultural-gold/90 text-black"
            >
              <Link to="/states">
                Explore States
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <section className="py-24 bg-cultural-cream">
        <div className="container px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
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
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {state.name}
                  </h3>
                  <p className="text-white/90">{state.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 cultural-pattern">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Experience India's Living Heritage
            </h2>
            <p className="text-lg text-muted-foreground mb-12">
              From ancient temples to vibrant festivals, immerse yourself in the
              cultural tapestry that makes India unique.
            </p>
            <Button
              asChild
              variant="outline"
              className="border-cultural-gold text-cultural-maroon hover:bg-cultural-gold/10"
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