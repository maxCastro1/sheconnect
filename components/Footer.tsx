import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-muted/30 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-center md:text-left">
            <span className="font-display text-lg font-semibold text-foreground">
              She<span className="text-primary">Connect</span>
            </span>
            <p className="mt-1 text-sm text-muted-foreground">
              Empowering women through access to resources
            </p>
          </div>

          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#categories" className="transition-colors hover:text-foreground">Categories</a>
            <a href="#resources" className="transition-colors hover:text-foreground">Resources</a>
            <a href="#urgent" className="transition-colors hover:text-foreground">Get Help</a>
            <a href="#about" className="transition-colors hover:text-foreground">About</a>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} SheConnect. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <Heart className="h-3.5 w-3.5 text-care" /> for women everywhere
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
