"use client"

export default function Philosophy() {
  return (
    <section className="mx-4 md:mx-12">
        <div className="flex-grow border-b border-white max-w-6xl mx-auto mb-4">
            <h2 className="text-sm text-primary"><span className="text-white">&#9679;</span> The company&apos;s philosophy</h2>
        </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side */}
        <div className="col-span-2">
            
          <h3 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
            We bear the responsibility<br />of developing the sector.
          </h3>
          <p className="text-[#646A69] text-base leading-relaxed">
            Elevate your brand with our comprehensive marketing solutions, including Digital Marketing,
            Content Creation, and Social Media Strategy. Enhance visibility through expert SEO and PPC management.
          </p>
        </div>

        {/* Right Side */}
        <div className="col-span-1 grid grid-cols-2 md:grid-cols-1 gap-x-10 gap-y-8 md:col-end-[none]">
          <div>
            <p className="text-2xl font-bold text-white">1,200+</p>
            <p className="text-sm text-[#646A69]">Clients</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-white">20+</p>
            <p className="text-sm text-[#646A69]">Branches</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-white">200+</p>
            <p className="text-sm text-[#646A69]">Number of Employees</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-white">315+</p>
            <p className="text-sm text-[#646A69]">Sales Representative</p>
          </div>
        </div>
      </div>
    </section>
  )
}
