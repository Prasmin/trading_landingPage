import { Check } from "lucide-react";
import React from "react";

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "$19/month",
      features: [
        "Basic AI Trading Strategies",
        "Up to 5 Trades Per Day",
        "Email Support",
        "Market Insights (Limited)",
      ],
      featured: false,
    },
    {
      name: "Pro",
      price: "$49/month",
      features: [
        "Advanced AI Trading Strategies",
        "Unlimited Trades Per Day",
        "Priority Email Support",
        "Real-Time Market Insights",
        "Access to AI-Driven Backtesting Tools",
      ],
      featured: true,
    },
    {
      name: "Enterprise",
      price: "$99/month",
      features: [
        "Customizable AI Trading Algorithms",
        "Dedicated Account Manager",
        "Premium Support (24/7)",
        "API Access for Automation",
        "Exclusive Trading Signals",
        "Deep Market Analytics",
      ],
      featured: false,
    },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Pricing Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
            >
              <h3 className="text-xl font-semibold mb-4">{plan.name}</h3>
              <p className="text-2xl font-bold text-teal-600 mb-4">
                {plan.price}
              </p>
              <ul className="mb-6">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="text-gray-600 flex gap-x-3">
                    <Check
                      aria-hidden="true"
                      className={classNames(
                        plans.featured ? "text-indigo-400" : "text-indigo-600",
                        "h-6 w-5 flex-none"
                      )}
                    />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className=" text-white py-2 px-4 rounded  bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
