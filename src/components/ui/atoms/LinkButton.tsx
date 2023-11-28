interface Props {
  children: string;
}

export const LinkButton: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex items-center justify-center h-full">
      <a
        href="#"
        className="bg-Netflix inline-flex items-center justify-center h-full py-1 px-4 text-sm leading-none rounded"
      >
        {children}
      </a>
    </div>
  );
};
