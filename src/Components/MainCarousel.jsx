import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

function MainCarousel() {
  return (
    <Carousel className="w-full bg-red-700">
      <CarouselContent>
        <CarouselItem>
          <img
            className="w-full"
            src="src/assets/images/Frame 560.png"
            alt=""
          />
        </CarouselItem>
        <CarouselItem>
          <img
            className="w-full"
            src="src/assets/images/Frame 560.png"
            alt=""
          />
        </CarouselItem>
        <CarouselItem>
          <img
            className="w-full"
            src="src/assets/images/Frame 560.png"
            alt=""
          />
        </CarouselItem>
      </CarouselContent>
      {/* <div className="py-2 text-center text-sm text-muted-foreground">
        Slide {current} of {count}
      </div> */}
    </Carousel>
  );
}

export default MainCarousel;
