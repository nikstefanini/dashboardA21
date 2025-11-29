import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverallInfoComponent } from './overall-info/overall-info.component';
import { WeeklyProgressComponent } from './charts/weekly-progress/weekly-progress.component';
import { MonthProgressComponent } from './charts/month-progress/month-progress.component';
import { MonthGoalsComponent } from './goals/month-goals.component';
import { TaskProcessComponent } from './tasks/task-process.component';
import { LastProjectsComponent } from './projects/last-projects.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    OverallInfoComponent,
    WeeklyProgressComponent,
    MonthProgressComponent,
    MonthGoalsComponent,
    TaskProcessComponent,
    LastProjectsComponent
  ],
  template: `
    <div class="grid grid-cols-12 gap-6 pb-8">
      <!-- Row 1 -->
      <div class="col-span-12 md:col-span-4 lg:col-span-3 h-[280px]">
        <app-overall-info></app-overall-info>
      </div>
      
      <div class="col-span-12 md:col-span-4 lg:col-span-3 h-[280px]">
        <app-weekly-progress></app-weekly-progress>
      </div>
      
      <div class="col-span-12 md:col-span-4 lg:col-span-3 h-[280px]">
        <app-month-progress></app-month-progress>
      </div>

      <!-- Row 2 -->
      <div class="col-span-12 md:col-span-4 lg:col-span-3 h-[240px]">
        <app-month-goals></app-month-goals>
      </div>
      
      <div class="col-span-12 md:col-span-8 lg:col-span-6 h-[240px]">
        <app-task-process></app-task-process>
      </div>
      
      <div class="col-span-12 md:col-span-4 lg:col-span-3 h-[240px] flex items-center justify-center">
         <!-- Add Task Big Button Mock -->
         <button class="w-full h-full rounded-3xl border-2 border-dashed border-gray-300 flex flex-col items-center justify-center text-gray-400 hover:border-gray-500 hover:text-gray-600 hover:bg-white/30 transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mb-2"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
            <span class="font-medium">Add task</span>
         </button>
      </div>

      <!-- Row 3 -->
      <div class="col-span-12 h-[180px]">
        <app-last-projects></app-last-projects>
      </div>
    </div>
  `
})
export class DashboardComponent {}
