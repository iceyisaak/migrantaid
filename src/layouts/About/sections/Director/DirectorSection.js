import Button from "../../../../components/Button";
import Card from "../../../../components/Card";


const DirectorSection = () => {
  return (
    <section className="p-52 flex flex-col items-center">
      <h2 className="text-9xl text-center font-heading mb-60">
        Board of Directors
      </h2>
      <div className="w-full flex justify-center bg-red-300 mb-40">
        <Card
          title="John Doe"
          img="https://via.placeholder.com/350x500.png"
          details="President"
          variant='vertical'
        />
        <Card
          title="Jane Doe"
          img="https://via.placeholder.com/350x500.png"
          details="Vice-President"
          variant='vertical'
        />
        <Card
          title="Ann Lynn"
          img="https://via.placeholder.com/350x500.png"
          details="Vice-President"
          variant='vertical'
        />
      </div>
      <Button btnText='See More' />
    </section>
  );
};
export default DirectorSection;