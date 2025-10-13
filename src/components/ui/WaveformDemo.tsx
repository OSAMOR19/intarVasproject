import React from 'react';
import { WaveformPlayer } from './WaveformPlayer';

export const WaveformDemo: React.FC = () => {
  // You can replace this with any audio URL
  const sampleAudioUrl = 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav';

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-white">
            Waveform Player Demo
          </h1>
          <p className="text-gray-300 text-lg">
            Interactive audio waveform with smooth animations and responsive design
          </p>
        </div>

        {/* Waveform Player */}
        <div className="space-y-6">
          <WaveformPlayer 
            audioUrl={sampleAudioUrl}
            height={120}
            className="animate-fade-in-up"
          />
          
          {/* Additional Info */}
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <h3 className="text-xl font-semibold text-white mb-3">Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
              <div className="space-y-2">
                <p>• Responsive design</p>
                <p>• Smooth animations</p>
                <p>• Play/pause controls</p>
              </div>
              <div className="space-y-2">
                <p>• Volume control</p>
                <p>• Time display</p>
                <p>• Progress tracking</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaveformDemo;



