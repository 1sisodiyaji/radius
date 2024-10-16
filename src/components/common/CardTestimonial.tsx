import { CardSpotlight } from "@/components/ui/card-spotlight";

interface CardTestimonialProps {
  text: string;
  Name: string;
}

export default function CardTestimonial({text , Name}: CardTestimonialProps) {
  return (
    <CardSpotlight className="h-48 md:w-96 w-full flex flex-col justify-center items-center">
      <p className="text-xl font-bold relative z-20 mt-2 text-white">
      {text}
      </p>
      <div className="text-neutral-200 mt-4 relative z-20">
        ⭐⭐⭐⭐⭐
      </div>
      <p className="text-neutral-300 mt-4 relative z-20 text-sm">
      {Name}
      </p>
    </CardSpotlight>
  );
}
