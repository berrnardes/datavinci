import { z } from "zod";
import { privateProcedure, route } from "./trpc";

export const appRouter = route({
	conversation: privateProcedure
		.input(z.object({ role: z.string(), content: z.string() }))
		.mutation(async ({ input }) => {
			return input;
		}),
});

export type AppRouter = typeof appRouter;
