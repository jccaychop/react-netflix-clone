import { SVGArrow } from './';

interface Props {
  children: string;
}

export const Button: React.FC<Props> = ({ children }) => {
  return (
    <button className="inline-flex flex-nowrap items-center justify-center gap-2 p-3 px-5 sm:min-w-[13rem] bg-Netflix rounded text-base sm:text-2xl font-medium">
      {children} <SVGArrow />
    </button>
  );
};
