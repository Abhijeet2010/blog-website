import Button from "@/components/Button";
import Image from "next/image";

const Project = ({ params }) => {
  return (
    <div>
      <h2 className="uppercase text-center font-semibold text-3xl text-gray-400 tracking-[10px] mt-5 ">
        {params.category}
      </h2>

      <div className="flex gap-24 flex-wrap mt-10  items-center p-8">
        <div className="flex flex-col flex-1  gap-8">
          <h1 className="text-5xl ">Test</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid,
            rerum quo, voluptatem molestias pariatur molestiae dolore sed quas
            quae fugiat error suscipit. Exercitationem vero voluptas et
            consequatur incidunt commodi dolorum.
          </p>
          <Button url={"#"} text={"See More"} />
        </div>
        <div className="relative h-[350px] flex-1  w-full">
          <Image
            src={"/technology.jpg"}
            fill={true}
            alt="tech"
            sizes="(max-width: 768px) 100vw"
            priority={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Project;
