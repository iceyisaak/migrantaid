import Image from 'next/image';
import Link from 'next/link';

const Card = (props) => {

  const { title, img, details } = props;
  return (
    <article className='flex mb-10 mx-auto w-7/12'>
      <div className='block w-full'>
        <Image
          src={img}
          alt='Card Img'
          layout='responsive'
          width={330}
          height={200}
          objectFit='contain'
          priority
        />
      </div>
      <div className='flex flex-col justify-center px-10 bg-gray-200'>
        <h3 className='text-4xl mb-3'>
          {title}
        </h3>
        <p className='text-2xl mb-3'>
          {details}
        </p>
        <Link href="#">
          <a className='text-2xl underline'>
            Read more...
          </a>
        </Link>
      </div>
    </article>
  );
};
export default Card;