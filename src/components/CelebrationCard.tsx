interface CelebrationCardProps {
  title: string;
  subtitle: string;
  image: string;
  isMoviePoster?: boolean;
}

export const CelebrationCard = ({ title, subtitle, image, isMoviePoster = false }: CelebrationCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-gradient-card shadow-card hover:shadow-glow transition-all duration-500 transform hover:scale-105">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="relative p-8">
        <div className={`mx-auto mb-6 overflow-hidden rounded-xl shadow-lg transition-transform duration-500 group-hover:scale-110 ${
          isMoviePoster ? 'w-64 h-96' : 'w-64 h-64'
        }`}>
          <img 
            src={image} 
            alt={subtitle}
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="text-center space-y-3">
          <h3 className="text-2xl font-bold text-primary group-hover:text-secondary transition-colors duration-300">
            {title}
          </h3>
          <p className="text-lg text-muted-foreground font-medium group-hover:text-foreground transition-colors duration-300">
            {subtitle}
          </p>
        </div>
        
        <div className="absolute top-4 right-4 w-12 h-12 bg-accent rounded-full flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
          <span className="text-2xl">⭐</span>
        </div>
      </div>
    </div>
  );
};