import type { SchedulerOptions } from '@biryanihouse/orchestration'

export type CronJobConfig = {
  name: string
  schedule: string
  numberOfExecutions?: SchedulerOptions['numberOfExecutions']
}
