"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import dynamic from "next/dynamic";
import { supabase } from "../../lib/supabaseClient";

// ✅ Main layout component
function ProtectedLayoutContent({ children }) {
  const router = useRouter();
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  const links = [
    { href: "/dashboard", label: "Dashboard" },
    { href: "/transactions", label: "Transactions" },
    { href: "/reports", label: "Reports" },
    { href: "/settings", label: "Settings" },
  ];

  useEffect(() => {
    let isMounted = true;

    const checkSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session) {
        router.replace("/auth");
      } else if (isMounted) {
        setUser(session.user);
        setLoading(false);
      }
    };

    checkSession();

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        if (!session) {
          router.replace("/auth");
        } else {
          setUser(session.user);
        }
      }
    );

    return () => {
      isMounted = false;
      listener.subscription.unsubscribe();
    };
  }, [router]);

  // ✅ Only render after client session is loaded
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-50">
        <p className="text-gray-500 animate-pulse">Checking authentication...</p>
      </div>
    );
  }

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg p-6 flex flex-col justify-between">
        <div>
          <div className="flex flex-col items-center space-y-2 mb-6">
            <img
              src="/logo.jpg"
              alt="BTMS Logo"
              className="w-24 h-24 object-contain"
            />
            <h1 className="text-xl font-bold text-green-700">FUNDCAST</h1>
          </div>

          <nav className="space-y-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-3 py-2 rounded-md transition ${
                  pathname === link.href
                    ? "bg-green-100 text-green-700 font-semibold"
                    : "text-gray-700 hover:bg-gray-100 hover:text-green-600"
                }`}
              >
                {pathname === link.href ? "▸ " : ""}
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Logout Button */}
        <div className="mt-6 border-t pt-4">
          <button
            onClick={async () => {
              await supabase.auth.signOut();
              router.replace("/auth");
            }}
            className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
          >
            🚪 Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-64 flex-1 h-screen overflow-y-auto p-6 bg-gray-50">
        {children}
      </main>
    </div>
  );
}

// ✅ Export as dynamic — disables SSR to prevent hydration mismatch
export default dynamic(() => Promise.resolve(ProtectedLayoutContent), {
  ssr: false,
});
