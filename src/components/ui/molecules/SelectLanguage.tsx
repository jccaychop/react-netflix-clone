import { SVGArrowDropDown, SVGLanguage, Select } from '../atoms';

export const SelectLanguage = () => {
  return (
    <div className="relative flex flex-nowrap items-center h-full">
      <div className="absolute top-1/4 left-3 ">
        <SVGLanguage />
      </div>

      <Select />

      <div className="absolute top-1/4 right-2 ">
        <SVGArrowDropDown />
      </div>
    </div>
  );
};
