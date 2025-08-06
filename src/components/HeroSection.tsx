import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import laylaCharacter from "@/assets/layla-character.png";

const HeroSection = () => {
  return (
    <section className="w-full px-6 py-8">
      <div className="max-w-7xl mx-auto">
        <Card className="relative overflow-hidden bg-gradient-hero border-0 rounded-3xl shadow-genshin-hero">
          <div className="absolute inset-0 bg-gradient-to-r from-genshin-blue/20 to-genshin-purple/20" />
          
          {/* Navigation Arrows */}
          <Button 
            variant="ghost" 
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm"
          >
            <ChevronLeft className="h-6 w-6 text-white" />
          </Button>
          
          <Button 
            variant="ghost" 
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm"
          >
            <ChevronRight className="h-6 w-6 text-white" />
          </Button>

          <div className="relative flex items-center justify-between p-12 min-h-[400px]">
            {/* Text Content */}
            <div className="flex-1 space-y-6 z-10">
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Genshin_Impact_logo.svg/1280px-Genshin_Impact_logo.svg.png"
                  alt="Genshin Impact"
                  className="h-8 opacity-80"
                />
              </div>
              
              <h1 className="text-6xl font-bold text-white mb-4">
                Layla
              </h1>
              
              <p className="text-xl text-white/90 max-w-lg leading-relaxed">
                She is a student in the Rtawahist Darshan, specializing in Theoretical Astrology.
              </p>
              
              <Button variant="hero" className="mt-8">
                Read More
              </Button>

              {/* Dots Indicator */}
              <div className="flex gap-2 mt-8">
                <div className="w-8 h-2 bg-white rounded-full" />
                <div className="w-2 h-2 bg-white/50 rounded-full" />
                <div className="w-2 h-2 bg-white/50 rounded-full" />
              </div>
            </div>

            {/* Character Image */}
            <div className="flex-1 flex justify-end items-end">
              <img 
                src={laylaCharacter}
                alt="Layla Character"
                className="max-h-96 object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default HeroSection;