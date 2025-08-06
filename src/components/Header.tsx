import { User, Plus, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAppStore } from "@/store/useAppStore";
import { useToast } from "@/hooks/use-toast";

const Header = () => {
  const { isDarkMode, toggleDarkMode } = useAppStore();
  const { toast } = useToast();
  return (
    <header className="w-full px-6 py-4 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left Icons */}
        <div className="flex items-center gap-3">
          <Button 
            variant="ghost" 
            size="icon" 
            className="rounded-xl bg-genshin-text-light/20 hover:bg-genshin-text-light/30"
            onClick={() => toast({ title: "Profile", description: "Opening user profile..." })}
          >
            <User className="h-5 w-5 text-genshin-text-dark" />
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="rounded-xl bg-genshin-text-light/20 hover:bg-genshin-text-light/30"
            onClick={() => toast({ title: "Create", description: "Opening creation menu..." })}
          >
            <Plus className="h-5 w-5 text-genshin-text-dark" />
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="rounded-xl bg-genshin-text-light/20 hover:bg-genshin-text-light/30"
            onClick={toggleDarkMode}
          >
            {isDarkMode ? (
              <Sun className="h-5 w-5 text-genshin-text-dark" />
            ) : (
              <Moon className="h-5 w-5 text-genshin-text-dark" />
            )}
          </Button>
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-8">
          <button 
            className="text-genshin-text-dark font-medium hover:text-genshin-blue transition-colors"
            onClick={() => toast({ title: "Home", description: "Navigating to home..." })}
          >
            Home
          </button>
          <button className="text-genshin-blue font-medium border-b-2 border-genshin-blue pb-1">
            Search
          </button>
          <button 
            className="text-genshin-text-dark font-medium hover:text-genshin-blue transition-colors"
            onClick={() => toast({ title: "Messages", description: "Opening messages..." })}
          >
            Message
          </button>
        </nav>

        {/* Auth Buttons */}
        <div className="flex items-center gap-3">
          <Button 
            variant="outline" 
            className="rounded-full border-genshin-text-light text-genshin-text-dark hover:bg-genshin-text-light/10"
            onClick={() => toast({ title: "Login", description: "Opening login form..." })}
          >
            Log in
          </Button>
          <Button 
            variant="genshin" 
            className="rounded-full"
            onClick={() => toast({ title: "Sign Up", description: "Opening registration form..." })}
          >
            Sign up
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;