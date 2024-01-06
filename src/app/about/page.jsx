import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata = {
  title: 'About',
  description:
    'I’m Anthony Chukwujekwu. I live in Lagos, where I design the future.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            I’m Anthony Chukwujekwu. I live in Lagos, where I engineer the
            future.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              In my childhood, books were my world. I immersed myself in
              enchanting realms, spending countless hours in fantastical tales.
              The local library was my sanctuary, and each book was a gateway to
              a new adventure. This early fascination not only cultivated my
              love for storytelling but also ignited a sense of curiosity
              guiding me throughout life.
            </p>
            <p>
              During my teenage years, fueled by insatiable curiosity, I
              naturally expanded my exploration of knowledge, delving into
              diverse subjects from science to philosophy. This period shaped my
              worldview, fostering a deep appreciation for the diversity of
              human thought and revealing the power of curiosity as a driving
              force for personal and intellectual growth.
            </p>
            <p>
              In transitioning to my role as a frontend engineer, I bring with
              me lessons from literature and intellectual curiosity, providing a
              unique perspective for approaching coding challenges with
              creativity and inquisitiveness. Each project I undertake presents
              distinctive problems, and I eagerly embrace the opportunity to
              discover innovative solutions through thoughtful coding practices.
              As a frontend engineer, I combine technical proficiency with a
              commitment to crafting compelling user interfaces, akin to weaving
              a narrative in a book. My honed coding skills, shaped by curiosity
              and diverse learning experiences, empower me to translate design
              concepts into functional interfaces, defining my approach to
              frontend development and ensuring each project becomes a resonant
              narrative for its users.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink
              href="https://twitter.com/anthonynzub"
              icon={TwitterIcon}
            >
              Follow on Twitter
            </SocialLink>
            <SocialLink
              href="https://instagram.com/anthonynzub"
              icon={InstagramIcon}
              className="mt-4"
            >
              Follow on Instagram
            </SocialLink>
            <SocialLink
              href="https://github.com/ruffcoins"
              icon={GitHubIcon}
              className="mt-4"
            >
              Follow on GitHub
            </SocialLink>
            <SocialLink
              href="https://linkedin.com/in/anthony-chukwujekwu"
              icon={LinkedInIcon}
              className="mt-4"
            >
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:nzubeanthony4@gmail.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              nzubeanthony4@gmail.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
