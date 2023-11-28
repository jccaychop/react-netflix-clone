import { SVGProps } from '../../../interfaces';

export const SVGArrow: React.FC<SVGProps> = ({ className = '' }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z"
        fill="currentColor"
      />
    </svg>
  );
};

// Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools
