import { FC } from "react";
import Image from "next/image";
const Overview: FC = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
      <div className="flex justify-center">
        <Image
          src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
          alt="image 3"
          className="h-full w-full object-cover"
          width={384}
          height={384}
          unoptimized
        />
        {/* <img
          src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
          alt="image 3"
          className="h-full w-full object-cover"
        /> */}
      </div>
      <div>
        <div className="text-light-purple text-xl font-bold">Overview</div>
        <div className=" text-4xl font-bold">IDINTECH</div>
        <div className="py-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          officiis facilis similique aliquam repellat expedita iusto veritatis,
          aliquid, distinctio, consequuntur dicta quod nostrum voluptatum
          excepturi repudiandae accusantium? Modi rem culpa assumenda.
          <br />
          <br />
          Consequuntur pariatur a distinctio corrupti incidunt quibusdam culpa
          dicta sequi vel perspiciatis maxime molestiae error nesciunt
          laudantium odit unde illum, blanditiis tempore sit. Ipsum nobis optio
          expedita rerum harum commodi, molestiae repudiandae assumenda
          voluptate dolore saepe ea incidunt eligendi laudantium quis in! Porro
          ut illo reprehenderit corrupti odit dolore.
          <br />
          <br />
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus
          id, ullam aliquid consectetur nemo doloribus sit in fugit, nam
          repellendus dicta omnis voluptatibus, repellat mollitia quam culpa
          ipsum. Obcaecati voluptate necessitatibus eius? Esse assumenda atque
          numquam aspernatur quo quasi? Qui quis voluptatibus quidem veniam
          maiores architecto harum repellat saepe a facere incidunt, non magni
          accusamus eaque dignissimos fugiat vitae aliquid tempora quaerat natus
          similique quisquam vel earum?
        </div>
        <button className="bg-gradient-to-r from-light-blue to-light-purple  rounded-lg px-8 py-3 text-light-cyan font-medium">
          About Us
        </button>
      </div>
    </div>
  );
};
export default Overview;
