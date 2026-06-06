"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MessageCircle } from "lucide-react";

const navItems = [
  ["/login", "Login"],
  ["/awakening", "Awakening"],
  ["/diagnosis", "Diagnosis"],
  ["/system", "System"],
  ["/train", "Train"],
  ["/reports", "Reports"],
  ["/profile", "Profile"]
] as const;

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <div className="shell">
      <header className="topbar">
        <Link className="brand" href="/system">
          <small>PTJ Universe</small>
          <strong>LOOKISM V4</strong>
        </Link>
        <nav className="nav" aria-label="Primary">
          {navItems.map(([href, label]) => (
            <Link key={href} href={href} className={pathname === href ? "active" : undefined}>
              {label}
            </Link>
          ))}
        </nav>
      </header>
      {children}
      <Link className="assistant-orb" href="/profile" aria-label="Open System Assistant">
        <MessageCircle size={24} />
      </Link>
    </div>
  );
}
