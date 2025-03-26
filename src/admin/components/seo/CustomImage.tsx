const CustomImage = ({ src }: { src: string }) => {
  return (
    <span className="">
      <img
        src={src}
        className="aspect-square h-32 object-cover border rounded-md"
      />
    </span>
  );
};

export default CustomImage;
