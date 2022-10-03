import React,{useEffect} from 'react'
import ErrorPage from '../../assets/images/error.jpeg'
import ButtonContainedLink from '../../components/global/button/ButtonContainedLink'
import Body1 from '../../components/global/heading/Body1'
import H1Title from '../../components/global/heading/H1Title'
import H4Title from '../../components/global/heading/H4Title'

const Error404Page = () => {
  useEffect(()=>{
    document.title="Error"
  },[])
  return (
    <div style={{backgroundImage: `url(${ErrorPage})`}}  className=" py-32 sm:py-52 lg:py-96 bg-cover bg-no-repeat bg-center relative before:absolute before:w-full before:h-full before:bg-black before:bg-opacity-80 flex items-center">
       <div className='container mx-auto px-4 z-2 '>
          <H1Title color='text-white' title='404'/>
          <H4Title  color='text-tertiary my-4' title="Something went wrong." />
          <Body1 customClass='mb-12 max-w-2xl w-full' color='text-white'>
          We can't find the page you are looking for. You can check out our Help Center
or head back to the Homepage.
          </Body1>
          <ButtonContainedLink customClass='uppercase py-3  ' to="/">Back to Homepage</ButtonContainedLink>
       </div>
    </div>
  )
}

export default Error404Page