import React,{useEffect} from 'react'
import BreadCrumb from '../../components/global/breadCrumb/BreadCrumb'
import Body1 from '../../components/global/heading/Body1'
import BtnTitle from '../../components/global/heading/BtnTitle'
import Strong2 from '../../components/global/heading/Strong2'
import SubTitle from '../../components/global/heading/Subtitle'
import ProgressLise from '../../components/global/progressLine/ProgressLise'
import BecomeYoutuber from '../../components/section/becomeYoutuber/BecomeYoutuber'
import Feature from '../../components/section/feature/Feature'
import LatestNews from '../../components/section/letestNews/LatestNews'
import campaignImg1 from '../../assets/images/campaign1.jpeg'
import H5Title from '../../components/global/heading/H5Title'
import latestPost1 from '../../assets/images/latest-details1.jpeg'
import latestPost2 from '../../assets/images/latest-details2.jpeg'
import LatestSideBox from '../../components/global/latestSideBox/LatestSideBox'
import H2Title from '../../components/global/heading/H2Title'
import Social from '../../components/global/social/Social'
import Icons from '../../components/global/Icons'
import commentImg from '../../assets/images/comment.jpeg'
import commentImg1 from '../../assets/images/comment1.jpeg'
import ButtonContained from '../../components/global/button/ButtonContained'
import H4Title from '../../components/global/heading/H4Title'
import Form from '../../components/global/form/Form'


  const item = {
        id:1,
        image:campaignImg1,
        tag:'Children',
        btnTitle:"Donate Now",
        subtitle:"Iodine fortification of household salt",
        content:" Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id augue semper arcu enim viverra sit ipsum. Nunc lorem a vulputate eget bibendum id et. Eget nunc, eu, molestie tellus sollicitudin vitae consequat adipiscing.",
        percentage:'35',
        Ralsed:"$5,000"
    }

    const socialItems = [
        {
            id:1,
            icon:Icons.fbBlackBgIcon,
            link:'#'
        },
        {
            id:2,
            icon:Icons.linkedBlackBgIcon,
            link:'#'
        },
        {
            id:3,
            icon:Icons.twitterBlackBgIcon,
            link:'#'
        },
        {
            id:4,
            icon:Icons.youtubeBlackBgIcon,
            link:'#'
        },
    ]
    const breadCrumbArray = [
        {
          id:1,
          title:'Home',
          link:'/',
          active:false,
        },
        {
          id:2,
          title:'Causes',
          link:'/causes ',
          active:false,
        },
        {
            id:3,
            title:'Causes Details',
            link:'/causes-details ',
            active:true,
          }
      ]

const CausesDetails = () => {


useEffect(()=>{
    document.title="Causes Details"
  },[])
  return (
    <div className='cause_details'>
        <BreadCrumb title="Causes Details" breadCrumbArray={breadCrumbArray}/>
        <div className='py-12 sm:py-20 container mx-auto px-4'>
            <div className='flex'>
                <div className='basis-auto lg:basis-70%'>
                <div key={item.id} className="relative">
                    <div className='absolute top-2 left-2 bg-primary-container text-center py-2 px-4'>
                          <Strong2 color='text-on-primary-container' title={item.tag}/>
                      </div>
                      <img className='h-80 object-cover w-full roun rounded-t-md' src={item.image} alt="dfd" />
                      <div className='bg-tertiary-container text-center py-3' >
                          <BtnTitle title={item.btnTitle}/>
                      </div>
                      <SubTitle p="pt-6" color='text-gray-800' title={item.subtitle}/>
                      <Body1 p="pt-4" color='text-gray-700'>
                          {item.content}
                      </Body1>
                      <ProgressLise percentageColor="text-gray-800" height='h-3'percentage={item.percentage}/>
                      <div className='flex justify-between pt-4'>
                              <Strong2 color='text-gray-700' title={`Ralsed: ${item.Ralsed}`} />
                              <Strong2 color='text-gray-700' title={`Ralsed: ${item.Ralsed}`} />
                      </div>
                      {/* content */}
                      <div className='pt-14'>
                        <H2Title color="text-gray-800" title="Iodine fortification of household salt"/>
                        <SubTitle customClass='py-4' color="text-gray-900" title="Let’s education for children get good life"/>
                        <Body1 color="text-gray-700">
                                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue mauris malesuada ultricies in elit non vitae. Vitae, amet venenatis lacus praesent maecenas. Praesent platea aenean praesent amet feugiat ut. Odio lacus nunc id dictum convallis consectetur semper lectus. Eu egestas non maecenas aliquet accumsan a. Suspendisse enim, blandit faucibus ut.
                                 Integer nunc mauris ultrices sagittis, ut cursus nec. Netus ullamcorper ut odio at vitae id malesuada fames scelerisque. Eget faucibus feugiat posuere lorem at rutrum interdum vestibulum non. Tellus lobortis blandit fermentum nulla. Ut quis gravida sed nam fusce at aliquam. Vestibulum, nisi vitae, ultricies ac. Nulla orci enim, neque nibh aliquam non aliquam. In imperdiet urna etiam felis, lacus urna, vitae. Proin cras nibh natoque molestie amet elementum. Augue dignissim duis et orci. Sollicitudin sit proin in diam id egestas. Iaculis nascetur morbi habitant sollicitudin neque donec elementum viverra.
                        </Body1>
                        </div>

                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 py-8'>
                            <div className='h-80'>
                                <img className='object-cover h-full w-full' src={latestPost1} alt="latest1" />
                            </div>
                            <div className='h-80'>
                                <img className='object-cover h-full w-full' src={latestPost2} alt="latest1" />
                            </div>
                        </div>
                        <SubTitle title="Let’s education for children get good life"/>
                        <Body1 customClass='pt-4' color='text-gray-700'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultricies mauris ut amet, nulla vel turpis. Diam eu morbi egestas vitae. Non non volutpat tristique posuere varius vitae pellentesque cras non. Ultrices nisi in risus tristique curabitur lobortis. Habitant fusce et augue mattis massa mi, varius enim. 
                        </Body1>
                        <div className='flex items-center gap-2 pt-8'>
                            <Strong2 color="text-gray-800" title='Share:'/>
                            <Social customArray={socialItems} p='p-1' bgColor='' flexDirection='column' justifyContent='flex-start'/>
                        </div>
                        <H5Title CustomClass="pt-6"  title="2 comments"/>
                        <div className=''>
                            <div className='pt-6 flex gap-6 border-b border-gray-200 pb-6'>
                                <div className='h-28 w-28 flex-shrink-0'>
                                    <img className='object-cover w-full h-full rounded' src={commentImg} alt="comment1" />
                                </div>
                                <div className='flex-1'>
                                    <div className='flex justify-between pb-2'>
                                        <SubTitle color='text-gray-800' title="Kevin martin"/>
                                        <ButtonContained customClass='py-0'  borderColor='border-secondary hover:border-primary' bgColor='bg-secondary hover:bg-transparent'>Reply</ButtonContained>
                                        
                                    </div>
                                    <Body1 color='text-gray-700'>
                                        It has survived not only five centuries, but also the leap into electronic typesetting unchanged. It was popularised in the sheets containing lorem ipsum is simply free text.
                                    </Body1>
                                </div>
                            </div>
                            <div className='pt-6 flex gap-6  pb-6'>
                                <div className='h-28 w-28 flex-shrink-0'>
                                    <img className='object-cover w-full h-full rounded' src={commentImg} alt="comment1" />
                                </div>
                                <div className='flex-1'>
                                    <div className='flex justify-between pb-2'>
                                        <SubTitle color='text-gray-800' title="Kevin martin"/>
                                        <ButtonContained customClass='py-0' borderColor='border-secondary hover:border-primary' bgColor='bg-secondary hover:bg-transparent'>Reply</ButtonContained>
                                        
                                    </div>
                                    <Body1 color='text-gray-700'>
                                        It has survived not only five centuries, but also the leap into electronic typesetting unchanged. It was popularised in the sheets containing lorem ipsum is simply free text.
                                    </Body1>
                                </div>
                            </div>
                        </div>

                        <H4Title p="pt-4 pb-6" color='text-gray-800' title="LEAVE A REPLY"/>
                        <div>
                            <input placeholder="First Name" className="mb-4 w-full focus:outline-none border border-gray-300 rounded-sm h-12 2xl:h-14 py-4 px-5 text-lg text-gray-800 " />
                            <input placeholder="Email*" className="mb-4 w-full focus:outline-none border border-gray-300 rounded-sm h-12 2xl:h-14 py-4 px-5 text-lg text-gray-800 " />
                            <textarea placeholder="Write a Comment" className="mb-4 w-full focus:outline-none border border-gray-300 resize-none rounded-sm h-30 2xl:h-40 py-4 px-5 text-lg text-gray-800 " />
                            <ButtonContained customClass='mt-2 md:mt-6'>Appply Now </ButtonContained>
                        </div>
                  </div>
                </div>
                <div className='hidden lg:block basis-30% pl-16'>
                    <H5Title CustomClass='pb-6' title="Latest Post"/>
                    <div>
                       <LatestSideBox/>
                       <LatestSideBox/>
                       <LatestSideBox/>
                       <LatestSideBox/>
                       <LatestSideBox/>
                       <LatestSideBox/>
                       <LatestSideBox/>
                    </div>
                    
                </div>
            </div>
        </div>
        <BecomeYoutuber wrCustomClass="py-16 sm:py-28 md:py-60 mb-12  sm:mb-20"/>
        <Feature/>
        <LatestNews wrCustomClass="pt-12 sm:pt-20 pb-12 sm:pb-20 2xl:pb-32"/>
    </div>
  )
}

export default CausesDetails