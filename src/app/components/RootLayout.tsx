import { Outlet, ScrollRestoration, Link, useLocation } from "react-router";
import { Navbar } from "./Navbar";
import { ThemeProvider } from "./ThemeProvider";
import { AnimatePresence, motion } from "motion/react";

export function RootLayout() {
  const location = useLocation();

  return (
    <ThemeProvider defaultTheme="dark">
      <div className="app-shell min-h-screen flex flex-col selection:bg-primary/20 selection:text-foreground">
        <Navbar />
        <main className="flex-1 flex flex-col pt-[72px]">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="flex-1 flex flex-col"
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </main>

        <footer className="border-t border-border/60 mt-auto">
          <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <span className="font-display font-bold text-sm text-foreground">Tejas Anikhindi</span>
              <span className="text-border">·</span>
              <span className="text-sm text-muted-foreground">Product Designer</span>
            </div>

            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <Link to="/" className="hover:text-foreground transition-colors">Work</Link>
              <Link to="/about" className="hover:text-foreground transition-colors">About</Link>
              <Link to="/resume" className="hover:text-foreground transition-colors">Resume</Link>
              <span className="text-border hidden md:inline">·</span>
              <a href="mailto:tjanikhindi@gmail.com" className="hover:text-foreground transition-colors hidden md:inline">Email</a>
              <a href="https://www.linkedin.com/in/tjanikhindi-0bb168177/" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors hidden md:inline">LinkedIn</a>
              <a href="https://www.behance.net/tjanikhindi" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors hidden md:inline">Behance</a>
            </div>

            <p className="text-xs text-muted-foreground/50">© {new Date().getFullYear()}</p>
          </div>
        </footer>
      </div>
      <ScrollRestoration />
    </ThemeProvider>
  );
}
