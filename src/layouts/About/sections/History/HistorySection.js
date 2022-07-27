import Image from 'next/image';

const HistorySection = () => {
  return (
    <section className="p-52 mt-52">
      <h2 className="text-9xl mb-40 text-center font-heading">
        History
      </h2>
      <div className='flex justify-center'>
        <article className='flex w-7/12 bg-gray-200'>
          <figure className='w-full'>
            <Image
              src="https://via.placeholder.com/330x860.png"
              alt='History Image'
              layout='responsive'
              width={330}
              height={860}
              objectFit='cover'
              objectPosition='center'
              priority
            />
          </figure>
          <section className='px-20 py-40 flex-[0_0_60%]'>
            <h3 className='text-6xl mb-16'>Timeline:</h3>
            <article className='flex mb-10'>
              <h4 className='mr-10 text-2xl'>2022</h4>
              <p className='text-2xl'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur temporibus officia fugiat quaerat! Consequuntur deleniti doloribus veritatis, ipsa quae officiis quis alias ut atque fugiat quos, dignissimos vel iusto laborum numquam inventore excepturi officia ipsam ullam! Inventore delectus consectetur voluptates, natus iste nihil officia, repellendus aperiam tempora quibusdam, sunt minus.
              </p>
            </article>
            <article className='flex mb-10'>
              <h4 className='mr-10 text-2xl'>2021</h4>
              <p className='text-2xl'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur temporibus officia fugiat quaerat! Consequuntur deleniti doloribus veritatis, ipsa quae officiis quis alias ut atque fugiat quos, dignissimos vel iusto laborum numquam inventore excepturi officia ipsam ullam! Inventore delectus consectetur voluptates, natus iste nihil officia, repellendus aperiam tempora quibusdam, sunt minus.
              </p>
            </article>
            <article className='flex mb-10'>
              <h4 className='mr-10 text-2xl'>2019</h4>
              <p className='text-2xl'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur temporibus officia fugiat quaerat! Consequuntur deleniti doloribus veritatis, ipsa quae officiis quis alias ut atque fugiat quos, dignissimos vel iusto laborum numquam inventore excepturi officia ipsam ullam! Inventore delectus consectetur voluptates, natus iste nihil officia, repellendus aperiam tempora quibusdam, sunt minus.
              </p>
            </article>
            <article className='flex mb-10'>
              <h4 className='mr-10 text-2xl'>2018</h4>
              <p className='text-2xl'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur temporibus officia fugiat quaerat! Consequuntur deleniti doloribus veritatis, ipsa quae officiis quis alias ut atque fugiat quos, dignissimos vel iusto laborum numquam inventore excepturi officia ipsam ullam! Inventore delectus consectetur voluptates, natus iste nihil officia, repellendus aperiam tempora quibusdam, sunt minus.
              </p>
            </article>
          </section>
        </article>
      </div>
    </section>
  );
};
export default HistorySection;