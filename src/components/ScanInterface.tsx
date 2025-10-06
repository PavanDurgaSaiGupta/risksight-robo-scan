import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import robotMascot from "@/assets/robot-mascot.png";

export const ScanInterface = () => {
  return (
    <div className="flex-1 flex items-center justify-center p-8">
      <div className="max-w-3xl w-full space-y-8">
        <div className="text-center space-y-4">
          <h2 className="font-montserrat font-bold text-4xl text-foreground">
            Automated Security Assessment
          </h2>
          <p className="text-muted-foreground text-lg">
            Discover network vulnerabilities with intelligent analysis
          </p>
        </div>

        <div className="bg-card border border-border rounded-lg p-8 space-y-6 relative overflow-hidden">
          <div className="absolute top-4 right-4 w-24 h-24 opacity-70">
            <img 
              src={robotMascot} 
              alt="RiskSight Mascot" 
              className="w-full h-full object-contain"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="ip-input" className="text-sm font-medium text-foreground">
              Target IP Address
            </label>
            <div className="flex gap-3">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  id="ip-input"
                  type="text"
                  placeholder="Enter Target IP Address (e.g., 192.168.1.1)"
                  className="pl-10 bg-background border-input h-12 text-base focus:border-primary focus:ring-primary"
                />
              </div>
              <Button 
                size="lg"
                className="px-8 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold glow-border"
              >
                Analyze
              </Button>
            </div>
          </div>

          <div className="pt-4 border-t border-border">
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <p className="text-sm font-medium">Awaiting Scan Input...</p>
            </div>
          </div>
        </div>

        <div className="bg-surface-elevated/50 border border-border/50 rounded-lg p-6 space-y-3">
          <h3 className="font-montserrat font-semibold text-lg text-foreground">
            Quick Start Guide
          </h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="text-primary mt-0.5">•</span>
              <span>Enter a valid IP address in the search field above</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-0.5">•</span>
              <span>Click "Analyze" to begin the automated security assessment</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-0.5">•</span>
              <span>Results will appear in the dashboard (coming soon in full release)</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
