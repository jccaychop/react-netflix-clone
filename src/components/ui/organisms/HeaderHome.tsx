import { LinkButton, SVGNetflixLogo } from '../atoms';
import { SelectLanguage } from '../molecules';

export const HeaderHome = () => {
  return (
    <header className="w-screen xl:max-w-[calc(91%-6rem)] 3xl:max-w-[calc(71%-6rem)] m-auto">
      <div className="border p-6 sm:px-8 xl:px-12">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="text-Netflix flex items-center">
            <SVGNetflixLogo className="h-6 lg:h-10 w-auto" />
          </div>

          <div className="flex items-center gap-3 lg:gap-5 h-8">
            <SelectLanguage />
            <LinkButton>Sign In</LinkButton>
          </div>
        </div>
      </div>
    </header>
  );
};
