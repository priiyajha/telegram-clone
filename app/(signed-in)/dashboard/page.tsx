'use client';
import UserSyncWrapper from "@/components/UserSyncWrapper";

function Dashboard({children}:{children: React.ReactNode}) {
    return (
        <UserSyncWrapper>{children}</UserSyncWrapper>
    )
}

export default Dashboard
