import React from 'react';

import ImageGallery from 'react-image-gallery';

const images = [
    {
      original: 'images/dna-output.png',
      thumbnail: 'images/dna-output.png',
      description: `This is the output of one of my first programs written in Python during Harvard's CS50 course. The program identifies a person based on matching sequences of nucleotides within their DNA as compared to a DNA database.`,
      originalHeight: '450px',
    },
    {
        original: 'images/dna-string.png',
        thumbnail: 'images/dna-string.png',
        description: `Here is the string of DNA that was sampled and searched for nucleotide patterns.`,
        originalHeight: '450px',
    },
    {
        original: 'images/dna-database.png',
        thumbnail: 'images/dna-database.png',
        description: `This is the database of our (fictional) characters used to find DNA matches.`,
        originalHeight: '450px',
    },
    {
        original: 'images/paris.jpg',
        thumbnail: 'images/paris.jpg',
        description: `No tourist photo collection is complete without a shot of the Eiffel Tower. <em>La vie est trop courte pour boire du mauvais vin.</em>`,
        originalHeight: '450px',
    },
    {
        original: 'images/iris.jpg',
        thumbnail: 'images/iris.jpg',
        description: `The iris sphincter muscle, also known as the pupillary sphincter or sphincter pupillae, is a muscle located in the colored part of the eye called the iris.</em>`,
        originalHeight: '450px',
    },
    {
        original: 'images/basilica.jpg',
        thumbnail: 'images/basilica.jpg',
        description: `Here is the lesser known counterpart to the Eiffel Tower: The Basilica of the Sacred Heart of Paris. Lesser known, but certainly not lesser in beauty.`,
        originalHeight: '450px',
    },
    {
        original: 'images/vatican.jpg',
        thumbnail: 'images/vatican.jpg',
        description: `Can beauty be stolen? Roman imperialism on display in the Vatican seemed to suggest that it can, though historical experts may disagree.`,
        originalHeight: '450px',
    },
    {
        original: 'images/coldplay.jpg',
        thumbnail: 'images/coldplay.jpg',
        description: `That's me singing on stage in front of 100,000+ people! Just kidding, that's Chris Martin of Coldplay, but I can always dream, right?`,
        originalHeight: '450px',
    },
    {
        original: 'images/sydney.jpg',
        thumbnail: 'images/sydney.jpg',
        description: `One of the more iconic musical structures in the world, the Sydney Opera House is surprisingly known for its visual aesthetic and not its acoustic excellence. That being said, I did enjoy the singular concert I attended there.`,
        originalHeight: '450px',
    },
    {
        original: 'images/yosemite.jpg',
        thumbnail: 'images/yosemite.jpg',
        description: `When we reached the top of Half Dome during our climb, I realized my water pouch had leaked. I had no water for the remainder of the climb down: over eight hours in 90+F degree weather. This is maybe the closest I have come to seeing hallucinations.`,
        originalHeight: '450px',
    },
    {
        original: 'images/golden-gate-bridge.jpg',
        thumbnail: 'images/golden-gate-bridge.jpg',
        description: `The Golden Gate Bridge is not made of gold, nor silicon for that matter. I once heard that the bridge is only gold in VR.`,
        originalHeight: '450px',
    },
    {
        original: 'images/great-barrier-reef.jpg',
        thumbnail: 'images/great-barrier-reef.jpg',
        description: `The Great Barrier Reef is stunning. I hope everyone can experience it in some capacity during their lifetime, while preserving its integrity and working to keep our oceans clean.`,
        originalHeight: '450px',
    }
]

function GalleryPage() {
    return(
        <>
            <h2>My Gallery</h2>
            <p>Here is a small collection of my experiences throughout the past few years.</p>

            <article >
                <ImageGallery items={images} />
            </article>
        </>
    );
}

export default GalleryPage;