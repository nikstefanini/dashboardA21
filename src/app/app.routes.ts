import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CalendarComponent } from './components/pages/calendar/calendar.component';
import { MyTasksComponent } from './components/pages/tasks/my-tasks.component';
import { StatisticsComponent } from './components/pages/statistics/statistics.component';
import { DocumentsComponent } from './components/pages/documents/documents.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'tasks', component: MyTasksComponent },
  { path: 'statistics', component: StatisticsComponent },
  { path: 'documents', component: DocumentsComponent },
];
