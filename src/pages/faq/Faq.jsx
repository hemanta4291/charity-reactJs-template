import React,{useEffect} from 'react'
import Accordian from '../../components/global/accordian/Accordian'
import BreadCrumb from '../../components/global/breadCrumb/BreadCrumb'
import Body1 from '../../components/global/heading/Body1'
import H2Title from '../../components/global/heading/H2Title'
import PreHeader from '../../components/global/heading/PreHeader'
import BecomeYoutuber from '../../components/section/becomeYoutuber/BecomeYoutuber'
import Feature from '../../components/section/feature/Feature'
import LatestNews from '../../components/section/letestNews/LatestNews'



const Faq = () => {

  const breadCrumbArray = [
    {
      id:1,
      title:'Home',
      link:'/',
      active:false,
    },
    {
      id:2,
      title:'Faq',
      link:'/faq ',
      active:true,
    }
  ]
  useEffect(()=>{
    document.title="Faq"
  },[])
  return (
    <div className='faq '>
        <BreadCrumb title="FAQ" breadCrumbArray={breadCrumbArray}/>
        <div className='py-12 sm:py-20'>
          <div className='container max-w-2xl mx-auto px-4 text-center'>
              <PreHeader p="pb-2"title="Recently asked questions"/>
              <H2Title p="pb-4" title="Recently asked questions" />
              <Body1 color='text-gray-800' customClass='pb-12'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id augue semper arcu enim viverra sit ipsum. Nunc lorem a vulputate eget bibendum id et.
              </Body1>
              
          </div>
          <div className='container mx-auto px-4 '>
            <Accordian customClass='mb-4' title='Nulla eu purus scelerisque, dignissim diam.'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id augue semper arcu enim viverra sit ipsum. Nunc lorem a vulputate eget bibendum id et. Eget nunc, eu, molestie tellus sollicitudin vitae consequat adipiscing. Mauris sit quam est dui vitae.
            </Accordian>
            <Accordian customClass='mb-4' title='Nulla eu purus scelerisque, dignissim diam.'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id augue semper arcu enim viverra sit ipsum. Nunc lorem a vulputate eget bibendum id et. Eget nunc, eu, molestie tellus sollicitudin vitae consequat adipiscing. Mauris sit quam est dui vitae.
            </Accordian>
            <Accordian customClass='mb-4' title='Nulla eu purus scelerisque, dignissim diam.'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id augue semper arcu enim viverra sit ipsum. Nunc lorem a vulputate eget bibendum id et. Eget nunc, eu, molestie tellus sollicitudin vitae consequat adipiscing. Mauris sit quam est dui vitae.
            </Accordian>
            <Accordian customClass='mb-4' title='Nulla eu purus scelerisque, dignissim diam.'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id augue semper arcu enim viverra sit ipsum. Nunc lorem a vulputate eget bibendum id et. Eget nunc, eu, molestie tellus sollicitudin vitae consequat adipiscing. Mauris sit quam est dui vitae.
            </Accordian>
            <Accordian customClass='mb-4' title='Nulla eu purus scelerisque, dignissim diam.'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id augue semper arcu enim viverra sit ipsum. Nunc lorem a vulputate eget bibendum id et. Eget nunc, eu, molestie tellus sollicitudin vitae consequat adipiscing. Mauris sit quam est dui vitae.
            </Accordian>
            <Accordian title='Nulla eu purus scelerisque, dignissim diam.'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id augue semper arcu enim viverra sit ipsum. Nunc lorem a vulputate eget bibendum id et. Eget nunc, eu, molestie tellus sollicitudin vitae consequat adipiscing. Mauris sit quam est dui vitae.
            </Accordian>
            
          </div>
        </div>
        <BecomeYoutuber wrCustomClass="py-16 sm:py-28 md:py-60 mb-12  sm:mb-20"/>
        <Feature/>
        <LatestNews wrCustomClass="pt-12 sm:pt-20 pb-12 sm:pb-20 2xl:pb-32"/>
    </div>
  )
}

export default Faq