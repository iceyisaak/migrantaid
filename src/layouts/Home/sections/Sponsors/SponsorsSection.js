import Image from 'next/image';

const SponsorsSection = () => {
  return (
    <section className='flex flex-col items-center py-96'>
      <h2 className="text-8xl font-heading text-center mb-36">
        Our Sponsors
      </h2>
      <div className='flex flex-wrap justify-evenly w-10/12 mb-28'>
        <figure className='w-96 bg-red-500'>
          <Image src="https://via.placeholder.com/424x247.png"
            alt='Sponsor 1'
            layout='responsive'
            width={424}
            height={247}
            objectFit='contain'
            priority
          />
        </figure>
        <figure className='w-96 bg-red-500'>
          <Image src="https://via.placeholder.com/424x247.png"
            alt='Sponsor 2'
            layout='responsive'
            width={424}
            height={247}
            objectFit='contain'
            priority
          />
        </figure>
        <figure className='w-96 bg-red-500'>
          <Image src="https://via.placeholder.com/424x247.png"
            alt='Sponsor 3'
            layout='responsive'
            width={424}
            height={247}
            objectFit='contain'
            priority
          />
        </figure>
      </div>
    </section>
  );
};
export default SponsorsSection;