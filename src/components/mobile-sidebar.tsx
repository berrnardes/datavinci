"use client";

import { Menu } from "lucide-react";
import Sidebar from "./sidebar";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

const MobileSidebar = () => {
	return (
		<Sheet>
			<SheetTrigger>
				<Menu className="md:hidden" />
			</SheetTrigger>
			<SheetContent className="p-0 border-r-0 w-72" side="left">
				<Sidebar />
			</SheetContent>
		</Sheet>
	);
};

export default MobileSidebar;
