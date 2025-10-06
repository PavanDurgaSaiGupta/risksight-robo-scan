import { Shield, Activity, FileText, Settings, Database } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  name: string;
  icon: React.ElementType;
  active: boolean;
  disabled: boolean;
}

const navItems: NavItem[] = [
  { name: "Scan", icon: Shield, active: true, disabled: false },
  { name: "Dashboard", icon: Activity, active: false, disabled: false },
  { name: "Reports", icon: FileText, active: false, disabled: true },
  { name: "Threat Intel", icon: Database, active: false, disabled: true },
  { name: "Settings", icon: Settings, active: false, disabled: true },
];

export const Navigation = () => {
  return (
    <nav className="w-64 bg-sidebar border-r border-sidebar-border flex flex-col">
      <div className="p-6">
        <h1 className="font-montserrat font-bold text-3xl text-primary glow-text">
          RiskSight
        </h1>
        <p className="text-sm text-muted-foreground mt-1">Beta v0.1</p>
      </div>

      <div className="flex-1 px-3 py-4 space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.name}
              disabled={item.disabled}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all",
                item.active && "bg-sidebar-accent text-sidebar-accent-foreground glow-border",
                !item.active && !item.disabled && "text-sidebar-foreground hover:bg-sidebar-accent/50",
                item.disabled && "text-nav-inactive cursor-not-allowed opacity-50"
              )}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{item.name}</span>
              {item.disabled && (
                <span className="ml-auto text-xs text-nav-inactive">Soon</span>
              )}
            </button>
          );
        })}
      </div>

      <div className="p-4 border-t border-sidebar-border">
        <div className="text-xs text-muted-foreground">
          <p className="font-medium">Beta Access</p>
          <p className="mt-1">Limited features available</p>
        </div>
      </div>
    </nav>
  );
};
