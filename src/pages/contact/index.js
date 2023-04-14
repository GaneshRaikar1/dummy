import React from 'react';
import BgShape from '../../components/common/BgShape';
import ContactArea from '../../components/Contact/ContactArea';
import ContactInfo from '../../components/Contact/ContactInfo';
import SEO from '../../components/seo';

const Contact = () => {
   return (
      <>
         <SEO pageTitle={'Contact'} />
         <BgShape />
         <ContactArea />
         <ContactInfo />
      </>
   );
};

export default Contact;