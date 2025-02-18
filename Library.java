Library Management System
1. Book Class
public class Book {
    private String title;
    private String author;
    private String ISBN;
    private boolean isAvailable;

    public Book(String title, String author, String ISBN) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.isAvailable = true;
    }

    public String getTitle() {
        return title;
    }

    public String getAuthor() {
        return author;
    }

    public String getISBN() {
        return ISBN;
    }

    public boolean isAvailable() {
        return isAvailable;
    }

    public void setAvailable(boolean available) {
        isAvailable = available;
    }

    @Override
    public String toString() {
        return "Book{" +
                "title='" + title + '\'' +
                ", author='" + author + '\'' +
                ", ISBN='" + ISBN + '\'' +
                ", isAvailable=" + isAvailable +
                '}';
    }
}

2. Member Class
public class Member {
    private String name;
    private String memberId;

    public Member(String name, String memberId) {
        this.name = name;
        this.memberId = memberId;
    }

    public String getName() {
        return name;
    }

    public String getMemberId() {
        return memberId;
    }

    @Override
    public String toString() {
        return "Member{" +
                "name='" + name + '\'' +
                ", memberId='" + memberId + '\'' +
                '}';
    }
}

3. Library Class
import java.util.ArrayList;
import java.util.List;

public class Library {
    private List<Book> books;
    private List<Member> members;

    public Library() {
        books = new ArrayList<>();
        members = new ArrayList<>();
    }

    public void addBook(Book book) {
        books.add(book);
    }

    public void addMember(Member member) {
        members.add(member);
    }

    public void borrowBook(String ISBN, String memberId) {
        for (Book book : books) {
            if (book.getISBN().equals(ISBN) && book.isAvailable()) {
                book.setAvailable(false);
                System.out.println(memberId + " borrowed " + book.getTitle());
                return;
            }
        }
        System.out.println("Book not available or not found.");
    }

    public void returnBook(String ISBN) {
        for (Book book : books) {
            if (book.getISBN().equals(ISBN) && !book.isAvailable()) {
                book.setAvailable(true);
                System.out.println(book.getTitle() + " has been returned.");
                return;
            }
        }
        System.out.println("Book not found.");
    }

    public void listAvailableBooks() {
        for (Book book : books) {
            if (book.isAvailable()) {
                System.out.println(book);
            }
        }
    }
}

4. Main Class
public class Main {
    public static void main(String[] args) {
        Library library = new Library();

        // Adding books
        library.addBook(new Book("The Great Gatsby", "F. Scott Fitzgerald", "123456789"));
        library.addBook(new Book("1984", "George Orwell", "987654321"));

        // Adding members
        library.addMember(new Member("Alice", "M001"));
        library.addMember(new Member("Bob", "M002"));

        // Listing available books
        System.out.println("Available books:");
        library.listAvailableBooks();

        // Borrowing a book
        library.borrowBook("123456789", "M001");

        // Listing available books after borrowing
        System.out.println("\nAvailable books after borrowing:");
        library.listAvailableBooks();

        // Returning a book
        library.returnBook("123456789");

        // Listing available books after returning
        System.out.println("\nAvailable books after returning:");
        library.listAvailableBooks();
    }
}


