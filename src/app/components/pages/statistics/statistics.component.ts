import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-statistics',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="glass-panel rounded-3xl p-8 h-full flex flex-col items-center justify-center text-center">
      <div class="w-16 h-16 bg-white/50 rounded-2xl flex items-center justify-center mb-4 shadow-sm">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gray-600">
          <line x1="18" y1="20" x2="18" y2="10"></line>
          <line x1="12" y1="20" x2="12" y2="4"></line>
          <line x1="6" y1="20" x2="6" y2="14"></line>
        </svg>
      </div>
      <h2 class="text-2xl font-bold text-gray-900 mb-2">Statistics</h2>
      <p class="text-gray-500 max-w-md">Detailed analytics and reports. This feature is currently under development.</p>
    </div>
  `
})
export class StatisticsComponent {}
