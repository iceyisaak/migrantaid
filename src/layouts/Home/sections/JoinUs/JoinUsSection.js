import Button from '../../../../components/Button';
import Card from '../../../../components/Card';

const JoinUsSection = () => {
  return (
    <section className='flex flex-col items-center py-96'>
      <h3 className="text-8xl font-heading text-center mb-36">
        Join Us
      </h3>
      <div className='mb-28'>
        <Card
          title="This is Card #1"
          img="https://via.placeholder.com/330x200.png"
          details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in volutpat lacus. Etiam id leo feugiat, volutpat tellus eu, mattis leo. Fusce consectetur dapibus orci sed pretium. Mauris"
        />
        <Card
          title="This is Card #2"
          img="https://via.placeholder.com/330x200.png"
          details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in volutpat lacus. Etiam id leo feugiat, volutpat tellus eu, mattis leo. Fusce consectetur dapibus orci sed pretium. Mauris"
        />
        <Card
          title="This is Card #3"
          img="https://via.placeholder.com/330x200.png"
          details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in volutpat lacus. Etiam id leo feugiat, volutpat tellus eu, mattis leo. Fusce consectetur dapibus orci sed pretium. Mauris"
        />
      </div>
      <Button btnText="More Offers" />
    </section>
  );
};
export default JoinUsSection;