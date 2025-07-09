export default function Hero() {
  return (
    <section className="relative bg-cover bg-center h-screen bg-[url('./assets/palm-trees.jpg')] flex items-center justify-center text-center bg-blue-500">
      <div className='relative z-10 text-black p-10 bg-white rounded-t-4xl'>
        <h2 className='text-3xl sm:text-4xl md:text-5xl font-light mb-4 font-serif'>
          Find Your Perfect
          <br />
          Travel Destination
        </h2>
        <p className='mb-6'>
          Book flights, hotels, and experiences all in one place.
        </p>
        <button className='cursor-pointer bg-blue-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-blue-500'>
          Start Your Journey
        </button>
        <hr className='mt-8 w-30 m-auto border-t-4 border-red-600' />
      </div>
    </section>
  );
}
