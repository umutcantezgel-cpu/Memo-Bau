import React from 'react';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ServiceItem } from '../../types';
import { Button } from '../common/Button';
import { Hover3D } from '../common/Hover3D';

interface ServiceCardProps {
  service: ServiceItem;
  onInquire?: () => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => (
  <Hover3D maxRotation={3} scale={1.01} className="h-full">
    <div className="group bg-neutral-white p-space-8 border border-neutral-lightgray shadow-elevation-1 hover:shadow-elevation-3 transition-[transform,box-shadow] duration-[var(--motion-standard-duration)] ease-[var(--motion-standard-easing)] hover:-translate-y-[8px] relative overflow-hidden h-full flex flex-col rounded-[var(--radius-md)] bg-clip-padding transform-gpu">
      <div className="absolute top-0 left-0 w-1 h-full bg-primary-base transform scale-y-0 group-hover:scale-y-100 transition-transform duration-[var(--motion-emphasis-duration)] ease-[var(--motion-emphasis-easing)] origin-bottom z-10" />

      <div className="w-16 h-16 rounded-[var(--radius-sm)] bg-neutral-offwhite flex items-center justify-center text-primary-base mb-6 group-hover:bg-primary-base group-hover:text-neutral-white transition-colors duration-[var(--motion-micro-duration)] ease-[var(--motion-micro-easing)] shrink-0 z-10 relative">
        {service.icon}
      </div>

      <h3 className="text-h3 font-sans font-bold text-neutral-darkgray mb-3 tracking-h3 z-10 relative">{service.title}</h3>
      <p className="text-neutral-midgray mb-6 leading-body text-body flex-grow font-normal z-10 relative">{service.description}</p>

      <ul className="space-y-3 mt-auto mb-8 z-10 relative">
        {service.features.map((feature, idx) => (
          <li key={idx} className="flex items-start text-sm text-neutral-midgray font-normal">
            <Check className="w-4 h-4 text-primary-base mr-3 shrink-0 mt-0.5" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <div className="w-full mt-auto z-10 relative">
        <Link to="/contact" className="w-full">
          <Button
            variant="secondary"
            className="w-full justify-center group-hover:bg-primary-base group-hover:text-neutral-white transition-colors duration-[var(--motion-micro-duration)] ease-[var(--motion-micro-easing)]"
          >
            Beratung anfragen
          </Button>
        </Link>
      </div>
    </div>
  </Hover3D>
);
