import HomeSocialLinks from "@/components/HomeSocialLinks";


export default function Home() {
  return (
    <div className="bg-m_black h-screen min-h-screen min-w-[100vw] overflow-hidden">
      <div className="bg-orange-40 w-full h-[2.25rem]"></div>
      <div className="flex h-[calc(100vh-5rem)]">
        <div className="bg-yellow-40 w-[2.25rem] h-[100%] py-6 flex justify-center items-end">
          <HomeSocialLinks />
        </div>
        <main className="border-[2.5px] w-full flex flex-col border-m_red p-4 relative justify-between">
          <h1>
            <span className="text-m_red text-4xl text-[2.6rem] font-bold">David Urbano</span>
            <div className="text-m_white gap-1 text-lg">
              Software Developer
              <span className="text-m_red font-bold"> & </span>
              Photographer
            </div>
          </h1>
          <div className="bg-green-400"></div>
          <div className="text-m_white">
            <p className="w-2/5 max-w-48 italic font-light text-base xs:text-lg"> 
              <span className="font-semibold">Born in 2003 <br/>
              in Lima, Peru.<br/></span>
              I believe software can help create a better future. By combining our creativity with the power of technology, we can build a world that benefits everyone.
            </p>
            <div className="w-3/5">

            </div>
          </div>
        </main>
        <div className="bg-green-40 w-[2.25rem] h-[100%] py-4 flex justify-center items-start">
          <p className="flex vertical-text text-m_red">
            <a href="mailto:davidurbano.dev@gmail.com">
              davidurbano.dev@gmail.com
            </a>
          </p>
        </div>
      </div>
      <div className="bg-blue-40 w-full h-[2.25rem]">
        
      </div>
      
    </div>
  );
}
