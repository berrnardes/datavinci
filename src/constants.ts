import {
	Code,
	LayoutDashboard,
	MessageSquare,
	Music2Icon,
	Settings,
	VideoIcon,
} from "lucide-react";

export const tools = [
	{
		label: "Dashboard",
		icon: LayoutDashboard,
		href: "/dashboard",
		color: "text-sky-500",
		bgColor: "bg-sky-500/10",
	},
	{
		label: "Conversação",
		icon: MessageSquare,
		href: "/conversation",
		color: "text-violet-500",
		bgColor: "bg-violet-500/10",
	},
	{
		label: "Vídeo",
		icon: VideoIcon,
		href: "/video",
		color: "text-orange-500",
		bgColor: "bg-orange-500/10",
	},
	{
		label: "Música",
		icon: Music2Icon,
		href: "/music",
		color: "text-emerald-500",
		bgColor: "bg-emerald-500/10",
	},
	{
		label: "Código",
		icon: Code,
		href: "/code",
		color: "text-green-500",
		bgColor: "bg-green-500/10",
	},
	{
		label: "Configurações",
		icon: Settings,
		href: "/settings",
	},
];
