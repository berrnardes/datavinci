"use client";

import { cn } from "@/lib/utils";
import {
  Code,
  ImageIcon,
  LayoutDashboard,
  MessageSquare,
  Music2Icon,
  Settings,
  VideoIcon,
} from "lucide-react";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const montserrat = Montserrat({ weight: "600", subsets: ["latin"] });

const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-sky-500",
  },
  {
    label: "Conversação",
    icon: MessageSquare,
    href: "/conversation",
    color: "text-violet-500",
  },

  {
    label: "Vídeo",
    icon: VideoIcon,
    href: "/video",
    color: "text-orange-500",
  },
  {
    label: "Música",
    icon: Music2Icon,
    href: "/music",
    color: "text-emerald-500",
  },
  {
    label: "Imagem",
    icon: ImageIcon,
    href: "/image",
    color: "text-pink-500",
  },
  {
    label: "Código",
    icon: Code,
    href: "/code",
    color: "text-green-500",
  },
  {
    label: "Configurações",
    icon: Settings,
    href: "/settings",
  },
];

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="h-full flex-col space-y-4 bg-slate-900 py-4 text-white">
      <div className="flex-1 px-3 py-2">
        <Link
          href="/dashboard"
          className="mb-12 flex items-center justify-center"
        >
          <Image
            src="datavinci-logo.svg"
            alt="Datavinci"
            height={170}
            width={170}
          />
          {/* <h1 className={cn("font-bold text-2xl", montserrat.className)}>
						DATAVINCI
					</h1> */}
        </Link>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              className={cn(
                "text-smg group flex cursor-pointer justify-start rounded-lg px-7 py-3 font-medium transition hover:bg-white/10 hover:text-white",
                pathname === route.href
                  ? "bg-white/10 text-white"
                  : "text-zinc-400",
              )}
              key={route.href}
              href={route.href}
            >
              <div className="flex flex-1 items-center">
                <route.icon className={cn("mr-3 h-5 w-5", route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
