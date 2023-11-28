interface Props {
  children: string;
}

export const Paragraph: React.FC<Props> = ({ children }) => {
  return (
    <p className="text-lg lg:text-2xl leading-6 mt-4 font-light lg:font-normal">
      {children}
    </p>
  );
};
