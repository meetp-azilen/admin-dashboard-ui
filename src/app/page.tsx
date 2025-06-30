import DashboardCard from '@/components/dashboard/DashboardCard';
import PostsTable from '@/components/posts/PostTable';
import { Button } from '@/components/ui/button';
import { Folder, Link, MessageCircle, Newspaper, User } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between gap-5 mb-5">
        <DashboardCard
          title="Posts"
          count={100}
          icon={<Newspaper className="text-slate-500" size={60} />}
          bgColor="bg-blue-100 dark:bg-blue-900"
        />
        <DashboardCard
          title="Categories"
          count={12}
          icon={<Folder className="text-slate-500" size={60} />}
          bgColor="bg-green-100 dark:bg-green-900"
        />
        <DashboardCard
          title="Users"
          count={750}
          icon={<User className="text-slate-500" size={60} />}
          bgColor="bg-yellow-100 dark:bg-yellow-900"
        />
        <DashboardCard
          title="Comments"
          count={1200}
          icon={<MessageCircle className="text-slate-500" size={60} />}
          bgColor="bg-red-100 dark:bg-red-900"
        />
      </div>
      <PostsTable limit={5} />
    </>
  );
}
