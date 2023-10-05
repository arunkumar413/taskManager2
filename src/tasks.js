import { endOfTomorrow, addWeeks, addMonths, add } from 'date-fns'

export const tasks = [
  {
    title: "My task one",
    dueDate: new Date().toISOString(),
    priority: "High",
    status: "In progress",
    user: "Arun"
  },
  {
    title: "My task one",
    dueDate: new Date().toISOString(),
    priority: "Low",
    status: "In progress",
    user: "Arun"
  },

  {
    title: "My task two",
    dueDate: new Date().toISOString(),
    priority: "Low",
    status: "Backlog",
    user: "Tom"
  },
  {
    title: "My task one",
    dueDate: new Date().toISOString(),
    priority: "Low",
    status: "In progress",
    user: "Tom"
  },
  {
    title: "My task three",
    dueDate: new Date().toISOString(),
    priority: "Medium",
    status: "Done",
    user: "Jerry"
  },
  {
    title: "My task four",
    dueDate: new Date().toISOString(),
    priority: "Urgent",
    status: "In progress",
    user: "Jack"
  },
  {
    title: "My task four",
    dueDate: add(new Date(), {
      days: 1
    }).toISOString(),
    priority: "Urgent",
    status: "In progress",
    user: "Arun"
  },

  {
    title: "My task five",
    dueDate: add(new Date(), {
      days: 1
    }).toISOString(),
    priority: "Urgent",
    status: "In progress",
    user: "Kumar"
  },

  {
    title: "My task six",
    dueDate: add(new Date(), {
      days: 1
    }).toISOString(),
    priority: "Urgent",
    status: "In progress",
    user: "Arun"
  },
  {
    title: "My task seven",
    dueDate: addWeeks(new Date(), 1).toISOString(),
    priority: "Low",
    status: "In progress",
    user: "Arun"
  },
  {
    title: "My task 8",
    dueDate: addWeeks(new Date(), 1).toISOString(),
    priority: "Medium",
    status: "In progress",
    user: "Arun"
  },
  {
    title: "My task nine",
    dueDate: addWeeks(new Date(), 1).toISOString(),
    priority: "High",
    status: "In progress",
    user: "Tom"
  },

  {
    title: "My task ten",
    dueDate: addWeeks(new Date(), 1).toISOString(),
    priority: "Low",
    status: "Back log",
    user: "Tom"
  },
  {
    title: "My task eleven",
    dueDate: addWeeks(new Date(), 1).toISOString(),
    priority: "Medium",
    status: "Back log",
    user: "Jerry"
  },
  {
    title: "My task twelve",
    dueDate: addWeeks(new Date(), 1).toISOString(),
    priority: "High",
    status: "Back log",
    user: "Jerry"
  },
  {
    title: "My task twelve",
    dueDate: "2023-10-25T07:11:58.099Z",
    priority: "High",
    status: "Back log",
    user: "Jerry"
  },
  {
    title: "My task twelve",
    dueDate: "2023-10-25T07:11:58.099Z",
    priority: "Medium",
    status: "Back log",
    user: "Tom"
  },
  {
    title: "My task twelve",
    dueDate: "2023-10-25T07:11:58.099Z",
    priority: "Low",
    status: "Back log",
    user: "Tom"
  },
  {
    title: "My task twelve",
    dueDate: add(new Date(), {
      months: 1
    }).toISOString(),
    priority: "Low",
    status: "Back log",
    user: "Arun"
  },
  {
    title: "My task twelve",
    dueDate: add(new Date(), {
      months: 1
    }).toISOString(),
    priority: "Medium",
    status: "In progress",
    user: "Jack"
  },
  {
    title: "My task twelve",
    dueDate: add(new Date(), {
      months: 1
    }).toISOString(),
    priority: "High",
    status: "In progress",
    user: "Jack"
  },
  
  {
    title: "My task twelve",
    dueDate: '2023-10-07T07:11:58.099Z',
    priority: "High",
    status: "In progress",
    user: "Jack"
  }
];
