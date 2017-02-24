import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import Navigation from '../components/Navigation';

const Planets = () => (
  <div>
    <Jumbotron>
      <h1 className="text-center">SWAPI Planets</h1>
    </Jumbotron>
    <p>The path of a cosmonaut is not an easy, triumphant march to glory. You have to get to know the meaning not just of joy but also of grief, before being allowed in the spacecraft cabin.</p>
    <p>The Earth was small, light blue, and so touchingly alone, our home that must be defended like a holy relic. The Earth was absolutely round. I believe I never knew what the word round meant until I saw Earth from space.</p>
    <p>For those who have seen the Earth from space, and for the hundreds and perhaps thousands more who will, the experience most certainly changes your perspective. The things that we share in our world are far more valuable than those which divide us.</p>
    <p>Houston, Tranquillity Base here. The Eagle has landed.</p>
    <p>A Chinese tale tells of some men sent to harm a young girl who, upon seeing her beauty, become her protectors rather than her violators. That's how I felt seeing the Earth for the first time. I could not help but love and cherish her.</p>
  </div>
);

export default Planets;