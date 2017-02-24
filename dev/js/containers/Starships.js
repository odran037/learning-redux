import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import Navigation from '../components/Navigation';

const Starships = () => (
  <div>
    <Jumbotron>
      <h1 className="text-center">SWAPI Starships</h1>
    </Jumbotron>
    <p>We are all connected; To each other, biologically. To the earth, chemically. To the rest of the universe atomically.</p>
    <p>A Chinese tale tells of some men sent to harm a young girl who, upon seeing her beauty, become her protectors rather than her violators. That's how I felt seeing the Earth for the first time. I could not help but love and cherish her.</p>
    <p>That's one small step for [a] man, one giant leap for mankind.</p>
    <p>Science cuts two ways, of course; its products can be used for both good and evil. But there's no turning back from science. The early warnings about technological dangers also come from science.</p>
    <p>That's one small step for [a] man, one giant leap for mankind.</p>
  </div>
);

export default Starships;