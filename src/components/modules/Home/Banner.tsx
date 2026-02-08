"use client";

import bgImg from "@/assets/images/bg1.jpg";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Badge } from "../../ui/badge";

export default function Banner() {
  return (
    <section className="py-6 lg:py-16 px-2">
      <div className="flex flex-col items-center justify-between gap-10 ">
        {/* content  */}
        <div className="flex flex-col space-y-2  items-center">
          <Badge
            className="mx-auto lg:mx-0 w-fit py-1 px-8 mb-3"
            variant={"secondary"}
          >
            Get 10% Off Your First Order
          </Badge>
          <h1 className="text-4xl md:text-5xl xl:text-7xl font-semibold  text-center leading-10 lg:leading-20 tracking-tight ">
            Your Trusted Online Medicine Store
          </h1>

          <p className="text-muted-foreground text-center lg:text-xl ">
            Order genuine medicines from verified sellers and get fast, safe
            delivery at your doorstep.
          </p>

          <div className="flex pt-3 justify-center  lg:justify-start space-x-2 lg:space-x-4">
            <Button
              size="lg"
              className="rounded-full px-4 lg:px-8 py-y lg:py-9 lg:text-2xl"
            >
              Shop Medicines
            </Button>
            <Button
              size="lg"
              variant={"outline"}
              className="rounded-full px-4 lg:px-8 py-5 lg:py-9 lg:text-2xl"
            >
              View Cart
            </Button>
          </div>
        </div>
        {/* image */}
        <div>
          <Image
            src={bgImg}
            alt="Medicine Bottle"
            width={0}
            height={0}
            className="rounded-xl shadow-xl w-full"
          />
        </div>
      </div>
    </section>
  );
}
