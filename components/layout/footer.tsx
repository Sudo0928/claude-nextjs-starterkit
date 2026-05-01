import Link from "next/link";

import { Logo } from "@/components/common/logo";
import { Container } from "@/components/layout/container";
import { siteConfig } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t">
      <Container className="py-12">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_2fr]">
          <div className="space-y-4">
            <Logo />
            <p className="text-muted-foreground max-w-xs text-sm leading-7">
              {siteConfig.description}
            </p>
            <div className="flex items-center gap-3">
              {siteConfig.social.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={label}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Icon className="size-5" />
                </a>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {siteConfig.footerNav.map((group) => (
              <div key={group.title} className="space-y-3">
                <h3 className="text-sm font-semibold">{group.title}</h3>
                <ul className="space-y-2">
                  {group.items.map((item) => (
                    <li key={`${group.title}-${item.title}`}>
                      <Link
                        href={item.href}
                        className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="text-muted-foreground mt-10 flex flex-col items-start justify-between gap-3 border-t pt-6 text-xs sm:flex-row sm:items-center">
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <p>Built with Next.js · Tailwind CSS · shadcn/ui</p>
        </div>
      </Container>
    </footer>
  );
}
