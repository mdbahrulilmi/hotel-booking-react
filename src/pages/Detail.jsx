import { useRef, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import HotelDescription from '../components/Detail/HotelDescription';
import RoomList from '../components/Detail/RoomList';
import SearchOptionFlex from '../components/SearchOptionFlex';
import Facility from '../components/Detail/Facility';
import Policy from '../components/Detail/Policy';
import Reviews from '../components/Detail/Reviews';
import Location from '../components/Detail/Location';

function Detail() {
  const overviewRef = useRef(null);
  const roomsRef = useRef(null);
  const locationRef = useRef(null);
  const facilitiesRef = useRef(null);
  const policyRef = useRef(null);
  const reviewsRef = useRef(null);

  const [activeSection, setActiveSection] = useState('overview');

  const sections = [
    { label: 'Overview', ref: overviewRef, key: 'overview' },
    { label: 'Rooms', ref: roomsRef, key: 'rooms' },
    { label: 'Location', ref: locationRef, key: 'location' },
    { label: 'Facilities', ref: facilitiesRef, key: 'facilities' },
    { label: 'Policy', ref: policyRef, key: 'policy' },
    { label: 'Reviews', ref: reviewsRef, key: 'reviews' },
  ];

  const scrollToSection = (ref, name) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(name);
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -60% 0px',
      threshold: 0.1,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const matchingSection = sections.find(section => section.ref.current === entry.target);
          if (matchingSection) {
            setActiveSection(matchingSection.key);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((section) => {
      if (section.ref.current) {
        observer.observe(section.ref.current);
      }
    });

    return () => {
      sections.forEach((section) => {
        if (section.ref.current) {
          observer.unobserve(section.ref.current);
        }
      });
    };
  }, []);

  const { id } = useParams();

  return (
    <>
      <div className='sticky top-0 z-10 bg-white'>
        <div className="flex justify-center">
          <SearchOptionFlex />
        </div>
        <div className="flex justify-center shadow-sm">
          <div className="flex justify-between w-4/5 pb-4 font-semibold">
            <ul className="flex list-none gap-10">
              {sections.map((section) => (
                <li
                  key={section.key}
                  onClick={() => scrollToSection(section.ref, section.key)}
                  className={`cursor-pointer transition-all ${
                    activeSection === section.key
                      ? 'border-b-4 border-green-600 text-black'
                      : 'text-gray-500'
                  }`}
                >
                  {section.label}
                </li>
              ))}
            </ul>
            <ul className='flex list-none gap-4'>
              <li className="cursor-pointer text-gray-500">Copy link</li>
              <li className="cursor-pointer text-gray-500">Save Accommodation</li>
            </ul>
          </div>
        </div>
      </div>

      <div ref={overviewRef} style={{ scrollMarginTop: '100px' }} className='flex justify-center bg-white'>
        <div className='w-4/5 py-5'>
          <HotelDescription id={id} />
        </div>
      </div>
      <div ref={roomsRef} style={{ scrollMarginTop: '100px' }} className='flex justify-center bg-white'>
        <div className='w-4/5 py-5'>
          <RoomList id={id} />
        </div>
      </div>
      <div ref={locationRef} style={{ scrollMarginTop: '100px' }} className='flex justify-center bg-white'>
        <div className='w-4/5 py-5'>
          <Location id={id} />
        </div>
      </div>
      <div ref={facilitiesRef} style={{ scrollMarginTop: '100px' }} className='flex justify-center bg-white'>
        <div className='w-4/5 py-5'>
          <Facility id={id} />
        </div>
      </div>
      <div ref={policyRef} style={{ scrollMarginTop: '100px' }} className='flex justify-center bg-white'>
        <div className='w-4/5 py-5'>
          <Policy id={id} />
        </div>
      </div>
      <div ref={reviewsRef} style={{ scrollMarginTop: '100px' }} className='flex justify-center bg-white'>
        <div className='w-4/5 py-5'>
          <Reviews id={id} />
        </div>
      </div>
    </>
  );
}

export default Detail;
