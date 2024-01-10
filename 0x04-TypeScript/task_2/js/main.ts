interface DirectorInterface {
    workFromHome() :string;
    getCoffeeBreak() :string;
    workDirectorTasks() :string;
}

interface TeacherInterface {
    workFromHome() :string;
    getCoffeeBreak() :string;
    workDirectorTasks() :string;
    
}

class Director implements DirectorInterface {
    workFromHome() {
        return 'Working from home';
    }
    getCoffeeBreak() {
        return 'Getting a coffee break';
    }
    workDirectorTasks() {
        return 'Getting to director tasks';
    }
}

class Teacher implements TeacherInterface {
    workFromHome() {
        return 'Cannot work from home';
    }
    getCoffeeBreak() {
        return 'Cannot have a break';
    }
    workDirectorTasks() {
        return 'Getting to work';
    }
}

function createEmployee(salary: number | string){
    if(typeof salary === 'number' && salary < 500) {
        return new Teacher();
    }
    return new Director();

}

function isDirector(employee: DirectorInterface | TeacherInterface) {
    if (employee instanceof Director){
        return true;
    }
    return false;
}

function executeWork(employee: any) {
    if (isDirector(employee)) {
        new Director().workDirectorTasks();
    }
    if (!isDirector(employee)){
        new Teacher().workDirectorTasks();
    }
}
type Subjects = 'Math' | 'History';

function teachClass(todayClass: string) {
    if (todayClass === 'Math'){
        return ('Teaching Math');
    }
    if (todayClass === 'History'){
        return ('Teaching History');
    }
  }
  createEmployee(200);
//    teachClass('Math');