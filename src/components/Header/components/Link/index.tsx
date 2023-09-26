type LinkProps = {
  path: string
  name: string
}

const linkClass = 'after:absolute after:bottom-[-8px] after:w-0 after:h-0.5 after:bg-white after:rounded-full hover:after:w-full after:transition-all'

export default function Link({ path, name }: LinkProps) {
  return (
    <div className={`relative flex ${linkClass}`}>
      <a href={`${path}`} className="text-white font-light uppercase">
        {name}
      </a>
    </div>
  );
}
