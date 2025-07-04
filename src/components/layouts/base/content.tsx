type BaseContentProps = {
  children: React.ReactNode;
};

export const BaseContent = ({ children }: BaseContentProps) => {
  return <div className="flex h-full flex-1 flex-col gap-4 p-4 pt-0">{children}</div>;
};
