import BannerWithDots from "@/components/CanvasWeb";
import HomeSocialLinks from "@/components/HomeSocialLinks";





export default function Home() {
  return (
    <div className="bg-m_black h-screen min-h-screen min-w-[100vw] overflow-hidden">
      <div className="bg-orange-40 w-full h-[2.25rem]"></div>
      <div className="flex h-[calc(100vh-5rem)]">
        <div className="bg-yellow-40 w-[2.25rem] h-[100%] py-6 flex justify-center items-end">
          <HomeSocialLinks />
        </div>
       <BannerWithDots />
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