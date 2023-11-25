class Student {
    constructor(n,r,c,s,marks) {
      this.name = n;
      this.roll_no = r;
      this.class = c;
      this.section = s;
      this.marks_5_subjects = marks;
    }
  
    Top_3_Subjects(){
      let subjects = Object.keys(this.marks_5_subjects);
      let sortedSubjects = subjects.sort((a, b) => this.marks_5_subjects[b] - this.marks_5_subjects[a]);
      let top3Subjects = sortedSubjects.slice(0, 3);
      console.log("Top 3 Subjects are:", top3Subjects);
    }
      ReportCard() {
      console.log("+***********************+");
      console.log("| REPORT CARD    |");
      console.log("+***********************+");
      console.log("| Name -", this.name);
      console.log("| Roll no. -", this.roll_no);
      console.log("| Class    -", this.class);
      console.log("| Section  -", this.section);
  
      for (let subject in this.marks_5_subjects) {
        console.log("|", subject, "-", this.marks_5_subjects[subject]);
      }
  
      let totalMarks = Object.values(this.marks_5_subjects).reduce((sum, marks) => sum + marks);
      let percentage = (totalMarks / Object.keys(this.marks_5_subjects).length) * 100;
      console.log("| Percentage -", percentage + "%");
      console.log("+-------------------------+");
    }
  }
  
  let student = new Student(
    "Anklesh Tumanne",
    64,
    "cap01",
    "A",
    {
      maths: 100,
      social_science: 89,
      english: 80,
      hindi: 96,
      science: 75,
    }
  );
  
  student.Top_3_Subjects();
  student.ReportCard();