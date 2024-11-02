interface SectionProps {
  children: React.ReactNode;
}

export default function Section({ children }: SectionProps) {
  return <section className="max-w-screen-sm mx-auto p-5">{children}</section>;
}
