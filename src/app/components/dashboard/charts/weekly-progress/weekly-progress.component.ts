import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-weekly-progress',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="glass-panel rounded-3xl p-6 h-full flex flex-col">
      <!-- Header -->
      <div class="flex justify-between items-start mb-4">
        <div>
          <h3 class="text-gray-900 font-bold text-lg">Weekly progress</h3>
          <div class="flex gap-3 mt-1 text-xs font-medium">
            <div class="flex items-center gap-1">
              <div class="w-2 h-2 rounded-full bg-black"></div>
              <span class="text-gray-600">Sport</span>
            </div>
            <div class="flex items-center gap-1">
              <div class="w-2 h-2 rounded-full bg-gray-400"></div>
              <span class="text-gray-600">Study</span>
            </div>
          </div>
        </div>
        
        <div class="flex gap-2">
           <button class="w-8 h-8 rounded-full bg-white flex items-center justify-center text-gray-400 hover:text-gray-900 shadow-sm transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"></path><path d="M21 3v5h-5"></path></svg>
          </button>
        </div>
      </div>

      <!-- Chart Area (Mock with SVG) -->
      <div class="flex-1 relative mt-2 min-h-[120px]">
        <!-- Tooltip Mock -->
        <div class="absolute top-0 right-10 bg-black text-white text-xs font-bold px-2 py-1 rounded-lg z-10 shadow-lg transform -translate-y-1/2">
          +24%
          <div class="absolute bottom-[-4px] left-1/2 transform -translate-x-1/2 w-2 h-2 bg-black rotate-45"></div>
        </div>

        <svg viewBox="0 0 300 150" class="w-full h-full overflow-visible" preserveAspectRatio="none">
          <!-- Grid Lines -->
          <line x1="0" y1="150" x2="300" y2="150" stroke="#e5e7eb" stroke-width="1" />
          
          <!-- Line 1 (Study - Gray) -->
          <path d="M0,100 C50,120 100,80 150,100 S250,130 300,90" fill="none" stroke="#9ca3af" stroke-width="2" />
          
          <!-- Line 2 (Sport - Black) -->
          <path d="M0,80 C50,100 80,60 150,80 S220,20 260,40 S300,60 300,60" fill="none" stroke="#000000" stroke-width="2" />
          
          <!-- Area under Line 2 (Optional gradient) -->
          <defs>
            <linearGradient id="gradientSport" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style="stop-color:rgba(0,0,0,0.1);stop-opacity:1" />
              <stop offset="100%" style="stop-color:rgba(0,0,0,0);stop-opacity:0" />
            </linearGradient>
          </defs>
          <path d="M0,80 C50,100 80,60 150,80 S220,20 260,40 S300,60 300,60 V150 H0 Z" fill="url(#gradientSport)" />
        </svg>
      </div>

      <!-- X Axis Labels -->
      <div class="flex justify-between text-[10px] font-bold text-gray-400 mt-2 uppercase">
        <span>M</span>
        <span>T</span>
        <span>W</span>
        <span>T</span>
        <span>F</span>
        <span class="w-5 h-5 rounded-full bg-black text-white flex items-center justify-center -mt-1">S</span>
        <span>S</span>
      </div>
    </div>
  `
})
export class WeeklyProgressComponent {}
