import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import Navigation from '../components/Navigation';

const People = () => (
  <div>
    <Jumbotron>
      <h1 className="text-center">SWAPI People</h1>
    </Jumbotron>
    <p>You know, being a test pilot isn't always the healthiest business in the world.</p>
    <p>Problems look mighty small from 150 miles up.</p>
    <p>We have an infinite amount to learn both from nature and from each other</p>
    <p>Houston, Tranquillity Base here. The Eagle has landed.</p>
    <p>Dinosaurs are extinct today because they lacked opposable thumbs and the brainpower to build a space program.</p>
  </div>
);

export default People;