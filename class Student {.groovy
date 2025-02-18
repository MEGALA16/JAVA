class Student {
    String name;
    int age;
    String grade;
    String studentID;
    String major;
    public Student(String name, int age, String grade, String studentID, String major) {
        this.name = name;
        this.age = age;
        this.grade = grade;
        this.studentID = studentID;
        this.major = major;
    }
    public void displayStudentDetails() {
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
        System.out.println("Grade: " + grade);
        System.out.println("Student ID: " + studentID);
        System.out.println("Major: " + major);
        System.out.println();
    }
}
public class Main {
    public static void main(String[] args) {
        Student student1 = new Student("Megu", 20, "Sophomore", "S001", "Computer Science");
        Student student2 = new Student("Nandhu", 21, "Junior", "S002", "Mechanical Engineering");
        Student student3 = new Student("Loga", 19, "Freshman", "S003", "Electrical Engineering");
        Student student4 = new Student("swe", 22, "Senior", "S004", "Civil Engineering");
        Student student5 = new Student("Deepu", 20, "Sophomore", "S005", "Biotechnology");
        student1.displayStudentDetails();
        student2.displayStudentDetails();
        student3.displayStudentDetails();
        student4.displayStudentDetails();
        student5.displayStudentDetails();
    }
}
