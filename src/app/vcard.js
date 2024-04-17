'use client'
import React, { useState, useEffect } from 'react';
import VCF from 'vcf';

export default function Vcard() {
  const [imageBase64, setImageBase64] = useState('');

  useEffect(() => {
    const convertToBase64 = async () => {
      const imagePath = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3ACute_dog.jpg&psig=AOvVaw2B4DYrepcgeWVIEvhvhZx5&ust=1712795833405000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCIDTlOqztoUDFQAAAAAdAAAAABAE'; // Replace with the path to your image
      try {
        const response = await fetch(imagePath);
        const blob = await response.blob();
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onloadend = () => {
          setImageBase64(reader.result.split(',')[1]); // Extract base64 string
        };
      } catch (error) {
        console.error('Error converting image to base64:', error);
      }
    };

    convertToBase64(); // Call the conversion function when the component mounts
  }, []); // Empty dependency array ensures this effect runs only once on mount

  const handleSave = () => {
    const database = [{
      fname: "jorge",
      lname: "robles",
      phone: "6681316676",
      email: "jorge.robli22@gmail.com",
      title: "cofounder",
      image: imageBase64 // Use the base64 string here
    }];

    const vcard = new VCF();
    vcard.add('fn', `${database[0].fname} ${database[0].lname}`);
    vcard.add('tel', database[0].phone);
    vcard.add('email', database[0].email);
    vcard.add('title', database[0].title);

    // Add the photo in base64 format
    if (database[0].image) {
      vcard.addPhoto(`data:image/jpeg;base64,${database[0].image}`, true);
    }

    const vcardContent = vcard.toString();
    const blob = new Blob([vcardContent], { type: 'text/vcard' });
    const url = window.URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'jorgerobles.vcf');
    document.body.appendChild(link);
    link.click();

    // Clean up
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  return (
    <button onClick={handleSave}>Download VCard</button>
  );
}