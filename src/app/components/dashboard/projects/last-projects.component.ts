import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-last-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="h-full flex flex-col">
      <div class="flex justify-between items-center mb-4">
        <h3 class="text-gray-900 font-bold text-lg">Last Projects</h3>
        <div class="flex gap-2 text-gray-400">
           <span class="text-xs font-medium">Sort by</span>
           <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
           <div class="flex gap-1 ml-2">
             <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" class="text-gray-900"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
             <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>
           </div>
        </div>
      </div>

      <div class="grid grid-cols-3 gap-4">
        @for (project of projects(); track project.id) {
          <div class="bg-gray-900 rounded-3xl p-5 text-white relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
            <div class="flex justify-between items-start mb-2">
              <h4 class="font-bold text-sm">{{ project.title }}</h4>
              <div class="w-6 h-6 rounded-full border border-gray-600 flex items-center justify-center text-[10px]">
                <div class="w-full h-full rounded-full border-t-2 border-r-2 border-white" [style.transform]="'rotate(' + project.progress + 'deg)'"></div>
              </div>
            </div>
            
            <div class="flex items-center gap-2 mb-4">
              <div class="w-1.5 h-1.5 rounded-full bg-white"></div>
              <span class="text-[10px] text-gray-400 uppercase tracking-wide">{{ project.status }}</span>
            </div>

            @if (project.description) {
              <p class="text-[10px] text-gray-400 leading-relaxed line-clamp-2">
                {{ project.description }}
              </p>
            }
          </div>
        }
      </div>
    </div>
  `
})
export class LastProjectsComponent {
  projects = signal([
    {
      id: 1,
      title: 'New Schedule',
      progress: 45,
      status: 'In progress',
      description: 'Done: Develop a new plan for Alina\'s education; Print a new timetable; Buy ...'
    },
    {
      id: 2,
      title: 'Prototype animation',
      progress: 360,
      status: 'Completed',
      description: null
    },
    {
      id: 3,
      title: 'Ai Project 2 part',
      progress: 12,
      status: 'In progress',
      description: null
    }
  ]);
}
