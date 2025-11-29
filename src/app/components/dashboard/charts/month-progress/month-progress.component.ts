import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-month-progress',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="glass-panel rounded-3xl p-6 h-full flex flex-col">
      <!-- Header -->
      <div class="flex justify-between items-start mb-2">
        <h3 class="text-gray-900 font-bold text-lg">Month progress</h3>
        <button class="text-gray-400 hover:text-gray-900 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
        </button>
      </div>
      
      <p class="text-xs font-bold text-gray-900 mb-6">+20% <span class="text-gray-400 font-normal">compared to last month*</span></p>

      <div class="flex items-center gap-4">
        <!-- Legend -->
        <div class="space-y-3 text-xs font-medium">
          <div class="flex items-center gap-2">
            <div class="w-2 h-2 rounded-full bg-black"></div>
            <span class="text-gray-600">Sport</span>
          </div>
          <div class="flex items-center gap-2">
            <div class="w-2 h-2 rounded-full bg-gray-400"></div>
            <span class="text-gray-600">Study</span>
          </div>
          <div class="flex items-center gap-2">
            <div class="w-2 h-2 rounded-full bg-gray-200"></div>
            <span class="text-gray-600">Project</span>
          </div>
        </div>

        <!-- Donut Chart Mock -->
        <div class="relative w-28 h-28 ml-auto">
          <svg viewBox="0 0 36 36" class="w-full h-full rotate-[-90deg]">
            <!-- Background Circle -->
            <path class="text-gray-100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" stroke-width="3" />
            
            <!-- Segment 1 (Black) -->
            <path class="text-black" stroke-dasharray="60, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" />
            
            <!-- Segment 2 (Gray) -->
            <path class="text-gray-400" stroke-dasharray="25, 100" stroke-dashoffset="-65" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" />
          </svg>
          
          <!-- Center Text -->
          <div class="absolute inset-0 flex items-center justify-center">
            <span class="text-sm font-bold text-gray-900">120%</span>
          </div>
        </div>
      </div>

      <!-- Footer Actions -->
      <div class="mt-auto pt-4 flex gap-2">
        <button class="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white hover:bg-gray-800 transition-colors shadow-lg shadow-black/20">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>
        </button>
        <button class="flex-1 h-10 rounded-full border border-gray-200 flex items-center justify-center gap-2 text-xs font-bold text-gray-900 hover:bg-gray-50 transition-colors">
          Download Report
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
        </button>
      </div>
    </div>
  `
})
export class MonthProgressComponent {}
