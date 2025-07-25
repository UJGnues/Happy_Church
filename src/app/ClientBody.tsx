"use client";

export default function ClientBody({
  children,
  className,
}: Readonly<{
  children: React.ReactNode;
  className?: string;
}>) {
  return (
    <body suppressHydrationWarning className={`antialiased ${className || ""}`}>
      {children}
    </body>
  );
}
