import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import Navigation from '../components/Navigation';

const Species = () => (
  <div>
    <Jumbotron>
      <h1 className="text-center">SWAPI Species</h1>
    </Jumbotron>
    <p>NASA is not about the ‘Adventure of Human Space Exploration’…We won’t be doing it just to get out there in space – we’ll be doing it because the things we learn out there will be making life better for a lot of people who won’t be able to go.</p>
    <p>Problems look mighty small from 150 miles up.</p>
    <p>Failure is not an option.</p>
    <p>We want to explore. We’re curious people. Look back over history, people have put their lives at stake to go out and explore … We believe in what we’re doing. Now it’s time to go.</p>
    <p>When I orbited the Earth in a spaceship, I saw for the first time how beautiful our planet is. Mankind, let us preserve and increase this beauty, and not destroy it!</p>
  </div>
);

export default Species;