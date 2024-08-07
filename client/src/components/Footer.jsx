import { Footer } from 'flowbite-react';
import { BsLinkedin, BsInstagram, BsTwitter, BsGithub } from 'react-icons/bs';
export default function FooterCom() {
  return (
    <Footer container className='border border-t-4 border-teal-500 mt-auto'>
      <div className='w-full max-w-7xl mx-auto'>
        
        <div className='w-full sm:flex sm:items-center sm:justify-between'>
          <Footer.Copyright
            href='#'
            by="SyntaxStories"
            year={new Date().getFullYear()}
          />
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <Footer.Icon href='https://www.linkedin.com/in/prateeksha-pandey-75898223a/' icon={BsLinkedin}/>
            <Footer.Icon href='#' icon={BsInstagram}/>
            <Footer.Icon href='#' icon={BsTwitter}/>
            <Footer.Icon href='https://github.com/prateeksha17' icon={BsGithub}/>
           

          </div>
        </div>
      </div>
    </Footer>
  );
}
