import Button from '../../../../components/Button';
import Card from '../../../../components/Card';

const JoinUsSection = () => {
  return (
    <section className='flex flex-col items-center py-96'>
      <h2 className="text-8xl font-heading text-center mb-36">
        Join Us
      </h2>
      <div className='mb-28 flex flex-col items-center'>
        <Card
          title="This is Card #1"
          img="https://via.placeholder.com/330x200.png"
          details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in volutpat lacus. Etiam id leo feugiat, volutpat tellus eu, mattis leo. Fusce consectetur dapibus orci sed pretium. Mauris"
          variant='horizontal-r'
        />
        <Card
          title="This is Card #2"
          img="https://via.placeholder.com/330x200.png"
          details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in volutpat lacus. Etiam id leo feugiat, volutpat tellus eu, mattis leo. Fusce consectetur dapibus orci sed pretium. Mauris"
          variant='horizontal-r'
        />
        <Card
          title="This is Card #3"
          img="https://via.placeholder.com/330x200.png"
          details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in volutpat lacus. Etiam id leo feugiat, volutpat tellus eu, mattis leo. Fusce consectetur dapibus orci sed pretium. Mauris"
          variant='horizontal-r'
        />
      </div>
      <Button btnText="More Offers" />
    </section>
  );
};
export default JoinUsSection;