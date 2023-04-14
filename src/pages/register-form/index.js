import React from 'react';
import BgShape from '../../components/common/BgShape';
import RegisterForm from '../../components/RegisterForm/RegisterForm';
import SEO from '../../components/seo';

const Contact = () => {
   return (
      <>
         <SEO pageTitle={'Business Registration'} />
         <BgShape />
         <RegisterForm />
      </>
   );
};

export default Contact;