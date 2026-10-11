import { Link, useLocation } from "react-router";
import { useTheme } from "./ThemeProvider";
import { Moon, Sun, Menu, X, Mail, Linkedin, Check } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Work", path: "/" },
    { name: "About", path: "/about" },
    { name: "Resume", path: "/resume" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) =>
    path === "/" ? location.pathname === "/" : location.pathname.startsWith(path);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("tjanikhindi@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-[72px] flex items-center justify-between gap-8">
        {/* Logo */}
        <Link
          to="/"
          className="shrink-0 font-display font-bold tracking-tight text-foreground hover:opacity-60 transition-opacity text-base"
        >
          Tejas A.
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 flex-1 justify-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`relative px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                isActive(link.path)
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {isActive(link.path) && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-full bg-muted"
                  transition={{ type: "spring", stiffness: 400, damping: 35 }}
                />
              )}
              <span className="relative z-10">{link.name}</span>
            </Link>
          ))}
        </nav>

        {/* Right actions */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <button
            onClick={handleCopyEmail}
            className="p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted transition-all"
            aria-label="Copy email"
            title={copied ? "Copied!" : "Copy email"}
          >
            {copied ? <Check size={16} className="text-green-500" /> : <Mail size={16} />}
          </button>
          <a
            href="https://www.linkedin.com/in/tjanikhindi-0bb168177/"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted transition-all"
            aria-label="LinkedIn"
          >
            <Linkedin size={16} />
          </a>
          <a
            href="https://www.behance.net/tjanikhindi"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted transition-all text-xs font-bold"
            aria-label="Behance"
          >
            Bē
          </a>
          <div className="w-px h-4 bg-border mx-1" />
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted transition-all"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>

        {/* Mobile toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full text-muted-foreground hover:bg-muted transition-all"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-foreground"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="md:hidden absolute top-[72px] left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border p-6 shadow-xl"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                    isActive(link.path)
                      ? "bg-muted text-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex items-center gap-3 px-4 pt-4 mt-2 border-t border-border">
                <button onClick={handleCopyEmail} className="p-2 text-muted-foreground">
                  {copied ? <Check size={18} className="text-green-500" /> : <Mail size={18} />}
                </button>
                <a href="https://www.linkedin.com/in/tjanikhindi-0bb168177/" target="_blank" rel="noreferrer" className="p-2 text-muted-foreground">
                  <Linkedin size={18} />
                </a>
                <a href="https://www.behance.net/tjanikhindi" target="_blank" rel="noreferrer" className="p-2 text-muted-foreground font-bold text-xs">
                  Bē
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
