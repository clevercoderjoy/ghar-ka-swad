import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-card/30 backdrop-blur-sm">
      <div className="container px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-1">घर का स्वाद</h3>
            <p className="text-sm text-muted-foreground">
              Bringing home-cooked meals to your doorstep
            </p>
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-primary fill-primary animate-pulse" />
            <span>in Darbhanga, Bihar</span>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-border/50 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Ghar ka Swad. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
