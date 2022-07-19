import background from "../assets/images/img-bg2.png";
import kupon from "../assets/images/kupon.png"
import idcard from "../assets/images/idcard.png"
import user from "../assets/images/user.png";
import Sponsor from "./Sponsor";

const RegisDone = () => {
  return (
    <div className="">
        <div className='flex'>
            <div>
                <img src={background} alt="/" className='w-full md:h-[1800px] object-cover mix-blend-overlay absolute'/>
            </div>
            <div className='w-[360px] h-[634px] md:w-[860px] md:h-[1214px] relative bg-[#FAF8F8] mx-auto mt-[100px] md:mt-[305px] rounded-3xl'>
                <div className='w-[228px] h-[164px] md:w-[458px] md:h-[394px] bg-white mx-auto mt-[62px] pt-[65px] md:pt-[128px] rounded-3xl '>
                    <img src={user} alt="/" className='w-[72px] h-[66px] md:w-[218px] md:h-[199px] mx-auto'/>
                </div>
                <div className=''>
                    <div className='flex flex-direction:row mt-[60px] md:mt-[98px] ml-[105px] md:ml-[238px]'>
                        <img src={idcard} alt="/" className='w-[52px] h-[39px] md:w-[106px] md:h-[78px] mr-[22px] md:mr-[44px]' />
                        <h1 className='text-[20px] md:text-[40px] mt-[8px] md:mt-[15px]'>Nama</h1>
                    </div>
                    <div className='flex flex-direction:row ml-[110px] md:ml-[248px]'>
                        <img src={kupon} alt="/" className='w-[42px] h-[18px] md:w-[85px] md:h-[37px] mt-[30px] md:mt-[61px] mr-[28px] md:mr-[55px]'/>
                        <h1 className='text-[20px] md:text-[40px] mt-[24px] md:mt-[47px]'>No. Regis</h1>
                    </div>
                </div>
                <div className='text-center text-[18px] md:text-[40px] mt-[100px] md:mt-[165px]'>
                    <p>Terima Kasih sudah menjadi bagian dari</p>
                    <p>Ritkola Utsa dan sudah mensupport</p>
                    <p>ekosistem ekonomi kreatif</p>
                    <p>MINAHASA  UTARA</p>
                </div>
            </div>
        </div>
        <div className="mt-[149px]">
          <Sponsor />
        </div>
    </div>
  );
};
export default RegisDone;
