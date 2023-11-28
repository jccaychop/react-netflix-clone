import { Background, Heading, Paragraph } from '../atoms';
import { Form } from '../molecules';

export const HeroHome = () => {
  return (
    <main className="absolute top-0 w-full sm:min-h-[32rem] lg:min-h-[43.75rem] pt-[7.5rem] sm:pt-[8.5rem] lg:pt-[9.875rem] pb-8 sm:pb-12 lg:pb-16 border border-red-500">
      <Background
        src="https://assets.nflxext.com/ffe/siteui/vlv3/d1532433-07b1-4e39-a920-0f08b81a489e/1ad8c4ae-c972-487b-ba16-7979faf6e46e/PE-en-20231120-popsignuptwoweeks-perspective_alpha_website_small.jpg"
        srcSet="https://assets.nflxext.com/ffe/siteui/vlv3/d1532433-07b1-4e39-a920-0f08b81a489e/1ad8c4ae-c972-487b-ba16-7979faf6e46e/PE-en-20231120-popsignuptwoweeks-perspective_alpha_website_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/d1532433-07b1-4e39-a920-0f08b81a489e/1ad8c4ae-c972-487b-ba16-7979faf6e46e/PE-en-20231120-popsignuptwoweeks-perspective_alpha_website_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/d1532433-07b1-4e39-a920-0f08b81a489e/1ad8c4ae-c972-487b-ba16-7979faf6e46e/PE-en-20231120-popsignuptwoweeks-perspective_alpha_website_large.jpg 1800w"
      />

      <div className="max-w-[calc(100%-3rem)] sm:max-w-[calc(100%-4rem)] m-auto flex flex-col items-center text-center sm:mt-14 lg:mt-36 border border-green-500">
        <div className="">
          <Heading variant="h1">Unlimited movies, TV shows, and more</Heading>
          <Paragraph>Watch anywhere. Cancel anytime.</Paragraph>
        </div>

        <div className="mt-6">
          <div className="max-w-[61.5rem] px-6 sm:px-8 mx-auto">
            <Form />
          </div>
        </div>
      </div>
    </main>
  );
};
