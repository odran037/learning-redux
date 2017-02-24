import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import Navigation from '../components/Navigation';

const Films = () => (
  <div>
    <Jumbotron>
      <h1 className="text-center">SWAPI Films</h1>
    </Jumbotron>
    <p>Many say exploration is part of our destiny, but it’s actually our duty to future generations and their quest to ensure the survival of the human species.</p>
    <p>You know, being a test pilot isn't always the healthiest business in the world.</p>
    <p>To go places and do things that have never been done before – that’s what living is all about.</p>
    <p>A Chinese tale tells of some men sent to harm a young girl who, upon seeing her beauty, become her protectors rather than her violators. That's how I felt seeing the Earth for the first time. I could not help but love and cherish her.</p>
    <p>Never in all their history have men been able truly to conceive of the world as one: a single sphere, a globe, having the qualities of a globe, a round earth in which all the directions eventually meet, in which there is no center because every point, or none, is center — an equal earth which all men occupy as equals. The airman's earth, if free men make it, will be truly round: a globe in practice, not in theory.</p>
  </div>
);

export default Films;