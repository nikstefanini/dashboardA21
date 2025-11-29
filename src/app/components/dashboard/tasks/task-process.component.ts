import { Component, signal, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-process',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="h-full flex flex-col">
      <!-- Header -->
      <div class="flex justify-between items-center mb-4">
        <h3 class="text-gray-900 font-bold text-lg">Task In process ({{ tasks().length }})</h3>
        <button class="text-xs font-medium text-gray-500 hover:text-gray-900 flex items-center gap-1 transition-colors">
          Open archive
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
        </button>
      </div>

      <!-- Task Cards Row -->
      <div class="flex gap-4 overflow-x-auto pb-2">
        
        @for (task of tasks(); track task.id) {
          <div class="glass-panel rounded-3xl p-5 min-w-[200px] flex-1 flex flex-col relative group hover:-translate-y-1 transition-transform duration-300">
            <div class="flex justify-between items-start mb-4">
              <div class="w-8 h-8 rounded-xl bg-white flex items-center justify-center shadow-sm">
                <span [innerHTML]="task.icon"></span>
              </div>
              <button class="text-gray-400 hover:text-gray-900">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
              </button>
            </div>
            
            <h4 class="text-sm font-bold text-gray-900 mb-6 leading-tight" [innerHTML]="task.title"></h4>
            
            <div class="mt-auto flex justify-between items-center">
              <span class="text-[10px] font-medium text-gray-400 uppercase tracking-wide">{{ task.date }}</span>
              <button class="w-8 h-8 rounded-xl flex items-center justify-center shadow-sm transition-colors"
                      [class.bg-black]="task.urgent" [class.text-white]="task.urgent" [class.shadow-lg]="task.urgent" [class.shadow-black_20]="task.urgent"
                      [class.bg-white]="!task.urgent" [class.text-gray-900]="!task.urgent" [class.hover:bg-gray-50]="!task.urgent" [class.hover:bg-gray-800]="task.urgent">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
              </button>
            </div>
          </div>
        }

        <!-- Add Task Placeholder -->
        <div class="rounded-3xl border-2 border-dashed border-gray-300 p-5 min-w-[200px] flex-1 flex flex-col items-center justify-center text-gray-500 hover:border-gray-400 hover:text-gray-700 hover:bg-white/30 transition-all cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mb-2"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
          <span class="text-sm font-medium">Add task</span>
        </div>

      </div>
    </div>
  `
})
export class TaskProcessComponent {
  private sanitizer = inject(DomSanitizer);

  tasks = signal([
    {
      id: 1,
      title: this.sanitizer.bypassSecurityTrustHtml('Buy Susan a gift<br>for Bithday'),
      date: 'Today',
      urgent: true,
      icon: this.sanitizer.bypassSecurityTrustHtml(`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="8" width="18" height="4" rx="1" ry="1"></rect><path d="M12 8v13"></path><path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"></path><path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"></path></svg>`)
    },
    {
      id: 2,
      title: this.sanitizer.bypassSecurityTrustHtml('Doctor\'s<br>appointment on<br>Tuesday'),
      date: '02.09.2023',
      urgent: false,
      icon: this.sanitizer.bypassSecurityTrustHtml(`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>`)
    }
  ]);
}
