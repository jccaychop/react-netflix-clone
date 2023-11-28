type Variant = 'h1' | 'h2' | 'h3';

interface Props {
  children: string;
  className?: React.HTMLAttributes<HTMLHeadingElement>['className'];
  variant: Variant;
}

export const Heading: React.FC<Props> = ({ className, variant, children }) => {
  if (variant === 'h1') {
    return (
      <h1
        className={`text-[2rem] lg:text-5xl leading-tight font-bold lg:font-black ${className}`}
      >
        {children}
      </h1>
    );
  }

  if (variant === 'h2') {
    return (
      <h2 className="text-[2rem] lg:text-5xl leading-tight font-bold lg:font-black">
        {children}
      </h2>
    );
  }

  if (variant === 'h3') {
    return (
      <h3 className={`text-lg lg:text-xl leading-6 font-light ${className}`}>
        {children}
      </h3>
    );
  }

  return;
};
