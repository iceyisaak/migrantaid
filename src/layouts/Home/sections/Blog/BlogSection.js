import Button from '../../../../components/Button';

const BlogSection = () => {
  return (
    <section className='flex flex-col py-96 items-center'>
      <h3 className="font-heading text-7xl text-center mb-36">
        BlogSection
      </h3>
      <div className='bg-gray-300 mb-28 w-7/12'>
        CARD:VERTICAL
      </div>
      <div className='mx-auto'>
        <Button btnText="Read More" />
      </div>
    </section>
  );
};
export default BlogSection;