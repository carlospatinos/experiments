import java.util.*;

public class Main2 {
  public static void main(String[] args) {
	List<String> names = Arrays.asList("peter", "anna", "mike", "xenia");

	System.out.println("names before :" + names);

//	Collections.sort(names, new Comparator<String>() {
//	    @Override
//	    public int compare(String a, String b) {
//	        return a.compareTo(b);
//	    }
//	});

	Collections.sort(names, (a, b) -> a.compareTo(b) );
    System.out.println("names after :" + names);

  } 
}
