import { useEffect } from "react";
import { Switch, Route, Router } from "wouter";
import { useHashLocation } from "wouter/use-hash-location";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

// Home Services (existing trades division)
import Home from "@/pages/Home";
import TradePage from "@/pages/TradePage";
import ITServices from "@/pages/ITServices";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/not-found";

// Apex hub + IT division
import Hub from "@/pages/Hub";
import ITHome from "@/pages/it/ITHome";
import Software from "@/pages/it/Software";
import Audio from "@/pages/it/Audio";
import NonprofitsIT from "@/pages/it/Nonprofits";
import RestaurantsIT from "@/pages/it/Restaurants";
import Builds from "@/pages/it/Builds";
import Parts from "@/pages/it/Parts";
import Quote from "@/pages/it/Quote";

type Division = "apex" | "home" | "it";

function getDivision(): Division {
  if (typeof window === "undefined") return "apex";
  const forced = new URLSearchParams(window.location.search).get("division");
  if (forced === "it" || forced === "home" || forced === "apex") return forced;
  const h = window.location.hostname;
  if (h.startsWith("it.")) return "it";
  if (h.startsWith("home.")) return "home";
  return "apex";
}

function HomeRouter() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/trade/:id" component={TradePage} />
      <Route path="/it-services" component={ITServices} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function ITRouter() {
  return (
    <Switch>
      <Route path="/" component={ITHome} />
      <Route path="/software" component={Software} />
      <Route path="/audio" component={Audio} />
      <Route path="/nonprofits" component={NonprofitsIT} />
      <Route path="/restaurants" component={RestaurantsIT} />
      <Route path="/builds" component={Builds} />
      <Route path="/parts" component={Parts} />
      <Route path="/quote" component={Quote} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default function App() {
  const division = getDivision();

  useEffect(() => {
    document.documentElement.classList.toggle("theme-it", division === "it");
  }, [division]);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        {division === "apex" ? (
          <Hub />
        ) : (
          <Router hook={useHashLocation}>
            {division === "it" ? <ITRouter /> : <HomeRouter />}
          </Router>
        )}
      </TooltipProvider>
    </QueryClientProvider>
  );
}
