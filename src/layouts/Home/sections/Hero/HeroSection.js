import Button from '../../../../components/Button';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="min-h-5/6 flex px-52 py-32 ">
      <div className="w-1/3 self-center">
        <h1 className="text-9xl mb-11">
          Peace through integration
        </h1>
        <p className='mb-11 text-lg'>
          At MigrantAid, we believe in the power of social integration for the betterment of society.
        </p>
        <div className='flex flex-col h-52 justify-between'>
          <Button btnText="About Us" />
          <Button btnText="Our Offer" />
        </div>
      </div>
      <div className="image-section w-2/3 flex px-32 py-12">
        <div className='w-3/6 mr-2 block'>
          <Image src="https://via.placeholder.com/320x420.png"
            alt='Hero Img 1'
            layout='responsive'
            width={320}
            height={420}
            objectFit='contain'
            priority
          />
        </div>
        <div className='w-3/6 '>
          <div className='mt-2 mb-3 block'>
            <Image src="https://via.placeholder.com/320x200.png"
              alt='Hero Img 2'
              layout='responsive'
              width={320}
              height={200}
              objectFit='contain'
              priority
            />
          </div>
          <Image src="https://via.placeholder.com/320x200.png"
            alt='Hero Img 3'
            layout='responsive'
            width={320}
            height={200}
            objectFit='contain'
            priority
          />
        </div>
      </div>
    </section>
  );
};
export default HeroSection;