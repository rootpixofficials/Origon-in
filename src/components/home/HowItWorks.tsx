import React from "react";
import { MousePointer, CreditCard, Truck, Smile, LucideIcon } from "lucide-react";

interface Step {
  step: number;
  icon: LucideIcon;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    step: 1,
    icon: MousePointer,
    title: "Browse & Select",
    description:
      "Explore our delicious kunafa varieties and add your favorites to cart",
  },
  {
    step: 2,
    icon: CreditCard,
    title: "Easy Payment",
    description:
      "Secure checkout with multiple payment options available",
  },
  {
    step: 3,
    icon: Truck,
    title: "Fast Delivery",
    description:
      "We prepare your order fresh and deliver it right to your door",
  },
  {
    step: 4,
    icon: Smile,
    title: "Enjoy!",
    description:
      "Savor every bite of our authentic pistachio kunafa",
  },
];

const HowItWorks: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-green-700 via-green-600 to-emerald-500">
      <div className="max-w-7xl mx-auto px-4">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-white/80 font-semibold text-sm uppercase tracking-wider mb-4 block">
            Simple Process
          </span>

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            How It Works
          </h2>

          <p className="text-white/80 text-lg">
            Getting your favorite kunafa is just a few clicks away!
          </p>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div key={index} className="relative text-center">

                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-white/30" />
                )}

                {/* Step Icon */}
                <div className="relative">
                  <div className="bg-white/20 backdrop-blur w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-white/30">
                    <Icon className="h-10 w-10 text-white" />
                  </div>

                  {/* Step Number */}
                  <span
                    className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-green-900 font-bold text-sm shadow-lg"
                  >
                    {step.step}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {step.title}
                </h3>

                <p className="text-white/80 leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
