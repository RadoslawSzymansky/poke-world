'use client'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import Link from 'next/link'
import Logo from '@/public/Pokemon.svg'
import Image from 'next/image'

export const Navigation = () => {
  return (
    <NavigationMenu.Root>
      <NavigationMenu.List className="flex items-center gap-5 container max-w-screen-lg mx-auto">
        <Image src={Logo} alt="logo" width={60} height={60}></Image>
        <NavigationMenu.Item>
          <NavigationMenu.Link>
            <Link href="/">Pokedex</Link>
          </NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Link>
            <Link href="/categories">Categories</Link>
          </NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Link>
            <Link href="/games">Games</Link>
          </NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Indicator>Elo</NavigationMenu.Indicator>
      </NavigationMenu.List>
      <NavigationMenu.Viewport />
    </NavigationMenu.Root>
  )
}
