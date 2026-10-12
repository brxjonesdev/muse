
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { User } from "@supabase/supabase-js";
import { createClient } from "@/shared/api/supabase/client";

export default function AuthStatus() {
  const [user, setUser] = useState<User | null>(null);
  const [username, setUsername] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [signingOut, setSigningOut] = useState(false);
  const supabase = createClient();

  // Subscribe to the current session and future auth changes.
  useEffect(() => {
    let mounted = true;

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (mounted) {
        setUser(session?.user ?? null);
        setLoading(false);
      }
    });

    // Load the initial session.
    supabase.auth
      .getSession()
      .then(({ data, error }) => {
        if (!mounted) return;

        if (error) {
          console.error("Failed to get session:", error);
          setUser(null);
        } else {
          setUser(data.session?.user ?? null);
        }

        setLoading(false);
      });

    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
  }, []);

  // Fetch the username whenever the authenticated user changes.
  useEffect(() => {
    let active = true;

    async function loadUsername() {
      setUsername(null);

      if (!user) return;

      const { data, error } = await supabase
        .from("profiles")
        .select("username")
        .eq("id", user.id)
        .single();

      if (!active) return;

      if (error) {
        console.error("Failed to load username:", error);
        return;
      }

      setUsername(data.username);
    }

    void loadUsername();

    return () => {
      active = false;
    };
  }, [user]);

  async function handleSignOut() {
    setSigningOut(true);

    const { error } = await supabase.auth.signOut();

    if (error) {
      console.error("Failed to sign out:", error);
    }

    setSigningOut(false);
  }

  if (loading) {
    return <span>Loading...</span>;
  }

  if (!user) {
    return <Link href="/sign-in">Sign in</Link>;
  }

  return (
    <div className="flex items-center gap-3">
      <span>{username ?? "Loading username..."}</span>

      <button
        type="button"
        onClick={handleSignOut}
        disabled={signingOut}
      >
        {signingOut ? "Signing out..." : "Sign out"}
      </button>
    </div>
  );
}
