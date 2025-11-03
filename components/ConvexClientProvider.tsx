'use client';
import {ConvexProviderWithClerk} from "convex/react-clerk";
import {useAuth} from "@clerk/nextjs";
import {ConvexReactClient} from "convex/react";


if(!process.env.NEXT_PUBLIC_CONVEX_URL) {
    throw new Error("missing NEXT_PUBLIC_CONVEX_URL");
}

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL);

function ConvexClientProvider({ children }: { children: React.ReactNode }) {
    return (
       <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
           {children}
       </ConvexProviderWithClerk>
    )
}

export default ConvexClientProvider
