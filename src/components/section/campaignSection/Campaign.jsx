import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import campaignImg1 from '../../../assets/images/campaign1.jpeg'
import campaignImg2 from '../../../assets/images/campaign2.jpeg'
import campaignImg3 from '../../../assets/images/campaign3.jpeg'
import PreHeader from '../../global/heading/PreHeader'
import H2Title from '../../global/heading/H2Title'
import Body1 from '../../global/heading/Body1'
import BtnTitle from '../../global/heading/BtnTitle'
import SubTitle from '../../global/heading/Subtitle'
import ProgressLise from '../../global/progressLine/ProgressLise'
import Strong2 from '../../global/heading/Strong2'
import './campaign.css'


const data = [
    {
        id:1,
        image:campaignImg1,
        tag:'Children',
        btnTitle:"Donate Now",
        subtitle:"Iodine fortification of household salt",
        content:" Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id augue semper arcu enim viverra sit ipsum. Nunc lorem a vulputate eget bibendum id et. Eget nunc, eu, molestie tellus sollicitudin vitae consequat adipiscing.",
        percentage:'35',
        Ralsed:"$5,000"
    },
    {
        id:2,
        image:campaignImg2, 
        tag:'Children',
        btnTitle:"Donate Now",
        subtitle:"Iodine fortification of household salt",
        content:" Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id augue semper arcu enim viverra sit ipsum. Nunc lorem a vulputate eget bibendum id et. Eget nunc, eu, molestie tellus sollicitudin vitae consequat adipiscing.",
        percentage:'67',
        Ralsed:"$5,000"
    },
    {
        id:3,
        image:campaignImg3,
        tag:'Children',
        btnTitle:"Donate Now",
        subtitle:"Iodine fortification of household salt",
        content:" Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id augue semper arcu enim viverra sit ipsum. Nunc lorem a vulputate eget bibendum id et. Eget nunc, eu, molestie tellus sollicitudin vitae consequat adipiscing.",
        percentage:'80',
        Ralsed:"$5,000"
    },
]

const Campaign = ({wrCustomClass}) => {
    const [helpData,setHelpData] = useState([...data])

    let renderView = null;
    renderView = helpData.map((item)=>(
        <div key={item.id} className="campaign_single relative">
            <div className='z-1 inline-block absolute top-5 left-2 bg-primary-container text-center py-2 px-4'>
                <Strong2 color='text-on-primary-container' title={item.tag}/>
            </div>
            <div className='relative'>
                <img className='h-80 object-cover w-full roun rounded-t-md' src={item.image} alt="dfd" />
                <div className='campaign_single_btn bg-tertiary-container text-center py-3' >
                <Link to="#">
                    <BtnTitle title={item.btnTitle}/>
                </Link>
                </div>
            </div>
           <div className='z-1 relative bg-on-tertiary'>
            <SubTitle p="pt-6" color='text-white' title={item.subtitle}/>
                <Body1 p="pt-4">
                    {item.content}
                </Body1>
                <ProgressLise height='h-3'percentage={item.percentage}/>
            </div>
            <div className='flex justify-between pt-4'>
                    <Strong2 color='text-white' title={`Ralsed: ${item.Ralsed}`} />
                    <Strong2 color='text-white' title={`Ralsed: ${item.Ralsed}`} />
            </div>
        </div>
    ))

    return (
        <div className={`${wrCustomClass} bg-on-tertiary`}>
            <div className='container mx-auto px-4'>
                <div className='text-center pb-14 '>
                    <PreHeader p="pb-1" title="OUR CAMPAIGNS" color="text-tertiary-container"/>
                    <H2Title customClass="max-w-lg w-full mx-auto" p="pb-4" title="Our Highest Ambition is to Help People" color="text-secondary-container"/>
                    <Body1 customClass="max-w-3xl w-full mx-auto" color="text-white">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id augue semper arcu enim viverra sit ipsum. Nunc lorem a vulputate eget bibendum id et. Eget nunc, eu, molestie tellus sollicitudin vitae consequat adipiscing. Mauris sit quam est dui vitae. Leo, a platea quis at.
                    </Body1>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-10 md:gap-6'>
                    {
                        renderView
                    }
                
                
                </div>
            </div>
        </div>
    )
}

export default Campaign