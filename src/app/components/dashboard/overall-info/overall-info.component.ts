import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-overall-info',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="glass-panel-dark rounded-3xl p-6 h-full flex flex-col justify-between relative overflow-hidden">
      <!-- Header -->
      <div class="flex justify-between items-start z-10">
        <h3 class="text-gray-300 font-medium text-sm">Overall Information</h3>
        <div class="flex gap-2">
          <button class="text-gray-400 hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>
          </button>
          <button class="text-gray-400 hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
          </button>
        </div>
      </div>

      <!-- Main Stats -->
      <div class="flex items-end gap-4 mt-4 z-10">
        <div class="flex flex-col">
          <span class="text-5xl font-bold text-white">43</span>
          <span class="text-xs text-gray-400 mt-1">Tasks done<br>for all time</span>
        </div>
        <div class="flex flex-col mb-1">
          <span class="text-2xl font-bold text-white">2</span>
          <span class="text-xs text-gray-400">projects are<br>stopped</span>
        </div>
      </div>

      <!-- Detail Cards -->
      <div class="grid grid-cols-3 gap-3 mt-6 z-10">
        <!-- Projects -->
        <div class="bg-white/10 rounded-xl p-3 flex flex-col items-center text-center backdrop-blur-sm">
          <div class="w-8 h-8 rounded-full border-2 border-gray-500 flex items-center justify-center mb-2">
            <div class="w-2 h-2 bg-white rounded-full"></div>
          </div>
          <span class="text-xl font-bold text-white">28</span>
          <span class="text-[10px] text-gray-400 uppercase tracking-wide">Projects</span>
        </div>

        <!-- In Progress -->
        <div class="bg-white/10 rounded-xl p-3 flex flex-col items-center text-center backdrop-blur-sm">
          <div class="w-8 h-8 rounded-full border-2 border-dashed border-gray-500 flex items-center justify-center mb-2 animate-spin-slow">
            <div class="w-2 h-2 bg-transparent rounded-full"></div>
          </div>
          <span class="text-xl font-bold text-white">14</span>
          <span class="text-[10px] text-gray-400 uppercase tracking-wide">In Progress</span>
        </div>

        <!-- Completed -->
        <div class="bg-white/10 rounded-xl p-3 flex flex-col items-center text-center backdrop-blur-sm">
           <div class="w-8 h-8 rounded-full border-2 border-gray-500 flex items-center justify-center mb-2 relative">
            <div class="w-2 h-2 bg-white rounded-full absolute"></div>
            <div class="w-full h-full rounded-full border-2 border-white absolute top-[-2px] left-[-2px]" style="clip-path: polygon(0 0, 100% 0, 100% 50%, 0 50%); transform: rotate(45deg);"></div>
          </div>
          <span class="text-xl font-bold text-white">11</span>
          <span class="text-[10px] text-gray-400 uppercase tracking-wide">Completed</span>
        </div>
      </div>
      
      <!-- Decorative Blur -->
      <div class="absolute -bottom-10 -right-10 w-32 h-32 bg-purple-500/30 rounded-full blur-2xl"></div>
    </div>
  `
})
export class OverallInfoComponent {}
