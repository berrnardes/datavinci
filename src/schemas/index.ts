import { z } from "zod";

export const conversationSchema = z.object({
	input: z.string().min(1, { message: "Necessário ter algum caractere" }),
});
