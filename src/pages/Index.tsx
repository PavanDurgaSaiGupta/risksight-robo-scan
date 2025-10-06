import { Navigation } from "@/components/Navigation";
import { ScanInterface } from "@/components/ScanInterface";

const Index = () => {
  return (
    <div className="min-h-screen flex bg-background">
      <Navigation />
      <ScanInterface />
    </div>
  );
};

export default Index;
