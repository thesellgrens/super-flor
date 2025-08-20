import { CelebrationCard } from "./CelebrationCard";
import supermanMovie from "@/assets/superman-movie.jpg";
import superPizza from "@/assets/super-pizza.jpg";
import superCake from "@/assets/super-cake.jpg";
import supermanDrink from "@/assets/superman-drink.jpg";
import djFlorida from "@/assets/dj-florida.jpg";

export const CelebrationGrid = () => {
  const celebrations = [
    {
      title: "The Movie",
      subtitle: "Superman",
      image: supermanMovie,
      isMoviePoster: true
    },
    {
      title: "The Food",
      subtitle: "Super Pizza",
      image: superPizza,
    },
    {
      title: "The Dessert",
      subtitle: "Super Chocolate Cake - Flor's Special Edition",
      image: superCake,
    },
    {
      title: "The Drink",
      subtitle: "Superman Drink Sour Blue Raspberry",
      image: supermanDrink,
    },
    {
      title: "The Music",
      subtitle: "DJ Flo-Rida",
      image: djFlorida,
    }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-primary mb-4">
            Super Celebration Menu
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need for the ultimate superhero birthday party!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {celebrations.map((item, index) => (
            <div 
              key={index}
              className="animate-bounce-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CelebrationCard
                title={item.title}
                subtitle={item.subtitle}
                image={item.image}
                isMoviePoster={item.isMoviePoster}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};