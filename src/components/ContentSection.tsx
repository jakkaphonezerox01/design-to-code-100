import { Search, X, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import artwork1 from "@/assets/artwork-1.png";
import artwork2 from "@/assets/artwork-2.png";
import cryoIcon from "@/assets/cryo-icon.png";
import sumeruIcon from "@/assets/sumeru-icon.png";
import akademiyaIcon from "@/assets/akademiya-icon.png";
import laylaCharacter from "@/assets/layla-character.png";

const ContentSection = () => {
  return (
    <section className="w-full px-6 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Artwork Section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-genshin-text-dark flex items-center gap-2">
              Artwork
              <ChevronRight className="h-5 w-5" />
            </h2>
            
            <div className="grid grid-cols-2 gap-4">
              <Card className="relative overflow-hidden rounded-2xl border-0 shadow-genshin-card group">
                <img 
                  src={artwork1}
                  alt="Artwork 1"
                  className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-2 left-2 text-xs text-white bg-black/50 px-2 py-1 rounded">
                  by @Sukocchi
                </div>
              </Card>
              
              <Card className="relative overflow-hidden rounded-2xl border-0 shadow-genshin-card group">
                <img 
                  src={artwork2}
                  alt="Artwork 2"
                  className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-2 left-2 text-xs text-white bg-black/50 px-2 py-1 rounded">
                  by @RenChain
                </div>
              </Card>
            </div>
            
            <Button variant="secondary" className="w-full rounded-xl">
              View More
            </Button>
          </div>

          {/* Recent Search Section */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-genshin-text-dark">Recent Search</h2>
              <Button variant="ghost" size="icon">
                <X className="h-5 w-5 text-genshin-text-light" />
              </Button>
            </div>

            <div className="space-y-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-genshin-text-light" />
                <Input 
                  placeholder="Layla ascension material"
                  className="pl-10 rounded-xl border-genshin-text-light/30 bg-genshin-light-blue/20"
                />
              </div>

              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-genshin-text-light" />
                <Input 
                  placeholder="Layla build"
                  className="pl-10 rounded-xl border-genshin-text-light/30 bg-genshin-light-blue/20"
                />
              </div>

              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-genshin-text-light" />
                <Input 
                  placeholder="Kalpalata lotus locations"
                  className="pl-10 rounded-xl border-genshin-text-light/30 bg-genshin-light-blue/20"
                />
                <Button variant="ghost" size="icon" className="absolute right-2 top-1/2 -translate-y-1/2">
                  <X className="h-4 w-4 text-genshin-text-light" />
                </Button>
              </div>

              <div className="bg-gradient-search rounded-xl p-4 text-white">
                <div className="flex items-center gap-3">
                  <Search className="h-4 w-4" />
                  <span>Layla cosplay</span>
                </div>
              </div>

              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-genshin-text-light" />
                <Input 
                  placeholder="Layla Wallpaper"
                  className="pl-10 rounded-xl border-genshin-text-light/30 bg-genshin-light-blue/20"
                />
              </div>
            </div>

            {/* Character Avatars */}
            <div className="flex gap-3 pt-4">
              <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-genshin-blue">
                <img src={laylaCharacter} alt="Layla" className="w-full h-full object-cover" />
              </div>
              <div className="w-16 h-16 rounded-2xl overflow-hidden">
                <img src={laylaCharacter} alt="Layla" className="w-full h-full object-cover opacity-70" />
              </div>
            </div>
          </div>

          {/* Info Cards Section */}
          <div className="space-y-4">
            <Card className="p-6 rounded-2xl border-0 shadow-genshin-card bg-gradient-card">
              <div className="flex items-start gap-4">
                <img src={cryoIcon} alt="Cryo" className="w-12 h-12 rounded-lg" />
                <div>
                  <h3 className="font-bold text-lg text-genshin-text-dark mb-2">Cryo character</h3>
                  <p className="text-sm text-genshin-text-light leading-relaxed">
                    Cryo is one of the seven elements in Teyvat. 
                    Its associated archon is the Tsaritsa, 
                    whose domain is Snezhnaya.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 rounded-2xl border-0 shadow-genshin-card bg-gradient-card">
              <div className="flex items-start gap-4">
                <img src={sumeruIcon} alt="Sumeru" className="w-12 h-12 rounded-lg" />
                <div>
                  <h3 className="font-bold text-lg text-genshin-text-dark mb-2">Sumeru</h3>
                  <p className="text-sm text-genshin-text-light leading-relaxed">
                    Sumeru is one of the seven regions of 
                    Teyvat. It is the nation that worships 
                    Lesser Lord Kusanali, the Dendro Archon.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 rounded-2xl border-0 shadow-genshin-card bg-gradient-card">
              <div className="flex items-start gap-4">
                <img src={akademiyaIcon} alt="Akademiya" className="w-12 h-12 rounded-lg" />
                <div>
                  <h3 className="font-bold text-lg text-genshin-text-dark mb-2">Akademiya</h3>
                  <p className="text-sm text-genshin-text-light leading-relaxed">
                    The Sumeru Akademiya is Sumeru's main 
                    governing body as well as Teyvat's 
                    preeminent institute of learning.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;