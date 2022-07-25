const Button = (props) => {

  const { btnText } = props;

  return (
    <button className="
      bg-gray-900 
      text-gray-50
      px-10
      py-5
      h-24
      w-116
      text-2xl
    ">
      {btnText}
    </button>
  );
};
export default Button;