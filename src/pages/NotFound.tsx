import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="mb-2 text-6xl font-extrabold">404</h1>
        <p className="mb-6 text-muted-foreground">Oops! Page not found</p>
        <a href="/" className="story-link font-medium">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
