import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function Pricing() {
  const [expandedPlan, setExpandedPlan] = useState("pro");

  const pricingPlans = [
    {
      id: "intro",
      name: "Intro",
      price: null,
      description: "Pro account gives you freedom with uploading HD videos and can also meet all your business needs apasioh kamu",
      badge: null,
      features: [],
    },
    {
      id: "base",
      name: "Base",
      price: null,
      description: "Pro account gives you freedom with uploading HD videos and can also meet all your business needs apasioh kamu",
      badge: null,
      features: [],
    },
    {
      id: "pro",
      name: "Pro",
      price: 123,
      description: "Pro account gives you freedom with uploading HD videos and can also meet all your business needs apasioh kamu",
      badge: "Save $40",
      features: [],
      highlighted: true,
    },
    {
      id: "enterprise",
      name: "Enterprise",
      price: null,
      description: "Pro account gives you freedom with uploading HD videos and can also meet all your business needs apasioh kamu",
      badge: null,
      features: [],
    },
  ];

  const togglePlan = (planId) => {
    console.log('hhhhh')
    setExpandedPlan(expandedPlan === planId ? null : planId);
  };

  const PricingCard = ({ plan, isExpanded, onToggle }) => {
    const isHighlighted = isExpanded;
    
    return (
      <div className={`rounded-lg transition-all duration-300 ${isHighlighted ? 'bg-primary' : 'bg-[#1A1A1A]'}`}>
        {/* Header - Always Visible */}
        <div 
          className="flex items-center justify-between p-4 cursor-pointer"
          onClick={() => onToggle(plan.id)}
        >
          <div className="flex items-center gap-3">
            <h3 className={`text-lg font-semibold ${
              isHighlighted ? 'text-white' : 'text-primary'
            }`}>
              {plan.name}
            </h3>
            {plan.badge && (
              <Badge className="bg-white text-primary text-xs px-2 py-1 rounded">
                {plan.badge}
              </Badge>
            )}
          </div>
          
          <button className='p-1 rounded-full text-white'>
            {isExpanded ? (
              <ChevronUp size={18} className="bg-[#FDECFF]/20 rounded-full" />
            ) : (
              <ChevronDown size={18} className="bg-primary rounded-full" />
            )}
          </button>
        </div>

        {/* Expanded Content */}
        {isExpanded && (
          <div className="px-4 pb-4">
            {plan.description && (
              <p className={`text-sm mb-4 leading-relaxed ${
                isHighlighted ? 'text-white' : 'text-gray-300'
              }`}>
                {plan.description}
              </p>
            )}
            
            {plan.price && (
              <div className="flex items-center justify-between">
                <div className="flex items-baseline gap-1">
                  <span className={`text-2xl font-bold ${
                    isHighlighted ? 'text-white' : 'text-white'
                  }`}>
                    ${plan.price}
                  </span>
                  <span className={`text-sm ${
                    isHighlighted ? 'text-white' : 'text-gray-400'
                  }`}>
                    /month
                  </span>
                </div>
                
                <Button 
                  className='rounded-lg text-lg px-6 py-2 bg-white hover:bg-white text-primary cursor-pointer'>
                  Try 1 month
                </Button>
              </div>
            )}
          </div>
        )}
      </div>
    );
  };

  return (
    <section className="mx-2 md:mx-12">
      <div className="flex flex-col lg:flex-row justify-between gap-12 px-6">
        {/* Header */}
        <div className="text-center lg:text-left">
          <h2 className=" text-3xl md:text-4xl font-bold mb-4">
            Simple pricing for your Business
          </h2>
          <p className="  max-w-2xl mx-auto">
            We have several powerful plans to showcase your business and get 
            discovered as a creative entrepreneurs. Everything you need.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="w-full space-y-4">
          {pricingPlans.map((plan) => (
            <PricingCard
              key={plan.id}
              plan={plan}
              isExpanded={expandedPlan === plan.id}
              onToggle={togglePlan}
            />
          ))}
        </div>
      </div>
    </section>
  );
}