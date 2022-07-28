import Image from 'next/image';
import Link from 'next/link';

const Card = (props) => {

  const { title, img, details, variant, detailLink } = props;
  return (
    <article className={
      `flex mb-10 w-7/12 
      ${variant === 'horizontal-l' && 'flex-row'}
      ${variant === 'horizontal-r' && 'flex-row-reverse'}
      ${variant === 'vertical-text' && 'flex-col w-4/12 mx-4'}
      ${variant === 'vertical-image' && 'flex-col w-4/12 mx-4'}
      ${variant === 'square' && 'flex-col w-3/12 mx-4'}
    `}>
      <figure className='block w-full'>

        {
          (variant === 'horizontal-l' || variant === 'horizontal-r' || variant === 'vertical-text' || !variant) &&
          < Image
            src={img}
            alt='Card Img'
            layout='responsive'
            width={`330`}
            height={`200`}
            objectFit='contain'
            priority
          />
        }
        {
          variant === 'vertical-image' &&
          <Image
            src={img}
            alt='Card Img'
            layout='responsive'
            width={`350`}
            height={`500`}
            objectFit='contain'
            priority
          />
        }
        {
          variant === 'square' &&
          < Image
            src={img}
            alt='Card Img'
            layout='responsive'
            width={`350`}
            height={`350`}
            objectFit='contain'
            priority
          />
        }
      </figure>
      <article className={`
        flex flex-col justify-center px-10 bg-gray-200 
        ${variant === 'vertical-text' && 'py-16'}
        ${variant === 'vertical-image' && 'py-10'}
        ${variant === 'square' && 'py-10'}
      `}>
        <h3 className='text-4xl mb-3'>
          {title}
        </h3>
        <p className={`text-2xl 
          ${variant === 'horizontal-l' || 'horizontal-r' && 'mb-3'}
          ${variant === 'vertical-text' && 'mb-8'}
          ${variant === 'square' && 'mb-8'}
        `}>
          {details}
        </p>
        {
          detailLink &&
          <Link href="#">
            <a className='text-2xl underline'>
              Read more...
            </a>
          </Link>
        }
      </article>
    </ article>
  );
};
export default Card;