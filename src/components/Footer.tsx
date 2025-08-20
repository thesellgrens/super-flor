export const Footer = () => {
  return (
    <footer className="bg-gradient-hero py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <h3 className="text-3xl font-bold text-white mb-4">
            Let's Make This Birthday Super! 🎉
          </h3>
          <p className="text-white/80 text-lg">
            Here's to another year of being absolutely amazing, Flor!
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="text-2xl mb-2">🎬</div>
            <div className="text-white font-medium">Movie</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="text-2xl mb-2">🍕</div>
            <div className="text-white font-medium">Pizza</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="text-2xl mb-2">🎂</div>
            <div className="text-white font-medium">Cake</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="text-2xl mb-2">🥤</div>
            <div className="text-white font-medium">Drinks</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="text-2xl mb-2">🎵</div>
            <div className="text-white font-medium">Music</div>
          </div>
        </div>
        
        <div className="text-accent text-2xl font-bold">
          Made with ❤️ for Flor's Super Birthday!
        </div>
      </div>
    </footer>
  );
};