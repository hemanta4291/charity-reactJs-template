import React from 'react'
import ButtonContained from '../../global/button/ButtonContained'
import GoogleMapWithMarker from '../../global/googleMap/GoogleMapWithMarker'
import Body1 from '../../global/heading/Body1'
import H2Title from '../../global/heading/H2Title'
import PreHeader from '../../global/heading/PreHeader'
import Strong1 from '../../global/heading/Strong1'
import SubTitle from '../../global/heading/Subtitle'
import Icons from '../../global/Icons'

const ContactUs = ({ wrCustomClass }) => {
    return (
        <div className={`${wrCustomClass}`}>
            <div className='container max-w-full sm:max-w-3xl lg:max-w-5xl w-full mx-auto px-4'>
                <PreHeader title="Contact Us" />
                <H2Title p="pt-2  pb-4" title="Get In Touch" />
                <Body1 color='text-gray-700'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id augue semper arcu enim viverra sit ipsum. Nunc lorem a vulputate eget bibendum id et. Eget nunc, eu, molestie tellus sollicitudin vitae consequat adipiscing.
                </Body1>

                <div className='grid grid-cols-1 lg:grid-cols-2  gap-8 sm:gap-14 pt-8  sm:pt-14'>
                    <div className='lg:order-first order-last'>
                        <input placeholder="Full Name*" className="mb-4 w-full focus:outline-none border border-gray-300 rounded-sm h-12 2xl:h-14 py-4 px-5 text-lg text-gray-800 " />
                        <input placeholder="Email*" className="mb-4 w-full focus:outline-none border border-gray-300 rounded-sm h-12 2xl:h-14 py-4 px-5 text-lg text-gray-800 " />
                        <textarea placeholder="Write a Comment" className="mb-4 w-full focus:outline-none border border-gray-300 resize-none rounded-sm h-32 2xl:h-40 py-4 px-5 text-lg text-gray-800 " />
                        <ButtonContained>Submit</ButtonContained>
                    </div>
                    <div>
                        <SubTitle p="pb-4" color='text-secondary' title="Address" />
                        <div className='flex flex-col sm:flex-row gap-8'>
                            <div className='basis-100% sm:basis-50%'>
                                <div className='pb-6'>
                                    <Strong1 p="pb-4" title="Vienna" />
                                    <div className='flex items-center gap-2'>
                                        <div className='flex-shrink-0'>
                                            {Icons.blackLocationIcon}
                                        </div>

                                        <Body1 color='text-gray-700'>
                                            4102 Lynn Avenue,Las Vegas, NM, USA
                                        </Body1>
                                    </div>
                                </div>
                                <div>
                                    <Strong1 p="pb-4" title="Phone" />
                                    <div className='flex items-center gap-2'>
                                        <div className='flex-shrink-0'> {Icons.blackCallIcon}</div>
                                        <Body1 color='text-gray-700'>
                                            +1 516 231 1313
                                        </Body1>
                                    </div>
                                </div>
                            </div>
                            <div className='basis-100% sm:basis-50%'>
                                <div className='pb-6'>
                                    <Strong1 p="pb-4" title="Vienna" />
                                    <div className='flex items-center gap-2'>
                                        <div className='flex-shrink-0'>
                                            {Icons.blackLocationIcon}
                                        </div>

                                        <Body1 color='text-gray-700'>
                                            4102 Lynn Avenue,Las Vegas, NM, USA
                                        </Body1>
                                    </div>
                                </div>
                                <div>
                                    <Strong1 p="pb-4" title="Phone" />
                                    <div className='flex items-center gap-2'>
                                        <div className='flex-shrink-0'> {Icons.blackCallIcon}</div>
                                        <Body1 color='text-gray-700'>
                                            +1 516 231 1313
                                        </Body1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='pt-12 md:pt-14'>
                    <GoogleMapWithMarker

                        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                        loadingElement={<div style={{ height: `100%` }} />}
                        containerElement={<div style={{ height: `400px` }} />}
                        mapElement={<div style={{ height: `100%` }} />}

                    />
                </div>

            </div>

        </div>
    )
}

export default ContactUs