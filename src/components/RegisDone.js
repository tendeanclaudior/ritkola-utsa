import background from '../assets/images/img-bg.png'
import ceklist from '../assets/images/ceklist.png'
import user from '../assets/images/user.png'
import Sponsor from './Sponsor'

const RegisDone = () => {
    return (
        <div>
            <div>
               <img className='w-full h-[1800px] object-cover mix-blend-overlay absolute' src={background} alt="/" />
            </div>
            <div className='pt-28'>
                <div className='container relative mx-auto pb-80 bg-[#FAF8F8] rounded-3xl'>
                    <img src={ceklist} alt='/' className='mx-auto w-263 h-254 pt-24'/>
                    <div className='container flex' >
                        <h1 className='font-Poppins mt-40 mx-auto text-black  text-8xl'>Thank You</h1>
                    </div>
                    <div className='flex justify-center'>
                        <div className='w-[565px] h-[278px] flex flex-direction:row bg-[#F8DECC] rounded-3xl py-16 pr-[86px] pl-16 mt-16'>
                            <img src={user} alt='/' className='w-133 h-150'/>
                            <div className='ml-28'>
                                <h3 className='font-Poppins text-4xl mb-16'>Nama</h3>
                                <h3 className='font-Poppins text-4xl'>No. Regis</h3>
                            </div>
                        </div>
                    </div>
                    <h3 className='text-center text-4xl mx-52 mt-32 font-Poppins'>
                            Terima Kasih sudah menjadi bagian dari Ritkola Utsa dan sudah mensupport ekosistem ekonomi kreatif MINAHASA UTARA
                    </h3>
                </div>
            </div>
            <div className='mt-[149px]'>
                <Sponsor />
            </div>
        </div>
    )
}
export default RegisDone
