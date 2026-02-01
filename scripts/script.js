import * as datepicker from './datepicker.js';
import * as accountWindow from './accountWindow.js';
import { setAmountOfTasks } from './amountOfTasks.js';
import * as task from './task.js';

datepicker.setCurrentDateById('btn--date-picker');
datepicker.setDatepickerRegionSetting();
datepicker.createDatepickerById('btn--date-picker');

accountWindow.setAccountWindowAction();
accountWindow.setPositionOfAccountWindow();

setAmountOfTasks();

task.setAddTaskWindowAction();
task.setChangeTaskBackgroundAction();
task.setDeleteTaskAction();

