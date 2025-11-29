import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="glass-panel rounded-3xl p-8 h-full flex flex-col items-center justify-center text-center">
      <div class="w-16 h-16 bg-white/50 rounded-2xl flex items-center justify-center mb-4 shadow-sm">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gray-600">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="16" y1="2" x2="16" y2="6"></line>
          <line x1="8" y1="2" x2="8" y2="6"></line>
          <line x1="3" y1="10" x2="21" y2="10"></line>
        </svg>
      </div>
      <h2 class="text-2xl font-bold text-gray-900 mb-2">Calendar</h2>
      <p class="text-gray-500 max-w-md">Manage your schedule and upcoming events. This feature is currently under development.</p>
    </div>
  `
})
export class CalendarComponent {}
