import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-month-goals',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="glass-panel rounded-3xl p-6 h-full flex flex-col">
      <div class="flex justify-between items-center mb-4">
        <h3 class="text-gray-900 font-bold text-lg">Month Goals</h3>
        <button class="text-xs font-medium text-gray-500 hover:text-gray-900 flex items-center gap-1 transition-colors">
          Open archive
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
        </button>
      </div>

      <div class="flex-1 overflow-y-auto space-y-3 pr-2 custom-scrollbar">
        @for (goal of goals(); track goal.id) {
          <div class="flex items-start gap-3 group cursor-pointer">
            <div class="relative flex items-center justify-center w-5 h-5 mt-0.5">
              <input type="checkbox" 
                     [checked]="goal.completed" 
                     (change)="toggleGoal(goal.id)"
                     class="peer appearance-none w-5 h-5 border-2 border-gray-300 rounded-md checked:bg-black checked:border-black transition-colors cursor-pointer">
              <svg class="absolute w-3 h-3 text-white hidden peer-checked:block pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <span class="text-sm text-gray-600 group-hover:text-gray-900 transition-colors" [class.line-through]="goal.completed" [class.text-gray-400]="goal.completed">
              {{ goal.text }}
            </span>
          </div>
        }
      </div>
    </div>
  `
})
export class MonthGoalsComponent {
  goals = signal([
    { id: 1, text: 'Read a book "The Art of Color"', completed: true },
    { id: 2, text: 'Learn new tools for design', completed: false },
    { id: 3, text: 'Create a portfolio on Behance', completed: false },
    { id: 4, text: 'Learn how to draw', completed: false },
    { id: 5, text: 'Update resume', completed: false }
  ]);

  toggleGoal(id: number) {
    this.goals.update(goals => 
      goals.map(g => g.id === id ? { ...g, completed: !g.completed } : g)
    );
  }
}
