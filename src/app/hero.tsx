'use client';

function Hero() {
  return (
    <div className="relative min-h-screen w-full bg-[url('/image/church-5.jpg')] bg-cover bg-no-repeat">
      <div className='absolute inset-0 h-full w-full bg-gray-900/60' />
      <div className='grid min-h-screen px-8'>
        <div className='container relative z-10 my-auto mx-auto grid place-items-center text-center'>
          <h1 className='md:max-w-full lg:max-w-3xl text-white text-5xl font-bold'>
            Soluções práticas e bíblicas para servir com excelência.
          </h1>
          <h2 className='mt-6 mb-10 w-full md:max-w-full lg:max-w-3xl text-white text-xl'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu
            volutpat orci, a feugiat augue. Nunc non hendrerit urna. Mauris
            pharetra quam quis libero ultrices pretium. Integer sed pellentesque
            elit
          </h2>
          <div>
            <button color='white'>Acesse hoje</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Hero;
