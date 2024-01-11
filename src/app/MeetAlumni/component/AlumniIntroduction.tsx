import React from 'react';

function AlumniIntroduction() {
  const AlumIntro =
    '  In an exclusive interview, we have the privilege of speaking with Pharmacist Adejuwon Otelaja,\
   a distinguished figure in the pharmaceutical industry. Pharm Adejuwon is currently the Chief Executive Officer of \
   Kanymed Healthcare, but his impact goes beyond his current role. Not only is he a two-time former President of the\
    Pharmaceutical Association of Nigeria Students (PANS) OAU chapter, but he also has an extensive background in\
     pharmaceutical sales and leadership. His strategic approach, driven by his advanced understanding of the market\
      and customer behaviors, has propelled him torecord-setting sales figures and market expansions. ';

  const SecondParagraph =
    ' Over the years, Adejuwon has demonstrated an unwavering commitment to the pharmaceutical\
profession. His time with Swiss Pharma Nigeria, serving in roles from Medical Representative to Regional Manager,\
 was marked by his ability to promote product use and grow market share.\
  Pharm Adejuwon s academic credentials are equally impressive, with an MBA from Obafemi Awolowo University,\
   where he specialized in advanced marketing management, advertising, and consumer behavior. His further qualifications\
    include a Senior Management Programme from Lagos Business School and two notable fellowships, one in Social and Administrative\
     Pharmacy and another in Leadership and Sustainable Development.';
  const ThirdParagraph =
    ' In this interview, Pharm Adejuwon Otelaja,shared insights from his wealth of experience about the pharmaceutical\
 industry, his leadership journey and the importance of\
political participation as an undergraduate, and his thoughts on the future of healthcare in Nigeria.\
We hope that you will learn from his wealth and knowledge.';
  return (
    <div className='md:text-2xl text-xl leading-3 md:leading-4 mt-5 md:mt-10 text-fuchsia-800 italic font-bold w-11/12 m-auto'>
      <p> {AlumIntro}</p>
      <p>{SecondParagraph}</p>
      <p>{ThirdParagraph}</p>
    </div>
  );
}

export default AlumniIntroduction;
