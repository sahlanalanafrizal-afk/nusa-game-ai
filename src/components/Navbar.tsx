'use client';

import Link from 'next/link';
import { useAuthStore } from '@/store/authStore';
import { signOut } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { useRouter } from 'next/navigation';
import { LogOut, Gamepad2 } from 'lucide-react';
import toast from 'react-hot-toast';

export default function Navbar() {
  const { user } = useAuthStore();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast.success('Logged out successfully');
      router.push('/');
    } catch (error) {
      toast.error('Failed to logout');
    }
  };

  return (
    <nav className="bg-dark border-b border-secondary/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <Gamepad2 className="w-6 h-6 text-primary" />
            <span>Nusa Game AI</span>
          </Link>

          {/* Links */}
          <div className="flex items-center gap-6">
            {user ? (
              <>
                <Link href="/dashboard" className="hover:text-primary">
                  Dashboard
                </Link>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-light/60">{user.email}</span>
                  <button
                    onClick={handleLogout}
                    className="bg-primary hover:bg-accent text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
                  >
                    <LogOut className="w-4 h-4" />
                    Logout
                  </button>
                </div>
              </>
            ) : (
              <>
                <Link href="/login" className="hover:text-primary">
                  Login
                </Link>
                <Link
                  href="/login"
                  className="bg-primary hover:bg-accent text-white px-4 py-2 rounded-lg transition-colors"
                >
                  Get Started
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
