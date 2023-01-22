import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AiFillForward from 'react-icons'
import cn from 'classnames';
import s from '@styles/theme.module.scss'
import { Box, Container, Link, Text } from '@components/ui';
import { MenuButton } from './Button Humburger';
import { MenuHumburger } from './Menu Humburger';
import { Logo } from '@components/ui/Logo/Logo';
import { link } from 'fs';
//import { CloseButton } from './Close';


export const Dropdown = () => {
  const { pathname } = useRouter();
  const links = [
    {
      label: 'Home',
      submenu: Boolean,
      sublinks: [
        {
          Head: 'item1',
          sublink: [
            {
              name: 'subitem1',
              href: '/1',
            },
            {
              name: 'subitem2',
              href: '/2',
            },
            {
              name: 'subitem3',
              href: '/3',
            },
            {
              name: 'subitem4',
              href: '/4',
            },
          ],
        },
      ],
    },

    {
      label: 'Blog',
      submenu: Boolean,
      sublinks: [
        {
          Head: 'Blog item1',
          sublink: [
            {
              name: 'Blog subitem1',
              href: '/Blog',
              extraSublink: [
                {
                  name: 'Blog extra subitem',
                  href: '/Blogado'
                },
              ],
            },
            {
              name: 'Blog subitem2',
              href: '/Blog1',
            },
            {
              name: 'Blog subitem3',
              href: '/Blog2',
            },
          ],
        },
      ],

    },
    {
      label: 'About',
      submenu: Boolean,
      sublinks: [
        {
          Head: 'About item1',
          sublink: [
            {
              name: 'About subitem1',
              href: '#/About',
            },
            {
              name: 'About subitem2',
              href: '#/About1',
            },
            {
              name: 'About subitem3',
              href: '#/About2',
            },
            {
              name: 'About subitem4',
              href: '#/About3',
            },
          ],
        },
      ],
    },
    {
      label: 'Subscribe',
      submenu: Boolean,
      sublinks: [
        {
          Head: 'item1',
          sublink: [
            {
              name: 'Subscribe subitem1',
              href: '#Subscribe',
            },
            {
              name: 'Subscribe subitem2',
              href: '#Subscribe1',
            },
            {
              name: 'Subscribe subitem3',
              href: '#Subscribe2',
            },
            {
              name: 'Subscribe subitem4',
              href: '#Subscribe3',
            },
          ],
        },
      ],
    },
    {
      label: 'My Resume',
    },
  ];


  const getSubclasses = (path: string) => {
    return cn(
      {
        'flex  hover:text-green-400 transition-duration:300 ease-linear hover:translate-x-2': pathname !== path,
      },
      'font-heading md:ml-2 max-w-xs px-4 text-xl'
    );
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const onOpen = () => setIsMenuOpen(true);
  const onClose = () => setIsMenuOpen(false);

  return (
    <Container className={`flex h-16 items-center justify-between border-b-4 border-b-rose-600`}>
      <ul className='sm:hidden md:hidden flex h-full items-center justify-center gap-16'>
        {links.map(({ label, sublinks, submenu }, idx) => (
          <Box className='group' >
            <Text as='h1' fontSize='md' casing='capitalize' children={label} className={`cursor-pointer duration-200 ease-linear hover:text-xl hover:text-green-700`} />
            {submenu && (
              <Box>
                <Box className='absolute top-11 hidden group-hover:block hover:block '>
                  <div className='py-3'>
                    <div className='w-4 h-4 left-3 absolute mt-1 bg-white rotate-45' />
                  </div>
                  {sublinks?.map((mysublinks) => (
                    <Box className='bg-white p-5 grid gap-3 '>
                      {mysublinks.sublink.map((sublink) =>
                        <li>
                          <Link
                            href={sublink.href}
                            target={sublink.href.startsWith('http') ? '_blank' : '_self'}
                            className={getSubclasses(sublink.href)}
                          >
                            {sublink.name}
                          </Link>
                        </li>
                      )}
                    </Box>
                  ))}
                </Box>
              </Box>
            )}
          </Box>
        ))}
      </ul>

      <Box className='flex  '>
        <MenuButton onOpen={onOpen} />
        <AnimatePresence>
          {isMenuOpen && <MenuHumburger onClose={onClose} />}
        </AnimatePresence>
      </Box>
    </Container>
  )


}  