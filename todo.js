import { LightningElement, track } from 'lwc';

export default class Todo extends LightningElement {

    @track
    todoTasks=[]

    newTask='';

updateNewTask(event)
{
      this.newTask=event.target.value;
    //console.log(event.target.value);

    //console.log(this.newTask);
    console.log(this.newTask);
}
addTaskToList(event)
{
//console.log('Button Click');

this.todoTasks.unshift({
    id: this.todoTasks.length+1,
    name: this.newTask
});
 console.log(this.todoTasks);
 this.newTask='';
}
deleteTaskToList(event)
{
    console.log('Delete button click');
     this.todoTasks.pop();

}
syncTaskToList(event)
{
    console.log('sync button click');
    this.todoTasks.splice(0,this.todoTasks.length);

}

}
