import { Button, Heading } from '../atoms';
import { InputEmail } from '../atoms/InputEmail';

export const Form = () => {
  return (
    <form action="" className="flex flex-col items-center">
      <Heading variant="h3">
        Ready to watch? Enter your email to create or restart your membership.
      </Heading>

      <div className="mt-4 flex flex-col sm:flex-row gap-4 sm:gap-2 w-full max-w-[36.625rem]">
        <InputEmail placeHolder="Email address" />

        <div className="">
          <Button>Get Started</Button>
        </div>
      </div>
    </form>
  );
};
