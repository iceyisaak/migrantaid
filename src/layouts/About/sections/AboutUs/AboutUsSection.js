import Image from 'next/image';

const AboutUsSection = () => {
  return (
    <section className='px-52 py-32'>
      <h1 className='text-9xl'>
        About Us
      </h1>
      <article>
        <Image
          src="https://via.placeholder.com/540x370.png"
          alt='Hero Img 3'
          layout='intrinsic'
          width={540}
          height={370}
          objectFit='contain'
          priority
        />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias blanditiis aspernatur sunt nam natus veniam ratione, ducimus laborum non voluptate rerum ipsa quibusdam, commodi qui suscipit voluptates perferendis sit assumenda maiores dolorum sequi saepe quo esse. Laudantium, exercitationem quidem consequuntur esse dicta dolorem. Non recusandae voluptate nisi magnam placeat repudiandae inventore accusantium quia incidunt, sit quae ullam deserunt veniam autem eaque, animi totam! Tempora, laboriosam repellendus? Repudiandae libero, natus ipsum, est illo quo id dignissimos asperiores aut ea unde similique soluta voluptates impedit eaque explicabo mollitia reiciendis suscipit repellendus quis nesciunt exercitationem.
        </p>
        <p>
          Corrupti, delectus autem, voluptates ea hic, debitis ipsam voluptatem maxime nulla amet sit! Doloremque quo reprehenderit iure, quis veritatis, nobis ab vero sapiente labore consequatur necessitatibus, rem fugiat eligendi beatae! Iure accusamus repellendus consequuntur nesciunt rerum sequi, blanditiis doloremque, fugiat at commodi deserunt dolor. Distinctio provident earum corrupti adipisci labore blanditiis nesciunt dolor praesentium veniam nobis repellendus quidem qui voluptatem enim ullam assumenda dolorem eveniet minus quo facilis laboriosam, fugit atque unde debitis! Illum debitis consequatur est distinctio dolor? Enim rem explicabo odio optio molestiae nobis autem dolores quas quidem! Expedita possimus repudiandae aliquid nihil perferendis? Illum illo aperiam cupiditate optio soluta inventore, quibusdam suscipit possimus tempore non.
        </p>
      </article>
    </section>
  );
};
export default AboutUsSection;