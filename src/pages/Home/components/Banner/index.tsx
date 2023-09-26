import Button from '../../../../components/Button';

export default function Banner() {
  return (
    <div
      className="h-[680px] px-20 flex flex-col justify-center gap-4"
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.80) 0%, rgba(0, 0, 0, 0.80) 100%), url('/images/banner.jpg')`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <h2 className="text-2xl font-medium text-white uppercase">
        Projetado por novos desejos
      </h2>
      <h1 className="max-w-xs text-8xl font-bold text-white uppercase">
        RRS Striker
      </h1>
      <Button>Ver modelo</Button>
    </div>
  );
}
