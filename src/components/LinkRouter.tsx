import Link from "next/link";
interface LinkRouterProps {
  href: string;
  children: React.ReactNode;
}

export default function LinkRouter({ href, children }: LinkRouterProps) {
  return (
    <Link href={href} className="bg-blue-600 px-8 py-1">
      {children}
    </Link>
  );
}
