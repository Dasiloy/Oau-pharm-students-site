import React from 'react'
import Image from 'next/image'
import { health } from '../data'
import { more } from '../data'
const Article = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-[3rem] lg:gap-[6rem]'>
     <div className='flex items-center justify-center bg-[url("/assests/rectangle9.png")] bg-cover bg-center h-[200px] lg:h-[500px] w-full'>
     <h1 className='font-extrabold text-[24px] lg:text-[56px] flex items-center justify-center text-white'>ARTICLES</h1>
     </div>
<div className='flex flex-col items-center justify-center lg:w-[90%]  gap-[4rem]'>
     <div className='flex flex-col gap-3 '>
     <h1 className='font-extrabold lg:text-[56px] text-[24px] text-dark-dark-100 lg:w-[100%] w-[95%] pl-[0.5rem]   lg:pl-[0rem]'>
     The Common Complications of Sickle Cell Disease (SCD)
     </h1>
     <div className='flex flex-row  gap-2 pl-[0.5rem] lg:pl-[0rem]'>
  <Image src="/assests/author.png" width={50} height={50} alt="author's picture"/>
  <div className='flex flex-col '>
<h5 className='font-bold text-dark-dark-100 text-[14px] lg:text-[16px]'>Abdullah Ayodeji</h5>
<h5 className='font-normal text-dark-dark-100 text-[12px]' >Member of Editorial unit</h5>
  </div>
   </div>

   <Image src="/assests/rectangle13.png" height={500} width={500} alt="" className=' lg:w-fit lg:h-[400px] w-[95%] pl-[0.5rem] lg:pl-[0rem] ' />

     </div>
<div className='flex flex-col lg:flex-row gap-[1.5rem] lg:gap-[3rem] justify-center items-center lg:items-start '>
<p className='font-normal text-[18px] text-dark-dark-75 w-[95%] px-[0.5rem] lg:px-[0rem] lg:w-[80%] '>
There is no accurate estimation of the population of people living with sickle cell disease in the world. But Nigeria, the Democratic Republic of Congo and India are generally regarded as the countries having highest population of sickle cell disease patients. It's estimated t h a tabout 300, 000 babies born each year have sickle cell disease. Since there has been reduced infant mortality in SCD over the years due to better SCD diagnosing and treatment, experts predict a relative increase in birth of babies with SCD with time.
A person is said to have sickle cell disease only when such a person inherits sickle cell trait from each of the parents. This is much different from a situation whereby an individual inherits only one sickle cell gene from only one of the parents. People with the sickle cell trait hardly show any clinical symptoms of the disease and they live just fine. Although they are hardly affected by the gene, people with sickle cell trait are also advised to take some caution.
With this stark reality of Nigeria occurring as one of the countries having highest SCD population and
birth rate, ti wil be beneficial to have certain knowledge about the condition. Too many may not be well informed as the understanding of the disease is shrouded in many misconceptions. Many are living happy, unhindered lengthy life with the condition.
The knowledge to be offered in this writing will be that of associated complications.
Majority of symptoms and complications of sickle cell are due to the sickle shape of the blood cells and the short lifespan of the red blood cells. The c o m m o n symptoms include; jaundice, fatigue and pain. The symptoms are usually acute but can also be chronic. SCD may lead to complications which can be avoided fi properly managed. Proper knowledge of such complications will enable an individual to properly guide against them.

<br></br><span className='font-extrabold '>Complications of SCD Vaso-occlusive crisis:</span><br></br>
This one is known by every person with basic knowledge of sickle cell anemia, they simply call ti crisis. It results from sickled red blood cells blocking blood flow to the point that tissues become
deprived of oxygen. This leads to an inflammatory response which causes an acute pain. The pain may occur anywhere in the body but common areas include; arms, legs, back, chest and abdomen. The pain may be very severe and may be accompanied by numbness and fever.
<span>Common triggers</span> include stress, dehydration, extreme temperatures, cold weather and infections.
It's best for to avoid any of these triggers.
<span className='font-extrabold'>Home remedies</span> include warming up using heating pads or warm bath, taking OTC pain medications, hydrating and getting massage. Hospital treatment may include administration of analgesics, use of heating pads or beds, oxygen therapy or in some cases blood transfusion therapy.
<br></br><span className='font-extrabold'>Splenic sequestration</span><br></br>
What knowledge do you have about the function of the spleen? Let us simply put it as spleen filters the blood and h e l p s with destroying old blood cells. As a result of their shape sickle cells may get stuck in the spleen causing blockage, pooling of blood in spleen and eventually spleen enlargement. It is reported that a major splenic sequestration in an infant may enlarge to the point of filling the whole abdomen. Remember this situation is an emergency. Blood transfusion is usually given by the doctor in treating the condition and some situation may require the doctor to find ways to remove some blood from the spleen. A severe recurring condition may make doctors suggest removing the spleen which does not have much side effect other than increased susceptibility to infection.
<span className='font-extrabold'>Infections</span>
The spleen helps a lot in controlling infection but in sickle cell disease the spleen can be easily damaged, as a result a person with sickle cell is more susceptible to infections than others. Also infections can also quickly get serious and infections were reportedly a leading cause of death in children with sickle cell before the advent and evolution of antibiotics. Severity and possibility of infection can be reduced with the use of preventive antibiotics and vaccines. Common infections affecting people with SCD include Pneumococcal disease caused by Streptococcus pneumonia, respiratory syncytial virus which may lead to acute chest syndrome in children Parvovirus B19 and Haemophilus influenza.
<br></br><span className='font-extrabold'>Gallstones (Cholecystitis) </span><br></br>
Gallstones are hard solids of varying sizes that form
w i t h i n the gall bladder. When too many red blood cells are destroyed there is an increase in the
a m o u n t of serum bilirubin. The buildup of bilirubin in the gall bladder leads to the formation of gallstones w h i c h can lead to inflammation of the gall bladder
(known as Cholecystitis) and other serious problems.
<br></br><span className='font-extrabold'>Acute chest syndrome </span><br></br>
T h i s is the complication with the leading cause of
morbidity in sickle cell. The actual cause of acute chest syndrome is not yet well spelt out by scientist. This condition has symptoms such as cough, fever, abnormal breathing, chest pain, wheezing and low oxygen levels.
</p>
<div className='flex flex-col gap-3'>
<h2 className='font-extrabold lg:text-[32px] text-[24px] text-dark-dark-100' >Top Stories</h2>
<div className='flex flex-col gap-[2rem] items-center justify-center' >
{ health.map((hlt, index) =>
<div className='grid gap-3'>
<Image src={hlt.artimg} key={index} width={350} height={350} className='w-fit h-fit' alt='' />
<h3 className="font-semibold text-primary-500 text-[14px] lg:text-[18px] cursor-pointer">{hlt.header}</h3>
<div className='flex flex-row  gap-2'>
  <Image src={hlt.author} key={index} width={50} height={50} alt="author's picture"/>
  <div className='flex flex-col items-center justify-center '>
<h5 className='font-bold text-dark-dark-100 text-[16px]' key={index}>{hlt.authorname}</h5>
<h5 className='font-normal text-dark-dark-100 text-[12px]' key={index} >{hlt.role}t</h5>
  </div>
   </div>
</div>
)}
</div>
</div>
</div>

<div className='grid items-center justify-center pl-[1rem] lg:pl-[0rem] gap-6 lg:gap-4'>
     <h1 className='font-bold  text-[24px] lg:text-[32px] text-dark-dark-100 '>More Stories</h1>
     <div className=' flex flex-col items-center justify-center gap-[3rem]'>
<div className='grid lg:grid-cols-3 grid-row  items-center justify-center gap-8 ' >
  {more.map((mor)=>( <div className=''>
<div className=' flex flex-col gap-4'>
<Image height={500} src={mor.artimg} alt='coverimg' width={500} className='w-fit h-fit' />
<h2 className="font-semibold text-primary-500 text-[20px] cursor-pointer">{mor.header}</h2>
<p className='font-normal text-[14px] text-dark-dark-100 w-[90%]'>{mor.text}</p>
<div className='flex lg:flex-row  gap-2'>
  <Image height={50} src={mor.author} width={50} alt="author's picture"/>
  <div className='flex flex-col '>
<h5 className='font-bold text-dark-dark-100 text-[16px]'>{mor.authorname}</h5>
<h5 className='font-normal text-dark-dark-100 text-[12px]' >{mor.role}</h5>
  </div>
   </div>
</div>
  </div>))}
</div>
</div>
</div>

</div>
     </div>
  )
}

export default Article