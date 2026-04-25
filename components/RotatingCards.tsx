'use client';

import Image from 'next/image';
import { useState } from 'react';

const models = [
  {
    name: 'Hosaka Desktop',
    image: '/images/cyberdeck1.jpg',
    description: 'A powerful desktop cyberdeck with 8GB RAM, NPU, and a 7-inch IPS display. Optimized for OpenClaw and Ollama.',
  },
  {
    name: 'Hosaka Portable',
    image: '/images/cyberdeck2.jpg',
    description: 'A compact, portable cyberdeck with Raspberry Pi, 8GB RAM, and agent-ready software. Ideal for mobile hacking and dev work.',
  },
  {
    name: 'Hosaka Wearable',
    image: '/images/cyberdeck3.jpg',
    description: 'A wearable cyberdeck with modular design, 3.5-inch display, and flexible harness. Perfect for on-the-go creativity.',
  },
];

const components = [
  [
    ['Orange Pi 4 Pro 8gb', 'https://amzn.to/4cHNYpy'],
    ['ORange Pi Zero 3w 4gb', 'https://amzn.to/4cHNYpy'],
    ['NVMe Reader Writer', 'https://amzn.to/4cXO3GK'],
    ['128 GB SATA SSD', 'https://amzn.to/3Qu0YHK'],
    ['RTL SDR Reciever (Radio)', 'https://amzn.to/3QmUN8s'],
    ['Webcam with Speaker and Microphone', 'https://amzn.to/48iNNj7'],
    ['USB C to USB Micro', 'https://amzn.to/4cHnQLg'],
    ['Museum Putty', 'https://amzn.to/3OZaL8h'],
    ['GeekPi 220PCS Screw Nut Assortment', 'https://amzn.to/4emZc5l'],
    ['10000 mAh 3.7V Li Po rechargable battery', 'https://amzn.to/4w3xHnN'],
    ['Exacto Knive Set with Mat', 'https://amzn.to/4eEwPzn'],
    ['Balsa Wood Sheets', 'https://amzn.to/4cI3vFC'],
    ['Cutter', 'https://amzn.to/4cEgN63'],
    ['Adafruit PowerBoost 1000', 'https://amzn.to/41OW1fe'],
    ['Compact MEchanical Keyboard', 'https://amzn.to/3OU1gHu'],
    ['5 Inch Touch Screen', 'https://amzn.to/3QWkahm'],
    ['Digital Calipers', 'https://amzn.to/4tshc2L'],
    ['Camera Cable 15 Pin FFC Ribbon', 'https://amzn.to/4cEJtvB'],
    ['USB C to USB Micro', 'https://amzn.to/3OyWjno'],
    ['Neuromancer', 'https://amzn.to/4uoGhvJ'],
    ['Mini Keyboard', 'https://amzn.to/3OBhR2I'],
    ['Battery Pack', 'https://amzn.to/48dUvH8'],
  ],
  // For demo, all models use the same list. You can customize per model if needed.
  [
    ['Orange Pi 4 Pro 8gb', 'https://amzn.to/4cHNYpy'],
    ['ORange Pi Zero 3w 4gb', 'https://amzn.to/4cHNYpy'],
    ['NVMe Reader Writer', 'https://amzn.to/4cXO3GK'],
    ['128 GB SATA SSD', 'https://amzn.to/3Qu0YHK'],
    ['RTL SDR Reciever (Radio)', 'https://amzn.to/3QmUN8s'],
    ['Webcam with Speaker and Microphone', 'https://amzn.to/48iNNj7'],
    ['USB C to USB Micro', 'https://amzn.to/4cHnQLg'],
    ['Museum Putty', 'https://amzn.to/3OZaL8h'],
    ['GeekPi 220PCS Screw Nut Assortment', 'https://amzn.to/4emZc5l'],
    ['10000 mAh 3.7V Li Po rechargable battery', 'https://amzn.to/4w3xHnN'],
    ['Exacto Knive Set with Mat', 'https://amzn.to/4eEwPzn'],
    ['Balsa Wood Sheets', 'https://amzn.to/4cI3vFC'],
    ['Cutter', 'https://amzn.to/4cEgN63'],
    ['Adafruit PowerBoost 1000', 'https://amzn.to/41OW1fe'],
    ['Compact MEchanical Keyboard', 'https://amzn.to/3OU1gHu'],
    ['5 Inch Touch Screen', 'https://amzn.to/3QWkahm'],
    ['Digital Calipers', 'https://amzn.to/4tshc2L'],
    ['Camera Cable 15 Pin FFC Ribbon', 'https://amzn.to/4cEJtvB'],
    ['USB C to USB Micro', 'https://amzn.to/3OyWjno'],
    ['Neuromancer', 'https://amzn.to/4uoGhvJ'],
    ['Mini Keyboard', 'https://amzn.to/3OBhR2I'],
    ['Battery Pack', 'https://amzn.to/48dUvH8'],
  ],
  [
    ['Orange Pi 4 Pro 8gb', 'https://amzn.to/4cHNYpy'],
    ['ORange Pi Zero 3w 4gb', 'https://amzn.to/4cHNYpy'],
    ['NVMe Reader Writer', 'https://amzn.to/4cXO3GK'],
    ['128 GB SATA SSD', 'https://amzn.to/3Qu0YHK'],
    ['RTL SDR Reciever (Radio)', 'https://amzn.to/3QmUN8s'],
    ['Webcam with Speaker and Microphone', 'https://amzn.to/48iNNj7'],
    ['USB C to USB Micro', 'https://amzn.to/4cHnQLg'],
    ['Museum Putty', 'https://amzn.to/3OZaL8h'],
    ['GeekPi 220PCS Screw Nut Assortment', 'https://amzn.to/4emZc5l'],
    ['10000 mAh 3.7V Li Po rechargable battery', 'https://amzn.to/4w3xHnN'],
    ['Exacto Knive Set with Mat', 'https://amzn.to/4eEwPzn'],
    ['Balsa Wood Sheets', 'https://amzn.to/4cI3vFC'],
    ['Cutter', 'https://amzn.to/4cEgN63'],
    ['Adafruit PowerBoost 1000', 'https://amzn.to/41OW1fe'],
    ['Compact MEchanical Keyboard', 'https://amzn.to/3OU1gHu'],
    ['5 Inch Touch Screen', 'https://amzn.to/3QWkahm'],
    ['Digital Calipers', 'https://amzn.to/4tshc2L'],
    ['Camera Cable 15 Pin FFC Ribbon', 'https://amzn.to/4cEJtvB'],
    ['USB C to USB Micro', 'https://amzn.to/3OyWjno'],
    ['Neuromancer', 'https://amzn.to/4uoGhvJ'],
    ['Mini Keyboard', 'https://amzn.to/3OBhR2I'],
    ['Battery Pack', 'https://amzn.to/48dUvH8'],
  ],
];

export default function RotatingCards() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex flex-row gap-6 mb-8 flex-wrap justify-center">
        {models.map((model, idx) => (
          <div
            key={model.name}
            className={`relative w-80 h-96 rounded-xl shadow-lg bg-white border border-gray-200 cursor-pointer transition-transform duration-300 ${active === idx ? 'scale-105 z-10' : 'hover:scale-105'}`}
            onClick={() => setActive(idx === active ? null : idx)}
            style={{ boxShadow: active === idx ? '0 8px 32px rgba(0,0,0,0.18)' : undefined }}
          >
            <Image
              src={model.image}
              alt={model.name}
              width={320}
              height={180}
              className="rounded-t-xl object-cover w-full h-44"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{model.name}</h2>
              <p className="text-gray-700 mb-2">{model.description}</p>
              {active === idx && (
                <div className="mt-4">
                  <h3 className="font-bold mb-2">Parts List</h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full text-sm border border-gray-300">
                      <thead>
                        <tr>
                          <th className="px-2 py-1 border-b">Component</th>
                          <th className="px-2 py-1 border-b">Link</th>
                        </tr>
                      </thead>
                      <tbody>
                        {components[idx].map(([name, url]) => (
                          <tr key={name}>
                            <td className="px-2 py-1 border-b font-medium">{name}</td>
                            <td className="px-2 py-1 border-b">
                              <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Buy</a>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <p className="text-xs text-gray-500">Click a card to view and stick the full parts list.</p>
    </div>
  );
}
