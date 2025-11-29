import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-tasks',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="glass-panel rounded-3xl p-8 h-full flex flex-col items-center justify-center text-center">
      <div class="w-16 h-16 bg-white/50 rounded-2xl flex items-center justify-center mb-4 shadow-sm">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gray-600">
          <path d="M9 11l3 3L22 4"></path>
          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
        </svg>
      </div>
      <h2 class="text-2xl font-bold text-gray-900 mb-2">My Tasks</h2>
      <p class="text-gray-500 max-w-md">View and manage your personal tasks. This feature is currently under development.</p>
    </div>
  `
})
export class MyTasksComponent {}
