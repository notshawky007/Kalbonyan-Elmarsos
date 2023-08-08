class Course {
  constructor(title, length, price) {
    this.title = title;
    this.length = length;
    this.price = price;
  }
  get price() {
    return `$${this._price.toFixed(2)}`;
  }

  set price(value) {
    if (value > 0) {
      this._price = value;
    } else {
      throw new Error("Price must be positive");
    }
  }
  calculateValue() {
    const value = this.length / this.price;
    return value.toFixed(2);
  }

  courseSummary() {
    const summary = `Course Title: ${this.title} \nCourse Length: ${
      this.length
    } \nCourse Price: ${this.price} \nCourse Value: ${this.calculateValue()}`;
    return summary;
  }
}

class PracticalCourse extends Course {
  constructor(title, length, price, numOfExercises) {
    super(title, length, price);
    this.numOfExercises = numOfExercises;
  }
}

class TheoreticalCourse extends Course {
  publish() {
    console.log(`The ${this.title} course has been published!`);
  }
}

const practicalCourse = new PracticalCourse(
  "JavaScript for Beginners",
  180,
  150,
  20
);
const theoreticalCourse = new TheoreticalCourse(
  "Algorithms and Data Structures",
  360,
  99.99
);

const course1 = new Course("Node js", 10, 88);
const course2 = new Course("React", 20, 99);
console.log(course1);
console.log(course2);
console.log(course1.courseSummary());
console.log(course2.courseSummary());

console.log(practicalCourse);
console.log(theoreticalCourse);
console.log(practicalCourse.courseSummary());
console.log(theoreticalCourse.courseSummary());
