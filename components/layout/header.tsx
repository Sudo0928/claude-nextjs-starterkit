"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

import { Logo } from "@/components/common/logo";
import { ThemeToggle } from "@/components/common/theme-toggle";
import { MobileNav } from "@/components/layout/mobile-nav";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { siteConfig } from "@/lib/site";
import { useUIStore } from "@/stores/use-ui-store";

export function Header() {
  const setMobileNavOpen = useUIStore((s) => s.setMobileNavOpen);

  return (
    <header className="bg-background/80 supports-backdrop-filter:bg-background/60 sticky top-0 z-40 w-full border-b backdrop-blur">
      <Container className="flex h-14 items-center justify-between gap-4">
        <div className="flex items-center gap-6">
          <Logo />
          <NavigationMenu className="hidden md:flex" viewport={false}>
            <NavigationMenuList>
              {siteConfig.nav.map((item) => (
                <NavigationMenuItem key={item.href}>
                  <NavigationMenuLink asChild>
                    <Link href={item.href}>{item.title}</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex items-center gap-1">
          <Button asChild size="sm" className="hidden md:inline-flex">
            <Link href="/contact">시작하기</Link>
          </Button>
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileNavOpen(true)}
            aria-label="메뉴 열기"
          >
            <Menu />
          </Button>
        </div>
      </Container>
      <MobileNav />
    </header>
  );
}
