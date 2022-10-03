import React from 'react'
import missionImg from '../../../assets/images/mission.jpeg'
import ButtonContained from '../../global/button/ButtonContained'
import Body1 from '../../global/heading/Body1'
import H2Title from '../../global/heading/H2Title'
import PreHeader from '../../global/heading/PreHeader'
import SubTitle from '../../global/heading/Subtitle'
const MissionSection = ({wrCustomClass}) => {
  return (
        <div className={`${wrCustomClass} container mx-auto px-4`}>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                <div>
                    <img className='rounded-bra-100' src={missionImg}  alt="img"/>
                </div>
                <div className='flex justify-center items-center'>
                    <div>
                        <PreHeader title="Our Mission"/>
                        <H2Title p="pt-2" title="Helping Us you Helping them"/>
                        <SubTitle p="pt-4" title="Tittle Here"/>
                        <Body1 p="pt-2" color="text-gray-700">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id augue semper arcu enim viverra sit ipsum. Nunc lorem a vulputate eget bibendum id et. Eget nunc, eu, molestie tellus sollicitudin vitae consequat adipiscing. Mauris sit quam est dui vitae. Leo, a platea quis at.
                        </Body1>
                        <ButtonContained m="mt-10">Learn More</ButtonContained>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default MissionSection