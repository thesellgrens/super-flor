import balloonRed from "@/assets/balloon-red.png";
import balloonBlue from "@/assets/balloon-blue.png";
import balloonYellow from "@/assets/balloon-yellow.png";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      
      {/* Floating Balloons */}
      <div className="absolute inset-0 pointer-events-none">
        <img 
          src={balloonRed} 
          alt="Red balloon" 
          className="absolute top-20 left-10 w-16 h-24 opacity-80 animate-balloon-float-1"
        />
        <img 
          src={balloonBlue} 
          alt="Blue balloon" 
          className="absolute top-32 right-20 w-20 h-30 opacity-75 animate-balloon-float-2"
        />
        <img 
          src={balloonYellow} 
          alt="Yellow balloon" 
          className="absolute top-16 right-10 w-14 h-21 opacity-70 animate-balloon-float-3"
        />
        <img 
          src={balloonRed} 
          alt="Red balloon" 
          className="absolute bottom-40 left-20 w-18 h-27 opacity-60 animate-balloon-float-2"
        />
        <img 
          src={balloonBlue} 
          alt="Blue balloon" 
          className="absolute bottom-60 right-32 w-16 h-24 opacity-65 animate-balloon-float-1"
        />
        <img 
          src={balloonYellow} 
          alt="Yellow balloon" 
          className="absolute top-40 left-32 w-12 h-18 opacity-55 animate-balloon-float-3"
        />
        <img 
          src={balloonRed} 
          alt="Red balloon" 
          className="absolute bottom-20 right-16 w-14 h-21 opacity-50 animate-balloon-float-1"
        />
        <img 
          src={balloonBlue} 
          alt="Blue balloon" 
          className="absolute top-60 left-16 w-16 h-24 opacity-60 animate-balloon-float-2"
        />
      </div>
      
      <div className="relative z-10 text-center px-4 animate-bounce-in">
        <h1 className="text-6xl md:text-8xl font-black text-white drop-shadow-2xl mb-6 animate-float">
          HAPPY BIRTHDAY
        </h1>
        <h2 className="text-4xl md:text-6xl font-bold text-accent drop-shadow-lg mb-8">
          FLOR!
        </h2>
        <p className="text-xl md:text-2xl text-white/90 font-medium max-w-2xl mx-auto leading-relaxed">
          Get ready for a super celebration with movies, pizza, cake, and music!
        </p>
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 text-white font-semibold">
            🎬 Movie Night
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 text-white font-semibold">
            🍰 Birthday Cake
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 text-white font-semibold">
            🎵 Great Music
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-8 border-2 border-white/60 rounded-full flex items-center justify-center">
          <div className="w-2 h-2 bg-white/80 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};