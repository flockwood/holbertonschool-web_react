// Define the DirectorInterface
interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTask(): string;
} 

// Define the TeacherInterface
interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

// Implement the Director class
class Director implements DirectorInterface {
    workFromHome(): string {
        return "Working from home";
    }

    getCoffeeBreak(): string {
        return "Getting a coffee break";
    }

    workDirectorTask(): string {
        return "Getting to director tasks";
    }
}

// Implement the Teacher class
class Teacher implements TeacherInterface {
    workFromHome(): string {
        return "Cannot work from home";
    }

    getCoffeeBreak(): string {
        return "Cannot have a break";
    }

    workTeacherTasks(): string {
        return "Getting to work";
    }
}

// Create the createEmployee function
function createEmployee(salary: number | string): Director | Teacher {
    if (typeof salary == "number" && salary < 500) {
        return new Teacher();
    }
    return new Director();
}

// Write a function isDirector as a type predicate
function isDirector(employee: Director | Teacher): employee is Director {
    return employee instanceof Director;
}

// Write a function executeWork
function executeWork(employee: Director | Teacher): string {
    if (isDirector(employee)) {
        return employee.workDirectorTask();
    } else {
        return employee.workTeacherTasks();
    }
}

// Test the createEmployee function
console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));

// Test the new functions
console.log(executeWork(createEmployee(200)));
console.log(executeWork(createEmployee(1000)));

