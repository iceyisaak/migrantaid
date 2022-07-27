import Button from '../../../../components/Button';
import Card from '../../../../components/Card';

const BlogSection = () => {
  return (
    <section className='flex flex-col py-96 items-center'>
      <h2 className="font-heading text-7xl text-center mb-36">
        Blog Posts
      </h2>
      <div className='flex justify-between mb-28 w-7/12'>
        <Card
          title="This is Card #1"
          img="https://via.placeholder.com/330x200.png"
          details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in volutpat lacus. Etiam id leo feugiat, volutpat tellus eu, mattis leo. Fusce consectetur dapibus orci sed pretium. Mauris"
          variant='vertical'
        />
        <Card
          title="This is Card #1"
          img="https://via.placeholder.com/330x200.png"
          details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in volutpat lacus. Etiam id leo feugiat, volutpat tellus eu, mattis leo. Fusce consectetur dapibus orci sed pretium. Mauris"
          variant='vertical'
        />
        <Card
          title="This is Card #1"
          img="https://via.placeholder.com/330x200.png"
          details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in volutpat lacus. Etiam id leo feugiat, volutpat tellus eu, mattis leo. Fusce consectetur dapibus orci sed pretium. Mauris"
          variant='vertical'
        />
      </div>
      <div className='mx-auto'>
        <Button btnText="Read More" />
      </div>
    </section>
  );
};
export default BlogSection;