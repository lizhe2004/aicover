import Social from "@/components/social";

export default function () {
  return (
    <section>
      <div className="w-screen flex-col px-6 py-20 lg:flex lg:px-10 xl:px-24">
        <div className="lg:flex lg:flex-row lg:justify-between">
          <div>
            <p>AI Cover</p>
            <p className="font-inter mt-4 max-w-[350px] text-base font-light text-gray-500">
              AI 红包封面生成器
            </p>
            <div className="mb-8 mt-6">{/* <Social /> */}</div>
          </div>
           
          <div className="mt-10 flex flex-col lg:mt-0">
            <div className="mb-4 flex flex-row items-center">
              <p className="block">联系方式: </p>
              <p className="font-inter ml-4 text-black">lizhe2004#gmail#com</p>
            </div>
          </div>
        </div>
        <div className="mx-auto my-12 w-full border border-[#E4E4E7] lg:my-20"></div>
        <div>
          <p className="font-inter text-center text-sm text-gray-500 lg:mt-0">
            © Copyright 2024.{" "}
            <a
              href="https://aicover.design"
              target="_blank"
              className="text-primary hidden md:inline-block"
            >
              aicover.design
            </a>{" "}
            All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
