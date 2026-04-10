import Image from "next/image";

interface ProjectCardProps {
  title: string;
  image: {
    src: string;
    alt: string;
  };
  onClick: () => void;
}

export function ProjectCard({ title, image, onClick }: ProjectCardProps) {
  return (
    <button onClick={onClick} className="group block w-full text-left">
      <div className="overflow-hidden rounded-lg">
        {/* Project Image */}
        <div className="relative aspect-4/3 overflow-hidden bg-gray-200">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>

        {/* Project Title */}
        <h3 className="mt-4 text-base font-medium text-mega-teal transition-colors group-hover:text-mega-dark-teal">
          {title}
        </h3>
      </div>
    </button>
  );
}
