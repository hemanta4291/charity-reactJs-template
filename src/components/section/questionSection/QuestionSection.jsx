import React from 'react'
import Accordian from '../../global/accordian/Accordian'
import Body1 from '../../global/heading/Body1'
import H2Title from '../../global/heading/H2Title'
import PreHeader from '../../global/heading/PreHeader'
import Strong1 from '../../global/heading/Strong1'

const QuestionSection = ({wrCustomClass=""}) => {

  return (
    <div className={`${wrCustomClass} bg-gray-50`}>
        <div className='container max-w-2xl mx-auto px-4 text-center'>
            <PreHeader p="pb-2"title="Feature donor reviews"/>
            <H2Title p="pb-4" title="What People say About Our Charity" />
            <Body1 color='text-gray-800' customClass='pb-12'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id augue semper arcu enim viverra sit ipsum. Nunc lorem a vulputate eget bibendum id et.
            </Body1>
            
        </div>
        <div className='container mx-auto px-4'>
          <div className='flex flex-col gap-4'>
            <Accordian title="Nulla eu purus scelerisque, dignissim diam." 
               accOpenStatus={false}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id augue semper arcu enim viverra sit ipsum. Nunc lorem a vulputate eget bibendum id et. Eget nunc, eu, molestie tellus sollicitudin vitae consequat adipiscing. Mauris sit quam est dui vitae.
             </Accordian>
             <Accordian title="Nulla eu purus scelerisque, dignissim diam.">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id augue semper arcu enim viverra sit ipsum. Nunc lorem a vulputate eget bibendum id et. Eget nunc, eu, molestie tellus sollicitudin vitae consequat adipiscing. Mauris sit quam est dui vitae.
             </Accordian>
             <Accordian title="Nulla eu purus scelerisque, dignissim diam.">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id augue semper arcu enim viverra sit ipsum. Nunc lorem a vulputate eget bibendum id et. Eget nunc, eu, molestie tellus sollicitudin vitae consequat adipiscing. Mauris sit quam est dui vitae.
             </Accordian>
             <Accordian title="Nulla eu purus scelerisque, dignissim diam.">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id augue semper arcu enim viverra sit ipsum. Nunc lorem a vulputate eget bibendum id et. Eget nunc, eu, molestie tellus sollicitudin vitae consequat adipiscing. Mauris sit quam est dui vitae.
             </Accordian>
           
          </div>
        </div>
        
    </div>
  )
}

export default QuestionSection