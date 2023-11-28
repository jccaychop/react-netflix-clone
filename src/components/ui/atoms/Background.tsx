interface Props {
  src: string;
  srcSet?: string;
}

export const Background: React.FC<Props> = ({ src, srcSet }) => {
  return (
    <div className="absolute top-0 left-0 h-full w-full -z-10">
      <div className="relative overflow-hidden h-full w-full">
        <img
          className="h-full w-full object-cover object-left-bottom sm:object-center sm:scale-125 sm:-translate-y-[10%]"
          alt="background"
          src={src}
          srcSet={srcSet}
        />
        <div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-t from-black/80 from-0% via-black/0 via-60% to-black/80 to-100% bg-black/40 border border-yellow-400"></div>
      </div>
    </div>
  );
};
