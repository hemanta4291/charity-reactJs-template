import React from 'react'
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
  } from "react-google-maps";
import Body1 from '../../global/heading/Body1'
import H2Title from '../../global/heading/H2Title'
import Strong2 from '../../global/heading/Strong2'
import SubTitle from '../../global/heading/Subtitle'
import Icons from '../../global/Icons'
import Social from '../../global/social/Social'
import eventImg1 from '../../../assets/images/latest.jpeg'
import eventImg2 from '../../../assets/images/latest2.jpeg'
import ButtonContained from '../../global/button/ButtonContained'



const MapWithAMarker = withScriptjs(withGoogleMap(props =>
    <GoogleMap
      defaultZoom={8}
      defaultCenter={{ lat: -34.397, lng: 150.644 }}
    >
      <Marker
        position={{ lat: -34.397, lng: 150.644 }}
      />
    </GoogleMap>
  ));


const EventDetailSection = () => {
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

    const defaultProps = {
        center: {
          lat: 51.5074,
          lng: 0.1278
        },
        zoom: 11
      };

const AnyReactComponent = ({ text }) => <div>{text}</div>;
  return (
    <div className="py-12 sm:py-20">
        <div className='container mx-auto px-4'>
            <div className='flex'>
                <div className='basis-70% '>
                    <H2Title color='text-gray-800' title="Play for the world" />
                    <SubTitle  p="py-4" color='text-gray-900' title="Let's education for children get good life" />
                    <Body1 color='text-gray-700' customClass='pb-7'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue mauris malesuada ultricies in elit non vitae. Vitae, amet venenatis lacus praesent maecenas. Praesent platea aenean praesent amet feugiat ut. Odio lacus nunc id dictum convallis consectetur semper lectus. Eu egestas non maecenas aliquet accumsan a. Suspendisse enim, blandit faucibus ut.
                        Integer nunc mauris ultrices sagittis, ut cursus nec. Netus ullamcorper ut odio at vitae id malesuada fames scelerisque. Eget faucibus feugiat posuere lorem at rutrum interdum vestibulum non. Tellus lobortis blandit fermentum nulla. Ut quis gravida sed nam fusce at aliquam. Vestibulum, nisi vitae, ultricies ac. Nulla orci enim, neque nibh aliquam non aliquam. In imperdiet urna etiam felis, lacus urna, vitae. Proin cras nibh natoque molestie amet elementum. Augue dignissim duis et orci. Sollicitudin sit proin in diam id egestas. Iaculis nascetur morbi habitant sollicitudin neque donec elementum viverra.
                    </Body1> 

                    <div className='grid grid-cols-2 gap-6'>
                        <img src={eventImg1} alt="img" />
                        <img src={eventImg2} alt="img" />
                    </div>
                    <SubTitle m="mt-6" color='text-gray-900' title='Let’s education for children get good life'/>
                    <Body1 m="mt-4 mb-8" color='text-gray-900'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultricies mauris ut amet, nulla vel turpis. Diam eu morbi egestas vitae. Non non volutpat tristique posuere varius vitae pellentesque cras non. Ultrices nisi in risus tristique curabitur lobortis. Habitant fusce et augue mattis massa mi, varius enim. 
                    </Body1>
                    <ButtonContained>Sign Up</ButtonContained>
                </div>
                <div className='basis-30% pl-14'>
                    <div className='pb-4'>
                        <Strong2 color='text-gray-600' title="Location:"/>
                        <Strong2 color='text-gray-900' title="Broklyn, New York"/>
                    </div>
                    <div className='pb-4'>
                        <Strong2 color='text-gray-600' title="Time:"/>
                        <Strong2 color='text-gray-900' title="8:00 am to 12:30 pm"/>
                    </div>
                    <div className='pb-4'>
                        <Strong2 color='text-gray-600' title="Date:"/>
                        <Strong2 color='text-gray-900' title="01 November, 2022"/>
                    </div>
                    <div className='pb-4'>
                        <Strong2 color='text-gray-600' title="Category:"/>
                        <Strong2 color='text-gray-900' title="Charity,Food"/>
                    </div>
                    <div className='pb-4'>
                        <Strong2 color='text-gray-600' title="Duration:"/>
                        <Strong2 color='text-gray-900' title="150 Days"/>
                    </div>
                    <div className='pb-4'>
                        <Strong2 color='text-gray-600' title="Type:"/>
                        <Strong2 color='text-gray-900' title="Open"/>
                    </div>
                    <div className='pb-4'>
                        <Strong2 color='text-gray-600' title="Entrance:"/>
                        <Strong2 color='text-gray-900' title="Unlimited"/>
                    </div>
                    <div className='pb-4 flex items-center gap-2'>
                        <Strong2 color='text-gray-600' title="Share:"/>
                        <Social flexDirection='row' bgColor='' p='' customArray={socialItems} />
                    </div>

                    
                    
<MapWithAMarker
  googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
  loadingElement={<div style={{ height: `100%` }} />}
  containerElement={<div style={{ height: `400px` }} />}
  mapElement={<div style={{ height: `100%` }} />}
/>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default EventDetailSection