
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Leaf } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow flex items-center justify-center bg-cream py-20">
        <div className="text-center px-4">
          <Leaf size={64} className="text-nature-dark mx-auto mb-6" />
          <h1 className="font-serif text-5xl font-bold text-nature-dark mb-4">404</h1>
          <p className="text-xl text-coffee-medium mb-8">Oops! We couldn't find the page you're looking for.</p>
          <p className="text-coffee-medium max-w-md mx-auto mb-8">
            The page you were trying to reach doesn't exist. Perhaps you were looking for one of our organic products instead?
          </p>
          <a href="/" className="btn-primary">
            Return to Home
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
