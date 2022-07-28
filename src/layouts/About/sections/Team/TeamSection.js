import Button from "../../../../components/Button";
import Card from "../../../../components/Card";

const TeamSection = () => {
  return (
    <section className="py-72 px-40 flex flex-col items-center">
      <h2 className="text-8xl font-heading text-center mb-52">
        Our Team
      </h2>
      <div className="flex flex-wrap justify-center mb-32">
        <Card
          title="Rita Brown"
          img="https://via.placeholder.com/350x350.png"
          details="Project Coordinator"
          variant='square'
        />
        <Card
          title="Tim Green"
          img="https://via.placeholder.com/350x350.png"
          details="Project Coordinator"
          variant='square'
        />
        <Card
          title="Tony Ma"
          img="https://via.placeholder.com/350x350.png"
          details="Project Coordinator"
          variant='square'
        />
        <Card
          title="Chris White"
          img="https://via.placeholder.com/350x350.png"
          details="Public Relation"
          variant='square'
        />
        <Card
          title="Paula Clay"
          img="https://via.placeholder.com/350x350.png"
          details="Human Resource"
          variant='square'
        />
        <Card
          title="Sarah Doll"
          img="https://via.placeholder.com/350x350.png"
          details="Administration"
          variant='square'
        />
      </div>
      <Button btnText="See Our Team" />
    </section>
  );
};
export default TeamSection;