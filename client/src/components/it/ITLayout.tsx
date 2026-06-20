import { ReactNode } from "react";
import { ITNav } from "./ITNav";
import { ITFooter } from "./ITFooter";

export function ITLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <ITNav />
      <main className="flex-1">{children}</main>
      <ITFooter />
    </div>
  );
}
