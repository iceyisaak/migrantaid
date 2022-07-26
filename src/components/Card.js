import Image from 'next/image';
import Link from 'next/link';

const Card = (props) => {

  const { title, img, details, variant } = props;
  return (
    <article className={
      `flex mb-10 w-7/12 
      ${variant === 'horizontal-l' && 'flex-row'}
      ${variant === 'horizontal-r' && 'flex-row-reverse'}
      ${variant === 'vertical' && 'flex-col w-4/12 mx-4 '}
    `}>
      <div className='block w-full'>
        <Image
          src={img}
          alt='Card Img'
          layout='responsive'
          width={`330 ${variant === 'vertical' && '200'}`}
          height={`200 ${variant === 'vertical' && '330'}`}
          objectFit='contain'
          priority
        />
      </div>
      <div className={`flex flex-col justify-center px-10 bg-gray-200 ${variant === 'vertical' && 'py-16'}`}>
        <h3 className='text-4xl mb-3'>
          {title}
        </h3>
        <p className={`text-2xl 
          ${variant === 'horizontal-l' || 'horizontal-r' && 'mb-3'}
          ${variant === 'vertical' && 'mb-8'}
        `}>
          {details}
        </p>
        <Link href="#">
          <a className='text-2xl underline'>
            Read more...
          </a>
        </Link>
      </div>
    </article >
  );
};
export default Card;