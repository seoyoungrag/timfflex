'use client';
// project-imports
import { useRouter } from 'next/navigation';

// ==============================|| LANDING PAGE ||============================== //

export default function Landing() {
  const router = useRouter();

  router.push('/dashboard/default');

  return null;
}
