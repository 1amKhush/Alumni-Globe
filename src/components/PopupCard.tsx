import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Alumni } from '../types/alumni';

const PopupCard = ({ properties }: { properties: Alumni | null | undefined }) => {
  if (!properties) {
    return null;
  }

  const { name, batch, branch, company, position, linkedin, email, photo } = properties;

  return (
    <div className="w-64 rounded-lg overflow-hidden shadow-lg bg-white text-gray-800 font-sans">
      <div className="relative">
        <div className="h-24 bg-blue-500"></div>
        <div className="absolute top-12 left-1/2 transform -translate-x-1/2">
          <Image
            className="w-24 h-24 rounded-full border-4 border-white shadow-md"
            src={photo || "https://via.placeholder.com/150"}
            alt={name}
            width={96}
            height={96}
          />
        </div>
      </div>
      <div className="text-center mt-14 p-4">
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="text-sm text-gray-600">{`${batch} | ${branch}`}</p>
        <p className="mt-2 text-sm">{position} at <strong>{company}</strong></p>
      </div>
      <div className="flex justify-center pb-4">
        <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 mx-2">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a href={`mailto:${email}`} className="text-gray-600 hover:text-gray-800 mx-2">
          <FontAwesomeIcon icon={faEnvelope} size="2x" />
        </a>
      </div>
    </div>
  );
};

export default PopupCard;