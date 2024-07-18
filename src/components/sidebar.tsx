"use client";

import { cn } from "@/lib/utils";
import {
	Code,
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
		<div className="space-y-4 py-4 flex-col h-full bg-slate-900 text-white">
			<div className="px-3 py-2 flex-1">
				<Link
					href="/dashboard"
					className="flex items-center justify-center mb-12"
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
								"flex text-smg group py-3 px-7 justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
								pathname === route.href
									? "text-white bg-white/10"
									: "text-zinc-400"
							)}
							key={route.href}
							href={route.href}
						>
							<div className="flex items-center flex-1">
								<route.icon className={cn("h-5 w-5 mr-3", route.color)} />
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
