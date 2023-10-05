import { useState } from "react";
import "./styles.css";
import { tasks } from "./tasks";
import { sortItems } from "./sort";
import { addWeeks, endOfTomorrow,add, addMonths,isToday,isTomorrow,isThisWeek,isThisMonth } from 'date-fns'
import { IsDateFallsInNextWeek, isDateFallsInNextMonth } from "./util";


export default function App() {
  const [tasksData, setTasks] = useState(tasks);
  let sortedTasks = tasksData.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
  const today = new Date();

 



  const categorizedData = {
    today: [],
    tomorrow: [],
    thisWeek: [],
    nextWeek: [],
    thisMonth: [],
    nextMonth: []
  };

  sortedTasks.forEach(function (item) {
    const itemDate = new Date(item.dueDate);
    const diffDays = Math.ceil((itemDate - today) / (1000 * 60 * 60 * 24));
    if (isToday(new Date(item.dueDate))) {
      categorizedData.today.push(item);
    } else if (isTomorrow(new Date(item.dueDate))) {
      categorizedData.tomorrow.push(item);
    } else if (isThisWeek( new Date(item.dueDate))) {
      categorizedData.thisWeek.push(item);
    } else if (IsDateFallsInNextWeek(new Date(item.dueDate))) {
      categorizedData.nextWeek.push(item);
    } else if (isThisMonth(new Date(item.dueDate))) {
      categorizedData.thisMonth.push(item);
    } else if (isDateFallsInNextMonth(item.dueDate)) {
      categorizedData.nextMonth.push(item);
    }
  });

  let sortedData = {
    today: sortItems(categorizedData.today),
    tomorrow: sortItems(categorizedData.tomorrow),
    thisWeek: sortItems(categorizedData.thisWeek),
    nextWeek: sortItems(categorizedData.nextWeek),
    thisMonth: sortItems(categorizedData.thisMonth),
    nextMonth: sortItems(categorizedData.nextMonth)
  };

  function addClass(priority) {
    if (priority === "High") {
      return "high";
    } else if (priority === "Low") {
      return "low";
    } else if (priority === "Medium") {
      return "medium";
    } else if (priority === "Urgent") {
      return "urgent";
    }
  }

  const todayElements = categorizedData.today.map(function (item, index) {
    return (
      <div key={index.toString()} className="task-container">
        <span className="title"> {item.title} </span>
        <span className={addClass(item.priority)}> {item.priority} </span>
        <span> {item.status} </span>
        {/* <span> {new Date(item.dueDate).toLocaleString()} </span> */}
        <span> {item.user} </span>
        <span> {item.dueDate} </span>
      </div>
    );
  });

  const tomorrowElements = categorizedData.tomorrow.map(function (item, index) {
    return (
      <div key={index.toString()} className="task-container">
        <span className="title"> {item.title} </span>
        <span className={addClass(item.priority)}> {item.priority} </span>
        <span> {item.status} </span>
        {/* <span> {new Date(item.dueDate).toLocaleString()} </span> */}
        <span> {item.user} </span>
        <span> {item.dueDate} </span>

      </div>
    );
  });

  const thisWeekElements = categorizedData.thisWeek.map(function (item, index) {
    return (
      <div key={index.toString()} className="task-container">
        <span className="title"> {item.title} </span>
        <span className={addClass(item.priority)}> {item.priority} </span>
        <span> {item.status} </span>
        {/* <span> {new Date(item.dueDate).toLocaleString()} </span> */}
        <span> {item.user} </span>
        <span> {item.dueDate} </span>

      </div>
    );
  });

  const NextWeekElements = categorizedData.nextWeek.map(function (item, index) {
    return (
      <div key={index.toString()} className="task-container">
        <span className="title"> {item.title} </span>
        <span className={addClass(item.priority)}> {item.priority} </span>
        <span> {item.status} </span>
        {/* <span> {new Date(item.dueDate).toLocaleString()} </span> */}
        <span> {item.user} </span>
        <span> {item.dueDate} </span>

      </div>
    );
  });

  const thisMonthElements = categorizedData.thisMonth.map(function (
    item,
    index
  ) {
    return (
      <div key={index.toString()} className="task-container">
        <span className="title"> {item.title} </span>
        <span className={addClass(item.priority)}> {item.priority} </span>
        <span> {item.status} </span>
        {/* <span> {new Date(item.dueDate).toLocaleString()} </span> */}
        <span> {item.user} </span>
        <span> {item.dueDate} </span>

      </div>
    );
  });

  const nextMonthElements = categorizedData.nextMonth.map(function (
    item,
    index
  ) {
    return (
      <div key={index.toString()} className="task-container">
        <span className="title"> {item.title} </span>
        <span className={addClass(item.priority)}> {item.priority} </span>
        <span> {item.status} </span>
        {/* <span> {new Date(item.dueDate).toLocaleString()} </span> */}
        <span> {item.user} </span>
        <span> {item.dueDate} </span>

      </div>
    );
  });

  return (
    <div className="App">
      <div className="task-header">
        <span>Title</span>
        <span>Priority</span>
        <span>Status</span>
        <span>User</span>
        <span>Due date</span>

      </div>
      <div className="all-tasks-container">
        <h5 className="date-category"> Today </h5>
        {todayElements}
        <hr />
        <h5 className="date-category"> Tomorrow </h5>
        {tomorrowElements}
        <hr />

        <h5 className="date-category"> This week </h5>
        {thisWeekElements}
        <hr />

        <h5 className="date-category"> Next week </h5>
        {NextWeekElements}
        <hr />

        <h5 className="date-category"> This month </h5>
        {thisMonthElements}
        <hr />

        <h5 className="date-category"> Next month </h5>
        {nextMonthElements}
        <hr />
      </div>
    </div>
  );
}
