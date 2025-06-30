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
        />
        <DashboardCard
          title="Categories"
          count={12}
          icon={<Folder className="text-slate-500" size={60} />}
        />
        <DashboardCard
          title="Users"
          count={750}
          icon={<User className="text-slate-500" size={60} />}
        />
        <DashboardCard
          title="Comments"
          count={1200}
          icon={<MessageCircle className="text-slate-500" size={60} />}
        />
      </div>
      <PostsTable limit={5} />
    </>
  );
}
