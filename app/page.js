"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/auth"); // Redirects to /auth
  }, [router]);

  return (
    <div className="font-sans grid min-h-screen items-center justify-items-center p-8 pb-20 gap-16 sm:p-20">
      {/* Loading Spinner */}
      <div className="flex flex-col items-center space-y-4">
        <div className="w-10 h-10 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
        <p className="text-gray-600 text-sm">Redirecting to login...</p>
      </div>
    </div>
  );
}
