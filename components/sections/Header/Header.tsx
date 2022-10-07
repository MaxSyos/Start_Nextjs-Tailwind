import { useRouter } from 'next/router';
import { lighten } from 'polished';
import { motion } from 'framer-motion';
import cn from 'classnames';
import { Container, Link } from '@components/ui';
//import { CloseButton } from './Close';

export const Header = ({ onClose }) => {
  const { pathname } = useRouter();
  const links = [
    {
      label: 'Home',
      href: '/',
    },
    {
      label: 'Blog',
      href: '/blog',
    },
    {
      label: 'About',
      href: '/#about',
    },
    {
      label: 'Subscribe',
      href: '/#subscribe',
    },
    {
      label: 'My Resume',
      href: 'https://docs.google.com/document/d/16-sqqDzL3SR1vomlTW6gKOKIqJ7xd_MgfJXrDLkqbnU/edit',
    },

  ];

  const getClasses = (path: string) => {
    return cn(
      {
       'uppercase text-rose-500': pathname === path,
      },
      {
        'hover:text-3xl hover:text-green-400 transition duration-300 ease-linear hover:translate-y-2' : pathname !== path,
      },
      'font-heading md:ml-2 max-w-xs px-2 text-2xl   '
       
    );
  };

  return (
    <Container className=' flex h-16 items-center justify-between  border-b-4 border-b-rose-600'>
      <ul className='flex h-full items-center justify-center gap-5'>
        {links.map(({ label, href }, idx) => (
          <Link
            href={href}
            target={href.startsWith('http') ? '_blank' : '_self'}
            className={getClasses(href) }
          >
            {label}
          </Link>
        ))}
      </ul>
    </Container>
  )


}  