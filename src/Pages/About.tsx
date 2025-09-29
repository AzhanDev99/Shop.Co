function About() {
  return (
    <>
      <div className='bg-[#F2F0F1] min-h-screen flex flex-col'>
                            {/* Hero Section */}
        <section className='w-full max-w-6xl mx-auto px-6 py-15 text-center'>
          <h1 className='text-4xl md:text-6xl font-bold text-black mb-4 uppercase'>
            About Us
          </h1>
          <p className='text-lg md:text-xl text-gray-700 max-w-2xl mx-auto'>
            We are an apparel e-commerce brand bringing comfort and style
            together — designed to fit your lifestyle.
          </p>
        </section>

                        {/* line */}
        <div className='h-fit w-full center pt-10 pb-2'>
          <h1 className='h-0.5 w-[80%] bg-black opacity-10'> </h1>
        </div>

                          {/* Mission / Vision Section */}
        <section className='w-full max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center'>
          <div>
            <h2 className='text-3xl font-bold uppercase text-black mb-4'>
              Our Mission
            </h2>
            <p className='text-gray-700 leading-relaxed'>
              Our mission is simple — to redefine everyday fashion. We believe
              in quality, affordability, and timeless design that lets you
              express yourself effortlessly.
            </p>
          </div>
          <div>
            <h2 className='text-3xl font-bold uppercase text-black mb-4'>
              Our Vision
            </h2>
            <p className='text-gray-700 leading-relaxed'>
              We envision a world where sustainable fashion is accessible to
              everyone. That’s why we craft apparel that looks good, feels good,
              and does good for the planet.
            </p>
          </div>
        </section>

        {/* Brand Story Section */}
        <section className='bg-white/70 w-full py-20'>
          <div className='max-w-6xl mx-auto px-6 text-center'>
            <h2 className='text-4xl font-bold uppercase text-black mb-6'>
              Our Story
            </h2>
            <p className='text-gray-700 max-w-3xl mx-auto leading-relaxed'>
              Starting as a small idea to make premium apparel more affordable,
              our journey has grown into a global e-commerce store. From
              timeless basics to statement pieces, every collection we launch is
              built on passion, creativity, and responsibility.
            </p>
          </div>
        </section>

        {/* Values Section */}
        <section className='w-full max-w-6xl mx-auto px-6 py-20'>
          <h2 className='text-3xl font-semibold text-black text-center mb-12'>
            What We Stand For
          </h2>
          <div className='grid md:grid-cols-3 gap-10 text-center'>
            <div className='p-6 rounded-2xl bg-white/70 shadow-sm'>
              <h3 className='text-xl font-semibold text-black mb-2'>Quality</h3>
              <p className='text-gray-700'>
                Every stitch, every fabric — only the best for you.
              </p>
            </div>
            <div className='p-6 rounded-2xl bg-white/70 shadow-sm'>
              <h3 className='text-xl font-semibold text-black mb-2'>
                Sustainability
              </h3>
              <p className='text-gray-700'>
                Eco-friendly processes that care for the planet.
              </p>
            </div>
            <div className='p-6 rounded-2xl bg-white/70 shadow-sm'>
              <h3 className='text-xl font-semibold text-black mb-2'>Style</h3>
              <p className='text-gray-700'>
                Trendy yet timeless designs that never go out of fashion.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className='w-full bg-black text-white py-16 mb-10'>
          <div className='max-w-6xl mx-auto px-6 text-center'>
            <h2 className='text-3xl font-semibold mb-6'>
              Be Part of Our Journey
            </h2>
            <p className='text-lg text-gray-300 mb-8'>
              Explore our collections today and experience apparel like never
              before.
            </p>
            <button className='px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition'>
              Shop Now
            </button>
          </div>
        </section>
      </div>
    </>
  );
}
export default About;
