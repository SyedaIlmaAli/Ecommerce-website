import Image from 'next/image'
import NavImg from '@/assets/image/NavImg.png'

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-myLightBlue via-myMediumBlue to-myDarkBlue text-myWhite py-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Welcome to Aura Tales</h1>
          <p className="text-lg lg:max-w-2xl max-w-xl mt-5 mx-auto scroll-m-20 font-medium tracking-tight">
            Discover elegance, empowerment, and a wardrobe that speaks to your unique style. 
            At Aura Tales, we believe every woman deserves to feel confident and beautiful.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-grow py-16 px-4 bg-gray-100">
        <div className="container mx-auto max-w-7xl">
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div>
              <Image 
                src={NavImg}
                alt="About Aura Tales" 
                className="w-fit h-fit rounded-lg "
              />
            </div>

            {/* Text Content */}
            <div>
              <h2 className="lg:text-4xl text-myBlackHead scroll-m-20 border-b pb-2 text-3xl font-bold tracking-tight first:mt-0">Our Story</h2>
              <p className="text-myBlackPara mb-4 text-lg max-w-2xl mt-5 mx-auto scroll-m-20 font-medium tracking-tight">
                At Aura Tales, we are passionate about creating fashion that reflects individuality and elegance. 
                Our carefully curated collection is designed to empower women, offering timeless and versatile pieces that 
                blend comfort with contemporary design.
              </p>
              <p className="text-myBlackPara mb-4 text-lg max-w-2xl mt-5 mx-auto scroll-m-20 font-medium tracking-tight">
                Whether you&apos;re dressing for work, a casual outing, or a special occasion, Aura Tales is here to ensure you 
                find the perfect ensemble that mirrors your unique style and confidence.
              </p>
            </div>
          </section>

          {/* Mission Section */}
          <section className="mt-20 bg-white p-12 rounded-lg shadow-md">
            <h2 className="lg:text-4xl text-center mb-8 text-myBlackHead scroll-m-20 border-b pb-2 text-3xl font-bold tracking-tight first:mt-0">Our Mission</h2>
            <p className=" text-center max-w-3xl text-myBlackPara mb-4 text-lg mt-5 mx-auto scroll-m-20 font-medium tracking-tight">
              Our mission at Aura Tales is to inspire confidence in every woman through fashion that feels both empowering 
              and stylish. We prioritize quality and sustainability, ensuring that every piece we offer resonates with the 
              modern woman’s lifestyle.
            </p>
          </section>
        </div>
      </main>

      
    </div>
  )
}

export default About
