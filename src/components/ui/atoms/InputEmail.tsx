interface Props {
  placeHolder: string;
}

export const InputEmail: React.FC<Props> = ({ placeHolder }) => {
  return (
    <div className="group relative sm:flex-1 h-12 sm:h-14 w-full border border-white/70 rounded focus-within:outline outline-2 outline-offset-2">
      <label
        htmlFor=""
        className="absolute top-1/4 lg:top-[35%] left-4 group-focus-within:top-0 leading-4 group-focus-within:text-xs text-white/70 transition-[font-size,top] ease-linear"
      >
        {placeHolder}
      </label>
      <div className="absolute bottom-0 left-0 h-full w-full">
        <input
          type="text"
          className="h-full w-full pt-4 px-4 bg-transparent border-none outline-none"
        />
      </div>
    </div>
  );
};
