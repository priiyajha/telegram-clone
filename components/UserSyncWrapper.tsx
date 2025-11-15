'use client';
import {useUser} from "@clerk/nextjs";
import {useState} from "react";
import {useMutation} from "convex/react";
import {api} from "@convex/_generated/api";
import {LoadingSpinner} from "@/components/LoadingSpinner";
function UserSyncWrapper({children}:{children: React.ReactNode}) {

    const [user, isLoaded: isUserLoaded] = useUser();
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string|null>(null);

    const createOrUpdateUser = useMutation(api.users.upsertUser);

    if(isUserLoaded || isLoading){
        return (
            <LoadingSpinner
                size="lg"
                message={isUserLoaded?"loading...":"syncing user data..."}
                className="min-h-screen"
            />
        )
    }

    if(error){
        return (
        <div className="flex-1 items-center justify-center bg-white px-6">
            <p className="text-red-500 text-lg font-semibold mb-2">Sync Error</p>
            <p className="text-gray-600 text-center mb-4">{error}</p>
            <p className="text-gray-500 text-center text-sm">
                Please try restarting the app or contact help if the issue persists.
            </p>
        </div>
        )
    }

    return (
        <>{children}</>
    )
}

export default UserSyncWrapper
