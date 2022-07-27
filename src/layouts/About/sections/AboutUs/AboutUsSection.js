import Image from 'next/image';

const AboutUsSection = () => {
  return (
    <section className='px-52 py-52'>
      <h1 className='text-9xl mb-32 font-heading'>
        About Us
      </h1>
      <div className='flex'>
        <article className='flex-[1_0_auto] mr-20'>
          <Image
            src="https://via.placeholder.com/540x370.png"
            alt='Hero Img 3'
            layout='intrinsic'
            width={540}
            height={370}
            objectFit='contain'
            priority
          />
        </article>
        <article className='flex-[0_1_auto]'>
          <p className='mb-10 text-2xl'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias blanditiis aspernatur sunt nam natus veniam ratione, ducimus laborum non voluptate rerum ipsa quibusdam, commodi qui suscipit voluptates perferendis sit assumenda maiores dolorum sequi saepe quo esse. Laudantium, exercitationem quidem consequuntur esse dicta dolorem. Non recusandae voluptate nisi magnam placeat repudiandae inventore accusantium quia incidunt, sit quae ullam deserunt veniam autem eaque, animi totam! Tempora, laboriosam repellendus? Repudiandae libero, natus ipsum, est illo quo id dignissimos asperiores aut ea unde similique soluta voluptates impedit eaque explicabo mollitia reiciendis suscipit repellendus quis nesciunt exercitationem.
          </p>
          <p className='text-2xl'>
            Corrupti, delectus autem, voluptates ea hic, debitis ipsam voluptatem maxime nulla amet sit! Doloremque quo reprehenderit iure, quis veritatis, nobis ab vero sapiente labore consequatur necessitatibus, rem fugiat eligendi beatae! Iure accusamus repellendus consequuntur nesciunt rerum sequi, blanditiis doloremque, fugiat at commodi deserunt dolor.
          </p>
        </article>
      </div>
    </section>
  );
};
export default AboutUsSection;