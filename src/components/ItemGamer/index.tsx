interface ItGamer {
  id: number;
  src: string;
  alt: string;
  className: string;
}

function ItemGamer({ id, src, className, alt }: ItGamer) {
  return (
    <div className={className} key={id}>
      <img src={src} alt={alt} />
    </div>
  );
}

export default ItemGamer;
