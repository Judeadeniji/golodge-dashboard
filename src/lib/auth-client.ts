import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
    baseURL: process.env.NEXT_PUBLIC_AUTH_URL,
    fetchOptions: {
        credentials: "include",
    }
})

export const { useSession } = authClient;