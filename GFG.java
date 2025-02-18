
public class GFG { 
  
    public void GreeksForGreeks() 
    { 
        throw new Greeks(); 
    } 
  
    public static void main(String[] args) 
    { 
        try { 
            new GFG().GreeksForGreeks(); 
        } 
         
        catch (Exception x) { 
            System.out.println( 
                "example of runtime exception"); 
        } 
    } 
} 
  
class Greeks extends RuntimeException { 
  
  
    public Greeks() 
    { 
        super(); 
    } 
}