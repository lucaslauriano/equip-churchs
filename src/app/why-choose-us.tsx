'use client';

import React from 'react';
import {
  ChartPieIcon,
  CloudArrowDownIcon,
  CloudIcon,
  Cog6ToothIcon,
  KeyIcon,
  UsersIcon,
} from '@heroicons/react/24/solid';

import BackgroundCard from '@/components/background-card';

interface OptionProps {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
}

function Option({ icon: Icon, title, children }: OptionProps) {
  return (
    <div className='flex gap-4'>
      <div className='mb-4'>
        <Icon className='text-gray-900 h-6 w-6' />
      </div>
      <div>
        <h5 color='blue-gray' className='mb-2'>
          {title}
        </h5>
        <h5 className='mb-2 md:w-10/12 font-normal !text-gray-500'>
          {children}
        </h5>
      </div>
    </div>
  );
}

export function WhyChooseUs() {
  return (
    <section className='w-full max-w-4xl mx-auto flex flex-col items-center px-4 py-10'>
      <h2 className='text-center mb-2 text-3xl font-semibold' color='blue-gray'>
        Por que escolher o nossos cursos?
      </h2>
      <h2 className='mb-16 w-full text-center font-normal !text-gray-500 lg:w-10/12'>
        Discover the unique advantages, benefits, and standout features that set
        our course apart from the rest.
      </h2>
      <div className='mt-8'>
        <div className='grid grid-cols-1 items-center md:grid-cols-2 gap-12 mb-24'>
          <BackgroundCard title='Expert Instructors'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </BackgroundCard>
          <div className='space-y-8'>
            <div className='my-4'>
              <Option icon={CloudIcon} title='React Fundamentals'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Option>
            </div>
            <div className='mb-4 flex gap-4'>
              <Option icon={ChartPieIcon} title='State and Props'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Option>
            </div>
            <Option icon={Cog6ToothIcon} title='Component Lifecycle'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Option>
          </div>
        </div>
        <div className='grid grid-cols-1 items-center md:grid-cols-2 gap-12 mb-24'>
          <div className='space-y-8'>
            <div className='my-4'>
              <Option icon={KeyIcon} title='Routing with React Router'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Option>
            </div>
            <div className='mb-4 flex gap-4'>
              <Option icon={UsersIcon} title='Handling Forms'>
                Equipando igrejas para impactar vidas: oferecendo soluções
                práticas para os desafios do ministério
              </Option>
            </div>
            <Option icon={CloudArrowDownIcon} title='State Management'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Option>
          </div>
          <BackgroundCard title='Supportive Community'>
            C Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </BackgroundCard>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
