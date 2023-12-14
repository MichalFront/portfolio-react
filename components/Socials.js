// links
import Link from 'next/link';

// icons
import {RiInstagramLine, RiFacebookLine, RiGithubLine, RiLinkedinLine} from 'react-icons/ri'

const Socials = () => {
  return (
    <div className='flex items-center gap-x-5 text-lg'>
      <Link href={'https://www.instagram.com/el_pequenko/'} className='hover:text-accent transition-all duration-300'>
        <RiInstagramLine/>
      </Link>
      <Link href={''} className='hover:text-accent transition-all duration-300'>
        <RiFacebookLine/>
      </Link>
      <Link href={'https://github.com/MichalFront'} className='hover:text-accent transition-all duration-300'>
        <RiGithubLine/>
      </Link>
      <Link href={'https://www.linkedin.com/in/micha%C5%82-zawadzki-35446a227/'} className='hover:text-accent transition-all duration-300'>
        <RiLinkedinLine/>
      </Link>
    </div>
  );
};

export default Socials;
