import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import cn from 'classnames';
import s from '@styles/theme.module.scss'
import { Box, Container, Link } from '@components/ui';
import { MenuButton } from './Button Humburger';
import { MenuHumburger } from './Menu Humburger';
import { Logo } from '@components/ui/Logo/Logo';
//import { CloseButton } from './Close';


export const Header = () => {
  const { pathname } = useRouter();
  const links = [
    {
      label: 'Home',
      href: '/',
      item: [ 'item1', 'item2', 'item3' ],
    },
    {
      label: 'Blog',
      href: '/blog',
      item: [ 'item2', 'item3' ],

    },
    {
      label: 'About',
      href: '/#about',
      item: 'item1',
    },
    {
      label: 'Subscribe',
      href: '/#subscribe',
      item: [ 'item1', 'item2' ],

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
      'font-heading md:ml-2 max-w-xs px-4 text-2xl   '
       
    );
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const onOpen = () => setIsMenuOpen(true);
  const onClose = () => setIsMenuOpen(false);

  return (
  <Container className={`flex h-16 items-center justify-between  border-b-4 border-b-rose-600`}>
      <ul className='sm:hidden md:hidden flex h-full items-center justify-center gap-1'>
        {links.map(({ label, href, item }, idx) => (
          <Link
            href={href}
            target={href.startsWith('http') ? '_blank' : '_self'}
            className={getClasses(href) }
          >
            {label}
          <ul className="flex flex-col">
            <li>
              <a href="/#" className="font-semibold flex-col">{item}</a>
            </li>
          </ul>
          </Link>
        ))}
        
      </ul>
      
      <Box className='flex  '>
        <MenuButton onOpen={onOpen} />
        <AnimatePresence>
          {isMenuOpen && <MenuHumburger onClose={onClose} />}
        </AnimatePresence>
      </Box>
      <Logo className='flex-row' />
    </Container>
  )


}  